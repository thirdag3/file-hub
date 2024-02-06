import { Data } from "@angular/router";

export interface Breadcrumb {
    url: string;
    label: Data;
    isCurrent: boolean;
}