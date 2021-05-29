import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Product} from './product.model';
import {CreateProductDto} from './dto/create-product.dto';
import {FindProductDto} from './dto/find-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product,
    ) {
    }

    async create(productDto: CreateProductDto): Promise<Product> {
        try {
            return this.productModel.create(productDto);
        } catch (error) {
            console.log(error);
        }
    }

    async update(id: string, dto: CreateProductDto): Promise<[number, Product[]]> {
        try {
            const product = await this.productModel.update(dto, {where: {id}});

            if (!product) {
                throw 'Продукт не найден';
            }

            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(id: string): Promise<Product> {
        try {
            return await this.productModel.findByPk(id);
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id: string): Promise<void> {
        try {
            await this.productModel.destroy({where: {id: id}});
        } catch (error) {
            console.log(error);
        }
    }

    async find(dto: FindProductDto): Promise<Product> {
        try {
            return;
        } catch (error) {
            throw error;
        }
    }
}
