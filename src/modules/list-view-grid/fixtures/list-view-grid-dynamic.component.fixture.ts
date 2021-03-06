import { Component } from '@angular/core';

@Component({
  selector: 'sky-test-cmp',
  template: require('./list-view-grid-dynamic.component.fixture.html')
})
export class ListViewGridDynamicTestComponent {
  public displayedColumns: Array<string> = ['name', 'email'];
  public data: Array<any>;
  public gridColumns: Array<any>;
  constructor() {
    this.data = [{ 'id': 1, 'name': 'Windstorm', 'email': 'windstorm@gmail.com' },
    { 'id': 2, 'name': 'Bombasto', 'email': 'bombasto@gmail.com' },
    { 'id': 3, 'name': 'Magneta', 'email': 'magenta@gmail.com' },
    { 'id': 4, 'name': 'Tornado', 'email': 'tornado@gmail.com' }];
    this.gridColumns = [{ 'id': 1, 'field': 'name', 'heading': 'Name Initial' },
    { 'id': 2, 'field': 'email', 'heading': 'Email Initial' }];
  }

  public changeColumns() {
    this.gridColumns = [{ 'id': 1, 'field': 'name', 'heading': 'Name' },
    { 'id': 2, 'field': 'email', 'heading': 'Email' }];
  }
}
