import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const importsList = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  RouterModule,
  MatDialogModule,
  MatChipsModule,
  MatProgressSpinnerModule
];

// Essential shared modules. This module should be imported in any all modules
@NgModule({
  declarations: [],
  imports: importsList,
  exports: importsList
})
export class SharedModule { }

// Essential forms modules. This module should be imported in any module that uses forms
const formsModuleImportsList = [
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatTableModule
];
@NgModule({
  declarations: [],
  imports: formsModuleImportsList,
  exports: formsModuleImportsList
})
export class SharedFormsModule { }
