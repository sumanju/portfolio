import { Component, OnInit }    from '@angular/core'
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector    : 'app-section-skill',
  templateUrl : './section-skill.component.html',
  styleUrls   : ['./section-skill.component.scss']
})
export class SectionSkillComponent implements OnInit {

  public doughnutChartLabels1: Label[] = ['Angular', 'React/Redux', 'Node/Express'];
  public doughnutChartData1: MultiDataSet = [[ 80, 25, 50]]

  public doughnutChartLabels2: Label[] = [ 'Javascript/Typescript','C++', 'SQL'];
  public doughnutChartData2: MultiDataSet = [[80, 50, 50]]

  public doughnutChartLabels3: Label[] = ['GIT/GITHUB', 'Data Structure', 'RDBMS'];
  public doughnutChartData3: MultiDataSet = [[80, 75, 60]]
  

  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {

  }

}
