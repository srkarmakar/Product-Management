import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <h1 class="text-violet-800 font-bold p-3">Comer*AmiGos</h1>
  `,
  styles:`
  h1{
    font-size: 40px;
    font-family: "Lucida Console", "Courier New", monospace;
  }`
})
export class HeaderComponent {

}
