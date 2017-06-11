import {Component} from '@angular/core';

@Component({
  selector: 'cp-vereador-chart',
  templateUrl: './vereador-chart.component.html',
  styleUrls: ['./vereador-chart.component.css']
})
export class VereadorChartComponent {

  public pie_ChartData = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7] ];
  public pie_ChartOptions  = {
    title: 'My Daily Activities',
    width: 900,
    height: 500
  };
}
