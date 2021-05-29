import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Review} from './review.model';
import {CreateReviewDto} from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectModel(Review)
        private reviewModel: typeof Review,
    ) {
    }

    async create(dto: CreateReviewDto): Promise<Review> {
        try {
            return await this.reviewModel.create(dto);
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id: string): Promise<void> {
        try {
            await this.reviewModel.destroy({where: {id}});
        } catch (error) {
            console.log(error);
        }
    }

    async deleteByProductId(productId: string): Promise<void> {
        try {
            await this.reviewModel.destroy({
                where: {
                    productId,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
}
