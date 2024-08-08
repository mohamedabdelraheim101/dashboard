import { Component} from '@angular/core';

@Component({
  selector: 'app-jqx-grid-widget',
  templateUrl: './jqx-grid-widget.component.html',
  styleUrls: ['./jqx-grid-widget.component.scss']
})
export class JqxGridWidgetComponent {
  source: any;
  dataAdapter: any;
  columns: any[];

  constructor() {
    this.source = {
      localdata: [
        { Name: 'John Doe', Address: '123 Main St', Email: 'john.doe@example.com' },
        { Name: 'Jane Smith', Address: '456 Elm St', Email: 'jane.smith@example.com' }
      ],
      datatype: 'array',
      datafields: [
        { name: 'Name', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'Email', type: 'string' }
      ]
    };
    this.dataAdapter = new jqx.dataAdapter(this.source);

    
    this.columns = [
      { text: 'Name', datafield: 'Name', width: 150 },
      { text: 'Address', datafield: 'Address', width: 250 },
      { text: 'Email', datafield: 'Email', width: 200 },
      { text: 'Actions', datafield: 'Actions', cellsrenderer: this.renderActions.bind(this), width: 150 }
    ];
  }

  ngOnInit(): void {}

  renderActions(row: number, column: string, value: any): string {
    return `
      <button class="btn btn-primary btn-sm" onclick="editRow(${row})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteRow(${row})">Delete</button>
    `;
  }

  editRow(row: number): void {
    console.log(`Edit row ${row}`);
  }

  deleteRow(row: number): void {
    console.log(`Delete row ${row}`);
  }
}
