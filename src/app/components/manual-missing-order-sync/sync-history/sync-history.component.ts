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
  selector: 'app-sync-history',
  imports: [SharedFormsModule,SharedModule,MatFormFieldModule,MatInputModule,MatTableModule, MatPaginatorModule,MatIcon ],
  templateUrl: './sync-history.component.html',
  styleUrl: './sync-history.component.scss'
})
export class SyncHistoryComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private _router = inject(Router);
  private _fb = inject(FormBuilder);

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo','ListOfOrders','SyncType','SyncDoneBy','SyncDate'];
  headers: string[] = ['SNo','ListOfOrders','SyncType','SyncDoneBy','SyncDate'];

  
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(
      [
        { SNo: "1", ListOfOrders: "YEP2410162000029839,YWF2410212000030003 : YEP2410162000029839,YWF2410212000030003 : Not found in YOS", SyncType: "YOS to STEP Orders Sync	", SyncDoneBy: "raghava.yaddanapudi	",SyncDate:"2024-10-29,18:40:52"},
        { SNo: "2", ListOfOrders: "YEP2410162000029839,YWF2410212000030003 : YEP2410162000029839,YWF2410212000030003 : Not found in YOS", SyncType: "YOS to STEP Orders Sync	", SyncDoneBy: "raghava.yaddanapudi	",SyncDate:"2024-10-29,18:40:52"},
        { SNo: "3", ListOfOrders: "YEP2410162000029839,YWF2410212000030003 : YEP2410162000029839,YWF2410212000030003 : Not found in YOS", SyncType: "YOS to STEP Orders Sync	", SyncDoneBy: "raghava.yaddanapudi	",SyncDate:"2024-10-29,18:40:52"},
        { SNo: "4", ListOfOrders: "YEP2410162000029839,YWF2410212000030003 : YEP2410162000029839,YWF2410212000030003 : Not found in YOS", SyncType: "YOS to STEP Orders Sync	", SyncDoneBy: "raghava.yaddanapudi	",SyncDate:"2024-10-29,18:40:52"},
        { SNo: "5", ListOfOrders: "YEP2410162000029839,YWF2410212000030003 : YEP2410162000029839,YWF2410212000030003 : Not found in YOS", SyncType: "YOS to STEP Orders Sync	", SyncDoneBy: "raghava.yaddanapudi	",SyncDate:"2024-10-29,18:40:52"}
      ]
    );
    // this.filterSearch();
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
