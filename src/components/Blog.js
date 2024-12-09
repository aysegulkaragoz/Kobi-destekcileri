import BlogBanner from '../images/BlogBanner.jpg';
import greenOfficeImage from '../images/ofis.webp';
import iso1Image from '../images/ISO1.webp';

const Blog = () => {
    return (
        <div className="w-full flex flex-col justify-center py-10 items-center gap-8 bg-slate-50">
            <div className="flex flex-col w-full justify-center items-center">
                <h1 className="text-2xl font-bold">Blog</h1>
                <a href="/blog" className="link">Daha fazla</a>
            </div>
            <div className="carousel w-11/12 px-4 py-10 space-x-4 rounded-box flex lg:justify-center">
                <div className="carousel-item transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <div className="w-72 lg:w-96 bg-base-100 shadow-xl rounded-box flex flex-col justify-between">
                        <figure><a href='blog/sifir-atik-gelecek-nesillere-temiz-bir-dunya-birakmak' className='hover:cursor-pointer'><img loading='lazy' className='rounded-t-box' src={BlogBanner} alt="Sıfır Atık" /></a></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dijital Dönüşüm: Geleceğe Hazırlık</h2>
                            <p>Dijital Dönüşüm
                            Dijital dönüşüm, iş süreçlerinin dijital teknolojilerle optimize edilmesi, müşteri deneyimlerinin geliştirilmesi ve yenilikçi iş modelleri oluşturulması üzerine kurulu bir stratejidir.</p>
                            <div className="card-actions justify-end">
                                <a href='blog/sifir-atik-gelecek-nesillere-temiz-bir-dunya-birakmak' className="link">Devamını oku</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <div className="w-72 lg:w-96 bg-base-100 shadow-xl rounded-box flex flex-col justify-between">
                        <figure><a href='blog/daha-yesil-ve-surdurulebilir-ofisler-icin-oneriler' className='hover:cursor-pointer'><img loading='lazy' className='rounded-t-box' src={greenOfficeImage} alt="Yeşil Ofis" /></a></figure>
                        <div className="card-body">
                            <h2 className="card-title">Çevre Dostu ve Verimli Ofisler için Adımlar</h2>
                            <p>Ofisler, günlük iş yaşamının merkezinde yer alır ve çevre üzerinde önemli bir etkiye sahiptir. Enerji tüketimi, su kullanımı ve atık üretimi gibi faktörler, çevresel ayak izimizi büyütebilir. Çevre dostu ve verimli ofisler oluşturmak, bu etkiyi azaltmak ve daha sağlıklı bir iş ortamı sağlamak için gereklidir. </p>
                            <div className="card-actions justify-end">
                                <a href='blog/daha-yesil-ve-surdurulebilir-ofisler-icin-oneriler' className="link">Devamını oku</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                    <div className="w-72 lg:w-96 bg-base-100 shadow-xl rounded-box flex flex-col justify-between">
                        <figure><a href='/blog/iso-14064-1-standardi' className='hover:cursor-pointer'><img loading='lazy' className='rounded-t-box' src={iso1Image} alt="ISO" /></a></figure>
                        <div className="card-body">
                            <h2 className="card-title">ISO 50001 Standardı: Enerji Yönetimi </h2>
                            <p className='flex-1'>Enerji verimliliği, günümüzün en önemli küresel önceliklerinden biridir. Kuruluşlar, enerji tüketimlerini optimize etmek ve karbon ayak izlerini azaltmak için uluslararası standartlara ihtiyaç duyarlar. ISO 50001 standardı, enerji yönetim sistemlerinin kurulması, uygulanması ve iyileştirilmesi için bir çerçeve sunar.</p>
                            <div className="card-actions flex justify-end">
                                <a href='/blog/iso-14064-1-standardi' className="link">Devamını oku</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;