import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedFormsModule, SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-edit-customer-details',
  imports: [SharedModule, SharedFormsModule],
  templateUrl: './edit-customer-details.component.html',
  styleUrl: './edit-customer-details.component.scss'
})
export class EditCustomerDetailsComponent {
  isDataModified = signal(false);
  getDailogeType = signal<any>(null);
  retention_id = signal('');
  getCollectionId = signal('');
  private readonly _data = inject(MAT_DIALOG_DATA);
  private readonly _dialogRef = inject(MatDialogRef<EditCustomerDetailsComponent>);
  private readonly _snackBar = inject(MatSnackBar);
  getCustomerDetailsSectionDetails = signal<any[]>([]);

  private _fb = inject(FormBuilder);

  updateCustomerForm: FormGroup = this._fb.group({
    new_email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    alternate_mobile_number: ['', [Validators.pattern('^[0-9]{9,15}$')]],
    contact_number_home: ['', [Validators.pattern('^[0-9]{9,15}$')]],
    contact_number_office: ['', [Validators.pattern('^[0-9]{9,15}$')]],
    address_NRIC_street_name: ['',],
    address_as_per_NRIC_city: ['',],
    address_as_per_NRIC_state: ['',],
    address_as_per_NRIC_postal: ['',],
    delivery_address_street_name: ['',],
    delivery_address_city: ['',],
    delivery_address_state: ['',],
    delivery_address_postal: ['',],
  });


  constructor() {
    this.getCustomerDetailsSectionDetails.set(this._data.customerDetailsSectionDetails);
    const getData = this.getCustomerDetailsSectionDetails();
    console.log(getData);
    this.updateCustomerForm.patchValue({
      new_email: 'test@gmail.com',
      alternate_mobile_number: '0149645776',
      contact_number_home: '',
      contact_number_office: '',
      address_NRIC_street_name: 'NO 64 HALA KELEDANG EMAS 4 TAMAN KELEDANG EMAS 30100 IPOH PERAK',
      address_as_per_NRIC_city: 'KUALA LUMPUR',
      address_as_per_NRIC_state: 'WILAYAH PERSEKUTUAN-KUALA LUMPUR',
      address_as_per_NRIC_postal: '518501',
      delivery_address_street_name: 'B-12 , YTL DATACENTER TWO',
      delivery_address_city: 'TANJONG KLING',
      delivery_address_state: 'MELAKA',
      delivery_address_postal: '75100',
    });
  }

  UpdateData() {
    console.log(this.updateCustomerForm.value);
  }

  closeDialoge() {
    this._dialogRef.close(this.isDataModified());
  }

}
