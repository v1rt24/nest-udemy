import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'; // для использования файла .env
import {DB_MYSQL} from './mysql';
import {AuthModule} from './auth/auth.module';
import {PageModule} from './page/page.module';
import {ProductsModule} from './products/products.module';
import {ReviewsModule} from './reviews/reviews.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        DB_MYSQL,
        AuthModule,
        PageModule,
        ProductsModule,
        ReviewsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
