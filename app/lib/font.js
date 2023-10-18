import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const gt_america = localFont({
  src: [
    {
      path: "./GT-America-Mono-Bold-Trial.woff2",
      weight: "800",
      style: "normal",
    },

    {
      path: "./GT-America-Mono-Black-Trial.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./GT-America-Expanded-Bold-Trial.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./GT-America-Expanded-Black-Trial.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./GT-America-Mono-Bold-Italic-Trial.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./GT-America-Mono-Black-Italic-Trial.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./GT-America-Expanded-Bold-Italic-Trial.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./GT-America-Expanded-Black-Italic-Trial.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});
