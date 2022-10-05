import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';

import LogoR3Dark from '../svgs/LogoR3Dark';
import { ReactNode } from 'react';
import { styled } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'Custom Cell Render',
        headerName: 'Custom Cell Render',
        description: 'This is column shows custom rendered components.',
        width: 160,
        hideable: true,
        sortable: false,
        resizable: true,
        renderCell: (params: GridRenderCellParams<any, any, any>): ReactNode => {
            if (!params.row.firstName) {
                return <div>Oops! no first name</div>;
            }
            return (
                <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ width: 30, height: 30 }}>
                        <LogoR3Dark />
                    </div>
                    {params.row.firstName}
                </div>
            );
        },
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => {
    const borderColor =
        theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[500];
    return {
        borderColor: borderColor,
        '& .MuiDataGrid-columnHeaders': {
            borderColor: borderColor,
        },
        '& .MuiDataGrid-columnSeparator': {
            opacity: 0 + ' !important',
        },
        '& .MuiDataGrid-cell': {
            padding: 20,
            borderBottom: `1px solid`,
            borderColor: borderColor,
        },
        '& .MuiDataGrid-footerContainer': {
            border: 'none',
        },
    };
});

export default function DataTable() {
    return (
        <div style={{ height: 380, width: '100%' }}>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
            />
        </div>
    );
}
