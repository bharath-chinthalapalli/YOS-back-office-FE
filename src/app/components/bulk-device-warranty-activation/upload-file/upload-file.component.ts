import { Component, signal } from '@angular/core';
import { SharedFormsModule, SharedModule } from '../../../shared/shared.module';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-upload-file',
  imports: [SharedModule, SharedFormsModule, MatIcon],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {
  // fileName: string | null = null;
  fileName = signal<string | null>(null); // Signal to hold the file name

  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.fileName = input.files[0].name;
  //   } else {
  //     this.fileName = null;
  //   }
  // }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName.set(input.files[0].name); // Update the signal
    } else {
      this.fileName.set(null); // Reset the signal if no file is selected
    }
  }
}
