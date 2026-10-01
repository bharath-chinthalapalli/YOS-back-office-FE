import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-status-bulk-update',
  imports: [SharedFormsModule,SharedModule,MatFormFieldModule,MatInputModule,MatTableModule, MatPaginatorModule,MatIcon ],
  templateUrl: './status-bulk-update.component.html',
  styleUrl: './status-bulk-update.component.scss'
})
export class StatusBulkUpdateComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private _router = inject(Router);
  private _fb = inject(FormBuilder);

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo', 'OrderId', 'OrderDate', 'YESID', 'TicketStatus' ];

  headers = ['SNo', 'OrderId', 'OrderDate', 'YESID', 'TicketStatus'];

  statusList=[
    {
      statusName:'Total Accounts',
      percentage:'10%',
      percentageType:'high',
      status:'',
      statusCount:'120'
    },
    {
      statusName:'Account Status',
      percentage:'10%',
      percentageType:'',
      status:'Completed',
      statusCount:'100'
    },
    {
      statusName:'Account Status',
      percentage:'10%',
      percentageType:'',
      status:'Pending',
      statusCount:'10'
    },
    {
      statusName:'Account Status',
      percentage:'10%',
      percentageType:'',
      status:'Rejected',
      statusCount:'10'
    }
  ];
  stepSynchTypeList: any[] = [
    {value: 'auto-verified', viewValue: 'Auto Verified'},
    {value: 'ingo-mismatched', viewValue: 'Info Mismatched'}
  ];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>([]);
  }
 
  navToCreate() {
    this._router.navigate(['/'])
  }
  edit() {
    this._router.navigate(['/'])
  }
  view() {
    this._router.navigate(['/reports-view'])
  }
}
