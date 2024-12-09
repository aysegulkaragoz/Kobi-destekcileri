import image1 from "../images/Education.webp";
import isoImage from "../images/ISO.webp";
import greenCollarImage from "../images/greenCollar.webp";
import kosgeb from "../images/kosgeb-paper-small.webp";
import tubitak from "../images/tubitak-afis.webp";

const GreenSupportsPage = () => {
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
          <li>Yeşil Destekler</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10">Yeşil Destekler</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-16 px-5 lg:px-20">
        {/* Card */}
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a
              href="/yesil-destekler/kosgeb-yesil-sanayi-destek-programi"
              className="hover:cursor-pointer"
            >
              <img
                className="rounded-t-box"
                src={kosgeb}
                alt="sürdürülebilirlik"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">KOSGEB Yeşil Sanayi Destek Programı</h2>
            <p className="flex flex-col gap-2 pt-2">
              <h1 className="font-semibold">
                Programın Amacı ve Kapsamı Nedir?
              </h1>
              <p>
                Programın Amacı küçük ve orta ölçekli işletmelerin yeşil
                dönüşümünü verimli bir şekilde gerçekleştirmelerine katkı
                sağlamaktır.
              </p>
            </p>
            <div className="card-actions justify-end my-2">
              <a
                href="/yesil-destekler/kosgeb-yesil-sanayi-destek-programi"
                className="link"
              >
                Devamını oku
              </a>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a
              href="/yesil-destekler/tubitak-yesil-donusum-destek-programi"
              className="hover:cursor-pointer"
            >
              <img
                className="rounded-t-box border border-b-slate-300"
                src={tubitak}
                alt="ISO"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">TÜBİTAK Yeşil Destek Programı</h2>
            <p className="flex flex-col gap-2 pt-2">
              <h1 className="font-semibold">
                Programın Amacı ve Kapsamı Nedir?
              </h1>
              <p>
                KOBİ'ler ve büyük firmalar ile üniversiteler, araştırma
                altyapıları ve kamu araştırma merkezleri bu destekler
                aracılığıyla yeşil dönüşüm odaklı teknolojik çözümler
                geliştirecek.
              </p>
            </p>
            <div className="card-actions justify-end my-2">
              <a
                href="/yesil-destekler/tubitak-yesil-donusum-destek-programi"
                className="link"
              >
                Devamını oku
              </a>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box  transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a className="hover:cursor-pointer">
              <img
                className="rounded-t-box"
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
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
         
         </div>
      </div>
    </div>
  );
};

export default GreenSupportsPage;
