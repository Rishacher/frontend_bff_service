import { Button } from '@consta/uikit/Button';
import { IconAttach } from "@consta/uikit/IconAttach";
import { useDispatch, useSelector } from "react-redux";
import './Buttons.css';
import axios from 'axios';
import { useAppDispatch } from '../store/store';
import { setDataAction } from '../store/actions/textFieldActions';

interface IButtons {
    cellValues: Record<string, string | null>
}

export const Buttons: React.FC<IButtons> = ({ cellValues }) => {
    const dispatch = useAppDispatch()
    async function sendData(data: any) {

        await axios
            .post("http://localhost:8080/data", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(setDataAction(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSave = () => {
        
        sendData(cellValues)
    }

    return (
        <div className="Buttons">
            <Button
                form="default"
                view="primary"
                label="Расчёт"
                size="m"
                onClick={onSave}
            />
            <Button
                form="default"
                view="primary"
                label="Загрузить"
                iconLeft={IconAttach}
                size="m"
            />
        </div>
    );
}