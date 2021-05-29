import {Column, Model, Table, DataType} from 'sequelize-typescript';
import {HhDataDto} from './dto/HhData.dto';
import {AdvantagesDto} from './dto/advantages.dto';

export enum LevelCategory {
    Courses,
    Services,
    Books,
    Products
}

@Table
export class Page extends Model {
    @Column({type: DataType.TINYINT.UNSIGNED, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.ENUM('Courses', 'Services', 'Books', 'Products'), allowNull: false})
    firstCategory: LevelCategory;

    @Column({type: DataType.STRING, allowNull: false})
    secondCategory: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    alias: string;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    category: string;

    @Column({type: DataType.JSON})
    hh?: HhDataDto;

    @Column({type: DataType.JSON, allowNull: false})
    advantages: AdvantagesDto[];

    @Column({type: DataType.STRING, allowNull: false})
    seoText: string;

    @Column({type: DataType.STRING, allowNull: false})
    tagsTitle: string;

    @Column({type: DataType.JSON, allowNull: false})
    tags: string[];
}