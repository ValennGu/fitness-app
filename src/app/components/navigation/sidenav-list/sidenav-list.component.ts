import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
    @Output() toggleSidenav = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    onClickSidenavItem(): void {
        this.toggleSidenav.emit();
    }

}