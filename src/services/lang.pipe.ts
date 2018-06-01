import { Pipe, PipeTransform } from '@angular/core';
import { LangService } from './lang.service';

@Pipe({
    name: 't',
    pure: false // add in this line, update value when we change language
})

export class TranslatePipe implements PipeTransform {

    constructor(private lang: LangService) { }

    transform(value: string, args: string | string[]): any {
        if (!value) return;
        return this.lang.get(value.toLowerCase());
    }
}