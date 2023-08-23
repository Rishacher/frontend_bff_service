import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Line } from '@consta/charts/Line';
import './Chart.css';

const colorMap: { [key: string]: string } = {
  'Austria': '#ff7514',
  'Canada': '#ad4800',
  'France': '#ca3a27',
  'Germany': '#470d0b',
  'Japan': '#ffc0cb',
  'Netherlands': '#ffd88a',
  'New Zealand': '#b39929',
  'Spain': '#c5e384',
  'Sweden': '#8c4566',
  'Switzerland': '#924e7d',
  'United Kingdom': '#905d5d',
  'United States': '#a2a2d0',
};

type Item = { Date: string; scales: number; country: string; }

const data: Item[] = [
  {
    Date: '2010-01',
    scales: 1998,
    country: 'France',
  },
  {
    Date: '2011-02',
    scales: 1850,
    country: 'France',
  },
  {
    Date: '2012-02',
    scales: 4000,
    country: 'France',
  },
  {
    Date: '2013-02',
    scales: 500,
    country: 'Sweden',
  },
  {
    Date: '2014-02',
    scales: 8000,
    country: 'Sweden',
  },
  {
    Date: '2015-02',
    scales: 5999,
    country: 'Sweden',
  },
  {
    Date: '2016-02',
    scales: 12000,
    country: 'Switzerland',
  },
  {
    Date: '2017-02',
    scales: 10,
    country: 'Switzerland',
  },
  {
    Date: '2018-02',
    scales: 300,
    country: 'Switzerland',
  },
  {
    Date: '2019-02',
    scales: 1850,
    country: 'Switzerland',
  },
]

export default function Chart() {
  return (
    <div className="Chart">
      <Line
        data={data}
        xField="Date"
        yField="scales"
        seriesField="country"
        lineStyle={({ country }) => {
          return {
            stroke: colorMap[country],
          };
        }}
        meta={{
          Date: {alias: 'Дата'},
          scales : {alias: 'Число'},
          }}
    // }
  />
  </div>
  );
}