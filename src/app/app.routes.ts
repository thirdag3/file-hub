import { Routes } from '@angular/router';
import { WorkspacesComponent } from './features/dashboard/workspaces/workspaces.component';
import { FilesComponent } from './features/dashboard/files/files.component';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { authGuard } from './core/guards/auth.guard';
import { ViewFileComponent } from './features/dashboard/files/view-file/view-file.component';

export const routes: Routes = [
  { path: "workspaces", component: WorkspacesComponent, canActivate: [ authGuard ] },
  { path: "files", component: FilesComponent, canActivate: [ authGuard ] },
  { path: "files/view/:fileName", component: ViewFileComponent, canActivate: [ authGuard ] },
  { path: "user", component: UserProfileComponent, canActivate: [ authGuard ] },
  { path: "", redirectTo: "/workspaces", pathMatch: "full" },
  { path: "**", redirectTo: "/workspaces" }
];
