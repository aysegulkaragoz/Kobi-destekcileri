import image1 from "../images/HakkimizdaBanner.jpg";
import social_tubitak1 from "../images/social-tubitak1.webp";
import social_tubitak2 from "../images/social-tubitak2.webp";

const SocialResponsibilityPage = () => {
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
          <li>Sosyal Sorumluluğumuz</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">
        Sosyal Sorumluluğumuz
      </h1>
      <div className="flex flex-col w-full pb-16 px-5 lg:px-20">
        {/* Component */}
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-bold">
          Öğrenme Güçlüğü Çeken Çocukların Sanal Gerçeklik ile Eğitimine Destek
          </h1>
          <div className="flex flex-col lg:flex-row gap-5">
            <img
              alt="tubitak"
              loading="lazy"
              className="lg:w-1/4"
              src={social_tubitak1}
            />
            <img
              alt="tubitak"
              loading="lazy"
              className="lg:w-1/4"
              src={social_tubitak2}
            />
            <p>
              Şirketimiz olarak, sosyal sorumluluk bilinciyle topluma katkı
              sağlamayı önemsiyoruz. Bu kapsamda, lise öğrencilerinin yürüttüğü
              ve TÜBİTAK tarafından desteklenen bir projeye katkıda bulunmaktan
              büyük mutluluk duyuyoruz. 
              <br />
              <br />
              Bu proje, öğrenme güçlüğü çeken 8-12 yaş
              aralığındaki çocuklara sanal gerçeklik (VR) ortamında eğitici
              oyunlar oynatarak, dikkat seviyelerini ve ince motor becerilerini
              geliştirmeyi amaçlamaktadır. Çocukların eğitim sürecini daha
              etkili ve eğlenceli hale getiren bu projeye destek olmak için,
              gereken VR gözlükleri ve proje geliştirme sürecinde ihtiyaç
              duyulan bilgisayarları temin ettik. 
              <br />
              <br />
              Geleceğin teknolojilerini
              kullanarak çocuklarımızın eğitimine katkıda bulunmak, bizler için
              büyük bir gurur kaynağıdır. Eğitimde yenilikçi çözümlerle
              çocuklarımızın gelişimine katkı sağlamaya devam edeceğiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibilityPage;
