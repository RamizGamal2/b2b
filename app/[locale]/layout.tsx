import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Sidebar from '../componets/sideBar/Sidebar';
 
import "./../globals.css";


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 

  





  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>


              

<div className=" d-flex flex-sm-column flex-md-column  flex-column flex-lg-row flex-xl-row  ">
            
       
              <NextIntlClientProvider>
                           

                          <Sidebar/>

                            {children}
              </NextIntlClientProvider>



        </div>









   
      </body>
    </html>
  );
}