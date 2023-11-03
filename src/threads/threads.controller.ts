import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Threads')
@Controller('v1/api/threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) { }

  @Post(':cid')
  create(@Param('cid') cid: number, @Body() createThreadDto: CreateThreadDto) {
    return this.threadsService.create(cid, createThreadDto);
  }

  @Get()
  findAll() {
    return this.threadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.threadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThreadDto: UpdateThreadDto) {
    return this.threadsService.update(+id, updateThreadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.threadsService.remove(+id);
  }
}
