import { Component, inject, signal } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-elevate-view',
  imports: [SharedModule, SharedFormsModule, MatSidenavModule,MatListModule,MatStepperModule,MatTabsModule,MatIconModule, MatIcon],
  templateUrl: './elevate-view.component.html',
  styleUrl: './elevate-view.component.scss'
})
export class ElevateViewComponent {
    private _activatedRoute = inject(ActivatedRoute);
    private _formBuilder = inject(FormBuilder);
    private readonly _dialoge: MatDialog = inject(MatDialog);
    private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
    private _router = inject(Router);


    customerDetailsSectionList:any =[
      {
        labelName:'Security Type',
        details:'MyKad'
      },
      {
        labelName:'Security Number',
        details:'980526106659'
      },
      {
        labelName:'Full Name',
        details:'JEREMIAH A/L OTHAYA KUMARAN'
      },
      {
        labelName:'Gender',
        details:'Male'
      },
      {
        labelName:'MSISDN',
        details:'0186286985'
      },
      {
        labelName:'Email',
        details:'obrmemail@gmail.com'
      },
      {
        labelName:'Date of Birth',
        details:'1999-12-31'
      },
      {
        labelName:'Email Sent',
        details:'False'
      },
      {
        labelName:'Address Line 1',
        details:'NO 44, JLN DATO ABDUL HAMID 22, TAMAN SRI SENTOSA'
      },
      {
        labelName:'Address Line 2',
        details:'N/A'
      },
      {
        labelName:'State',
        details:'SELANGOR'
      },
      {
        labelName:'City',
        details:'KLANG'
      },
      {
        labelName:'Postal Code',
        details:'41200'
      },
      {
        labelName:'Country',
        details:'Malaysia'
      },
      {
        labelName:'Registration Channel',
        details:'USSP'
      },
      {
        labelName:'Registration Date',
        details:'09-06-2022 09:44:53'
      },
      {
        labelName:'Verification Status',
        details:'InActive'
      },
      {
        labelName:'Verification Code',
        details:'N/A'
      },
      {
        labelName:'Verification Date',
        details:'09-06-2022 09:44:53'
      },
    ];

    elevateOrderDetailsList = signal<any[]>([
      {
        labelName:'Order Number',
        details:'YOSRCP22060900009'
      },
      {
        labelName:'Order Status',
        details:'2'
      },
      {
        labelName:'Delivery Status',
        details:'2'
      },
      {
        labelName:'Comments',
        details:'N/A'
      }
    ]);

    elevateContractDetailsList = signal<any[]>([
      {
        labelName:'Alternate Contact Name',
        details:'JEREMIAH A/L OTHAYA KUMARAN'
      },
      {
        labelName:'Contact Number',
        details:'ELVRCP22060900009'
      },
      {
        labelName:'Alternate Contact Number',
        details:'0187006901'
      },
      {
        labelName:'Contract Status',
        details:'1'
      },

      {
        labelName:'Contract Start Date',
        details:'09-06-2022 09:44:55'
      },
      {
        labelName:'Contract End Date',
        details:'09-06-2025 09:44:55'
      },
      {
        labelName:'Contract Signed Date',
        details:'09-06-2022 09:44:55'
      }
    ]);

    elevateProductDetailsList = signal<any[]>([
      {
        labelName:'Product Name',
        details:'LAVA N55'
      },
      {
        labelName:'Product Code',
        details:'800'
      },
      {
        labelName:'Status',
        details:'1'
      },
      {
        labelName:'Long Description',
        details:'Enjoy 36 month installment on your new smart phone.;*Subject to eligibility and only for MyKad and MyTentera holders'
      }
    ]);

    elevatePlanDetailsList = signal<any[]>([
      {
        labelName:'Plan Name',
        details:'Infinite Plus Standard LAVA N55'
      },
      {
        labelName:'Product Code',
        details:'800'
      },
      {
        labelName:'Long Description',
        details:'Unlimited Full Speed 5G + 4G data;Unlimited calls;40GB Hotspot data;FREE* 5G smartphone;Infinite+ is a 36 months contract;*Terms and conditions apply'
      }
    ]);

    elevateDeviceDetailsList = signal<any[]>([
      {
        labelName:'Device Code',
        details:'LAVA N55 Yellow'
      },
      {
        labelName:'Device Status',
        details:'1'
      },
      {
        labelName:'Device Name',
        details:'LAVA N55'
      },
      {
        labelName:'Long Description',
        details:'LAVA N55'
      }
    ]);
}
