import {NgModule} from '@angular/core';
import {EmployeeListRoutingModule} from './employee-list-routing.module';
import {EmployeeListComponent} from './employee-list.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        EmployeeListComponent
    ],
    imports: [
        EmployeeListRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
})
export class EmployeeListModule {
}
