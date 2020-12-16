import { Component, HostListener } from '@angular/core';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isProject = false

  @HostListener("document:scroll")
  scrollEmit()  {
    let ele = document.getElementById("view")
    if (ele.clientHeight - 1000 <= window.scrollY) {
      this.isProject  = true
    }
  }
}
