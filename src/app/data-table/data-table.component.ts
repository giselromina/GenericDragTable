import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { APIService } from '../services/api.service';

@Component({
  selector: 'data-collection',
  styleUrls: ['./data-table.component.css'],
  templateUrl: './data-table.component.html',
})

export class DataCollectionComponent {
  dataSubject = new BehaviorSubject<any[]>([]);
  dataSource = new MyDataSource(this.dataSubject);
  @Input() set data(values: any[]) { // Because AsyncPipe is used
    if (values) {
      this.dataSubject.next(values);
    }
  }
  @Input() displayedColumns: any[] = [];

  constructor() {}
 }

export class MyDataSource extends DataSource<any[]> {

  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }

  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect (  ): void {

  }

}

