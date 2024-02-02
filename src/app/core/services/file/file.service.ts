import { Inject, Injectable } from '@angular/core';
import { File } from '../../../shared/models/File';
import { FileRepository } from './file-repository.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(@Inject("FileRepository") private fileRepository: FileRepository) {
  }

  fetchFilesPaginated(pageId: number = 0) : Observable<File[]> {
    return this.fileRepository.fetchAllPaginated(pageId, 10);
  }

  deleteFile(file: File): void {
    this.fileRepository.deleteFile(file);
  }
}
