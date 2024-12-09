import ecoImage from '../images/HakkimizdaBanner.jpg';
import bg2 from '../images/7.webp'
import visionMissionImage from '../images/visionMission.webp';

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-full">
                <img alt='Eko İnovasyon' loading='lazy' className='w-full' src={ecoImage} />
            </div>
            <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
                <ul>
                    <li><a href='/'>Anasayfa</a></li>
                    <li>Hakkımızda</li>
                </ul>
            </div>
            <div className="flex bg-slate-50">
                <div className="flex flex-col pb-12 gap-10 lg:gap-5">
                    <div className="flex h-1/2 lg:mx-10 lg:gap-10 flex-col-reverse lg:flex-row">
                        <div className="flex flex-col justify-center px-5 lg:w-1/2 lg:px-10 gap-2">
                            <h1 className="text-3xl">Biz Kimiz</h1>
                            <p className="text-justify">Kobi Destekçisi, olarak mühendislik yetkinliğimizi danışmanlık anlayışıyla birleştirerek danışanlarımızın Ar-Ge, yazılım, ihracat ve girişimcilik alanlarında ulusal ve uluslararası teşviklerden yararlanmalarını sağlıyoruz. Projelendirme süreçlerini yönetmekle beraber iş geliştirme faaliyetlerine doğrudan katkıda bulunarak danışanlarımıza özgün ve inovatif çözümler sunuyoruz. Kurulduğumuz günden bu yana, danışmanlık sektörüne yetkin mühendislik bakış açısıyla yaklaşarak öncü danışmanlık firmalarından biri olmaya devam ediyoruz.</p>
                        </div>
                        <div className="flex lg:w-1/2 justify-center items-center">
                            <img alt='görsel' loading='lazy' className='h-4/6 w-auto' src={bg2} />
                        </div>
                    </div>

                    <div className="flex h-1/2 lg:mx-10 lg:gap-10 flex-col lg:flex-row">
                        <div className="flex lg:w-1/2 justify-center items-center">
                            <img alt='vizyon' loading='lazy' className='h-4/6 w-auto' src={visionMissionImage} />
                        </div>
                        <div className="flex flex-col justify-center px-5 lg:w-1/2 lg:px-10 gap-2">
                            <p className="text-justify"><span className='font-bold'>Vizyonumuz:</span> Yenilikçi bakış açımız ve yetkin mühendislik ekibimiz ile çalışma ortaklarımızın faaliyetlerine doğrudan katkı sağlamak.
                            <br /><br /><span className='font-bold'>Misyonumuz:</span> Dinamik ve yenilikçi çözümler ile küresel çapta iş ortağı olmak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;