import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../core/services/file/file.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { File } from '../../../shared/models/File';
import { FileEntryComponent } from './file-entry/file-entry.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [NgForOf, FileEntryComponent, AsyncPipe],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent {

  files$: Observable<File[]>;

  constructor(private fileService: FileService) {
    this.files$ = fileService.fetchFilesPaginated(0);
  }

  onDeleted(file: File): void {
    this.fileService.deleteFile(file);
    this.files$ = this.fileService.fetchFilesPaginated(0);
  }
}
