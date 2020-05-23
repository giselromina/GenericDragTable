import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
constructor(private dataService: DataService) {}
  name = 'Angular 5';
  dataService$ = this.dataService.dataList$;
}
