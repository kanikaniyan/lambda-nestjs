import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello1')
  getHello1(): string {
    return this.appService.getHello() + ' 123';
  }

  @Get('hello2')
  getHello2(): string {
    return this.appService.getHello() + ' 124';
  }

  @Get('hello3')
  getHello3(): string {
    return this.appService.getHello() + ' 125';
  }

  @Get('hello4')
  getHello4(): string {
    return this.appService.getHello() + ' 126';
  }
}
