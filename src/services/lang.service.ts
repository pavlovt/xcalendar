import { Injectable, Inject } from '@angular/core';
import { conf, AppConf } from './conf';
import langs from '../langs';

@Injectable()
export class LangService {
	langs = {}
  constructor(@Inject(conf) private conf: any) {
  	this.langs = langs;
  }

  get(name: string) {
  	console.log(this.conf.lang)
  	return langs[this.conf.lang][name] || name;
  }

}
