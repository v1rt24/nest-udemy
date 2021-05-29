import {IsString} from 'class-validator';

export class AdvantagesDto {
    @IsString()
    title: string;

    @IsString()
    description: string;
}