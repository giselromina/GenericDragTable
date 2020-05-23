import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
@Injectable()
export class DataService {
  dataList$ = this.http.get<any>('https://rickandmortyapi.com/api/character/').pipe(
  map(res => res.results),
  tap(data => console.log(data))
  );
  constructor( private http: HttpClient) {}
}
