import { useParams } from 'react-router-dom';
import BlogBanner from '../images/DijitalDonusumBanner.jpg';
import officeImage from '../images/ofis.webp';
import carbonFootprintImage from '../images/carbonFootprint.webp';
import isoImage from '../images/ISO1.webp';
import esrsImage from '../images/esrs.webp';
import carbonCreditImage from '../images/carbonCredit.webp';

const BlogDetailPage = () => {
    const { id } = useParams();

    const ZeroWaste = () => {
        return (
            <>
                <div className="text-base lg:text-lg breadcrumbs pb-8 w-full">
                    <ul>
                        <li><a href='/'>Anasayfa</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li>Sıfır Atık: Gelecek Nesillere Temiz Bir Dünya Bırakmak</li>
                    </ul>
                </div>
                <h1 className='text-2xl lg:text-6xl'>Dijital Dönüşüm: Geleceğe Hazırlık
                </h1>
                <div className='flex justify-center items-center'>
                    <img alt='Sıfır Atık' loading='lazy' className='rounded-box' src={BlogBanner} />
                </div>
                <div>
                    <p className='text-justify text-md lg:text-xl'>
                        <span className=''>Dijital Dönüşüm
                        Dijital dönüşüm, iş süreçlerinin dijital teknolojilerle optimize edilmesi, müşteri deneyimlerinin geliştirilmesi ve yenilikçi iş modelleri oluşturulması üzerine kurulu bir stratejidir.</span>
                        <br />
                        <br />
                        <span className='font-bold'>Dijital Dönüşüm Neden Önemlidir?</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Rekabet Avantajı Sağlar:</span> Dijital teknolojiler, şirketlerin daha hızlı ve esnek olmalarını sağlayarak rekabet avantajı kazanmalarına yardımcı olur.
                            </li>
                            <li>
                                <span className='font-bold'>Maliyetleri Azaltır:</span> Otomasyon ve dijital araçlar, iş süreçlerini daha verimli hale getirerek operasyonel maliyetleri azaltır.

                            </li>
                            <li>
                                <span className='font-bold'>Müşteri Deneyimini Geliştirir:</span> Dijital çözümler, müşteri ihtiyaçlarına daha hızlı ve kişiselleştirilmiş yanıtlar verilmesini sağlar, müşteri memnuniyetini artırır.
                            </li>
                            <li>
                                <span className='font-bold'>Yeni İş Modelleri Oluşturur: </span>  Dijital dönüşüm, şirketlerin yenilikçi iş modelleri geliştirmesine olanak tanır, böylece yeni gelir kaynakları oluşturur.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Dijital Dönüşüm Türkiye'de:</span>
                        <br />
                        <br />
                        Türkiye, son yıllarda dijital dönüşüm konusunda önemli adımlar atmıştır. Hem kamu hem de özel sektör, dijital dönüşüm projelerine büyük yatırımlar yapmaktadır:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>E-Devlet Hizmetleri:</span> Türkiye, e-Devlet kapısı üzerinden vatandaşlarına geniş bir yelpazede dijital hizmetler sunmaktadır.
                            </li>
                            <li>
                                <span className='font-bold'>KOBİ’lerde Dijitalleşme: </span> KOBİ’ler, dijital dönüşüm projeleriyle iş süreçlerini optimize etmekte ve rekabet güçlerini artırmaktadır.
                            </li>
                            <li>
                                <span className='font-bold'>Akıllı Şehir Projeleri:</span> Türkiye, akıllı şehir projeleriyle şehir yaşamını daha sürdürülebilir ve verimli hale getirmeyi hedeflemektedir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Dijital Dönüşüm İçin Neler Yapabiliriz?</span>
                        <br />
                        <br />
                        Dijital dönüşüm sadece büyük şirketlerin değil, her ölçekten işletmenin ve bireylerin de sorumluluğudur. Dijital dönüşümü benimsemek için şunları yapabiliriz:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Dijital Yetkinlikler Kazanmak:</span> Yeni dijital yetkinlikler öğrenerek ve mevcut yetkinlikleri geliştirerek dijital dönüşüme hazır hale gelebiliriz.
                            </li>
                            <li>
                                <span className='font-bold'>Teknolojiye Yatırım Yapmak: </span> İş süreçlerinde verimliliği artırmak için dijital teknolojilere yatırım yapabiliriz.
                            </li>
                            <li>
                                <span className='font-bold'>Veri Odaklı Kararlar Almak:</span>  İş kararlarını veri analitiği ve yapay zeka gibi araçlarla destekleyerek daha bilinçli kararlar alabiliriz.
                            </li>
                            <li>
                                <span className='font-bold'>Siber Güvenliğe Önem Vermek:</span>  Dijital dönüşüm sürecinde siber güvenlik önlemlerini artırarak verilerin güvenliğini sağlayabiliriz.
                            </li>
                            <li>
                                <span className='font-bold'>Dijital Kültürü Benimsemek:</span> İş yerinde dijital kültürü teşvik ederek ve dijital dönüşüm süreçlerine çalışanları dahil ederek başarılı bir dönüşüm sağlayabiliriz.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className='italic font-bold text-2xl'>
                        Dijital dönüşüm, geleceğe hazırlanmak ve iş dünyasında sürdürülebilir başarı elde etmek için kaçınılmaz bir süreçtir. Bireysel ve kurumsal çabalarla bu hedefe ulaşmak mümkündür. Dijital dönüşümü bir yaşam tarzı benimseyerek geleceğe güçlü adımlarla ilerlemek için hep birlikte çalışalım!
                        </span>
                    </p>
                </div>
            </>
        );
    }

    const SustainableOffice = () => {
        return (
            <>
                <div className="text-base lg:text-lg breadcrumbs pb-8 w-full">
                    <ul>
                        <li><a href='/'>Anasayfa</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li>Çevre Dostu ve Verimli Ofisler için Adımlar</li>
                    </ul>
                </div>
                <h1 className='text-2xl lg:text-6xl'>Çevre Dostu ve Verimli Ofisler için Adımlar</h1>
                <div className='flex justify-center items-center'>
                    <img alt='ofis' loading='lazy' className='rounded-box' src={officeImage} />
                </div>
                <div>
                    <p className='text-justify text-md lg:text-xl'>
                    Ofisler, günlük iş yaşamının merkezinde yer alır ve çevre üzerinde önemli bir etkiye sahiptir. Enerji tüketimi, su kullanımı ve atık üretimi gibi faktörler, çevresel ayak izimizi büyütebilir. Çevre dostu ve verimli ofisler oluşturmak, bu etkiyi azaltmak ve daha sağlıklı bir iş ortamı sağlamak için gereklidir.
                        <br />
                        <br />

                        <span className='font-bold'>Çevre Dostu ve Verimli Ofisler için Adımlar:</span>
                        <br />
                        <br />

                        <span className='font-bold'>Enerji Verimliliği:</span>
                        <br />
                        <br />

                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                Enerji tasarruflu ampuller ve elektronik cihazlar kullanmak
                            </li>
                            <li>
                            Gün ışığını maksimize etmek için pencereleri açık tutmak
                            </li>
                            <li>
                            Bilgisayarları ve cihazları kullanılmadığında kapatmak
                            </li>
                            <li>
                            Yalıtım ve havalandırma sistemlerini optimize etmek
                            </li>
                            <li>
                            Güneş enerjisi gibi yenilenebilir enerji kaynaklarını kullanmak
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Su Verimliliği:</span>
                        <br />
                        <br />

                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                            Su tasarruflu musluk ve tuvaletler kullanmak
                            </li>
                            <li>
                            Muslukları gerektiğinde kapalı tutmak
                            </li>
                            <li>
                            Ofis bahçelerini sulamak için yağmur suyu toplamak
                            </li>
                            <li>
                            Düzenli olarak su sızıntılarını kontrol etmek ve onarmak
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Atık Yönetimi:</span>
                        <br />
                        <br />

                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                            Geri dönüşüm kutuları yerleştirmek ve kullanımı teşvik etmek
                            </li>
                            <li>
                            Kağıt tüketimini azaltmak için dijital dokümanlar kullanmak
                            </li>
                            <li>
                            Tek kullanımlık plastik ürünlerden kaçınmak
                            </li>
                            <li>
                            Atık yönetimi konusunda çalışanları bilinçlendirmek</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Sağlıklı Çalışma Ortamı:</span>
                        <br />
                        <br />

                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                            Yeşil bitkiler yerleştirerek hava kalitesini iyileştirmek
                            </li>
                            <li>
                            Düzenli temizlik ve hijyen sağlamak
                            </li>
                            <li>
                            Ergonomik mobilyalar ve ekipmanlar kullanmak
                            </li>
                            <li>
                            Doğal ışık ve temiz hava sirkülasyonu sağlamak
                            </li>
                            <li>
                            Ofis içinde sessiz çalışma alanları oluşturmak</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Sürdürülebilir Ofis Politikaları:</span>
                        <br />
                        <br />

                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                            Çevre dostu ürünler ve tedarikçilerle çalışmak
                            </li>
                            <li>
                            Çalışanlara sürdürülebilirlik eğitimleri vermek
                            </li>
                            <li>
                            Çevreye duyarlı ofis politikaları oluşturmak ve uygulamak
                            </li>
                            <li>
                            Toplu taşıma, bisiklet veya yürüyüş gibi çevre dostu ulaşım seçeneklerini teşvik etmek</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        Çevre dostu ve verimli bir ofis ortamı, çalışanların motivasyonunu artırır ve şirketin çevresel sorumluluklarını yerine getirmesine yardımcı olur. Bu adımları izleyerek, ofisinizi daha yeşil ve verimli hale getirebilir ve sürdürülebilir bir geleceğe katkıda bulunabilirsiniz.                        <br />
                        <br />
                        <br />
                        <span className='italic font-bold text-2xl'>Daha temiz ve sürdürülebilir bir dünya için hep birlikte harekete geçelim!</span>
                    </p>
                </div>
            </>
        );
    }

    const Iso = () => {
        return (
            <>
                <div className="text-base lg:text-lg breadcrumbs  pb-8 w-full">
                    <ul>
                        <li><a href='/'>Anasayfa</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li>ISO 50001 Standardı: Enerji Yönetimi</li>
                    </ul>
                </div>
                <h1 className='text-2xl lg:text-6xl'>ISO 50001 Standardı: Enerji Yönetimi</h1>
                <div className='flex justify-center items-center'>
                    <img alt='ISO' loading='lazy' className='rounded-box' src={isoImage} />
                </div>
                <div>
                    <p className='text-justify text-md lg:text-xl'>
                    Enerji verimliliği, günümüzün en önemli küresel önceliklerinden biridir. Kuruluşlar, enerji tüketimlerini optimize etmek ve karbon ayak izlerini azaltmak için uluslararası standartlara ihtiyaç duyarlar. ISO 50001 standardı, enerji yönetim sistemlerinin kurulması, uygulanması ve iyileştirilmesi için bir çerçeve sunar.                        <br />
                        <br />
                        <span className='font-bold'>ISO 50001 Standardının Tarihi ve Gelişimi:</span>
                        <br />
                        <br />
                        ISO 50001 standardı ilk olarak 2011 yılında yayınlanmıştır. Bu standart, enerji yönetim sistemleri için uluslararası bir referans noktası olma özelliğini taşır. 2018 yılında, standardın ikinci versiyonu olan ISO 50001:2018 revize edilmiştir. Bu revizyon, standarda yeni sektörler ve enerji yönetim stratejileri eklemiştir.                        <br />
                        <br />
                        <span className='font-bold'>ISO 50001 Standardının Kapsamı:</span>
                        <br />
                        <br />
                        ISO 50001 standardı, kuruluşların enerji tüketimlerini yönetmek için kullanabilecekleri bir çerçeve sunar. Standardın kapsamı şunları içerir:                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                            Enerji politikası geliştirilmesi
                            </li>
                            <li>
                            Enerji hedeflerinin belirlenmesi
                            </li>
                            <li>
                            Enerji tüketiminin izlenmesi ve ölçülmesi
                            </li>
                            <li>
                            Enerji performansının değerlendirilmesi ve iyileştirilmesi
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>ISO 50001 Standardına Uygunluk Süreci:</span>
                        <br />
                        <br />
                        ISO 50001 standardına uymak için kuruluşların aşağıdaki adımları izlemeleri gerekmektedir:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Planlama:</span> Kuruluş, enerji yönetim sistemi için bir plan oluşturmalıdır. Bu plan, enerji politikası, enerji hedefleri ve enerji performans göstergelerini içermelidir.
                            </li>
                            <li>
                                <span className='font-bold'>Uygulama:</span> Kuruluş, planında belirtilen adımları uygulamalıdır.
                            </li>
                            <li>
                                <span className='font-bold'>Kontrol:</span>  Enerji performansı düzenli olarak izlenmeli ve ölçülmelidir.
                            </li>
                            <li>
                                <span className='font-bold'>İyileştirme:</span> Enerji yönetim sistemi sürekli olarak değerlendirilip iyileştirilmelidir.
                            </li>
                            <li>
                                <span className='font-bold'>Belgelendirme:</span> Kuruluş, ISO 50001 standardına uygunluk belgesi almak için bir belgelendirme kuruluşuna başvurabilir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>ISO 50001 Standardının Faydaları:</span>
                        <br />
                        <br />
                        ISO 50001 standardına uymanın kuruluşlara birçok faydası vardır. Bu faydalar şunları içerir:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Enerji Verimliliği:</span>  Kuruluşların enerji tüketimlerini optimize etmelerine ve maliyet tasarrufu sağlamalarına yardımcı olur.
                            </li>
                            <li>
                                <span className='font-bold'>Karbon Ayak İzini Azaltma: </span> Enerji tüketimini azaltarak sera gazı emisyonlarını düşürür.
                            </li>
                            <li>
                                <span className='font-bold'>Yasal Uyumluluk:</span> Kuruluşların enerji yönetimiyle ilgili yasal düzenlemelere uymasını sağlar.
                            </li>
                            <li>
                                <span className='font-bold'>Rekabet Avantajı:</span>  Enerji verimliliği ile pazarda daha rekabetçi hale gelirler.
                            </li>
                            <li>
                                <span className='font-bold'>Kurumsal İmaj:</span> PEnerji verimliliği politikaları, kuruluşların çevresel sorumluluklarını göstermelerine yardımcı olur.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        2023 yılı itibarıyla dünya genelinde 90'dan fazla ülkede 7.000'den fazla kuruluş ISO 50001 standardına belge almıştır.
                        <br />
                        ISO 50001 standardına belgeli kuruluşların enerji tüketimi, dünya genelindeki toplam enerji tüketiminin yaklaşık %15'ini oluşturmaktadır.
                        <br />
                        ISO 50001 standardına uymanın, kuruluşlara yıllık ortalama %5-10 oranında enerji tasarrufu sağladığı tahmin edilmektedir.
                        <br />
                        
                        <br />
                        ISO 50001 standardı, tüm sektörler tarafından uygulanabilir bir standarttır. En fazla belge alan sektörler şunlardır:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                Enerji
                            </li>
                            <li>
                                İmalat
                            </li>
                            <li>
                                Ulaşım
                            </li>
                            <li>
                                Binalar
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        ISO 50001 standardı, enerji yönetimini iyileştirmek için önemli bir araçtır. Gelecekte standardın daha da yaygınlaşması ve daha fazla kuruluş tarafından uygulanması beklenmektedir. Standardın yeni versiyonları da enerji yönetim sistemlerinin geliştirilmesi için yeni yöntemler ve araçlar sunabilir.                        <br />
                        <br />
                        <br />
                        <br />
                        <span className='italic font-bold text-2xl'>Daha yeşil ve sürdürülebilir bir gelecek için hep birlikte çalışalım!</span>
                    </p>
                </div>
            </>
        );
    }

    const CarbonFootprint = () => {
        return (
            <>
                <div className="text-base lg:text-lg breadcrumbs  pb-8 w-full">
                    <ul>
                        <li><a href='/'>Anasayfa</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li>Karbon Ayak İzi: Kişisel ve Kurumsal Etkimizi Anlamak</li>
                    </ul>
                </div>
                <h1 className='text-2xl lg:text-6xl'>Karbon Ayak İzi: Kişisel ve Kurumsal Etkimizi Anlamak</h1>
                <div className='flex justify-center items-center'>
                    <img alt='karbon' loading='lazy' className='rounded-box' src={carbonFootprintImage} />
                </div>
                <div>
                    <p className='text-justify text-md lg:text-xl'>
                        İklim değişikliği, günümüzün en önemli küresel tehditlerinden biridir. Bu tehditle mücadelede bireysel ve kurumsal olarak sera gazı emisyonlarımızı azaltmamız kritik önem taşımaktadır. Karbon ayak izi, bir kişi veya kuruluşun faaliyetleri sonucunda atmosfere salınan sera gazı emisyonlarının miktarını ölçmek için kullanılan bir araçtır.
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Ayak İzi Nedir?</span>
                        <br />
                        <br />
                        Karbon ayak izi, bir ürün, hizmet, kişi veya kuruluşun belirli bir zaman diliminde doğrudan veya dolaylı olarak ürettiği sera gazı emisyonlarının toplamıdır. Karbon ayak izi, sera gazlarının küresel ısınma potansiyeline göre CO2 eşdeğeri olarak hesaplanır.
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Ayak İzi Hesaplama Yöntemleri:</span>
                        <br />
                        <br />
                        Karbon ayak izi hesaplamak için birçok yöntem ve araç mevcuttur. En yaygın kullanılan yöntemler şunlardır:

                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                Uluslararası Karbon Ayak İzi Standardı (ISO 14064-1): Bu standart, sera gazı emisyonlarının kuruluş seviyesinde hesaplanması ve raporlanması için bir çerçeve sunmaktadır.

                            </li>
                            <li>
                                Greenhouse Gas (GHG) Protokolü: Bu protokol, sera gazı emisyonlarının hesaplanması ve raporlanması için uluslararası kabul görmüş bir çerçevedir.

                            </li>
                            <li>
                                Karbon Hesaplayıcılar: İnternette birçok ücretsiz ve ücretli karbon hesaplayıcısı mevcuttur. Bu hesaplayıcılar, kişisel veya kurumsal karbon ayak izini basit bir şekilde hesaplamak için kullanılabilir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Ayak İzi Neden Önemlidir?</span>
                        <br />
                        <br />
                        Karbon ayak izini hesaplamak, emisyon kaynaklarımızı belirlemek ve azaltmak için önemli bir adımdır. Karbon ayak izini azaltmak için birçok yöntem vardır. Bu yöntemler şunlardır:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Enerji Verimliliği:</span> Enerji tüketimini azaltmak, karbon ayak izini önemli ölçüde azaltabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Yenilenebilir Enerji:</span> Güneş ve rüzgar enerjisi gibi yenilenebilir enerji kaynaklarını kullanmak, karbon ayak izini sıfıra indirmeye yardımcı olabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Sürdürülebilir Ulaşım:</span> Toplu taşıma, bisiklet veya elektrikli araçlar gibi sürdürülebilir ulaşım seçeneklerini tercih etmek, karbon ayak izini azaltabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Geri Dönüşüm ve Atık Yönetimi:</span> Geri dönüşüm ve atık yönetimi uygulamaları, atık emisyonlarını azaltarak karbon ayak izini düşürmeye yardımcı olabilir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Ayak İzi Envanter Raporu Nedir?</span>
                        <br />
                        <br />
                        Karbon ayak izi envanter raporu, bir kuruluşun belirli bir zaman diliminde ürettiği tüm sera gazı emisyonlarının detaylı bir dökümüdür. Bu rapor, emisyon kaynaklarını ve miktarlarını gösterir ve emisyon azaltma planı oluşturmak için kullanılabilir.
                        <br />
                        <br />
                        <span className='font-bold'>Greenhouse Gas (GHG) Protokol Nedir?</span>
                        <br />
                        <br />
                        Greenhouse Gas (GHG) Protokolü, sera gazı emisyonlarının hesaplanması ve raporlanması için uluslararası kabul görmüş bir çerçevedir. Protokol, üç ana kategoriden oluşmaktadır:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Kapsam 1:</span> Bir kuruluşun doğrudan kontrol ettiği emisyonlar (örneğin, şirket araçlarından kaynaklanan emisyonlar).
                            </li>
                            <li>
                                <span className='font-bold'>Kapsam 2:</span> Bir kuruluşun satın aldığı enerjiden kaynaklanan emisyonlar (örneğin, elektrik ve ısıdan kaynaklanan emisyonlar).
                            </li>
                            <li>
                                <span className='font-bold'>Kapsam 3:</span> Bir kuruluşun faaliyetlerinden kaynaklanan, ancak doğrudan kontrol etmediği emisyonlar (örneğin, tedarik zinciri ve ürün kullanımıyla ilgili emisyonlar).
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>ISO 14604 Standart Serisi Nedir?</span>
                        <br />
                        <br />
                        ISO 14604 standart serisi, sera gazı emisyonlarının ve sera gazı envanterlerinin yönetimi için bir çerçeve sunmaktadır. Seri, şu standartlardan oluşmaktadır:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>ISO 14064-1:</span> Sera gazı emisyonlarının kuruluş seviyesinde hesaplanması ve raporlanması için bir çerçeve sunar.
                            </li>
                            <li>
                                <span className='font-bold'>ISO 14064-2:</span> Sera gazı emisyonlarının doğrulanması için bir çerçeve sunar.
                            </li>
                            <li>
                                <span className='font-bold'>ISO 14064-3:</span> Sera gazı emisyonlarının azaltılması için proje baz
                            </li>
                            <li>
                                <span className='font-bold'>ISO 14064-4:</span> Sera gazı emisyonlarının ve sera gazı envanterlerinin yönetimi için bir sistem oluşturur.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Ayak İzi Hesaplama Örnekleri:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Kişisel Karbon Ayak İzi:</span> Bir kişinin ortalama yıllık karbon ayak izi, Türkiye'de yaklaşık 4 ton CO2 eşdeğeridir. Bu emisyonlar, kişinin ev enerjisi kullanımı, ulaşım tercihleri, gıda tüketimi ve diğer faaliyetlerinden kaynaklanır.
                            </li>
                            <li>
                                <span className='font-bold'>Kurumsal Karbon Ayak İzi:</span> Bir şirketin yıllık karbon ayak izi, binlerce veya milyonlarca ton CO2 eşdeğeri olabilir. Şirketin faaliyet türüne, üretim yöntemlerine ve enerji tüketimine bağlı olarak emisyon miktarı değişir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Ayak İzi Azaltma Stratejileri:</span>
                        <br />
                        <br />
                        Karbon ayak izini azaltmak için birçok strateji kullanılabilir. Bu stratejiler şunlardır:
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Enerji Verimliliği:</span> Enerji tüketimini azaltmak, karbon ayak izini en önemli yollarından biridir. Enerji verimliliği yatırımları, uzun vadede maliyet tasarrufu da sağlayabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Yenilenebilir Enerji:</span> Güneş ve rüzgar enerjisi gibi yenilenebilir enerji kaynaklarını kullanmak, karbon ayak izini önemli ölçüde azaltabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Sürdürülebilir Ulaşım:</span> Toplu taşıma, bisiklet veya elektrikli araçlar gibi sürdürülebilir ulaşım seçeneklerini tercih etmek, karbon ayak izini azaltabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Geri Dönüşüm ve Atık Yönetimi:</span> Geri dönüşüm ve atık yönetimi uygulamaları, atık emisyonlarını azaltarak karbon ayak izini düşürmeye yardımcı olabilir.
                            </li>
                            <li>
                                <span className='font-bold'>Ormancılık:</span> Ağaç dikmek ve ormanları korumak, atmosfere salınan CO2'yi absorbe ederek karbon ayak izini azaltmaya yardımcı olabilir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        Karbon ayak izi, sera gazı emisyonlarımızı ve iklim değişikliğine olan katkımızı anlamak için önemli bir araçtır. Karbon ayak izini hesaplamak ve azaltmak için birçok yöntem ve strateji mevcuttur. Bireysel ve kurumsal olarak karbon ayak izimizi azaltmak için çalışarak, daha sürdürülebilir bir geleceğe katkıda bulunabiliriz.
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className='italic font-bold text-2xl'>Daha yeşil ve sürdürülebilir bir gelecek için hep birlikte çalışalım!</span>
                    </p>
                </div>
            </>
        );
    }

    const Esrs = () => {
        return (
            <>
                <div className="text-base lg:text-lg breadcrumbs  pb-8 w-full">
                    <ul>
                        <li><a href='/'>Anasayfa</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li>Avrupa Sürdürülebilirlik Raporlama Standartları (ESRS)</li>
                    </ul>
                </div>
                <h1 className='text-2xl lg:text-6xl'>Avrupa Sürdürülebilirlik Raporlama Standartları (ESRS)</h1>
                <div className='flex justify-center items-center'>
                    <img alt='esrs' loading='lazy' className='rounded-box' src={esrsImage} />
                </div>
                <div>
                    <p className='text-justify text-md lg:text-xl'>
                        İklim değişikliği ve sürdürülebilirlik, günümüzün en önemli küresel sorunları arasında yer alıyor. Bu alandaki gelişmeleri takip etmek ve yatırımcılar, paydaşlar ve kamuoyu için şeffaflık sağlamak amacıyla Avrupa Birliği, Avrupa Sürdürülebilirlik Raporlama Standartları'nı (ESRS) uygulamaya koydu. 2023'te yürürlüğe giren ESRS, Avrupa'daki büyük şirketleri kapsayan ve sürdürülebilirlik performanslarını raporlamada standardizasyon getiren bir düzenlemedir.
                        <br />
                        <br />
                        <span className='font-bold'>ESRS'nin Amacı:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                Kurumsal sürdürülebilirlik raporlamada Avrupa Birliği genelinde ortak bir dil oluşturmak.
                            </li>
                            <li>
                                Paydaşlar ve yatırımcılar için karşılaştırılabilir ve güvenilir bilgiler sunmak.
                            </li>
                            <li>
                                Şirketlerin çevresel ve sosyal etkilerinin daha iyi anlaşılmasını sağlamak.
                            </li>
                            <li>
                                Sürdürülebilirlik performansını geliştirmek ve sorumlu yatırımları teşvik etmek.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Temel Bileşenler ve Raporlama Kriterleri:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Çevresel Raporlama:</span> Bu bileşen, şirketlerin karbon ayak izlerini, enerji ve su tüketimlerini, atık yönetimi ve kirlilik kontrolü pratiklerini ve biyoçeşitlilik üzerindeki etkilerini raporlamalarını zorunlu kılar. Örneğin, bir şirketin yıllık CO2 emisyonları, yenilenebilir enerji kullanım oranı, su geri dönüşümü ve atık azaltma stratejileri detaylandırılmalıdır.
                            </li>
                            <li>
                                <span className='font-bold'>Sosyal Raporlama:</span> İş güvenliği, eşitlik ve çeşitlilik, tedarik zinciri etik standartları, ürün güvenliği ve müşteri memnuniyeti gibi konular bu kategoride yer alır. Bir şirketin çalışanlarına sağladığı eğitim saatlerinin toplamı, cinsiyete göre çalışan dağılımı, tedarik zincirindeki sosyal denetimlerin sonuçları gibi veriler paylaşılmalıdır.
                            </li>
                            <li>
                                <span className='font-bold'>Yönetişim Raporlama:</span> Şirket yönetim kurullarının yapısı, üst düzey yöneticilerin seçimi, maaş politikaları ve etik davranış kuralları gibi konuları içerir. Ayrıca, şirketlerin yolsuzlukla mücadele, rüşvet ve çıkar çatışması önleme politikaları hakkında bilgi vermesi beklenir.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>ESRS, 10 ana başlık ve 40 alt başlıktan oluşmaktadır. Bu başlıklar şunlardır:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                Genel Gereksinimler
                            </li>
                            <li>
                                Genel Açıklamalar
                            </li>
                            <li>
                                Çevre
                            </li>
                            <li>
                                Sosyal
                            </li>
                            <li>
                                Yönetim
                            </li>
                            <li>
                                Çalışanlar
                            </li>
                            <li>
                                İnsan Hakları
                            </li>
                            <li>
                                Toplum
                            </li>
                            <li>
                                Ürün ve Hizmetler
                            </li>
                            <li>
                                Yönetim Yaklaşımı
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        Her başlık, şirketlerin raporlamasında yer vermesi gereken belirli göstergeleri ve bilgileri içerir. Bu sayede, paydaşlar ve yatırımcılar, şirketlerin sürdürülebilirlik performanslarını daha net bir şekilde değerlendirebilecekler.
                        <br />
                        <br />
                        ESRS, Avrupa'da sürdürülebilirlik raporlamada bir dönüm noktası olarak kabul edilir. Bu standartlar, şirketlerin sürdürülebilirlik performanslarını daha şeffaf ve hesap verebilir bir şekilde raporlamalarını sağlayarak, Avrupa'da ve küresel olarak sürdürülebilir kalkınmaya önemli bir katkıda bulunacaktır.
                        <br />
                        <br />
                        <span className='font-bold'>Uygulamada Karşılaşılan Zorluklar ve Çözüm Önerileri</span>
                        <br />
                        <br />
                        ESRS'nin uygulanmasında karşılaşılan en büyük zorluklardan biri, özellikle KOBİ'ler için, detaylı veri toplama ve analiz süreçlerinin maliyeti ve karmaşıklığıdır. AB, bu zorlukların üstesinden gelmek için dijital raporlama araçları ve KOBİ'ler için özel rehberler geliştirmekte, ayrıca eğitim ve danışmanlık hizmetleri sunmaktadır.
                        <br />
                        <br />
                        Avrupa Sürdürülebilirlik Raporlama Standartları, AB'nin sürdürülebilir kalkınma hedeflerine ulaşma çabasının önemli bir parçasıdır. ESRS, şirketlerin çevresel ve sosyal performanslarını iyileştirmelerine, yatırımcı ve tüketicilere değerli bilgiler sunmalarına ve nihayetinde sürdürülebilir bir ekonomiye doğru ilerlemelerine yardımcı olur. Ancak, bu süreçte, özellikle veri toplama ve analizi konusunda karşılaşılan zorlukların üstesinden gelmek için destekleyici politika ve araçların geliştirilmesi gerekmektedir.
                    </p>
                </div>
            </>
        );
    }

    const CarbonCredit = () => {
        return (
            <>
                <div className="text-base lg:text-lg breadcrumbs  pb-8 w-full">
                    <ul>
                        <li><a href='/'>Anasayfa</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li>Karbon Kredisi: Atmosfere Salınan Karbonu Dengelemek</li>
                    </ul>
                </div>
                <h1 className='text-2xl lg:text-6xl'>Karbon Kredisi: Atmosfere Salınan Karbonu Dengelemek</h1>
                <div className='flex justify-center items-center'>
                    <img alt='Karbon Kredisi' loading='lazy' className='rounded-box' src={carbonCreditImage} />
                </div>
                <div>
                    <p className='text-justify text-md lg:text-xl'>
                        Karbon salınımları ve iklim değişikliği günümüzün en önemli küresel problemlerinden biridir. Atmosfere salınan sera gazları, küresel ısınmaya ve buna bağlı birçok olumsuz etkiye yol açmaktadır. Bu sorunun çözümüne katkıda bulunmak için karbon kredisi gibi çeşitli mekanizmalar geliştirilmiştir.
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Kredisi Nedir?</span>
                        <br />
                        <br />
                        Karbon kredisi, bir ton karbondioksit veya diğer sera gazlarının eşdeğer emisyonunun atmosfere salınımının önlenmesi veya azaltılması anlamına gelir. Bir sertifika ile temsil edilir ve firmalar veya kuruluşlar tarafından satın alınabilir. Karbon kredisi satın alan firma, atmosfere saldığı her bir ton sera gazı için bir krediyi iptal ederek, salınımlarını dengelemiş olur.
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Kredisi Nasıl Çalışır?</span>
                        <br />
                        <br />
                        "Kirleten öder" prensibi üzerine kurulu bir sistemdir. Sera gazı emisyonu yapan firmalar ve kuruluşlar, atmosfere saldıkları her bir ton gaz için bir karbon kredisi satın almak zorundadır. Bu sayede, atmosfere salınan sera gazı miktarı sınırlandırılmış olur.
                        <br />
                        <br />
                        Karbon kredisi satın almak isteyen firmalar ve kuruluşlar, çeşitli platformlar aracılığıyla işlem yapabilirler. Bu platformlarda, farklı projelerden elde edilen karbon kredileri listelenmektedir. Firmalar, ihtiyaç duydukları kadar krediyi satın alarak emisyonlarını dengeleyebilirler.
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Kredisi Çeşitleri:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Gönüllü Emisyon Azaltım Karbon Kredileri (VERs):</span> Belirli bir projenin başlamasından sonra gerçekleşen karbon salınımının azaltılmasına dayanır. Bu projeler genellikle sertifikalandırılmış ve bağımsız kuruluşlar tarafından doğrulanmıştır.
                            </li>
                            <li>
                                <span className='font-bold'>Sertifikalı Azaltma Karbon Kredileri (CERs):</span> Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi (UNFCCC) tarafından onaylanan projelerden kaynaklanır. Bu projeler, Kyoto Protokolü'nün temelini oluşturur ve genellikle az gelişmiş ülkelerde gerçekleşmektedir.
                            </li>
                            <li>
                                <span className='font-bold'>Karbonsuz Kalkınma Kredileri (CDM):</span> UNFCCC'nin bir parçası olarak yürütülen projelerden elde edilen karbon kredisi türüdür. Bu projeler genellikle gelişmekte olan ülkelerdeki sürdürülebilir kalkınmayı teşvik etmeyi amaçlar.
                            </li>
                            <li>
                                <span className='font-bold'>Orman Karbon Kredileri (FCCs):</span> Orman koruma projelerinden kaynaklanan kredilerdir. Orman alanlarını koruma, restorasyon veya sürdürülebilir ormancılık uygulamalarını içerir.
                            </li>
                            <li>
                                <span className='font-bold'>Biyoenerji Karbon Kredileri:</span> Biyoenerji projelerinden kaynaklanan kredileri ifade eder. Biyokütle enerjisi üretimi veya biyoenerji tesislerinin işletilmesini içerir.
                            </li>
                            <li>
                                <span className='font-bold'>Enerji Verimliliği Karbon Kredileri:</span> Enerji verimliliği artırıcı projelerden kaynaklanan kredileri içerir. Endüstriyel tesislerde veya binalarda enerji tasarrufunu teşvik eder.
                            </li>
                            <li>
                                <span className='font-bold'>Deniz Biyokütlesi Karbon Kredileri:</span> Deniz ekosistemlerini koruma ve deniz yosunu gibi organizmaların karbon emilimini artırma projelerinden kaynaklanan kredileri ifade eder.
                            </li>
                            <li>
                                <span className='font-bold'>Karbon Yakalama Karbon Kredileri (DAC):</span> Atmosferden doğrudan karbondioksit yakalayan ve depolayan teknolojilere odaklanır.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Kredisi Satın Alırken Dikkat Edilmesi Gerekenler:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Sertifikasyon:</span> Projenin saygın bir kuruluş tarafından sertifikalandığından emin olun.
                            </li>
                            <li>
                                <span className='font-bold'>Proje Türü:</span> Sizin için en önemli olan etkiye odaklanan bir proje seçin.
                            </li>
                            <li>
                                <span className='font-bold'>Maliyet:</span> Proje ve sertifikasyona göre fiyatlar değişir. Bütçenize uygun bir proje seçin.
                            </li>
                            <li>
                                <span className='font-bold'>Doğruluk:</span> Projenin gerçekten emisyon azalımı sağladığından emin olun.
                            </li>
                            <li>
                                <span className='font-bold'>Hesap Verebilirlik:</span> Emisyon azaltımı ve diğer etkilerin düzenli olarak izlendiğinden ve raporlandığından emin olun.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className='font-bold'>Karbon Kredisi Almanın Faydaları:</span>
                        <br />
                        <br />
                        <ul className='flex flex-col list-disc pl-10 gap-4'>
                            <li>
                                <span className='font-bold'>Çevresel Sorumluluk:</span> Atmosfere salınan sera gazı emisyonlarını dengeleyebilir ve çevreye katkıda bulunabilirsiniz.
                            </li>
                            <li>
                                <span className='font-bold'>Yasal Yükümlülükler:</span> Belirli bir emisyon seviyesinin altında kalma zorunluluğu olan firmalar için gereklidir.
                            </li>
                            <li>
                                <span className='font-bold'>Sosyal Sorumluluk Bilinci:</span> Çevreye duyarlı bir firma imajı oluşturabilir ve sosyal sorumluluk bilincini gösterebilirsiniz.
                            </li>
                            <li>
                                <span className='font-bold'>Rekabet Avantajı:</span> Çevreye duyarlı firmalar tüketiciler tarafından daha çok tercih edilir.
                            </li>
                            <li>
                                <span className='font-bold'>İklim Değişikliğine Karşı Mücadele:</span> Emisyonları azaltarak ve sürdürülebilir projelere yatırım yaparak katkıda bulunabilirsiniz.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        Karbon kredisi, atmosfere salınan sera gazı emisyonlarını dengelemek için önemli bir araçtır. Fakat tek başına yeterli değildir. Emisyonları azaltmak için en önemli adım, enerji sistemlerini dönüştürmek ve sürdürülebilir bir ekonomiye geçmektir.
                    </p>
                </div>
            </>
        );
    }

    const PickPage = () => {
        switch (id) {
            case "sifir-atik-gelecek-nesillere-temiz-bir-dunya-birakmak": return <ZeroWaste />
            case "daha-yesil-ve-surdurulebilir-ofisler-icin-oneriler": return <SustainableOffice />
            case "karbon-ayak-izi-kisisel-ve-kurumsal-etkimizi-anlamak": return <CarbonFootprint />
            case "iso-14064-1-standardi": return <Iso />
            case "avrupa-surdurulebilirlik-raporlama-standartlari": return <Esrs />
            case "karbon-kredisi-atmosfere-salinan-karbonu-dengelemek": return <CarbonCredit />
        }
    }

    return (
        <div className='flex flex-col text-center px-5 py-32 lg:px-40 gap-10'>
            <PickPage />
        </div>
    );
}

export default BlogDetailPage;
