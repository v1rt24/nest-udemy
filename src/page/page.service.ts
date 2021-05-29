import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Page} from './page.model';
import {CreatePageDto} from './dto/create-page.dto';
import {UpdatePageDto} from './dto/update-page.dto';
import {FindPageDto} from './dto/find-page.dto';

@Injectable()
export class PageService {
    constructor(
        @InjectModel(Page)
        private pageModel: typeof Page,
    ) {
    }

    async create(dto: CreatePageDto): Promise<Page> {
        try {
            return await this.pageModel.create(dto);
        } catch (error) {
            if (error.parent.errno === 1062) {
                throw new BadRequestException(`Такой alias '${dto.alias}' уже существует`);
            }
        }
    }

    async update(id: string, dto: UpdatePageDto): Promise<Page> {
        try {
            const pageUpdate = await this.pageModel.findByPk(id);

            if (!pageUpdate) {
                throw 'Такого id нет';
            }

            return await pageUpdate.update(dto);
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    async getById(id: string): Promise<Page> {
        try {
            const page = await this.pageModel.findByPk(id);

            if (!page) {
                throw 'Страница не найдена';
            }

            return page;
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    async getAlias(alias: string): Promise<Page> {
        try {
            const pageAlias = await this.pageModel.findOne({where: {alias}});

            if (!pageAlias) {
                throw 'Такой alias не найден';
            }

            return pageAlias;
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    async remove(id: string): Promise<void> {
        try {
            const del = await this.pageModel.destroy({where: {id}});

            if (!del) {
                throw 'Такого id нет';
            }
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    async find(dto: FindPageDto): Promise<Page[]> {
        try {
            return;
        } catch (error) {
            throw error;
        }
    }
}
