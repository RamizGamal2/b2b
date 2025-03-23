import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";

import DashboardCards from "../components/Home/DashboardCards";
import Image from "next/image";
import Link from "next/link";
import ActiveUsersAnalysis from '../components/Home/ActiveUsersAnalysis';

export default function Home() {
  const t = useTranslations("Dashboard");

  // Get the current locale (language)
  const locale = useLocale();
  const isRTL = locale === "ar"; // Correct detection of Arabic

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
        <ActiveUsersAnalysis />
      </div>
    </>
  );
}
