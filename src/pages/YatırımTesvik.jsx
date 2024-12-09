import React, { useRef } from "react";
import { useIsVisible } from "../utils/VisibilityRef";
import YatirimTesvikBanner from "../images/YatirimTesvikBanner.jpg";
import YatirimTesvikDikey from "../images/YatırımTeşvikDikey.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import  { useState, useEffect } from 'react';



const ProgressBar = ({ finalProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the animation after the component mounts
    const timer = setTimeout(() => setProgress(finalProgress), 100); // Adjust the 100 to your desired duration
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [finalProgress]);

  return (
    <>
    
    <div className="flex flex-row gap-5 ">
    <div className=" w-96 rounded-lg border-2 border-blue-500 py-4 px-3 shadow-2xl">
      <div className="w-72 bg-gray-100">
        <div
          className="bg-blue-500 h-8 text-sm overflow-clip text-nowrap flex items-center justify-center text-white transition-all ease-in-out"
          style={{ width: `${progress}%`, transitionDuration: '3000ms' }}
        >
          Destek Oranı {progress}%
        </div>
      </div>
    </div>
    <div className="w-80 rounded-lg border-2 border-blue-500 py-4 w-96 shadow-2xl">
    <p>Pazara Giriş Desteği</p>


      </div>
      
      <div className="w-80 rounded-lg border-2 border-blue-500 py-4 w-96 shadow-2xl">
  <p>Yıllık 7.304.631 ₺’ye kadar</p>


      </div>
      </div>
      </>

  );
};



const YatirimTesvik = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);



 

  return (
    <div className="flex flex-col items-center justify-center text-base leading-7">
      <div className="flex w-full">
        <img
          alt="rapor"
          loading="lazy"
          className="w-full"
          src={YatirimTesvikBanner}
        />
      </div>
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>Yatırım Teşvik Belgesi</li>
        </ul>
      </div>
      <div
        ref={ref1}
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1100ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-18">
          <h1 className="text-center text-4xl">YATIRIM TEŞVİK BELGESİ</h1>
          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-20">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "3000ms" }}
                ></div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                    <div className="flex lg:w-1/2 justify-center items-center">
                      <img
                        alt="görsel"
                        loading="lazy"
                        className="w-auto rounded-box"
                        src={YatirimTesvikDikey}
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                      Yatırım Teşvik Belgesi Nedir?
                      </h1>
                      <p className="text-justify">
                      Yatırım Teşvik Belgesi, yatırımların belirlenen asgari şartlara uygun şekilde gerçekleştirilmesi durumunda, destek unsurlarından faydalanma imkânı sağlayan bir belgedir. Bu belge, yatırımın karakteristik değerlerini içerir ve ilgili kararın amaçlarına uygun yatırımlar için düzenlenir. Yatırım teşvik belgesi ile ilgili detaylı bilgi ve başvuru süreci için bizimle iletişime geçin.
                      </p>
                      <h1 className="text-2xl font-bold">
                      Neden İhtiyaç Duyulur?
                      </h1>
                      <p className="text-lg leading-7">
                      Firmaların yatırımlarını gerçekleştirirken ve sonrasında Yatırım Teşvik Belgesi sayesinde sağladığı teşvikler, finansal sürdürülebilirliğe büyük katkı sağlar. Sanayi Bakanlığı tarafından verilen bu belge, yatırımcı firmaların teşviklerden faydalanarak maliyetlerini düşürmelerine ve ticari başarıya ulaşmalarına yardımcı olur. Günümüzde değişen maliyetler ve rekabetçi pazar koşulları nedeniyle firmaların giderleri artmaktadır. Yatırım Teşvik Belgesi, firmaların pazarda rekabet edebilme ve tutunma imkanlarını artırır. Detaylı bilgi ve başvuru için bizimle iletişime geçin.
                      </p>
                      <ul className="list-disc list-inside mt-4 mb-4 text-lg leading-7">
                      <span className="font-bold">Kimler Alabilir?</span>
                      <br></br>
                      <br></br>
                        <li>
                          Gerçek kişiler, sermaye şirketleri, kooperatifler, iş ortaklıkları.
                        </li>
                        <li>
                        Kamu kurum ve kuruluşları,
                        </li>
                        <li>
                        Yurt dışındaki yabancı şirketlerin Türkiye’deki şubeleri Yatırım Teşvik Belgesi alabilir.
                        </li>
                       </ul>
                      <ul>
                      <h1 className="font-bold py-5 text-lg">İşletmelere Nasıl Katkı Sağlar?</h1>
                      Yatırım Teşvik Belgesi, işletmelere ekonomik teşvikler, avantajlar ve yol gösterme sağlayarak yerel ekonomik büyümeyi destekler ve ülkenin ekonomik hedeflerini gerçekleştirmesine yardımcı olur.
                     
                      </ul>
                     
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "5000ms" }}
                >
                  <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="flex flex-col justify-center lg:w-full gap-2">
                      <p className="text-justify">


                      <ul className="list-disc list-inside mt-4 mb-4 text-lg leading-7">
                      <span className="font-bold py-5">Yatırım Teşvik Sisteminin Amacı</span>
                        <li>
                        Cari açığın azaltılması amacıyla ithalat bağımlılığı yüksek olan ara malı ve ürünlerin üretiminin artırılması, 
                        </li>
                        <li>
                        Teknolojik dönüşümü sağlayacak yüksek ve orta-yüksek teknoloji içeren yatırımların desteklenmesi,
                        </li>
                        <li>
                        En az gelişmiş bölgelere sağlanan yatırım desteklerinin artırılması
                        </li>
                        <li>
                        Bölgesel gelişmişlik farklılıklarının azaltılması, 
                        </li>
                        <li>
                        Destek unsurlarının etkinliğinin artırılması,
                        </li>
                        <li>
                        Kümelenme faaliyetlerinin desteklenmesi.
                        </li>
                       </ul>
                       
                       <br></br>
                       <br></br>
                       
                        <ul className="list-disc list-inside mt-4 mb-4 text-lg leading-7">
                        <li>
                          <span  className="font-bold" >
                          Bölgesel Teşvik:
                          </span>{" "}
                          İller arasındaki gelişmişlik farkını azaltmayı ve illerin üretim ve ihracat potansiyellerini arttırmayı hedefler.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Öncelikli Yatırım Konuları:
                          </span>{" "}
                          Belirli yatırım konularının 5.Bölge destekleri ile desteklenmesi hedeflenmektedir.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Stratejik Yatırımlar:
                          </span>{" "}
                          Cari açığın azaltılmasına katkı sağlayacak katma değeri yüksek yatırımlar desteklenmektedir.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Genel Teşvik:
                          </span>{" "}
                          Teşvik edilmeyecek yatırım konuları dışında kalan tüm yatırımları kapsamaktadır.
                        </li>
                        <br />
                      </ul>
                      </p>
   
                      <span className="font-bold py-5 text-xl">Yatırım Teşvik Sisteminde Destek Unsurları</span>
                          <p>
                            <h1 className="font-bold py-5 text-lg">KDV İstisnası</h1>
                            Yatırım Teşvik Belgesi kapsamında yurt içinden ve yurt dışından temin edilecek yatırım malı makine ve teçhizat ile belge kapsamındaki yazılım ve gayri maddi hak satış ve kiralamaları için katma değer vergisinin ödenmemesi şeklinde uygulanır. İmalat ve turizm sektöründe belge kapsamında gerçekleştirilen bina-inşaat harcamaları, 31/12/2025 tarihine kadar KDV istisnasından yararlandırılabilir.
                            <br></br>
                            <br></br>
                            <h1 className="font-bold py-5 text-lg">Gümrük Vergisi Muafiyeti</h1>
                            Yatırım Teşvik Belgesi kapsamında yurt dışından temin edilecek yatırım malı makine ve teçhizat için gümrük vergisinin ödenmemesi şeklinde uygulanır.*
                             *29/6/2021 tarihinden itibaren yapılan başvurulara istinaden düzenlenen yatırım teşvik belgeleri kapsamında ithal edilecek makine ve teçhizatlar için, 3305 Sayılı Kararın EK-8’inde belirtilen makine ve teçhizat için gümrük vergisi muafiyeti uygulanmaz. Söz konusu makine ve teçhizatlar kullanılmış veya yenileştirilmiş olarak Yatırım Teşvik Belgesi kapsamında temin edilemez.
                             <br></br>
                             <br></br>
                             <h1 className="font-bold py-5 text-lg">Vergi İndirimi</h1>
                             Gelir veya Kurumlar Vergisinin, yatırım için öngörülen katkı tutarına ulaşıncaya kadar indirimli olarak uygulanmasıdır. Bu destek, stratejik yatırımlar, bölgesel teşvik uygulamaları ve öncelikli yatırımların teşviki uygulamaları çerçevesinde düzenlenen teşvik belgeleri kapsamında sağlanır.
                             <br></br>
                             <br></br>
                             <h1 className="font-bold py-5 text-lg">Faiz ve Kar Payı Desteği</h1>
                             Yatırım Teşvik Belgesi kapsamında kullanılan en az bir yıl vadeli krediler için sağlanan bir finansman desteğidir. Teşvik belgesinde kayıtlı sabit yatırım tutarının %70’ine kadar kullanılan krediye ilişkin ödenecek faizin veya kâr payının belli bir kısmı Bakanlığımızca karşılanmaktadır. Bu destek unsuru, stratejik yatırımlar, 3., 4., 5. ve 6. Bölgelerde bölgesel teşvik ve öncelikli yatırımların teşviki uygulamaları kapsamında yapılacak yatırımlar için uygulanır. 
                             <br></br>
                             <br></br>
                             <h1 className="font-bold py-5 text-lg">Yatırım Yeri Tahsisi</h1>
                             Yatırım Teşvik Belgesi düzenlenmiş stratejik yatırımlar, bölgesel ve öncelikli yatırımlar için Çevre, Şehircilik ve İklim Değişikliği Bakanlığınca (Milli Emlak Genel Müdürlüğü) belirlenen usul ve esaslar çerçevesinde yatırım yeri tahsis edilebilir.
                             <br></br>
                             <br></br>
                             <h1 className="font-bold py-5 text-lg">Sigorta Primi İşveren Hissesi Desteği</h1>
                             Yatırım Teşvik Belgesi kapsamı yatırımla sağlanan ilave istihdam için ödenmesi gereken sigorta primi işveren hissesinin asgari ücrete tekabül eden kısmının belirli bir süre Bakanlıkça karşılanmasıdır. Stratejik yatırımlar, bölgesel ve öncelikli yatırımların teşviki uygulamaları kapsamında düzenlenen teşvik belgeleri için uygulanır.
                             <br></br>
                             <br></br>
                             <h1 className="font-bold py-5 text-lg">Sigorta Primi Desteği</h1>
                             Yatırım Teşvik Belgesi kapsamı yatırımla sağlanan ilave istihdam için ödenmesi gereken sigorta primi işçi hissesinin asgari ücrete tekabül eden kısmının 10 yıl süreyle Bakanlıkça karşılanmasıdır. Genel teşvik uygulamaları hariç olmak üzere, sadece 6. Bölgede gerçekleştirilecek yatırımlar için düzenlenen teşvik belgelerinde öngörülür. Ayrıca, Teknoloji Odaklı Sanayi Hamlesi Programı kapsamında desteklenen stratejik yatırımlar için de uygulanabilir.
                             <br></br>
                             <br></br>
                             <h1 className="font-bold py-5 text-lg">KDV İadesi</h1>
                             Sabit yatırım tutarı 500 milyon Türk Lirası’nın üzerindeki Stratejik Yatırımlar kapsamında gerçekleştirilen bina-inşaat harcamaları için tahsil edilen KDV’nin iade edilmesidir.
                          </p>

                    </div>
                  </div>
                </div>
              
              </div>

    <div className="gap-y-4">
      <ProgressBar  finalProgress={50} />
      

    </div>



            
              <div
  className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
    isVisible1 ? "opacity-100" : "opacity-0"
  }`}
  style={{ transitionDuration: "1100ms" }}
>
  <h1 className="text-xl text-center lg:text-4xl font-bold">
    Hizmetlerimizin Size Sunduğu Fırsatlar
  </h1>
  <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
    <div
      className="flex flex-col p-8 rounded-box h-full w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105"
      style={{
        backgroundColor: "#ffff",
        transitionDuration: "300ms",
      }}
    >
      <CheckCircleIcon
        fontSize="large"
        className="mx-auto mb-4 text-blue-600"
      />
      <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
      <p>
        Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
      </p>
    </div>
    <div
      className="flex flex-col p-8 rounded-box h-full w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105"
      style={{
        backgroundColor: "#ffff",
        transitionDuration: "300ms",
      }}
    >
      <CheckCircleIcon
        fontSize="large"
        className="mx-auto mb-4 text-blue-600"
      />
      <h1 className="text-xl font-bold">Prestij Kazanma</h1>
      <p>
        Uluslararası arenada saygınlık kazanmak için, sektörde tanınmış, stratejik avantajlara sahip ve güçlü ekonomik yapılarıyla bilinen ülkelerde şirket kurarak global prestijinizi artırabilirsiniz.
      </p>
    </div>
    <div
      className="flex flex-col p-8 rounded-box h-full w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105"
      style={{
        backgroundColor: "#ffff",
        transitionDuration: "400ms",
      }}
    >
      <CheckCircleIcon
        fontSize="large"
        className="mx-auto mb-4 text-blue-600"
      />
      <h1 className="text-xl font-bold">Vergi Fırsatlarından Yararlanmak</h1>
      <p>
        Vergi teşvikleri ve avantajları sunan uluslararası yapılar oluşturarak, başta KDV olmak üzere çeşitli vergi yükümlülüklerinde tasarruf sağlamak.
      </p>
    </div>
    <div
      className="flex flex-col p-8 rounded-box h-full w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105"
      style={{
        backgroundColor: "#ffff",
        transitionDuration: "400ms",
      }}
    >
      <CheckCircleIcon
        fontSize="large"
        className="mx-auto mb-4 text-blue-600"
      />
      <h1 className="text-xl font-bold">Rekabet Üstünlüğü</h1>
      <p>
        Sektörünüzde öne çıkmanızı sağlayacak stratejik yaklaşımlar sunarak, sürdürülebilirlik ve inovasyon odaklı çalışmalarınızla rekabet üstünlüğü kazanmanıza yardımcı oluyoruz.
      </p>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YatirimTesvik;
