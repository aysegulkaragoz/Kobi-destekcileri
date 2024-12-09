import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import zeroWasteImage from "../images/zeroWaste.webp";
import greenOfficeImage from "../images/ofis.webp";
import iso1Image from "../images/ISO1.webp";
import carbonFootprintImage from "../images/carbonFootprint.webp";
import esrsImage from "../images/esrs.webp";
import carbonCreditImage from "../images/carbonCredit.webp";

const RightNavigationCarbonSolutions = () => {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col lg:w-full p-5 rounded-box gap-5 bg-green-50">
        <h1 className="text-xl">Karbon Çözümleri</h1>
        <div className="flex flex-col w-full gap-3">
          <a
            href="/karbon-cozumleri/karbon-cozumleri"
            className="w-full bg-white rounded-md px-2 py-2 parent group hover:cursor-pointer"
          >
            <div className="transition group-hover:translate-x-3 duration-700 flex flex-row">
              <div className="opacity-0 child group-hover:opacity-100 transition-opacity ease-in duration-700">
                <KeyboardArrowRightIcon fontSize="small" />
              </div>
              <p>Karbon Yönetimi</p>
            </div>
          </a>
          <a
            href="/karbon-cozumleri/karbon-ofset"
            className="w-full bg-white rounded-md px-2 py-2 parent group hover:cursor-pointer"
          >
            <div className="transition group-hover:translate-x-3 duration-700 flex flex-row">
              <div className="opacity-0 child group-hover:opacity-100 transition-opacity ease-in duration-700">
                <KeyboardArrowRightIcon fontSize="small" />
              </div>
              <p>Ahmet</p>
            </div>
          </a>
          <a
            href="/karbon-cozumleri/sera-gazi-azaltim-ve-uzaklastirma-projelerinin-hazirlanmasi"
            className="w-full bg-white rounded-md px-2 py-2 parent group hover:cursor-pointer"
          >
            <div className="transition group-hover:translate-x-3 duration-700 flex flex-row">
              <div className="opacity-0 child group-hover:opacity-100 transition-opacity ease-in duration-700">
                <KeyboardArrowRightIcon fontSize="small" />
              </div>
              <p>Sera Gazı Azaltım ve Uzaklaştırma Projelerinin Hazırlanması</p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:w-full p-5 rounded-box gap-5 bg-green-50">
        <h1 className="text-xl">Blog</h1>
        <div className="flex flex-col w-full">
          <a
            href="/blog/sifir-atik-gelecek-nesillere-temiz-bir-dunya-birakmak"
            className="flex flex-row w-full px-2 py-2 hover:cursor-pointer gap-2 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ transitionDuration: "400ms" }}
          >
            <div className="w-1/2">
              <img
                alt="Sıfır Atık"
                loading="lazy"
                className="rounded-box"
                src={zeroWasteImage}
              />
            </div>
            <div className="w-1/2">
              <p className="line-clamp-3">
                Sıfır Atık: Gelecek Nesillere Temiz Bir Dünya Bırakmak
              </p>
            </div>
          </a>
          <a
            href="/blog/daha-yesil-ve-surdurulebilir-ofisler-icin-oneriler"
            className="flex flex-row w-full px-2 py-2 hover:cursor-pointer gap-2 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ transitionDuration: "400ms" }}
          >
            <div className="w-1/2">
              <img
                alt="Yeşil Ofis"
                loading="lazy"
                className="rounded-box"
                src={greenOfficeImage}
              />
            </div>
            <div className="w-1/2">
              <p className="line-clamp-3">
                Daha Yeşil ve Sürdürülebilir Ofisler için Öneriler
              </p>
            </div>
          </a>
          <a
            href="/blog/iso-14064-1-standardi"
            className="flex flex-row w-full px-2 py-2 hover:cursor-pointer gap-2 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ transitionDuration: "400ms" }}
          >
            <div className="w-1/2">
              <img
                alt="ISO"
                loading="lazy"
                className="rounded-box"
                src={iso1Image}
              />
            </div>
            <div className="w-1/2">
              <p className="line-clamp-3">ISO 14064-1 Standardı</p>
            </div>
          </a>
          <a
            href="/blog/karbon-ayak-izi-kisisel-ve-kurumsal-etkimizi-anlamak"
            className="flex flex-row w-full px-2 py-2 hover:cursor-pointer gap-2 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ transitionDuration: "400ms" }}
          >
            <div className="w-1/2">
              <img
                alt="karbon"
                loading="lazy"
                className="rounded-box"
                src={carbonFootprintImage}
              />
            </div>
            <div className="w-1/2">
              <p className="line-clamp-3">
                Karbon Ayak İzi: Kişisel ve Kurumsal Etkimizi Anlamak
              </p>
            </div>
          </a>
          <a
            href="/blog/avrupa-surdurulebilirlik-raporlama-standartlari"
            className="flex flex-row w-full px-2 py-2 hover:cursor-pointer gap-2 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ transitionDuration: "400ms" }}
          >
            <div className="w-1/2">
              <img
                alt="esrs"
                loading="lazy"
                className="rounded-box"
                src={esrsImage}
              />
            </div>
            <div className="w-1/2">
              <p className="line-clamp-3">
                Avrupa Sürdürülebilirlik Raporlama Standartları (ESRS)
              </p>
            </div>
          </a>
          <a
            href="/blog/karbon-kredisi-atmosfere-salinan-karbonu-dengelemek"
            className="flex flex-row w-full px-2 py-2 hover:cursor-pointer gap-2 transition-transform scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105"
            style={{ transitionDuration: "400ms" }}
          >
            <div className="w-1/2">
              <img
                alt="Karbon Kredisi"
                loading="lazy"
                className="rounded-box"
                src={carbonCreditImage}
              />
            </div>
            <div className="w-1/2">
              <p className="line-clamp-3">
                Karbon Kredisi: Atmosfere Salınan Karbonu Dengelemek
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightNavigationCarbonSolutions;
