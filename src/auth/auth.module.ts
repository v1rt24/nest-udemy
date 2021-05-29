import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {Auth} from './auth.model';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';

import {JwtModule} from '@nestjs/jwt';

@Module({
    imports: [
        SequelizeModule.forFeature([Auth]),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY || 'v1rt24',
            signOptions: {expiresIn: '1h'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {
}
