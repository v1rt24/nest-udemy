import {IsString, IsNumber, IsOptional, IsArray, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

import {CharacteristicsDto} from './characteristics.dto';

export class CreateProductDto {
    @IsString({message: 'Выберете картинку'})
    image: string;

    @IsString({message: 'Введите заголовок'})
    title: string;

    @IsNumber({allowInfinity: true}, {message: 'Введите стоимость'})
    price: number;

    @IsOptional()
    @IsNumber({allowInfinity: true}, {message: 'Введите стоимость'})
    oldPrice?: number;

    @IsNumber({allowInfinity: true}, {message: 'Введите кредит'})
    credit: number;

    @IsString({message: 'Введите описание'})
    description: string;

    @IsString()
    advantages: string;

    @IsString()
    disAdvantages: string;

    @IsArray()
    @IsString({each: true})
    categories: string[];

    @IsArray()
    @IsString({each: true})
    tags: string[];

    // Массив объектов
    @IsArray()
    @ValidateNested() // говорит что нужно зайти в массив и проволидировать каждый объект
    @Type(() => CharacteristicsDto) // указываем тип. подключаем из класса 'class-transformer'
    characteristics: CharacteristicsDto[];
}