import { Pipe, PipeTransform } from '@angular/core';
import { URLFOTO } from "../../config/url.servicio";

/**
 * Generated class for the UrlfotoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'urlfoto',
})
export class UrlfotoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
  	let url=URLFOTO+"storage/"+value;
    return url;
  }
}
