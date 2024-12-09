import reportImage from "../images/report.webp";
import img2 from "../images/10.webp";
import stageImage from "../images/Stage.webp";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { useRef } from "react";
import { useIsVisible } from "../utils/VisibilityRef";
import RightNavigationConsultancy from "../components/RightNavigationConsultancy";
import { useParams } from "react-router-dom";

const SocialResponsibilityConsultancy = () => {
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
          <li>Sosyal Sorumluluk Danışmanlığı</li>
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
            Sosyal Sorumluluk Danışmanlığı: Kuruluşların Toplumsal Etkilerini
            Güçlendirme Yolculuğu
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
                      <p className="text-justify">
                        Sosyal Sorumluluk Danışmanlığı, kuruluşların sosyal
                        sorumluluk projelerini planlama, uygulama ve
                        değerlendirme süreçlerinde rehberlik ve uzmanlık
                        sağlayan bir hizmettir. Bu hizmet, şirketlerin sosyal,
                        çevresel ve etik performanslarını iyileştirmelerine
                        yardımcı olurken, aynı zamanda sürdürülebilir kalkınma
                        hedeflerine ulaşmalarını destekler. Danışmanlar,
                        şirketlerin sosyal sorumluluk alanında gerçek ve
                        ölçülebilir etkiler yaratmalarına olanak tanır.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Sosyal Sorumluluk Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        Sosyal Sorumluluk Danışmanlığı, çeşitli alanlarda hizmet
                        sunar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Strateji Geliştirme:
                        </span>{" "}
                        Kuruluşun sosyal sorumluluk vizyonunu ve stratejilerini
                        belirleme.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Proje Yönetimi:
                        </span>{" "}
                        Sosyal sorumluluk projelerinin planlanması, uygulanması
                        ve izlenmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Performans Değerlendirme:
                        </span>{" "}
                        Projelerin etkilerinin ölçülmesi ve raporlanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          İletişim ve Raporlama:
                        </span>{" "}
                        Paydaşlarla etkili iletişim kurma ve sosyal sorumluluk
                        raporlarını hazırlama.
                        <br />
                        <br />
                        Bu danışmanlık hizmetleri, kuruluşların toplumsal
                        sorunlara duyarlı yaklaşımlar geliştirmelerine ve bu
                        sorunlara karşı çözümler üretmelerine yardımcı olur.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Sosyal Sorumluluk Danışmanlığı, kuruluşların toplumsal
                        katkılarını artırma ve kurumsal itibarlarını güçlendirme
                        konusunda kritik bir role sahiptir. Danışmanlık
                        hizmetleri, şirketlere sosyal sorumluluk uygulamalarını
                        etkin bir şekilde entegre etme ve bu uygulamalardan
                        maksimum fayda sağlama konusunda yardımcı olur. Ayrıca,
                        bu hizmetler, şirketlerin paydaşlarıyla olan
                        ilişkilerini güçlendirir ve pazarda fark yaratmalarını
                        sağlar.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Sosyal sorumluluk danışmanları, şirketlerin sosyal etki
                        yaratma kapasitelerini maksimize eder. Bu süreç,
                        çevresel koruma, sosyal adalet ve toplumda pozitif
                        değişimler yaratma gibi alanlarda önemli sonuçlar
                        doğurabilir. Danışmanlık, ayrıca şirketlerin
                        sürdürülebilirlik hedeflerine ulaşmasına ve etik
                        standartları yükseltmesine olanak tanır.
                        <br />
                        <br />
                        Sosyal Sorumluluk Danışmanlığı, şirketlerin sosyal ve
                        çevresel sorumluluklarını yerine getirme yolunda önemli
                        bir ortaktır. Bu hizmetler, kuruluşların topluma olan
                        katkılarını artırma, çevresel ayak izlerini azaltma ve
                        tüm paydaşlar için değer yaratma konularında rehberlik
                        ve destek sunar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const Consultancy14064_1 = () => {
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
          <li>ISO 14064-1 Danışmanlığı</li>
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
            ISO 14064-1 Danışmanlığı: Kuruluşların Sera Gazı Emisyonlarını
            Yönetme ve Raporlama
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
                      <p className="text-justify">
                        ISO 14064-1 Danışmanlığı, kuruluşların sera gazı
                        envanterlerini geliştirmelerine, yönetmelerine ve
                        raporlamalarına yönelik profesyonel rehberlik ve destek
                        sağlar. Bu hizmet, ISO 14064-1 standardı kapsamında,
                        sera gazı emisyonlarının ölçülmesi, doğrulanması ve
                        raporlanması süreçlerini kapsar. Danışmanlar,
                        kuruluşlara karbon yönetimi stratejilerini oluşturma ve
                        çevresel performanslarını iyileştirme konusunda yardımcı
                        olur.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            ISO 14064-1 Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        ISO 14064-1 Danışmanlığı, şirketlerin karbon ayak
                        izlerini doğru bir şekilde hesaplamalarına ve bu
                        bilgileri stratejik karar alma süreçlerinde
                        kullanmalarına olanak tanır. Bu danışmanlık hizmeti
                        aşağıdaki alanları kapsar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Emisyon Envanteri Hazırlama:
                        </span>{" "}
                        Kuruluşun sera gazı emisyonlarını sistematik bir şekilde
                        toplama ve hesaplama.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Doğrulama ve Raporlama:
                        </span>{" "}
                        Emisyon verilerinin doğrulanması ve uluslararası
                        standartlara uygun olarak raporlanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Azaltma Stratejileri:
                        </span>{" "}
                        Emisyonları azaltmak için etkili stratejilerin
                        geliştirilmesi ve uygulanması.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        ISO 14064-1 Danışmanlığı sayesinde kuruluşlar, sera gazı
                        emisyonlarını etkin bir şekilde yönetebilir ve
                        azaltabilir. Bu, hem regülatif gerekliliklere uyumu
                        kolaylaştırır hem de çevresel sürdürülebilirlik
                        hedeflerine ulaşmada yardımcı olur. Kuruluşlar, bu
                        sayede operasyonel maliyetleri düşürebilir ve piyasa
                        itibarlarını artırabilirler.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        ISO 14064-1 Danışmanlığı, küresel iklim değişikliğiyle
                        mücadelede kuruluşların rolünü güçlendirir. Sera gazı
                        emisyonlarının azaltılması, çevresel ayak izlerinin
                        düşürülmesine ve daha temiz, daha sürdürülebilir bir
                        çevreye katkıda bulunur. Ayrıca, bu danışmanlık
                        hizmetleri, kuruluşların çevresel şeffaflık ve hesap
                        verebilirlik standartlarını yükseltmelerine yardımcı
                        olur.
                        <br />
                        <br />
                        ISO 14064-1 Danışmanlığı, kuruluşların sera gazı
                        emisyonlarını yönetme ve raporlama yeteneklerini
                        geliştirmelerine yardımcı olan kapsamlı bir hizmettir.
                        Bu hizmet, çevresel performansın sürekli iyileştirilmesi
                        için gerekli araçları ve bilgileri sağlar, böylece
                        kuruluşlar daha yeşil ve sürdürülebilir bir gelecek inşa
                        edebilirler.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const SystemSetupConsultancy14064_1 = () => {
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
          <li>ISO 14064-1 Sistem Kurulumu Danışmanlığı</li>
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
            ISO 14064-1 Sistem Kurulumu Danışmanlığı: Kuruluşların Sera Gazı
            Yönetim Sistemlerini Etkinleştirme
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
                      <p className="text-justify">
                        ISO 14064-1 Sistem Kurulumu Danışmanlığı, kuruluşların
                        sera gazı yönetim sistemlerini tasarlamaları,
                        uygulamaları ve iyileştirmeleri için uzman rehberlik
                        sağlar. Bu hizmet, ISO 14064-1 standardı kapsamında sera
                        gazı envanterlerinin doğru bir şekilde oluşturulması,
                        yönetilmesi ve raporlanması için gereken sistemlerin
                        kurulumunu içerir. Danışmanlık, kuruluşların karbon
                        yönetim stratejilerini başarılı bir şekilde
                        uygulamalarına yardımcı olur ve çevresel
                        sürdürülebilirlik hedeflerine ulaşmalarını destekler.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            ISO 14064-1 Sistem Kurulumu Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        ISO 14064-1 Sistem Kurulumu Danışmanlığı, kuruluşların
                        sera gazı yönetim sistemlerini etkin bir şekilde
                        kurmalarına ve işletmelerine entegre etmelerine olanak
                        tanır. Bu danışmanlık hizmetleri aşağıdaki alanları
                        kapsar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Sistem Tasarımı:
                        </span>{" "}
                        Sera gazı yönetim süreçlerinin ve politikalarının
                        tasarlanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sistem Uygulaması:
                        </span>{" "}
                        Yönetim sistemlerinin kuruluşun operasyonlarına
                        entegrasyonu.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Eğitim ve Kapasite Geliştirme:
                        </span>{" "}
                        Kuruluşun personeline yönelik sera gazı yönetimi ve
                        raporlama eğitimleri.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sürekli İyileştirme:
                        </span>{" "}
                        Sistemlerin ve süreçlerin sürekli gözden geçirilmesi ve
                        iyileştirilmesi.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        ISO 14064-1 Sistem Kurulumu Danışmanlığı, kuruluşların
                        sera gazı emisyonlarını etkin bir şekilde izlemelerini,
                        yönetmelerini ve raporlamalarını sağlar. Bu sistemler,
                        kuruluşların regülatif uyumu sağlamalarına, operasyonel
                        verimliliklerini artırmalarına ve çevresel
                        performanslarını iyileştirmelerine yardımcı olur.
                        Ayrıca, bu hizmet sayesinde kuruluşlar, pazarda
                        sürdürülebilirlik lideri olarak öne çıkabilirler.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        ISO 14064-1 Sistem Kurulumu Danışmanlığı, global iklim
                        değişikliğiyle mücadelede kuruluşların proaktif rol
                        almasını sağlar. Sera gazı yönetim sistemlerinin
                        kurulması, çevresel ayak izlerinin azaltılmasına önemli
                        katkıda bulunur ve daha temiz, daha sürdürülebilir bir
                        çevrenin oluşumunu destekler. Bu sistemler, kuruluşların
                        çevresel şeffaflık ve hesap verebilirlik standartlarını
                        da yükseltir.
                        <br />
                        <br />
                        ISO 14064-1 Sistem Kurulumu Danışmanlığı, kuruluşların
                        sera gazı yönetim sistemlerini başarıyla kurmalarına ve
                        işletmelerine entegre etmelerine yardımcı olan kapsamlı
                        bir hizmettir. Bu hizmet, çevresel performansın sürekli
                        iyileştirilmesi için gerekli araçları ve bilgileri
                        sağlar, böylece kuruluşlar daha yeşil ve sürdürülebilir
                        bir gelecek inşa edebilirler.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const SustainabilityConsultancy = () => {
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
          <li>Sürdürülebilirlik Danışmanlığı</li>
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
            Sürdürülebilirlik Danışmanlığı: Kuruluşların Çevresel ve Sosyal
            Sorumluluklarını Yönlendirme
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
                      <p className="text-justify">
                        Sürdürülebilirlik Danışmanlığı, şirketlerin ve
                        organizasyonların çevresel, sosyal ve ekonomik
                        performanslarını iyileştirmelerine yardımcı olan
                        profesyonel bir hizmettir. Bu danışmanlık,
                        sürdürülebilir iş modelleri, politikalar ve uygulamalar
                        geliştirilmesine destek olurken, kuruluşların
                        sürdürülebilir kalkınma hedeflerine ulaşmalarını sağlar.
                        Danışmanlar, şirketlerin çevresel ayak izlerini
                        azaltmaları, sosyal etkilerini artırmaları ve ekonomik
                        büyümelerini sürdürülebilir bir şekilde
                        yönlendirmelerine rehberlik eder.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Sürdürülebilirlik Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        Sürdürülebilirlik Danışmanlığı, geniş bir yelpazede
                        hizmetler sunar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Strateji Geliştirme:
                        </span>{" "}
                        Sürdürülebilirlik stratejilerinin ve politikalarının
                        tasarlanması ve uygulanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Risk Yönetimi:
                        </span>{" "}
                        Çevresel ve sosyal risklerin belirlenmesi ve yönetimi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Etki Değerlendirme ve Raporlama:
                        </span>{" "}
                        Sürdürülebilirlik etkilerinin ölçülmesi ve ilgili
                        raporların hazırlanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Eğitim ve Farkındalık Yaratma:
                        </span>{" "}
                        Çalışanlara ve yöneticilere sürdürülebilirlik
                        konularında eğitimler sağlama.
                        <br />
                        <br />
                        Bu hizmetler, kuruluşların sürdürülebilirlik alanındaki
                        bilgi ve kapasitelerini artırır ve stratejik karar alma
                        süreçlerini iyileştirir.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Sürdürülebilirlik Danışmanlığı, şirketlerin çevresel
                        sürdürülebilirlik standartlarını karşılamalarını ve
                        sosyal sorumluluklarını yerine getirmelerini sağlar. Bu,
                        hem kurumsal itibarın güçlenmesine yardımcı olur hem de
                        operasyonel maliyetlerin azalmasına katkıda bulunur.
                        Ayrıca, bu hizmetler sayesinde şirketler, yatırımcılar
                        ve tüketiciler nezdinde güven ve sadakat inşa ederler.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Sürdürülebilirlik Danışmanlığı, kuruluşların çevresel ve
                        sosyal sorumluluklarını yerine getirmeleri konusunda
                        önemli bir role sahiptir. Bu süreç, çevresel koruma,
                        çalışan hakları ve toplumsal katkılar gibi alanlarda
                        olumlu değişimleri teşvik eder. Danışmanlık hizmetleri,
                        kuruluşların daha yeşil ve adil bir dünya için
                        çalışmalarını kolaylaştırır.
                        <br />
                        <br />
                        Sürdürülebilirlik Danışmanlığı, şirketlerin ve
                        organizasyonların çevresel ve sosyal etkilerini yönetme
                        ve iyileştirme yolculuklarında kritik bir partnerdir. Bu
                        hizmet, çevresel ayak izlerini azaltma, sosyal katkıları
                        artırma ve ekonomik sürdürülebilirliği destekleme
                        konusunda rehberlik ve destek sunar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const ClimateFriendlyConsultancy = () => {
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
          <li>İklim Dostu Organizasyon Danışmanlığı</li>
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
            İklim Dostu Kuruluş Danışmanlığı: İşletmelerin İklim Değişikliği ile
            Mücadelesine Destek
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
                      <p className="text-justify">
                        İklim Dostu Kuruluş Danışmanlığı, şirketlerin ve
                        organizasyonların iklim değişikliğiyle mücadelede aktif
                        roller almasına yardımcı olan bir hizmettir. Bu
                        danışmanlık, kuruluşların sera gazı emisyonlarını
                        azaltmaları, yenilenebilir enerji kaynaklarına geçiş
                        yapmaları ve sürdürülebilir iş uygulamalarını
                        benimsemeleri konusunda rehberlik ve stratejik destek
                        sağlar. Danışmanlar, çevresel sürdürülebilirlik
                        stratejilerini geliştirme ve uygulama süreçlerinde
                        kuruluşlara eşlik eder.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            İklim Dostu Kuruluş Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        İklim Dostu Kuruluş Danışmanlığı, geniş bir hizmet
                        yelpazesi sunar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Karbon Ayak İzi Analizi:
                        </span>{" "}
                        Kuruluşların mevcut karbon emisyonlarını ölçme ve analiz
                        etme.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Emisyon Azaltma Stratejileri:
                        </span>{" "}
                        Emisyonları azaltmak için etkili stratejilerin
                        geliştirilmesi ve uygulanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Yeşil Enerjiye Geçiş:
                        </span>{" "}
                        Yenilenebilir enerji kaynaklarına geçiş için planlama ve
                        uygulama desteği.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sürdürülebilirlik Raporlama:
                        </span>{" "}
                        Çevresel performansın izlenmesi ve raporlanması.
                        <br />
                        <br />
                        Bu hizmetler, kuruluşların iklim değişikliği ile
                        mücadelede daha etkin olmalarını sağlar ve çevresel
                        sorumluluklarını yerine getirmelerine yardımcı olur.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        İklim Dostu Kuruluş Danışmanlığı, şirketlerin çevresel
                        sürdürülebilirlik standartlarını yükseltmelerine ve
                        piyasada rekabet avantajı elde etmelerine yardımcı olur.
                        Bu danışmanlık, aynı zamanda, şirketlerin regülatif
                        gerekliliklere uyumunu sağlar ve çevresel riskleri
                        azaltır. Kuruluşlar, danışmanlık sayesinde enerji
                        verimliliğini artırabilir ve operasyonel maliyetleri
                        düşürebilirler.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        İklim Dostu Kuruluş Danışmanlığı, kuruluşların çevresel
                        ayak izlerini azaltma ve iklim değişikliğiyle mücadelede
                        pozitif katkılar sağlama yollarını bulmalarına olanak
                        tanır. Bu süreç, toplumun ve çevrenin iyileştirilmesine
                        katkıda bulunur ve sürdürülebilir bir gelecek için
                        adımlar atılmasını sağlar.
                        <br />
                        <br />
                        İklim Dostu Kuruluş Danışmanlığı, işletmelerin ve
                        organizasyonların çevresel performanslarını iyileştirme
                        ve iklim değişikliği ile mücadelede aktif rol almasına
                        yönelik kapsamlı bir hizmettir. Bu hizmet, stratejik
                        rehberlik ve destek sunarak, kuruluşların daha yeşil ve
                        sürdürülebilir iş modellerine geçiş yapmalarına yardımcı
                        olur.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const EnergyEfficiencyAndManagement = () => {
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
          <li>Enerji Verimliliği ve Yönetimi Danışmanlığı</li>
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
            Enerji Verimliliği ve Yönetimi Danışmanlığı: İşletmelerin Enerji
            Performansını Optimize Etme
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
                      <p className="text-justify">
                        Enerji Verimliliği ve Yönetimi Danışmanlığı,
                        işletmelerin enerji tüketimini azaltmalarına,
                        maliyetleri düşürmelerine ve çevresel etkilerini
                        minimize etmelerine yardımcı olan uzman bir hizmettir.
                        Bu danışmanlık, şirketlerin enerji verimliliğini
                        artırmaları ve sürdürülebilir enerji kullanımını teşvik
                        etmeleri için stratejik planlama ve uygulama desteği
                        sağlar. Danışmanlar, enerji yönetimi sistemlerinin
                        kurulması ve iyileştirilmesi, enerji denetimleri ve
                        süreç optimizasyonu konularında rehberlik eder.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Enerji Verimliliği ve Yönetimi Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        Enerji Verimliliği ve Yönetimi Danışmanlığı, enerji
                        tüketimini analiz etmek ve azaltmak için çeşitli teknik
                        ve stratejik hizmetler sunar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Enerji Denetimleri:
                        </span>{" "}
                        Enerji tüketiminin kapsamlı bir değerlendirmesi ve
                        iyileştirme fırsatlarının belirlenmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sistem Kurulumu ve İyileştirme:
                        </span>{" "}
                        Enerji yönetimi sistemlerinin tasarımı ve uygulanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Performans İzleme:
                        </span>{" "}
                        Enerji kullanımı ve maliyetlerinin sürekli izlenmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Eğitim ve Farkındalık Programları:
                        </span>{" "}
                        Çalışanların enerji verimliliği konusunda
                        bilinçlendirilmesi ve eğitilmesi.
                        <br />
                        <br />
                        Bu hizmetler, işletmelerin enerji tüketimlerini etkin
                        bir şekilde yönetmelerini ve çevresel ayak izlerini
                        azaltmalarını sağlar.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Enerji Verimliliği ve Yönetimi Danışmanlığı,
                        işletmelerin operasyonel verimliliğini artırarak maliyet
                        tasarrufu sağlar. Enerji tüketiminin azaltılması,
                        işletmelerin karbon emisyonlarını düşürmelerine ve
                        sürdürülebilirlik hedeflerine ulaşmalarına yardımcı
                        olur. Ayrıca, bu danışmanlık hizmeti, işletmelerin
                        regülatif gerekliliklere uyumunu kolaylaştırır ve
                        pazarda yeşil itibarlarını güçlendirir.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Enerji Verimliliği ve Yönetimi Danışmanlığı,
                        işletmelerin enerji tüketimini azaltarak ve
                        yenilenebilir enerji kaynaklarını teşvik ederek,
                        çevresel sürdürülebilirlikte önemli rol oynar. Bu süreç,
                        küresel iklim değişikliğiyle mücadelede işletmelerin
                        aktif katılımını sağlar ve çevre üzerindeki baskıları
                        azaltır.
                        <br />
                        <br />
                        Enerji Verimliliği ve Yönetimi Danışmanlığı,
                        işletmelerin enerji performanslarını optimize etme ve
                        çevresel etkilerini azaltma yolculuklarında kritik bir
                        partnerdir. Bu hizmet, enerji verimliliğini artırma ve
                        enerji yönetimi pratiklerini geliştirme konusunda
                        stratejik rehberlik ve destek sunar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const EducationConsultancy = () => {
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
          <li>Eğitim Danışmanlığı</li>
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
            Eğitim Danışmanlığı: Öğrenme ve Gelişim Süreçlerini Dönüştürme
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
                      <p className="text-justify">
                        Eğitim Danışmanlığı, kurumların, öğretim görevlilerinin
                        ve eğitim yöneticilerinin eğitim stratejilerini
                        geliştirmelerine ve öğrenme deneyimlerini optimize
                        etmelerine yardımcı olan profesyonel bir hizmettir. Bu
                        danışmanlık, öğretim metodolojileri, müfredat geliştirme
                        ve eğitim teknolojilerinin etkin kullanımı üzerine
                        uzmanlık ve rehberlik sunar. Eğitim danışmanları,
                        öğrenci başarısını artırmak, öğrenme ortamlarını
                        iyileştirmek ve eğitim kurumlarının genel performansını
                        yükseltmek için stratejik destek sağlar.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Eğitim Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        Eğitim Danışmanlığı, çeşitli eğitim hizmetleri sunar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Müfredat Tasarımı ve Geliştirme:
                        </span>{" "}
                        Eğitim programlarının güncellenmesi ve öğrenci
                        ihtiyaçlarına göre uyarlama.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Öğretim Stratejileri:
                        </span>{" "}
                        Etkili öğretim teknikleri ve metodolojilerinin
                        geliştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Teknoloji Entegrasyonu:
                        </span>{" "}
                        Eğitim teknolojilerinin ve dijital araçların öğrenme
                        süreçlerine entegre edilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Öğretmen Eğitimi ve Profesyonel Gelişim:
                        </span>{" "}
                        Öğretmenlerin ve eğitimcilerin sürekli eğitimi ve
                        gelişimi.
                        <br />
                        <br />
                        Bu hizmetler, öğrenme sonuçlarını iyileştirme ve öğretim
                        süreçlerini daha etkin hale getirme amacı taşır.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Eğitim Danışmanlığı, eğitim kurumlarının öğrenci
                        katılımını ve başarısını artırarak rekabet güçlerini
                        yükseltir. Bu danışmanlık, eğitimcilerin daha etkili
                        öğretim yöntemleri geliştirmelerine yardımcı olur ve
                        öğrencilerin öğrenme deneyimlerini zenginleştirir.
                        Ayrıca, kurumların eğitim teknolojilerini etkin
                        kullanmalarını sağlar, böylece öğrenme ve öğretme
                        süreçleri modernize edilir ve daha ulaşılabilir hale
                        gelir.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Eğitim Danışmanlığı, öğrencilerin ve öğretim
                        görevlilerinin sürekli gelişimine katkıda bulunarak
                        eğitim alanında sosyal etki yaratır. Bu hizmetler, daha
                        kapsayıcı ve etkileşimli öğrenme ortamları oluşturarak
                        tüm öğrencilerin eğitimden en iyi şekilde
                        faydalanmalarını sağlar.
                        <br />
                        <br />
                        Eğitim Danışmanlığı, eğitim kurumlarının ve bireylerin
                        öğrenme ve öğretme süreçlerini dönüştürme
                        yolculuklarında önemli bir ortaktır. Bu hizmet, öğrenme
                        süreçlerini iyileştirme, öğrenci başarısını artırma ve
                        eğitim kurumlarının eğitimde mükemmellik standartlarını
                        yükseltme konusunda rehberlik ve destek sunar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const GreenTransformationAdaptation = () => {
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
          <li>Firmalar İçin Yeşil Dönüşüm Adaptasyonu</li>
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
            Firmalar İçin Yeşil Dönüşüm Adaptasyonu: Sürdürülebilir Geleceğe
            Geçiş
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
                      <p className="text-justify">
                        Yeşil Dönüşüm Adaptasyonu, firmaların çevresel
                        sürdürülebilirlik ilkelerini benimsemeleri ve iş
                        modellerini bu doğrultuda yeniden şekillendirmeleri
                        sürecidir. Bu adaptasyon, firmaların enerji
                        tüketimlerini azaltmaları, atık yönetimini
                        iyileştirmeleri ve genel çevresel etkilerini minimize
                        etmeleri için stratejik planlar ve uygulamalar
                        geliştirmelerine yardımcı olur. Danışmanlar, bu dönüşüm
                        sürecinde firmalara rehberlik ederek, sürdürülebilir iş
                        uygulamalarını ve yenilikçi çözümleri hayata
                        geçirmelerine destek olur.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Firmalar İçin Yeşil Dönüşüm Adaptasyonu Hizmeti{" "}
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
                        Adaptasyonun Kapsamı ve Amacı
                      </h1>
                      <p>Yeşil Dönüşüm Adaptasyonu, şirketlerin:</p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Karbon Ayak İzini Azaltma:
                        </span>{" "}
                        Enerji verimliliği artırma ve yenilenebilir enerji
                        kaynaklarına geçiş.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sürdürülebilir Kaynak Kullanımı:
                        </span>{" "}
                        Kaynakların daha verimli kullanılması ve sürdürülebilir
                        tedarik zinciri yönetimi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Atık Azaltma ve Yönetimi:
                        </span>{" "}
                        Atık üretiminin azaltılması ve geri dönüşüm
                        uygulamalarının iyileştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Çevresel Şeffaflık ve Uyumluluk:
                        </span>{" "}
                        Çevresel mevzuatlara uyum ve çevresel performansın
                        raporlanması.
                        <br />
                        <br />
                        Bu hedefler doğrultusunda, firmaların operasyonel ve
                        stratejik süreçlerinde sürdürülebilir iyileştirmeler
                        yapmaları teşvik edilir.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Yeşil Dönüşüm Adaptasyonu, firmaların piyasadaki
                        rekabetçiliklerini artırır ve marka değerlerini
                        güçlendirir. Çevresel risklerin azaltılması ve
                        sürdürülebilir uygulamaların benimsenmesi, firmalara
                        uzun vadeli mali avantajlar sağlar ve yatırımcılar ile
                        tüketiciler nezdinde güven oluşturur. Ayrıca, bu
                        adaptasyon, firmaların çevresel düzenlemelere uyumunu
                        kolaylaştırır ve potansiyel yasal yaptırımları önler.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Yeşil Dönüşüm Adaptasyonu, firmaların çevresel
                        sorumluluklarını yerine getirmelerinde ve toplumda
                        pozitif bir değişim yaratmalarında önemli bir role
                        sahiptir. Bu süreç, küresel iklim değişikliğiyle
                        mücadelede firmaların etkin bir şekilde katılımını
                        sağlar ve sürdürülebilir bir geleceğe geçişte kritik bir
                        katkıda bulunur.
                        <br />
                        <br />
                        Firmalar İçin Yeşil Dönüşüm Adaptasyonu, iş dünyasını
                        sürdürülebilir bir geleceğe taşıma yolunda kritik bir
                        adımdır. Bu hizmet, firmaların çevresel etkilerini
                        azaltma, kaynak kullanımını optimize etme ve çevre dostu
                        iş uygulamalarını benimseme konusunda stratejik destek
                        ve rehberlik sunar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const Skdm = () => {
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
          <li>Sınırda Karbon Düzenleme Mekanizması(SKDM/CBAM) Danışmanlığı</li>
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
            Sınırda Karbon Düzenleme Mekanizması(SKDM/CBAM) Danışmanlığı:
            Küresel Ticarette Karbon Düzenlemelerine Uyum Sağlama
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
                      <p className="text-justify">
                        Sınırda Karbon Düzenleme Mekanizması (SKDM) veya Carbon
                        Border Adjustment Mechanism (CBAM) Danışmanlığı,
                        firmaların uluslararası karbon düzenlemelerine uyum
                        sağlamalarına yardımcı olan bir hizmettir. Bu
                        danışmanlık, özellikle karbon yoğun ürünlerin ithalatı
                        ve ihracatı üzerine odaklanır ve firmaların karbon
                        maliyetlerini yönetmelerine, düzenlemelere uyumlarını
                        artırmalarına ve rekabetçiliklerini korumalarına destek
                        olur. CBAM, Avrupa Birliği'nin sera gazı emisyonlarını
                        azaltma hedefleri doğrultusunda ithal edilen ürünler
                        üzerinde karbon vergisi uygulayarak çevresel adaleti
                        sağlamayı amaçlar.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Sınırda Karbon Düzenleme Mekanizması(SKDM/CBAM)
                            Danışmanlığı Hizmeti{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        CBAM Danışmanlığı, şirketlere aşağıdaki konularda
                        yardımcı olur:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          CBAM Regülasyonlarına Uyum:
                        </span>{" "}
                        Yeni düzenlemelerin gerekliliklerini anlama ve bu
                        gerekliliklere uyum sağlama.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Karbon Maliyeti Analizi:
                        </span>{" "}
                        Ürünlerin karbon içeriğinin hesaplanması ve maliyetlerin
                        yönetilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Risk Yönetimi:
                        </span>{" "}
                        CBAM'ın getirebileceği finansal ve operasyonel risklerin
                        değerlendirilmesi ve yönetilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Strateji Geliştirme:
                        </span>{" "}
                        Karbon düzenlemelerine uyum sağlayacak uzun vadeli
                        stratejilerin oluşturulması.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        CBAM Danışmanlığı, firmaların küresel pazarlarda rekabet
                        güçlerini korumalarına ve karbon düzenlemeleri konusunda
                        proaktif olmalarına yardımcı olur. Bu danışmanlık
                        hizmeti, firmaların düzenlemeler karşısında uyumlu hale
                        gelmelerini sağlayarak potansiyel cezai işlemleri ve
                        ticari engelleri minimize eder. Ayrıca, sürdürülebilir
                        üretim ve tedarik zinciri yönetimi konularında firmalara
                        rehberlik eder.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        SKDM/CBAM Danışmanlığı, global ölçekte karbon
                        emisyonlarının azaltılmasına katkıda bulunur. Bu hizmet,
                        firmaların çevre dostu uygulamaları benimsemelerine ve
                        karbon ayak izlerini düşürmelerine yardımcı olur.
                        Ayrıca, uluslararası ticarette çevresel adaletin
                        sağlanmasına ve karbon sızıntısının önlenmesine olanak
                        tanır.
                        <br />
                        <br />
                        Sınırda Karbon Düzenleme Mekanizması Danışmanlığı,
                        firmaların uluslararası düzeyde karbon düzenlemelerine
                        uyum sağlamalarını kolaylaştıran kritik bir hizmettir.
                        Bu danışmanlık, çevresel düzenlemelere uyum konusunda
                        firmalara rehberlik ederek, sürdürülebilir iş
                        uygulamalarını teşvik eder ve küresel iklim
                        değişikliğiyle mücadelede önemli bir rol oynar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const EcoPassaport = () => {
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
          <li>Eco Pasaport Danışmanlığı</li>
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
            Eco Pasaport Danışmanlığı: Ürünlerin Çevresel Güvenilirliğini
            Belgeleme
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
                      <p className="text-justify">
                        Eco Pasaport Danışmanlığı, üreticilere ve markalara,
                        ürünlerinin çevresel güvenilirliğini ve
                        sürdürülebilirliğini belgelemelerine yardımcı olan bir
                        hizmettir. Bu danışmanlık, özellikle tekstil ve deri
                        ürünleri sektöründe faaliyet gösteren firmalar için
                        önemlidir. Eco Pasaport, ürünlerin insan sağlığına ve
                        çevreye olan etkilerinin minimum olduğunu doğrulayan
                        bağımsız bir sertifikasyondur. Danışmanlar, bu
                        sertifikasyon sürecinde firmalara rehberlik ederek,
                        uygunluk testleri ve çevresel performans
                        değerlendirmeleri konusunda destek sağlar.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Eco Pasaport Danışmanlığı{" "}
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        Eco Pasaport Danışmanlığı, ürünlerin çevresel etkilerini
                        azaltma ve sürdürülebilir üretim pratiklerini teşvik
                        etme hedeflerini destekler:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Sertifikasyon Hazırlığı:
                        </span>{" "}
                        Eco Pasaport sertifikasyon sürecine hazırlık, gerekli
                        belgelerin toplanması ve uygunluk testlerinin yapılması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Çevresel Performans Analizi:
                        </span>{" "}
                        Ürünlerin çevresel performansının değerlendirilmesi ve
                        iyileştirilmesi yollarının araştırılması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Eğitim ve Bilgilendirme:
                        </span>{" "}
                        Firma çalışanlarının Eco Pasaport standartları ve
                        gereklilikleri konusunda eğitilmesi.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Eco Pasaport Danışmanlığı, firmaların uluslararası
                        pazarlarda rekabet gücünü artırır ve tüketiciler
                        arasında güven oluşturur. Sertifika, ürünlerin çevre
                        dostu olduğunu ve sağlık açısından güvenli üretildiğini
                        kanıtlar. Bu da, çevre bilincine sahip tüketicilerle
                        etkili bir şekilde iletişim kurulmasını sağlar ve pazar
                        payını genişletir.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Eco Pasaport Danışmanlığı, ürün yaşam döngüsünün
                        çevresel etkilerini azaltmaya yönelik önemli bir
                        adımdır. Bu hizmet, sürdürülebilir üretim
                        standartlarının benimsenmesini teşvik eder ve çevresel
                        ayak izinin düşürülmesine katkıda bulunur. Ayrıca,
                        çevresel sürdürülebilirlik konusunda sektörel
                        standartların yükseltilmesine yardımcı olur.
                        <br />
                        <br />
                        Eco Pasaport Danışmanlığı, firmaların çevresel
                        sertifikasyon süreçlerinde rehberlik ederek,
                        sürdürülebilir ve çevre dostu ürünler üretmelerine
                        yardımcı olur. Bu hizmet, ürünlerin uluslararası
                        standartlara uygunluğunu garanti eder ve firmaların
                        çevresel taahhütlerini yerine getirmelerine olanak
                        tanır.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const Esg = () => {
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
          <li>ESG Danışmanlığı</li>
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
            ESG Danışmanlığı: Kuruluşların Sürdürülebilirlik Performansını
            İyileştirme
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
                      <p className="text-justify">
                        ESG Danışmanlığı, şirketlere çevresel, sosyal ve
                        yönetişim performanslarını geliştirmeleri konusunda
                        rehberlik ve destek sağlayan bir hizmettir. Bu
                        danışmanlık, kuruluşların sürdürülebilirlik hedeflerine
                        ulaşmalarına, yatırımcı ve tüketici güvenini
                        artırmalarına ve regülatif uyumluluklarını sağlamalarına
                        yardımcı olur. ESG danışmanları, risk yönetimi, strateji
                        geliştirme ve raporlama konularında uzmanlık sunarak
                        kuruluşların karmaşık sürdürülebilirlik sorunlarına
                        çözümler üretir.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">ESG Danışmanlığı Hizmeti </span>
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        ESG Danışmanlığı, şirketlere aşağıdaki alanlarda
                        yardımcı olur:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Çevresel Stratejiler:
                        </span>{" "}
                        Enerji kullanımının azaltılması, atık yönetimi ve karbon
                        ayak izinin düşürülmesi gibi çevresel sürdürülebilirlik
                        stratejilerinin geliştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sosyal Sorumluluk:
                        </span>{" "}
                        Çalışan hakları, toplumla ilişkiler ve tedarik zinciri
                        yönetiminde sosyal standartların iyileştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Yönetişim Uygulamaları:
                        </span>{" "}
                        Şirket yönetimi ve politikalarında şeffaflık, hesap
                        verebilirlik ve etik standartların güçlendirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          ESG Raporlama:
                        </span>{" "}
                        Sürdürülebilirlik raporlarının hazırlanması ve ilgili
                        paydaşlara sunulması.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        ESG Danışmanlığı, kuruluşların pazardaki itibarını ve
                        yatırımcı ilgisini artırırken, operasyonel riskleri
                        azaltır ve uzun vadeli sürdürülebilirlik hedeflerine
                        ulaşmalarını sağlar. ESG uyumu, kuruluşlara finansal
                        pazarlarda rekabet avantajı sağlar ve potansiyel
                        yatırımcılar için çekiciliklerini artırır. Ayrıca,
                        regülatif baskılar karşısında esneklik kazandırarak
                        kuruluşları gelecekteki yasal değişikliklere daha
                        hazırlıklı hale getirir.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        ESG Danışmanlığı, kuruluşların çevresel ve sosyal
                        etkilerini yönetmelerine ve iyileştirmelerine büyük
                        katkı sağlar. Bu hizmet, sürdürülebilir uygulamaların
                        benimsenmesini teşvik eder ve genel olarak toplumun ve
                        çevrenin iyileştirilmesine yardımcı olur. ESG
                        performansının iyileştirilmesi, aynı zamanda, küresel
                        iklim değişikliğiyle mücadele ve sosyal adaletin teşvik
                        edilmesi gibi geniş çaplı küresel sorunlara olumlu
                        katkılar sağlar.
                        <br />
                        <br />
                        ESG Danışmanlığı, kuruluşların çevresel, sosyal ve
                        yönetişim alanlarında sürdürülebilirlik performanslarını
                        iyileştirme yolculuklarında önemli bir destekçidir. Bu
                        hizmet, stratejik rehberlik ve uygulamalı çözümler
                        sunarak, kuruluşların sürdürülebilir ve etik iş
                        pratikleri geliştirmelerine yardımcı olur.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const GlobalSustainableTourismCouncil = () => {
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
          <li>Yeşil Turizm Belgesi(GSTC) Danışmanlığı</li>
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
            Yeşil Turizm Belgesi (GSTC) Danışmanlığı: Turizm Sektöründe
            Sürdürülebilirlik Standartlarını Belirleme
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
                      <p className="text-justify">
                        Yeşil Turizm Belgesi (GSTC) Danışmanlığı, turizm
                        işletmelerine ve destinasyonlara, küresel sürdürülebilir
                        turizm standartlarına uyum sağlamaları konusunda
                        rehberlik ve destek sunar. Global Sustainable Tourism
                        Council tarafından belirlenen bu standartlar, çevresel
                        koruma, yerel kültürlerin desteklenmesi ve ekonomik
                        gelişim gibi alanları kapsar. GSTC Danışmanlığı, turizm
                        sektörüne yönelik sürdürülebilir uygulamaların
                        geliştirilmesi ve uygulanması konusunda uzmanlık sağlar.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">Yeşil Turizm Belgesi (GSTC) Danışmanlığı Hizmeti </span>
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        GSTC Danışmanlığı, turizm işletmelerinin ve
                        destinasyonların aşağıdaki alanlarda gelişimlerine
                        yardımcı olur:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Çevresel Yönetim:
                        </span>{" "}
                        Enerji, su, atık yönetimi ve biyoçeşitlilik koruması
                        konularında sürdürülebilir yönetim stratejilerinin
                        geliştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sosyal ve Kültürel Etki:
                        </span>{" "}
                        Yerel topluluklarla etkileşim ve yerel kültürün
                        korunması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Ekonomik Fayda:
                        </span>{" "}
                        Sürdürülebilir turizm faaliyetlerinin yerel ekonomiye
                        katkılarının maksimize edilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Kalite ve Güvenlik Yönetimi:
                        </span>{" "}
                        Turizm hizmetlerinin kalitesinin ve güvenliğinin
                        artırılması.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        GSTC Danışmanlığı, turizm işletmelerinin ve
                        destinasyonların sürdürülebilir turizm kriterlerine
                        uygunluğunu değerlendirir ve bu kriterlere göre
                        iyileştirmeler yapılmasına yardımcı olur. Bu süreç,
                        turizm sektöründe rekabet avantajı sağlar ve
                        işletmelerin ve destinasyonların uluslararası
                        tanınırlığını artırır. Ayrıca, çevresel ve sosyal
                        sorumluluk bilincini güçlendirir, turist memnuniyetini
                        ve sadakatini artırır.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        GSTC Danışmanlığı, turizmin çevresel ayak izini
                        azaltmaya ve yerel topluluklar üzerindeki pozitif
                        etkilerini artırmaya büyük katkı sağlar. Sürdürülebilir
                        turizm pratikleri, doğal ve kültürel kaynakların
                        korunmasına yardımcı olur ve bu kaynakların gelecek
                        nesiller tarafından da kullanılabilmesini sağlar.
                        <br />
                        <br />
                        Yeşil Turizm Belgesi (GSTC) Danışmanlığı, turizm
                        sektöründe sürdürülebilirlik çabalarını destekleyerek,
                        global turizm standartlarının yükseltilmesine katkıda
                        bulunur. Bu hizmet, sektördeki sürdürülebilir
                        uygulamaları teşvik eder ve işletmelerin ve
                        destinasyonların çevresel, sosyal ve ekonomik
                        performanslarını iyileştirir.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const GreenhouseGas = () => {
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
          <li>Sera Gazı Mevzuat Danışmanlığı</li>
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
            Sera Gazı Mevzuat Danışmanlığı: İşletmelerin Çevresel Uyumluluğunu
            Sağlama
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
                      <p className="text-justify">
                        Sera Gazı Mevzuat Danışmanlığı, işletmelerin sera gazı
                        emisyonları ile ilgili yerel, ulusal ve uluslararası
                        mevzuatlara uyum sağlamalarına yardımcı olan bir
                        hizmettir. Bu danışmanlık, sera gazı yönetimi, raporlama
                        gereklilikleri ve emisyon azaltma stratejileri konusunda
                        uzmanlık sunar. Danışmanlar, işletmelerin çevresel
                        düzenlemelere uygun hale gelmelerini, potansiyel cezai
                        işlemleri önlemelerini ve sürdürülebilirlik hedeflerine
                        ulaşmalarını sağlar.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">Sera Gazı Mevzuat Danışmanlığı </span>
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
                        Danışmanlık Hizmetlerinin Kapsamı ve Amacı
                      </h1>
                      <p>
                        Sera Gazı Mevzuat Danışmanlığı, aşağıdaki alanlarda
                        işletmelere destek sağlar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Mevzuat Uyumu:
                        </span>{" "}
                        Sera gazı ile ilgili güncel mevzuatların ve
                        düzenlemelerin anlaşılması ve uygulanması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Emisyon Raporlama:
                        </span>{" "}
                        Doğru ve zamanında emisyon raporlarının hazırlanması ve
                        ilgili otoritelere sunulması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Emisyon Azaltma Planları:
                        </span>{" "}
                        Etkili emisyon azaltma stratejileri ve politikalarının
                        geliştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Eğitim ve Farkındalık:
                        </span>{" "}
                        Çalışanların sera gazı mevzuatı ve en iyi uygulamalar
                        konusunda bilgilendirilmesi.
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
                          Uygulama ve Yararları
                        </span>
                        <br />
                        <br />
                        Sera Gazı Mevzuat Danışmanlığı, işletmelerin çevresel
                        regülasyonlara uyumunu kolaylaştırır ve bu sayede
                        finansal riskleri azaltır. Uyum süreçlerinin etkin
                        yönetimi, işletmelerin operasyonel verimliliklerini
                        artırabilir ve kamuoyu nezdinde itibarlarını
                        güçlendirebilir. Ayrıca, sera gazı emisyonlarının
                        azaltılması, işletmelerin uzun vadeli sürdürülebilirlik
                        hedeflerine katkıda bulunur.
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
                          Sosyal ve Çevresel Etkiler
                        </span>
                        <br />
                        <br />
                        Sera Gazı Mevzuat Danışmanlığı, işletmelerin çevresel
                        performansını artırarak küresel iklim değişikliği ile
                        mücadeleye önemli bir katkı sağlar. Bu hizmet,
                        işletmelerin sera gazı emisyonlarını etkin bir şekilde
                        yönetmelerini ve azaltmalarını sağlar, bu da çevresel
                        sürdürülebilirliğe ve karbon ayak izinin küçültülmesine
                        yardımcı olur.
                        <br />
                        <br />
                        Sera Gazı Mevzuat Danışmanlığı, işletmelerin sera gazı
                        yönetimi ve mevzuat uyumu konusunda kapsamlı destek
                        sağlayarak, çevresel yükümlülüklerini yerine
                        getirmelerine ve daha yeşil iş uygulamalarına geçiş
                        yapmalarına yardımcı olur.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationConsultancy />
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
        <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-5">
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BusinessOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Uzmanlık</h1>
            <p>
              Alanında uzman ekibimizle, karbon ayak izi hesaplama ve raporlama
              konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <ReceiptLongOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Şeffaflık</h1>
            <p>
              Çevresel performansınızı net bir şekilde ortaya koyarak,
              şeffaflığı ve hesap verilebilirliği artırıyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <LanguageOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Stratejik Planlama</h1>
            <p>
              Emisyon azaltımı için stratejik planlama yaparak,
              sürdürülebilirlik hedeflerinize ulaşmanıza yardımcı oluyoruz.
            </p>
          </div>
          <div
            className="flex flex-col p-8 rounded-box h-full w-full gap-5 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ backgroundColor: "#2D2D3F", transitionDuration: "400ms" }}
          >
            <BeenhereOutlinedIcon fontSize="large" />
            <h1 className="text-xl">Rekabet Avantajı</h1>
            <p>
              Sürdürülebilirlik odaklı çalışmalarınızla, sektörünüzde fark
              yaratmanıza ve rekabet avantajı elde etmenize olanak sağlıyoruz.
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

const ConsultancyDetailPage = () => {
  const { id } = useParams();

  const PickPage = () => {
    switch (id) {
      case "sosyal-sorumluluk-danismanligi":
        return <SocialResponsibilityConsultancy />;
      case "14064-1-danismanligi":
        return <Consultancy14064_1 />;
      case "14064-1-sistem-kurulumu-danismanligi":
        return <SystemSetupConsultancy14064_1 />;
      case "surdurulebilirlik-danismanligi":
        return <SustainabilityConsultancy />;
      case "iklim-dostu-organizasyon-danismanligi":
        return <ClimateFriendlyConsultancy />;
      case "enerji-verimliligi-ve-yonetimi-danismanligi":
        return <EnergyEfficiencyAndManagement />;
      case "egitim-danismanligi":
        return <EducationConsultancy />;
      case "firmalar-icin-yesil-donusum-adaptasyonu":
        return <GreenTransformationAdaptation />;
      case "sinirda-karbon-duzenleme-mekanizmasi":
        return <Skdm />;
      case "eco-pasaport-danismanligi":
        return <EcoPassaport />;
      case "esg-danismanligi":
        return <Esg />;
      case "yesil-turizm-belgesi-danismanligi":
        return <GlobalSustainableTourismCouncil />;
      case "sera-gazi-mevzuat-danismanligi":
        return <GreenhouseGas />;
    }
  };

  return <PickPage />;
};

export default ConsultancyDetailPage;
