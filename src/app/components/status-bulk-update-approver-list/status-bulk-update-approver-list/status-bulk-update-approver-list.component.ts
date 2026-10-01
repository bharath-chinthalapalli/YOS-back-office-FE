import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-status-bulk-update-approver-list',
  imports: [SharedFormsModule,SharedModule,MatFormFieldModule,MatInputModule,MatTableModule, MatPaginatorModule,MatIcon ],
  templateUrl: './status-bulk-update-approver-list.component.html',
  styleUrl: './status-bulk-update-approver-list.component.scss'
})
export class StatusBulkUpdateApproverListComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private _router = inject(Router);
  private _fb = inject(FormBuilder);

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo', 'OrderId', 'OrderDate', 'YESID', 'TicketStatus' ];

  headers = ['SNo', 'OrderId', 'OrderDate', 'YESID', 'TicketStatus'];


  
  stepSynchTypeList: any[] = [
    {value: 'auto-verified', viewValue: 'Auto Verified'},
    {value: 'ingo-mismatched', viewValue: 'Info Mismatched'}
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(
      []
    );
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
