import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: "0px 2px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "8px", // Optional: Add rounded corners
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Optional: Add subtle shadow
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          "& .MuiInputBase-input": {
            padding: "8px 0", // Adjust input padding if needed
          },
        }}
        placeholder="Search GrabHUB"
        inputProps={{ "aria-label": "search restaurant and food" }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "primary.main", // Use theme color for the icon
        }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
