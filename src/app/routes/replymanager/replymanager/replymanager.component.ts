import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-replymanager',
    templateUrl: './replymanager.component.html',
    styleUrls: ['./replymanager.component.scss']
})
export class ReplyManagerComponent implements OnInit {
    chkSwitch: number;
    constructor() { this.chkSwitch = 0;}

    ngOnInit() {
    }

}
