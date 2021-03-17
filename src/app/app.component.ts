import {Component, OnInit} from '@angular/core';
import {MockData, MockService} from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  height = 600;
  gridHeight = 50;
  data: MockData[];
  blocks: null[];
  grid: number[];
  constructor(private mockService: MockService) {
  }
  ngOnInit(): void {
    this.blocks = new Array(this.mockService.dataBlocks).fill(null);
    this.grid = new Array(this.height / this.gridHeight)
      .fill(null)
      .map((_, i) => this.gridHeight * i);
    this.mockService.data.subscribe(d => {
      this.data = d;
    });
    this.mockService.createData$();
    // this.data = this.mockService.createDataOnce();
  }
}
