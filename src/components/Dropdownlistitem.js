import { MenuItem } from "@mui/material";

export default function Dropdownlistitem(props) {
  return <MenuItem value={props.name}>{props.name}</MenuItem>;
}
