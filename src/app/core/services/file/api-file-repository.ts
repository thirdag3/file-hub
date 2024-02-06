import { Injectable } from "@angular/core";
import { FileRepository } from "./file-repository.interface";
import { File } from "../../../shared/models/File";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiFileRepository implements FileRepository {

  private files: File[] = [
    { name: "file-001.docx", lastChangedAt: this.randomDate() },
    { name: "file-002.xls", lastChangedAt: this.randomDate() },
    { name: "file-003.pdf", lastChangedAt: this.randomDate() },
    { name: "file-004.pdf", lastChangedAt: this.randomDate() },
    { name: "file-005.docx", lastChangedAt: this.randomDate() },
    { name: "file-006.docx", lastChangedAt: this.randomDate() },
    { name: "file-007.doc", lastChangedAt: this.randomDate() },
    { name: "file-008.csv", lastChangedAt: this.randomDate() },
    { name: "file-009.csv", lastChangedAt: this.randomDate() },
    { name: "file-010.xml", lastChangedAt: this.randomDate() }
  ];

  constructor(private httpClient: HttpClient) {
  }

  fetchAllPaginated(page: number, size: number): Observable<File[]> {
    return new Observable((s) => {
      s.next(this.files.slice(0, 10));
    });
  }

  deleteFile(file: File): void {
    this.files = this.files.filter(f => file.name !== f.name);
  }

  /**
   * Method to generate a random date for a file.
   * @returns the random date.
   */
  private randomDate(): Date {
    return new Date(
      2014 + Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 11) + 1,
      Math.floor(Math.random() * 30) + 1
    );
  }
}