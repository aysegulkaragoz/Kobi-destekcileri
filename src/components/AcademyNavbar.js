import logo from "../images/academyLogo.jpeg";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

const AcademyNavbar = () => {
  const [openLegal, setOpenLegal] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openConsultancy, setOpenConsultancy] = useState(false);
  const [openInovation, setOpenInovation] = useState(false);
  const [openCarbon, setOpenCarbon] = useState(false);

  const location = useLocation();

  const LegalDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-green-50 mb-5">
        <a>alt başlık</a>
        <a>alt başlık</a>
        <a>alt başlık</a>
        <a>alt başlık</a>
        <a>alt başlık</a>
      </div>
    );
  };

  const ReportDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-green-50 mb-5">
        <a href="">alt başlık</a>
        <a href="">alt başlık</a>
        <a href="">alt başlık</a>
        <a href="">alt başlık</a>
      </div>
    );
  };

  const CoursesDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-green-50 mb-5">
        <a className="disabled">
          alt başlık
        </a>
        <a className="disabled">
          alt başlık
        </a>
      </div>
    );
  };

  const ConsultancyDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-green-50 mb-5">
        <a href="">alt başlık</a>
        <a href="">alt başlık</a>
        <a href="">alt başlık</a>
      </div>
    );
  };

  const InovationDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-green-50 mb-5">
        <a href="">alt başlık</a>
        <a href="">alt başlık</a>
      </div>
    );
  };

  const CarbonDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-green-50 mb-5">
        <a href="" className="">
          alt başlık
        </a>
        <a href="" className="">
          alt başlık
        </a>
        <a href="" className="">
          alt başlık
        </a>
      </div>
    );
  };

  // const customCursorStyle = {
  //   cursor: `url(${cursorImage}), auto`
  // };

  return (
    <>
      <div
        className="flex flex-row lg:px-8 items-center justify-between z-[1] py-1 bg-base-100 sticky top-0"
        style={{ userSelect: "none" }}
      >
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            alt="logo"
            loading="lazy"
            src={logo}
            className="h-12 lg:h-16"
          />
          <a
            href="/akademi"
            className="font-semibold text-xl transition-colors hover:text-green-500 duration-500"
          >
            SusTech Akademi
          </a>
        </div>
        <div className="flex-row items-center gap-6 hidden lg:flex">
          <div
            className="hover: cursor-pointer"
            tabIndex="0"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenLegal(false);
              }
            }}
          >
            <p
              onClick={() => {
                setOpenConsultancy(false);
                setOpenCarbon(false);
                setOpenCourses(false);
                setOpenInovation(false);
                setOpenLegal(!openLegal);
                setOpenReport(false);
              }}
              className="transition-colors flex flex-row hover:text-green-500 duration-500"
            >
              Başlık
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                width="25px"
                height="25px"
                className={`transition-transform duration-500 ${
                  openLegal ? "rotate-180" : null
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                    fill="#00a303"
                  ></path>{" "}
                </g>
              </svg>
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-20 rounded-md absolute bg-green-50 w-64 child opacity-0 transition-opacity ease-in duration-500 ${
                openLegal ? "opacity-100 py-3" : null
              }`}
            >
              <a
                href="/hakkimizda"
                className={`hover:text-green-500 ${
                  !openLegal ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openLegal ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openLegal ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href="/kullanim-kosullari"
                className={`hover:text-green-500 ${
                  !openLegal ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href="/gizlilik-politikasi"
                className={`hover:text-green-500 ${
                  !openLegal ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
            </div>
          </div>
          <div
            className="hover: cursor-pointer"
            tabIndex="0"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenReport(false);
              }
            }}
          >
            <p
              onClick={() => {
                setOpenConsultancy(false);
                setOpenCarbon(false);
                setOpenCourses(false);
                setOpenInovation(false);
                setOpenLegal(false);
                setOpenReport(!openReport);
              }}
              className="transition-colors flex flex-row items-center hover:text-green-500 duration-500"
            >
              Başlık
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                width="25px"
                height="25px"
                className={`transition-transform duration-500 ${
                  openReport ? "rotate-180" : null
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                    fill="#00a303"
                  ></path>{" "}
                </g>
              </svg>
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-28 rounded-md absolute bg-green-50 w-80 child opacity-0 transition-opacity ease-in duration-500 ${
                openReport ? "opacity-100 py-3" : null
              }`}
            >
              <a
                href="/raporlama/kurumsal-karbon-ayak-izi"
                className={`hover:text-green-500 ${
                  !openReport ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openReport ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openReport ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openReport ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
            </div>
          </div>
          <div
            className="hover: cursor-pointer"
            tabIndex="0"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenConsultancy(false);
              }
            }}
          >
            <p
              onClick={() => {
                setOpenConsultancy(!openConsultancy);
                setOpenCarbon(false);
                setOpenCourses(false);
                setOpenInovation(false);
                setOpenLegal(false);
                setOpenReport(false);
              }}
              className="transition-colors flex flex-row items-center hover:text-green-500 duration-500"
            >
              Başlık
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                width="25px"
                height="25px"
                className={`transition-transform duration-500 ${
                  openConsultancy ? "rotate-180" : null
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                    fill="#00a303"
                  ></path>{" "}
                </g>
              </svg>
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-32 rounded-md absolute bg-green-50 w-96 child opacity-0 transition-opacity ease-in duration-500 ${
                openConsultancy ? "opacity-100 py-3" : null
              }`}
            >
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openConsultancy ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openConsultancy ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openConsultancy ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
            </div>
          </div>
          <div
            className="hover: cursor-pointer"
            tabIndex="0"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenInovation(false);
              }
            }}
          >
            <p
              onClick={() => {
                setOpenConsultancy(false);
                setOpenCarbon(false);
                setOpenCourses(false);
                setOpenInovation(!openInovation);
                setOpenLegal(false);
                setOpenReport(false);
              }}
              className="transition-colors flex flex-row items-center hover:text-green-500 duration-500"
            >
              Başlık
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                width="25px"
                height="25px"
                className={`transition-transform duration-500 ${
                  openInovation ? "rotate-180" : null
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                    fill="#00a303"
                  ></path>{" "}
                </g>
              </svg>
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-24 rounded-md absolute bg-green-50 w-80 child opacity-0 transition-opacity ease-in duration-500 ${
                openInovation ? "opacity-100 py-3" : null
              }`}
            >
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openInovation ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openInovation ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
            </div>
          </div>
          <div
            className="hover: cursor-pointer"
            tabIndex="0"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenCarbon(false);
              }
            }}
          >
            <p
              onClick={() => {
                setOpenConsultancy(false);
                setOpenCarbon(!openCarbon);
                setOpenCourses(false);
                setOpenInovation(false);
                setOpenLegal(false);
                setOpenReport(false);
              }}
              className="transition-colors flex flex-row items-center hover:text-green-500 duration-500"
            >
              Başlık
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                width="25px"
                height="25px"
                className={`transition-transform duration-500 ${
                  openCarbon ? "rotate-180" : null
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                    fill="#00a303"
                  ></path>{" "}
                </g>
              </svg>
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-16 rounded-md absolute bg-green-50 w-64 child opacity-0 transition-opacity ease-in duration-500 ${
                openCarbon ? "opacity-100 py-3" : null
              }`}
            >
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
              <a
                href=""
                className={`hover:text-green-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
                alt başlık
              </a>
            </div>
          </div>
          <a
            href=""
            className="transition-colors hover:text-green-500 duration-500"
          >
            Başlık
          </a>
          <a
            href="/iletisim"
            className="transition-colors btn bg-transparent hover:bg-transparent parent group duration-1000 relative overflow-hidden w-24"
          >
            <div
              className="absolute w-40 h-40 rounded-full mt-44 flex items-center justify-center transition-transform duration-500 group-hover:scale-150"
              style={{
                transitionDuration: "1500ms",
                backgroundColor: "#b9ed8e",
              }}
            ></div>
            <p className="absoulute z-10">İletişim</p>
          </a>
        </div>
        {/* HAMBURGER MENU */}
        {/* HAMBURGER MENU */}
        {/* HAMBURGER MENU */}
        {/* HAMBURGER MENU */}
        <div className="lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost"
              >
                <MenuIcon />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu px-4 py-8 w-80 min-h-full bg-base-100 text-base-content gap-7">
                <a
                  className="menu-item flex flex-row items-center gap-3 border-b border-b-slate-100 text-lg"
                  href=""
                >
                  <svg
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke=""
                    width="40px"
                    height="40px"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                        fill="#00a303"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Anasayfa</p>
                </a>
                <div className="menu-item border-b border-b-slate-100 flex flex-col items-start text-lg gap-5">
                  <div className="flex flex-row items-center gap-3">
                    <svg
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke=""
                      width="40px"
                      height="40px"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                          fill="#00a303"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p
                      onClick={() => {
                        setOpenLegal(!openLegal);
                        setOpenConsultancy(false);
                        setOpenCarbon(false);
                        setOpenCourses(false);
                        setOpenInovation(false);
                        setOpenReport(false);
                      }}
                      className="transition-colors duration-500 text-lg hover:cursor-pointer"
                      style={{ userSelect: "none" }}
                    >
                      {"Başlık "}
                      {openLegal ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                      )}
                    </p>
                  </div>
                  {openLegal ? <LegalDropdownOpened /> : null}
                </div>
                <div className="menu-item border-b border-b-slate-100 flex flex-col items-start text-lg gap-5">
                  <div className="flex flex-row items-center gap-3">
                    <svg
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke=""
                      width="40px"
                      height="40px"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                          fill="#00a303"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p
                      onClick={() => {
                        setOpenLegal(false);
                        setOpenConsultancy(false);
                        setOpenCarbon(false);
                        setOpenCourses(false);
                        setOpenInovation(false);
                        setOpenReport(!openReport);
                      }}
                      className="transition-colors duration-500 text-lg hover:cursor-pointer"
                      style={{ userSelect: "none" }}
                    >
                      {"Başlık "}
                      {openReport ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                      )}
                    </p>
                  </div>
                  {openReport ? <ReportDropdownOpened /> : null}
                </div>
                <div className="menu-item border-b border-b-slate-100 flex flex-col items-start text-lg gap-5">
                  <div className="flex flex-row items-center gap-3">
                    <svg
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke=""
                      width="40px"
                      height="40px"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                          fill="#00a303"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p
                      onClick={() => {
                        setOpenLegal(false);
                        setOpenConsultancy(!openConsultancy);
                        setOpenCarbon(false);
                        setOpenCourses(false);
                        setOpenInovation(false);
                        setOpenReport(false);
                      }}
                      className="transition-colors duration-500 text-lg hover:cursor-pointer"
                      style={{ userSelect: "none" }}
                    >
                      {"Başlık"}
                      {openConsultancy ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                      )}
                    </p>
                  </div>
                  {openConsultancy ? <ConsultancyDropdownOpened /> : null}
                </div>
                <div className="menu-item border-b border-b-slate-100 flex flex-col items-start text-lg gap-5">
                  <div className="flex flex-row items-center gap-3">
                    <svg
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke=""
                      width="40px"
                      height="40px"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                          fill="#00a303"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p
                      onClick={() => {
                        setOpenLegal(false);
                        setOpenConsultancy(false);
                        setOpenCarbon(false);
                        setOpenCourses(false);
                        setOpenInovation(!openInovation);
                        setOpenReport(false);
                      }}
                      className="transition-colors duration-500 text-lg hover:cursor-pointer"
                      style={{ userSelect: "none" }}
                    >
                      {"Başlık "}
                      {openInovation ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                      )}
                    </p>
                  </div>
                  {openInovation ? <InovationDropdownOpened /> : null}
                </div>
                <div className="menu-item border-b border-b-slate-100 flex flex-col items-start text-lg gap-5">
                  <div className="flex flex-row items-center gap-3">
                    <svg
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke=""
                      width="40px"
                      height="40px"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                          fill="#00a303"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p
                      onClick={() => {
                        setOpenCarbon(!openCarbon);
                        setOpenConsultancy(false);
                        setOpenCourses(false);
                        setOpenInovation(false);
                        setOpenLegal(false);
                        setOpenReport(false);
                      }}
                      className="transition-colors duration-500 text-lg hover:cursor-pointer"
                      style={{ userSelect: "none" }}
                    >
                      {"Başlık "}
                      {openCarbon ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                      )}
                    </p>
                  </div>
                  {openCarbon ? <CarbonDropdownOpened /> : null}
                </div>
                <a
                  className="menu-item border-b flex flex-row items-center gap-3 border-b-slate-100 text-lg"
                  href=""
                >
                  <svg
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke=""
                    width="40px"
                    height="40px"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                        fill="#00a303"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Başlık</p>
                </a>
                <div className="flex flex-1 items-end">
                  <div className="grid grid-flow-col w-full gap-8 justify-center">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyNavbar;
