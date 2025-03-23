import "@/sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import Navbar from '../components/Navbar/Navbar';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/sideBar/Sidebar';

import "./../globals.css";


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider>
          <div className='d-flex flex-column flex-md-row'>
            <Sidebar />
            <div className='w-100'>
              <Navbar />
              <main className="p-2 bg-bluish-white">{children}</main>
            </div>
          </div>
        </NextIntlClientProvider>
      </body >
    </html >
  );
}