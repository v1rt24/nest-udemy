import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {PageService} from './page.service';
import {Page} from './page.model';
import {CreatePageDto} from './dto/create-page.dto';
import {UpdatePageDto} from './dto/update-page.dto';
import {FindPageDto} from './dto/find-page.dto';

@Controller('page')
export class PageController {
    constructor(private pageService: PageService) {
    }

    @Post()
    create(@Body() dto: CreatePageDto): Promise<Page> {
        return this.pageService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdatePageDto): Promise<Page> {
        return this.pageService.update(id, dto);
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Page> {
        return this.pageService.getById(id);
    }

    @Get('byAlias/:alias')
    getAlias(@Param('alias') alias: string): Promise<Page> {
        return this.pageService.getAlias(alias);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.pageService.remove(id);
    }

    @UsePipes(new ValidationPipe())
    @Post('search')
    find(@Body() dto: FindPageDto): Promise<Page[]> {
        return this.pageService.find(dto);
    }
}
