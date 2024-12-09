import greenCollarImage from '../images/greenCollar.webp';
import MarkaAlım from '../images/sixteen.png';
import MarkaTescilDesteği from '../images/MarkaTescilDesteği.png';
import CountUp from 'react-countup';


const statsData = [
    { label: 'Sektör', value: 20 },
    { label: 'Danışan', value: 350 },
    { label: 'Onay', value: 340 },
  ];
  
  const Stats = () => {
    return (
      <div className="max-w-4xl mx-auto py-12 gap-5">
        <h2 className="text-3xl font-bold text-center mb-8">İstatiklerimiz</h2>
        <div className=" gap-8  flex justify-center items-center text-6xl">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl  text-black">
                <CountUp end={stat.value} duration={2.5} suffix='+' />
              </h3>
              <p className="text-3xl font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


const WhoWeAre = () => {
    return (
        <div className="flex bg-slate-50">
            <div className="flex flex-col py-24 gap-16">
                <div className="flex mx-4 lg:mx-10 lg:gap-10 flex-col-reverse lg:flex-row bg-slate-200 py-10 rounded-box">
                    <div className="flex flex-col justify-center lg:w-2/3 px-10 gap-2">
                        <h1 className="text-3xl font-bold">Şeffaflık ve Netlik ile Başarıya Ulaşın</h1>
                        <p className="text-justify lg:text-xl">İş performansınızı şeffaf bir şekilde analiz eden detaylı raporlarımız, stratejik hedeflerinize ulaşmanız için net bir yol haritası sunar.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-8 px-5 lg:px-20'>
                    <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                        <figure><a className='hover:cursor-pointer'><img loading='lazy' className='rounded-t-box' src={MarkaTescilDesteği} alt="Sürdürülebilirlik" /></a></figure>
                        <div className="card-body">
                            <h2 className="card-title">Yurt Dışı Marka Tescil Desteği</h2>
                            <p className='text-justify'>Yurt dışı marka tescil desteği, şirketlerin yurt içi marka tescil belgesine sahip oldukları markalarının yurtdışında tescili ve korunmasına ilişkin giderlerin karşılanması amacıyla sağlanan bir destektir. Bu destek, şirketlerin markalarını uluslararası pazarlarda koruma altına alarak rekabet güçlerini artırmalarını hedefler.</p>
                            <div className="card-actions justify-end my-2">
                                <a className="link" href='ihracat-destekleri/ihracat-desteklerii/yurt-disi-marka-tescil-destegi'>Devamını oku</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                        <figure><a className='hover:cursor-pointer'><img loading='lazy' className='rounded-t-box' src={MarkaAlım} alt="ISO" /></a></figure>
                        <div className="card-body">
                            <h2 className="card-title">Şirket ve Marka Alım Desteği</h2>
                            <p className='text-justify'>Mali ve Hukuki Danışmanlık Desteği: Yurt dışında yerleşik şirketlerin veya markaların alımına yönelik mali ve hukuki danışmanlık hizmetleri %50 oranında ve yıllık 3.000.000 TL’ye kadar desteklenir. İleri teknolojiye sahip ve teknoloji transferi sağlayacak şirketlerde bu limit 7.500.000 TL’ye kadar çıkabilir.</p>
                            <div className="card-actions justify-end my-2">
                                <a className="link" href='/ihracat-destekleri/e-ihracat-destekleri/sirket-ve-marka-alim-destegi'>Devamını oku</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105" style={{ transitionDuration: '400ms' }}>
                        <figure><a className='hover:cursor-pointer'><img loading='lazy' className='rounded-t-box' src={greenCollarImage} alt="Yeşil Yaka" /></a></figure>
                        <div className="card-body">
                            <h2 className="card-title">Yurt Dışında Şirket Kurmak</h2>
                            <p className='text-justify'>Şirketler, büyüdükçe ürünlerini ve hizmetlerini dış pazarlara sunarak global bir oyuncu olmayı hedefler. Yurt dışında şirketleşmek, potansiyel müşterilere ve pazara daha yakın olmayı sağlar, bu da işletmelere rekabet avantajı sunar.</p>
                            <div className="card-actions justify-end my-2">
                                <a className="link" href='/yurt-disi-sirket-danismanlik'>Devamını oku</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex h-1/3 lg:h-1/5 mx-4 lg:mx-10 lg:gap-10 flex-col lg:flex-row lg:justify-start bg-slate-200 py-10 rounded-box">
                    <div className="flex flex-col justify-center lg:w-2/3 px-10 gap-2">
                        <h1 className="text-3xl font-bold">İşletmenizin Başarısı İçin Kapsamlı Bilgi ve Destek
                        </h1>
                        <p className="text-justify lg:text-xl">Özel danışmanlık hizmetlerimizle, işletmenizin her aşamasında stratejik kararlar almanızı ve hedeflerinize güvenle ulaşmanızı sağlıyoruz.</p>
                    </div>
                </div>

      <div>
        <Stats/>
      </div>
                  

                   
                <div className="flex h-1/3 lg:h-1/5 mx-4 lg:mx-10 lg:gap-10 flex-col-reverse lg:flex-row  bg-slate-200 py-10 rounded-box">
                    <div className="flex flex-col justify-center lg:w-2/3 px-10 gap-2">
                        <h1 className="text-3xl font-bold">İş Verimliliği: Özelleştirilmiş Çözümler</h1>
                        <p className="text-justify lg:text-xl">Size özel geliştirilmiş iş verimliliği stratejilerimizle, operasyonel maliyetlerinizi düşürürken, inovasyon ve büyüme fırsatlarını en üst düzeye çıkarmanıza yardımcı oluyoruz.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;