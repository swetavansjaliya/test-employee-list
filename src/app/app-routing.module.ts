import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'employees',
        pathMatch: 'full',
        loadChildren: () => import('./pages/employee-list/employee-list.module').then(m => m.EmployeeListModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
