import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  name: string = '小明健身房'
  version: string = '4.0.1'
  code: string ='imeepos_coach'
  icon: string =  ''
  //首页项目
  index: any = []
  //个人中心项目
  home: any = []
  //发布项目
  post: any = []

  constructor() { }

}
