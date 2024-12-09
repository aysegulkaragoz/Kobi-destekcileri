import academySustainableImage from "../images/academySustainable.png";
import academyTrashCanImage from "../images/AcademyTrashCan.png";

const AcademyHomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-12 bg-slate-50 items-center py-20">
        <h1 className="text-6xl w-2/3">
          Sürdürülebilirlikle Alakalı Güzel Bir Slogan
        </h1>
        <div className="flex flex-1 rounded-box items-center justify-end">
          <img className="max-h-96" src={academySustainableImage} />
        </div>
      </div>
      <div className="w-full bg-gradient-to-tr flex from-green-400 to-green-600 items-center justify-center py-16">
        <h1 className="text-4xl w-1/2 text-center">
          Verdiğimiz Sürdürülebilirlik Eğitimiyle Alakalı Kısa Bir Bilgi Yazısı
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row px-12 bg-slate-50 py-20">
          <div className="flex flex-1 rounded-box items-center justify-start">
            <img className="max-h-96" src={academyTrashCanImage} />
          </div>
          <div className="flex flex-col w-1/2 py-20 justify-between">
            <h1 className="text-4xl">
              Verdiğimiz Sürdürülebilirlik eğitimi ile ilgili bir başlık
            </h1>
            <p className="text-xl">
              Verdiğimiz Sürdürülebilirlik Eğitimi ile ilgili kısa ve güzel bir
              açıklama. Açıklama Yazısını buraya yerleştirdiğimizde gayet güzel
              bir görüntü oluşacağına olan inancım tam.
            </p>
          </div>
        </div>
      </div>
      <a
        href=""
        className="flex items-center bg-green-500 transition-colors duration-1000 justify-center parent group py-20 hover:bg-green-700"
      >
        <h1 className="text-8xl transition-all duration-1000 group-hover:scale-110 group-hover:text-white">
          Eğitimlerimiz
        </h1>
      </a>
    </div>
  );
};

export default AcademyHomePage;
