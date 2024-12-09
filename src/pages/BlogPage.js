import blogImage from '../images/HakkimizdaBanner.jpg';
import zeroWasteImage from '../images/DijitalDonusumBanner.jpg';
import greenOfficeImage from '../images/ofis.webp';
import iso1Image from '../images/ISO1.webp';
import carbonFootprintImage from '../images/MarkaTescilDesteği.png';
import esrsImage from '../images/esrs.webp';
import carbonCreditImage from '../images/carbonCredit.webp';

const BlogPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-full">
                <img alt='blog' loading='lazy' className='w-full' src={blogImage} />
            </div>
            <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
                <ul>
                    <li><a href='/'>Anasayfa</a></li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pb-16 px-5 lg:px-20'>
                <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <figure><a href='blog/sifir-atik-gelecek-nesillere-temiz-bir-dunya-birakmak' className='hover:cursor-pointer'><img className='rounded-t-box' src={zeroWasteImage} alt="Sıfır Atık" /></a></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dijital Dönüşüm: Geleceğe Hazırlık
                        </h2>
                        <p className='text-justify'>Dijital dönüşüm, iş süreçlerinin dijital teknolojilerle optimize edilmesi, müşteri deneyimlerinin geliştirilmesi ve yenilikçi iş modelleri oluşturulması üzerine kurulu bir stratejidir.
                        </p>
                        <div className="card-actions justify-end my-2">
                            <a href='blog/sifir-atik-gelecek-nesillere-temiz-bir-dunya-birakmak' className="link">Devamını oku</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <figure><a href='blog/daha-yesil-ve-surdurulebilir-ofisler-icin-oneriler' className='hover:cursor-pointer'><img className='rounded-t-box' src={greenOfficeImage} alt="Yeşil Ofis" /></a></figure>
                    <div className="card-body">
                        <h2 className="card-title">Daha Yeşil ve Sürdürülebilir Ofisler için Öneriler</h2>
                        <p className='text-justify'>Ofisler, hem çalışanlar hem de çevre için önemli bir etkiye sahiptir. Ofislerde kullanılan enerji, su ve malzemeler, önemli miktarda atık ve kirliliğe neden olabilir. Daha yeşil ve sürdürülebilir ofisler oluşturmak, bu etkiyi azaltmak ve daha sağlıklı bir çalışma ortamı yaratmak için önemlidir.</p>
                        <div className="card-actions justify-end my-2">
                            <a href='blog/daha-yesil-ve-surdurulebilir-ofisler-icin-oneriler' className="link">Devamını oku</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <figure><a href='/blog/iso-14064-1-standardi' className='hover:cursor-pointer'><img className='rounded-t-box' src={iso1Image} alt="ISO" /></a></figure>
                    <div className="card-body">
                        <h2 className="card-title">ISO 50001 Standardı: Enerji Yönetimi
                        </h2>
                        <p className='text-justify'>Enerji verimliliği, günümüzün en önemli küresel önceliklerinden biridir. Kuruluşlar, enerji tüketimlerini optimize etmek ve karbon ayak izlerini azaltmak için uluslararası standartlara ihtiyaç duyarlar. ISO 50001 standardı, enerji yönetim sistemlerinin kurulması, uygulanması ve iyileştirilmesi için bir çerçeve sunar.</p>
                        <div className="card-actions justify-end my-2">
                            <a href='/blog/iso-14064-1-standardi' className="link">Devamını oku</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <figure><a href='/blog/karbon-ayak-izi-kisisel-ve-kurumsal-etkimizi-anlamak' className='hover:cursor-pointer'><img className='rounded-t-box' src={carbonFootprintImage} alt="karbon" /></a></figure>
                    <div className="card-body">
                        <h2 className="card-title">E-İhracat Destekleri</h2>
                        <p className='text-justify'>Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve detaylı bilgilere buradan.</p>
                        <div className="card-actions justify-end my-2">
                            <a href='/blog/karbon-ayak-izi-kisisel-ve-kurumsal-etkimizi-anlamak' className="link">Devamını oku</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <figure><a href='/blog/avrupa-surdurulebilirlik-raporlama-standartlari' className='hover:cursor-pointer'><img className='rounded-t-box' src={esrsImage} alt="esrs" /></a></figure>
                    <div className="card-body">
                        <h2 className="card-title">Avrupa Sürdürülebilirlik Raporlama Standartları (ESRS)</h2>
                        <p className='text-justify'>İklim değişikliği ve sürdürülebilirlik, günümüzün en önemli küresel sorunları arasında yer alıyor. Bu alandaki gelişmeleri takip etmek ve yatırımcılar, paydaşlar ve kamuoyu için şeffaflık sağlamak amacıyla Avrupa Birliği, Avrupa Sürdürülebilirlik Raporlama Standartları'nı (ESRS) uygulamaya koydu.</p>
                        <div className="card-actions justify-end my-2">
                            <a href='/blog/avrupa-surdurulebilirlik-raporlama-standartlari' className="link">Devamını oku</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <figure><a href='/blog/karbon-kredisi-atmosfere-salinan-karbonu-dengelemek' className='hover:cursor-pointer'><img className='rounded-t-box' src={carbonCreditImage} alt="Karbon Kredisi" /></a></figure>
                    <div className="card-body">
                        <h2 className="card-title">Karbon Kredisi: Atmosfere Salınan Karbonu Dengelemek</h2>
                        <p className='text-justify'>Karbon salınımları ve iklim değişikliği günümüzün en önemli küresel problemlerinden biridir. Atmosfere salınan sera gazları, küresel ısınmaya ve buna bağlı birçok olumsuz etkiye yol açmaktadır. Bu sorunun çözümüne katkıda bulunmak için karbon kredisi gibi çeşitli mekanizmalar geliştirilmiştir.</p>
                        <div className="card-actions justify-end my-2">
                            <a href='/blog/karbon-kredisi-atmosfere-salinan-karbonu-dengelemek' className="link">Devamını oku</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlogPage;