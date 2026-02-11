import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import net from 'node:net';

async function isPortAvailable(port: number): Promise<boolean> {
  return await new Promise((resolve) => {
    const tester = net
      .createServer()
      .once('error', () => resolve(false))
      .once('listening', () => {
        tester.close(() => resolve(true));
      })
      .listen(port);
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const basePort = Number.parseInt(process.env.PORT ?? '', 10) || 3000;
  const maxAttempts = 10;
  for (let i = 0; i < maxAttempts; i++) {
    const port = basePort + i;
    try {
      const available = await isPortAvailable(port);
      if (!available) continue;
      await app.listen(port);
      logger.log(`Application is running on: http://localhost:${port}`);
      return;
    } catch (err: any) {
      if (err?.code === 'EADDRINUSE') continue;
      throw err;
    }
  }

  throw new Error(
    `Could not start server: ports ${basePort}-${basePort + maxAttempts - 1} are in use.`,
  );
}
bootstrap();
