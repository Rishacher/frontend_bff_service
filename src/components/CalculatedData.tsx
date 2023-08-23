import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import Chart from './Chart';
import CalculatedDataTable from './CalculatedDataTable'
import './CalculatedData.css';

export default function CalculatedData() {
  return (
    <div className="CalculatedData">
      <Chart></Chart>
      <CalculatedDataTable></CalculatedDataTable>
  </div>
  );
}