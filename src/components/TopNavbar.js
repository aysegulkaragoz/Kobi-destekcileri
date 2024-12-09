import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";

const TopNavbar = () => {
  const [openLegal, setOpenLegal] = useState(false);

  return (
    <div className="relative flex flex-col w-full bg-blue-100">
      <div className="h-12 lg:mx-6 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-1">
            
            <p className="text-sm">+90 532 761 45 82</p>
          </div>
          <div className="flex flex-row gap-1">
            <EmailIcon fontSize="small" />
            <p className="text-sm">info@sustechclick.com</p>
          </div>
        </div>
        <div className="flex-row items-center gap-5 hidden lg:flex">
          <div className="flex flex-row items-center gap-5">
            <a href="/blog" className="text-sm hover:underline cursor-pointer">Blog</a>
            <div className="h-2 w-2 rounded-full bg-black " />
          </div>
          <div
            className="relative flex flex-col items-start"
            tabIndex="0"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenLegal(false);
              }
            }}
          >
            <div className="relative">
              <p
                onClick={() => {
                  setOpenLegal(!openLegal);
                }}
                className="transition-colors flex flex-row hover:text-dark-500 duration-500 cursor-pointer text-sm hover:underline"
              >
                Kurumsal
               
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2236 5.55279C12.0828 5.4824 11.9172 5.4824 11.7764 5.55279C11.0517 5.91511 9.9946 6.65785 9.1133 7.73304C8.2286 8.81237 7.5 10.254 7.5 12C7.5 13.763 8.24577 14.9131 9.20785 15.6058C9.95253 16.1419 10.8061 16.3908 11.5 16.4703V19C11.5 19.2761 11.7239 19.5 12 19.5C12.2761 19.5 12.5 19.2761 12.5 19V16.4703C13.1939 16.3908 14.0475 16.1419 14.7922 15.6058C15.7542 14.9131 16.5 13.763 16.5 12C16.5 10.254 15.7714 8.81237 14.8867 7.73304C14.0054 6.65785 12.9483 5.91511 12.2236 5.55279ZM12.5 15.4622C13.0303 15.3858 13.6638 15.186 14.2078 14.7942C14.9124 14.2869 15.5 13.437 15.5 12C15.5 10.546 14.8953 9.32096 14.1133 8.36696C13.4187 7.51952 12.6008 6.90745 12 6.56676C11.3992 6.90745 10.5813 7.51952 9.8867 8.36696C9.10473 9.32096 8.5 10.546 8.5 12C8.5 13.437 9.08757 14.2869 9.79215 14.7942C10.3362 15.186 10.9697 15.3858 11.5 15.4622V11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V15.4622Z"
                    fill="#0049A3"
                  ></path>
                
              </p>
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-green-50 rounded-md shadow-lg transition-opacity duration-500 ease-in ${
                  openLegal ? "opacity-100 py-3" : "opacity-0"
                }`}
                style={{ zIndex: 1000 }}
              >
                <a
                  href="/hakkimizda"
                  className={`block px-5 py-2 hover:text-blue-500 ${
                    !openLegal ? "hidden" : ""
                  }`}
                >
                  Hakkımızda
                </a>
                <a
                  href="/sosyal-sorumlulugumuz"
                  className={`block px-5 py-2 hover:text-blue-500 ${
                    !openLegal ? "hidden" : ""
                  }`}
                >
                  Sosyal Sorumluluğumuz
                </a>
                <a
                  href="/medyada-biz"
                  className={`block px-5 py-2 hover:text-blue-500 ${
                    !openLegal ? "hidden" : ""
                  }`}
                >
                  Medyada Biz
                </a>
                <a
                  href="/kullanim-kosullari"
                  className={`block px-5 py-2 hover:text-blue-500 ${
                    !openLegal ? "hidden" : ""
                  }`}
                >
                  Kişisel Verilerin Korunması
                </a>
                <a
                  href="/gizlilik-politikasi"
                  className={`block px-5 py-2 hover:text-blue-500 ${
                    !openLegal ? "hidden" : ""
                  }`}
                >
                  Çerez Politikamız
                </a>
                <a
                  href="/sikca-sorulan-sorular"
                  className={`block px-5 py-2 hover:text-blue-500 ${
                    !openLegal ? "hidden" : ""
                  }`}
                >
                  S.S.S
                </a>
              </div>
            </div>
          </div>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
