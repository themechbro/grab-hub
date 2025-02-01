import { Typography } from "@mui/joy";
import { Paper } from "@mui/material";
import Image from "next/image";
export default function Offers() {
  return (
    <div className="grid">
      <Typography level="h3">Offers</Typography>
      <Paper elevation={3} sx={{ width: 200, height: 250, margin: 2, p: 2 }}>
        <Typography level="title-lg">Scan the QR </Typography>
        <Image src="/Untitled.png" alt="my github" width={200} height={200} />
      </Paper>
    </div>
  );
}
