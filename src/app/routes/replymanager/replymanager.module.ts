import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { TagInputModule } from 'ng2-tag-input';

import { SharedModule } from '../../shared/shared.module';
import { ReplyManagerComponent } from './replymanager/replymanager.component';

const routes: Routes = [
    { path: '', component: ReplyManagerComponent }
];

@NgModule({
    imports: [
        SharedModule,
        TagInputModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        })
    ],
    declarations: [ReplyManagerComponent],
    exports: [
        RouterModule
    ]
})
export class ReplyManagerModule { }
