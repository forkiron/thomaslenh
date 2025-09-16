import React from "react";
import { cn } from "../lib/utils";

export function GridBackgroundDemo() {
  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full",
        "bg-[#f0ecd1]", // paper background color
        "[background-image:repeating-linear-gradient(to_bottom,transparent,transparent_29px,#c0c0c0_30px),linear-gradient(to_right,#f0d0d0_2px,transparent_2px)]",
        "[background-size:100%_30px,100%_100%,30px_30px]",
        "[background-repeat:repeat-y,no-repeat,repeat-y]",
        "[background-position:0_90px,75px_0,0_0]"
      )}
    />
  );
}
