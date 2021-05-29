import {IsEmail, IsString} from 'class-validator';
import {EMAIL_ERROR} from '../message.request';

export class CreateAuthDto {
    @IsEmail({require_tld: true}, {message: EMAIL_ERROR})
    login: string;

    @IsString()
    password: string;
}