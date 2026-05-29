import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Boss Auto Repairs - Car Repair & Maintenance Service',
  description: 'Expert car repair and maintenance service in Newcastle, specializing in Mercedes-Benz, engine diagnostics, brakes, and servicing for all vehicle makes. Fast, efficient, and friendly service you can trust.',
  keywords: ["car repair, auto maintenance, Mercedes-Benz specialist, engine diagnostics, brakes, servicing, clutch replacement, auto electric, Newcastle, Kwazulu Natal"],
  openGraph: {
    "title": "Boss Auto Repairs - Car Repair & Maintenance Service",
    "description": "Expert car repair and maintenance service in Newcastle, specializing in Mercedes-Benz, engine diagnostics, brakes, and servicing for all vehicle makes.",
    "url": "https://bossauto-repairs.co.za",
    "siteName": "Boss Auto Repairs",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/professional-work-man-blue-uniform-black-hat-repairing-damaged-automobile_146671-16088.jpg",
        "alt": "Clean car repair garage"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Boss Auto Repairs - Car Repair & Maintenance Service",
    "description": "Expert car repair and maintenance service in Newcastle, specializing in Mercedes-Benz, engine diagnostics, brakes, and servicing for all vehicle makes.",
    "images": [
      "http://img.b2bpic.net/free-photo/professional-work-man-blue-uniform-black-hat-repairing-damaged-automobile_146671-16088.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
