import kosgebGreenSupport from "../images/kosgeb-yesil-sanayi-destek-programi-afis.webp";
import tubitakGreenSupport from "../images/tubitak-afis.webp";
import { useParams } from "react-router-dom";
import YurdısıFuarBanner from "../images/YurtdışıFuarBanner.jpg";
import malİ1 from "../images/MalİhracatResimler/malİ1.jpg";
import malİ2 from "../images/MalİhracatResimler/malİ2.jpg";
import malİ3 from "../images/MalİhracatResimler/malİ3.jpg";
import malİ4 from "../images/MalİhracatResimler/malİ4.jpg";
import malİ5 from "../images/MalİhracatResimler/malİ5.jpg";
import malİ6 from "../images/MalİhracatResimler/malİ6.jpg";
import malİ7 from "../images/MalİhracatResimler/malİ7.jpg";
import malİ8 from "../images/MalİhracatResimler/malİ8.jpg";
import malİ9 from "../images/MalİhracatResimler/malİ9.jpg";
import malİ10 from "../images/MalİhracatResimler/malİ10.jpg";
import malİ11 from "../images/MalİhracatResimler/malİ11.jpg";
import malİ12 from "../images/MalİhracatResimler/malİ12.jpg";
import malİ13 from "../images/MalİhracatResimler/malİ13.jpg";
import malİ14 from "../images/MalİhracatResimler/malİ14.jpg";
import malİ15 from "../images/MalİhracatResimler/malİ15.jpg";
import malİ16 from "../images/MalİhracatResimler/malİ16.jpg";
import malİ17 from "../images/MalİhracatResimler/malİ17.jpg";
import malİ18 from "../images/MalİhracatResimler/malİ18.jpg";




{/*card1 */}
const KosgebGreenSupportss = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Pazara Giriş Belgesi Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Pazara Giriş Belgesi Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
          <img
            className="rounded-box sticky  top-20"
            src={malİ1}
            alt="sürdürülebilirlik"
          />
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl ">
              Pazara Giriş Belgesi Desteği Nedir?
            </h1>
            <p>
              Pazara Giriş Belgesi Desteği, şirketlerin yurtdışı pazarlara giriş
              için gerekli olan belge ve sertifikaların alınması ve yenilenmesi
              sürecinde yapılan harcamaların karşılanmasını sağlayan bir destek
              programıdır. Bu destek ile şirketlerin uluslararası piyasalarda
              rekabet gücünü artırmak ve ihracat süreçlerini kolaylaştırmak
              amaçlanmaktadır.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Kimler Faydalanabilir?</h1>
            <p>
              Pazara Giriş Belgesi Desteği, ihracat yapmak isteyen tüm şirketler
              için geçerlidir. Özellikle ilaç, tıbbi cihaz, veterinerlik
              ilaçları, gıda takviyeleri, kozmetik ürünleri ve zirai ilaçlar
              gibi ürünlerin ruhsatlandırma ve kayıt işlemleri için önemli
              avantajlar sunmaktadır.
            </p>
            <br />
            <h1 className="font-bold text-xl">Destek Oranı ve Üst Limiti</h1>
            <p>
              <li>
                <b>Destek Oranı:</b> %50
              </li>
              <li>
                <b>Yıllık Destek Üst Limiti:</b> 4.000.000 TL
              </li>
            </p>
            <br />
            <h1 className="font-bold text-xl">Desteklenen Harcamalar</h1>
            Pazara Giriş Belgesi Desteği kapsamında aşağıdaki harcamalar
            desteklenmektedir:
            <li>
              <b>Başvuru Giderleri:</b> Belgeler ve sertifikalar için yapılan
              başvuruların maliyetleri.
            </li>
            <li>
              <b>Aidat Bedeli:</b> Üyelik ve aidat ücretleri.
            </li>
            <li>
              <b>Elektronik Dosya Başvuru Giderleri:</b> Elektronik dosya
              başvurularında kullanılan program lisans ücretleri.
            </li>
            <li>
              <b>Resmi Otoritelere Ödenen Harçlar:</b> İyi üretim uygulamaları
              denetimlerinin harç giderleri.
            </li>
            <li>
              <b>Biyo-eşdeğerlilik ve Klinik Çalışma Giderleri:</b> İlaç ve
              tıbbi cihaz ürünlerinin yurt dışı ruhsatlandırması ve kayıt
              işlemleri için yapılan giderler.
            </li>
            <li>
              <b>Ruhsatlandırma ve Kayıt Yenileme Giderleri:</b> Önceki
              belgelerin yenilenmesi için yapılan harcamalar.
            </li>
            <br />
            <h1 className="font-bold text-xl">Başvuru Süreci</h1>
            <li>
              <b>Başvuru Zamanı:</b> Belgenin düzenlenme tarihinden itibaren 6
              ay içinde başvuru yapılmalıdır
            </li>
            <li>
              <b>Başvuru Yeri:</b> Başvurular, Destek Yönetim Sistemi (DYS)
              üzerinden gerçekleştirilir.
            </li>
            <li>
              <b>Eksik Bilgi ve Belgelerin Tamamlanması:</b> Eksik bilgi ve
              belgeler, başvuru tarihinden itibaren 3 ay içinde tamamlanmalıdır.
            </li>
            <br />
            <h1 className="font-bold text-xl">Ödeme Esasları</h1>
            <p>
              <li>
                <b>Ödeme Yöntemi:</b> Ödemeler nakit veya banka hesabına yapılan
                transferlerle gerçekleştirilir.
              </li>
              <li>
                <b>Ödeme Belgeleri:</b> Tarım analiz raporları ve
                sağlık/güvenlik sertifikaları için nakit ödemelerde tahsilat
                makbuzu gereklidir.
              </li>
              <li>
                <b>Kur Esasları:</b> Destek ödemeleri, ödeme belgesi tarihinde
                geçerli olan kur üzerinden hesaplanır.
              </li>
            </p>
            <br />
            <h1 className="font-bold text-xl">Genel Esaslar</h1>
            <li>
              Belgelerin ve ruhsatlandırma işlemlerinin akredite kuruluşlar
              tarafından verilmiş olması gerekir.
            </li>
            <li>
              Destek kapsamındaki belgeler ve sertifikalar, Bakanlık tarafından
              belirlenen listede yer almalıdır.
            </li>
          </div>
        </div>
        <h1 className="font-bold text-lg">1. Destek oranı nedir? </h1>
        Destek oranı %50 olup, yıllık üst limit 4.000.000 TL'dir.
      </div>
    </div>
  );
};

{/*card2 */}
const KosgebGreenSupports = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Yurt Dışı Marka Tescil Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Yurt Dışı Marka Tescil Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ2}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">
              Yurt Dışı Marka Tescil Desteği Nedir?
            </h1>
            <p>
              Yurt dışı marka tescil desteği, şirketlerin yurt içi marka tescil
              belgesine sahip oldukları markalarının yurtdışında tescili ve
              korunmasına ilişkin giderlerin karşılanması amacıyla sağlanan bir
              destektir. Bu destek, şirketlerin markalarını uluslararası
              pazarlarda koruma altına alarak rekabet güçlerini artırmalarını
              hedefler.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Destek Oranı ve Üst Limiti</h1>
            <p>
              <li>
                <b>Destek Oranı:</b> %50
              </li>
              <li>
                <b>Yıllık Destek Üst Limiti:</b> 750.000 TL
              </li>
              <br />
            </p>
            <h1 className="font-bold text-xl">
              Destekten Kimler Faydalanabilir?
            </h1>
            <p>
              Bu destekten, yurt içi marka tescil belgesine sahip olan ve
              markalarını yurtdışında tescil ettirmek isteyen tüm şirketler
              faydalanabilir. Destek süresi en fazla 4 yıl olup, bu süre
              zarfında yapılan harcamalar desteklenir.
              <br />
            </p>
            <br />
            <h1 className="font-bold text-xl">Desteklenen Harcamalar</h1>
            Yurt dışı marka tescil desteği kapsamında aşağıdaki giderler
            desteklenmektedir:
            <br />
            <b>Tescil ve Koruma Giderleri:</b>
            <p>
              <li>Marka/patent bürosu hizmetleri</li>
              <li>Danışmanlık giderleri</li>
              <li>Avukatlık ve zorunlu diğer giderler</li>
              <li>
                Markanın başka bir şirket adına tescil edilip edilmediğine dair
                yapılan araştırma ve inceleme giderleri
              </li>
              <br />
            </p>
            <h1 className="font-bold text-xl">Başvuru Süreci</h1>
            <p>
              <li>
                <b>Başvuru Zamanı:</b> Destek başvuruları, ödeme belgesi
                tarihinden itibaren 6 ay içinde yapılmalıdır.
              </li>
              <li>
                <b>Başvuru Yeri:</b> Başvurular, Destek Yönetim Sistemi (DYS)
                üzerinden gerçekleştirilir.
              </li>
              <li>
                <b>Eksik Bilgi ve Belgelerin Tamamlanması:</b> Eksik bilgi ve
                belgeler, başvuru tarihinden itibaren 3 ay içinde
                tamamlanmalıdır.
              </li>

              <br />
            </p>
            <h1 className="font-bold text-xl">Ödeme Esasları</h1>
            <p>
              <li>
                <b>Ödeme Yöntemi:</b> Ödemeler, şirket ya da ilgili yurt dışı şirketi
                veya şubeleri tarafından şirket hesabından bankacılık kanalıyla
                yapılmalıdır.
              </li>
              <li>
                <b>Ödeme Belgeleri:</b> Banka onaylı hesap ekstresi/dökümü ödeme
                belgesi olarak kabul edilir. Çek ile yapılan ödemelerde, çekin
                fotokopisi ile birlikte çekin ödendiğine ilişkin banka kayıtları
                ibraz edilmelidir.
              </li>
              <li>
                <b>Kur Esasları:</b> Destek ödemeleri, ödeme belgesi tarihinde geçerli
                olan kur üzerinden hesaplanır.
              </li>

              <br />
            </p>
            <h1 className="font-bold text-xl">Genel Esaslar</h1>
            <p>
              <li>
                Belgelerin ve tescil işlemlerinin akredite kuruluşlar tarafından
                verilmiş olması gerekmektedir.
              </li>
              <li>
                Destek kapsamındaki belgeler ve sertifikalar, Bakanlık
                tarafından belirlenen listede yer almalıdır.
              </li>
              <br />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Sıkça Sorulan Sorular</h1>
            <h1 className="font-bold text-lg">1. Destek oranı nedir?</h1>
            <p>
              <b>Cevap:</b> Destek oranı %50 olup, yıllık üst limit 750.000
              TL'dir.
            </p>

            <h1 className="font-bold text-lg">
              2. Hangi harcamalar desteklenmez?
            </h1>
            <p>
              <b>Cevap:</b> Marka yenileme giderleri, eğitim ve danışmanlık
              hizmetleri, yol ve konaklama masrafları, tarım ürünlerine ilişkin
              muayene ücretleri destek kapsamı dışındadır.
            </p>
            <h1 className="font-bold text-lg">3. Başvurular nasıl yapılır?</h1>
            <p>
              <b>Cevap:</b> Başvurular, Destek Yönetim Sistemi (DYS) üzerinden
              online olarak yapılır ve gerekli belgeler de bu sistem üzerinden
              ibraz edilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
{/*card3 */}
const MarketEntryProjectPreparationSupport = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/ihracat-destekleri">İhracat Destekleri </a>
          </li>
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Pazara Giriş Projesi Hazırlama Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Pazara Giriş Projesi Hazırlama Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ3}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg ">
              Pazara Giriş Projesi Hazırlama Desteği Nedir?
            </h1>
            <p>
              Pazara Giriş Projesi Hazırlama Desteği, şirketlerin sürdürülebilir
              ihracat artışını sağlamak amacıyla hedef pazar, yurt dışı
              pazarlara yönelik finansman ve fiyatlandırma stratejisi, pazarlama
              ve kanal stratejisi gibi konularda danışmanlık ve rapor
              giderlerini karşılamak için verilen bir destektir. Bu destek,
              şirketlerin uluslararası pazarlarda daha etkin ve rekabetçi
              olmalarını sağlamak için önemli bir araçtır.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Destek Oranı ve Üst Limiti</h1>
            <li>
              <b>Destek Oranı:</b> %50
            </li>
            <li>
              <b>Proje Başına Üst Limit</b>: 200.000 TL
            </li>
            <li>
              <b>Proje Sayısı Limiti:</b> Bir şirket en fazla 2 adet pazara
              giriş projesi için destek alabilir.
            </li>
            <br />
            <h1 className="font-bold text-xl">
              Destekten Kimler Faydalanabilir?
            </h1>
            <p>
              Bu destekten ihracatçı birliği üyesi şirketler faydalanabilir.
              Şirketler, belirlenen şartları taşıyan danışmanlık hizmetleri
              alarak projelerini hazırlayabilir ve destek başvurusunda
              bulunabilirler.
            </p>
            <br />
            <h1 className="font-bold text-xl">Desteklenen Harcamalar</h1>
            Pazara Giriş Projesi Hazırlama Desteği kapsamında aşağıdaki giderler
            desteklenmektedir:
            <li>
              Danışmanlık Giderleri: Hedef pazar araştırması, finansman ve
              fiyatlandırma stratejisi, pazarlama ve kanal stratejisi gibi
              konularda alınan danışmanlık hizmetleri.
            </li>
            <li>
              Rapor Giderleri: Danışmanlık hizmetleri sonucunda hazırlanan
              raporların maliyetleri.
            </li>
            <br />
            <h1 className="font-bold text-xl">Başvuru Süreci</h1>
            <li>
              <b>Başvuru Zamanı:</b> Başvurular, destek ödeme belgesi tarihinden
              itibaren 6 ay içinde yapılmalıdır.
            </li>
            <li>
              <b>Başvuru Yeri:</b> Başvurular, Destek Yönetim Sistemi (DYS) veya
              Kayıtlı Elektronik Posta (KEP) üzerinden yapılır.
            </li>
            <li>
              <b>Eksik Bilgi ve Belgelerin Tamamlanması:</b> Eksik bilgi ve
              belgeler, başvuru tarihinden itibaren 3 ay içinde tamamlanmalıdır.
            </li>
            <br />
            <h1 className="font-bold text-xl">Ödeme Esasları</h1>
            <li>
              <b>Ödeme Yöntemi:</b> Ödemeler, şirket tarafından bankacılık
              kanalıyla yapılmalıdır.
            </li>
            <li>
              <b>Ödeme Belgeleri:</b> Kredi kartı ödemeleri kabul edilir ve
              ödemelerin tevsiki için gerekli belgeler banka onaylı olmalıdır.
            </li>
            <li>
              <b>Kur Esasları:</b> Destek ödemeleri, ödeme belgesi tarihinde
              geçerli olan kur üzerinden hesaplanır.
            </li>
            <br />
          </div>
        </div>
        <div>
      <h1 className="font-bold text-xl">Genel Esaslar</h1>
      <li>
        Projelerin, Bakanlık tarafından onaylanmış danışmanlık şirketleri
        tarafından hazırlanmış olması gerekmektedir.
      </li>
      <li>
        Proje başvurularında sunulan tüm belgelerin asılları, gerektiğinde
        denetlenmek üzere saklanmalıdır.
      </li>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Sıkça Sorulan Sorular</h1>
        <h1 className="font-bold text-lg">1. Destek oranı nedir?</h1>
        <p>
          <b>Cevap:</b> Destek oranı %50 olup, proje başına üst limit 200.000
          TL'dir.
        </p>

        <h1 className="font-bold text-lg">2. Hangi harcamalar desteklenmez?</h1>
         
        <p>
          <b>Cevap:</b> Marka yenileme giderleri, eğitim ve danışmanlık
          hizmetleri, yol ve konaklama masrafları, tarım ürünlerine ilişkin
          muayene ücretleri destek kapsamı dışındadır.
        </p>
        <h1 className="font-bold text-lg">3. Başvurular nasıl yapılır?</h1>
        <p>
          <b>Cevap:</b> Başvurular, Destek Yönetim Sistemi (DYS) veya Kayıtlı
          Elektronik Posta (KEP) üzerinden online olarak yapılır ve gerekli
          belgeler de bu sistemler üzerinden ibraz edilir.  
        </p>
        </div>
        
      </div>
      </div>
    </div>
  );
}

{/*card4 */} 

const ForeignMarketResearchSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Yurt Dışı Pazar Araştırması Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Yurt Dışı Pazar Araştırması Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ4}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg ">
              Yurt Dışı Pazar Araştırması Desteği Nedir?
            </h1>
            <p>
              Yurt dışı pazar araştırması desteği, şirketlerin yurtdışında
              gerçekleştirdikleri pazar araştırması faaliyetlerine ilişkin
              ulaşım ve konaklama giderlerinin karşılanmasını amaçlayan bir
              destektir. Bu destek, şirketlerin uluslararası pazarlarda rekabet
              gücünü artırmayı ve yeni pazarlara açılmayı teşvik etmektedir.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg ">Destek Oranı ve Üst Limiti</h1>
            <li>
              <b>Destek Oranı:</b>%50
            </li>
            <li>
              <b>Faaliyet Başına Üst Limit:</b> 100.000TL{" "}
            </li>
            <li>
              <b>Yıllık ve Toplam Faaliyet Limiti:</b> Bir şirket bir takvim
              yılı içinde en fazla 5 defa, toplamda ise 20 defa yararlanabilir.
            </li>
            <br />
            <br />
            <h1 className="font-bold text-lg">
              Destekten Kimler Faydalanabilir?
            </h1>
            <p>
              Bu destekten, yurtdışında pazar araştırması yapmak isteyen tüm
              ihracatçı şirketler faydalanabilir. Destek, belirli kriterlere
              uygun olarak gerçekleştirilen pazar araştırması faaliyetlerine
              yönelik harcamaları kapsar.
            </p>
            <br />
            <h1 className="font-bold text-lg">Desteklenen Harcamalar</h1>
            Yurt dışı pazar araştırması desteği kapsamında aşağıdaki giderler
            desteklenmektedir:
            <li>
              <b>Ulaşım Giderleri:</b> Uluslararası ve şehirlerarası ulaşımda
              kullanılan ekonomi sınıfı uçak, tren, gemi ve otobüs bileti
              ücretleri.
            </li>
            <li>
              <b>Konaklama Giderleri:</b> Kişi başına günlük 2.500 TL'ye kadar
              konaklama (oda + kahvaltı) giderleri.
            </li>
            <br />
            <br />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Başvuru Süreci</h1>
              <p>
                <b>Başvuru Zamanı:</b> Başvurular, Türkiye’ye giriş tarihinden
                itibaren en geç 3 ay içinde yapılmalıdır.
                <br />
                <br />
                <b>Başvuru Yeri:</b> Başvurular, Destek Yönetim Sistemi (DYS)
                üzerinden gerçekleştirilir.
                <br />
                <br />
                <b>Eksik Bilgi ve Belgelerin Tamamlanması:</b> Eksik bilgi ve
                belgeler, başvuru tarihinden itibaren 3 ay içinde
                tamamlanmalıdır.
                <br />
                <br />
                <b>Faaliyet Süresi: </b> Desteklenen pazar araştırması
                faaliyetleri en az 2 gün olmak üzere, en fazla 10 gün sürebilir.
              </p>
              <br />
              <h1 className="font-bold text-lg ">Genel Esaslar</h1>
              <li>
                Pazar araştırması faaliyetinin en az 2, en fazla 10 gün sürmesi
                gerekmektedir.
              </li>
              <li>
                Her bir gün için araştırma yapılan ülkede en az 1 kurum/kuruluş
                veya şirket ile görüşme yapılmalıdır.
              </li>
              <li>
                Türkiye’den çıkış ve Türkiye’ye dönüş yapılması gerekmektedir.
              </li>
              <li>
                Aynı ülkeye yönelik bir takvim yılı içinde en fazla 2 pazar
                araştırması faaliyeti desteklenir.
              </li>
              <li>
                En fazla 3 ülkeye yönelik pazar araştırması faaliyeti
                desteklenir.
              </li>
              <li>
                Pazar araştırması yapılan ülkede şirketin yurt dışı birimi/ofisi
                varsa ilgili giderler desteklenmez.
              </li>
              <br />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Desteklenmeyen Harcamalar</h1>
              <li>Pazar araştırmasının amaçlanmadığı yurt dışı seyahatleri.</li>
              <li>
                Grup seyahati veya toplantı, sergi, konferans gibi
                organizasyonlar.
              </li>
              <li>
                Beş ve üzeri sayıda şirketin birlikte gerçekleştirdiği grup
                seyahatleri.
              </li>
              <li>
                Yurt dışı pazar araştırması faaliyeti sırasında fuara stand ile
                katılan şirketler.
              </li>
              <li>
                Şirket çalışanlarının eşleri ve ikinci dereceye kadar kan
                hısımlarının eşlik ettiği seyahatler.
              </li>
              <br />
              <h1 className="font-bold text-lg ">Ödeme Esasları</h1>
              <li>
                <b>Ödeme Yöntemi:</b> Ödemeler, şirket tarafından bankacılık
                kanalıyla yapılmalıdır.{" "}
              </li>
              <li>
                <b>Ödeme Belgeleri:</b> Kredi kartı ödemeleri kabul edilir ve
                ödemelerin tevsiki için gerekli belgeler banka onaylı olmalıdır
              </li>
              <li>
                <b>Kur Esasları:</b> Destek ödemeleri, ödeme belgesi tarihinde
                geçerli olan kur üzerinden hesaplanır.
              </li>
              <br />
            </div>
            {/*SORULAR*/ }
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Sıkça Sorulan Sorular</h1>
              <h1 className="font-bold text-lg">1. Destek oranı nedir?</h1>
              <p>
                <b>Cevap:</b> Destek oranı %50 olup, faaliyet başına üst limit
                100.000 TL'dir.
              </p>

              <h1 className="font-bold text-lg">
                2. Hangi harcamalar desteklenmez?
              </h1>

              <p>
                <b>Cevap:</b> Grup seyahatleri, fuar katılımları ve kişisel
                seyahatler gibi pazar araştırması amacı taşımayan harcamalar
                destek kapsamı dışındadır.
              </p>
              <h1 className="font-bold text-lg">
                3. Başvurular nasıl yapılır?
              </h1>
              <p>
                <b>Cevap:</b> Başvurular, Destek Yönetim Sistemi (DYS) üzerinden
                online olarak yapılır ve gerekli belgeler de bu sistem üzerinden
                ibraz edilir.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/*card5 */}

const DomesticFairSupport = () => {  
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Yurt İçi Fuar Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Yurt İçi Fuar Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ5}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl ">Yurt İçi Fuar Desteği Nedir?</h1>
            <p>
              Yurt içi fuar desteği, Türkiye'de düzenlenen fuarlara katılan
              firmaların çeşitli giderlerini karşılamak amacıyla sağlanan bir
              teşvik programıdır. Bu destek, firmaların yerli pazarda tanıtım
              yaparak yeni iş bağlantıları kurmalarını ve satışlarını
              artırmalarını hedeflemektedir.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Destek Detayları</h1>
            <h1 className="font-bold  text-lg">
              Destek Kapsamına Alınma Koşulları
            </h1>
            <li>
              <b>Yabancı Ziyaretçi Sayısı:</b> En az 1.500 yabancı ziyaretçi.
            </li>
            <li>
              <b>Ziyaretçi Oranı:</b> Yabancı ziyaretçi sayısının toplam
              ziyaretçi sayısına oranı %10’un üzerinde olmalı.
            </li>
            <li>
              <b>Toplam Katılımcı Sayısı:</b> En az 400 katılımcı.
            </li>
            <li>
              <b>Yabancı Katılımcı Oranı:</b> Yabancı katılımcı sayısının toplam
              katılımcı sayısına oranı %10’un üzerinde olmalı.
            </li>
            <li>
              <b>Stant Alanı:</b> Katılımcılara tahsis edilen stant alanı en az
              10.000 metrekare olmalı.
            </li>
            <li>
              <b>Yabancı Stant Alanı:</b> Yabancı katılımcılara tahsis edilen
              toplam stant alanı en az 300 metrekare olmalı.
            </li>
            <br />
            <h1 className="font-bold text-lg">Destek Tutarları</h1>
            <li>
              <b>Yer Kirası ve Stant Masrafları:</b> Yurt içi fuar katılımcıları
              için %50 oranında, 80.000 TL’ye kadar desteklenir.
            </li>
            <li>
              <b>Tanıtım Giderleri:</b>
              Yurt içi fuar organizatörlerinin tanıtım projeleri %50 oranında,
              yurt dışında gerçekleştirilen tanıtım faaliyetleri 1.500.000
              TL’ye, yurt içinde gerçekleştirilen tanıtım faaliyetleri 500.000
              TL’ye kadar desteklenir.
            </li>
            <br />
            <h1 className="font-bold text-lg">Azami Destek Sınırları</h1>
            <li>
              <b>Yıllık Katılım Sınırı:</b> Bir takvim yılı içinde aynı konuda
              en fazla 3 fuar için destek alınabilir.
            </li>
            <li>
              <b>Organizatör Tanıtım Desteği:</b> Aynı yurt içi fuar için azami
              10 defa tanıtım desteğinden yararlanılabilir.
            </li>
            <br />
            <h1 className="font-bold text-lg">Başvuru Süreci:</h1>
            <li>
              <b>Başvuru Zamanı:</b> Destek başvuruları, fuarın bitimini
              müteakip 3 aylık süre içerisinde yapılmalıdır.
            </li>
            <li>
              <b>Başvuru Yeri:</b> Başvurular, Destek Yönetim Sistemi (DYS)
              üzerinden gerçekleştirilir.
            </li>
            <li>
              <b>Gerekli Belgeler:</b> Fuar izleme raporu ve gözlemci raporu
              gibi belgeler sunulmalıdır.
            </li>
            <br />
            <h1 className="font-bold text-lg">Değerlendirme Kriterleri:</h1>
            <li>
              <b>Başvuru Zamanı:</b> Destek başvuruları, fuarın bitimini
              müteakip 3 aylık süre içerisinde yapılmalıdır.
            </li>
            <li>
              <b>Fuarın Performansı:</b> En son düzenlenen veya son 3 fuardan en
              az 2’sinin performans verileri değerlendirilir.
            </li>
            <li>
              <b>Organizatör Beyanı:</b> Fuar organizatörleri tarafından sunulan
              katılımcı ve ziyaretçi listeleri dikkate alınır.
            </li>
            <li>
              <b>UFI Onayı:</b> UFI- Uluslararası Fuarlar Birliği tarafından
              onaylı denetim raporları kullanılır.
            </li>
            <br />
            <h1 className="font-bold text-lg">Özel Durumlar:</h1>
            <li>
              <b>İlk Kez Düzenlenen Fuarlar:</b> İlk kez düzenlenecek yurt içi
              fuarların destek kapsamına alınabilmesi için fuar sonrası izleme
              ve gözlemci raporları ile şartları sağladığının kanıtlanması
              gerekmektedir.
            </li>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};


{/*card6 */}

const InternationalFairSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Yurt Dışı Fuar Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Yurt Dışı Fuar Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ6}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Yurt Dışı Fuar Desteği Nedir?</h1>
            Yurt dışı fuar desteği, firmaların uluslararası alanda kendilerini
            tanıtmaları ve pazara giriş süreçlerini kolaylaştırmaları amacıyla
            çeşitli oranlarda mali destekler sağlamaktadır. İşte yurt dışı fuar
            desteği hakkında bilmeniz gereken önemli bilgiler:
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Tutarları</h1>
            <p>
              <li>
                Destek, metrekare başına yaklaşık toplam maliyetin %50'sini
                geçemez.
              </li>
              <li>
                Belirlenen hedef ülkelerde düzenlenen fuarlara katılanlar için
                %70, belirlenen hedef sektörlerde ise %75 oranında destek
                sağlanabilir.
              </li>
              <li>
                Aynı yurt dışı fuar katılımı için en fazla 10 defa destekten
                yararlanılabilir.
              </li>
              <br />
            </p>
            <h1 className="font-bold text-xl">Destek Oranı ve Üst Limiti</h1>
            <h1 className="font-bold text-lg">
              Fuar Katılımı ve Destek Tutarları
            </h1>
            <li>
              Genel nitelikli fuarlar için destek tutarı 150.000 TL'yi geçemez.
            </li>
            <li>
              Sektörel nitelikli fuarlar için destek tutarı 250.000 TL'yi
              geçemez.
            </li>
            <li>
              Bakanlıkça belirlenen prestijli fuarlar için destek tutarı 750.000
              TL'yi geçemez.
            </li>

            <br />
            <br />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl ">Destek Oranları</h1>
              <p>
                Fuarın genel maliyetinin %50'si, hedef ülkelerde %70'i ve hedef
                sektörlerde %75'i kadar destek sağlanır.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl ">Yıllık Katılım Sınırları</h1>
              <li>
                Bir takvim yılı içinde en fazla 5 fuara katılım desteklenir.
              </li>
              <li>
                Belirlenen niteliklere sahip katılımcılar için bu sınır 10 fuara
                kadar çıkabilir.
              </li>
              <h1 className="font-bold text-xl ">Prestijli Fuar Desteği</h1>
              <li>
                Katılımcılar prestijli fuarlara katılım için yılda en fazla 2
                fuar desteği alabilir.
              </li>
              <li>
                Prestijli fuarlar için katılımcı sayısı en az 500 ve ziyaretçi
                sayısı en az 25.000 olmalıdır.
              </li>
              <h1 className="font-bold text-xl ">
                Organizatör Tanıtım Desteği
              </h1>
              <li>
                Bakanlıkça belirlenen fuarlarda, organizatör tanıtım
                faaliyetleri %75 oranında, diğer fuarlarda ise %50 oranında
                desteklenir.
              </li>
              <li>
                Tanıtım faaliyetleri toplamda 2.000.000 TL'ye kadar desteklenir.
              </li>
              <h1 className="font-bold text-xl ">
                Stant Tasarımı ve İkili İş Görüşmeleri
              </h1>
              <li>
                Stant/trend alanı tasarımları Bakanlık onayı gerektirir ve
                Bakanlıkça uygun görülen tasarımlar birebir uygulanmalıdır.
              </li>
              <li>
                İkili iş görüşmeleri için tahsis edilen alan, fuar süresi
                boyunca amacı dışında kullanılamaz.
              </li>
              <h1 className="font-bold text-xl ">
                Başvuru ve Değerlendirme Süreci
              </h1>
              <li>
                Fuar desteği başvuruları, Destek Yönetim Sistemi (DYS) üzerinden
                yapılır ve değerlendirilir.
              </li>
              <li>
                Fuar katılımları ile ilgili gözlemci raporları ve değerlendirme
                formları, destek başvurularının sonuçlandırılmasında önemli rol
                oynar.
              </li>
               <li>
                Tanıtım faaliyetlerine yönelik ön onay başvurularının fuar
                başlangıç tarihinden en geç 1 ay önce yapılması gerekmektedir.
               </li>
            </div>
            <br/>
            {/*SORULAR*/}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Sıkça Sorulan Sorular</h1>
              <h1 className="font-bold text-lg">
                1. Yurt dışı fuar desteği nedir?
              </h1>
              <p>
                <b>Cevap:</b> Yurt dışı fuar desteği, firmaların uluslararası
                fuarlarda kendilerini tanıtmaları ve yeni pazarlar bulmaları
                için verilen mali desteklerdir.
              </p>

              <h1 className="font-bold text-lg">
                2. Destek oranları ve miktarları nelerdir?
              </h1>

              <p>
                <b>Cevap:</b> Genel fuarlarda %50, hedef ülkelerde %70 ve hedef
                sektörlerde %75 oranında destek sağlanır. Destek miktarı genel
                fuarlarda 150.000 TL, sektörel fuarlarda 250.000 TL, prestijli
                fuarlarda ise 750.000 TL’ye kadar çıkabilir.
              </p>
              <h1 className="font-bold text-lg">
                3. Başvurular nasıl yapılır?
              </h1>
              <p>
                <b>Cevap:</b> Destek başvuruları DYS üzerinden yapılır ve değerlendirilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card7 */
}

const EximbankExportCreditInsuranceCompensationSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>
            Eximbank Faiz Oranı ile CIRR Farkı ve İhracat Kredi Sigortası Tazmin
            Desteği
          </li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Eximbank Faiz Oranı ile CIRR Farkı ve İhracat Kredi Sigortası Tazmin
        Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ7}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl ">Faiz Oranı Desteği</h1>

            <li>
              <b>Destek Kapsamı:</b> Eximbank tarafından sağlanan orta ve uzun
              vadeli yatırım malı niteliğindeki ihracat alıcı kredileri (yurt
              içi ve/veya yurt dışı bankalar aracılığıyla kullandırılan alıcı
              kredileri ve iskonto kredileri dahil).
            </li>
            <li>
              <b>Destek Oranı:</b> Eximbank’ın uyguladığı faiz oranı ile CIRR
              (Commercial Interest Reference Rates) arasındaki farka tekabül
              eden faiz giderinin tamamı desteklenir.
            </li>

            <br />
            <h1 className="font-bold text-xl ">
              İhracat Kredi Sigortası Tazmin Desteği
            </h1>
            <h1 className="font-bold text-lg ">
              Reasürans Anlaşması Kapsamında Tazminat Desteği:
            </h1>
            <li>
              <b>Destek Koşulu:</b> Eximbank ihracat kredi sigortası programları
              çerçevesinde sigorta kapsamına alınan ve yıllık olarak düzenlenen
              reasürans anlaşması kapsamında reasüre edilen risklerden doğan
              tazminat ödemelerinde, zarar rasyosunun %60’ın üzerine çıkması
              durumunda.
            </li>
            <li>
              <b>Destek Limiti:</b> %60’ın üzerindeki tazminat tutarlarının
              reasürans anlaşmasında belirlenen Eximbank payına düşen kısmı,
              yıllık en fazla 20.000.000 TL’ye kadar desteklenir.
            </li>
            <br />
            <h1 className="font-bold text-lg ">
              Reasürör Bulunamaması veya Yetersizlik Durumunda Desteği:
            </h1>
            <li>
              <b>Destek Koşulu:</b> Yatırım malı makine ve teçhizat gibi orta ve
              uzun vadeli sigortaya konu mal ihracatında, Eximbank tarafından
              reasürör bulunamaması veya reasürans tutarının yetersiz olması
              durumunda.
            </li>
            <li>
              <b>Destek Oranı:</b> Reasüre edilemeyen tazminat ödemelerinin
              %50’si desteklenir.
            </li>
            <li>
              <b>Destek Limiti:</b> Yıllık en fazla 100.000.000 TL’ye kadar
              desteklenir.
            </li>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
              Başvuru ve Değerlendirme Süreci
            </h1>
            <li>
              <b>Başvuru Şartları:</b> Eximbank, belirlenen belgelerle birlikte
              Bakanlığa başvuruda bulunur. Başvurular, ilgili harcama ve
              faaliyetleri kapsar ve yıllık olarak değerlendirilir.
            </li>
            <li>
              <b>Ödeme Süreci:</b> Bakanlık, destek müracaatlarını değerlendirir
              ve ödeme miktarlarını Türkiye Cumhuriyet Merkez Bankası’na
              bildirir.
            </li>
            <br />
            <h1 className="font-bold text-lg">Önemli Bilgiler</h1>
            <li>
              <b>Başvuru ve Belgeler:</b> Desteklerden yararlanmak için gerekli
              belgeler ve başvuru süreçleri detaylı olarak belirlenmiştir.
            </li>
            <li>
              <b>Yıllık İnceleme:</b> Eximbank, her takvim yılı için yararlandığı
              desteklere yönelik bağımsız denetim kuruluşları tarafından
              denetlenir ve denetim raporlarını Bakanlığa sunar.
            </li>
            <br />
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card8 */
}

const DesignerCompanyAndDesignOfficeSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Tasarımcı Şirket ve Tasarım Ofisi Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Tasarımcı Şirket ve Tasarım Ofisi Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ8}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Destek Oranı ve Limiti</h1>
            <li>
              <b>Destek Oranı:</b> %50
            </li>
            <li>
              <b>Destek Limiti:</b> Yıllık 5.000.000 TL’ye kadar desteklenir.
            </li>
            <li>
              <b>Destek Süresi:</b> 4 yıl boyunca geçerlidir.
            </li>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Desteklenen Giderler</h1>

            <li>
              <b>Marka, Patent ve Tescil Giderleri:</b> Marka, patent, faydalı
              model, endüstriyel tasarım tescili ve marka tescilinin
              yenilenmesi/korunması giderleri.
            </li>
            <li>
              <b>Yurt Dışı Birim Kira ve Kurulum Giderleri:</b> Yurt dışı birim
              kira, temel kurulum, dekorasyon, konsept mimari çalışmaları ile
              birimlerin kiralanmasına ilişkin danışmanlık giderleri, vergi,
              resim ve harç giderleri.
            </li>
            <li>
              <b>İstihdam Giderleri:</b> Tasarımcılar ve modelistlerin istihdam
              giderleri.
            </li>
            <li>
              <b>Danışmanlık ve Eğitim Giderleri:</b> Danışmanlık hizmetleri,
              eğitim ve uluslararası pazarlarda rekabet avantajı sağlamak için
              alınan hizmetler.
            </li>
            <li>
              <b>Fuar ve Tanıtım Faaliyetleri Giderleri:</b> Yurt dışı fuar
              katılımı ve tanıtım faaliyetlerine ilişkin giderler.
            </li>

            <br />
            <h1 className="font-bold text-xl">Desteklenmeyen Giderler</h1>
              <li>
                <b>Türkçe Tanıtım Harcamaları:</b> Yurt dışında Türkçe yapılan
                tanıtım harcamaları.
              </li>
              <li>
                <b>Ulaşım ve Konaklama Giderleri:</b> Ulaşım ve konaklama giderleri
                destek kapsamında değildir.
              </li>
              <li>
                <b>Yurt İçi Tanıtım Harcamaları:</b> Yurt içine yönelik tanıtım
                harcamaları desteklenmez.
              </li>

              <br />
            <br />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card9 */
}

const DesignSupportInTheShipAndYachtIndustry = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Gemi ve Yat Sektöründe Tasarım Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Gemi ve Yat Sektöründe Tasarım Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ9}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg"></h1>

            <p>
              <b>Destek Süresi ve Oranı: </b>5 yıl boyunca %50 oranında
            </p>

            <p>
              <b>Üst Limit:</b>Yıllık 3.000.000 TL
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
              Destek Oranları ve Üst Limitler:
            </h1>
            
              <h1 className="font-bold text-lg">
                Tasarım ve Ürün Geliştirme Projeleri
              </h1>
              <li>
                <b>Personel Giderleri:</b>Tasarımcı, modelist ve mühendislerin
                brüt maaş giderleri (10 kişi için 3.000.000 TL'ye kadar)
              </li>
              <li>
                <b>Alet, Teçhizat, Malzeme ve Yazılım Giderleri:</b> 1.500.000
                TL'ye kadar
              </li>
              <li>
                <b>İnternet Sitesi Üyeliği Giderleri:</b> 500.000 TL'ye kadar
              </li>
              <li>
                <b>Destek Oranı: </b> %50
              </li>
              <li>
                
                <b>Yıllık İhracatın Yarısından Fazla Destek Verilmez</b>
              </li>
              <li>
                <b>Her Şirket Sadece Bir Proje İçin Destek Alabilir</b>
              </li>
              <li>
                <b>
                  İstihdam Edilen Tasarımcılardan En Fazla İkisi Yabancı
                  Olabilir
                </b>
              </li>
              {/* 
              TASARIMCI ŞİRKET VE TASARIM OFİSİ DESTEĞİ İLE NEREDEYSE AYNI ŞEYLER YAZIYOR!!!!!!!!*/}
              <br />
            
            <h1 className="font-bold text-lg">
              Tasarım ve Ürün Geliştirme Projesi Destek Kapsamına Alınma
            </h1>

            
              <li>
                Proje başvurusu Bakanlığa iletildiği tarih itibarıyla geriye
                dönük en fazla 6 ay süreyle şirkette çalışmakta olan
                tasarımcı/modelist/mühendis yeni istihdam olarak kabul edilir.
              </li>
              <li>
                Destek başvuruları; mezun olunan eğitim programı, görev tanımı
                ve iş sözleşmesinin kapsamı göz önünde bulundurularak
                değerlendirilir.
              </li>
              <li>
                Destek kapsamında değerlendirilen harcamalar sadece proje
                kapsamındaki faaliyetlerle sınırlıdır.
              </li>

              <br />
            
            <br />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">
                Alet, Teçhizat, Malzeme ve Yazılım Giderleri
              </h1>
              
                <li>
                  Proje kapsamında onaylanan alet, teçhizat ve malzemelerin
                  satın alma giderleri desteklenir.
                </li>
                <li>
                  Tasarım ve ürün geliştirme süreçlerine ilişkin yazılım
                  ürünleri ile ilgili harcamalar da destek kapsamındadır.
                </li>
                <li>
                  <li>
                    İnternet sitesi üyeliği giderleri, sektöre özgü yeni tasarım
                    ve trendlerin yer aldığı üyelikler için desteklenir.
                  </li>
                </li>
              
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Proje Süresi ve Revizyon</h1>
              <li>
                Projeler 3 yıllık süreyle desteklenir ve bu süre 2 yıl
                uzatılabilir.
              </li>
              <li>
                Destek süresi boyunca en fazla 3 kez revize başvurusunda
                b.!!!!!!!
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card10 */
}

const MultiChannelChainStoreSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Çok Kanallı Zincir Mağaza Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Çok Kanallı Zincir Mağaza Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ10}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Oranı ve Süresi</h1>

            <p>
              Franchise/birimlere yönelik yurt dışı marka
              tescil/yenileme/koruma, pazar araştırması, kira, tanıtım, temel
              kurulum/konsept mimari çalışma/dekorasyon giderleri %50 oranında
              ve yıllık 180.000.000 TL’ye kadar 5 yıl süresince desteklenir.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Performans Değerlendirmesi</h1>
            <p>
              <li>
                5 yıllık destek süresi sonunda, Bakanlıkça yapılacak performans
                değerlendirmesi sonucu şirketlerin destek süresi bir defaya
                mahsus 5 yıl daha uzatılabilir.
              </li>

              
              <br />
            </p>
            <h1 className="font-bold text-lg">Franchise Destek Süresi</h1>

            <p>
              Şirketlerin destek kapsamına alınan franchise/birimlerinin
              bulunduğu ülkeye yönelik giderleri, şirketin destek süresi sona
              erdiğinde franchise/birim başına toplamda 5 yılı aşmamak kaydıyla
              desteklenmeye devam eder. Bu süre franchise/birimin destek
              kapsamına alındığı tarihten itibaren başlar.
            </p>
            <br />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">
                Satın Alınan Yabancı Mağazalar
              </h1>
              <p>
                <li>
                  Satın alınan yabancı çok kanallı zincir mağazalar
                  desteklenmez.
                </li>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Çakışan Destekler</h1>
              <li>
                Desteklenen şirket, destek süreleri boyunca belirli diğer
                desteklerden yararlandırılmazlar.
              </li>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


{
  /*card11 */
}
const URGEProjectSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>UR-GE Projesi Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        UR-GE Projesi Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ11}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Oranı ve Tutarı</h1>

            <p>
              İşbirliği kuruluşlarının UR-GE projelerine ilişkin ihtiyaç
              analizi, eğitim, danışmanlık ve tanıtım faaliyetleri %75 oranında
              ve proje bazında 6.000.000 TL’ye kadar desteklenir.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Uzman Personel İstihdamı</h1>
            <p>
              Proje faaliyetlerinin organizasyonu için işbirliği kuruluşları
              tarafından istihdam edilen en fazla 2 uzman personelin proje
              süresince yapılacak istihdam giderlerinin %75’i desteklenir.
              <br />
            </p>
            <h1 className="font-bold text-lg">
              Yurt Dışı Pazarlama Faaliyetleri
            </h1>

           
              <li>
                UR-GE projeleri kapsamında düzenlenecek azami 10 adet yurt dışı
                pazarlama faaliyetinin ulaşım, konaklama, tanıtım ve
                organizasyon giderleri faaliyet başına 2.500.000 TL’ye kadar %75
                oranında desteklenir.
              </li>
              <li>
                Azami 10 adet alım heyeti faaliyetinin ulaşım, konaklama,
                tanıtım ve organizasyon giderleri faaliyet başına 1.500.000
                TL’ye kadar %75 oranında desteklenir.
              </li>
            
            <br />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">
                Sanal Yurt Dışı Pazarlama Faaliyetleri
              </h1>
              
                <li>
                  UR-GE projeleri kapsamında düzenlenecek azami 10 adet sanal
                  yurt dışı pazarlama faaliyetinin giderleri faaliyet başına
                  800.000 TL’ye kadar %75 oranında desteklenir.
                </li>
              
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Bakanlık Yetkilendirilmesi</h1>
              <li>
                UR-GE projelerinin işleyişinin geliştirilmesine yönelik
                Bakanlıkça yetkilendirilen işbirliği kuruluşları tarafından
                gerçekleştirilecek faaliyetlere ilişkin giderlerin tamamı yıllık
                en fazla 4.000.000 TL’ye kadar desteklenir.
              </li>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Proje Süresi</h1>
              <li>
                UR-GE projelerinin süresi 3 yıldır. Proje süresine, projenin
                performansına göre 2 yıla kadar ilave süre verilebilir.
              </li>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Şirket Katılımı</h1>
              <li>
                Bir şirket en fazla 3 UR-GE projesinde katılımcı olarak yer
                alabilir.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card12 */
}
const SectoralTradeDelegationAndProcurementDelegationSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Sektörel Ticaret Heyeti ve Alım Heyeti Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Sektörel Ticaret Heyeti ve Alım Heyeti Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ12}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Oranı ve Miktarı</h1>

            
              <li>
                İşbirliği kuruluşlarınca düzenlenen sektörel ticaret heyeti
                faaliyetlerine ilişkin ulaşım, konaklama, tanıtım ve
                organizasyon giderleri %50 oranında ve faaliyet başına 1.500.000
                TL’ye kadar desteklenir.
              </li>
              <li>
                İşbirliği kuruluşlarınca düzenlenen sektörel alım heyeti
                faaliyetlerine ilişkin ulaşım, konaklama, tanıtım ve
                organizasyon giderleri %50 oranında ve faaliyet başına 1.250.000
                TL’ye kadar desteklenir.
              </li>
            
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
              Destek Kapsamına Giren Giderler
            </h1>
            
              <li>
                <b>Ulaşım:</b> Ekonomi sınıfı uçak, tren, gemi, otobüs biletleri
                ve toplu taşımaya yönelik araç kiralama giderleri.
                (oda+kahvaltı).
              </li>
              <li>
                <b>Konaklama:</b> Günlük kişi başı 2.500 TL’yi geçmemek kaydıyla
                konaklama giderleri
              </li>
              <li>
                <b>Tanıtım ve Organizasyon:</b> Tercümanlık, seminer, konferans,
                toplantı, ikili görüşme organizasyonları, şirket eşleştirme,
                fuar katılımı, görsel ve yazılı tanıtım, internet ve sosyal
                medya tanıtımları, halkla ilişkiler hizmetleri, katalog, broşür,
                eşantiyon, tanıtım malzemeleri, sergileme ünitelerinin
                kiralanması ve nakliye giderleri.
              </li>

              <br />
            
            <h1 className="font-bold text-lg">Desteklenmeyecek Hususlar</h1>

            
              <li>
                Azami 10 adet alım heyeti faaliyetinin ulaşım, konaklama,
                tanıtım ve organizasyon giderleri faaliyet başına 1.500.000
                TL’ye.
              </li>
              <li>İkili iş görüşmesi içermeyen programlar.</li>
              <li>
                Organik bağı olan şirketlerin birbirleri yerine heyete katılımı.
              </li>
              <li> Heyet tarihleri dışında yapılan ulaşım harcamaları.</li>
              <li> Ekonomi sınıfı dışındaki uçak bileti bedelleri.</li>
              <li>
                Sadece fuar ziyareti veya yerinde pazar araştırması olarak
                düzenlenen programlar.
              </li>
            
            <br />
            <div className="flex flex-col gap-">
              <h1 className="font-bold text-lg ">Başvuru ve Değerlendirme</h1>
              
                <li>
                  İşbirliği kuruluşları, sektörel ticaret heyeti ve alım heyeti
                  programları için, program başlangıç tarihinden en az 3 ay önce
                  Destek Yönetim Sistemi (DYS) üzerinden Bakanlığa başvuru
                  yapmalıdır.
                </li>
                <li>
                  Eksik belgeler bildirim tarihinden itibaren en geç 3 ay içinde
                  tamamlanmalıdır.
                </li>
                <li>
                  Başvuruların içerik, şekil ve bütünlük açısından incelenmesi
                  sonucunda onaylanabilir, değişiklik talebinde bulunulabilir
                  veya reddedilebilir.
                </li>
              
              <br/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Ödeme Başvurusu</h1>
              <li>
                Destek ödeme başvuruları, faaliyet bitiş tarihinden itibaren en
                geç 3 ay içinde yapılmalıdır.
              </li>
              <li>
                Destek başvurularının değerlendirilmesi için giderlerin ödeme
                belgesi ve diğer belgelerle tevsik edilmesi gerekmektedir.
              </li>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card13 */
}
const TurqualityPromotionProjectSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>TURQUALITY® Tanıtım Projesi Desteği </li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        TURQUALITY® Tanıtım Projesi Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ13}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Destek Oranı ve Miktarı</h1>

            <li>
              <b>İhracatçı Birlikleri: </b>İhracatçı birliklerinin yurt dışı
              pazarlarda tanıtım, danışmanlık ve pazar araştırması çalışmaları
              için giderleri %75 oranında ve proje başına yıllık en fazla
              12.000.000 TL tutarında desteklenir.
            </li>
            <li>
              <b>Türkiye İhracatçılar Meclisi ve Bölgesel Birlikler:</b> TİM ve
              sektörü tek başına temsil eden ihracatçı birlikleri için %75
              oranında ve proje başına yıllık en fazla 22.500.000 TL tutarında
              desteklenir.
            </li>
            <li>
              <b>Ortak Projeler:</b> Birden fazla ihracatçı birliği tarafından
              oluşturulan ortak projeler için %75 oranında ve ihracatçı birliği
              başına yıllık en fazla 12.000.000 TL tutarında, proje başına en
              fazla dört yıl süresince desteklenir. desteklenir.
            </li>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Proje Sayısı ve Süresi</h1>

            <li>
              İhracatçı birlikleri aynı anda en fazla 2 proje için tanıtım
              desteğinden yararlanabilir.
            </li>
            <li>
              Türkiye İhracatçılar Meclisi ve iştigal ettiği sektörü tek başına
              temsil eden ihracatçı birlikleri ve bölgesel birlikler aynı anda
              en fazla 4 proje için desteklenir.
            </li>

            <br />

            <h1 className="font-bold text-lg">Desteklenen Faaliyetler</h1>

            <li>
              Tanıtım faaliyetleri, danışmanlık hizmetleri, pazar araştırması
              çalışmaları ve raporlar.
            </li>
            <li>
              Prodüksiyon giderleri, tanıtım faaliyetlerinin yurt dışında
              yayımlandığının tevsik edilmesi durumunda desteklenir.
            </li>
            <li>
              Organik bağı olan şirketlerin birbirleri yerine heyete katılımı.
            </li>
            <li>
              Tanıtım malzemelerinin yurt dışına gönderilmesiyle ilgili nakliye
              bedelleri.
            </li>
            <li>
              Yurt içinde düzenlenen tanıtım faaliyetleri, Türkçe yapılan
              tanıtımlar ve yurt dışındaki Türkçe yayın organlarında yayımlanan
              tanıtımlar desteklenmez.
            </li>
            <br />
            <div className="flex flex-col gap-">
              <h1 className="font-bold text-lg ">Başvuru ve Değerlendirme</h1>

              <li>
                Proje başvuruları, TİM/ihracatçı birlikleri tarafından Bakanlığa
                sistem üzerinden yapılmalıdır.
              </li>
              <li>
                Bakanlık, başvuruları içerik, şekil ve bütünlük açısından
                inceler ve onaylar, değişiklik önerilerinde bulunabilir veya
                reddedebilir.
              </li>
              <li>
                Proje başvuruları, ilgili Bakanlık yurt dışı temsilcisinin görüş
                ve değerlendirmesine sunulabilir..
              </li>

              <br />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">Ödeme ve Belgeler</h1>
              <li>
                Proje kapsamında yapılan harcamaların desteklenebilmesi için
                ödeme belgeleri ve diğer belgelerin sistem üzerinden ibraz
                edilmesi gerekmektedir.
              </li>
              <li>
                Ödeme belgelerinde banka onayı aranmaz, ancak uluslararası
                standartlarda bankacılık sisteminin yerleşmediği ülkelerde
                yapılan ödemeler için ilgili Bakanlık yurt dışı temsilcisinin
                onayı gerekmektedir.
              </li>
              <br />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg ">
                Eksik Belgelerin Tamamlanması
              </h1>
              <li>
                Eksik belgelerin tamamlanması için incelemeci kuruluş
                tarafından istenen bilgi ve belgelerin 1 yıllık süre içerisinde
                tamamlanması gerekmektedir.
              </li>
              <li>
                Talep edilen eksik bilgi ve belgelerin süresi içinde
                tamamlanmaması halinde mevcut evraklar üzerinden işlem yapılır.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card13 */
}
const BrandAndTurqualiyupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Marka ve TURQUALITY® Desteği </li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Marka ve TURQUALITY® Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ14}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Destek Programı Kapsamı </h1>
            
            <p>
              <b>Marka Destek Programı:</b> Patent, faydalı model, endüstriyel
              tasarım tescili, pazara giriş belgesi, ruhsatlandırma, istihdam,
              danışmanlık giderleri, yurtdışı marka tescil/yenileme/koruma,
              pazar araştırması, klinik test, tanıtım, fuar, depolama hizmeti,
              birim kira, temel kurulum, konsept mimari çalışma ve franchise
              giderleri 4 yıl boyunca %50 oranında desteklenir.
              <br />
              <br />
              <b>TURQUALITY® Destek Programı:</b>
              Marka destek programı kapsamındaki harcamaların yanı sıra, hedef
              pazarlara yönelik faaliyet giderleri ve kurumsal altyapı oluşturma
              giderleri 5 yıl boyunca %50 oranında desteklenir.
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              Hedef Pazar ve Kurumsal Altyapı Desteği
            </h1>
            
            <li>
              <b>Hedef Pazarlara Yönelik Destekler:</b> TURQUALITY® programına
              alınan markaların hedef pazarlardaki faaliyet giderleri, her bir
              hedef pazar için 5 yıl süreyle desteklenir.
            </li>
            <li>
              <b>Kurumsal Altyapı Desteği:</b> TURQUALITY® kapsamında alınan
              şirketlerin kurumsal altyapı oluşturma faaliyetleri ve istihdam
              giderleri ilk 5 yıl boyunca desteklenir.
            </li>
            <br />
            
            <h1 className="font-bold text-xl">
              Program Değişiklikleri ve Devamlılık
            </h1>
            
            <p>
              <b>Program Süresi ve Uzatılması:</b> Marka destek programı
              kapsamında desteklenen şirketlerin/markaların TURQUALITY®
              programına geçiş yapmaları durumunda, Marka Destek Programı
              kapsamında desteklendikleri toplam süre, TURQUALITY® destek
              süresinden mahsup edilerek hesaplanır.
              <br />
              <br />
              <b>Çoğunluk Hisselerinin Satılması Durumu:</b> TURQUALITY®/marka
              destek programına alınan şirketlerin çoğunluk hisselerinin
              (%50’den fazlası) satılması durumunda, devir alan şirketin,
              program kapsamındaki projeleri ve faaliyetleri sürdüreceğine dair
              taahhütname vermesi gerekir. Aksi halde, destek kapsamından
              çıkarılırlar.
            </p>
            <br />
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl ">
                Destek Kapsamı Dışında Kalan Durumlar
              </h1>
             
              <p>
                <b>Yabancı Markaların Satın Alınması:</b> Satın alınan yabancı
                markalar bu destekten yararlanamaz.
                <br />
                <br />
                <b>Diğer Desteklerden Yararlanma Kısıtlaması:</b>{" "}
                TURQUALITY®/marka destek programına alınan şirketler, program
                süresi boyunca belirli diğer desteklerden yararlanamazlar.
                <br />
              </p>
              <br />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg ">
                Destek Başvuruları ve Yürütme
              </h1>

              <p>
                <b>Başvuru ve Ön İnceleme:</b> Başvuru yapan şirketlerin,
                TURQUALITY® programı yönetim danışmanlığı firmaları tarafından
                yapılan ön inceleme çalışmalarından geçmesi gerekir. Uygun
                bulunmayan şirketler, yeniden başvuru yapabilirler.
                <br />
                <br />
                <b>Performans Değerlendirmesi:</b> Bakanlık, destek kapsamındaki
                şirketlerin yurt dışındaki faaliyetlerini yerinde inceleyebilir
                ve performanslarını değerlendirerek destek süresinin devamına
                karar verebilir.
              </p>
              <br />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card15 */
}
const CompanyAndBrandAcquisitionSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Şirket ve Marka Alım Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Şirket ve Marka Alım Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ15}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Destek Oranı ve Limiti </h1>

            <p>
              <b>Mali ve Hukuki Danışmanlık Desteği:</b> Yurt dışında yerleşik
              şirketlerin veya markaların alımına yönelik mali ve hukuki
              danışmanlık hizmetleri %50 oranında ve yıllık 3.000.000 TL’ye
              kadar desteklenir. İleri teknolojiye sahip ve teknoloji transferi
              sağlayacak şirketlerde bu limit 7.500.000 TL’ye kadar çıkabilir.
              <br />
            </p>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Kredi Faiz Giderleri Desteği</h1>

            <li>
              <b>İleri Teknoloji Şirketleri:</b> İleri teknolojiye sahip yurt
              dışı şirketlerin alımında kullanılan kredi faiz giderlerinin Türk
              Lirası cinsi kredilerde 5 puanı, döviz kredileri ve dövize
              endeksli kredilerde 2 puanı toplam 45.000.000 TL’ye kadar
              desteklenir.
            </li>
            <li>
              <b>Marka Alımı:</b> Yurt dışında yerleşik bir şirkete ait markanın
              alımında kullanılan kredi faiz giderlerinin Türk Lirası cinsi
              kredilerde 5 puanı, döviz kredileri ve dövize endeksli kredilerde
              2 puanı toplam 30.000.000 TL’ye kadar desteklenir.
            </li>
            <br />

            <h1 className="font-bold text-xl">Faiz Desteği Detayları</h1>
            <li>
              <b>Maksimum Destek Oranı:</b> Faiz desteği, ödenen faiz giderinin
              %50’sini aşamaz.
            </li>
            <li>
              <b>Destek Süresi:</b> Faiz desteği, ilk faiz ödeme tarihinden
              itibaren 5 yıl içerisinde gerçekleştirilen faiz ödemelerine
              verilir.
            </li>
            <li>
              <b>Kredi Tutarı Hesaplaması:</b> Faiz desteği verilecek kredi
              tutarının hesaplanmasında, yurt dışında yerleşik ileri teknolojiye
              sahip şirketlerin veya markaların alım bedelinin azami %50’si esas
              alınır.
            </li>

            <br />
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl ">Başvuru Süreci</h1>
              <li>
                <b>Danışmanlık Hizmetleri İçin:</b> Destekten yararlanmak
                isteyen şirketler, yurt dışında yerleşik şirket veya marka
                alımlarına yönelik danışmanlık hizmetleri için gerekli
                belgelerle birlikte Destek Yönetim Sistemi (DYS) üzerinden
                Bakanlığa başvuru yapmalıdır.
              </li>
              <li>
                <b>Kredi Faiz Desteği İçin:</b> Kredi faiz giderlerinin
                desteklenmesi için şirket değerleme raporu sunulmalıdır. Bu
                rapor, Bakanlık tarafından yetkilendirilmiş danışmanlık
                firmaları tarafından hazırlanmalıdır.
              </li>
              <li>
                <b>Değerlendirme Kriterleri:</b> Başvurular, uluslararasılaşma,
                ihracat artışı, yurt dışı marka bilinirliğinin geliştirilmesi,
                yurt dışı pazar payının artırılması ve Türkiye’ye teknoloji
                transferi sağlanması gibi kriterler göz önünde bulundurularak
                değerlendirilir.
              </li>

              <br />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl ">Önemli Notlar</h1>
              <li>
               <b>Başvuru Şartları:</b> Destekten yararlanmak isteyen şirketlerin
                belirli süreler içinde gerekli belgeleri tamamlaması ve
                başvurularını DYS üzerinden gerçekleştirmesi gerekmektedir.
              </li>
              <li>
                <b>Faiz Desteği Başvuruları:</b> Faiz ödemelerine ilişkin ödeme
                başvuruları 3 aylık periyotlar halinde yapılmalıdır.
              </li>
              <li>
                <b>Kredi Kartı İle Ödemeler:</b> Kredi kartı ile yapılan
                ödemeler, bankacılık sistemi içinde tevsik edilebilmesi şartıyla
                kabul edilir.
              </li>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card16 */
}
const GlobalSupplyChainSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Küresel Tedarik Zinciri Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Küresel Tedarik Zinciri Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ16}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              Küresel Tedarik Zinciri Yetkinlik Projesi Desteği
            </h1>
            <li>
              <b>Destek Oranı ve Limiti:</b> Şirketlerin makine, ekipman,
              donanım ve yazılım alımı; eğitim, danışmanlık, sertifikasyon,
              test/analiz ve ürün doğrulama giderleri 2 yıl boyunca %50 oranında
              ve şirket başına 15.000.000 TL’ye kadar desteklenir.
            </li>
            <li>
              <b>Proje Sınırlaması:</b> Bir şirketin sadece 1 adet küresel
              tedarik zinciri yetkinlik projesi desteklenir.
            </li>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              Yurt Dışı Depo ve Depolama Hizmetleri Desteği
            </h1>

            <li>
              <b> Destek Oranı ve Limiti:</b> Yurt dışı ana sanayiye orijinal
              parça üreten şirketlerin Türkiye’de üretilen ürünlerinin
              pazarlandığı yurt dışı depo kira gideri ve depolama hizmetlerine
              ilişkin giderler %50 oranında ve yıllık en fazla 4.000.000 TL’ye
              kadar desteklenir.{" "}
            </li>
            <li>
              <b>Destek Süresi:</b> Her bir ülke için en fazla 4 yıl
              yararlanılabilir.
            </li>
            <li>
              <b>Birim Sınırlaması:</b> Bir şirket, bu destekten en fazla 25
              birim için yararlanabilir.
            </li>
            <br />

            <h1 className="font-bold text-xl">Desteklenmeyen Giderler</h1>
            <li>
              <b>Kurulum ve Nakliye Giderleri:</b> Destek kapsamında değildir.
            </li>
            <li>
              <b>İlişkili Kişi Giderleri:</b> Faturayı düzenleyen tarafla
              ilişkili kişi olmamalıdır.
            </li>

            <br />
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card17 */
}
const UnitRentalSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Birim Kira Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Birim Kira Desteği
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ17}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Destek Oranı ve Limiti</h1>
            <li>
              <b>Kira Giderleri:</b> Türkiye’de üretilen ürünlerin pazarlandığı
              yurt dışı birimlerin kira giderleri ile paylaşımlı ofislere
              ilişkin üyelik giderleri her bir birim başına yıllık 2.000.000
              TL’ye kadar %50 oranında desteklenir.
            </li>
            <li>
              <b>Destek Süresi:</b> Şirketler, kira gideri desteğinden her bir
              ülke için en fazla 4 yıl yararlanabilir.
            </li>
            <li>
              <b>Birim Sınırlaması:</b> Bir şirket, bu destekten en fazla 25
              birim için yararlanabilir.
            </li>
            <br/>
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Destek Şartları</h1>

            <li>
              <b>İlişkili Kişiler:</b> • Kiraya veren ile kiralayan şirketin
              ilişkili kişi olmaması ve kiralanan yerin konut olarak
              kullanılmaması gerekmektedir.
            </li>
            <li>
              <b>Ürün Koşulu:</b> Desteklenen birimlerde Türkiye’de üretilen
              ürünlerin pazarlanması zorunludur. Yabancı markalar için yurt
              içinde fason olarak üretilen ürünlerin pazarlandığı birimlerin
              kira giderleri desteklenmez.
            </li>
            <li>
              <b>Paylaşımlı Ofisler:</b> Paylaşımlı ofislerin desteklenebilmesi
              için sunulan kira/hizmet/üyelik/abonelik sözleşmesinde
              yararlanılan hizmetlerin belirtilmesi gerekir. Yalnızca üyelik
              şeklindeki giderler desteklenir.
            </li>
            <br />

           

            <br />
            <h1 className="font-bold text-xl">Başvuru Süreci</h1>
            <li>
              <b> Başvuru Şartları:</b> Şirketler, gerekli belgelerle birlikte
              Destek Yönetim Sistemi (DYS) üzerinden ödeme belgesi tarihinden
              itibaren 6 ay içerisinde incelemeci kuruluşa başvurularını
              yapmalıdır.
            </li>
            <li>
              <b>Eksik Tamamlama:</b> Eksik bilgi ve belgelerin tamamlanması
              için 3 ay süre verilir. Bu sürenin sonunda eksiklikler
              tamamlanmazsa başvuru değerlendirmeye alınmaz.
            </li>
            <li>
              <b>Yerinde İnceleme:</b> Bakanlık yurt dışı temsilcisi, destek
              kapsamına alınan birimlerde her yıl yerinde inceleme yaparak
              değerlendirmesini ilgili kuruluşa iletir.
            </li>
            <br/>
            <h1 className="font-bold text-xl">Desteklenmeyen Giderler</h1>
            <li>
              <b> Ülke Menşei:</b> Kiralanan birimlerde Türk Malı imajına zarar
              verecek şekilde ülke menşeini farklı gösteren ifadeler
              kullanılamaz.
            </li>
            <li>
              <b>İthal Ürünler:</b> Destek talebine konu birimin bulunduğu
              ülkeden birimde pazarlanan ürünlere ilişkin Türkiye’ye ithalat
              olması halinde bu birime ilişkin giderler desteklenmez.
            </li>
            <br/>

            <h1 className="font-bold text-xl">Diğer Hususlar</h1>
            <li>
              <b> Süre:</b> 4 yıllık destek süresinin hesaplanmasında, ilk
              birimin ilk destek ödemesine esas teşkil eden ödeme belgesine
              ilişkin kira dönemi esas alınır.
            </li>
            <li>
              <b>Kira Tutarı:</b> Kira desteği için net kira tutarının kira
              sözleşmesinde açık bir şekilde belirtilmesi zorunludur.
            </li>
            <li>
              <b>Yerinde İnceleme:</b> Bakanlık yurt dışı temsilcisi, destek
              kapsamına alınan birimlerde her yıl yerinde inceleme yaparak
              değerlendirmesini ilgili kuruluşa iletir.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*card18 */
}
const PromotionalSupport = () => {
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
          <li>
            <a href="/ihracat-destekleri/ihracat-desteklerii">
              Mal İhracat Destekleri
            </a>
          </li>
          <li>Tanıtım Desteği</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">Tanıtım Desteği</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 px-5 lg:px-20">
        <div className="relative">
          <img
            className="rounded-box sticky top-20"
            src={malİ18}
            alt="sürdürülebilirlik"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          {/* Amaç ve Kapsam */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Destek Oranı ve Limiti</h1>
            <h1 className="font-bold text-lg">
              Yurt Dışı Birimi Bulunan Şirketler
            </h1>
            <li>
              <b>Destek Oranı:</b> %50
            </li>
            <li>
              <b>Destek Limiti:</b> Yurt dışında gerçekleştirilen tanıtım ve
              pazarlama giderleri için yıllık 2.500.00TL'ye kadar desteklenir.
            </li>
            <br />
            <h1 className="font-bold test-lg">
              Yurt Dışı Birimi Olmayan Şirketler(Marka Tescilli Koşuluyla)
            </h1>
            <li>
              <b>Destek Oranı:</b> %50
            </li>
            <li>
              <b>Destek Limiti:</b>Yurt dışında gerçekleştirilen tanıtım ve
              pazarlama giderleri için yıllık en fazla 2.500.000TL'ye kadar
              desteklenir.
            </li>
            <li>
              <b>Şartlar:</b>Türkiye'de marka tescil belgesi bulunması ve
              tanıtım yapılacak ülkede marka tescil belgesine sahip olunması
              veya başvurulması olması gerekmekteri.
            </li>
            <br />
            <h1 className="font-bold text-lg">
              Yurt Dışı Birimi Olmayan Şirketler(Yüksek Limitli):
            </h1>
            <li>
              <b>Destek Oranı:</b> %50
            </li>
            <li>
              <b>Destek Limiti:</b> Yurt dışında gerçekleştirilen tanıtım ve
              pazarlama giderleri için yıllık en fazla 4.000.000TL'ye kadar
              desteklenir.
            </li>
            <li>
              <b>Şartlar:</b>Türkiye'de marka tescil belgesi bulunması ve
              tanıtım yapılacak ülkede marka tescil belgesine sahip olunması
              veya başvurulmuş olması gerekmektedir.
            </li>
            <br />
          </div>
          {/* Bilgilendirme */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Destek Süresi</h1>
            <li>
              <b>Süre:</b> Şirketler tanıtım desteğinden en fazla 4 yıl
              yararlanabilir.
            </li>
            <br />
            <h1 className="font-bold text-xl">
              Başvuru ve Değerlendirme Süreci
            </h1>
            <li>
              <b> Başvuru Şartları:</b> Şirketler, gerekli belgelerle birlikte
              Destek Yönetim Sistemi (DYS) üzerinden ödeme belgesi tarihinden
              itibaren 6 ay içerisinde incelemeci kuruluşa başvurularını
              yapmalıdır.
            </li>
            <li>
              <b>Eksik Tamamlama:</b> Eksik bilgi ve belgelerin tamamlanması
              için 3 ay süre verilir. Bu sürenin sonunda eksiklikler
              tamamlanmazsa başvuru değerlendirmeye alınmaz.
            </li>
            <li>
              <b>Yerinde İnceleme:</b> Bakanlık yurt dışı temsilcisi, destek
              kapsamına alınan birimlerde her yıl yerinde inceleme yaparak
              değerlendirmesini ilgili kuruluşa iletir.
            </li>
            <br />
            <h1 className="font-bold text-xl">Desteklenen Giderler</h1>
            <li>
              <b> Başvuru Şartları:</b> Şirketler, gerekli belgelerle birlikte
              Destek Yönetim Sistemi (DYS) üzerinden ödeme belgesi tarihinden
              itibaren 6 ay içerisinde incelemeci kuruluşa başvurularını
              yapmalıdır.
            </li>
            <li>
              <b>Eksik Tamamlama:</b> Eksik bilgi ve belgelerin tamamlanması
              için 3 ay süre verilir. Bu sürenin sonunda eksiklikler
              tamamlanmazsa başvuru değerlendirmeye alınmaz.
            </li>
            <li>
              <b>Yerinde İnceleme:</b> Bakanlık yurt dışı temsilcisi, destek
              kapsamına alınan birimlerde her yıl yerinde inceleme yaparak
              değerlendirmesini ilgili kuruluşa iletir.
            </li>
            <br />
            <h1 className="font-bold text-xl">Desteklenmeyen Giderler</h1>
            <li>
              <b>Reklam ve Tanıtım:</b> Yurt dışında gerçekleştirilen reklam,
              tanıtım ve pazarlama faaliyetleri.
            </li>
            <li>
              <b>Prodüksiyon Giderleri:</b>Tanıtım faaliyetlerinin prodüksiyon
              giderleri, faaliyet yurt dışında yayımlandığında desteklenir.
            </li>
            <li>
              <b>Pop-Up Mağazacılık:</b> Kira, organizasyon ve geçici
              mağazacılığa özgü diğer giderler desteklenir.
            </li>
            <br />
            <h1 className="font-bold text-xl">Desteklenmeyen Giderler</h1>
            <li>
              <b> Ulaşım, Konaklama ve Yemek Giderleri:</b> Bu giderler destek
              kapsamında değildir.
            </li>
            <li>
              <b>Türkçe Tanıtım Harcamaları:</b> Yurt dışında Türkçe yapılan
              tanıtım harcamaları desteklenmez.
            </li>
            <li>
              <b>Yurt İçine Yönelik Tanıtım Harcamaları:</b> Desteklenmez.
            </li>
            <br />
            <h1 className="font-bold text-xl">Desteklenmeyen Giderler</h1>
            <li><b>Ödeme Başvurusu:</b> Gerekli belgelerle birlikte, ödeme
            belgesi tarihinden itibaren 6 ay içinde başvuru yapılmalıdır.</li>
            
            <li><b>Banka Onaylı Belgeler:</b>Destek ödemeleri, şirket hesabından
            bankacılık kanalıyla yapılmalıdır. Banka onaylı hesap ekstresi ödeme
            belgesi olarak kabul edilir.</li>
            <li><b>Uluslararası Standartlarda Ödemeler</b>Bankacılık sisteminin yerleşmediği ülkelerde yapılan ödemeler,
            ilgili Bakanlık yurt dışı temsilcisinin onayıyla desteklenebilir.</li>
          </div>
        </div>
      </div>
    </div>
  );
};



const ExportSupportsDetailInDetailPage = () => {
  const { id2 } = useParams();

  const PickPage = () => {
    switch (id2) {
      case "pazara-giris-belgesi-destegi":
        return <KosgebGreenSupportss />;
      case "yurt-disi-marka-tescil-destegi":
        return <KosgebGreenSupports />;
      case "pazara-giris-projesi-hazirlama-destegi":
        return <MarketEntryProjectPreparationSupport />;
      case "yurt-disi-pazar-araştirmasi-destegi" /*Card4*/:
        return <ForeignMarketResearchSupport />;
      case "yurt-ici-fuar-destegi" /*Card5*/:
        return <DomesticFairSupport />;
      case "yurt-disi-fuar-destegi":
        return <InternationalFairSupport />;
      case "eximbank-ihracat-kredi-sigortasi-tazmin-destegi":
        return <EximbankExportCreditInsuranceCompensationSupport />;
      case "tasarim-sirket-ve-tasarim-ofisi-destegi":
        return <DesignerCompanyAndDesignOfficeSupport />;
      case "gemi-ve-yat-sektorunde-tasarim-destegi":
        return <DesignSupportInTheShipAndYachtIndustry />;
      case "cok-kanalli-zincir-magaza-destegi":
        return <MultiChannelChainStoreSupport />;
      case "ur-ge-projesi-destegi":
        return <URGEProjectSupport />;
      case "sektorel-ticaret-heyeti-ve-alim-heyeti-destegi":
        return <SectoralTradeDelegationAndProcurementDelegationSupport />;
      case "turquality-tanitim-projesi-destegi":
        return <TurqualityPromotionProjectSupport />;
      case "marka-ve-turquality-destegi":
        return <BrandAndTurqualiyupport />;
      case "sirket-ve-marka-alim-destegi":
        return <CompanyAndBrandAcquisitionSupport />;
      case "kuresel-tedarik-zinciri-destegi":
        return <GlobalSupplyChainSupport />;
      case "birim-kira-destegi":
        return <UnitRentalSupport />;
      case "tanitim-destegi":
        return <PromotionalSupport />;

    }
  };

  return <PickPage />;
};

export default ExportSupportsDetailInDetailPage;
