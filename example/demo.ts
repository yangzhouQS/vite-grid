import './styles/example.css'
import { ListGrid, columns } from '../src/main'
import { getListData } from "./utils/generate";

const listData = getListData(1)
const headerColumns: any = [
  {
    caption: "序号", width: 100,
    columnType: new columns.type.RowIndex({
      /*convert: function (value, displayValue, cell, grid) {
         return cell.row - grid.frozenRowCount + 1;
       },*/
    }),
    style: {
      textAlign: "center",
    },
  },
  { field: "userId", caption: "userId", width: 100 },
  { field: "username", caption: "username", width: 200 },
  { field: "phone", caption: "phone", width: 200 },
  { field: "email", caption: "Email", width: 250 },
  { field: "address", caption: "address", width: 250 },
  { field: "avatar", caption: "avatar", width: 250 },
  { field: "password", caption: "password", width: 250 },
  { field: "birthdate", caption: "birthdate", width: 250 },
  { field: "registeredAt", caption: "registeredAt", width: 250 },
]

// @ts-ignore
const grid = new ListGrid({
  parentElement: document.getElementById('app'),
  header: headerColumns,
  frozenColCount: 1,
  records: listData,
  // theme: 'BASIC',
  // theme: 'MATERIAL_DESIGN'
})

// @ts-ignore
// grid.theme = customTheme as themes
