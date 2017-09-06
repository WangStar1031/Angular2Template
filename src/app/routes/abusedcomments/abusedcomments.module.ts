import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AgGridModule } from 'ag-grid-angular/main';

import { SharedModule } from '../../shared/shared.module';
import { AbusedCommentsComponent } from './abusedcomments/abusedcomments.component';

import { DataTableModule } from 'angular2-datatable';
import { Ng2TableModule } from 'ng2-table/ng2-table';

const routes: Routes = [
    { path: '', component: AbusedCommentsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        DataTableModule,
        Ng2TableModule,
        AgGridModule.withComponents([AbusedCommentsComponent]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        })
    ],
    declarations: [AbusedCommentsComponent],
    exports: [
        RouterModule
    ]
})
export class AbusedCommentsModule { }
