import * as React from "react";
import "./index.css";
import materialTheme from "./themes/material";

import {
  ThemeProvider,
  FormControl,
  FormLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Box,
  Button
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={materialTheme}>
        <Box bgcolor="secondary.main" p={2}>
          <Box p={2} bgcolor="secondary.light">
            <Typography variant="subtitle1" color="textSecondary">
              We only work with a select group of artists, so your submission
              matters.
            </Typography>
            <FormControl fullWidth>
              <FormLabel htmlFor="my-input">First name</FormLabel>
              <OutlinedInput
                id="my-input"
                aria-describedby="my-helper-text"
                placeholder="Required"
                required
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel htmlFor="role">Role</FormLabel>
              <Select
                defaultValue="none"
                variant="outlined"
                id="role"
                displayEmpty
              >
                <MenuItem value="none" disabled>
                  Select one
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box display="flex" alignItems="flex-end" flexDirection="column">
              <Button variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
