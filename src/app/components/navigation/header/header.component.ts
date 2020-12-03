import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() toggleSidenav = new EventEmitter<void>();

    constructor() { }

    onClickMenu(): void {
        this.toggleSidenav.emit();
    }

}
