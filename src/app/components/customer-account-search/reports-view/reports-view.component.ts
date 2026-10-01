import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StatusChangeHisotryComponent } from '../../../dailogs/status-change-hisotry/status-change-hisotry.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EditCustomerDetailsComponent } from '../../../dailogs/edit-customer-details/edit-customer-details.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reports-view',
  imports: [SharedModule, SharedFormsModule, MatSidenavModule, MatListModule, MatStepperModule, MatTabsModule, MatIconModule, MatIcon],
  templateUrl: './reports-view.component.html',
  styleUrl: './reports-view.component.scss'
})
export class ReportsViewComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _formBuilder = inject(FormBuilder);
  private readonly _dialoge: MatDialog = inject(MatDialog);
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
  private _router = inject(Router);
  isShowPoRemarks = signal<boolean>(false);
  ticketStatus: string | null = null; // Variable to store ticket status
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['Id','courierCompany', 'shipmentStatus', 'shipmentDate'];
  headers = ['Id','courierCompany', 'shipmentStatus', 'shipmentDate'];


  reportList = [
    {
      name: 'Order Journey',
      type: 'order_details',
      icon: 'orders',
    },
    {
      name: 'Customer Details',
      type: 'customer_details_section',
      icon: 'draft_orders',
    },
    {
      name: 'Order Details',
      type: 'order_details_section',
      icon: 'orders',
    },
    {
      name: 'Delivery Details(SCM)',
      type: 'scm_details',
      icon: 'orders',
    },
    {
      name: 'Courier Status',
      type: 'courier_status_details',
      icon: 'orders',
    },
  ];

  customerDetailsSectionList = signal<any[]>([
    {
      labelName: 'Identity Type',
      details: 'PASSPORT- B24111401'
    },
    {
      labelName: 'Full Name',
      details: 'TEST'
    },
    {
      labelName: 'Email Address',
      details: 'test@gmail.com'
    },
    {
      labelName: 'Gender',
      details: 'MALE'
    },
    {
      labelName: 'Date of Birth',
      details: '1999-12-31'
    },
    {
      labelName: 'Delivery Address Street Name',
      details: 'B-12 , YTL DATACENTER TWO'
    },
    {
      labelName: 'Delivery Address City',
      details: 'TANJONG KLING'
    },

    {
      labelName: 'Delivery Address State',
      details: 'MELAKA'
    },
    {
      labelName: 'Delivery Address Postcode',
      details: '75100'
    },
    {
      labelName: 'Courier Consignment Number',
      details: 'N/A'
    },
    {
      labelName: 'Contact Number (Home)',
      details: 'N/A'
    },

    {
      labelName: 'Contact Number (Office)',
      details: 'N/A'
    },
    {
      labelName: 'Force SIM Activation & Termination',
      details: 'N/A'
    },
    {
      labelName: 'Pending Reason',
      details: 'N/A'
    },
    {
      labelName: 'Device Serial Number',
      details: 'N/A'
    },
    {
      labelName: 'Closed Reason',
      details: 'N/A'
    },
    {
      labelName: 'Email Address',
      details: 'IOTEMAIL@YES.MY'
    },
    {
      labelName: 'Alternate Contact Number',
      details: '0149645776'
    },
  ]);

  selectedReport: any = null;

  ngOnInit(): void {
    // this.selectedReport = this.reportList[0];
    this.selectedReport = 'order_details'
    this._activatedRoute.paramMap.subscribe((params) => {
      this.ticketStatus = params.get('ticketStatus');
      console.log("Ticket Status:", this.ticketStatus);
    });

    this.dataSource = new MatTableDataSource<any>(
      [
        { Id: "T7555415", courierCompany: "GDEX", shipmentStatus: "delivered", shipmentDate: "2025-02-17 15:30:00"}
        
      ]
    );
  }

  onChipClick(selectedValue: string) {
    console.log(selectedValue);
    this.selectedReport = selectedValue;

  }


  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });


  showContent(item: any) {
    this.selectedReport = item;
  }

  navToStatusChangeHistory() {
    this._dialoge.open(StatusChangeHisotryComponent, {
      minWidth: '80vw',
      minHeight: '80vh',
      data: {

      },
    });
  }

  navToEdit() {
    this._dialoge.open(EditCustomerDetailsComponent, {
      minWidth: '80vw',
      minHeight: '80vh',
      data: {
        customerDetailsSectionDetails: this.customerDetailsSectionList()
      },
    })
  }

  navToMaps() {
    window.open(
      'https://www.google.com/maps/place/2%C2%B059\'41.0%22N+101%C2%B028\'19.3%22E/@2.9947302,101.4694516,17z/data=!3m1!4b1!4m4!3m3!8m2!3d2.9947302!4d101.4720265?entry=ttu',
      '_blank'
    );
  }

  poRemarks() {
    this.isShowPoRemarks.set(!this.isShowPoRemarks());
  }

}
