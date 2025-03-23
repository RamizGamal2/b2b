import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import LineChart from "../components/charts/LineChart/LineChart";

import React from 'react'
import Image from 'next/image'
import notif from '../assets/notif.svg'
import Line from '../assets/Line.svg'
import circle from '../assets/circle.svg'

import DashboardCards from "../components/Home/DashboardCards";
import Link from "next/link";
import ActiveUsersAnalysis from '../components/Home/ActiveUsersAnalysis';

export default function Home() {
  const t = useTranslations("Dashboard");

  // Get the current locale (language)
  const locale = useLocale();
  const isRTL = locale === "ar"; // Correct detection of Arabic

  const trainingData = [
    { program: "تدريب مهارات القيادة", employees: 6, completion: 60 },
    { program: "تحليل البيانات المتقدم", employees: 2, completion: 10 },
    { program: "خدمة العملاء الاحترافية", employees: 3, completion: 100 },
    { program: "تطوير المهارات الرقمية", employees: 5, completion: 100 },
    { program: "تحسين تجربة العملاء", employees: 7, completion: 25 },
    { program: "تدريب مهارات القيادة", employees: 3, completion: 40 },
  ];


  return (
    <>
      <DashboardCards />

      {/* Cards Section */}
      <div className="row flex-md-row flex-column mt-4 mx-2">
        {/* Card 1 */}
        <div className="col-lg-6  mb-4 mb-lg-0">
          <div className="card border-0 shadow-sm overflow-hidden p-3 bg-white rounded-3 h-auto">
            <div className="position-relative rounded-2">
              <Image
                src="/assets/img.webp"
                alt="Training"
                width={200}
                height={250}
                className="w-100 rounded-2"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 end-0 p-4 text-white d-flex flex-column justify-content-between h-100 rounded-2"
                style={{ background: "linear-gradient(0deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)", width: "100%", height: "100%" }}
              >
                <div className="d-flex flex-column w-lg-50">
                  <h3 className="text-white">{t("training_dashboard_title")}</h3>
                  <h4 className="text-white">{t("training_dashboard_desc")}</h4>
                </div>
                <Link href="#" className="text-white fw-semibold text-decoration-none" style={{ fontSize: "14px" }}>
                  {t("training_dashboard_cta")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm d-flex flex-sm-row align-items-start p-3 bg-white rounded-3 h-auto">
            <div className="w-auto">
              <Image
                src="/assets/logoVector.webp"
                alt="Anasco Logo"
                width={200}
                height={250}
                className="w-100 w-md-75"
              />
            </div>
            <div className={`col-md-6 mt-4 ${isRTL ? "me-4" : "ms-4"}`}>
              <h3 className="fw-bold mb-2">{t("training_system_title")}</h3>
              <p className="mb-2">{t("training_system_desc")}</p>
              <Link href="#" className="text-secondary fw-semibold text-decoration-none">
                {t("training_system_cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row flex-md-row flex-column mt-4 mx-2">
        <div className='col-lg-7 mb-4 mb-lg-0'>
          <div className='container bg-white px-2 p-md-5 rounded-4 shadow-sm h-100'>
            <h3>  متابعة أداء البرامج التدريبية   </h3>
            <h6>  إحصائيات مرئية حول مدى تفاعل المتدربين مع الدورات التدريبية.  </h6>
            <LineChart />
          </div>
        </div>

        <ActiveUsersAnalysis />
      </div>

      <div className='  w-100 d-flex flex-column mx-2 mt-4'>

        <div className=' d-flex gap-4  flex-lg-row  flex-md-row flex-sm-column flex-row  '>

          <div className='col-lg-5 mb-4 mb-lg-0'>

            <div className='  mt-3 container bg-white p-5 rounded-4 shadow-sm'>

              <h3>   تحديثات التدريب الأخيرة  </h3>


              <div className=' d-flex  mt-5 flex-column gap-2   '>

                <div className=' d-flex gap-3 '>
                  <div className=' d-flex flex-column align-items-center'>

                    <Image src={notif} alt='notif' width={35} height={35} />
                    <Image src={Line} alt='line' />
                  </div>
                  <div>
                    <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>

                    <h6 >  22 يناير 2025</h6>

                  </div>

                </div>

                <div className=' d-flex gap-3'>
                  <div className=' d-flex flex-column align-items-center'>

                    <Image src={notif} alt='notif' width={35} height={35} />

                    <Image src={Line} alt='line' />
                  </div>
                  <div>
                    <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>
                    <h6>  22 يناير 2025</h6>
                  </div>

                </div>

                <div className=' d-flex gap-3'>
                  <div className=' d-flex flex-column align-items-center'>

                    <Image src={notif} alt='notif' width={35} height={35} />

                    <Image src={Line} alt='line' />
                  </div>
                  <div>
                    <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>
                    <h6>  22 يناير 2025</h6>
                  </div>

                </div>


                <div className=' d-flex gap-3'>
                  <div className=' d-flex flex-column align-items-center'>

                    <Image src={notif} alt='notif' width={35} height={35} />

                    <Image src={Line} alt='line' />
                  </div>
                  <div>
                    <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>
                    <h6>  22 يناير 2025</h6>
                  </div>

                </div>
              </div>




            </div>
          </div>
          <div className='col-lg-7 '>
            <div className='  mt-3  container  bg-white p-5 rounded-4 shadow-sm h-100'>

              <h3>   برامج التدريب الجارية </h3>
              <div className=' d-flex gap-2'>
                <Image src={circle} alt='circle' />
                <h6>  تم إكمال 14 برنامج تدريبي  خلال شهر  </h6>
              </div>

              <div className="container mt-4">
                <table className="table  text-end align-middle">
                  <thead className="">
                    <tr>
                      <th>البرنامج التدريبي</th>
                      <th>الموظفين المسجلين</th>
                      <th>نسبة الإنجاز</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingData.map((item, index) => (
                      <tr key={index} >
                        <td className=' p-3'>{item.program}</td>
                        <td>
                          <div className="d-flex">
                            {[...Array(item.employees)].map((_, i) => (
                              <img
                                key={i}
                                src={`https://i.pravatar.cc/30?img=${i + 1}`}
                                className="rounded-circle  "
                                width="15"
                                height="15"
                                alt="Employee"
                              />
                            ))}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center  flex-row-reverse  gap-2">

                            <strong className="text-primary">{item.completion}%</strong>

                            <div className="progress flex-grow-1" style={{ height: "8px" }}>

                              <div
                                className="progress-bar bg-primary"
                                style={{ width: `${item.completion}%` }}
                              >

                              </div>
                            </div>

                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>




            </div>
          </div>
        </div>
      </div>

    </>
  );
}
