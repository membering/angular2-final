import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MenuService} from '../../../services/index';
declare const $: any;

@Component({
    templateUrl: 'menu.html'
})
export class MenuComponent implements OnInit {
    listGroups: any = [];
    listMenus: any = [];
    selectedGroup: any = {};
    menuData: any = [];

    formAddMenu: FormGroup;
    sbmAddMenu: boolean = false;
    formAddGroup: FormGroup;
    sbmAddGroup: boolean = false;
    formEditGroup: FormGroup;
    sbmEditGroup: boolean = false;

    constructor(
        private service: MenuService
    ) {}

    ngOnInit() {
        this.loadGroups();
        this.buildFormAddMenu();
        this.buildFormAddGroup();
        this.buildFormEditGroup();
    }

    onSubmit() {
        let data = {
            param: JSON.stringify(this.menuData)
        };
        this.service.updateMenusByGroupId(this.selectedGroup.menu_group_id, data)
            .subscribe(
                res => {
                    localStorage.removeItem('leftmenu');
                    window.location.reload();
                }
            );
    }

    buildFormAddMenu() {
        this.formAddMenu = new FormGroup({
            menu_id: new FormControl(null),
            nodes: new FormControl([]),
            name: new FormControl('', [Validators.required]),
            url: new FormControl('', [Validators.required]),
            permission_name: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            target: new FormControl('', [Validators.required]),
            icon_class: new FormControl('', [Validators.required])
        });
    }

    addMenu() {
        this.sbmAddMenu = true;
        if (this.formAddMenu.valid) {
            this.listMenus.push(this.formAddMenu.value);
            $('#modalAddMenu').modal('hide');
        }
    }

    buildFormAddGroup() {
        this.formAddGroup = new FormGroup({
            name: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required])
        });
    }

    addGroup() {
        this.sbmAddGroup = true;
        if (this.formAddGroup.valid) {
            this.service.addGroup(this.formAddGroup.value)
                .subscribe(
                    res => {
                        this.listGroups.push(res.data);
                        this.listMenus = [];
                        this.selectedGroup = res.data;
                        this.formEditGroup.patchValue({
                            name: this.selectedGroup.name,
                            description: this.selectedGroup.description
                        });
                        $('#modalAddGroup').modal('hide');
                    }
                );
        }
    }

    buildFormEditGroup() {
        this.formEditGroup = new FormGroup({
            name: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required])
        });
    }

    editGroup() {
        this.sbmEditGroup = true;
        if (this.formEditGroup.valid) {
            this.service.editGroup(this.selectedGroup.menu_group_id, this.formEditGroup.value)
                .subscribe(
                    res => {
                        this.selectedGroup = res.data;
                        this.formEditGroup.patchValue({
                            name: this.selectedGroup.name,
                            description: this.selectedGroup.description
                        });
                        $('#modalEditGroup').modal('hide');
                    }
                );
        }
    }

    loadGroups() {
        this.service.getGroup()
            .subscribe(
                res => {
                    this.listGroups = res.data;
                    this.selectedGroup = this.listGroups[0];
                    this.loadMenus(this.selectedGroup);
                    this.formEditGroup.patchValue({
                        name: this.selectedGroup.name,
                        description: this.selectedGroup.description
                    });
                }
            );
    }

    loadMenus(item: any) {
        this.listMenus = [];
        this.service.getMenusByGroupId(item.menu_group_id)
            .subscribe(
                res => {
                    let that = this;
                    this.listMenus = res.data;
                    setTimeout(() => {
                        $('.dd').nestable({
                            expandBtnHTML   : '<button class="btn-collapse" data-action="expand" type="button">Expand</button>',
                            collapseBtnHTML : '<button class="btn-collapse" data-action="collapse" type="button">Collapse</button>',
                            maxDepth: 2
                        }).on('change', function() {
                            that.menuData = $(this).nestable('serialize');
                        });
                    }, 1);
                }
            );
    }

    selectGroup(item: any) {
        this.selectedGroup = item;
        this.loadMenus(this.selectedGroup);
        this.formEditGroup.patchValue({
            name: this.selectedGroup.name,
            description: this.selectedGroup.description
        });
    }
}