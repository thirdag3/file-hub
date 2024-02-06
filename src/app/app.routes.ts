import { Routes } from '@angular/router';
import { WorkspacesComponent } from './features/dashboard/workspaces/workspaces.component';
import { FilesComponent } from './features/dashboard/files/files.component';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { authGuard } from './core/guards/auth.guard';
import { ViewFileComponent } from './features/dashboard/files/view-file/view-file.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: "user", component: UserProfileComponent, canActivate: [ authGuard ] },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [ authGuard ],
    data: {
      breadcrumb: "Dashboard"
    },
    children: [
      {
        path: "workspaces",
        component: WorkspacesComponent,
        canActivate: [ authGuard ],
        data: {
          breadcrumb: "Workspaces"
        }
      },
      {
        path: "files",
        component: FilesComponent,
        canActivate: [ authGuard ],
        data: {
          breadcrumb: "Files"
        },
      },
      {
        path: "files/:fileName",
        component: ViewFileComponent,
        canActivate: [ authGuard ],
        data: {
          breadcrumb: "View File"
        }
      },

      // Redirects
      { path: "", redirectTo: "/dashboard/workspaces", pathMatch: "full" }
    ]
  },

  // Redirects
  { path: "", redirectTo: "/dashboard/workspaces", pathMatch: "full" },
  { path: "**", redirectTo: "/dashboard/workspaces" }
];
