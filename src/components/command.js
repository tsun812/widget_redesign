import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { InputAdornment } from "@mui/material";
export default function Command(props) {
  const [command, setCommand] = React.useState("");

  const handleClick = (event) => {
    // console.log(event.target.value);
    // setCommand(event.target.value);
    // navigator.clipboard.writeText(this.state.textToCopy);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} fullWidth>
      <InputLabel htmlFor="outlined-adornment-password">
        Run this Command
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={"text"}
        value={"placeholder"}
        onChange={handleClick()}
        readOnly={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color="primary"
              aria-label="copy to click board"
              component="span"
              onClick={handleClick}
            >
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Command"
      />
    </FormControl>
  );
}
