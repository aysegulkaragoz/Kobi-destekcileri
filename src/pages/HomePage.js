import WhoWeAre from "../components/WhoWeAre";
import Blog from "../components/Blog";
import AutoSlide from "../components/AutoSlide";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Sürdürülebilir Bir Dünya İçin Birlikte Harekete Geçelim"
        />
        <meta
          property="og:description"
          content="Sürdürülebilir Bir Dünya İçin Birlikte Harekete Geçelim"
        />
      </Helmet>
      <div className="flex flex-col">
        <AutoSlide />
        <WhoWeAre />
        <Blog />
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
