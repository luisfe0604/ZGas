import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
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
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Doe', firstName: 'John', age: 30 },
  { id: 2, lastName: 'Smith', firstName: 'Jane', age: 25 },
  { id: 3, lastName: 'Johnson', firstName: 'Michael', age: 35 },
  { id: 4, lastName: 'Brown', firstName: 'Emily', age: 28 },
  { id: 5, lastName: 'Wilson', firstName: 'David', age: 40 },
  { id: 6, lastName: 'Jones', firstName: 'Sarah', age: 22 },
  { id: 7, lastName: 'Anderson', firstName: 'James', age: 32 },
  { id: 8, lastName: 'Miller', firstName: 'Anna', age: 29 },
  { id: 9, lastName: 'Taylor', firstName: 'William', age: 38 },
  { id: 10, lastName: 'Moore', firstName: 'Olivia', age: 27 },
  { id: 11, lastName: 'Harris', firstName: 'Daniel', age: 45 },
  { id: 12, lastName: 'Clark', firstName: 'Emma', age: 26 },
  { id: 13, lastName: 'Lee', firstName: 'Robert', age: 33 },
  { id: 14, lastName: 'Walker', firstName: 'Sophia', age: 31 },
  { id: 15, lastName: 'Green', firstName: 'Matthew', age: 36 },
  { id: 16, lastName: 'Evans', firstName: 'Isabella', age: 24 },
  { id: 17, lastName: 'Hall', firstName: 'Ethan', age: 37 },
  { id: 18, lastName: 'Turner', firstName: 'Ava', age: 29 },
  { id: 19, lastName: 'Parker', firstName: 'Nathan', age: 34 },
  { id: 20, lastName: 'White', firstName: 'Lily', age: 31 },
  { id: 21, lastName: 'Roberts', firstName: 'Christopher', age: 39 },
  { id: 22, lastName: 'Brown', firstName: 'Grace', age: 28 },
  { id: 23, lastName: 'Mitchell', firstName: 'Andrew', age: 42 },
  { id: 24, lastName: 'King', firstName: 'Mia', age: 23 },
  { id: 25, lastName: 'Wright', firstName: 'David', age: 40 },
  { id: 26, lastName: 'Adams', firstName: 'Olivia', age: 27 },
  { id: 27, lastName: 'Hall', firstName: 'Elijah', age: 33 },
  { id: 28, lastName: 'Young', firstName: 'Ava', age: 29 },
  { id: 29, lastName: 'Turner', firstName: 'Noah', age: 34 },
  { id: 30, lastName: 'Cooper', firstName: 'Chloe', age: 30 },
];

export default function DataTable() {
  return (
    <div style={{ height: '630px', width: '100%'}}>
      <DataGrid className='data-grid'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}