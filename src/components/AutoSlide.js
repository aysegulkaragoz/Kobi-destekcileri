import welcome1 from "../images/welcome1.jpg";
import welcome2 from "../images/welcome2.jpg";
import welcome3 from "../images/welcome3.jpg";
import img4 from "../images/12.webp";
import { useState, useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const preloadSrcList = [welcome1, welcome2, welcome3, img4];

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}

const AutoSlide = () => {
  const [curr, setCurr] = useState(0);

  const slides = [
    <img alt="slide" key={0} src={welcome1} />,
    <img alt="slide" key={1} src={welcome2} />,
    <img alt="slide" key={2} src={welcome3} />,
    <img alt="slide" key={3} src={img4} />,
  ];

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled) {
        return;
      }

      const imagesPromiseList = [];
      for (const i of preloadSrcList) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }
    }

    effect();

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, []);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button aria-label="sliderLeftButton" id="sliderLeftButton" onClick={() => prev()} className="text-white">
          <ArrowCircleLeftIcon fontSize="large" />
        </button>
        <button aria-label="sliderRightButton" id="sliderRightButton" onClick={() => next()} className="text-white">
          <ArrowCircleRightIcon fontSize="large" />
        </button>
      </div>
      <div className="flex flex-col pl-20 gap-6 w-1/2 absolute inset-0 items-center justify-center">
        <h1 className="text-xl lg:text-6xl text-white">
        Stratejik İş Danışmanlığı, Akıllı Çözümler
        </h1>
        <h1 className="text-sm lg:text-xl text-slate-100 hidden lg:flex">
        Stratejik iş danışmanlığı, akıllı çözümlerle başlar: İş süreçlerinizi optimize etmek, verimliliği artırmak ve büyümenizi hızlandırmak için yenilikçi yaklaşımlar sunuyoruz.
        </h1>
        <a href="/iletisim" className="btn lg:w-1/4 self-start hidden lg:flex">
          Detaylı Bilgi
        </a>
      </div>
    </div>
  );
};

export default AutoSlide;
