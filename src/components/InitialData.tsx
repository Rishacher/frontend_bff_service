import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import { Table, TableColumn } from "@consta/uikit/Table";
import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';
import { Text } from "@consta/uikit/Text";
import './InitialData.css';

const rows = [
    {
        id: '1',
        parameter: 'Обводненность',
        unit: 'доли ед.',
        value: null,
    },
    {
        id: '2',
        parameter: 'Плотность нефти',
        unit: 'доли ед.',
        value: null,
    },
    {
        id: '3',
        parameter: 'Плотность воды',
        unit: 'доли ед.',
        value: null,
    },
    {
        id: '4',
        parameter: 'Плотность газа',
        unit: 'доли ед.',
        value: null,
    },
    {
        id: '5',
        parameter: 'Геотермический градиент',
        unit: 'С/100 м',
        value: null,
    },
    {
        id: '6',
        parameter: 'Устьевое давление',
        unit: 'бар',
        value: null,
    },
    {
        id: '7',
        parameter: 'Газосодержание',
        unit: 'м3/м3',
        value: null,
    },
    {
        id: '8',
        parameter: 'Температура пласта',
        unit: 'C',
        value: null,
    },
    {
        id: '9',
        parameter: 'Диаметр обсадной колонны',
        unit: 'м',
        value: null,
    },
    {
        id: '10',
        parameter: 'Диаметр НКТ',
        unit: 'м',
        value: null,
    },
    {
        id: '11',
        parameter: 'Глубина по стволу',
        unit: 'м',
        value: null,
    },
    {
        id: '12',
        parameter: 'Глубина скважины',
        unit: 'м',
        value: null,
    },
    {
        id: '13',
        parameter: 'Глубина спуска НКТ',
        unit: 'м',
        value: null,
    },
    {
        id: '14',
        parameter: 'Давление резервуара',
        unit: 'бар',
        value: null,
    },
    {
        id: '15',
        parameter: 'Глубина резервуара',
        unit: 'м',
        value: null,
    },
    {
        id: '16',
        parameter: 'Индекс продуктивности',
        unit: 'м3/сут/бар',
        value: null,
    },
    {
        id: '17',
        parameter: 'Давление насыщения',
        unit: 'атм',
        value: null,
    },
];

interface InitialData {
    cellValues: Record<string, string | null>
    setCellValues: React.Dispatch<React.SetStateAction<{
        [key: string]: string | null;
    }>>
}

export const InitialData : React.FC <InitialData> = ({cellValues,setCellValues}) => {
    // const [cellValues, setCellValues] = useState<{ [key: string]: string | null }>({});

    // Функция для обновления значения ячейки
    const handleChange = (id: string, args: TextFieldOnChangeArguments) => {
        const { value } = args;
        setCellValues({ ...cellValues, [id]: value });
    };

    const columns: TableColumn<typeof rows[number]>[] = [
        {
            title: "ПАРАМЕТР",
            accessor: "parameter",
            sortable: true,
            width: 250,
        },
        {
            title: "ЕД.ИЗМ.",
            accessor: "unit",
            sortable: true,
            width: 133,
        },
        {
            title: "ЗНАЧЕНИЕ",
            accessor: "value",
            sortable: true,
            width: 171,
            withoutPadding: true,
            renderCell: (row) => (
                <TextField
                    size='m'
                    onChange={(value) => handleChange(row.id, value)}
                    value={cellValues[row.id] || ""}
                    type="text"
                    placeholder="Введите значение..."
                    incrementButtons={false}
                />
            ),
        },
    ];

    return (
        <div className="InitialData">
            <Text>Исходные данные</Text>
            <Table
                verticalAlign="top"
                size="s"
                headerVerticalAlign="center"
                borderBetweenColumns

                columns={columns}
                rows={rows}
            />
        </div>
    );
}