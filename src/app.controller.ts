// 컨트롤러 : url을 가져와서 함수를 실행하는 파트

import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'welcome';
  }
}
