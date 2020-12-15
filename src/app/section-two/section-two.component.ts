import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'app-section-two',
  templateUrl : './section-two.component.html',
  styleUrls   : ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {

  myAge : number 

  constructor() { }

  ngOnInit(): void {

    const tsDiff  = Date.now() - (new Date(1996, 11, 2)).getTime()
    console.log(tsDiff/(1000 * 60 * 60 * 24)) 
  }

}
