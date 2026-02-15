import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async signup(dto: SignupDto) {
        console.log("ssssssssssssss", dto);
        // Hash password with bcrypt
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        try {
            // Create user in PostgreSQL via Prisma
            const user = await this.usersService.create({
                email: dto.email,
                name: dto.name,
                password: hashedPassword,
            });

            const payload = { userId: user.id, email: user.email };
            return {
                message: 'User registered successfully',
                access_token: this.jwtService.sign(payload),
            };
        } catch (error) {
            // Re-throw ConflictException from UsersService
            if (error instanceof ConflictException) {
                throw error;
            }
            throw error;
        }
    }

    async login(dto: LoginDto) {
        // Find user in PostgreSQL via Prisma
        const user = await this.usersService.findByEmail(dto.email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Compare password with bcrypt hashed password from database
        const passwordValid = await bcrypt.compare(dto.password, user.password);
        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { userId: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
