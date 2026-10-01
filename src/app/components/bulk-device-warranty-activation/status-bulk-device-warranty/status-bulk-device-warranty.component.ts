import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-status-bulk-device-warranty',
  providers: [provideNativeDateAdapter()],
  imports: [SharedFormsModule, SharedModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatIcon],
  templateUrl: './status-bulk-device-warranty.component.html',
  styleUrl: './status-bulk-device-warranty.component.scss'
})
export class StatusBulkDeviceWarrantyComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private _router = inject(Router);
  private _fb = inject(FormBuilder);
  private readonly _dialoge: MatDialog = inject(MatDialog);
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
  showMoreStatus: boolean = false;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo','ItemDesc','ProdID','ProductGroup','WarrantyStartDate','TransferStockLocation','WarrantyPeriodMonth','UploadDate','FileName','Status','Description'];
  headers: any[] = ['SNo','ItemDesc','ProdID','ProductGroup','WarrantyStartDate','TransferStockLocation','WarrantyPeriodMonth','UploadDate','FileName','Status','Description'];

  filterForm: FormGroup = this._fb.group({
    customer_child_NRIC: [''],
    order_number: [''],
    start_date: [''],
    end_date: [''],
  })
  

  stepSynchTypeList: any[] = [
    {value: 'auto-verified', viewValue: 'Auto Verified'},
    {value: 'ingo-mismatched', viewValue: 'Info Mismatched'}
  ];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(
      [
        { SNo: "1", ItemDesc: "Apple IPhone 14 128GB Purple	", ProdID: "YESU00474342", ProductGroup: "12",WarrantyStartDate:"2024-01-27", TransferStockLocation: "4065218",WarrantyPeriodMonth: "12",UploadDate: "2024-10-10",FileName: "Bulk_Device_Warranty_Activation_template", Status: "valid",Description: "Active",},
        { SNo: "2", ItemDesc: "Apple IPhone 14 128GB Purple	", ProdID: "YESU00474342", ProductGroup: "12",WarrantyStartDate:"2024-01-27", TransferStockLocation: "4065218",WarrantyPeriodMonth: "12",UploadDate: "2024-10-10",FileName: "Bulk_Device_Warranty_Activation_template", Status: "valid",Description: "Active",},
        { SNo: "3", ItemDesc: "Apple IPhone 14 128GB Purple	", ProdID: "YESU00474342", ProductGroup: "12",WarrantyStartDate:"2024-01-27", TransferStockLocation: "4065218",WarrantyPeriodMonth: "12",UploadDate: "2024-10-10",FileName: "Bulk_Device_Warranty_Activation_template", Status: "valid",Description: "Active",},
        { SNo: "3", ItemDesc: "Apple IPhone 14 128GB Purple	", ProdID: "YESU00474342", ProductGroup: "12",WarrantyStartDate:"2024-01-27", TransferStockLocation: "4065218",WarrantyPeriodMonth: "12",UploadDate: "2024-10-10",FileName: "Bulk_Device_Warranty_Activation_template", Status: "in-valid",Description: "Active",},
        { SNo: "4", ItemDesc: "Apple IPhone 14 128GB Purple	", ProdID: "YESU00474342", ProductGroup: "12",WarrantyStartDate:"2024-01-27", TransferStockLocation: "4065218",WarrantyPeriodMonth: "12",UploadDate: "2024-10-10",FileName: "Bulk_Device_Warranty_Activation_template", Status: "valid",Description: "Active",},
        { SNo: "5", ItemDesc: "Apple IPhone 14 128GB Purple	", ProdID: "YESU00474342", ProductGroup: "12",WarrantyStartDate:"2024-01-27", TransferStockLocation: "4065218",WarrantyPeriodMonth: "12",UploadDate: "2024-10-10",FileName: "Bulk_Device_Warranty_Activation_template", Status: "valid",Description: "Active",},

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
  ToggleMoreStatus() {
    this.showMoreStatus = !this.showMoreStatus;
  }
  navToUploadFile(){
    this._router.navigate(['/status-bulk-device-warranty/upload-file'])
  }

  filterSearch() {
    console.log(this.filterForm.value);
  }

  resetForm(): void {
    this.filterForm.reset();
}

}
