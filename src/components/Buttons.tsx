import { Button } from '@consta/uikit/Button';
import { IconAttach } from "@consta/uikit/IconAttach";
import './Buttons.css';

export default function Buttons() {
    return (
        <div className="Buttons">
            <Button
                form="default"
                view="primary"
                label="Расчёт"
                size="m"
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