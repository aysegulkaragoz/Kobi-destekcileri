import logo from "../images/Logo3.png";

const WeInTheMediaPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>Medyada Biz</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center">Medyada Biz</h1>
      <p className="text-lg py-10 px-5">
        Kobi Destekçisi ile ilgili medyadaki haberleri ve gelişmeleri aşağıda
        bulabilirsiniz.
      </p>
      <div className="flex w-full items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-20 gap-y-10 gap-x-32 py-10">
          <div className="flex flex-col-reverse lg:flex-row lg:col-span-2 gap-x-32 gap-y-10">
            {/* Video */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Video Konusu</h1>
              <div className="overflow-scroll">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Lw4unI3tVNQ?si=tbiidLT79utzsR9B"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Tanıtım Yazısı */}
            <div className="flex flex-col w-full justify-center items-center gap-10">
              <img className="w-16" src={logo} />
              <h1 className="">
                Bizi aşağıdaki platformlarda takip edebilirsiniz.
              </h1>
              <div className="grid grid-flow-col gap-10">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Video Konusu</h1>
            <div className="overflow-scroll">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jsvWvrAWhVE?si=qKZ1zTIFJxk94EE6"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Video Konusu</h1>
            <div className="overflow-scroll">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Q-3JzHIHVGU?si=Q6J82d8EnQ6o8RjQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* Video */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Video Konusu</h1>
            <div className="overflow-scroll">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/HUnnxRicDwM?si=mMHJK6TeNpLug1v6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* Video */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Video Konusu</h1>
            <div className="overflow-scroll">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/i6CSvLvSNZ4?si=cUfScQBRFp-f2x6-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeInTheMediaPage;
