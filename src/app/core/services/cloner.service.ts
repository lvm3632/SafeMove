import { Injectable } from '@angular/core';
import * as clone from 'clone';

@Injectable({
  providedIn: 'any',
})
export class ClonerService {
  deepClone<T>(value: any) {
    return clone<T>(value);
  }
}
