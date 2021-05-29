import {Column, Model, Table, DataType, HasMany} from 'sequelize-typescript';
import {Review} from '../reviews/review.model';

@Table
export class Product extends Model {
    @Column({type: DataType.TINYINT.UNSIGNED, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    image: string;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.FLOAT, allowNull: false})
    price: number;

    @Column({type: DataType.FLOAT, allowNull: true})
    oldPrice: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    credit: number;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @Column({type: DataType.STRING, allowNull: false})
    advantages: string;

    @Column({type: DataType.STRING, allowNull: false})
    disAdvantages: string;

    @Column({type: DataType.JSON, allowNull: false})
    categories: string[];

    @Column({type: DataType.JSON, allowNull: false})
    tags: string[];

    @Column({type: DataType.JSON, allowNull: false})
    characteristics: { name: string, value: string }[];

    // Связь с таблицей отзывов
    @HasMany(() => Review)
    reviews: Review[];
}