import Logo1 from "../images/Logo3.png";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [openLegal, setOpenLegal] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openConsultancy, setOpenConsultancy] = useState(false);
  const [openInovation, setOpenInovation] = useState(false);
  const [openCarbon, setOpenCarbon] = useState(false);

  const location = useLocation();

  const LegalDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-blue-50 mb-5">
        <a href="/hakkimizda">Hakkımızda</a>
        <a href="/sosyal-sorumlulugumuz">Sosyal Sorumluluğumuz</a>
        <a href="/medyada-biz">Medyada Biz</a>
        <a href="/kullanim-kosullari">Kişisel Verilerin Korunması</a>
        <a href="/gizlilik-politikasi">Çerez Politikamız</a>
        <a href="/sikca-sorulan-sorular">S.S.S</a>
      </div>
    );
  };

  

  const ReportDropdownOpened = () =>{

  };

 

  const CoursesDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-blue-100 mb-5">
     
      </div>
    );
  };

  const ConsultancyDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-blue-100 mb-5">

      </div>
    );
  };

  const InovationDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-blue-100 mb-5">
        <a href="/eco-inovasyon/yenilenebilir-enerji-sistemleri-tasarimi">
          Girişimci – İş Kurma Desteği
        </a>
        <a href="/eco-inovasyon/proses-verimliligi-ve-optimizasyonu">
          İş Geliştirme Desteği Programı
        </a>
        <a href="/eco-inovasyon/su-verimliligi-ve-optimizasyonu">
          Su Verimliliği ve Optimizasyonu
        </a>
      </div>
    );
  };







  const CarbonDropdownOpened = () => {
    return (
      <div className="pl-3 py-1 flex flex-col gap-3 w-full rounded-box bg-blue-100 mb-5">
      
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
          <img alt="logo" loading="lazy" src={Logo1} className="h-44 w-50 lg:h-16" />
          <a
            href="/"
            className="font-semibold text-xl transition-colors text-blue-500 hover:text-blue-300 duration-500"
          >
            KOBİ DESTEKÇİSİ
          </a>
        </div>
        <div className="flex-row items-center gap-6 hidden lg:flex">
         
           
              
          
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
                window.location.href='/yurt-disi-sirket-danismanlik';
              }}
              className="relative transition-colors duration-500 hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-500 before:origin-left hover:before:scale-x-100"
            >
              Yurt Dışı Şirket Kurma
             
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
                    fill="#465FEC"
                  ></path>{" "}
                </g>
              
            </p>
           
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
                window.location.href='/yatirim-tesvik';
              }}
              className="relative transition-colors duration-500 hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-500 before:origin-left hover:before:scale-x-100"
            >
              Yatırım Teşvik 
              
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
              
            </p>
           
          </div>
          <a
  href="/yesil-destekler"
  className="relative transition-colors duration-500 hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-500 before:origin-left hover:before:scale-x-100"
>
  Yeşil Destekler
  <span
    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform duration-500 origin-left hover:scale-x-100"
  ></span>
</a>
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
              className="relative transition-colors duration-500 hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-500 before:origin-left hover:before:scale-x-100"
            >
              KOSGEB Destekleri
             
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
              
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-24 rounded-md absolute bg-blue-100 w-80 child opacity-0 transition-opacity ease-in duration-500 ${
                openInovation ? "opacity-100 py-3" : null
              }`}
            >
              <a
                href="/eco-inovasyon/yenilenebilir-enerji-sistemleri-tasarimi"
                className={`hover:text-blue-500 ${
                  !openInovation ? "hidden" : null
                }`}
              >
                Girişimci – İş Kurma Desteği
              </a>
              <a
                href="/eco-inovasyon/proses-verimliligi-ve-optimizasyonu"
                className={`hover:text-blue-500 ${
                  !openInovation ? "hidden" : null
                }`}
              >
                İş Geliştirme Desteği Programı
              </a>
              <a
                href="/yesil-destekler"
                className={`hover:text-blue-500 ${
                  !openInovation ? "hidden" : null
                }`}
              >
                Yeşil Destekler
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
              className="relative transition-colors duration-500 hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-500 before:origin-left hover:before:scale-x-100"
            >
              Tübitak Destekleri
             
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
              
            </p>
            <div
              className={`flex flex-col mt-7 gap-3 px-5 -translate-x-16 rounded-md absolute bg-blue-50 w-64 child opacity-0 transition-opacity ease-in duration-500 ${
                openCarbon ? "opacity-100 py-3" : null
              }`}
            >
               <a
                href="/karbon-cozumleri/tubitak1005"
                className={`hover:text-blue-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
              1005-TÜBİTAK Destek Programı              
              </a>
              <a
                href="/karbon-cozumleri/karbon-cozumleri"
                className={`hover:text-blue-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
              1501-TÜBİTAK Destek Programı              
              </a>
              <a
                href="/karbon-cozumleri/1507-tubitak-kobi-ar-ge-başlangic-destek-programı"
                className={`hover:text-blue-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
              1507 - TÜBİTAK KOBİ Ar-Ge Başlangıç Destek Programı              
              </a>
              <a
                href="/karbon-cozumleri/tubitak-1711-destekleri"
                className={`hover:text-blue-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
              1711 - Yapay Zekâ Ekosistem Çağrısı             
              </a>
              <a
                href="/karbon-cozumleri/tubitak1812"
                className={`hover:text-blue-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
             1812 - Yatırım Tabanlı Girişimcilik Destek Programı              
              </a>
              <a
                href="/karbon-cozumleri/sera-gazi-azaltim-ve-uzaklastirma-projelerinin-hazirlanmasi"
                className={`hover:text-blue-500 ${
                  !openCarbon ? "hidden" : null
                }`}
              >
              1832-TÜBİTAK Sanayide Yeşil Dönüşüm Destek Programı              
              </a>
            </div>
          </div>
          <a
  href="/ihracat-destekleri"
  className="relative transition-colors duration-500 hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-500 before:origin-left hover:before:scale-x-100"
>
  İhracat Destekleri
</a>
          <a
            href="/iletisim"
            className="transition-colors btn bg-transparent hover:bg-transparent parent group duration-1000 relative overflow-hidden w-24"
          >
            <div
              className="absolute w-40 h-40 rounded-full mt-44 flex items-center justify-center transition-transform duration-500 group-hover:scale-150"
              style={{
                transitionDuration: "1500ms",
                backgroundColor: "#6282EC",
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
                  href="/"
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
                      {"Kurumsal "}
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
                      {"Yurt Dışı Şirket Kurma"}
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
                      {"Danışmanlık "}
                      {openConsultancy ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                      )}
                    </p>
                  </div>
                  {openConsultancy ? <ConsultancyDropdownOpened /> : null}
                </div>
                <a
                  className="menu-item flex flex-row items-center gap-3 border-b border-b-slate-100 text-lg"
                  href="/yesil-destekler"
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
                  <p>Yeşil Destekler</p>
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
                      {"KOSGEB Destekleri "}
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
                      {"Karbon Çözümleri "}
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
                  target="_blank"
                  className="menu-item border-b flex flex-row items-center gap-3 border-b-slate-100 text-lg"
                  href="/akademi"
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
                  <p>Eğitimlerimiz</p>
                </a>
                <a
                  href=""
                  className="menu-item border-b flex flex-row items-center gap-3 border-b-slate-100 text-lg"
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
                  <p>Referanslarımız</p>
                </a>
                <a
                  href=""
                  className="menu-item flex flex-row items-center gap-3 border-b border-b-slate-100 text-lg"
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
                  <p>Belgelerimiz</p>
                </a>
                <a
                  href=""
                  className="menu-item flex flex-row items-center gap-3 border-b border-b-slate-100 text-lg"
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
                  <p>Hizmetlerimiz</p>
                </a>
                <a
                  href="/blog"
                  className="menu-item flex flex-row items-center gap-3 border-b border-b-slate-100 text-lg"
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
                        fill="#2A07EE"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Blog</p>
                </a>
                <a
                  className="menu-item border-b flex flex-row items-center gap-3 border-b-slate-100 text-lg"
                  href="/iletisim"
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
                        fill="#2536F9"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>İletişim</p>
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

export default Navbar;
