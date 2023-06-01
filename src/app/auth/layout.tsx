import AuthNavbar from '@/components/Navbars/AuthNavbar';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Auth({ children }: Props) {
  return (
    <>
      <AuthNavbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/register_bg_2.png')",
            }}
          ></div>
          {children}
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
