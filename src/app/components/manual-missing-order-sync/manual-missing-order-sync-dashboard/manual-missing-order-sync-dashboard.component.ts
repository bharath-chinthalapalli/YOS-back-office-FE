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
  selector: 'app-manual-missing-order-sync-dashboard',
  imports: [SharedFormsModule,SharedModule,MatFormFieldModule,MatInputModule,MatTableModule, MatPaginatorModule,MatIcon],
  templateUrl: './manual-missing-order-sync-dashboard.component.html',
  styleUrl: './manual-missing-order-sync-dashboard.component.scss'
})
export class ManualMissingOrderSyncDashboardComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private _router = inject(Router);
  private _fb = inject(FormBuilder);

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo', 'OrderId', 'OrderDate', 'YESID','DoNo', 'YOSStatus'];

  headers = ['SNo', 'OrderId', 'OrderDate', 'YESID','DoNo', 'YOSStatus'];
  
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
  stepSyncTypeList: any[] = [
    {value: 'YOS to STEP Orders Sync', viewValue: 'YOS to STEP Orders Sync'},
    {value: 'YOS to STEP Address Update', viewValue: 'YOS to STEP Address Update'},
    {value: 'SCM to STEP SO DO PO Sync', viewValue: 'SCM to STEP SO DO PO Sync'},
  ];
  selectedToppings: any;
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>([]);
    // this.dataSource = new MatTableDataSource<any>(
    //   [
    //     { pdcDate: "01-27-2024", yesID: "2024-01-234567", simSerialNumber: "01234567812345", type: "Type_1",ageingDay:"2024-01-27", accountStatus: "Completed" },
    //     { pdcDate: "01-27-2024", yesID: "2024-01-234567", simSerialNumber: "01234567812345", type: "Type_1",ageingDay:"2024-01-27", accountStatus: "Completed" },
    //     { pdcDate: "01-27-2024", yesID: "2024-01-234567", simSerialNumber: "01234567812345", type: "Type_1",ageingDay:"2024-01-27", accountStatus: "Processing" },
    //     { pdcDate: "01-27-2024", yesID: "2024-01-234567", simSerialNumber: "01234567812345", type: "Type_1",ageingDay:"2024-01-27", accountStatus: "Completed" },
    //     { pdcDate: "01-27-2024", yesID: "2024-01-234567", simSerialNumber: "01234567812345", type: "Type_1",ageingDay:"2024-01-27", accountStatus: "Rejected" },
        
        
    //   ]
    // );
    // this.filterSearch();
  }
 
  navToCreate() {
    this._router.navigate(['/'])
  }
  edit() {
    this._router.navigate(['/'])
  }
  view() {
    this._router.navigate(['/'])
  }
  navToSyncHistory(){
    this._router.navigate(['/manual-missing-order-sync/sync-history'])
  }

}
