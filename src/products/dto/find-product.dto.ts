import {IsNumber, IsOptional, IsString} from 'class-validator';

export class FindProductDto {
    @IsString()
    category: string;

    @IsOptional()
    @IsNumber()
    limit: number;
}