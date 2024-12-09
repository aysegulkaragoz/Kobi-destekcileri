import image1 from "../images/Adsız.jpg";
import isoImage from "../images/ISO.webp";
import greenCollarImage from "../images/greenCollar.webp";
import İhracatBanner from "../images/İhracatBanner.jpg";
import EİhracatBanner from "../images/EihracatBanner.jpg";

const ExportSupportsPage = () => {
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
          <li>
            <a href="/ihracat-destekleri">İhracat Destekleri</a>
            </li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center py-10"> İhracat Destekleri</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-16 px-5 lg:px-20">
        {/* Card */}
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a
              href="/ihracat-destekleri/ihracat-desteklerii"
              className="hover:cursor-pointer"
            >
              <img
                className="rounded-t-box"
                src={EİhracatBanner}
                alt="sürdürülebilirlik"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mal İhracat Destekleri</h2>
            <p className="flex flex-col gap-2 pt-2">
              <p>
                Bakanlığımızca sunulan ihracat desteklerine yönelik mevzuat ve
                detaylı bilgilere buradan.
              </p>
            </p>
            <div className="card-actions justify-end my-2">
              <a
                href="/ihracat-destekleri/ihracat-desteklerii"
                className="link"
              >
                Devamını oku
              </a>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="flex flex-col bg-base-100 shadow-xl rounded-box transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
          style={{ transitionDuration: "400ms" }}
        >
          <figure>
            <a
              href="/ihracat-destekleri/e-ihracat-destekleri"
              className="hover:cursor-pointer"
            >
              <img
                className="rounded-t-box border border-b-slate-300"
                src={İhracatBanner}
                alt="ISO"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">E-İhracat Destekleri</h2>
            <p className="flex flex-col">
              <p>
                Bakanlığımızca sunulan e-ihracat desteklerine yönelik mevzuat ve
                detaylı bilgilere buradan.
              </p>
            </p>
            <div className="card-actions justify-end my-2">
              <a
                href="/ihracat-destekleri/e-ihracat-destekleri"
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
            <a className="hover:cursor-pointer"href="/ihracat-destekleri/bilisim-destekleri" >
              <img
                className="rounded-t-box"
                src={greenCollarImage}
                alt="Yeşil Yaka"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bilişim Sektörü Destekleri</h2>
            <p>
              Bakanlığımızca sunulan hizmet sektörü desteklerine yönelik mevzuat
              ve detaylı bilgilere buradan.
            </p>
            <div className="card-actions justify-end my-2">
              <a className="link" href="/ihracat-destekleri/bilisim-destekleri">Devamını oku</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportSupportsPage;
