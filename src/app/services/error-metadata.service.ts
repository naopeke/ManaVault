import { Injectable, ErrorHandler } from '@angular/core';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetadataService implements ErrorHandler {

  public handleError(error: any):void{
    const date = new Date()
    console.error({
      timestamp: date.toISOString(),
      message: error.message,
      zone: error.zonee
    })
  }
}
