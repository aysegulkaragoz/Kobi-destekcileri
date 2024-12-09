import tubitakGreenSupport from "../images/tubitak-afis.webp";
import eIhracatSon from "../images/e-ihracatSonresim.jpg";
import { useParams } from "react-router-dom";
import BigBanner from "../images/Adsız.jpg";
import tubitak from "../images/tubitak-afis.webp";
import pazaragirişDesteği from "../images/pazaragirişDesteği.png";
import MarkaTescilDesteği from "../images/MarkaTescilDesteği.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven.png";
import eight from "../images/eight.png";
import nine from "../images/nine.png";
import ten from "../images/ten.png";
import eleven from "../images/eleven.png";
import twelve from "../images/twelve.png";
import thirteen from "../images/thirteen.png";
import fourteen from "../images/fourteen.png";
import fiveteen from "../images/fiveteen.png";
import sixteen from "../images/sixteen.png";
import eightteen from "../images/eighteen.png";
import nineteen from "../images/nineteen.png";
import { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";




const ProgressBar = ({ finalProgress, title, subtitle }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(finalProgress), 100); // Adjust the 100 to your desired duration
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [finalProgress]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 text-center ">
        <div className="w-96 text-center rounded-lg border-2 flex justify-center items-center border-blue-500 py-4 px-3  shadow-blue-500 shadow-md">
          <p className="font-bold text-center">{title}</p>
        </div>

        <div className="w-96  marker:rounded-lg border-2 flex justify-center items-center rounded-lg border-blue-500 py-4 px-3  shadow-blue-500 shadow-md">
          <p className="text-center">{subtitle}</p>
        </div>
        <div className="w-96  rounded-lg border-2 flex justify-center items-center border-blue-500 py-4 px-3 shadow-blue-500 shadow-md">
          <div className="w-full bg-gray-100 ">
            <div
              className="bg-blue-400 h-8 text-sm overflow-clip text-nowrap flex items-center justify-center rounded-md  text-white transition-all ease-in-out"
              style={{ width: `${progress}%`, transitionDuration: "3000ms" }}
            >
              Destek Oranı {progress}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};






const KosgebGreenSupport = () => {
 return (
   <div className="flex flex-col justify-center items-center">
     <div className="flex w-full">
       <img alt="servis" loading="lazy" className="w-full" src={BigBanner} />
     </div>
     <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
       <ul>
         <li>
           <a href="/">Anasayfa</a>
         </li>
         <li>
           <a href="/ihracat-destekleri">İhracat Destekleri</a>
         </li>
         <li>
           <a href="/ihracat-destekleri/ihracat-desteklerii">
             
             Mal İhracat Destekleri
           </a>
         </li>
       </ul>
     </div>
     <h1 className="text-3xl font-bold text-center py-10">
       Mal İhracat Destekler
     </h1>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-16 px-5 lg:px-20">
       {/*1Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/pazara-giris-belgesi-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={pazaragirişDesteği}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Pazara Giriş Belgesi Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Pazara giriş için gerekli belge ve sertifikalarla
               standartlarınızı genişletin ve harcamalarınızı nakden geri alarak
               bütçenizi optimize edin!
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/pazara-giris-belgesi-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*2Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/yurt-disi-marka-tescil-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={MarkaTescilDesteği}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Yurt Dışı Marka Tescil Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Markanızı yurt dışında tescil ettirerek ihracat potansiyelinizi
               artırın. Marka tescil harcamalarınıza destek alarak global
               pazarda yerinizi alın.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/yurt-disi-marka-tescil-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*3Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/pazara-giris-projesi-hazirlama-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={three}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">
             Pazara Giriş Projesi Hazırlama Desteği
           </h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/pazara-giris-projesi-hazirlama-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*4Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/yurt-disi-pazar-araştirmasi-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={four}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Yurt Dışı Pazar Araştırması Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/yurt-disi-pazar-araştirmasi-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*5Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/yurt-ici-fuar-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={five}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Yurt İçi Fuar Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Destekleyen yurt içi fuarlara stand ile katılım sağlayan
               şirketler, yer kirası ve stand masraflarının yarısını nakden
               karşılıyorlar.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/yurt-ici-fuar-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*6Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/yurt-disi-fuar-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={six}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Yurt Dışı Fuar Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Yurt dışı fuarlara stand ile katılımlarda nakden destek alın,
               uluslararası tanıtım bütçenizi güçlendirin!
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/yurt-disi-fuar-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*7Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/eximbank-ihracat-kredi-sigortasi-tazmin-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={seven}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">
             Eximbank Faiz Oranı ve Eximbank İhracat Kredi
             Sigortası Tazmin Desteği
           </h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Eximbank İhracat Kredi Sigortası ile ticaretiniz güvence altında!
               Riskleri azaltarak ihracatınızı daha karlı ve sorunsuz hale
               getirin, işinizi büyütün ve global pazarda güçlenin.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/eximbank-ihracat-kredi-sigortasi-tazmin-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*8Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/tasarim-sirket-ve-tasarim-ofisi-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={eight}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">
             Tasarımcı Şirket ve Tasarım Ofisi Desteği
           </h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/tasarim-sirket-ve-tasarim-ofisi-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*9Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/gemi-ve-yat-sektorunde-tasarim-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={nine}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">
             Gemi ve Yat Sektöründe Tasarım Desteği
           </h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/gemi-ve-yat-sektorunde-tasarim-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*10Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/ihracat-desteklerii/cok-kanalli-zincir-magaza-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={ten}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Çok Kanallı Zincir Mağaza Desteği </h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Perakende sektöründeki işlerinizi markalaştırarak yurt dışına
               taşıyın, devlet teşvikleriyle masraflarınızı nakit olarak
               karşılayın ve global pazarda yer alın.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/ihracat-desteklerii/cok-kanalli-zincir-magaza-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/* 11Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/ur-ge-projesi-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={eleven}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">UR-GE Projesi Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               UR-GE Projesi Desteği ile ihracatınızı artırın, global pazarlarda
               rekabet gücünüzü güçlendirin.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/ur-ge-projesi-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*12Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/sektorel-ticaret-heyeti-ve-alim-heyeti-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={twelve}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">
             Sektörel Ticaret Heyeti ve Alım Heyeti Desteği
           </h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Uluslararası iş bağlantıları kurun, ihracatınızı artırarak global
               pazarlarda büyüme fırsatlarını değerlendirin.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/sektorel-ticaret-heyeti-ve-alim-heyeti-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*13Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/turquality-tanitim-projesi-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={thirteen}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">TURQUALITY® Tanıtım Projesi Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Markanızı global pazarlarda tanıtın, rekabet gücünüzü artırarak
               uluslararası alanda büyüme sağlayın.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/turquality-tanitim-projesi-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*14Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/marka-ve-turquality-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={fourteen}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Marka ve TURQUALITY® Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/marka-ve-turquality-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*15Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/sirket-ve-marka-alim-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={sixteen}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Şirket ve Marka Alım Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Şirket veya marka satın alımlarınızda devlet destekleriyle
               harcamalarınızı düşürün ve maliyet avantajı elde edin!
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/sirket-ve-marka-alim-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*16Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/kuresel-tedarik-zinciri-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={fiveteen}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Küresel Tedarik Zinciri Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Küresel Tedarik Zinciri projenizle global tedarikçi olun,
               uluslararası pazarda lider konuma gelin ve rekabet avantajınızı
               artırarak büyüme fırsatlarını değerlendirin.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/kuresel-tedarik-zinciri-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*17Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/birim-kira-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={nineteen}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Birim Kira Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/birim-kira-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>

       {/*18Card */}
       <div
         className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
         style={{ transitionDuration: "400ms" }}
       >
         <figure>
           <a
             href="/ihracat-destekleri/e-ihracat-destekleri/tanitim-destegi"
             className="hover:cursor-pointer"
           >
             <img
               className="rounded-t-box border border-b-slate-300"
               src={eightteen}
               alt="ISO"
             />
           </a>
         </figure>
         <div className="card-body">
           <h2 className="card-title">Tanıtım Desteği</h2>
           <p className="flex flex-col gap-2 pt-2">
             <p>
               Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
               detaylı bilgilere buradan.
             </p>
           </p>
           <div className="card-actions justify-end my-2">
             <a
               href="/ihracat-destekleri/e-ihracat-destekleri/tanitim-destegi"
               className="link"
             >
               Devamını oku
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

const TubitakGreenSupport = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/ihracat-destekleri">İhracat Destekleri</a>
          </li>
          <li>E-İhracat Destekleri</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
      E-İHRACAT DESTEKLERİ
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={eIhracatSon}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg ">
                 E-ihracat Nedir?
            </h1>
            <p>
            E-ihracat, internet üzerinden yurtdışına yapılan ürün ve hizmet satışlarını ifade eder. Geleneksel ihracattan farklı olarak, e-ihracat, dijital platformlar aracılığıyla daha hızlı ve düşük maliyetli bir şekilde global müşterilere ulaşmayı sağlar.
            </p>
          </div>
          {/* Destek Unsurları */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Desteklenen Statüler:</h1>
            <p>
              <h1 className="font-bold ">Şirketler İçin:</h1>
              Şirketler, e-ihracata hazırlık ve geçiş süreçlerinde Genel
              Müdürlük tarafından kademelendirilir. Destekler, şirketlerin
              ihtiyaçlarına ve ihracat tutarlarına göre verilir. Destek
              başvurusu yapacak şirketler, öncelikle "EK-Şirket Başvuru Formu"nu
              incelemeci kuruluşa sunmalıdır. Tescilli marka başvurusu olan veya
              tescilli markası bulunan şirketler, markasına ait Türk ürünlerini
              imal etmeleri veya tedarik etmeleri halinde destek kapsamına
              alınır.
            </p>
            <br></br>
            <br></br>
            <p>
              <h1 className="font-bold "> Perakende E-ticaret Siteleri İçin:</h1>
            Perakende e-ticaret siteleri, gerekli belgelerle E-İhracat Sekretaryasına başvuruda bulunarak destek kapsamına alınabilir. Desteklerden faydalanmak için, sitenin çevrim içi satışlarının önemli bir kısmı oluşturması, güvenlik sertifikalarına sahip olması, ödeme ve lojistik entegrasyonlarına sahip olması gerekmektedir. Ayrıca, ihracat tutarının belirli bir seviyede olması ve şirketin Türkiye'de yerleşik olması şarttır. 
            </p>
            <br></br>
            <br></br>
            <p>
              <h1 className="font-bold">Pazaryerleri İçin:</h1>
            •   Başvurular, EK-Pazaryeri Başvuru Formu ve ek belgelerle E-İhracat Sekretaryasına yapılır. İnceleme sonrası uygun bulunan başvurular Genel Müdürlüğe iletilir ve destek kapsamına alınır.
•  Şirket merkezi Türkiye'de olmalı.
•  Son 2 yıl içinde faaliyette bulunmalı.
•  Güvenlik sertifikasına sahip olmalı: 
Elektronik Ticarette Güven Damgası veya uluslararası geçerliliğe sahip sertifika.
Uluslararası e-ticaret altyapı servis sağlayıcısından alınan belgeler.
•  Sipariş karşılama istasyonuna veya iş ortaklığına sahip olmalı.
•  Ödeme ve lojistik entegrasyonları bulunmalı.
•  En az 1.000 hizmet sağlayıcısı ve 100.000 ürün sunmalı.
•  Geçmiş yıl ihracat tutarı en az 5.000.000 USD olmalı veya ETBİS kayıtlarına göre net satışlar 1.000.000.000 TL'yi geçmeli.

            </p>
            <br></br>
            <br></br>
            <p>
              <h1 className="font-bold">E-İhracat Konsorsiyumları İçin:</h1>
              E-İhracat Konsorsiyumu statüsü için gerekli şartlar ve başvuru süreçleri Bakanlık tarafından belirlenir. Statüyü kazanan şirketler, “EK-E-İhracat Konsorsiyumu Formu”nu ilk destek başvurusunda sunmalıdır. Başvuru ve değerlendirme detayları için Bakanlık yönergelerini inceleyin.
            </p>
            <br></br>
            <br></br>
            <p>
              <h1 className="font-bold">B2B Platformları İçin</h1>
              B2B Platformlarının Destek Kapsamına Alınması.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Başvuru ve İnceleme Süreci</h1>
            <p>
              Türkiye Yeşil Sanayi Projesi kapsamında TÜBİTAK bünyesinde:
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-bold">Başvuru Formu ve Belgeler:</span>"EK-B2B Platformu Başvuru Formu" ve ekindeki bilgi/belgelerle E-İhracat Sekretaryasına başvurulur.
                </li>
                <br></br>
                <li>
                <span className="font-bold">İnceleme</span>E-İhracat Sekretaryası, başvuru formu ve eklerini inceleyip Genel Müdürlüğe sunar.
                </li>
                <br></br>
                <li>
                  <span className="font-bold">Değerlendirme:</span> Yararlanıcı, Türkiye’de yerleşik şirketlerin yurt dışına açılımında destek olacak hizmetleri sağladığı göz önünde bulundurularak destek kapsamına alınır.
                </li>
              </ul>
              <br />
             
              <br />
              
              <br />
              <br />
              <h1 className="text-lg font-bold">
              Destek Şartları:
              </h1>
              <br />
              <span className="font-bold">Türkiye'de İş Merkezi: </span>Şirketin iş merkezi Türkiye'de olmalıdır.
              <br></br>
              <br></br>
              <span className="font-bold">Faaliyet Süresi: </span>Başvuru tarihinden itibaren son 2 yılda faaliyette bulunulmuş olmalıdır.
              <br></br>
              <br></br>
              <span className="font-bold list-disc">Güvenlik Sertifikaları: </span>   Elektronik Ticarette Güven Damgası veya uluslararası geçerliliğe sahip sertifika.           
   Uluslararası e-ticaret altyapı servis sağlayıcısından alınan hizmet belgeleri.

              <br></br>
              <br></br>
              <span className="font-bold">Sipariş Alma:  </span>İşletmeden işletmeye e-ticaret kapsamında sipariş alabilme imkânı sunulmalıdır.
              <br></br>
              <br></br>
            <p>
              <span className="font-bold">Platform Altyapısı: </span>
               <h2 className="list-disc pl-5">Çevrim içi tarayıcılarda sorunsuz çalışmalı.</h2> 
               <h2 className="list-disc pl-5">Linkler aktif olmalı.</h2>  
               <h2 className="list-disc pl-5">En az %99 erişilebilir olmalı.</h2> 
               <h2 className="list-disc pl-5">Yoğun ziyaretçi trafiğini kaldırabilecek seviyede olmalıdır.</h2>  

              </p>
              <br/>
              <br/>
              <span className="font-bold">Üye Sayısı:  </span>Platformun toplam aktif ücretli üye sayısı en az 1.000 olmalıdır.
              <br/>
              <br/>
              <span className="font-bold">Global Sıralama:  </span>Platformun dünya genel sıralaması 200.000'in altında olmalıdır.
              <br/>
              <br/>
              <span className="font-bold">Arama Filtreleri:  </span>Ürün veya şirket sorgulama filtresi bulunmalıdır.
              <br/>
              <br/>
              <span className="font-bold">Üye Bilgileri:</span>Ücretli üye şirketlerin unvan, iletişim ve faaliyet bilgileri ile ürün kataloglarına ve içeriklerine ilişkin bilgiler yer almalıdır.
              <br/>
              <br/>
              <span className="font-bold">İndekslenmiş Aramalar:</span>“site:siteadı” formatında yapılacak indekslenmiş aramalarda en az 250.000 sonuç gösterilmelidir.
              <br />
             
              <br />
              <br />
              <h1 className="text-lg font-bold">
              İş Birliği:
              </h1>
              <br />
              <span className="font-bold">Kazanım: </span>Bu desteklerden yararlanan B2B platformu, ücretli üyelerinin Türkiye E-İhracat Platformuna üye olmalarını sağlamalı ve Türkiye E-İhracat Platformu ile iş birliği yapmalıdır.
              <br />
              <br />
              Bu kriterlere uygun B2B platformları, uluslararası alanda rekabet avantajı sağlayarak, Türkiye'nin ihracat potansiyelini artırmada kritik bir rol oynar. Desteklerden faydalanarak global pazarlarda daha güçlü bir konuma gelebilir ve ihracat hacmini artırabilirsiniz. Başvurunuzu geciktirmeden yaparak bu fırsatlardan yararlanın!
              <br />
              <br />
              <h1 className="text-lg font-bold">
              Desteklerden Yararlanmak İçin Şartlar
              </h1>
              <br />
           <li>
           Yurt içi marka tescil belgesine ve en az yurt dışı marka tescil başvurusuna sahip olunmalıdır.
           </li>
           <li>
             Dijital pazaryeri tanıtım desteğinde yurtdışı pazaryerlerinde gerçekleştirilen reklam, tanıtım giderlerine %50 oranında destek verilmektedir. Her pazaryeri için 3 yıl süreyle destek sağlanır ve dijital reklam üzerinden dönen satışların en fazla %20’sine kadar destek verilmektedir.
            </li>
            <br></br>
            <br></br>
            <h1 className="font-bold text-lg">Yıllık Destek Üst Limitleri</h1>
            <br></br>

            <ul className="list-disc pl-5" >
              <li >Şirketler için: 20.971.151 TL</li>
              <br></br>
              <li >Perakende e-ticaret siteleri için: 41.943.848 TL</li>
              <br></br>
              <li >E-ihracat konsorsiyumları için: 69.905.898 TL</li>
            </ul>
            <br></br>
            <br></br>
            <h1 className="font-bold text-lg">Desteklenen Tanıtım Faaliyetleri</h1>
            <br></br>
            <br></br>
            <ul className="list-disc pl-5 space-y-2">
  <li>Sosyal medya hesabı tasarımı, içeriklendirilmesi, bakımı ve güncellenmesi</li>
  <li>Dijital platformlarda yayınlanmak üzere tanıtım görseli ve video içeriklerinin hazırlanması</li>
  <li>Sosyal medya platformlarında verilen tanıtımlar</li>
  <li>Dijital medya satın alımları (görüntülü ve video içerik reklam alanlarının kiralanması)</li>
  <li>Arama motorlarında verilen tanıtımlar ve SEO çalışmaları</li>
  <li>Akıllı cihazlara yönelik uygulamalarda verilen tanıtımlar</li>
  <li>Üçüncü parti uygulamalar aracılığı ile izin alınarak ekran mesajı reklamı (Webpush, App push) ve kullanıcı deneyimi geliştirme</li>
  <li>Doğal içerik reklamlar (native advertisement)</li>
  <li>Satış & Marka bilinirliği amaçlı çevrim içi canlı yayın programları</li>
  <li>Dijital pazarlamaya yönelik arttırılmış gerçeklik (AR), sanal gerçeklik (VR), metaverse ve radyo frekansı tanımlama sistemleri (RFID) teknolojileri kullanılarak gerçekleştirilen tanıtım faaliyetleri</li>
  <li>Sosyal medya etkileyicisinden (influencer) alınacak hizmetler</li>
</ul>

<br></br>
            <br></br>
            <h1 className="font-bold text-lg">Sipariş Karşılama Hizmeti ve Depo Kira Desteği</h1>
            <br></br>
            <br></br>
            <h2 className="font-bold">Sipariş Karşılama Hizmeti Desteği Yıllık Destek Üst Limiti:</h2>
<ul className="list-disc pl-5 space-y-2">
  <li>Şirketler için: 20.971.151 TL</li>
  <li>Perakende e-ticaret siteleri için: 69.905.898 TL</li>
  <li>Pazaryerleri için: 41.943.848 TL</li>
  <li>E-ihracat konsorsiyumları için: 69.905.898 TL</li>
</ul>

<h2 className="font-bold mt-6">Yurt Dışı Depo Kira Desteği Yıllık Destek Üst Limiti:</h2>
<ul className="list-disc pl-5 space-y-2">
  <li>Perakende e-ticaret siteleri için: 13.980.253 TL</li>
  <li>Pazaryerleri için: 13.980.253 TL</li>
  <li>E-ihracat konsorsiyumları için: 13.980.253 TL</li>
</ul>
<br></br>
<br></br>
<h2 className="font-bold">Çevrim İçi Mağaza Desteği</h2>
<ul className="list-disc pl-5 space-y-2">
  <li>Yıllık Destek Üst Limiti:</li>
  <li>Şirketler için: 4.192.994 TL</li>
  <li>Perakende e-ticaret siteleri için: 4.192.994 TL</li>
  <li>E-ihracat konsorsiyumları için: 8.387.534 TL</li>
</ul>

<h2 className="font-bold mt-6">Pazaryeri Komisyon Gideri Desteği</h2>
<ul className="list-disc pl-5 space-y-2">
  <li>Yıllık Destek Üst Limiti:</li>
  <li>Şirketler için: 2.096.497 TL</li>
  <li>Perakende e-ticaret siteleri için: 6.989.354 TL</li>
  <li>E-ihracat konsorsiyumları için: 8.387.534 TL</li>
</ul>

<h2 className="font-bold mt-6">Yurtdışı Pazaryeri Entegrasyon Desteği</h2>
<ul className="list-disc pl-5 space-y-2">
  <li>En fazla 6 pazaryeri için hizmet alım giderleri %50 oranında, pazaryeri başına 3 yıl süreyle ve her bir entegrasyon için 557.727 TL'ye kadar desteklenir.</li>
</ul>

<h2 className="font-bold mt-6">Pazara Giriş Rapor Desteği</h2>
<ul className="list-disc pl-5 space-y-2">
  <li>Yıllık Destek Üst Limiti: 4.192.994 TL</li>
  <li>Ülke, sektör, kategori, ürün, marka, rakip, teknoloji, lojistik, müşteri ilişkileri, e-ticaret, pazaryeri, marka konumlandırma ve tüketici erişimi odaklı rapor ve analiz giderleri desteklenir.</li>
</ul>

<h2 className="font-bold mt-6">Statü Kazanma Şartları</h2>

<h3 className="font-bold mt-4">Perakende E-Ticaret Sitesi:</h3>
<ul className="list-disc pl-5 space-y-2">
  <li>Ödeme ve lojistik entegrasyonlar ile güven damgasına sahip olmalı</li>
  <li>Son 2 takvim yılında faaliyette bulunmalı</li>
  <li>Destek başvurusu öncesindeki takvim yılında beyan edilen ihracat tutarının en az 2,5 milyon ABD Doları olması</li>
</ul>

<h3 className="font-bold mt-4">Pazaryeri:</h3>
<ul className="list-disc pl-5 space-y-2">
  <li>Ödeme ve lojistik entegrasyonlarına, sipariş karşılama istasyonuna ve güven damgasına sahip olmalı</li>
  <li>Son 2 takvim yılında faaliyette bulunmalı</li>
  <li>En az 1.000 hizmet sağlayıcısının ve en az 100.000 adet ürünün platformda yer alması gereklidir</li>
  <li>Destek başvurusu öncesindeki takvim yılında beyan edilen ihracat tutarının en az 5 milyon ABD Doları olması</li>
</ul>

<h3 className="font-bold mt-4">E-İhracat Konsorsiyumu:</h3>
<ul className="list-disc pl-5 space-y-2">
  <li>İş merkezinin Türkiye’de olması</li>
  <li>Bir önceki takvim yılı veya cari yılda e-ticaret olarak beyan edilen en az 100 işlem yapmış olması</li>
  <li>ISO 27001 standartlarına sahip olmalı ve güven damgasına sahip olmalı</li>
  <li>Ödenmiş sermayesi 5 milyon TL’den fazla olmalı</li>
</ul>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const BilisimDestekleri = () => {
   const [index, setindex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/ihracat-destekleri">İhracat Destekleri</a>
          </li>
          <li>Bilişim Sektörü Destekleri</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Bilişim Sektörü Destekleri
      </h1>
      <h1 className="font-bold mt-4 text-xl text-center">
        İhracata Hazırlık ve Kurumsal Kapasite Oluşturma Aşaması Destekleri
      </h1>
      <br />

      <div className="flex flex-col gap-5 text-center items-center justify-center">
        <ProgressBar
          finalProgress={50}
          title="Pazara Giriş Desteği"
          subtitle="Yıllık 7.304.631 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Yurt Dışı Ürün/Hizmet/Marka /Patent/Fikri Mülkiyet Hakkı Tescil ve Koruma Desteği"
          subtitle="Yıllık 1.825.778 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Rapor ve Veri Analizi Desteği"
          subtitle="Yıllık 1.200.000 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={50}
          title="Belgelendirme Desteği"
          subtitle="Yıllık 1.825.778 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Kiralama Desteği - Donanım ve Test Merkezi"
          subtitle="Yıllık 1.825.778 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={70}
          title="Kiralama Desteği - Yazılım"
          subtitle="Yıllık 1.825.778 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Yurt Dışı Arama Desteği"
          subtitle="Yıllık 912.889 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title=" Hizmet Pazarlamaya Yönelik E-Ticaret Site ve Platformlar ile
        Uluslararası Kuruluşlara Bireysel Üyelik Desteği"
          subtitle="Yıllık 145.819 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title=" Yazılım, Mobil Uygulama, Dijital Oyun Geliştirme Desteği"
          subtitle="Yıllık 912.000 ₺’ye kadar"
        />
        <br />
        <br />
        <h1 className="font-bold mt-4 text-xl text-center">
          İhracata Hazırlık ve Kurumsal Kapasite Oluşturma Aşaması Destekleri
        </h1>
        <ProgressBar
          finalProgress={70}
          title="Reklam, Tanıtım, Pazarlama Desteği (Yazılım, Oyun, Uygulama)"
          subtitle="Yıllık 10.000.000 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={70}
          title="Reklam, Tanıtım, Pazarlama Desteği (Genel Tanıtım)"
          subtitle="Yıllık 10.957.000 ₺’ye kadar"
        />{" "}
        <ProgressBar
          finalProgress={60}
          title="Ürün Yerleştirme Desteği"
          subtitle="Yıllık 3.651.000 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Komisyon Desteği (Platform)"
          subtitle="Yıllık 2.500.000 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Komisyon Desteği (Acenta)"
          subtitle="Yıllık 2.500.000 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={70}
          title="Yurt Dışı Birim Desteği"
          subtitle="Yıllık 4.382.171 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={70}
          title="Yurt Dışı Etkinlik Bireysel Katılım Desteği"
          subtitle="Etkinlik başına 912.889 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={80}
          title="Yurt Dışı Etkinlik Milli Katılım Desteği"
          subtitle="Her bir organizasyon için şirket başına 912.889 ₺’ye kadar"
        />
        <ProgressBar
          finalProgress={60}
          title="Yurt İçi Etkinlik Bireysel Katılım Desteği"
          subtitle="Etkinlik başına 546.882 ₺’ye kadar"
        />
      </div>
      <br />
      <br />
      <div className=" gap-5 pb-16 px-5 lg:px-32  text-lg">
        <div className="flex flex-col gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2 ">
            <br></br>
            <p>
              <h1 className="font-bold text-2xl "> Kimler Yararlanabilir?</h1>
              İhracata Hazırlık ve Kurumsal Kapasite Oluşturma ile Yurt Dışına
              Yönelik Pazarlama ve Pazarda Tutundurma Desteklerinden, bilişim
              şirketleri ihracat geçmişi olmadan faydalanabilir. Bu destekler,
              şirketlerin uluslararası pazarlara girişini kolaylaştırarak
              rekabetçi avantaj sağlar.
            </p>
            <br></br>
            <br></br>
            <p>
              <h1 className="font-bold text-2xl">
                {" "}
                Girişimcilere ve İşletmelere Nasıl Katkı Sağlar?
              </h1>
              Ticaret Bakanlığı'nın Bilişim Destekleri, girişimcilere ve
              işletmelere önemli katkılar sağlar. İhracata Hazırlık ve Kurumsal
              Kapasite Oluşturma Destekleri, bilişim şirketlerinin ihracata
              hazırlanmalarını ve kurumsal kapasitelerini güçlendirmelerini
              destekler. Yurt Dışına Yönelik Pazarlama ve Pazarda Tutundurma
              Destekleri ise markaların uluslararası pazarlarda etkin olmasına
              yardımcı olur. Ayrıca, bu destekler, küçük ve orta ölçekli
              işletmelerin yüksek teknoloji ve pazarlama maliyetlerini azaltarak
              yeni ve yenilikçi ürünler geliştirmelerini teşvik eder. Bilişim
              şirketleri, bu destekler sayesinde global ekonomide daha rekabetçi
              ve sürdürülebilir bir konuma gelebilir.
              <br />
              <br />
              Bu program kapsamında sunulan destekler şunlardır:
            </p>
          </div>
          {/* Bilgilendirme */}
        </div>
      </div>
      <div className="px-5 lg:px-20 pt-8 pb-8 w-full flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">
          Sıkça Sorulan Sorular
        </h1>
        <div className="flex flex-col gap-2">
          {/* Soru1 */}
          <div className="flex flex-col w-full border-2  border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 1) {
                  setindex(0);
                } else {
                  setindex(1);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 1 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 1 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Yurt İçi Etkinlik Bireysel Katılım Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 1 ? "hidden" : null}`}>
              Şirketlerin, desteklenen yurt içi bireysel etkinlikler listesinde
              yer alan etkinliklere ilişkin bireysel stantlı katılım giderleri
              desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ Etkinlik başına 546.882
              ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir.
            </div>
          </div>
          {/* Soru2 */}
          <div className="flex flex-col w-full border-2  border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 2) {
                  setindex(0);
                } else {
                  setindex(2);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 2 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 2 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Yurt Dışı Etkinlik Bireysel Katılım Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 2 ? "hidden" : null}`}>
              Şirketlerin desteklenen yurt dışı bireysel etkinlikler listesinde
              yer alan etkinliklere ilişkin fuar/etkinlik katılım sözleşmesinde
              yer alan kayıt, elektrik, internet, temizlik, sigorta vb. diğer
              zorunlu giderler, alan ve stant kirası, tasarım ve dekorasyon
              giderleri, sanal etkinlik katılım giderleri, fuar alanındaki/fuara
              yönelik tanıtım giderleri, en fazla 2 (iki) temsilcinin ekonomi
              sınıfı uçak, tren, gemi, otobüs bileti ile transfer giderleri
              desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ Etkinlik başına 912.889
              bin ₺’ye, etkinliğin Bakanlık tarafından belirlenen prestijli
              etkinliklerden biri olması halinde 1.825.778 TL’ye kadar,
              <br />◎ Bir takvim yılı içinde en fazla 3 prestijli katılımı için,
              <br />◎ %60 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %70 olarak uygulanır.
            </div>
          </div>
          {/* Soru3 */}
          <div className="flex flex-col w-full border-2  border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 3) {
                  setindex(0);
                } else {
                  setindex(3);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 3 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 3 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Yurt Dışı Etkinlik Milli Katılım Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 3 ? "hidden" : null}`}>
              Şirketlerin desteklenen yurt dışı milli katılım organizasyonları
              listesinde yer alan etkinliklere katılımlara ilişkin Alan ve stant
              kirası, tasarım ve dekorasyon giderleri, fuar/etkinlik katılım
              sözleşmesinde yer alan kayıt, elektrik, internet, temizlik,
              sigorta vb. diğer zorunlu giderler, sanal etkinlik katılım
              giderleri, fuar alanındaki/fuara yönelik tanıtım giderleri, en
              fazla 2 temsilcinin ekonomi sınıfı uçak, tren, gemi, otobüs bileti
              ile transfer giderleri, en fazla 2 temsilcinin temsilcinin kişi
              başına günlük 4500 TL’yi geçmemek kaydıyla oda ve kahvaltı
              giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ Genelgede belirtilen
              katılım, tanıtım, ulaşım ve konaklama giderleri her bir
              organizasyon için şirket başına 912.889 ₺’ye, etkinliğin Bakanlık
              tarafından belirlenen prestijli etkinliklerden biri olması halinde
              1.825.778 ₺’ye kadar,
              <br />◎ %70 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %80 olarak uygulanır.
            </div>
          </div>
          {/* Soru4 */}
          <div className="flex flex-col w-full border-2  border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 4) {
                  setindex(0);
                } else {
                  setindex(4);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 4 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 4 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Yurt Dışı Ürün/Hizmet/Marka /Patent/Fikri Mülkiyet Hakkı Tescil
                ve Koruma Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 4 ? "hidden" : null}`}>
              Şirketlerin yurt içi tescil belgesine sahip oldukları
              ürün/hizmet/marka/patent/fikri mülkiyet haklarının yurt dışında
              tescili, akreditasyonu, yenilenmesi ve korunmasına yönelik
              marka/patent/tescil bürosu hizmetleri, marka araştırma giderleri,
              hukuki danışmanlık giderleri, tescil yenileme giderleri
              desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yıllık 1.825.778 ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir.
            </div>
          </div>
          {/* Soru5 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 5) {
                  setindex(0);
                } else {
                  setindex(5);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 5 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 5 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Hizmet Pazarlamaya Yönelik E-Ticaret Site ve Platformlar ile
                Uluslararası Kuruluşlara Bireysel Üyelik Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 5 ? "hidden" : null}`}>
              Şirketlerin hizmet ürünlerini pazarlamalarına yönelik Bakanlıkça
              onaylanan e-ticaret siteleri ve platformlar ile uluslararası
              kuruluşlara üyelik giderleri, e-ticaret sitesi ve/veya platform
              başına desteklenir. <br />
              <br /> Firmalar bu destek programından; <br />
              ◎ E-ticaret sitesi ve/veya platform başına yıllık 601 bin ₺’ye
              kadar, <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Site-platfrom başına yıllık 145.819 bin ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir.
            </div>
          </div>
          {/* Soru6 */}
          <div className="flex flex-col w-full border-2  border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 6) {
                  setindex(0);
                } else {
                  setindex(6);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 6 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 6 ? <Add /> : <Remove />}
              <h1 className="text-lg">Rapor ve Veri Analizi Desteği Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 6 ? "hidden" : null}`}>
              Şirketlerin yurt dışına yönelik pazara giriş stratejileri ile
              eylem planlarının oluşturulabilmesi amacıyla satın
              alınan/yaptırılan raporlara ilişkin giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından;
              <br /> ◎En fazla 5 yıl boyunca, <br />
              ◎ Sektör/ülke/mevzuat/yabancı şirket/marka odaklı rapor ve
              analizi, Veri Analitiği/Madenciliği/İzleme Değerlendirme-Yönetim
              Rapor ve Analizi, hukuki danışmanlık giderleri, uluslararası
              platformlarda veya veri tabanlarında münferit veya periyodik
              üyeliği, yurt dışı ihale/sözleşme/şartname hazırlığına yönelik
              rapor ve analiz giderleri için,
              <br />
              ◎ Yıllık 1.200.000 ₺’ye kadar, <br />◎ %60 oranında
              yararlanabilir.
            </div>
          </div>

          {/* Soru7 */}
          <div className="flex flex-col w-full border-2  border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 7) {
                  setindex(0);
                } else {
                  setindex(7);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 7 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 10 ? <Add /> : <Remove />}
              <h1 className="text-lg">Belgelendirme Desteği Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 7 ? "hidden" : null}`}>
              Şirketlerin Bakanlık tarafından belirlenen
              belge/sertifika/akreditasyon belgeleri desteklenir. <br />
              <br />
              Firmalar bu destek programından; <br />
              ◎ En fazla 5 yıl boyunca, <br /> ◎Alım ve yenileme giderleri,
              müracaat ve doküman inceleme giderleri, belgelendirme tetkik
              giderleri, belge kullanım ücretleri, zorunlu kayıt ücretleri,
              gözetim giderleri, yenileme giderleri, test/analiz giderleri için,
              <br />◎ Yıllık 1.825.778 ₺’ye kadar, <br />◎ %60 oranında
              yararlanabilir.
            </div>
          </div>

          {/* Soru8 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 8) {
                  setindex(0);
                } else {
                  setindex(8);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 8 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 8 ? <Add /> : <Remove />}
              <h1 className="text-lg">Yurt Dışı Arama Desteği Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 11 ? "hidden" : null}`}>
              Şirketlerin yazılım/mobil uygulama/dijital oyun/dijital aracılık
              platformlarında geliştirme, kod inceleme ve test çalışmalarında
              yurt dışında yerleşik kişilerden yararlanmak üzere yurt dışı
              şirket ve platformlar ile gerçekleştireceği anılan çalışmaların
              yaptırılmasına yönelik Genelge’de belirtilen iş ilanı verme, insan
              kaynağı arama, bağlantı kurma ve komisyon giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ Yıllık 912.889 ₺’ye
              kadar,
              <br />◎ %60 oranında yararlanabilir.
            </div>
          </div>

          {/* Soru9 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 9) {
                  setindex(0);
                } else {
                  setindex(9);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 9 ? "border-2 border-b-blue-300" : "hover:bg-slate-300"
              }`}
            >
              {index != 9 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Yazılım, Mobil Uygulama, Dijital Oyun Geliştirme Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 11 ? "hidden" : null}`}>
              Şirketler tarafından yabancı dilde yazılım, mobil uygulama,
              dijital oyun geliştirilmesi süreçlerinde çalıştırılmak üzere
              istihdam edilen personelin aylık brüt ücretleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından;
              <br />◎ En fazla 5 adet personel için,
              <br />◎ Yıllık 912.000 ₺’ye kadar,
              <br />◎ %50 oranında yararlanabilir. Son 1 yıl içerisinde
              üniversitelerin Genelgede belirtilen mühendislik bölümlerinden
              mezun olan kişilerin istihdam edilmesi halinde destek oranı %60
              olarak uygulanır.
            </div>
          </div>
          {/* Soru10 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 10) {
                  setindex(0);
                } else {
                  setindex(10);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 10
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 10 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Kiralama Desteği - Donanım ve Test Merkezi Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 10 ? "hidden" : null}`}>
              Şirketlerin yabancı dilde yazılım/dijital oyun/mobil
              uygulama/aracılık platformu geliştirmelerine yönelik donanım ve
              test merkezi kiralama giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından;
              <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yıllık 1.825.778 ₺’ye kadar,
              <br />◎ %50 oranında yararlanabilir. Satın alınacak/kiralanacak
              makine, teçhizatın Genelgede belirtilen şartlara uyan yerli malı
              ve/veya yerli üretim belgesine/logosuna sahip olması durumunda,
              destek oranı %60 olarak uygulanır.
            </div>
          </div>

          {/* Soru11 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 11) {
                  setindex(0);
                } else {
                  setindex(11);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 11
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 11 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Kiralama Desteği - Yazılım Desteği Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 11 ? "hidden" : null}`}>
              Şirketlerin yabancı dilde yazılım, mobil uygulama, dijital
              aracılık ve hizmet platformu veya dijital oyun geliştirilmelerine
              yönelik olarak desteklenen yazılımları satın alma/kiralama
              giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından;
              <br />◎ Yıllık 1.825.778 ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir. Satın alınacak/kiralanacak
              yazılımın Genelgede belirtilen şartlara uyan yerli malı ve/veya
              yerli üretim belgesine/logosuna sahip olması durumunda, destek
              oranı %70 olarak uygulanır.
            </div>
          </div>
          {/* Soru12 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 12) {
                  setindex(0);
                } else {
                  setindex(12);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 12
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 12 ? <Add /> : <Remove />}
              <h1 className="text-lg">Pazara Giriş Desteği Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 12 ? "hidden" : null}`}>
              Şirketlerin yazılım/dijital oyun/mobil uygulama/dijital aracılık
              ve hizmet platformunun yurt dışına pazarlanmasına yönelik
              yerleştirme, barındırma, metaverse entegrasyonu, dijital dosya
              hazırlama, yabancı dile çeviri, blokzincir entegrasyonu, çoğaltma,
              artırılmış/sanal gerçeklik, NFT entegrasyonu desteklenir.
              <br />
              <br />
              Firmalar bu destek programından;
              <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yıllık 7.304.631 ₺’ye kadar,
              <br />◎ %50 oranında yararlanabilir.
            </div>
          </div>
          {/* Soru13 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 13) {
                  setindex(0);
                } else {
                  setindex(13);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 13
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 13 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Reklam, Tanıtım, Pazarlama Desteği (Yazılım, Oyun, Uygulama)
                Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 13 ? "hidden" : null}`}>
              Şirketlerin geliştirdikleri yazılım/ dijital oyun/ mobil uygulama
              /dijital aracılık ve hizmet platformunun yurt dışına yönelik
              tanıtım ve pazarlama faaliyetleri ilişkin Google Playstore,
              AppStore, Meta reklamları, arama motoru reklamları, sosyal medya
              reklamları, blok zincir alanlarına verilen reklamlar, e-ticaret
              platformlarına verilen reklamlar, açık hava/bina/durak,
              TV/sinema/dergi sponsorlukları, billboard/pano/tabela giderleri
              desteklenir.
              <br />
              <br />
              Firmalar bu destek programından;
              <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yazılım-dijital oyun-mobil uygulama-platform başına yıllık
              10.000.000 ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %70 olarak uygulanır.
            </div>
          </div>
          {/* Soru14 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 14) {
                  setindex(0);
                } else {
                  setindex(14);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 14
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 14 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Reklam, Tanıtım, Pazarlama Desteği (Genel Tanıtım) Nedir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 14 ? "hidden" : null}`}>
              Şirketlerin hizmetlerinin/hizmet alanlarının yurt dışında
              tanıtılması ve geliştirilmesi amacıyla gerçekleştirdikleri genel
              amaçlı tanıtım ve pazarlama faaliyetlerine ilişkin internet
              reklamları, arama motorlarına verilen reklamlar, sosyal medya
              reklamları, blok zincir reklamlar, e-ticaret platformlarına
              verilen reklamlar, açık hava/bina/durak, TV/sinema/dergi
              sponsorlukları, billboard/pano/tabela giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yıllık 10.957.000 ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %70 olarak uygulanır.
            </div>
          </div>
          {/* Soru15 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 15) {
                  setindex(0);
                } else {
                  setindex(15);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 15
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 15 ? <Add /> : <Remove />}
              <h1 className="text-lg">Ürün Yerleştirme Desteği Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 15 ? "hidden" : null}`}>
              Şirket ve hizmet ürünlerinin tanıtılmasına yönelik olarak olarak
              yurt dışında gösterimi yapılan sinema filmi, belgesel, dizi,
              animasyon filmi ve program formatı ile dijital oyunlarda yer
              alacak ürün yerleştirmelerine yönelik giderler desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yazılım-dijital oyun-mobil uygulama-platform başına yıllık
              3.651.000 ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir.
            </div>
          </div>

          {/* Soru16 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 16) {
                  setindex(0);
                } else {
                  setindex(16);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 16
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 16 ? <Add /> : <Remove />}
              <h1 className="text-lg">Komisyon Desteği (Platform) Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 16 ? "hidden" : null}`}>
              Şirketler tarafından yazılım/mobil uygulama/dijital oyun/dijital
              aracılık ve hizmet platformunun yurt dışı satış ve dağıtımına
              yönelik olarak uygulama/oyun platformlarınca tahsil edilen
              komisyon bedelleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yazılım-dijital oyun-mobil uygulama-platform başına yıllık
              2.500.000 ₺’ye kadar,
              <br />◎ %50 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %60 olarak uygulanır.
            </div>
          </div>

          {/* Soru17 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 17) {
                  setindex(0);
                } else {
                  setindex(17);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 17
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 17 ? <Add /> : <Remove />}
              <h1 className="text-lg">Komisyon Desteği (Acenta) Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 17 ? "hidden" : null}`}>
              Şirketler tarafından yurt dışı satış ve dağıtıma yönelik olarak
              acentelere yapılan komisyon ödemeleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yıllık 2.500.000 ₺’ye kadar,
              <br />◎ %50 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %60 olarak uygulanır.
            </div>
          </div>

          {/* Soru18 */}
          <div className="flex flex-col w-full border-2 border-blue-300 rounded-md">
            <button
              onClick={() => {
                if (index == 18) {
                  setindex(0);
                } else {
                  setindex(18);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 18
                  ? "border-2 border-b-blue-300"
                  : "hover:bg-slate-300"
              }`}
            >
              {index != 18 ? <Add /> : <Remove />}
              <h1 className="text-lg">Yurt Dışı Birim Desteği Nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 18 ? "hidden" : null}`}>
              Şirketlerin, yurt dışındaki mağaza, ofis, paylaşımlı ofis,
              showroom ve Bakanlıkça uygun görülen diğer birimlerin açılmasına
              ve işletilmesine yönelik brüt kiralama giderleri, kullanım hakkı
              giderleri, komisyon giderleri, hizmet giderleri desteklenir.
              <br />
              <br />
              Firmalar bu destek programından; <br />◎ En fazla 5 yıl boyunca,
              <br />◎ Yıllık 4.382.171 ₺’ye kadar,
              <br />◎ %60 oranında yararlanabilir. Genelge kapsamında hedef
              ülkelerde destek oranı %70 olarak uygulanır.
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};






const ExportSupportsDetailPage = () => {
  const { id } = useParams();

  const PickPage = () => {
    switch (id) {
      case "ihracat-desteklerii":
        return <KosgebGreenSupport />;
      case "e-ihracat-destekleri":
        return <TubitakGreenSupport />;
      case "bilisim-destekleri":
        return <BilisimDestekleri/>;
    }
  };

  return <PickPage />;
};

export default ExportSupportsDetailPage;
