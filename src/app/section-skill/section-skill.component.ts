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
  public doughnutChartData1: MultiDataSet = [[ 55, 15, 30]]

  public doughnutChartLabels2: Label[] = [ 'Javascript/Typescript','C++', 'SQL'];
  public doughnutChartData2: MultiDataSet = [[45, 30, 25]]

  public doughnutChartLabels3: Label[] = ['System Design', 'DS/ALGO', 'RDBMS'];
  public doughnutChartData3: MultiDataSet = [[ 35, 45, 20]]
  
  public doughnutChartLabels4: Label[] = ['GIT/GITHUB', 'Firebase', 'ETL'];
  public doughnutChartData4: MultiDataSet = [[60, 20, 20]]
  
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {

  }

}
