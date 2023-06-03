import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../shared/panel.component';

@Component({
  selector: 'app-uikit',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  template: `
    <app-panel 
      title="one" icon="⭐️"
      (iconClick)="doSomething()"
    >
      lorem ipsum...
    </app-panel>
  
    <br>
    
    <app-panel title="two" [isOpen]="false">
      lorem ipsum...
    </app-panel>
  `,
  styles: [
  ]
})
export default class UikitComponent {
  doSomething() {
    window.alert('icon clicked')
  }
}
