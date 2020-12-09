import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  aboutMe   : string[]  = ['Developer', 'Designer', 'Problem Solver']
  display   : string    = this.aboutMe[0]
  currIndex : number    = 0

  cloudMove : any[]   

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.display  = this.aboutMe[this.currIndex % 3]
      this.currIndex++
    }, 1400)

  }

}
