import { Observable } from "rxjs";
import { File } from "../../../shared/models/File";

export interface FileRepository {
    fetchAllPaginated(page: number, size: number): Observable<File[]>;
    deleteFile(file: File): void;
}