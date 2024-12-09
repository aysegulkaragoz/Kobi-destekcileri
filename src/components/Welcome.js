import background from '../images/5.webp'

const Welcome = () => {
    return (
        <div className="min-h-screen flex items-center" style={{ backgroundImage: `url(${background})` }}>
            <div className="flex flex-col pl-20 gap-6 w-1/2">
                <h1 className="text-3xl lg:text-6xl text-slate-100">Sürdürülebilir Gelecek, Akıllı Çözümler</h1>
                <h1 className="text-sm lg:text-xl text-slate-100">Sürdürülebilir bir gelecek, akıllı çözümlerle başlar: Çevresel ayak izini azaltmak ve doğayla uyumu teşvik etmek için yenilikçi yaklaşımlar sunuyoruz.</h1>
                <a href='/iletisim' className="btn lg:w-1/4">Detaylı Bilgi</a>
            </div>
        </div>
    );
}

export default Welcome;