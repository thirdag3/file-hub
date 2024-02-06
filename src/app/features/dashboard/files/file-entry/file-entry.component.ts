import { Component, EventEmitter, Input, Output } from '@angular/core';
import { File } from '../../../../shared/models/File';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-file-entry',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './file-entry.component.html',
  styleUrl: './file-entry.component.scss'
})
export class FileEntryComponent {
  @Input() file?: File;
  @Output() deleted: EventEmitter<File> = new EventEmitter<File>();

  isHovered: boolean = false;

  constructor() {
  }

  onDelete(): void {
    this.deleted.emit(this.file);
  }

  setHover(state: boolean): void {
    this.isHovered = state;
  }
}
