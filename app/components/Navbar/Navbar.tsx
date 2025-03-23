"use client"; // Ensure this is a Client Component

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const t = useTranslations("Navbar");

    // Get the current locale (language)
    const locale = useLocale();
    const isRTL = locale === "ar"; // Correct detection of Arabic

    return (
        <nav className="navbar navbar-expand-lg bg-bluish-white p-4">
            {/* Main flex container for direction switching */}
            <div className="d-flex justify-content-between align-items-start align-items-md-center w-100 flex-row-reverse">

                {/* Left Section: Search Bar & Icons */}
                <div className="d-flex align-items-center flex-row-reverse w-75">
                    {/* Search Bar */}
                    <form className="d-flex">
                        <div className={`d-flex form-control align-items-center position-relative m-0 mx-md-2 rounded-4 ${isRTL ? "flex-row-reverse me-0" : "ms-0"}`}>

                            {/* Search Icon (Left for RTL, Right for LTR) */}
                            {!isRTL && (
                                <button className="border-0 bg-transparent">
                                    <CiSearch className="text-d-black my-1" size={18} />
                                </button>
                            )}

                            {/* Search Input */}
                            <input
                                className="custom-search-input border-0 w-100 px-1 fs-6"
                                type="search"
                                placeholder={t("search")}
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    direction: isRTL ? "rtl" : "ltr",
                                    textAlign: isRTL ? "right" : "left",
                                }}
                            />

                            {/* Search Icon (Right for LTR, Left for RTL) */}
                            {isRTL && (
                                <button className="border-0 bg-transparent">
                                    <CiSearch className="text-d-black my-1" size={18} />
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Icons: Notifications & User */}
                    <div className={` d-none d-md-flex align-items-center  ${isRTL ? "ms-3" : "me-3"}`}>
                        <button className="btn btn-light p-1">
                            <IoNotifications className="text-primary" size={20} />
                        </button>
                        <button className="btn btn-light p-1">
                            <FaUser className="text-primary" size={18} />
                        </button>
                    </div>
                </div>

                {/* Right Section: Breadcrumbs */}
                <div className="d-flex flex-column w-50 w-md-100">
                    <div className="d-flex flex-row-reverse justify-content-end">
                        <p className="text-m-black px-1 m-0">{t("home")}</p>
                        <p className="m-0"> {t("dashboard")} /</p>
                    </div>
                    <h5 className="text-d-black">{t("dashboard")}</h5>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
