import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Text } from "@consta/uikit/Text";
import { Line } from '@consta/charts/Line';
import './Chart.css';

const colorMap: { [key: string]: string } = {
  'IPR': '#ff7514',
  'VLP': '#ad4800',
};

type Item = { q_liq: number; p_wf: number; service: string; }

const data: Item[] = [
  {
    q_liq: 0,
    p_wf: 8,
    service: 'IPR',
  },
  {
    q_liq: 5,
    p_wf: 7,
    service: 'IPR',
  },
  {
    q_liq: 9,
    p_wf: 5,
    service: 'IPR',
  },
  {
    q_liq: 13,
    p_wf: 0,
    service: 'IPR',
  },
  {
    q_liq: 0,
    p_wf: 0,
    service: 'VPL',
  },
  {
    q_liq: 7,
    p_wf: 2,
    service: 'VPL',
  },
  {
    q_liq: 10,
    p_wf: 4,
    service: 'VPL',
  },
  {
    q_liq: 13,
    p_wf: 8,
    service: 'VPL',
  },
]

export default function Chart() {
  return (
    <div className="Chart">
      <Text>График узлового анализа</Text>
      <Line
        data={data}
        xField="q_liq"
        yField="p_wf"
        seriesField="service"
        lineStyle={({ service }) => {
          return {
            stroke: colorMap[service],
          };
        }}
        meta={{
          q_liq: {alias: 'Дебит жидкости:'},
          p_wf : {alias: 'Забойное давление:'},
          }}
    // }
  />
  </div>
  );
}