import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ClearButton = () => {
  return (
    <div>
      <FormControlLabel
        control={
          <IconButton aria-label="Tabular view">
            <ClearIcon fontSize="small" color="primary" />
          </IconButton>
        }
        label="Clear"
      />
    </div>
  );
};

export default ClearButton;
