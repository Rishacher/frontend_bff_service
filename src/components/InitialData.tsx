import React, { useState } from 'react';
import { Table, TableColumn } from "@consta/uikit/Table";
import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';
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
        parameter: 'Температура пласта',
        unit: 'C',
        value: null,
      },
      {
        id: '6',
        parameter: 'Геотермический градиент',
        unit: 'K/100 м',
        value: null,
      },
      {
        id: '7',
        parameter: 'Расход жидкости',
        unit: 'м3/сут',
        value: null,
      },
      {
        id: '8',
        parameter: 'Устьевое давление',
        unit: 'бар',
        value: null,
      },
      {
        id: '9',
        parameter: 'Газосодержание',
        unit: 'м3/м3',
        value: null,
      },
      {
        id: '10',
        parameter: 'Температура на устье',
        unit: 'К',
        value: null,
      },
      {
        id: '11',
        parameter: 'Диаметр обсадной колонны',
        unit: 'м',
        value: null,
      },
      {
        id: '12',
        parameter: 'Диаметр НКТ',
        unit: 'м',
        value: null,
      },
      {
        id: '13',
        parameter: 'Глубина скважины',
        unit: 'м',
        value: null,
      },
      {
        id: '14',
        parameter: 'Глубина спуска НКТ',
        unit: 'м',
        value: null,
      },
      {
        id: '15',
        parameter: 'Давление резервуара',
        unit: 'бар',
        value: null,
      },
      {
        id: '16',
        parameter: 'Глубина резервуара',
        unit: 'бар',
        value: null,
      },
      {
        id: '17',
        parameter: 'Индекс продуктивности',
        unit: 'м3/сут/бар',
        value: null,
      },
];



export default function InitialData() {
    const [cellValues, setCellValues] = useState<{ [key: string]: string | null }>({});
  
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
            type="number"
            placeholder="Введите значение..."
            incrementButtons={false}
          />
        ),
      },
    ];
  
    return (
        <div className="InitialData">
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