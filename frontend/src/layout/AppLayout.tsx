import React from "react";
import "../shared/styles/index.css";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className='flex flex-col min-h-screen px-4 md:px-0 py-2'>
        <Header />
        <main className='flex-grow pt-36 flex flex-col w-full h-full justify-center items-center'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
