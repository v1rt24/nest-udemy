import {SequelizeModule} from '@nestjs/sequelize';
import {Auth} from './auth/auth.model';
import {Page} from './page/page.model';
import {Product} from './products/product.model';
import {Review} from './reviews/review.model';

export const DB_MYSQL = SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'courseNest',
    autoLoadModels: true,
    models: [
        Auth,
        Page,
        Product,
        Review,
    ],
});
