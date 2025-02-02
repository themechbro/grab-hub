import { Typography } from "@mui/joy";
import { Paper } from "@mui/material";
import Image from "next/image";
import { OctagonAlert } from "lucide-react";
export default function Offers() {
  return (
    <div className="p-4">
      <Typography level="h3" className="text-xl font-semibold mb-4">
        Offers
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* No Offers Available - Takes Full Width on Mobile, 2/3 on Desktop */}
        <div className="md:col-span-2">
          <Paper
            elevation={1}
            className="p-4 flex items-center justify-center text-center"
          >
            <Typography level="h4" className="flex items-center gap-2 text-lg">
              <OctagonAlert className="text-red-500" /> No Offers Available
            </Typography>
          </Paper>
        </div>

        {/* Explore Offers Section - Full Width on Mobile, 1/3 on Desktop */}
        <div className="md:col-span-1">
          <Paper
            elevation={2}
            className="w-full p-4 flex flex-col items-center text-center"
          >
            <Typography level="title-lg" className="text-base font-medium mb-2">
              Explore more ways to find offers with{" "}
            </Typography>
            <Image
              src="/Untitled.png"
              alt="Scan QR Code"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Typography level="body-sm" className="text-gray-500 mt-2">
              Scan the QR code
            </Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
}
