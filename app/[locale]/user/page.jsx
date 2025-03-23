import React from 'react'
import Sidebar from "../../componets/sideBar/Sidebar"
import Navbar from '@/app/componets/Navbar/Navbar'
import Image from 'next/image'
import LineChart from "./../../componets/charts/LineChart/LineChart"
import notif from '../../assets/notif.svg'
import Line from '../../assets/Line.svg'
import circle from '../../assets/circle.svg'

export default function User() {



  const trainingData = [
    { program: "تدريب مهارات القيادة", employees: 6, completion: 60 },
    { program: "تحليل البيانات المتقدم", employees: 2, completion: 10 },
    { program: "خدمة العملاء الاحترافية", employees: 3, completion: 100 },
    { program: "تطوير المهارات الرقمية", employees: 5, completion: 100 },
    { program: "تحسين تجربة العملاء", employees: 7, completion: 25 },
    { program: "تدريب مهارات القيادة", employees: 3, completion: 40 },
  ];








  return <>


    <div className='  w-100 d-flex flex-column '>

      <Navbar />


      <div className='   container  bg-white p-5'>

        <h3>  متابعة أداء البرامج التدريبية   </h3>
        <h6>  إحصائيات مرئية حول مدى تفاعل المتدربين مع الدورات التدريبية.  </h6>


        <LineChart />



      </div>

<div className=' d-flex gap-4  flex-lg-row  flex-md-row flex-sm-column flex-row m-4 '>

      <div className='  mt-3    container  bg-white p-5'>

        <h3>   تحديثات التدريب الأخيرة  </h3>


        <div className=' d-flex  mt-5 flex-column gap-2   '>

          <div className=' d-flex gap-3 '>
            <div className=' d-flex flex-column align-items-center'>

              <Image src={notif} width={35} height={35} />

              <Image src={Line} />
            </div>
            <div>
              <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>

              <h6 >  22 يناير 2025</h6>

            </div>

          </div>

          <div className=' d-flex gap-3'>
            <div className=' d-flex flex-column align-items-center'>

              <Image src={notif} width={35} height={35} />

              <Image src={Line} />
            </div>
            <div>
              <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>
              <h6>  22 يناير 2025</h6>
            </div>

          </div>

          <div className=' d-flex gap-3'>
            <div className=' d-flex flex-column align-items-center'>

              <Image src={notif} width={35} height={35} />

              <Image src={Line} />
            </div>
            <div>
              <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>
              <h6>  22 يناير 2025</h6>
            </div>

          </div>


            <div className=' d-flex gap-3'>
              <div className=' d-flex flex-column align-items-center'>

                <Image src={notif} width={35} height={35} />

                <Image src={Line} />
              </div>
              <div>
                <h3>   تم تسجيل 15 موظفًا جديدًا في دورة "القيادة والإدارة"    </h3>
                <h6>  22 يناير 2025</h6>
              </div>

            </div>
        </div>




      </div>


      <div className='  mt-3    container  bg-white p-5'>

        <h3>   برامج التدريب الجارية </h3>
        <div className=' d-flex gap-2'>
          <Image src={circle}  />
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
  </>
}
