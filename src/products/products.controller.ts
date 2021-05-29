import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {ProductsService} from './products.service';
import {Product} from './product.model';
import {CreateProductDto} from './dto/create-product.dto';
import {FindProductDto} from './dto/find-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {
    }

    @Post()
    create(@Body() dto: CreateProductDto): Promise<Product> {
        return this.productService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: CreateProductDto): Promise<[number, Product[]]> {
        return this.productService.update(id, dto);
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product> {
        return this.productService.getOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.productService.remove(id);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.OK)
    @Post('search')
    find(@Body() dto: FindProductDto): Promise<Product> {
        return this.productService.find(dto);
    }
}
