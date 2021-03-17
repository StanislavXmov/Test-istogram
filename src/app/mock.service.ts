import { Injectable } from '@angular/core';
import {Subject, timer} from 'rxjs';

export interface MockData {
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class MockService {
  start = 0;
  repeat = 1000;
  dataBlocks = 8;
  dataArr: MockData[] = [];
  data = new Subject<MockData[]>();
  generateData(): MockData {
    return {value: Math.floor(Math.random() * 500)};
  }
  createData$(): void {
    const data$ = timer(this.start, this.repeat)
      .subscribe(() => {
        this.dataArr = new Array(this.dataBlocks).fill(null).map(this.generateData);
        this.data.next(this.dataArr);
      });
  }
  createDataOnce(): MockData[] {
    return new Array(this.dataBlocks).fill(null).map(this.generateData);
  }
}
