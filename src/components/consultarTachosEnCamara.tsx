import * as React from 'react'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid'
import { Card } from '@aws-amplify/ui-react'

const columns = [
  { field: 'idTacho', headerName: 'ID Tacho', width: 150 },
  { field: 'sabor', headerName: 'Sabor', width: 150 },
  { field: 'fechaCreacion', headerName: 'Fecha de creación', width: 200 },
  { field: 'litros', headerName: 'Litros', type: 'number', width: 100 },
  { field: 'estado', headerName: 'Estado', width: 150 },
  { field: 'sucursal', headerName: 'Sucursal', width: 200 }
]
interface Data {
  idTacho: string
  sabor: string
  fechaCreacion: string
  litros: number
  estado: string
  sucursal: string
}
function createData(
  idTacho: string,
  sabor: string,
  fechaCreacion: string,
  litros: number,
  estado: string,
  sucursal: string
): Data {
  return {
    idTacho,
    sabor,
    fechaCreacion,
    litros,
    estado,
    sucursal
  }
}
const now = new Date() // crea una instancia de la fecha y hora actuales
const formattedDate = now.toLocaleDateString('es-ES') // formato de fecha: "dd/mm/yyyy"
const formattedTime = now.toLocaleTimeString('es-ES') // formato de hora: "hh:mm:ss"
const formattedDateTime = `${formattedDate} ${formattedTime}`

const rows = [
  createData(
    '20230326FRU0001',
    'Frutilla',
    formattedDateTime,
    10,
    'En Camara',
    'LEROMA VALPARAÍSO'
  ),
  createData(
    '20230326DLB0001',
    'Dulce de Leche Biscotti',
    formattedDateTime,
    10,
    'En Camara',
    'LEROMA MANANTIALES'
  ),
  createData(
    '20230326DLB0002',
    'Frutilla',
    formattedDateTime,
    10,
    'En Camara',
    'LEROMA MANANTIALES'
  ),
  createData(
    '20230326CHB0001',
    'Chocolate Blanco',
    formattedDateTime,
    10,
    'En Camara',
    ''
  ),
  createData(
    '20230326CHB0002',
    'Chocolate Blanco',
    formattedDateTime,
    10,
    'En Camara',
    'LEROMA RECTA'
  )
].map((row, index) => ({ ...row, id: index + 1 }))

export default function GrillaTachosEnCamara() {
  return (
    <Card>
      <div style={{ height: 600 }}>
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          autoHeight
          columns={columns}
          rows={rows}
          sx={{
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main'
            },
            backgroundColor: 'black',
            '& .MuiDataGrid-filterForm': {
              bgcolor: 'lightblue',
              width: '50%'
            },
            '	.MuiDataGrid-filterForm': { width: 100 }
          }}
          slots={{
            toolbar: GridToolbar
          }}
          initialState={{
            filter: {
              filterModel: {
                items: [
                  {
                    field: 'estado',
                    operator: 'equals',
                    value: 'En Camara'
                  }
                ]
              }
            }
          }}
        />
      </div>
    </Card>
  )
}
