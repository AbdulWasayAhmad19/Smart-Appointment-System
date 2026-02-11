import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.services';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: SignupDto) {
        return this.authService.signup(dto);
    }

    @Get('test')
    test() {
        return { message: 'Auth controller working' };
    }

    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }
}
