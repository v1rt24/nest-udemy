import {IsNumber, IsString, Max, Min} from 'class-validator';

export class CreateReviewDto {
    @IsString({message: 'Заполните поле'})
    name: string;

    @IsString({message: 'Заполните поле'})
    title: string;

    @IsString({message: 'Заполните поле'})
    description: string;

    @Min(1, {message: 'Рейтинг не может быть меньше 1'})
    @Max(5, {message: 'Рейтинг не может быть больше 5'})
    @IsNumber({allowInfinity: true}, {message: 'Введите рейтинг'})
    rating: number;

    @IsNumber({allowInfinity: true}, {message: 'Введите id продукта'})
    productId: number;
}