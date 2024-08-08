import { Component } from '@angular/core';
import { GridsterConfig,GridsterItem} from 'angular-gridster2';

@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.scss']
})
export class GridsterComponent {

  public options: GridsterConfig;
  public item1: GridsterItem;
  public item2: GridsterItem;
  public item3: GridsterItem;
  public item4: GridsterItem;
  public item5: GridsterItem;
  public item6: GridsterItem;

  constructor() {
    this.item1 = { x: 0, y: 0, rows: 4, cols: 7 };
    this.item2 = { x: 7, y: 0, rows: 4, cols: 5 };
    this.item3 = { x: 0, y: 4, rows: 5, cols: 8 };
    this.item4 = { x: 8, y: 4, rows: 3, cols: 4 };
    this.item5 = { x: 0, y: 9, rows: 4, cols: 4 };
    this.item6 = { x: 4, y: 9, rows: 4, cols: 8 };

    this.options = {
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,
      gridType: 'scrollVertical',
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
  }


}