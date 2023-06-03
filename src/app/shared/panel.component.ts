import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div
        class="flex justify-between bg-slate-800 text-white p-3"
        (click)="isOpen = !isOpen"
      >
        {{title}}
        <div 
          *ngIf="icon"
          (click)="iconClickHandler($event)"
        >{{icon}}</div>
      </div>
      
      <div 
        class="p-3 bg-slate-200"
        *ngIf="isOpen"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PanelComponent {
  @Input() title: string | undefined;
  @Input() isOpen = true;
  @Input() icon: string | undefined;
  @Output() iconClick = new EventEmitter()

  iconClickHandler(event: MouseEvent) {
    event.stopPropagation();
    this.iconClick.emit()
  }
}
