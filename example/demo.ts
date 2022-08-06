import './styles/example.css'
import Grid from '../src/main'
import { USERS } from "./utils/generate";

new Grid.ListGrid({
  parentElement: document.getElementById('app'),
  header: [
    { field: "personid", caption: "ID", width: 100 },
    { field: "fname", caption: "First Name", width: 200 },
    { field: "lname", caption: "Last Name", width: 200 },
    { field: "email", caption: "Email", width: 250 },
  ],
  frozenColCount: 1,
  records: USERS
})
