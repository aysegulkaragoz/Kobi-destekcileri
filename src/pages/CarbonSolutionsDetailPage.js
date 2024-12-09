import reportImage from "../images/TubitakDestekleriBanner.jpg";
import img2 from "../images/4.webp";
import stageImage from "../images/Stage.webp";
import { useRef } from "react";
import { useIsVisible } from "../utils/VisibilityRef";
import { useParams } from "react-router-dom";
import RightNavigationCarbonSolutions from "../components/RightNavigationCarbonSolutions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CarbonManagement = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className="flex flex-col items-center justify-center text-base leading-7"
    >
      <div className="flex w-full">
        <img alt="rapor" loading="lazy" className="w-full" src={reportImage} />
      </div>
      <div
        className={`text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full`}
      >
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Tübitak Destekleri</a>
          </li>
          <li>TÜBİTAK 1501 Destek Programı</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">
          TÜBİTAK 1501 Destek Programı
          </h1>

          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-20">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                    <h1 className="text-2xl font-bold">TÜBİTAK 1501 Destek Programı Nedir?</h1>
                      <p className="text-justify">
                      TÜBİTAK 1501 Programı, Türkiye'nin sanayi ve teknoloji sektörlerinde inovasyonu teşvik eder, yerli Ar-Ge kapasitesini geliştirir ve ulusal ekonominin rekabetçiliğini artırır. Özel sektör firmalarının teknolojik yeniliklerini ve ürün geliştirme süreçlerini destekleyerek, ülkenin bilimsel ve teknolojik altyapısını güçlendirmeyi ve ekonomik büyümeyi hızlandırmayı amaçlar.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                          TÜBİTAK 1501 Programı Hizmeti{" "}
                          </span>
                          Almak için
                        </span>{" "}
                        <a href="/gorusme-ayarla" className="font-bold link">
                          Buradan
                        </a>{" "}
                        Hemen İletişime geçin.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className=" w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "5000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                    <div className="flex lg:w-1/2 justify-center items-center">
                      <img
                        alt="görsel"
                        loading="lazy"
                        className=" w-auto rounded-box"
                        src={img2}
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                      Girişimcilere ve İşletmelere Nasıl Katkı Sağlar?                     
                       </h1>
                      <p>
                      TÜBİTAK 1501 Programı, girişimcilere ve işletmelere mali destek, inovasyon teşviki, üniversite-sanayi iş birliği, teknolojik altyapı geliştirme ve iş gücü yetiştirme gibi fırsatlar sunar. Bu destekler, Ar-Ge projelerini hızlandırarak işletmelerin rekabetçiliğini artırır. Program, Türkiye’nin bilim ve teknoloji alanındaki gelişimine katkı sağlar ve ekonomik büyümeyi teşvik eder.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        Kimler Yararlanabilir?
                        </span>
                        <br />
                        <br />
                        TÜBİTAK 1507 Programına, uygulama esaslarına uygun tüm sermaye şirketleri başvurabilir. Bu programa, TÜBİTAK Yönetim Kurulu tarafından belirlenen çalışan sayısı ve/veya net satış tutarı sınırının altında olan büyük ölçekli sermaye şirketleri de başvuru yapabilir. 1507 Programı, 1501 Programı ile benzer katılım koşullarına sahiptir.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        Azaltma Stratejileri Geliştirme:
                        </span>
                        <br />
                        <br />
                        Enerji verimliliği, yenilenebilir enerji kullanımı ve
                        süreç optimizasyonu gibi emisyon azaltma yöntemleri.
                        <br />
                        <br />
                       <span className="font-bold"> Neden İhtiyaç Duyulur?</span>
                       <br></br>
                       <br></br>
                       TÜBİTAK 1501, özel sektörün teknolojik gelişimini destekler ve sanayinin inovasyonunu teşvik eder. Bu program, Ar-Ge projelerine önemli bir destek sağlar ve işletmeleri evrensel teknolojiye katkı sağlayacak seviyeye getirir. TÜBİTAK 1507 ise KOBİ'leri güçlendirmeyi ve Ar-Ge kültürünü geliştirmeyi hedefleyen bir başlangıç destek programıdır.
                        <br />
                        <br />
                     <ul className="list-disc py-5">
                      <li>Projenin destek süresi, projede destek kapsamına alınan faaliyetlerin gerçekleştirilmesi için gereken ve TÜBİTAK tarafından kabul edilen süredir. Destek süresi proje bazında en fazla otuz altı (36) aydır.</li>
                      <li>TÜBİTAK 1501 Sanayi Ar-Ge Projeleri Destekleme Programı için herhangi bir destek üst limiti bulunmamakta olup destek oranı %75’tir.</li>
                     </ul>
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <h1 className="text-xl text-center lg:text-4xl font-bold">
          Hizmetlerimizin Size Sunduğu Fırsatlar
        </h1>
        <div
  className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
    isVisible1 ? "opacity-100" : "opacity-0"
  }`}
  style={{ transitionDuration: "1250ms" }}
>
 
  <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
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
      <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
      <p>
        Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
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
  );
};

const CarbonOffset = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className="flex flex-col items-center justify-center text-base leading-7"
    >
      <div className="flex w-full">
        <img alt="rapor" loading="lazy" className="w-full" src={reportImage} />
      </div>
      <div
        className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full"
      >
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>1507 - TÜBİTAK KOBİ Ar-Ge Başlangıç Destek Programı</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">
          1507 - TÜBİTAK KOBİ Ar-Ge Başlangıç Destek Programı
          </h1>

          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-20">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <h1 className="font-bold py-5 text-lg">1507 - TÜBİTAK KOBİ Destek Programı Nedir?</h1>
                        TÜBİTAK (Türkiye Bilimsel ve Teknolojik Araştırma Kurumu) tarafından yürütülen KOBİ Ar-Ge Başlangıç Destek Programı, küçük ve orta ölçekli işletmelerin (KOBİ) Ar-Ge kapasitelerini artırmayı ve yenilikçi projelerini desteklemeyi amaçlar.
                        <br />
                        <br />
                        <h1 className="font-bold py-5 text-lg">Nasıl Katkı Sağlar?</h1>
                        TÜBİTAK 1507 programı, KOBİ’lerin Ar-Ge projelerini geliştirmelerine olanak tanırken, bu projelerin ticarileştirilmesi sürecine de çeşitli destekler sağlar.
                        <br></br>
                        <br></br>                          
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                          TÜBİTAK 1507 Programı{" "}
                          </span>
                          Almak için
                        </span>{" "}
                        <a href="/gorusme-ayarla" className="font-bold link">
                          Buradan
                        </a>{" "}
                        Hemen İletişime geçin.
                      </p>
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
                  <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                    <div className="flex lg:w-1/2 justify-center items-center">
                      <img
                        alt="görsel"
                        loading="lazy"
                        className=" w-auto rounded-box"
                        src={img2}
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                      Kimler Yararlanabilir?
                      </h1>
                      <p>
                      Uygulama esaslarına uygun Ar-Ge yapmak isteyen tüm sermaye şirketleri, proje başvurusunda bulunabilir. Ayrıca, başvuru sırasında KOBİ tanımına uyan ancak destek sürecinde bu vasfını yitiren kuruluşların projeleri de desteklenmeye devam eder.
                      </p>
                      
                      <h1 className="text-2xl font-bold">Neden İhtiyaç Duyulur?</h1>
                      <p>KOBİ’ler, Türkiye ekonomisinin önemli bir parçasıdır. TÜBİTAK 1507, bu şirketlerin Ar-Ge ve yenilik kapasitelerini artırarak hem şirketlerin hem de ulusal ekonominin rekabet gücünü yükseltir. Program, yerli teknolojilerin kullanımını teşvik eder, dışa bağımlılığı azaltır ve yerel bilgi birikimini artırır. Ayrıca, teknoloji transferini destekler, yeni iş alanları yaratır ve yüksek teknoloji alanlarında nitelikli iş gücüne olan talebi karşılar. Türk KOBİ’lerinin global rekabet gücünü artırırken, çevre dostu teknolojiler ve yenilenebilir enerji gibi alanlardaki Ar-Ge çalışmalarıyla sürdürülebilir kalkınma hedeflerine katkıda bulunur. </p>
                      <br></br>
                      <p> TÜBİTAK 1507, KOBİ’lerin Ar-Ge projelerini geliştirmelerine ve ticarileştirmelerine destek verir. Belirli teknoloji alanlarına veya sektörlere odaklanan projelere öncelik verilir ve bu projelerin topluma ve ekonomiye katkı sağlaması hedeflenir. Program kapsamında, projelerin gerektirdiği mal ve hizmet alımları kabul edilen gider kalemleri arasındadır.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                 
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 lg:flex-row">
                   <p>TÜBİTAK 1507, KOBİ’lerin Ar-Ge projelerini geliştirmelerine ve ticarileştirmelerine destek verir. Belirli teknoloji alanlarına veya sektörlere odaklanan projelere öncelik verilir ve bu projelerin topluma ve ekonomiye katkı sağlaması hedeflenir. Program kapsamında, projelerin gerektirdiği mal ve hizmet alımları kabul edilen gider kalemleri arasındadır.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <h1 className="text-xl text-center lg:text-4xl font-bold">
          Hizmetlerimizin Size Sunduğu Fırsatlar
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
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
            <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
            <p>
              Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası
              arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
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
            <h1 className="text-xl font-bold">Prestij Kazanma</h1>
            <p>
              Uluslararası arenada saygınlık kazanmak için, sektörde tanınmış,
              stratejik avantajlara sahip ve güçlü ekonomik yapılarıyla bilinen
              ülkelerde şirket kurarak global prestijinizi artırabilirsiniz.
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
            <h1 className="text-xl font-bold">
              Vergi Fırsatlarından Yararlanmak
            </h1>
            <p>
              Vergi teşvikleri ve avantajları sunan uluslararası yapılar
              oluşturarak, başta KDV olmak üzere çeşitli vergi yükümlülüklerinde
              tasarruf sağlamak.
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
              Sektörünüzde öne çıkmanızı sağlayacak stratejik yaklaşımlar
              sunarak, sürdürülebilirlik ve inovasyon odaklı çalışmalarınızla
              rekabet üstünlüğü kazanmanıza yardımcı oluyoruz.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-9/12 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <img loading="lazy" src={stageImage} />
      </div>
    </div>
  );
};

const GreenhouseGasReduction = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className="flex flex-col items-center justify-center text-base leading-7"
    >
      <div className="flex w-full">
        <img alt="rapor" loading="lazy" className="w-full" src={reportImage} />
      </div>
      <div
        className={`text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full`}
      >
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>TÜBİTAK 1832 SANAYİDE YEŞİL DÖNÜŞÜM DESTEK PROGRAMI</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">
          TÜBİTAK 1832 SANAYİDE YEŞİL DÖNÜŞÜM DESTEK PROGRAMI
          </h1>
           <p>Sanayi ve Teknoloji Bakanlığı, Dünya Bankası desteğiyle Türkiye Yeşil Sanayi Projesi'ni başlattı. Bu proje kapsamında TÜBİTAK ve KOSGEB, 450 milyon dolarlık finansman ile sanayinin yeşil dönüşümünü destekleyecek. TÜBİTAK-TEYDEB, proje süresince 175 milyon dolarlık kaynakla sanayinin yeşil dönüşümüne katkıda bulunacak.
Projeler, daha önce TÜBİTAK-TEYDEB veya KOSGEB destekleri ile belirli bir aşamaya gelmiş, ancak henüz ticarileşmemiş Ar-Ge çalışmalarının devamı niteliğinde olmalıdır. Prototip geliştirme, validasyon ve sertifikasyon testleri, saha denemeleri gibi çalışmalar bu çağrı kapsamında desteklenmektedir.
</p>
          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-20">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                    <h1 className="font-bold text-2xl"> Tübitak 1832 Sanayide Yeşil Dönüşüm Destek Programı Nedir?</h1>
                      <p className="text-justify">
                      TÜBİTAK, özel sektör kuruluşlarının yeşil dönüşüm projeleri kapsamında geliştirdikleri Ar-Ge prototiplerinin ticarileşme sürecini desteklemektedir. Bu destek, prototiplerin piyasaya sürülmeden önce gerekli olan tüm faaliyetleri kapsamaktadır.
                      <br></br>
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                          Tübitak 1832 Sanayide Yeşil Dönüşüm Destek Programı Hizmeti{" "}
                          </span>
                          Almak için
                        </span>{" "}
                        <a href="/gorusme-ayarla" className="font-bold link">
                          Buradan
                        </a>{" "}
                        Hemen İletişime geçin.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className=" w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "5000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                   
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                      Neden İhtiyaç Duyulur ve Kimler Yararlanabilir?
                      </h1>
                      <p>
                      TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Destek Programı, enerji verimliliği, atık yönetimi ve çevresel etkilerin azaltılması gibi alanlarda yenilikçi projelere destek sağlamaktadır. Bu program, sanayide çevre dostu ve sürdürülebilir üretim süreçlerini teşvik eder. Türkiye'de en az 2 yıl tescilli sermaye şirketleri bu programdan yararlanabilir.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        Proje Üst Limitleri                        
                        </span>
                        <br />
                       <ul>
                        <li className="list-disc py-5 font-bold">Büyük Ölçekli Kuruluş 22.500.000 ₺ Üst Limiti</li>
                        <li className="list-disc py-5 font-bold">Orta Ölçekli Kuruluş 12.000.000 ₺ Üst Limiti</li>
                        <li className="list-disc py-5 font-bold">Mikro/Küçük Ölçekli Kuruluş 7.500.000 ₺ Üst Limiti</li>
                       </ul>
                       <br></br>
                       <br></br>
                       <span className="text-2xl font-bold">
                       Desteklenecek Ar-Ge ve Yenilik Konuları                        
                        </span>
                        <br />
                       <ul>
                        <li className="list-disc py-5 font-bold">Avrupa Yeşil Mutabakatı ve İklim Değişikliğine Uyum’a yönelik Ar-Ge ve yenilik konuları,</li>
                        <li className="list-disc py-5 font-bold">Yeşil Büyüme Teknoloji Yol Haritası Öncelikli Ar-Ge ve Yenilik Konuları, (Demir-Çelik, Alüminyum, Çimento, Gübre, Kimyasallar, Plastik)</li>
                        <li className="list-disc py-5 font-bold">Diğer Teknoloji Yol Haritalarında Yeşil Büyümeye Hizmet Eden Ar-Ge ve Yenilik Konuları desteklenecektir.</li>
                       </ul>
                       <br></br>
                       <span className="text-2xl font-bold">
                       Desteklenecek Gider Kalemleri                       
                        </span>
                       <br />
                       <ul>
                        <li className="list-disc py-5 font-bold">Ar-Ge ve Test kuruluşlarına yaptırılan işlere ait giderler</li>
                        <li className="list-disc py-5 font-bold">Alet ve Teçhizat Giderleri, Seyahat Giderleri</li>
                        <li className="list-disc py-5 font-bold">Hizmet Alımları, Personel Girdileri</li>
                       </ul>
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
  className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
    isVisible1 ? "opacity-100" : "opacity-0"
  }`}
  style={{ transitionDuration: "1250ms" }}
>
  <h1 className="text-xl text-center lg:text-4xl font-bold">
    Hizmetlerimizin Size Sunduğu Fırsatlar
  </h1>
  <br></br>
  <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
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
      <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
      <p>
        Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
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
  );
};


const TubitakSupports = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className="flex flex-col items-center justify-center text-base leading-7"
    >
      <div className="flex w-full">
        <img alt="rapor" loading="lazy" className="w-full" src={reportImage} />
      </div>
      <div className="flex flex-col items-center justify-center text-base leading-7">
        
        <div className={`text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full`}>
          <ul>
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <a href="/hizmetlerimiz">Tübitak Destekleri</a>
            </li>
            <li>1711 - Yapay Zekâ Ekosistem Çağrısı</li>
          </ul>
        </div>
        <div className={`flex bg-slate-50 transition-opacity ease-in ${isVisible1 ? "opacity-100" : "opacity-0"}`} style={{ transitionDuration: "1250ms" }}>
          <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
            <h1 className="text-center text-4xl">1711 - Yapay Zekâ Ekosistem Çağrısı</h1>

            <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
              <div className="flex flex-col gap-20">
                <div className="w-full">
                  <div className={`transform -translate-x-full transition ${isVisible1 ? "translate-x-0" : null}`} style={{ transitionDuration: "4000ms" }}>
                    <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                      <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                        <h1 className="text-2xl font-bold">TÜBİTAK 1711 Destek Programı Nedir?</h1>
                        <p className="text-justify">
                          Bu program, Türkiye'de yapay zekâ teknolojilerinin geliştirilmesi ve yaygınlaştırılmasını hedefler. Yapay zekâ çözümlerinin müşteri ihtiyaçlarına yönelik ürünlere dönüştürülmesini ve Türkiye Yapay Zekâ Ekosistemini harekete geçirmeyi amaçlar. Ayrıca, yapay zekâ tabanlı yeniliklerin hızla sanayi ve kamu kurumlarına entegre edilmesini destekler.
                          <br />
                          <br />
                          <span>
                            Bizden{" "}
                            <span className="font-bold">
                              TÜBİTAK 1711 Programı Hizmeti{" "}
                            </span>
                            Almak için
                          </span>{" "}
                          <a href="/gorusme-ayarla" className="font-bold link">
                            Buradan
                          </a>{" "}
                          Hemen İletişime geçin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className={`transform -translate-x-full transition ${isVisible1 ? "translate-x-0" : null}`} style={{ transitionDuration: "5000ms" }}>
                    <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                      <div className="flex lg:w-1/2 justify-center items-center">
                        <img alt="görsel" loading="lazy" className=" w-auto rounded-box" src={img2} />
                      </div>
                      <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                        <h1 className="text-2xl font-bold">
                          Neden İhtiyaç Duyulur ve Kimler Başvurabilir?
                        </h1>
                        <p>
                          TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı, yapay zeka teknolojilerinin hızla ilerlemesi ve Türkiye’nin rekabet gücünü artırma potansiyeli nedeniyle başlatılmıştır. Programdan, üniversiteler, araştırma kurumları ve en az bir KOBİ ölçekli teknoloji sağlayıcı ile konsorsiyum oluşturan KOBİ veya büyük ölçekli firmalar yararlanabilir. Bu çağrı, akademik ve endüstriyel işbirliklerini güçlendirir ve yapay zeka teknolojilerinin ticarileşmesini destekler.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className={`transform -translate-x-full transition ${isVisible1 ? "translate-x-0" : null}`} style={{ transitionDuration: "6000ms" }}>
                    <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                      <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                        <p className="text-justify">
                          <span className="text-2xl font-bold">
                            Neden İhtiyaç Duyulur ve Kimler Başvurabilir?
                          </span>
                          <br />
                          <br />
                          TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı, yapay zeka teknolojilerinin hızla ilerlemesi ve Türkiye’nin rekabet gücünü artırma potansiyeli nedeniyle başlatılmıştır. Programdan, üniversiteler, araştırma kurumları ve en az bir KOBİ ölçekli teknoloji sağlayıcı ile konsorsiyum oluşturan KOBİ veya büyük ölçekli firmalar yararlanabilir. Bu çağrı, akademik ve endüstriyel işbirliklerini güçlendirir ve yapay zeka teknolojilerinin ticarileşmesini destekler.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablo buraya taşındı */}
            <div className="flex justify-center items-center ">
              <div className="grid grid-cols-3 border border-black divide-x">
                <div className="p-4">
                  <p className="text-center font-medium">
                    Makine, Teçhizat, Seyahat, Personel, Danışmanlık, Hizmet Alımı, Alet, Teçhizat, Malzeme ve Sarf Giderleri
                  </p>
                </div>
                <div className="p-4 flex justify-center items-center">
                  <p className="font-medium">7.500.000 ₺ Üst Limiti</p>
                </div>
                <div className="p-4">
                  <ul className="list-disc pl-5">
                    <li>Akıllı Üretim Sistemleri</li>
                    <li>Akıllı Tarım, Gıda ve Hayvancılık</li>
                    <li>Finans Teknolojileri</li>
                    <li>İklim Değişikliği</li>
                    <li>Akıllı Eğitim Teknolojileri öncelikli alan olarak belirlenmiştir.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div
        className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <h1 className="text-xl text-center lg:text-4xl font-bold">
          Hizmetlerimizin Size Sunduğu Fırsatlar
        </h1>
        <div
          className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "1250ms" }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
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
              <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
              <p>
                Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
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
  )
};


const Tubitak1005 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className="flex flex-col items-center justify-center text-base leading-7"
    >
      <div className="flex w-full">
        <img alt="rapor" loading="lazy" className="w-full" src={reportImage} />
      </div>
      <div
        className={`text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full`}
      >
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Tübitak Destekleri</a>
          </li>
          <li>TÜBİTAK 1005 Destek Programı</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">
          1005 - Ulusal Yeni Fikirler ve Ürünler Araştırma Destek Programı
          </h1>

          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-20">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                    <h1 className="text-2xl font-bold">1005 - Ulusal Yeni Fikirler ve Ürünler Araştırma Destek Programının Amacı Nedir?</h1>
                      <p className="text-justify">
                      Ulusal Yeni Fikirler ve Ürünler Araştırma Destek Programı'nın amacı, ülkemizde ihtiyaç duyulan, teknolojik dışa bağımlılığımızı azaltacak ve/veya ülkemizin rekabet gücünü artıracak ulusal/uluslararası yeni bir ürün/süreç/yöntem/model geliştirme amacına yönelik uygulamalı araştırma ve/veya deneysel geliştirme projelerinin desteklenmesidir. 
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                          TÜBİTAK 1005 Programı Hizmeti{" "}
                          </span>
                          Almak için
                        </span>{" "}
                        <a href="/gorusme-ayarla" className="font-bold link">
                          Buradan
                        </a>{" "}
                        Hemen İletişime geçin.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className=" w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "5000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                    <div className="flex lg:w-1/2 justify-center items-center">
                      <img
                        alt="görsel"
                        loading="lazy"
                        className=" w-auto rounded-box"
                        src={img2}
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                      Proje Süresi                     
                       </h1>
                      <p>
                      Proje süresi en fazla 18 aydır. Başvurularda herhangi bir zaman kısıtlaması yoktur. Yıl boyunca başvuru yapılabilir.
                      </p>
                      
                      <h1 className="text-2xl font-bold">
                      Proje Bütçesi                     
                       </h1>
                      <p>
                      Proje destek üst limiti (burs dahil, proje teşvik ikramiyesi (PTİ) ve kurum hissesi hariç) 650.000 TL’dir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        Programa Kimler Başvurabilir?
                        </span>
                        <br />
                        <br />
                        Proje ekibinde yer alacak yürütücü, araştırmacı ve danışmanların; 
                     <ul className="list-disc py-5">
                      <li>En az dört yıllık üniversite lisans eğitimi almış olmaları,</li>
                      <li>Projenin yürütüleceği kurumun (yükseköğretim kurumları, kamu kurumları veya özel kuruluşlar) kadrolu/tam zamanlı personeli (emekliler hariç) olmaları gerekmektedir.
                        (Kriterler Tablo içerisinde olabilir)
                      </li>
                      </ul>                          
                    </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                       Kriterler:
                        </span>
                        <br />
                        Proje önerileri aşağıda belirtilen altı boyut altında değerlendirilir:
                       
                       <ul className="list-disc">
                        <li>Ulusal Kazanım</li>
                        <li>Amaç ve Hedefler</li>
                        <li>Yenilikçi Yönü</li>
                        <li>Yöntem</li>
                        <li>Proje Yönetimi</li>
                        <li>Yaygın Etki</li>
                       </ul>
                        
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <h1 className="text-xl text-center lg:text-4xl font-bold">
          Hizmetlerimizin Size Sunduğu Fırsatlar
        </h1>
        <div
  className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
    isVisible1 ? "opacity-100" : "opacity-0"
  }`}
  style={{ transitionDuration: "1250ms" }}
>
 
  <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
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
      <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
      <p>
        Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
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
  );
};

const Tubitak1812 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className="flex flex-col items-center justify-center text-base leading-7"
    >
      <div className="flex w-full">
        <img alt="rapor" loading="lazy" className="w-full" src={reportImage} />
      </div>
      <div
        className={`text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full`}
      >
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Tübitak Destekleri</a>
          </li>
          <li>TÜBİTAK 1812 Destek Programı</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">
          1812 - Yatırım Tabanlı Girişimcilik Destek Programı (BiGG Yatırım)          
          </h1>

          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-20">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                    <h1 className="text-2xl font-bold">1812 - Yatırım Tabanlı Girişimcilik Destek Programı Nedir?</h1>
                      <p className="text-justify">
                      TÜBİTAK 1812, girişimcilerin teknoloji ve yenilik odaklı iş fikirlerini, katma değer ve nitelikli istihdam yaratma potansiyeli yüksek şirketlere dönüştürmeleri için fikir aşamasından pazara kadar destekleyen bir programdır. Bu program, nitelikli girişimciliği teşvik ederek, uluslararası piyasalarda rekabet edebilen, yenilikçi ve yüksek teknoloji düzeyine sahip ürün ve süreçler geliştirebilen teknoloji tabanlı başlangıç firmalarının oluşumunu hedeflemektedir.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                          1812 - Yatırım Tabanlı Girişimcilik Destek Programı  Hizmeti{" "}
                          </span>
                          Almak için
                        </span>{" "}
                        <a href="/gorusme-ayarla" className="font-bold link">
                          Buradan
                        </a>{" "}
                        Hemen İletişime geçin.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className=" w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "5000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col lg:flex-row">
                    <div className="flex lg:w-1/2 justify-center items-center">
                      <img
                        alt="görsel"
                        loading="lazy"
                        className=" w-auto rounded-box"
                        src={img2}
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                      Neden İhtiyaç Duyulur?                     
                       </h1>
                      <p>
                      TÜBİTAK 1812 Destek Programı, girişimcilerin iş fikirlerini uygulayıcı kuruluşlara sunmalarını ve bu fikirlerin değerlendirilmesini sağlar. Başarılı iş planlarına dönüşme olasılığı yüksek fikirler için girişimcilere hızlandırıcı hizmet sunar. Bu sayede, girişimciler iş fikirlerini ticari ürüne, sürece veya hizmete dönüştürme fırsatı bulurlar.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        Kimler Yararlanabilir?
                        </span>
                        <br />
                        <ul className="list-disc py-5">
                          <li>Program kapsamında teknoloji ve yenilik odaklı girişim faaliyetinde bulunmaya aday,</li>
                          <li>Ön başvuru tarihi itibariyle üniversitelerin herhangi bir ön lisans, lisans, yüksek lisans veya doktora programına kayıtlı öğrenci ya da bu programlardan mezun,</li>
                          <li>Daha önce Sanayi ve Teknoloji Bakanlığı Teknogirişim Sermayesi Desteği ya da TÜBİTAK 1512 Programı 2. Aşaması kapsamında destek almamış,</li>
                          <li>Ön başvuru tarihi itibariyle herhangi bir işletmenin ortaklık yapısında yer almamış kişiler yararlanabilir.</li>
                        </ul>

                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : null
                  }`}
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex h-1/2 lg:gap-10 lg:flex-row">
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        TÜBİTAK 1812 Programı Girişimcilere ve İşletmelere Nasıl Katkı Sağlar?
                        </span>
                        <br />
                        <br />
                        TÜBİTAK 1812 Destek Programı, girişimcilere iş fikirlerini uygulayıcı kuruluşlara sunma, bu fikirlerin değerlendirilmesi ve başarılı iş planlarına dönüşme olasılığı yüksek olanlara eğitim, rehberlik ve kuluçka hizmetleri sunar. Ayrıca, onaylanmış iş planları için maddi destek sağlar. Program, işletmelerin kurulmasını, büyümesini ve genişlemesini teşvik eder. Her yıl açılan çağrılar kapsamında, yenilik odaklı ve ticari değeri doğrulanmış iş fikirleri desteklenir. Aşama 1, girişimcilik proje desteği çağrısında belirtilen iş planı son başvuru tarihinde tamamlanır.
                        <br />
                        <br />
                       <span className="font-bold">TÜBİTAK 1812 Yatırım Tabanlı Girişimcilik Destek Programı üç aşamadan oluşmaktadır:</span>
                       <br></br>
                       <br></br>
                       <ul className="list-none">
                        <li><span className="font-bold">a)Aşama 1; </span>girişimcilerin iş fikirlerini uygulayıcı kuruluşlara sunduğu, uygulayıcı kuruluşun bu iş fikirlerini değerlendirdiği, başarılı bir iş planına dönüşme olasılığı yüksek olan iş fikirleri için girişimcilere hızlandırıcı hizmeti sundukları aşamadır. Bu aşamada girişimcilere  mentorluk, iş birliği ağları oluşturma, eğitim vb. destekleri sağlayan Uygulayıcı Kuruluşlar, iş fikrinin iş planına dönüşmesi sürecinde fikrin teknik ve ticari açıdan doğrulanması çalışmalarını yürütür.  Aşama 1, girişimcilik proje desteği çağrısında belirtilen iş planı son başvuru tarihinde tamamlanır.</li>
                        <br></br>
                        <li><span className="font-bold">a)Aşama 2; </span>girişimcilerin iş planlarını belirli esaslar çerçevesinde değerlendirir. Değerlendirme sonucunda Mükemmeliyet Mührü alan iş planları, girişimcilerin uygun bir şirket kurmalarını gerektirir. Bu şirketler, Aşama 2’de desteklenen tutar karşılığında en fazla %5 hissesi için fon ile yatırım sözleşmesi yapar. Yönetim Kurulu, bu oranı düşürebilir. Fonun yapacağı yatırım, hisse ortaklığı, hisseye dönüştürülebilir borç veya her ikisini de içerebilir.</li>
                        <br></br>
                        <li><span className="font-bold">a)Aşama 3; </span>şirketlerin önceki aşamalarda elde ettiği çıktıların Ar-Ge çalışmalarıyla iyileştirilmesi ve ticarileşme potansiyellerinin artırılmasını hedefler. Aşama 3, şirketlerin TÜBİTAK 1507 KOBİ Ar-Ge Başlangıç Destek Programı'na başvurmasını ve ardından değerlendirme, karar ve izleme süreçlerini kapsar. Bu aşamada detay tasarım, ticari prototipin iyileştirilmesi, denemeler ve saha testleri gibi faaliyetler gerçekleştirilir. Bu süreçte kurulan şirketler, proje bitiş tarihinden sonraki 24 ay içerisinde TÜBİTAK 1507’ye başvuruda bulunabilir.</li>
                       </ul>
                        <br />
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <h1 className="text-xl text-center lg:text-4xl font-bold">
          Hizmetlerimizin Size Sunduğu Fırsatlar
        </h1>
        <div
  className={`flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10 transition-opacity ease-in ${
    isVisible1 ? "opacity-100" : "opacity-0"
  }`}
  style={{ transitionDuration: "1250ms" }}
>
 
  <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
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
      <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
      <p>
        Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
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
  );
};

const CarbonSolutionsDetailPage = () => {
  const { id } = useParams();

  const PickPage = () => {
    switch (id) {
      case "tubitak1812":
        return <Tubitak1812/>;
      case "tubitak1005":
        return <Tubitak1005/>;
      case "karbon-cozumleri":
        return <CarbonManagement />;
      case "1507-tubitak-kobi-ar-ge-başlangic-destek-programı":
        return <CarbonOffset/>;
      case "sera-gazi-azaltim-ve-uzaklastirma-projelerinin-hazirlanmasi":
        return <GreenhouseGasReduction />;
      case "tubitak-1711-destekleri":
        return <TubitakSupports/>;  
    }
  };

  return <PickPage />;
};

export default CarbonSolutionsDetailPage;
