"use client";
import * as React from 'react';
import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  FormControlLabel
} from '@mui/material';

export default function ControlledSwitches() {

  const [checked, setChecked] = React.useState(true);

  const [rows, setRows] = React.useState<any[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  React.useEffect(() => {

    fetch("https://viled.runasp.net/api/historico/alexandre/todos")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      });

  }, []);

  return (
    <div style={{ textAlign: 'center' }}>

      <div>

        <h1
          style={{
            color: "red",
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          Meu LED
        </h1>

        <TextField
          style={{ width: '40%' }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              slotProps={{
                input: { 'aria-label': 'controlled' }
              }}
            />
          }
          label={checked ? "Ligado" : "Desligado"}
          labelPlacement='bottom'
        />

        <h1
          style={{
            color: "black",
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          Historico
        </h1>

      </div>

      <TableContainer
        style={{ margin: "0 auto", width: "50%" }}
        component={Paper}
      >

        <Table sx={{ minWidth: 100 }} aria-label="simple table">

          <TableHead>

            <TableRow>

              <TableCell>Usuario</TableCell>

              <TableCell align="right">
                Hora
              </TableCell>

              <TableCell align="right">
                Estado
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {rows.map((row) => (

              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0
                  }
                }}
              >

                <TableCell component="th" scope="row">
                  {row.usuario}
                </TableCell>

                <TableCell align="right">
                  {row.hora}
                </TableCell>

                <TableCell align="right">
                  {row.estado ? "Ligado" : "Desligado"}
                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </div>
  );
}