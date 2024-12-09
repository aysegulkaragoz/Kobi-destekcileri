import reportImage from "../images/report.webp";
import img2 from "../images/11.webp";
import stageImage from "../images/Stage.webp";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { useRef } from "react";
import { useIsVisible } from "../utils/VisibilityRef";
import RightNavigationReporting from "../components/RightNavigationReporting";
import { useParams } from "react-router-dom";

//TODO: Yazıya kapsam 4'ü ekle
const InstitutionalCarbonFootprint = () => {
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
          <li>Destek1</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
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
                        <span className="text-2xl">
                          Yurt Dışında Şirketleşme Nedir?
                        </span>{" "}
                        <br /> <br /> Şirketler, büyüdükçe ürünlerini dış
                        piyasaya sunarak satışlarını artırmayı hedefler. Yurt
                        dışında şirketleşmek, potansiyel müşterilere ve pazara
                        yakın olmayı sağlar, bu da rekabet avantajı yaratır.
                        Özellikle ihracatını artırmak isteyen firmalar için bu
                        adım, stratejik ve kritiktir.
                        <br />
                        <br />
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
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Neden Yurt Dışında Şirketleşme?
                        </span>
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Yurt dışında şirket kurarak:
                        </span>
                        <li>
                          <u> Yeni Pazarlara Ulaşın:</u>
                          Küresel müşteri kitlesine erişim sağlayın.
                        </li>
                        <li>
                          <u>Rekabet Avantajı:</u>
                          Pazara yakınlık sayesinde rekabet gücünüzü artırın.
                        </li>
                        <li>
                          <u>Marka Bilinirliği:</u> Global marka bilinirliğinizi
                          ve prestijinizi yükseltin..
                        </li>
                        <br />
                        Şirketinizi global pazarda konumlandırarak büyümenizi
                        hızlandırın ve uluslararası arenada güçlü bir oyuncu
                        olun.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Neden Yapılır? Avantajları Nelerdir?
                        </span>
                        <br />
                        Şirketlerin sürdürülebilir büyüme için farklı pazarlarda
                        varlık göstermesi kritik önemdedir. Gelir çeşitliliği,
                        pazar bağımlılığını azaltır ve olumsuz durumları
                        dengelemeye yardımcı olur. İhracat Geliştirme
                        Danışmanlığı, firmaların yeni pazarlara açılmasını
                        sağlayarak ihracat gelirlerini çeşitlendirir ve mevcut
                        pazarlarda ihracat hacmini artırır.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sistem Global ve Yurt Dışı Şirket Kurma Danışmanlığı
                        </span>{" "}
                        <br />
                        Müşterilerimize yurt dışında hızlı ve güvenilir bir
                        yapılanma sağlamak için operasyonel destek veriyoruz.
                        Sağladığımız hizmetler:
                        <br />
                        <br />
                        <li>
                          <b>Şirket Kurulumu:</b>
                          Hızlı ve sorunsuz şirket kurma.
                        </li>
                        <li>
                          <b>Lokal Direktör Atama:</b>
                          Yerel yönetim desteği.
                        </li>
                        <li>
                          <b>Sanal Ofis Adresi ve Posta Yönetimi:</b> Prestijli
                          adres ve posta hizmetleri.
                        </li>
                        <li>
                          <b>Banka Hesabı Açılım Desteği:</b>
                          Uluslararası banka hesapları
                        </li>
                        <li>
                          <b>Muhasebe ve Vergi Hizmetleri:</b> Profesyonel
                          finansal yönetim.
                        </li>
                        <li>
                          <b>Bordrolama Hizmetleri:</b> Personel maaş yönetimi.
                        </li>
                        <li>
                          <b>Risk ve Mevzuat Yönetimi Danışmanlığı:</b> Yasal
                          uyum ve risk yönetimi.
                        </li>
                        <br />
                        Global pazarda güçlü bir varlık oluşturun ve
                        sürdürülebilir büyüme sağlayın.
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
                        <span className="text-2xl">
                          Liderlik ve İnovasyonda Öncü Olun
                        </span>
                        <br />
                        <br />
                        SusTechCliCK ile çalışmak, sürdürülebilirlikte liderlik
                        etmek ve yenilikçi çözümlerle piyasada öne çıkmak
                        anlamına gelir. Karbon ayak izi yönetimindeki
                        uzmanlığımız, sektördeki konumunuzu güçlendirir ve
                        geleceğe yönelik sağlam bir temel oluşturmanızı sağlar.
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
                        <span className="text-2xl">
                          SusTechCliCK ile Geleceğe Yatırım Yapın
                        </span>
                        <br />
                        <br />
                        Gezegenimizin yüzleştiği çevresel zorluklar karşısında,
                        SusTechCliCK ile adımlarınızı bilinçli atın. Karbon ayak
                        izinizi azaltarak, sürdürülebilir bir gelecek için güçlü
                        bir adım atın. Bizimle işbirliği yaparak, çevre
                        üzerindeki etkinizi azaltırken, iş hedeflerinize ulaşmak
                        için stratejik ve yenilikçi yollar keşfedin.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const CarbonReduction = () => {
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
          <li>ISO 14064-2 Karbon Azaltımı</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">ISO 14064-2 Karbon Azaltımı</h1>

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
                        <span className="text-2xl font-bold">
                          ISO 14064-2 Karbon Azaltımı Nedir?
                        </span>{" "}
                        <br /> <br /> ISO 14064-2, sera gazı emisyonlarını ve
                        çıkarımlarını yönetmek amacıyla projelerin tasarım,
                        uygulama, izleme ve raporlama süreçlerinde izlenmesi
                        gereken standartları belirler. Bu standardın temel
                        amacı, küresel iklim değişikliği mücadelesine aktif
                        katılım sağlayan kuruluşlara, projeler aracılığıyla sera
                        gazı azaltım hedeflerine ulaşmaları için gerekli yöntem
                        ve prosedürleri sağlamaktır.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Karbon Azaltımı Raporlama Hizmeti{" "}
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
                        Standartın Kapsamı ve Faydaları
                      </h1>
                      <p>
                        ISO 14064-2, projelerin çevresel etkilerini doğru bir
                        şekilde hesaplamak, belgelendirmek ve raporlamak için
                        kapsamlı bir çerçeve sunar. Bu standart, karbon
                        emisyonlarını azaltma projelerinin, örneğin
                        yenilenebilir enerji projeleri veya enerji verimliliği
                        iyileştirmeleri gibi, planlanmasında ve uygulanmasında
                        şeffaflık ve tutarlılık sağlar.
                      </p>
                      <p className="font-bold">
                        Karbon azaltım projeleri, aşağıdaki gibi çeşitli
                        yöntemleri içerebilir:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Yenilenebilir Enerji Kullanımı:
                        </span>{" "}
                        Rüzgar, güneş veya biyokütle gibi yenilenebilir enerji
                        kaynaklarının entegrasyonu.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Enerji Verimliliği İyileştirmeleri:
                        </span>{" "}
                        Binaların, fabrikaların ve ulaşım sistemlerinin enerji
                        kullanımlarını optimize ederek emisyon azaltımı.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Atık Yönetimi:
                        </span>{" "}
                        Atık gazların geri dönüşümü ve yeniden kullanımı yoluyla
                        emisyonların azaltılması.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Ormancılık Projeleri:
                        </span>{" "}
                        Karbon depolama kapasitesini artırmak amacıyla orman
                        alanlarının genişletilmesi ve iyileştirilmesi.
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
                          Uygulama ve İzleme
                        </span>
                        <br />
                        <br />
                        ISO 14064-2'ye uygun projeler, etkili bir izleme ve
                        doğrulama süreci gerektirir. Bu süreç, projenin sera
                        gazı azaltım sonuçlarının doğru ve güvenilir bir şekilde
                        kaydedilmesini sağlar. Standardın sunduğu yöntemler,
                        projenin başlangıcından sonuna kadar sera gazı azaltım
                        faaliyetlerinin her aşamasında şeffaflığın ve hesap
                        verebilirliğin korunmasına yardımcı olur.
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
                        Bu projeler, çevresel sürdürülebilirlik yanında sosyal
                        yararlar da sağlayabilir. Örneğin, yenilenebilir enerji
                        projeleri yerel topluluklara temiz enerji kaynakları
                        sağlarken, ormancılık projeleri biyoçeşitliliği koruma
                        ve yerel halkın yaşam kalitesini artırma fırsatı sunar.
                        <br />
                        <br />
                        ISO 14064-2 standardı, karbon azaltımı projelerini etkin
                        bir şekilde yönetmek ve iklim değişikliğiyle mücadelede
                        önemli adımlar atmak isteyen kuruluşlar için vazgeçilmez
                        bir rehberdir. Bu standart, dünya genelinde sera gazı
                        emisyonlarının azaltılmasına yönelik çabaları
                        destekleyerek gezegenimiz için daha sürdürülebilir bir
                        gelecek oluşturma yolunda önemli bir rol oynamaktadır.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const WaterFootprint = () => {
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
          <li>ISO 14046 Su Ayak İzi</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">ISO 14046 Su Ayak İzi</h1>

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
                        <span className="text-2xl font-bold">
                          ISO 14046 Su Ayak İzi Nedir?
                        </span>{" "}
                        <br /> <br /> ISO 14046, kuruluşların su kullanımlarının
                        çevresel etkilerini ölçmek için uluslararası bir
                        standarttır. Bu standart, su kaynaklarının yönetiminde
                        şeffaflık ve tutarlılık sağlayarak, sürdürülebilir
                        kullanımını destekler. ISO 14046, su ayak izi
                        hesaplamalarını standartlaştırarak, farklı sektörlerdeki
                        kuruluşların su tüketimlerinin çevresel sonuçlarını
                        değerlendirmelerine yardımcı olur.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Su Ayak İzi Raporlama Hizmeti{" "}
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
                        Standartın Kapsamı ve Amacı
                      </h1>
                      <p>
                        ISO 14046, kuruluşların doğrudan ve dolaylı su
                        kullanımlarının tümünü kapsar. Bu değerlendirme,
                        ürünlerin yaşam döngüsü boyunca su kullanımını ve bu
                        kullanımın tatlı su kaynakları üzerindeki etkilerini
                        inceler. Standart, su tüketimi ve kirliliği gibi
                        faktörleri dikkate alır ve bu bilgileri, çevresel
                        performansın ve su yönetiminin iyileştirilmesi için
                        kullanır.
                      </p>
                      <p className="font-bold">
                        Su Ayak İzi Hesaplama Yöntemleri:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Mavi Su Ayak İzi:
                        </span>{" "}
                        Yüzey ve yeraltı sularının tüketilmesini ifade eder.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Yeşil Su Ayak İzi:
                        </span>{" "}
                        Yağmur suyunun ürünler tarafından doğrudan
                        kullanılmasını kapsar.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Gri Su Ayak İzi:
                        </span>{" "}
                        Kirletilmiş suyun doğal su kaynaklarına karışmasını
                        temsil eder ve bu suyun temizlenmesi için gerekli olan
                        su miktarını gösterir.
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
                        ISO 14046'ya uyum sağlamak, kuruluşların su kaynaklarını
                        daha etkin kullanmalarını sağlar ve çevresel riskleri
                        azaltır. Kuruluşlar bu standart sayesinde, su
                        kullanımlarını optimize edebilir, su tüketimini
                        azaltabilir ve su yönetimi stratejilerini
                        geliştirebilir. Ayrıca, su kaynaklarına olan
                        bağımlılıklarını ve bu kaynakların kirlenme risklerini
                        de değerlendirebilirler.
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
                        ISO 14046'ya uyum, kuruluşların su kaynakları üzerindeki
                        baskıyı azaltmalarına ve ekosistemlerin korunmasına
                        katkıda bulunur. Su ayak izi çalışmaları, suyun daha
                        adil ve verimli kullanımını teşvik ederek, su kıtlığı
                        riski altındaki bölgelerde yaşayan topluluklar için de
                        önem taşır.
                        <br />
                        <br />
                        ISO 14046, su kaynaklarının sürdürülebilir yönetimi
                        konusunda global bir farkındalık yaratmak ve
                        kuruluşların su kullanımını daha sorumlu bir şekilde
                        yönetmelerini sağlamak amacıyla kritik bir araçtır. Bu
                        standart, her ölçekteki kuruluşun su yönetimi
                        stratejilerini iyileştirmesine yardımcı olarak, daha
                        yeşil ve sürdürülebilir bir geleceğe katkıda bulunur.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const ProductCarbonFootprint = () => {
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
          <li>ISO 14067 Ürün Karbon Ayak İzi</li>
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
            ISO 14067 Ürün Karbon Ayak İzi
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
                        <span className="text-2xl font-bold">
                          ISO 14067 Ürün Karbon Ayak İzi Nedir?
                        </span>{" "}
                        <br /> <br /> ISO 14067, ürünlerin karbon ayak izini
                        belirlemek için uluslararası bir standarttır. Bu
                        standart, ürünlerin yaşam döngüsü boyunca doğrudan ve
                        dolaylı olarak neden oldukları sera gazı emisyonlarını
                        kapsamlı bir şekilde hesaplamak ve raporlamak için
                        yönergeler sunar. ISO 14067, kuruluşlara, ürünlerinin
                        iklim değişikliği üzerindeki etkilerini anlamalarını ve
                        bu etkileri azaltma yollarını bulmalarını sağlamak
                        amacıyla tasarlanmıştır.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Ürün Karbon Ayak İzi Raporlama Hizmeti{" "}
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
                        Standartın Kapsamı ve Amacı
                      </h1>
                      <p>
                        ISO 14067, bir ürünün tasarımından bertarafına kadar
                        olan süreçte ortaya çıkan tüm karbon emisyonlarını
                        değerlendirir. Bu değerlendirme, ham madde çıkarımından
                        üretim, dağıtım, kullanım ve son atık yönetimine kadar
                        olan tüm aşamaları içerir. Standardın amacı, şeffaf ve
                        tutarlı bir karbon ayak izi hesaplama metodolojisi
                        sağlayarak kuruluşların çevresel performansını
                        iyileştirmek ve daha sürdürülebilir ürün seçenekleri
                        sunmaktır.
                      </p>
                      <p className="font-bold">
                        Ürün Karbon Ayak İzi Hesaplama Yöntemleri
                      </p>
                      <p>
                        ISO 14067, ürünlerin karbon ayak izini hesaplarken, sera
                        gazı emisyonlarının ve çıkarımlarının tamamını kapsayan
                        bir yaşam döngüsü analizi yapılmasını önerir. Bu analiz,
                        ürünlerin üretiminden tüketimine kadar olan süreçteki
                        karbon emisyonlarını değerlendirir ve azaltma
                        potansiyellerini belirler.
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
                        ISO 14067'ye uyum, kuruluşların ürünlerinin çevresel
                        etkilerini azaltmalarını sağlar. Bu uyum, aynı zamanda
                        tüketicilere ürünlerin gerçek çevresel maliyeti hakkında
                        bilgi verir ve daha bilinçli tüketim kararları
                        almalarına yardımcı olur. Kuruluşlar, bu standardı
                        kullanarak, karbon ayak izlerini azaltacak yenilikler
                        geliştirebilir ve piyasada rekabet avantajı elde
                        edebilirler.
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
                        ISO 14067 standardının uygulanması, sera gazı
                        emisyonlarının azaltılmasına ve küresel ısınma ile
                        mücadeleye önemli katkılar sağlar. Kuruluşlar, bu
                        standart sayesinde, sürdürülebilirlik hedeflerine ulaşma
                        konusunda daha fazla sorumluluk alır ve çevresel ayak
                        izlerini düşürme yönünde önemli adımlar atar.
                        <br />
                        <br />
                        ISO 14067, küresel iklim değişikliği ile mücadelede
                        kuruluşların ürünlerinin etkilerini anlamalarını ve
                        azaltmalarını sağlayan kritik bir araçtır. Bu standart,
                        çevresel sürdürülebilirlik ve korporatif sorumluluk
                        alanlarında faaliyet gösteren her kuruluş için değerli
                        bir rehber niteliği taşır ve daha yeşil, daha
                        sürdürülebilir bir ticari faaliyetin yolunu açar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const Gri = () => {
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
          <li>GRI - Küresel Raporlama İnisiyatifi</li>
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
            GRI - Küresel Raporlama İnisiyatifi
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
                        <span className="text-2xl font-bold">
                          GRI - Küresel Raporlama İnisiyatifi Nedir?
                        </span>{" "}
                        <br /> <br /> GRI (Küresel Raporlama İnisiyatifi),
                        kuruluşların çevresel, sosyal ve yönetişim (ESG)
                        performanslarını şeffaf bir şekilde raporlamalarını
                        sağlamak için uluslararası olarak kabul görmüş bir
                        standarttır. GRI, sürdürülebilirlik raporlarının
                        hazırlanmasında kullanılan en yaygın çerçevedir ve dünya
                        genelindeki kuruluşların karmaşık sürdürülebilirlik
                        sorunlarına dair hesap verebilirliklerini artırmayı
                        hedefler.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Küresel Raporlama İnisiyatifi (GRI) Hizmeti{" "}
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
                        Standartın Kapsamı ve Amacı
                      </h1>
                      <p>
                        GRI, kuruluşların çevresel etkilerini, sosyal
                        katkılarını ve yönetim uygulamalarını kapsamlı bir
                        şekilde değerlendirmelerine olanak tanır. Bu
                        standartlar, kuruluşların faaliyetlerinin geniş bir
                        yelpazede sosyal ve çevresel sonuçları üzerine
                        odaklanmalarını sağlar. GRI'nin amacı, kuruluşların
                        sürdürülebilirlik performanslarını iyileştirmelerine
                        yardımcı olmak ve paydaşlarla etkileşimlerini
                        güçlendirmektir.
                      </p>
                      <p className="font-bold">
                        Raporlama Süreci ve Yöntemleri
                      </p>
                      <p>
                        GRI çerçevesi, şeffaf ve tutarlı raporlama için belirli
                        ilkeler ve standartlar sunar. Raporlama süreci
                        genellikle çevresel ayak izi, işçi hakları, insan
                        hakları ve yönetişim uygulamaları gibi konuları içerir.
                        Kuruluşlar, bu bilgileri kullanarak performanslarını
                        sürekli olarak izleyebilir ve iyileştirebilir.
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
                        GRI standartlarına uyum sağlamak, kuruluşların küresel
                        pazarda rekabet güçlerini artırır. Ayrıca, yatırımcılar,
                        tüketiciler ve diğer paydaşlar için şeffaflık
                        sağlayarak, kuruluşların güvenilirliğini ve itibarını
                        artırır. Bu standartlar aynı zamanda, sürdürülebilirlik
                        hedeflerine ulaşma konusunda kuruluşlara rehberlik eder
                        ve stratejik karar alma süreçlerine katkıda bulunur.
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
                        GRI raporlaması, kuruluşların sosyal ve çevresel
                        sorumluluklarını yerine getirme süreçlerinde önemli bir
                        role sahiptir. Bu raporlama sayesinde, kuruluşların
                        faaliyetlerinin toplum ve çevre üzerindeki etkileri net
                        bir şekilde ortaya konur ve bu sayede daha
                        sürdürülebilir uygulamalar geliştirilir.
                        <br />
                        <br />
                        GRI - Küresel Raporlama İnisiyatifi, dünya genelindeki
                        kuruluşların sürdürülebilirlik performanslarını ölçmek
                        ve raporlamak için kapsamlı bir çerçeve sunar. Bu
                        çerçeve, kuruluşların sosyal, çevresel ve ekonomik
                        etkilerini şeffaf bir şekilde paydaşlarına sunmalarını
                        sağlayarak, küresel ölçekte sürdürülebilir gelişimi
                        teşvik eder.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const Lca = () => {
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
          <li>LCA - Yaşam Döngüsü Analizi</li>
        </ul>
      </div>
      <div
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">LCA - Yaşam Döngüsü Analizi</h1>

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
                        <span className="text-2xl font-bold">
                          LCA - Yaşam Döngüsü Analizi Nedir?
                        </span>{" "}
                        <br /> <br /> LCA (Yaşam Döngüsü Analizi), bir ürünün ya
                        da hizmetin tüm yaşam döngüsü boyunca çevresel
                        etkilerini değerlendirmek için kullanılan sistematik bir
                        yöntemdir. Bu analiz, ham madde çıkarımından üretim,
                        kullanım ve son bertaraf aşamalarına kadar olan
                        süreçleri inceler. LCA, ürünlerin ve hizmetlerin çevre
                        üzerindeki etkilerini daha iyi anlamak ve azaltmak için
                        kritik bir araçtır.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Yaşam Döngüsü Analizi (LCA) Hizmeti{" "}
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
                        Standartın Kapsamı ve Amacı
                      </h1>
                      <p>
                        LCA, bir ürünün veya hizmetin çevre üzerindeki
                        etkilerini bilimsel bir temelde analiz eder. Bu analiz,
                        enerji tüketimi, su kullanımı, hava ve su kirliliği gibi
                        çevresel parametreleri içerir. LCA'nın amacı, çevresel
                        etkileri azaltacak alternatif malzeme ve üretim
                        süreçlerini belirlemek, çevresel performansı
                        iyileştirmek ve sürdürülebilir tüketim ve üretim
                        modellerini desteklemektir.
                      </p>
                      <p className="font-bold">
                        Yaşam Döngüsü Analizi Yöntemleri
                      </p>
                      <p className="font-bold">LCA dört ana aşamadan oluşur:</p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Hedef ve Kapsam Belirleme:
                        </span>{" "}
                        Analizin amacı ve incelenecek ürünün sınırları
                        belirlenir.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Envanter Analizi (LCI):
                        </span>{" "}
                        Ürünün yaşam döngüsü boyunca girdi (kaynak kullanımı) ve
                        çıktı (emisyonlar) verileri toplanır.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Etki Değerlendirme:
                        </span>{" "}
                        Toplanan veriler, çevresel etkiler açısından
                        değerlendirilir.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Yorumlama:
                        </span>{" "}
                        Elde edilen sonuçlar, daha sürdürülebilir kararlar
                        alınabilmesi için analiz edilir ve sunulur.
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
                        LCA, ürün geliştirme süreçlerinde çevresel etkileri
                        azaltma yollarını ortaya koymak için kullanılır.
                        Kuruluşlar, bu analizi kullanarak, çevresel ayak
                        izlerini azaltabilir, regülatif gerekliliklere uyum
                        sağlayabilir ve pazarda yeşil ürünlerle rekabet avantajı
                        elde edebilir. Ayrıca, LCA, politika yapıcıların çevre
                        politikalarını şekillendirmelerine yardımcı olur.
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
                        LCA'nın uygulanması, sürdürülebilirlik stratejilerinin
                        geliştirilmesine büyük katkı sağlar. Bu analiz,
                        ürünlerin ve hizmetlerin çevresel etkilerini azaltmak
                        için gerekli bilgileri sağlar ve böylece doğal
                        kaynakların korunmasına ve çevre kirliliğinin
                        önlenmesine yardımcı olur.
                        <br />
                        <br />
                        LCA - Yaşam Döngüsü Analizi, kuruluşların ve politika
                        yapıcıların çevresel sorumluluklarını yerine getirmeleri
                        için önemli bir araçtır. Bu analiz, çevresel etkileri
                        azaltma ve daha sürdürülebilir üretim ve tüketim
                        modelleri geliştirme yönünde stratejik kararlar
                        alınmasını sağlar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const Spk = () => {
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
          <li>SPK - Sürdürülebilirlik Raporu</li>
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
            SPK - Sürdürülebilirlik Raporu
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
                        <span className="text-2xl font-bold">
                          SPK - Sürdürülebilirlik Raporu Nedir?
                        </span>{" "}
                        <br /> <br /> Sürdürülebilirlik Performans Kriterleri
                        (SPK), kuruluşların çevresel, sosyal ve yönetişim (ESG)
                        performanslarını objektif ve ölçülebilir kriterlerle
                        değerlendirmek için kullanılan bir dizi standarttır.
                        SPK, kuruluşların sürdürülebilirlik raporlarında
                        kullanılan kritik metrikler ve göstergeleri içerir. Bu
                        kriterler, kuruluşların sürdürülebilirlik hedeflerine ne
                        derece ulaştıklarını ve bu süreçteki ilerlemelerini
                        takip etmelerini sağlar.
                        <br />
                        <br />
                        <span>
                          Bizden <span className="font-bold">Sürdürülebilirlik Raporu (SPK) Hizmeti </span>
                          Almak için
                        </span>{" "}
                        <a href="/gorusme-ayarla" className="font-bold link">Buradan</a> Hemen İletişime geçin.
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
                        SPK'nın Kapsamı ve Amacı
                      </h1>
                      <p>
                        SPK, çevresel ayak izinin azaltılması, sosyal katılımın
                        artırılması ve etkili kurumsal yönetişimin teşvik
                        edilmesi gibi geniş bir yelpazede değerlendirilir. Bu
                        kriterler, kuruluşların kendi faaliyetlerinin ve tedarik
                        zincirlerinin genel sürdürülebilirlik performansını
                        ölçmelerine yardımcı olur. Amacı, daha şeffaf, hesap
                        verilebilir ve çevresel olarak sorumlu iş uygulamalarını
                        teşvik etmek olan SPK, kuruluşların sürdürülebilirlik
                        alanında kendilerini sürekli iyileştirmelerine olanak
                        tanır.
                      </p>
                      <p className="font-bold">Ölçüm Yöntemleri ve Metrikler</p>
                      <p className="font-bold">
                        Sürdürülebilirlik Performans Kriterleri, aşağıdaki gibi
                        spesifik alanlarda ölçüm yapılmasını içerir:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Çevresel Etki:
                        </span>{" "}
                        Enerji tüketimi, su kullanımı, atık yönetimi ve karbon
                        ayak izi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sosyal Katılım:
                        </span>{" "}
                        İşçi hakları, toplumla ilişkiler ve tüketici
                        memnuniyeti.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Kurumsal Yönetişim:
                        </span>{" "}
                        Şeffaflık, etik standartlar ve risk yönetimi.
                        <br />
                        <br />
                        Kuruluşlar bu kriterleri kullanarak, yıllık
                        sürdürülebilirlik raporlarını hazırlar ve paydaşlarına
                        sunar. Bu raporlar, kuruluşların sürdürülebilirlik
                        alanındaki taahhütlerini ve bu taahhütlerin somut
                        sonuçlarını gösterir.
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
                        SPK'ya uyum, kuruluşların sürdürülebilirlik alanında
                        güçlü bir itibar kazanmalarını ve piyasada rekabet
                        avantajı elde etmelerini sağlar. Ayrıca, yatırımcılar ve
                        diğer paydaşlar için kuruluşun performansını
                        değerlendirmede önemli bir araçtır. SPK,
                        sürdürülebilirlik hedeflerine ulaşmada kuruluşlara
                        rehberlik eder ve daha iyi karar alma süreçlerine
                        katkıda bulunur.
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
                        SPK'nın uygulanması, kuruluşların çevresel ve sosyal
                        sorumluluklarını yerine getirmelerine yardımcı olur. Bu
                        kriterler, sürdürülebilir uygulamaların benimsenmesini
                        teşvik eder ve genel olarak toplumun ve çevrenin
                        iyileştirilmesine katkı sağlar.
                        <br />
                        <br />
                        Sürdürülebilirlik Performans Kriterleri, kuruluşların
                        sürdürülebilirlik yolculuklarında önemli bir kilometre
                        taşıdır. Bu kriterler, çevresel ve sosyal performansın
                        sürekli izlenmesi ve iyileştirilmesi için şeffaf,
                        ölçülebilir ve tutarlı bir yöntem sunar.
                      </p>
                    </div>
                    {/* <div className="flex lg:w-1/2 justify-center items-center">
                      <img alt="görsel" loading='lazy' className="w-auto rounded-box" src={img1} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <RightNavigationReporting />
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

const ReportingDetailPage = () => {
  const { id } = useParams();

  const PickPage = () => {
    switch (id) {
      case "kurumsal-karbon-ayak-izi":
        return <InstitutionalCarbonFootprint />;
      case "karbon-azaltimi":
        return <CarbonReduction />;
      case "su-ayak-izi":
        return <WaterFootprint />;
      case "urun-karbon-ayak-izi":
        return <ProductCarbonFootprint />;
      case "kuresel-raporlama-inisiyatifi":
        return <Gri />;
      case "yasam-dongusu-analizi":
        return <Lca />;
      case "surdurulebilirlik-raporu":
        return <Spk />;
    }
  };

  return <PickPage />;
};

export default ReportingDetailPage;
