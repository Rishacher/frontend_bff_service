import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Table, TableColumn } from "@consta/uikit/Table";
import './CalculatedDataTable.css';

const rows = [
    {
        id: '1',
        Qn: 'Pзаб, бар (VLP)',
        vlp: 200,
        vlp1: 300,
        vlp2: 400,
        vlp3: 500,
        vlp4: 600,
        vlp5: 600,
        vlp6: 600,
        vlp7: 600,
    },
    {
        id: '2',
        Qn: 'Pзаб, бар (IPR)',
        vlp: 25,
        vlp1: 25,
        vlp2: 25,
        vlp3: 25,
        vlp4: 25,
        vlp5: 25,
        vlp6: 25,
        vlp7: 25,
    },
];

const columns: TableColumn<typeof rows[number]>[] = [
    {
      title: "Дебит нефти, м3/сут",
      accessor: "Qn",
      sortable: true,
    },
    {
      title: 20,
      accessor: "vlp",
      sortable: true,
    },
    {
        title: 20,
        accessor: "vlp1",
        sortable: true,
      },
      {
        title: 20,
        accessor: "vlp2",
        sortable: true,
      },
      {
        title: 20,
        accessor: "vlp3",
        sortable: true,
      },
      {
        title: 20,
        accessor: "vlp4",
        sortable: true,
      },
      {
        title: 20,
        accessor: "vlp5",
        sortable: true,
      },
      {
        title: 20,
        accessor: "vlp6",
        sortable: true,
      },
      {
        title: 20,
        accessor: "vlp7",
        sortable: true,
      },
  ];

export default function CalculatedDataTable() {  
    return (
        <div className="CalculatedDataTable">
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
