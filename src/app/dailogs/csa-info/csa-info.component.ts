import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SharedFormsModule, SharedModule } from '../../shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-csa-info',
  providers: [provideNativeDateAdapter()],
  imports: [MatIcon, SharedModule, SharedFormsModule,MatPaginatorModule ],
  templateUrl: './csa-info.component.html',
  styleUrl: './csa-info.component.scss'
})
export class CsaInfoComponent {

  isDataModified = signal(false);
  private readonly _dialogRef = inject(MatDialogRef<CsaInfoComponent>);
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['code', 'description'];



  ngOnInit():void{
    this.dataSource = new MatTableDataSource<any>(
      [
        { code: "BKD", description: "CRESTEL CREATED ACCOUNT" },
        { code: "COD", description: "CASH ON DELIVERY ORDERS" },
        { code: "DHU", description: "DRB-HICOM UNIVERSITY" },
        { code: "DZNG", description: "DONG ZONG CHINESE SC" },
        { code: "ENR", description: "CRESTEL CREATED ACCOUNT" },
      ]
    );
  }



    // method declarations
    closeDialoge() {
      this._dialogRef.close(this.isDataModified());
    }
  
}
