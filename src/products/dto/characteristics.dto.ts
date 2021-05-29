import {IsString} from 'class-validator';

export class CharacteristicsDto {
    @IsString()
    title: string;

    @IsString()
    value: string;
}