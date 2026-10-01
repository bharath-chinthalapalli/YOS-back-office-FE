import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SharedFormsModule, SharedModule } from '../../shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-status-change-hisotry',
  imports: [MatIcon, SharedModule, SharedFormsModule,MatPaginatorModule],
  templateUrl: './status-change-hisotry.component.html',
  styleUrl: './status-change-hisotry.component.scss'
})
export class StatusChangeHisotryComponent {

  isDataModified = signal(false);
  private readonly _dialogRef = inject(MatDialogRef<StatusChangeHisotryComponent>);
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['RequestStatus','OldValue','NewValue','StatusUpdatedBy','StatusApprovedBy','ChangeRequestDate','ApprovedRejectedDate','Action'];



  ngOnInit():void{
    this.dataSource = new MatTableDataSource<any>(
      [

      ]
    );
  }





  closeDialoge() {
    this._dialogRef.close(this.isDataModified());
  }
}
