import { Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter500 = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});
export const inter600 = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});
export const inter200 = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
