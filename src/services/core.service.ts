import { Injectable, Inject } from '@angular/core';
import { conf, AppConf } from './conf';

@Injectable()
export class CoreService {
  constructor(@Inject(conf) private conf: any) {
  	
  }


}
