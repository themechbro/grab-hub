import { Avatar, Typography } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";
import SearchBar from "./searchbar";
export default function Navbar() {
  return (
    <AppBar
      //   position="static"
      sx={{
        backgroundColor: "#f5f5f5",
        // Optional: remove shadow if needed
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4, // Horizontal padding instead of mx-20
        }}
      >
        {/* Left-aligned Typography */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "text.primary", // Ensure proper contrast
          }}
        >
          GrabHUB
        </Typography>

        {/* Right-aligned container */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* SearchBar with responsive width */}
          <div style={{ width: 400 }}>
            <SearchBar />
          </div>

          {/* Avatar */}
          <Avatar
            sx={{
              bgcolor: "primary.main", // Use theme color
              width: 40,
              height: 40,
            }}
          >
            U
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}
