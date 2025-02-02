"use client";
import { useState } from "react";
import { Avatar, Typography, IconButton } from "@mui/joy";
import { AppBar, Toolbar, Button, Drawer } from "@mui/material";
import SearchBar from "./searchbar";
import Link from "next/link";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useMediaQuery } from "@mui/material";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f5f5f5",
        boxShadow: "none", // Remove shadow if needed
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
        }}
      >
        {/* Left-aligned Logo */}
        <Link href="/">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            GrabHUB
          </Typography>
        </Link>

        {/* Right-aligned container */}
        <div className="flex items-center gap-4">
          {/* Show Search Bar on Desktop, Search Icon on Mobile */}
          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Search size={22} />
            </IconButton>
          ) : (
            <div className="w-[300px] lg:w-[400px]">
              <SearchBar />
            </div>
          )}

          {/* Cart Button (Hidden on Mobile) */}
          {!isMobile && <Button startIcon={<ShoppingCart />}>Cart</Button>}

          {/* Mobile Menu Icon */}
          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Menu size={24} />
            </IconButton>
          ) : (
            <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
              U
            </Avatar>
          )}
        </div>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="p-4 w-[250px] flex flex-col items-center gap-4">
          <SearchBar />
          <Button startIcon={<ShoppingCart />} fullWidth>
            Cart
          </Button>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            U
          </Avatar>
        </div>
      </Drawer>
    </AppBar>
  );
}
