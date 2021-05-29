import {LevelCategory} from '../page.model';
import {IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {HhDataDto} from './HhData.dto';
import {AdvantagesDto} from './advantages.dto';

export class CreatePageDto {
    @IsEnum(LevelCategory)
    firstCategory: LevelCategory;

    @IsString()
    secondCategory: string;

    @IsString()
    alias: string;

    @IsString()
    title: string;

    @IsString()
    category: string;

    @IsOptional()
    @Type(() => HhDataDto)
    hh?: HhDataDto;

    @IsArray()
    @ValidateNested()
    @Type(() => AdvantagesDto)
    advantages: AdvantagesDto[];

    @IsString()
    seoText: string;

    @IsString()
    tagsTitle: string;

    @IsArray()
    @IsString({each: true})
    tags: string[];
}