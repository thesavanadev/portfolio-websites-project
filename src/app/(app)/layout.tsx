import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";

import "@/app/globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: "Michael's Sample Portfolio",
		template: "%s | Michael Owuor",
	},
	description: "A modern and minimalist sample portfolio by Michael Owuor.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<head>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>

			<body className={cn("font-sans antialiased", fontSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
