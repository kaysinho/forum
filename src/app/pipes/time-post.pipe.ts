import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePost'
})
export class TimePostPipe implements PipeTransform {

  transform(value: Date): any {
    const today : Date = new Date();
    const since : Date  =  new Date(value)
    let diff = since.getTime() - today.getTime()
    diff = - diff / (1000 * 60)

    if (diff < 60 ) {
      diff = Math.round(diff)
      return diff == 1 ? `${diff} minuto` : `${diff} minutos`;
    }

    if (diff >=60 && diff < 1440) {
      diff = diff / 60;
      diff = Math.round(diff)
      return diff == 1 ? `${diff} hora` : `${diff} horas`;
    }

    if (diff >=1440 && diff < 10080) {
      diff = diff / (60 * 24);
      diff = Math.round(diff)

      return diff == 1 ? `${diff} dia` : `${diff} dias`;
    }

    if (diff >=10080) {
      diff = diff / (60 * 24 * 7);
      diff = Math.round(diff)

      return diff == 1 ? `${diff} semana` : `${diff} semanas`;
    }




  }

}
