import { InjectionToken } from "@angular/core";

export let conf = new InjectionToken("conf");

declare var $;

export const AppConf = {
    lang: 'en'
};
