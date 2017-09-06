import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Http } from '@angular/http';

declare var $: any;
import { ColorsService } from '../../../shared/colors/colors.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
    gridOptions: GridOptions;
    resizeEvent = 'resize.ag-grid';
    $win = $(window);
    // Basic example
    columnDefs = [
        {
            headerName: 'Athlete',
            field: 'athlete',
            width: 150
        }, {
            headerName: 'Age',
            field: 'age',
            width: 90
        }, {
            headerName: 'Country',
            field: 'country',
            width: 120
        }, {
            headerName: 'Year',
            field: 'year',
            width: 90
        }, {
            headerName: 'Date',
            field: 'date',
            width: 110
        }, {
            headerName: 'Sport',
            field: 'sport',
            width: 110
        }, {
            headerName: 'Gold',
            field: 'gold',
            width: 100
        }, {
            headerName: 'Silver',
            field: 'silver',
            width: 100
        }, {
            headerName: 'Bronze',
            field: 'bronze',
            width: 100
        }, {
            headerName: 'Total',
            field: 'total',
            width: 100
        }];

    constructor(http: Http) {
            this.gridOptions = <GridOptions>{
            columnDefs: this.columnDefs,
            rowData: null,
        };
        http.get('assets/server/ag-owinners.json')
            .subscribe((data) => {
                this.gridOptions.api.setRowData(data.json());
                this.gridOptions.api.sizeColumnsToFit();
        });
    }

    ngOnInit() {
    }
    gridReady(params) {
        params.api.sizeColumnsToFit();
        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { params.api.sizeColumnsToFit(); });
        });
    }
}
