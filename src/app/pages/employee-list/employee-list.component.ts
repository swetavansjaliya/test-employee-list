import {Component, OnInit} from '@angular/core';
import {AllEmployees, Employee} from './employee-list.model';

@Component({
    selector: 'app-employee-list',
    standalone: false,
    templateUrl: './employee-list.component.html',
    styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[] = [];
    blankEmployee: Employee = {} as Employee;

    allSelected: boolean = false;

    showAddForm: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.employees = AllEmployees;
        this.employees.forEach(x=>x.selected = false);
    }


    toggleAll(): void {
        this.employees.forEach(emp => {
            emp.selected = this.allSelected;
        });
    }

    onClickDeleteSelected(): void {
        this.employees = this.employees.filter(emp => emp.selected == false);
        this.allSelected = false;
    }

    onClickDelete(id: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }

    onClickAddNew(): void {
        this.showAddForm = true;
        this.blankEmployee = {} as Employee;
    }

    onAdd(): void {

        let ids = AllEmployees.map(x => x.id);
        ids = ids.concat(this.employees.map(x => x.id));

        const lastId = Math.max(...ids);

        this.blankEmployee.id = lastId + 1;
        this.employees.push(this.blankEmployee);
        this.onCancel();
    }

    onCancel(): void {
        this.showAddForm = false;
    }
}

