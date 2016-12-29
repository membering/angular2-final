import {Component, OnInit} from '@angular/core';
import {ToastyService} from 'ng2-toasty';
import {Ng2FrameworkFactory, BaseComponentFactory} from 'ag-grid-ng2';
import {GridOptions} from 'ag-grid';
import {TestService} from '../../../services/index';
declare const $: any;
declare const saveAs: any;

@Component({
    templateUrl: 'dashboard.html',
    providers: [Ng2FrameworkFactory, BaseComponentFactory]
})
export class DashboardComponent implements OnInit {
    gridOptions: GridOptions;

    columnDefs = [
        {
            headerName: '#',
            checkboxSelection: true,
            suppressSorting: true,
            suppressMenu: true,
            width: 25,
        },
        {
            field: 'cus_name',
            headerName: 'Customer'
        },
        {
            field: 'sku',
            headerName: 'SKU'
        },
        {
            field: 'color',
            headerName: 'Color'
        },
        {
            field: 'size',
            headerName: 'Size'
        },
        {
            field: 'description',
            headerName: 'Description'
        },
        {
            field: 'in_damaged',
            headerName: 'In Damage'
        },
        {
            field: 'in_hand',
            headerName: 'In Hand'
        },
        {
            field: 'in_picked',
            headerName: 'In Picked'
        }
    ];
    rowData: any[];

    constructor(
        private toastyService: ToastyService,
        private service: TestService
    ) {
        this.gridOptions = <GridOptions>{};
    }

    ngOnInit() {
        this.toastyService.success('test message test message test message test message test message test message test message');
        $('#datepicker').datepicker();
        $('#datetimepicker').datetimepicker();
        // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        // saveAs.saveAs(file);
        this.loadList();
    }

    loadList(page:number = 1) {
        let params = {
            page: page
        };
        this.service.getReportInventory('?'+$.param(params))
            .subscribe(
                res => {
                    this.rowData = res.data;
                }
            );
    }
}