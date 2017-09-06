import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AgGridModule } from 'ag-grid-angular/main';

import { SharedModule } from '../../shared/shared.module';
import { AbusedUsersComponent } from './abusedusers/abusedusers.component';

import { DataTableModule } from 'angular2-datatable';
import { Ng2TableModule } from 'ng2-table/ng2-table';

const routes: Routes = [
    { path: '', component: AbusedUsersComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        DataTableModule,
        Ng2TableModule,
        AgGridModule.withComponents([AbusedUsersComponent]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        })
    ],
    declarations: [AbusedUsersComponent],
    exports: [
        RouterModule
    ]
})
export class AbusedUsersModule { }
