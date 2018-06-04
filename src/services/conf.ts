import { InjectionToken } from "@angular/core";

export let conf = new InjectionToken("conf");

declare var $;

export const AppConf = {
    lang: 'en',
    datetimeFormat: 'YYYY-MM-DD HH:mm',
    dateFormat: 'YYYY-MM-DD',
    hourFormat: 'HH:mm',

};
