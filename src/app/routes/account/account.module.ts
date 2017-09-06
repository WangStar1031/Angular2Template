import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../../shared/shared.module';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    { path: '', component: AccountComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        })
    ],
    declarations: [AccountComponent],
    exports: [
        RouterModule
    ]
})
export class AccountModule { }
