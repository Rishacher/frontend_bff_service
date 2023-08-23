
import DarkTheme from '../DarkTheme'
import { Buttons } from '../Buttons'
import { InitialData } from "../InitialData";
import './MainPage.css';
import CalculatedData from '../CalculatedData';
import { useState } from 'react';

export default function MainPage() {
    const [cellValues, setCellValues] = useState<{ [key: string]: string | null }>({});
    return (
        <div className='MainPage'>
            <div className='MainPageVerticalFlex'>
                <DarkTheme></DarkTheme>
                <Buttons cellValues={cellValues}></Buttons>
                <div className='TableAndCharts'>
                    <InitialData cellValues={cellValues} setCellValues={setCellValues}></InitialData>
                    
                    <CalculatedData></CalculatedData>
                </div>
            </div>
        </div>
    );
}
