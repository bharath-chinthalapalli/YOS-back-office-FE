import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CsaInfoComponent } from '../../../dailogs/csa-info/csa-info.component';

@Component({
  selector: 'app-customer-account-search-dashboard',
  providers: [provideNativeDateAdapter()], 
  imports: [SharedFormsModule,SharedModule,MatFormFieldModule,MatInputModule,MatTableModule, MatPaginatorModule,MatIcon ],
  templateUrl: './customer-account-search-dashboard.component.html',
  styleUrl: './customer-account-search-dashboard.component.scss'
})
export class CustomerAccountSearchDashboardComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private _router = inject(Router);
  private _fb = inject(FormBuilder);
  private readonly _dialoge: MatDialog = inject(MatDialog);
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
  showMoreStatus:boolean=false;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['NRIC', 'Mobile', 'OrderNumber', 'IMEI', 'RMA', 'OrderDate', 'ShoppeId', 'TicketStatus', 'ProcessStatus'];
  headers = ['NRIC', 'Mobile', 'OrderNumber', 'IMEI', 'RMA', 'OrderDate', 'ShoppeId', 'TicketStatus', 'ProcessStatus'];

 
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
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ticketStatusList=signal<any[]>([
    {id: '1', status: 'New'},
    {id: '2', status: 'In Progress'},
    {id: '3', status: 'Pending'},
    {id: '4', status: 'Completed'},
    {id: '5', status: 'Auto Verified'},
    {id: '6', status: 'Info Mismatched'},
    {id: '7', status: 'Closed'},
    {id: '8', status: 'Auto Cancellation'},
    {id: '9', status: 'Activated'},
    {id: '10', status: 'Backend Account Creation'},
    {id: '11', status: 'Address Check Failed'},
    {id: '12', status: 'Undelivered & Canceled'},
    {id: '13', status: 'Pending Fraud Analysis'},
    {id: '14', status: 'Canceled Fraud Order'},
    {id: '15', status: 'Duplicate Order'},
    {id: '16', status: 'Testing Team Order'},
    {id: '17', status: 'Pre Orders'},
    {id: '18', status: 'LFH Uni Review'},
    {id: '19', status: 'Refund'},
  ]);

  yosStatusList=signal<any[]>([
    {id: '1', status: 'New'},
    {id: '2', status: 'In Progress'},
    {id: '3', status: 'Canceled'},
    {id: '4', status: 'Shipped'},
    {id: '5', status: 'Delivered'},
    {id: '6', status: 'Completed'},
    {id: '7', status: 'Returned'},
    {id: '8', status: 'Hold'},
    {id: '9', status: 'Unsuccessfull Payment'},
    {id: '10', status: 'Backend Account Creation'},
    {id: '11', status: 'Existing Customer Enrollment'},
    {id: '12', status: 'Terminated'},
    {id: '13', status: 'MNP Initiator'},
    {id: '14', status: 'MNP Initiated'},
    {id: '15', status: 'Refund'},
    {id: '16', status: 'Payment Initiated'}
  ]);


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(
      [
        { NRIC: "T7555415", Mobile: "0185969878", OrderNumber: "ACEP2411262000030577", IMEI: "N/A",RMA:"Not Applied", OrderDate: "2024-11-26 17:43:44" ,ShoppeId: "N/A",TicketStatus: "auto verified",ProcessStatus: "-" },
        { NRIC: "B24111404", Mobile: "0185969878", OrderNumber: "ACEP2411262000030577", IMEI: "N/A",RMA:"Not Applied", OrderDate: "2024-11-26 17:43:44" ,ShoppeId: "N/A",TicketStatus: "address check failed",ProcessStatus: "-"},
        { NRIC: "T7555415", Mobile: "0112223338", OrderNumber: "ACEP2411262000030577", IMEI: "N/A",RMA:"Not Applied", OrderDate: "2024-11-26 17:43:44",ShoppeId: "N/A",TicketStatus: "new",ProcessStatus: "-" },
        { NRIC: "B24111401", Mobile: "0112223338", OrderNumber: "YWF2411212000030484", IMEI: "N/A",RMA:"Not Applied", OrderDate: "2024-11-26 17:43:44",ShoppeId: "N/A",TicketStatus: "refund",ProcessStatus: "-" },
        { NRIC: "T7555415", Mobile: "0112223338", OrderNumber: "ACEP2411262000030577", IMEI: "N/A",RMA:"Not Applied", OrderDate: "2024-11-26 17:43:44",ShoppeId: "N/A",TicketStatus: "auto verified",ProcessStatus: "-" },
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
  orderView(item:any) {
    const ticketStatus = item.TicketStatus
    console.log(ticketStatus)
    this._router.navigate(['/cas/reports-view',ticketStatus ])
  }
  elevateView() {
    this._router.navigate(['/cas/elevate-view' ])
  }
  ToggleMoreStatus(){
    this.showMoreStatus = !this.showMoreStatus;
  }
  infoDailog(){
    this._dialoge.open(CsaInfoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
  
      },
    });
  }
}
