import kosgebGreenSupport from "../images/kosgeb-yesil-sanayi-destek-programi-afis.webp";
import tubitakGreenSupport from "../images/tubitak-afis.webp";
import { useParams } from "react-router-dom";

const KosgebGreenSupport = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/yesil-destekler">Yeşil Destekler</a>
          </li>
          <li>KOSGEB Yeşil Sanayi Destek Programı</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        KOSGEB Yeşil Sanayi Destek Programı
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={kosgebGreenSupport}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg ">
              Programın Amacı ve Kapsamı Nedir?
            </h1>
            <p>
              Programın Amacı küçük ve orta ölçekli işletmelerin yeşil
              dönüşümünü verimli bir şekilde gerçekleştirmelerine katkı
              sağlamaktır.
            </p>
          </div>
          {/* Destek Unsurları */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Unsurları</h1>
            <table>
              <tr className="py-10">
                <th className="border border-black py-5 text-center"></th>
                <th className="border border-black py-5 text-center">
                  KOBİ’lerinin Güneş Enerjisi Yatırımlarının Desteklenmesi
                </th>
                <th className="border border-black py-5 text-center">
                  Sanayide Temiz ve Döngüsel Ekonomi
                </th>
              </tr>
              <tr className="py-10">
                <th className="border border-black py-5 text-center">
                  Destek Üst Limiti
                </th>
                <td className="border border-black py-5 text-center">
                  14.000.000 TL
                </td>
                <td className="border border-black py-5 text-center">
                  4.000.000 TL
                </td>
              </tr>
              <tr className="py-10">
                <th className="border border-black py-5 text-center">
                  Destek Oranı
                </th>
                <td className="border border-black py-5 text-center">%60*</td>
                <td className="border border-black py-5 text-center">%70*</td>
              </tr>
              <tr className="py-10">
                <th className="border border-black py-5 text-center">
                  Proje Süresi
                </th>
                <td className="border border-black py-5 text-center">
                  En az 8 ay ve en fazla 12 ay
                </td>
                <td className="border border-black py-5 text-center">
                  En az 8 ay ve en fazla 12 ay
                </td>
              </tr>
              <tr>
                <th className="border border-black py-5 text-center">Destek</th>
                <td className="border border-black py-5 text-center">
                  Makine ve Teçhizat Giderleri
                </td>
                <td className="border border-black py-5 text-center">
                  Personel Giderleri, Makine ve Teçhizat Giderleri, Yazılım
                  Giderleri, Hizmet Alım Giderleri
                </td>
              </tr>
              <tr>
                <th className="border border-black py-5 text-center">
                  Destek Türü
                </th>
                <td className="border border-black py-5 text-center">
                  Geri Ödemeli, Faizsiz
                </td>
                <td className="border border-black py-5 text-center">
                  Geri Ödemeli, Faizsiz
                </td>
              </tr>
            </table>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Program Açıklaması</h1>
            <p>
              Dünya Bankası’nın desteği ile gerçekleştirilecek olan Türkiye
              Yeşil Sanayi Projesi ortakları KOSGEB, TÜBİTAK ve Sanayi ve
              Teknoloji Bakanlığıdır. Proje üç bileşenden oluşmaktadır.
              <br />
              <br />
              Birinci bileşende KOSGEB tarafından KOBİ’lerin yeşil dönüşüm
              faaliyetlerine yönelik geri ödemeli destek kullandırılacaktır. Söz
              konusu destek ile yenilenebilir enerji, kaynak verimliliği, atık
              yönetimi, döngüsel ekonomi vb. tematik alanlarda sanayi KOBİ’leri
              tarafından gerçekleştirilecek faaliyetler desteklenecektir.
              <br />
              <br />
              İkinci bileşende TÜBİTAK tarafından Türkiye'de veya diğer
              pazarlarda yeni yeşil teknolojilerin, ürünlerin veya süreçlerin
              geliştirilmesini içeren yeşil inovasyon faaliyetlerinde bulunan
              firmaları hedeflenecektir. Yeşil start-up’lar, KOBİ'ler, büyük
              firmalar veya firma konsorsiyumlarının başvurabileceği destekler,
              yeşil üretime veya daha yüksek enerji ve/veya kaynak verimliliğine
              katkıda bulunan Ar-Ge, prototip geliştirme, standart geliştirme ve
              yeni ürün veya süreç geliştirmeyi içerecektir.
              <br />
              <br />
              Sanayi ve Teknoloji Bakanlığı ise projenin teknik destek bileşeni
              altında Proje Yönetimi, İhtiyaç Analizi, Kapasite Geliştirme,
              Yeşil Sanayi Akademisi, Yeşil İzleme Sistemi ve Tanıtım ve
              Yaygınlaştırma iş paketlerini yürüterek projenin etkin
              yönetilebilmesini sağlayacaktır.
              <br />
              <br />
              Yeşil Sanayileşme; sanayide döngüsel ekonomi ve yenilebilir enerji
              kapasitesinin arttırılması ile verimliliği artırarak ülke içinde
              yeşil büyüme odaklı ürünlerin üretilmesi ve ulusal/uluslararası
              seviyede rekabetçiliğin geliştirilmesi açısından kritik önemde
              görülmektedir.
              <br />
              <br />
              Proje kapsamında KOSGEB tarafından imalatçı KOBİ’lerin;
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>
                  Ülkemizin yenilenebilir enerji potansiyelinin
                  değerlendirilmesi
                </li>
                <li>
                  Çevre dostu teknolojilerin kullanılmasına yönelik
                  farkındalıklarının artırılması
                </li>
                <li>
                  Enerji maliyetlerinin azaltılmasına yönelik kapasitelerinin
                  geliştirilmesi
                </li>
                <li>
                  Çevresel sürdürülebilirlik, rekabetçilik, yatırım olanakları,
                  dijitalleşme ve kaynak tedarikinde güvence amacı ile çevresel
                  duyarlılığa ve kaynakların daha verimli tüketilmesine yönelik
                  kapasitelerinin geliştirilmesi
                </li>
              </ul>
            </p>
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
            <a href="/yesil-destekler">Yeşil Destekler</a>
          </li>
          <li>TÜBİTAK Yeşil Dönüşüm Destek Programı</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        TÜBİTAK Yeşil Destek Programı
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={tubitakGreenSupport}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg ">
              Programın Amacı ve Kapsamı Nedir?
            </h1>
            <p>
              KOBİ'ler ve büyük firmalar ile üniversiteler, araştırma
              altyapıları ve kamu araştırma merkezleri bu destekler aracılığıyla
              yeşil dönüşüm odaklı teknolojik çözümler geliştirecek.
            </p>
          </div>
          {/* Destek Unsurları */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Unsurları</h1>
            <table>
              <tr className="py-10">
                <th className="border border-black py-5 text-center"></th>
                <th className="border border-black py-5 text-center">
                  Yeşil İnovasyon Teknoloji Mentörlük Desteği
                </th>
                <th className="border border-black py-5 text-center">
                  Sanayide Yeşil Dönüşüm Desteği
                </th>
                <th className="border border-black py-5 text-center">
                  SAYEM Yeşil Dönüşüm Desteği
                </th>
              </tr>
              <tr className="py-10">
                <th className="border border-black py-5 text-center">
                  Hedef Kitle
                </th>
                <td className="border border-black py-5 text-center">
                  KOBİ’ler
                </td>
                <td className="border border-black py-5 text-center">
                  KOBİ, Büyük ve ortaklı
                </td>
                <td className="border border-black py-5 text-center">
                  Özel sektör öncülüğünde, üniversite ve kamu iş birliğiyle
                  ihtisaslaşmış Ar- Ge ve Yenilik Platformları
                </td>
              </tr>
              <tr className="py-10">
                <th className="border border-black py-5 text-center">
                  Destek Üst Limiti
                </th>
                <td className="border border-black py-5 text-center">
                  210 bin TL
                </td>
                <td className="border border-black py-5 text-center">
                  Mikro/Küçük 7,5 milyonTL <br /> <br /> Orta 12 milyon TL <br /> <br /> Büyük 22,5 milyon
                  TL
                </td>
                <td className="border border-black py-5 text-center">
                  300 milyon TL/Platform <br /> <br />
                  KOBİ 15 milyon TL <br /> <br />
                  Büyük 60 milyon TL <br /> <br />
                  Araştırma Kurumları 10 milyon TL(hibe)
                </td>
              </tr>
              <tr className="py-10">
                <th className="border border-black py-5 text-center">
                  Destek Süresi (Maks.)
                </th>
                <td className="border border-black py-5 text-center">6ay</td>
                <td className="border border-black py-5 text-center">24 ay</td>
                <td className="border border-black py-5 text-center">36 ay</td>
              </tr>
              <tr>
                <th className="border border-black py-5 text-center">
                  Destek Türü
                </th>
                <td className="border border-black py-5 text-center">
                  KOBİ’lerin çözüm ortaklarından alacağı hizmetin %90’ı TÜBİTAK
                  tarafından hibe olarak verilecek.
                </td>
                <td className="border border-black py-5 text-center">
                  <span className="font-bold">
                    Faizsiz Geri Ödemeli Finansman
                  </span>{" "}
                  <br /> <br />
                  <span className="font-bold">Destek Oranı: </span>Büyük %70,
                  KOBİ’ler %80, Deprem Bölgesindeki KOBI’ler %90 <br /> <br />
                  <span className="font-bold">Geri Ödeme Oranı: </span>Büyük %50
                  (%30), KOBİ %40 (%20) - Proje bittikten 1 yıl sonra
                  başlayacak.
                  <br /> <br />
                  <span className="font-bold">Toplam geri ödeme süresi: </span>4
                  yıl
                </td>

                <td className="border border-black py-5 text-center">
                  <span className="font-bold">
                    Firmalara Faizsiz Geri Ödemeli Finansman
                  </span>{" "}
                  <br /> <br />
                  <span className="font-bold">Destek Oranı: </span>Büyük %70,
                  KOBİ’ler %80, Deprem Bölgesindeki KOBI’ler %90 <br /> <br />
                  <span className="font-bold">Geri Ödeme Oranı: </span>BBüyük
                  %50 (%30), KOBİ %40 (%20) – Proje bittikten 1 yıl sonra
                  başlayacak. <br /> <br />
                  <span className="font-bold">Toplam geri ödeme süresi: </span>4
                  yıl
                </td>
              </tr>
            </table>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Program Açıklaması</h1>
            <p>
              Türkiye Yeşil Sanayi Projesi kapsamında TÜBİTAK bünyesinde:
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>
                  175 milyon dolar bütçe ile Türkiye'de veya diğer pazarlarda
                  yer alacak yeni yeşil teknolojilerin, ürünlerin veya
                  süreçlerin geliştirilmesini içeren ve yeşil inovasyon
                  faaliyetlerinde bulunan firmalar desteklenecektir.
                </li>
                <li>
                  Teknoloji tabanlı başlangıç firmaları, KOBİ'ler ve büyük
                  firmaların yanı sıra üniversiteler, araştırma altyapıları ve
                  kamu araştırma merkezleri de bu destekler ile yeşil dönüşüm
                  odaklı teknolojik çözümleri geliştirebilecektir.
                </li>
                <li>
                  Yeşil üretime, daha yüksek enerji ve kaynak verimliliğine
                  katkıda bulunan Ar-Ge, prototip geliştirme, standart
                  geliştirme ile yeni ürün veya süreç geliştirmeye yönelik
                  projeler desteklenecektir.
                </li>
              </ul>
              <br />
              <br />
              Proje kapsamında özel sektöre yönelik hibe ve faizsiz geri ödemeli
              destekler, ayrıca projelerde ortak olarak yer alabilecek araştırma
              kurumlarına hibe destek verilecektir.
              <br />
              <br />
              Destekler üç farklı bileşen altında açılacak çağrılar aracılığıyla
              sağlanacaktır.
              <br />
              <br />
              <h1 className="text-lg font-bold">
                Bileşen 1: Yeşil İnovasyon Teknoloji Mentörlük Desteği
              </h1>
              <br />
              <span className="font-bold">Kazanım: </span>KOBİ’lerin yeşil
              dönüşüm sürecinde teknoloji ve yenilik ihtiyaçlarına yönelik
              stratejik yol haritalarının oluşturulması.
              <br />
              <br />
              Bu kapsamda, yeşil dönüşüme uygun iş modellerini, tedarik ve değer
              zincirlerini, ürün ve hizmetlerini gözden geçirmek isteyen
              KOBİ'lere çözüm ortakları ile birlikte teknik yardım
              sağlanacaktır.
              <br />
              <br />
              <h1 className="text-lg font-bold">
                Bileşen 2: Sanayide Yeşil Dönüşüm Desteği
              </h1>
              <br />
              <span className="font-bold">Kazanım: </span>Sanayinin yeşil
              dönüşümüne yönelik teknolojik çözümlerin ticarileşmesini
              kolaylaştıracak Ar-Ge ve yenilik faaliyetlerinin
              gerçekleştirilmesi
              <br />
              <br />
              Bu kapsamda, firmaların yeşil dönüşüm faaliyetlerine yönelik
              Teknoloji Hazırlık Seviyesi (THS) 5-9 aralığını kapsayan prototip
              geliştirme ya da iyileştirme, validasyon ve sertifikasyon
              testleri, yerinde uygulama, ölçeklendirme, demonstrasyon ve saha
              denemeleri çalışmaları desteklenecektir.
              <br />
              <br />
              <h1 className="text-lg font-bold">
                Bileşen 3: SAYEM Yeşil Dönüşüm Desteği
              </h1>
              <br />
              <span className="font-bold">Kazanım: </span>Türkiye’nin yeşil
              büyümesine katkı sağlayacak katma değeri yüksek ürün veya ürün
              gruplarının geliştirilmesi için teknoloji ekosistemlerinin
              (Sanayiye Yönelik Ar-Ge ve Yenilik Ağları) oluşturulması
              <br />
              <br />
              Bu destek ile, özel sektör öncülüğünde ortak bir vizyon ve yol
              haritası etrafında bir araya gelen paydaşları içeren yenilik
              platformlarının oluşturulması ve ürünleştirme odağında oluşturulan
              yol haritaları kapsamındaki Ar-Ge ve yenilik projeleri
              desteklenecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GreenSupportsDetailPage = () => {
  const { id } = useParams();

  const PickPage = () => {
    switch (id) {
      case "kosgeb-yesil-sanayi-destek-programi":
        return <KosgebGreenSupport />;
      case "tubitak-yesil-donusum-destek-programi":
        return <TubitakGreenSupport />;
    }
  };

  return <PickPage />;
};

export default GreenSupportsDetailPage;
