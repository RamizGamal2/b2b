"use client";


import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import logo from '../../assets/logo.png'
import home from '../../assets/home.svg'
import stat from '../../assets/stat.svg'
import card from '../../assets/card.svg'
import notif from '../../assets/notif.svg'
import option from '../../assets/option.svg'
import profile from '../../assets/profile.svg'
import ai from '../../assets/ai.svg'
import helpIcon from '../../assets/helpIcon.svg'
import setting from '../../assets/setting.svg'
import background from '../../assets/background.svg'
import Navbar from '../Navbar/Navbar';

export default function Sidebar() {
  const t = useTranslations('Sidebar');

  const [actv, setActv] = useState("");



  useEffect(() => {


    setActv("first")




  }, [setActv])


  return <>

    <div className=' d-flex flex-column'>

      <nav className="navbar navbar-light navbar-expand-lg      m-4     ">
        <div className="container-fluid  d-flex flex-sm-row flex-lg-column flex-row flex-md-row flex-xl-column min-vh-lg-100    align-items-start p-0  ">

          <Link className='text-white text-decoration-none  m-auto  d-flex justify-content-center ' role='button' href="/">

            <Image src={logo} alt="" width={115} height={32} />
          </Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse ms-4 me-4 " id="navbarSupportedContent">
            <ul className="navbar-nav   d-lg-flex  flex-lg-column  justify-content-start align-items-start   p-0 ">

              <li className={`nav-item d-flex text-white  pt-4  align-items-center  `}>
                <Image src={home} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link  " aria-current="page" href="/users">{t('dashboard')}</Link>
              </li>

              <li className={`nav-item d-flex  text-white align-items-center `}>
                <Image src={stat} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/assignments">{t('Employee progress')}</Link>
              </li>

              <li className={`nav-item d-flex text-white  align-items-center   `}>
                <Image src={card} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/insights/user-adoption">{t('Subscription Management')}</Link>
              </li>

              <li className={`nav-item d-flex text-white  align-items-center  `}>
                <Image src={notif} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/engagement/progress-tracker">{t('Notifications')}</Link>
              </li>

              <li className={`nav-item d-flex text-white  align-items-center `}>
                <Image src={option} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/org-settings">{t('Technical Support')}</Link>
              </li>


              <li className={`nav-item d-flex text-white  align-items-center  `}>

                <Link className="nav-link" aria-current="page" href="/insights/user-adoption">{t('Account Management')}</Link>
              </li>

              <li className={`nav-item d-flex text-white align-items-center  `}>
                <Image src={profile} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/engagement/progress-tracker">{t('Organization Profile')}</Link>
              </li>

              <li className={`nav-item d-flex text-white  align-items-center `}>
                <Image src={ai} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/org-settings">{t('AI Assistant')}</Link>
              </li>

              <li className={`nav-item d-flex text-white  align-items-center `}>
                <Image src={setting} alt="Dashboard" width={30} height={30} />
                <Link className="nav-link" aria-current="page" href="/org-settings">{t('Settings')}</Link>
              </li>


            </ul>
          </div>
        </div>











      </nav>



      <div className='  position-relative m-4   ps-4 pe-4  d-lg-flex d-sm-none d-none'>


        <Image src={helpIcon} width={35} height={35} className=' position-absolute' style={{ top: '10px', right: '40px' }} />

        <div className=' position-absolute  ' style={{ top: '50px', right: '50px' }} >

                       <h4 className=' ft'>تحتاج مساعده</h4>
          <h6 className=' ft w-75' > شات مدعوم بالذكاء الاصطناعي للإجابة على استفساراتك فورًا!ه</h6>

        </div>
           
        <button className=' position-absolute btn btn-light  mt-4' style={{ top: '95px', right: '50px' }}>  تحدث إلى مساعدك الآلي        </button>

        <Image src={background} alt="Dashboard" width={218} height={169.5} />
      </div>

    </div>
  </>
}
