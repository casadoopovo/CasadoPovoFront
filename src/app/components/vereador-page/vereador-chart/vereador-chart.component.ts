import {Component} from '@angular/core';

@Component({
  selector: 'cp-vereador-chart',
  templateUrl: './vereador-chart.component.html',
  styleUrls: ['./vereador-chart.component.css']
})
export class VereadorChartComponent {

  public pie_ChartDataProposituras = [
    ['Task', 'Hours per Day'],
    ['Aprovado', 58],
    ['Rejeitado', 42]];
  public pie_ChartOptionsProposituras = {
    title: 'Gráfico proposituras',

  };

  public pie_ChartDataRelacao = [
    ['Task', 'Hours per Day'],
    ['Vereador', 22],
    ['Geral', 78]];
  public pie_ChartOptionsRelacao = {
    title: 'Gráfico proposituras aprovados relacionados ao geral',

  };

  public bar_data = [
    ['Frequência', 'Total Sessões', 'Presença'],
    ['Frequência', 14, 8]
  ];

  public bar_options = {
    chart: {
      title: 'Frequência nas sessões'
    },
    bars: 'horizontal', // Required for Material Bar Charts.
  };

  public geo_data = [
    ['City', 'Ações'],
    ['João Pessoa', 200]
  ];

  public geo_options = {
    chart: {
      title: 'Mapa Calor Atuação'
    },
    region: '019',
    sizeAxis: { minValue: 0, maxValue: 100 },
    displayMode: 'markers',
    colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  };
}
