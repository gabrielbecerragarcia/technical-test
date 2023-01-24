import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Example:
//     app-button(primary, (buttonClick)="function()") Button text
//     app-button(secondary, (buttonClick)="function()") Button text
@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    @Input() primary!: boolean | string;
    @Input() secondary!: boolean | string;
    @Output() buttonClick: EventEmitter<number> = new EventEmitter<number>();

    /**
     * On init function
     */
    ngOnInit(): void {
        this.primary = this.primary === '';
        this.secondary = this.secondary === '';

        if (!this.primary && !this.secondary) {
            this.primary = true;
        }
    }

    /**
     * Function that handle button click
     */
    handleButtonClick(): void {
        this.buttonClick.emit(2);
    }
}

