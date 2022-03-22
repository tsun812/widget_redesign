import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dropdownlistitem from "./Dropdownlistitem";
export default function Dropdownheading(props) {
  return (
    <div class="col-md-12 title-block">
      <div class="option-text">{props.name}</div>
    </div>
  );
}
