import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dropdownlistitem from "./Dropdownlistitem";
export default function Dropdownlist(props) {
  const [config, setConfig] = React.useState("");

  const handleChange = (event) => {
    setConfig(event.target.value);
  };

  const listitems = props.list.map((item) => {
    return <MenuItem name={item}>{item}</MenuItem>;
  });
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={config}
          label=""
          onChange={handleChange}
        >
          {listitems}
        </Select>
      </FormControl>
    </Box>
  );
}
