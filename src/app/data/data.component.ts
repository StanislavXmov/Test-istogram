import {Component, Input, OnInit} from '@angular/core';
import {MockData} from '../mock.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  @Input() mockData: MockData;
}
