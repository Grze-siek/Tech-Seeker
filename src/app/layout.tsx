import FooterAdmin from '@/components/Footers/FooterAdmin';
import AdminNavbar from '@/components/Navbars/AdminNavbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { ReactNode } from 'react';
import './globals.css';
import '../styles/tailwind.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          <div className="px-4 md:px-10 mx-auto w-full">
            {children}
            <FooterAdmin />
          </div>
        </div>
      </body>
    </html>
  );
}
