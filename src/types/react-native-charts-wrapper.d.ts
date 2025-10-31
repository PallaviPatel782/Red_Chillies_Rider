declare module 'react-native-charts-wrapper' {
  import { Component } from 'react';
  import { ViewProps } from 'react-native';

  export interface BarChartProps extends ViewProps {
    data?: any;
    xAxis?: any;
    yAxis?: any;
    legend?: any;
    chartDescription?: any;
    marker?: any;
    animation?: any;
    drawValueAboveBar?: boolean;
    highlightPerTapEnabled?: boolean;
    onSelect?: (event: any) => void;
    onChange?: (event: any) => void;
  }

  export class BarChart extends Component<BarChartProps> {}
  export class LineChart extends Component<any> {}
  export class PieChart extends Component<any> {}
  export class CombinedChart extends Component<any> {}
  export class RadarChart extends Component<any> {}
  export class BubbleChart extends Component<any> {}
  export class CandleStickChart extends Component<any> {}
}
