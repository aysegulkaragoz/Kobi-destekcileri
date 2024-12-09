import image1 from "../images/Education.webp";
import susImage from "../images/sustainable.webp";
import isoImage from "../images/ISO.webp";
import greenCollarImage from "../images/greenCollar.webp";

const ServicesPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full">
        <img alt="servis" loading="lazy" className="w-full" src={image1} />
      </div>
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>Hizmetlerimiz</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-16 px-5 lg:px-20">
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a className="hover:cursor-pointer">
              <img
                className="rounded-box"
                src={susImage}
                alt="sürdürülebilirlik"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sürdürülebilirlik</h2>
            <p className="text-justify">
              Geleceğe yatırım yapmanın en etkili yolu bilinçli olmaktan geçer.
              Sürdürülebilirlik eğitimleriyle, bireylerin ve kurumların çevresel
              bilincini artırmayı ve bu bilinci harekete geçirilebilir
              stratejilerle buluşturmayı hedefliyoruz.
            </p>
            <div className="card-actions justify-end my-2">
              <a className="link">Devamını oku</a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a className="hover:cursor-pointer">
              <img className="rounded-box" src={isoImage} alt="ISO" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">ISO 14064-1 Sera Gazı</h2>
            <p>
              ISO 14064-1 standardı, sera gazı (GHG) envanterlerinin
              hazırlanması, raporlanması ve doğrulanması için bir çerçeve
              sağlayan uluslararası bir standarttır. Bu standart, kuruluşların
              sera gazı emisyonlarını ve giderimlerini kapsamlı bir şekilde
              belgelemelerine, yönetmelerine ve raporlamalarına olanak tanır.
            </p>
            <div className="card-actions justify-end my-2">
              <a className="link">Devamını oku</a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a className="hover:cursor-pointer">
              <img
                className="rounded-box"
                src={greenCollarImage}
                alt="Yeşil Yaka"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Yeşil Yaka Hazırlama</h2>
            <p>
              Yeşil yaka iş gücü hazırlığı, sürdürülebilirlik ve çevre dostu
              endüstrilerde çalışacak bireyleri eğitim ve beceri geliştirme
              yoluyla donatmayı hedefler. Bu süreç, yenilenebilir enerji, enerji
              verimliliği, sürdürülebilir tarım, su yönetimi ve atık yönetimi
              gibi alanlarda nitelikli çalışanların yetiştirilmesini içerir.
            </p>
            <div className="card-actions justify-end my-2">
              <a className="link">Devamını oku</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
