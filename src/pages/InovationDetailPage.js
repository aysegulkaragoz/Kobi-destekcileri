import reportImage from "../images/KosgebDestekleriBanner.jpg";
import img2 from "../images/foto1.jpg";
import stageImage from "../images/Stage.webp";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { useRef } from "react";
import { useIsVisible } from "../utils/VisibilityRef";
import { useParams } from "react-router-dom";
import RightNavigationInovation from "../components/RightNavigationInovation";

const ReusableEnergySystemDesign = () => {
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
          <li>Girişimci – İş Kurma Desteği</li>
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
            İş Kurma Desteği Programı: Başvuru Koşulları ve Detaylar
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
                    <div className="flex flex-col justify-center lg:w-3/3 gap-2">
                      <p className="text-justify">
                        Ülkemizin stratejik öncelikleri doğrultusunda belirlenen
                        sektörler öncelikli olmak üzere, yeni kurulan
                        işletmelere destek vererek sürdürülebilirliklerini
                        sağlamak amacıyla bu program hayata geçirilmiştir.
                        <br />
                        <br />
                        <span>
                          {" "}
                          <span className="font-bold"> </span>
                        </span>{" "}
                        <a
                          href="/gorusme-ayarla"
                          className="font-bold link"
                        ></a>{" "}
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
                    <div className="flex lg:w-2/2 justify-center items-center">
                    
                    </div>
                    <div className="flex flex-col justify-center lg:w-2/2 gap-8">
                      <h1 className="text-2xl font-bold">İş Kurma Desteği:</h1>
                      <p>
                        • KOSGEB tarafından desteklenen sektörlerde faaliyet
                        gösteren tüm işletmeler iş kurma desteğine başvurabilir.
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          İş Kurma Program Kapsamı:
                        </span>{" "}
                        İş kurma desteği, yeni işletmelere geri ödemesiz olarak
                        kuruluş desteği ve personel giderleri desteği sağlar
                        Destek oranı %100’dür ve destek süresi 36 aydır.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Başvuru Koşulları:
                        </span>{" "}
                        İşletme, Türk Ticaret Kanunu'na göre tanımlı gerçek veya
                        tüzel kişi statüsünde olmalıdır. KOSGEB Veri Tabanına
                        kayıtlı ve işletme beyanı güncel olmalıdır. Başvuru
                        öncesinde girişimcilik eğitimlerini tamamlamış
                        olmalıdır.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Kuruluş Desteği:
                        </span>{" "}
                        Gerçek kişi işletmelere 10.000 TL, sermaye şirketlerine
                        20.000 TL geri ödemesiz destek sağlanır. Genç, kadın,
                        engelli, gazi veya şehit yakını girişimcilere ek 10.000
                        TL destek verilir.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Personel Giderleri Desteği:
                        </span>{" "}
                        • İşletmenin vergi mükellefiyeti devam ettiği sürece,
                        çalışan personelin prim gün sayıları toplamı 360 ve
                        üzeri olduğu her dönem için 1 aylık brüt asgari ücretin
                        işverene toplam maliyeti kadar geri ödemesiz destek
                        sağlanır.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Önemli Noktalar:
                        </span>{" "}
                        <br></br>• İşletmenin kurucu ortak payı en az %50
                        olmalıdır.<br></br>• İşletme kuruluş tarihinden itibaren
                        bir yıl içinde iş kurma desteğine başvurabilir.<br></br>
                        • Destek programı başvurusu reddedilen işletmeler tekrar
                        başvuru yapamaz.
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
                    <div className="flex flex-col justify-center lg:w-2/3 gap-2"></div>
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
                          <p className="text-justify">
                            <span className="text-2xl font-bold">
                              Sıkça Sorulan Sorular:
                            </span>
                            <br />
                            <br />
                          </p>
                        </span>
                        <strong>Soru 1:</strong> İş kurma desteği nedir?{" "}
                        <br></br>
                        <br />
                        <strong>Cevap:</strong> İş kurma desteği, yeni
                        işletmelere kuruluş desteği ve personel giderleri
                        desteği sağlayan bir programdır. Bu destekler geri
                        ödemesizdir ve %100 destek oranıyla sunulmaktadır.
                        <br />
                        <br />
                        <strong>Soru 2:</strong> Kimler iş kurma desteğinden
                        yararlanabilir? <br></br>
                        <br />
                        <strong>Cevap:</strong> İş kurma desteğinden, Türk
                        Ticaret Kanunu'na göre tanımlı gerçek veya tüzel kişi
                        statüsünde olan ve KOSGEB Veri Tabanına kayıtlı
                        işletmeler yararlanabilir.
                        <br />
                        <br />
                        <strong>Soru 3:</strong> Destekten yararlanabilmek için
                        hangi eğitimleri tamamlamam gerekiyor? <br></br>
                        <br />
                        <strong>Cevap:</strong> İş kurma desteğine başvurmadan
                        önce geleneksel girişimci eğitimini; iş geliştirme
                        desteğine başvurmadan önce ise ileri girişimci eğitimini
                        tamamlamış olmanız gerekmektedir.
                        <br />
                        <br />
                        <strong>Soru 4:</strong> Destek başvurusu yaparken
                        ortaklık payı önemli mi?<br></br>
                        <br />
                        <strong>Cevap:</strong> Evet, destek programı
                        başvurusunda bulunduğunuz işletmede kurucu ortak
                        payınızın en az %50 olması gerekmektedir. Destek
                        süresince bu pay %50’nin altına düşmemelidir.
                        <br />
                        <br />
                        <strong>Soru 5:</strong> Başvurumu ne zaman yapmalıyım?
                        <br></br>
                        <br />
                        <strong>Cevap:</strong> İşletmenizin kuruluş tarihinden
                        itibaren bir yıl içinde iş kurma desteğine, üç yıl
                        içinde ise iş geliştirme desteğine başvurmalısınız.
                        <br />
                        <br />
                        <strong>Soru 6:</strong> Hangi sektörlerde faaliyet
                        gösteren işletmeler iş kurma desteğine başvurabilir?{" "}
                        <br></br>
                        <br />
                        <strong>Cevap:</strong> KOSGEB tarafından desteklenen
                        sektörlerde faaliyet gösteren işletmeler iş kurma
                        desteğine başvurabilir. İş geliştirme desteği için ise
                        belirli NACE Rev. 2 sektörlerinde faaliyet göstermek
                        gerekmektedir.
                        <br />
                        <br />
                        <strong>Soru 7:</strong> Kuruluş desteği ne kadar?
                        <br></br>
                        <br />
                        <strong>Cevap:</strong> Gerçek kişi statüsünde kurulan
                        işletmelere 10.000 TL, sermaye şirketi statüsünde
                        kurulan işletmelere ise 20.000 TL geri ödemesiz destek
                        sağlanır. Genç, kadın, engelli, gazi veya şehit yakını
                        girişimcilere ek 10.000 TL destek verilir.
                        <br />
                        <br />
                        <strong>Soru 8:</strong> Personel giderleri desteği
                        nedir? <br></br>
                        <br />
                        <strong>Cevap:</strong> İşletmenizin vergi mükellefiyeti
                        devam ettiği sürece, çalışan personelin prim gün
                        sayılarının toplamı 360 ve üzeri olduğu her bir dönem
                        için 1 aylık brüt asgari ücretin işverene toplam maliyet
                        tutarı kadar geri ödemesiz destek sağlanır.
                        <br />
                        <br />
                        <strong>Soru 9:</strong> Destek süresi ne kadar?{" "}
                        <br></br>
                        <br />
                        <strong>Cevap:</strong> İş kurma desteği süresi 36
                        aydır.
                        <br />
                        <br />
                        <strong>Soru 10:</strong> Başvurum reddedilirse tekrar
                        başvuru yapabilir miyim? <br></br>
                        <br />
                        <strong>Cevap:</strong> Hayır, iş kurma desteği
                        başvurunuz reddedilirse bu desteğe tekrar başvuru
                        yapamazsınız.
                        <br />
                        <br />
                        Daha fazla bilgi almak ve başvurmak için{" "}
                        <u>bizimle iletişime geçin.</u>
                        <br />
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
    </div>
  );
};

const ProccessEfficiencyAndOptimization = () => {
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
          <li>İş Geliştirme Desteği Programı </li>
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
            İş Geliştirme Desteği Programı
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
                  <div className="flex  lg:gap-10 flex-col-reverse lg:flex-row">
                    <div className="flex flex-col justify-center  gap-2">
                      <p className="text-justify justify-center items-center flex flex-row-reverse   ">
                      <div className="flex  	">
                      <img
                        alt="görsel"
                        loading="lazy"
                        className=" w-auto rounded-box"
                        src={img2}
                      />
                    </div>
                        <h1 className="text-2xl font-bold">
                          İş Kurma Desteği:
                        </h1>
                        <br />
                        <br />• <b>Destek Türleri:</b> İş kurma desteği ve iş
                        geliştirme desteği.<br></br>• <b>Başvuru Şartları:</b>{" "}
                        <br></br>- Tüzel veya gerçek kişi statüsünde olmak.{" "}
                        <br></br>- KOSGEB veri tabanına kayıtlı ve işletme
                        beyanının güncel olması.<br></br>- Girişimcilik
                        eğitiminin tamamlanmış olması.<br></br>- Kurucu ortak
                        payının %50'den fazla olması.<br></br>
                        <br />
                        <br />
                        <span>
                          {" "}
                          <span className="font-bold"> </span>
                        </span>{" "}
                        <a
                          href="/gorusme-ayarla"
                          className="font-bold link"
                        ></a>{" "}
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
                        <h1 className="text-2xl font-bold">
                          İş Kurma Desteği:
                        </h1>
                      </h1>
                      <p>
                        <b>• Başvuru Süresi: </b>Kuruluş tarihinden itibaren bir
                        yıl içinde. <br></br>
                        <b>• Faaliyet Alanları:</b> KOSGEB tarafından
                        desteklenen sektörler.
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold"></span>{" "}
                        <h1 className="text-2xl font-bold">
                          İş Geliştirme Desteği:
                        </h1>
                        <b>• Başvuru Süresi:</b> Kuruluş tarihinden itibaren üç
                        yıl içinde.<br></br>
                        <b>• Faaliyet Alanları:</b> İmalat, Telekomünikasyon,
                        Bilgisayar programlama, Bilgi hizmetleri, Bilimsel
                        araştırma ve geliştirme sektörleri.<br></br>
                        <b>• Destek Oranı:</b> %80.<br></br>
                        <b>• Destek Tutarı:</b>
                        <br></br>- Geri ödemeli 1.500.000 TL'ye kadar.<br></br>-
                        Genç, kadın, engelli, gazi veya şehit yakını
                        girişimcilere +150.000 TL.<br></br>- Toplam destek
                        tutarı 2.000.000 TL'yi geçemez.<br></br>
                        <br />
                        <br />
                        <span className="text-lg font-bold"></span>{" "}
                        <h1 className="text-2xl font-bold">
                          Destek Kalemleri:
                        </h1>
                        1. Personel Giderleri:<br></br>- Proje ile
                        ilişkilendirilmiş personel için destek.<br></br>- Aylık
                        destek tutarı: Brüt asgari ücretin 2 katı.<br></br>
                        2. Makine - Teçhizat ve Kalıp Giderleri:<br></br>- Proje
                        süresince satın alınan yeni ve belirli verim sınıfındaki
                        makineler.<br></br>
                        Yeni makine ve teçhizat alımları, elektrik motorları en
                        az IE2 verim sınıfında olan makineler.<br></br>
                        3. Yazılım Giderleri:<br></br>- Proje süresi içinde
                        satın alınan yazılım lisans bedeli.<br></br>
                        4. Hizmet Alımı Giderleri:<br></br>- Eğitim,
                        danışmanlık, belgelendirme, test ve analiz, pazarlama,
                        tasarım ve sınai mülkiyet hakları giderleri.<br></br>
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Ek Koşullar:
                        </span>{" "}
                        <br></br>• Aynı işletme, programdan yalnızca bir kez
                        yararlanabilir. <br></br>• Başka destek programlarından
                        yararlanan girişimciler bu programa başvuramaz.{" "}
                        <br></br>• Diğer Şartlar: <br></br>• Girişimcinin,
                        işletme dışında başka bir gerçek kişi firması olmamalı
                        ve tüzel kişi firmada %25 ve üzeri ortaklığı
                        bulunmamalı.<br></br>• İşletme kuruluş tarihi vergi
                        levhasında yer alan işe başlama tarihi veya ticaret
                        siciline tescil tarihidir. <br></br>• Destek Başvuru
                        Formunda belirtilen faaliyet ile proje uyumlu olmalı.{" "}
                        <br></br>
                        • İşletme/girişimci bu programdan sadece bir kez
                        yararlanabilir.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Performans İzleme ve Süreç Kontrolü:
                        </span>{" "}
                        Süreçlerin ve performansın sürekli izlenmesi, verimlilik
                        artışını sürdürmek için gerekli ayarlamaların yapılması.
                        <br />
                        <br />
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
                          Destek Programından Kimler Yararlanabilir?
                        </span>
                        <br />
                        <br />• Yeni girişimciler ve işletmeler. <br></br>•
                        İmalat, telekomünikasyon, bilgisayar programlama, bilgi
                        hizmetleri, bilimsel araştırma ve geliştirme
                        sektörlerinde faaliyet gösterenler.<br></br>• Genç,
                        kadın, engelli, gazi ve şehit yakını girişimciler için
                        ek avantajlar.<br></br>
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
                          Neden Bu Destek Programına Başvurmalısınız?
                        </span>
                        <br />
                        <br />• İşletmenizin sürdürülebilirliğini sağlamak.{" "}
                        <br></br>• Geri ödemeli yüksek oranlı destek.<br></br>•
                        Geniş destek kalemleri ile işletmenizin ihtiyaçlarını
                        karşılayın.<br></br>
                        • Yeni girişimcilere özel avantajlar ve fırsatlar.
                        <br />
                        <br />
                        <b>İş Geliştirme Desteği Hakkında Sıkça Sorulan</b>
                        <br />
                        <b>Soru 1: </b> İş Geliştirme Desteği nedir?
                        <br />
                        <b>Cevap: </b>İş Geliştirme Desteği, yeni kurulmuş
                        işletmelerin sürdürülebilirliğini sağlamak amacıyla
                        hazırladıkları projelere geri ödemeli olarak personel,
                        makine-teçhizat, yazılım ve hizmet alımı giderleri
                        desteği sağlayan bir programdır. Destek oranı %80'dir ve
                        proje süresi 36 aydır.
                        <br />
                        <br />
                        <b>Soru 2: </b> Destek miktarı ne kadardır?
                        <br />
                        <b>Cevap: </b>İş Geliştirme Desteği kapsamında toplamda
                        1.500.000 TL’ye kadar destek sağlanır. Genç, kadın,
                        engelli, gazi veya şehit yakını girişimciler için destek
                        üst limitine 150.000 TL ilave edilir. İş Kurma ve İş
                        Geliştirme Desteklerinden birlikte yararlanılması
                        durumunda toplam destek tutarı 2.000.000 TL’yi geçemez.
                        <br />
                        <br />
                        <b>Soru 3: </b>Kimler İş Geliştirme Desteğine
                        başvurabilir?
                        <br />
                        <br />
                        <b>Cevap: </b>Destek programından yararlanabilmek için
                        işletmenin Türk Ticaret Kanunu’nda tanımlı gerçek veya
                        tüzel kişi statüsünde olması ve KOSGEB Veri Tabanına
                        kayıtlı, işletme beyanının güncel ve aktif durumda
                        olması gerekmektedir. Ayrıca, işletmenin NACE Rev. 2’ye
                        göre belirlenen sektörlerde faaliyet göstermesi şarttır.
                        <br />
                        <br />
                        <b>Soru 4: </b> İş Geliştirme Desteğine başvurmak için
                        gerekli koşullar nelerdir?
                        <br />
                        <br />
                        <b>Cevap: </b>İşletmenin kuruluş tarihinden itibaren üç
                        yıl içerisinde başvuru yapması, Girişimcinin, destek
                        programı başvurusunda bulunduğu işletmedeki kurucu ortak
                        payının en az %50 olması, Girişimcinin İş Geliştirme
                        Desteğine başvuru yapmadan önce ileri girişimci
                        eğitimini tamamlamış olması gerekmektedir.
                        <br />
                        <br />
                        <b>Soru 5: </b> Hangi giderler desteklenir?
                        <br />
                        <br />
                        <b>Cevap: </b>İş Geliştirme Desteği kapsamında şu
                        giderler desteklenir: <br></br>
                        Personel giderleri Makine-teçhizat ve kalıp giderleri
                        Yazılım giderleri Hizmet alımı giderleri (eğitim,
                        danışmanlık, belgelendirme, test ve analiz, pazarlama,
                        tasarım, sınai mülkiyet hakları)
                        <br />
                        <br />
                        <b>Soru 6: </b> Personel giderleri desteği nasıl
                        hesaplanır?
                        <br />
                        <br />
                        <b>Cevap: </b>Personel giderleri desteği, proje ile
                        ilişkilendirilmiş personelin SGK idari kayıtlarında yer
                        alan sigorta primine esas kazancı üzerinden %80 oranında
                        sağlanır. Her bir personel için aylık destek üst limiti,
                        brüt asgari ücretin işverene toplam maliyetinin 2
                        katıdır.
                        <br />
                        <br />
                        <b>Soru 7: </b>Makine-teçhizat ve kalıp giderleri
                        desteği neleri kapsar?
                        <br />
                        <br />
                        <b>Cevap: </b>Proje süresi içerisinde satın alınan yeni
                        makine, teçhizat ve kalıp giderleri ile yeni olmayan
                        ancak elektrik motorları en az IE2 verim sınıfında olan
                        makine giderleri desteklenir.
                        <br />
                        <br />
                        <b>Soru 8: </b>Yazılım giderleri desteği neleri kapsar?
                        <br />
                        <br />
                        <b>Cevap: </b>Proje süresi içerisinde satın alınan
                        yazılımın lisans bedeli, buluttan erişim hakkı bedeli ve
                        zaman sınırlı lisans kullanım bedeli için destek
                        sağlanır.
                        <br />
                        <br />
                        <b>Soru 9: </b>Hizmet alımı giderleri desteği neleri
                        kapsar?
                        <br />
                        <br />
                        <b>Cevap: </b>Eğitim, danışmanlık, belgelendirme, test
                        ve analiz, pazarlama, tasarım ve sınai mülkiyet hakları
                        gibi hizmet alımları desteklenir.
                        <br />
                        <br />
                        <b>Soru 10: </b>İşletmem İş Geliştirme Desteği
                        programından kaç kez yararlanabilir?
                        <br />
                        <br />
                        <b>Cevap: </b>İşletme/girişimci bu programdan yalnızca
                        bir kez faydalanabilir. Ancak, İş Kurma Desteği ve İş
                        Geliştirme Desteğinden birlikte yararlanabilir.
                        <br />
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
      
    </div>
  );
};

const WaterEfficiencyAndOptimization = () => {
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
          <li>Su Verimliliği ve Optimizasyonu</li>
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
            Su Verimliliği ve Optimizasyonu: Kaynakları Koruma ve Operasyonel
            Verimliliği Artırma
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
                        Su Verimliliği ve Optimizasyonu, işletmelerin ve
                        kuruluşların su kullanımını daha etkin yönetmelerine
                        yardımcı olan stratejik bir danışmanlık hizmetidir. Bu
                        hizmet, su kaynaklarının sürdürülebilir kullanımını
                        teşvik ederek, işletmelerin su tüketimini azaltmalarına
                        ve su yönetim sistemlerini iyileştirmelerine olanak
                        tanır. Uzman danışmanlar, su kullanım analizleri yapar,
                        tasarruf fırsatlarını belirler ve su yönetimi
                        stratejileri geliştirir.
                        <br />
                        <br />
                        <span>
                          Bizden{" "}
                          <span className="font-bold">
                            Su Verimliliği ve Optimizasyonu Hizmeti{" "}
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
                        Su Verimliliği ve Optimizasyonu, işletmelere aşağıdaki
                        konularda destek sağlar:
                      </p>
                      <p className="text-justify">
                        <span className="text-lg font-bold">
                          Su Tüketim Analizi:
                        </span>{" "}
                        İşletmelerin mevcut su kullanımını detaylı bir şekilde
                        analiz etme.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          İyileştirme Stratejileri:
                        </span>{" "}
                        Su tüketiminin azaltılması için etkili stratejilerin
                        geliştirilmesi.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Sistem Optimizasyonu:
                        </span>{" "}
                        Su yönetimi sistemlerinin ve proseslerinin verimliliğini
                        artırma.
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                          Eğitim ve Farkındalık Programları:
                        </span>{" "}
                        Çalışanların su tasarrufu konusunda bilinçlendirilmesi
                        ve eğitilmesi.
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
                        Su Verimliliği ve Optimizasyonu danışmanlığı,
                        işletmelerin su maliyetlerini düşürmelerine ve
                        operasyonel verimliliklerini artırmalarına yardımcı
                        olur. Su tüketiminin azaltılması, işletmelerin çevresel
                        izlerini küçültür ve sürdürülebilir kaynak kullanımını
                        teşvik eder. Ayrıca, daha az su tüketimi, çevresel
                        düzenlemelere daha iyi uyum sağlamalarına ve su
                        kısıtlamalarına karşı daha dayanıklı olmalarına olanak
                        tanır.
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
                        Su Verimliliği ve Optimizasyonu, suyun daha sorumlu bir
                        şekilde kullanılmasını teşvik ederek önemli çevresel
                        faydalar sağlar. Bu hizmet, su kıtlığı riski olan
                        bölgelerde özellikle değerlidir, çünkü su kaynaklarının
                        korunmasına yardımcı olur ve ekosistemlerin sağlığını
                        destekler.
                        <br />
                        <br />
                        Su Verimliliği ve Optimizasyonu Danışmanlığı,
                        işletmelerin ve kuruluşların su kaynaklarını daha
                        verimli kullanmalarını sağlayarak, hem ekonomik hem de
                        çevresel sürdürülebilirliklerini artırır. Bu hizmet, su
                        yönetimi konusunda stratejik rehberlik ve uygulamalı
                        çözümler sunarak, işletmelerin su verimliliğini ve
                        optimizasyonunu iyileştirmelerine yardımcı olur.
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
      
    </div>
  );
};






const InovationDetailPage = () => {
  const { id } = useParams();

  const PickPage = () => {
    switch (id) {
      case "yenilenebilir-enerji-sistemleri-tasarimi":
        return <ReusableEnergySystemDesign />;
      case "proses-verimliligi-ve-optimizasyonu":
        return <ProccessEfficiencyAndOptimization />;
      case "su-verimliligi-ve-optimizasyonu":
        return <WaterEfficiencyAndOptimization />;
    }
  };

  return <PickPage />;
};

export default InovationDetailPage;
