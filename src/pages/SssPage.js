import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const SssPage = () => {
  const [index, setindex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>Sıkça Sorulan Sorular</li>
        </ul>
      </div>
      <div className="px-5 lg:px-20 pt-8 pb-8 w-full flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">
          Sıkça Sorulan Sorular
        </h1>
        <div className="flex flex-col gap-2">
          {/* Soru1 */}
          <div className="flex flex-col w-full border-2 border-gray-500 rounded-md">
            <button
              onClick={() => {
                if (index == 1) {
                  setindex(0);
                } else {
                  setindex(1);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 1 ? "border-2 border-b-gray-500" : "hover:bg-slate-500"
              }`}
            >
              {index != 1 ? <Add /> : <Remove />}
              <h1 className="text-lg">Sürdürülebilirlik nedir?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 1 ? "hidden" : null}`}>
              Sürdürülebilirlik, mevcut neslin ihtiyaçlarını karşılarken gelecek
              nesillerin de kendi ihtiyaçlarını karşılayabilmesini sağlamak için
              çevresel dengenin korunması, sosyal adaletin sağlanması ve
              ekonomik dayanıklılığın geliştirilmesi prensiplerine dayanan bir
              yaklaşımdır.
            </div>
          </div>

          {/* Soru2 */}
          <div className="flex flex-col w-full border-2 border-gray-500 rounded-md">
            <button
              onClick={() => {
                if (index == 2) {
                  setindex(0);
                } else {
                  setindex(2);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 2 ? "border-2 border-b-gray-500" : "hover:bg-slate-500"
              }`}
            >
              {index != 2 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Karbon yönetimi nedir ve neden önemlidir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 2 ? "hidden" : null}`}>
              Karbon yönetimi, bir organizasyonun karbon ayak izini ölçmek,
              yönetmek ve azaltmak için uyguladığı süreçlerin bütünüdür. İklim
              değişikliğiyle mücadelede kritik bir role sahip olan bu süreç,
              işletmelerin çevresel etkilerini azaltmalarına ve
              sürdürülebilirlik hedeflerine ulaşmalarına yardımcı olur.
            </div>
          </div>

          {/* Soru3 */}
          <div className="flex flex-col w-full border-2 border-gray-500 rounded-md">
            <button
              onClick={() => {
                if (index == 3) {
                  setindex(0);
                } else {
                  setindex(3);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 3 ? "border-2 border-b-gray-500" : "hover:bg-slate-500"
              }`}
            >
              {index != 3 ? <Add /> : <Remove />}
              <h1 className="text-lg">Karbon ofseti nedir ve nasıl çalışır?</h1>
            </button>
            <div className={`py-5 px-2 ${index != 3 ? "hidden" : null}`}>
              Karbon ofseti, işletmelerin ve bireylerin kendi karbon
              emisyonlarını dengelemek için karbon emisyonlarını azaltan
              projelere yatırım yapmalarıdır. Bu projeler genellikle
              yenilenebilir enerji, ormancılık veya enerji verimliliği projeleri
              olabilir ve yatırım yapılan her birim karbon, işletmenin
              emisyonlarını dengelemek için kullanılır.
            </div>
          </div>

          {/* Soru4 */}
          <div className="flex flex-col w-full border-2 border-gray-500 rounded-md">
            <button
              onClick={() => {
                if (index == 4) {
                  setindex(0);
                } else {
                  setindex(4);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 4 ? "border-2 border-b-gray-500" : "hover:bg-slate-500"
              }`}
            >
              {index != 4 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                ESG danışmanlığı nedir ve işletmelere nasıl fayda sağlar?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 4 ? "hidden" : null}`}>
              ESG (Çevresel, Sosyal ve Yönetişim) danışmanlığı, işletmelerin ESG
              performanslarını geliştirmelerine yardımcı olacak stratejiler
              geliştirmelerine ve uygulamalarına destek olan bir hizmettir. Bu
              hizmet, işletmelerin çevresel uyumlarını artırır, sosyal
              sorumluluklarını güçlendirir ve yönetişim yapılarını iyileştirir,
              böylece yatırımcı ilgisini ve pazar rekabetçiliğini artırır.
            </div>
          </div>

          {/* Soru5 */}
          <div className="flex flex-col w-full border-2 border-gray-500 rounded-md">
            <button
              onClick={() => {
                if (index == 5) {
                  setindex(0);
                } else {
                  setindex(5);
                }
              }}
              className={`flex flex-row gap-2 items-center py-2 px-2 transition-colors ease-in duration-100 ${
                index == 5 ? "border-2 border-b-gray-500" : "hover:bg-slate-500"
              }`}
            >
              {index != 5 ? <Add /> : <Remove />}
              <h1 className="text-lg">
                Sürdürülebilirlik raporlaması nedir ve neden önemlidir?
              </h1>
            </button>
            <div className={`py-5 px-2 ${index != 5 ? "hidden" : null}`}>
              Sürdürülebilirlik raporlaması, bir işletmenin çevresel, sosyal ve
              yönetişim performansı hakkında bilgi veren ve genellikle yıllık
              olarak yayınlanan bir rapordur. Bu raporlamalar, şeffaflığı
              artırarak işletmelerin paydaşlarına hesap verebilirliğini gösterir
              ve sürdürülebilirlik hedeflerine ulaşmada ilerlemeleri konusunda
              bilgi sağlar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SssPage;
