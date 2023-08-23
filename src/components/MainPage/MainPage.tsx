
import DarkTheme from '../DarkTheme'
import Buttons from '../Buttons'
import InitialData from "../InitialData";
import './MainPage.css';
import CalculatedData from '../CalculatedData';

export default function MainPage() {
    return (
        <div className='MainPage'>
            <div className='MainPageVerticalFlex'>
                <DarkTheme></DarkTheme>
                <Buttons></Buttons>
                <div className='TableAndCharts'>
                    <InitialData></InitialData>
                    <CalculatedData></CalculatedData>
                </div>
            </div>
        </div>
    );
}
