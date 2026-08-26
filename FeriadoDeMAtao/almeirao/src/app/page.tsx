'use client'
import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Icon from '@mui/material/Icon';

const rows = [
  { id: 1, nome: 'Priosti', salario: 3500 },
  { id: 2, nome: 'Rayssa', salario: 4200 },
  { id: 3, nome: 'Passique', salario: 4200 },
  { id: 4, nome: 'Boian', salario: 2800 },
  { id: 5, nome: 'Cassiano', salario: 5000 },
  { id: 6, nome: 'Lucas', salario: 3900 },
  { id: 7, nome: 'Isabela', salario: 3100 },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'nome', headerName: 'Nome', width: 220, flex: 1 },
  { field: 'salario', headerName: 'Salário', type: 'number', width: 150 },
];

export default function DataGridDemo() {
  const [search, setSearch] = useState('');

  const filteredRows = useMemo(() => {
    const termo = search.trim().toLowerCase();
    if (!termo) return rows;

    return rows.filter(
      (row) =>
        row.id.toString().includes(termo) ||
        row.nome.toLowerCase().includes(termo)
    );
  }, [search]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        py: 6,
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 700,
          p: 4,
          borderRadius: 3,
        }}
      >
       
        <Typography
          variant="h6"
          component="h1"
          sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
        >
        Funcionários
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Typography style={{justifyContent:'center'}} ><Icon><SearchIcon/></Icon></Typography>
          <TextField

            placeholder="Buscar por ID ou Nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            sx={{ width: '100%', maxWidth: 350 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{
              border: 'none',
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#f5f5f5',
                fontWeight: 600,
              },
              '& .MuiDataGrid-row:hover': {
                backgroundColor: '#fafafa',
              },
              '& .MuiDataGrid-cell:focus': {
                outline: 'none',
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}