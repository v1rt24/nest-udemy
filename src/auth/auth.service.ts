import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Auth} from './auth.model';
import {CreateAuthDto} from './dto/create-auth.dto';
import {REGISTER_ERROR, USER_LOGIN} from './message.request';

import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Auth)
        private authModel: typeof Auth,
        private jwtService: JwtService,
    ) {
    }

    async register(userDto: CreateAuthDto): Promise<{ token: string }> {
        try {
            const candidate = await this.findUser(userDto.login);

            if (candidate) {
                throw 'Пользователь с такой почтой уже существует';
            }

            const passwordHash = await bcrypt.hash(userDto.password, 10);
            const user = await this.authModel.create({email: userDto.login, passwordHash});
            return this.generateToken(user.email, user.passwordHash);
        } catch (error) {
            throw new BadRequestException(REGISTER_ERROR || error);
        }
    }

    async login(userDto: CreateAuthDto): Promise<{ token: string }> {
        try {
            const user = await this.validateUser(userDto.login, userDto.password);
            return this.generateToken(user.email, user.passwordHash);
        } catch (error) {
            throw new UnauthorizedException({
                message: error,
            });
        }
    }

    async validateUser(email: string, password: string): Promise<any> {
        try {
            const user = await this.findUser(email);
            if (!user) {
                throw USER_LOGIN;
            }

            const passwordValid = await bcrypt.compare(password, user.passwordHash);
            if (!passwordValid) {
                throw USER_LOGIN;
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    private generateToken(email: string, password: string) {
        console.log(email, password);
        return {
            token: this.jwtService.sign({email, password}),
        };
    }

    private async findUser(email: string) {
        return await this.authModel.findOne({where: {email}});
    }
}
