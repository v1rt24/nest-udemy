import {Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ReviewsService} from './reviews.service';
import {Review} from './review.model';
import {CreateReviewDto} from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
    constructor(private reviewService: ReviewsService) {
    }

    @UsePipes(new ValidationPipe())
    @Post()
    create(@Body() dto: CreateReviewDto): Promise<Review> {
        return this.reviewService.create(dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.reviewService.remove(id);
    }

    @Delete('byProdyct/:productId')
    getByProduct(@Param('productId') productId: string): Promise<void> {
        return this.reviewService.deleteByProductId(productId);
    }
}
