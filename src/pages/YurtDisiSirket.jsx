import React, { useRef } from "react";
import { useIsVisible } from "../utils/VisibilityRef";
import YurtdışıŞirketBanner from "../images/YurtdışıŞirketBanner.jpg";
import dikeybanner from "../images/dikeybanner.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const YurtDisiSirket = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="flex flex-col items-center justify-center text-base leading-7">
      <div className="flex w-full">
        <img
          alt="rapor"
          loading="lazy"
          className="w-full"
          src={YurtdışıŞirketBanner}
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
          <li>Yurt Dışı Şirket Kurma</li>
        </ul>
      </div>
      <div
        ref={ref1}
        className={`flex bg-slate-50 transition-opacity ease-in ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1250ms" }}
      >
        <div className="flex flex-col p-5 lg:p-12 gap-10 lg:gap-20">
          <h1 className="text-center text-4xl">Yurt Dışında Şirket Kurmak</h1>
          <div className="flex flex-col-reverse lg:flex-row w-full gap-5">
            <div className="flex flex-col gap-16">
              <div className="w-full">
                <div
                  className={`transform -translate-x-full transition ${
                    isVisible1 ? "translate-x-0" : ""
                  }`}
                  style={{ transitionDuration: "4000ms" }}
                ></div>
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
                        className="w-auto rounded-box"
                        src={dikeybanner}
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:w-1/2 gap-8">
                      <h1 className="text-2xl font-bold">
                        Yurt Dışında Şirketleşme Nedir?
                      </h1>
                      <p className="text-justify">
                        Şirketler, büyüdükçe ürünlerini ve hizmetlerini dış
                        pazarlara sunarak global bir oyuncu olmayı hedefler.
                        Yurt dışında şirketleşmek, potansiyel müşterilere ve
                        pazara daha yakın olmayı sağlar, bu da işletmelere
                        rekabet avantajı sunar. Özellikle ihracatını artırmak
                        isteyen firmalar için bu adım, stratejik ve kritik bir
                        öneme sahiptir. Yurt dışında şirket kurarak, sadece yeni
                        pazarlara ulaşmakla kalmaz, aynı zamanda küresel
                        müşteri kitlesine erişim sağlar ve marka bilinirliğinizi
                        artırırsınız.
                      </p>
                      <h1 className="text-2xl font-bold">
                        Neden Yurt Dışında Şirketleşme?
                      </h1>
                      <p className="text-lg leading-7">
                        Yurt dışında şirket kurarak birçok avantaj elde
                        edebilirsiniz:
                      </p>
                      <ul className="list-disc list-inside mt-4 mb-4 text-lg leading-7">
                        <li>
                          <span className="font-semibold">
                            Yeni Pazarlara Ulaşın:
                          </span>{" "}
                          Küresel müşteri kitlesine erişim sağlayarak
                          satışlarınızı artırın.
                        </li>
                        <li>
                          <span className="font-semibold">
                            Rekabet Avantajı:
                          </span>{" "}
                          Pazara yakınlık sayesinde rekabet gücünüzü artırın ve
                          hızlı tepki verin.
                        </li>
                        <li>
                          <span className="font-semibold">
                            Marka Bilinirliği:
                          </span>{" "}
                          Global marka bilinirliğinizi ve prestijinizi
                          yükseltin.
                        </li>
                      </ul>
                      <p className="text-lg leading-7">
                      Bu avantajlar, şirketinizin uluslararası arenada güçlü bir oyuncu olmasına ve global pazarda hızlı bir şekilde tanınmasına olanak tanır. Küresel müşteri kitlesine erişim ve rekabet avantajı sayesinde, markanızın uluslararası bilinirliğini artırabilir ve pazar payınızı genişletebilirsiniz. Ayrıca, yerel pazarlara yakınlık, operasyonel verimliliği artırır ve hızla değişen pazar koşullarına daha etkili bir şekilde yanıt vermenizi sağlar. Sonuç olarak, bu stratejik adımlar, şirketinizin global pazarda sağlam bir temel oluşturmasını ve sürdürülebilir bir büyüme sürecine girmesini destekler.
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
                  style={{ transitionDuration: "6000ms" }}
                >
                  <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="flex flex-col justify-center lg:w-full gap-2">
                      <p className="text-justify">
                        <span className="text-2xl font-bold">
                        Müşterilerimize yurt dışında hızlı ve güvenilir bir yapılanma sağlamak için operasyonel destek veriyoruz. Sağladığımız hizmetler:


                        </span>
                        <ul className="list-disc list-inside mt-4 mb-4 text-lg leading-7">
                        <li>
                          <span  className="font-bold" >
                          Şirket Kurulumu:
                          </span>{" "}
                          Uluslararası standartlara uygun, hızlı ve sorunsuz şirket kurulum hizmetleri.

                        </li>
                        <li>
                          <span  className="font-bold" >
                          Lokal Direktör Atama:
                          </span>{" "}
                          Yerel yönetim desteği ile etkili ve uyumlu yönetim sağlama.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Sanal Ofis Adresi ve Posta Yönetimi:
                          </span>{" "}
                          Prestijli sanal ofis adresleri ve posta hizmetleri.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Banka Hesabı Açılım Desteği:
                          </span>{" "}
                          Uluslararası banka hesaplarının açılması konusunda profesyonel destek.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Muhasebe ve Vergi Hizmetleri:
                          </span>{" "}
                          Uluslararası muhasebe ve vergi süreçlerinin profesyonel yönetimi.
                        </li>
                        <li>
                          <span  className="font-bold" >
                          Bordrolama Hizmetleri:
                          </span>{" "}
                          Personel maaş ve sosyal haklarının etkili yönetimi.
                        </li>
                        <li>
                          <span className="font-bold">
                          Risk ve Mevzuat Yönetimi Danışmanlığı:
                          </span>{" "}
                          Yasal uyum ve risk yönetimi konusunda kapsamlı danışmanlık.
                        </li>
                        <br />
                        
                        <p>Global pazarda güçlü bir varlık oluşturmak ve sürdürülebilir büyüme sağlamak için uzman ekibimizle yanınızdayız. Yurt dışında başarılı bir iş yapısı kurmanız için gerekli stratejik destek ve yerel mevzuat uyumu konularında kapsamlı hizmet sunuyoruz. Uluslararası deneyimimizle, sizi global arenada bir adım öne taşıyarak, rekabet avantajı elde etmenizi ve sürdürülebilir başarılar yakalamanızı sağlıyoruz.</p>
                      </ul>
                      </p>
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
        </div>
      </div>
    </div>
  );
};

export default YurtDisiSirket;
