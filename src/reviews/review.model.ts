import {Column, Model, Table, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Product} from '../products/product.model';

@Table
export class Review extends Model {
    @Column({type: DataType.TINYINT.UNSIGNED, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    rating: number;

    // Связь с таблицей продуктов
    @ForeignKey(() => Product)
    @Column({type: DataType.TINYINT.UNSIGNED, allowNull: false})
    productId: number;

    @BelongsTo(() => Product)
    product: Product;
}