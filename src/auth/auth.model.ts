import {Column, Model, Table, DataType} from 'sequelize-typescript';

@Table
export class Auth extends Model {
    @Column({type: DataType.TINYINT.UNSIGNED, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    passwordHash: string;
}