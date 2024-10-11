import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class SvgLoadStrategy {
  abstract load(url: string | Observable<string>): Observable<string>;
  config(url: string): Observable<string> {
    return of(url)
  };
}
