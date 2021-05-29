import {Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from './auth.service';
import {Auth} from './auth.model';
import {CreateAuthDto} from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UsePipes(new ValidationPipe())
    @Post('register')
    register(@Body() userDto: CreateAuthDto): Promise<{ token: string }> {
        return this.authService.register(userDto);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() userDto: CreateAuthDto): Promise<{ token: string }> {
        return this.authService.login(userDto);
    }
}
