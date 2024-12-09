import image1 from "../images/contact3.webp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full">
        <img alt="iletişim" loading="lazy" className="w-full" src={image1} />
      </div>
      <div className="text-base lg:text-lg breadcrumbs px-5 lg:px-20 pt-8 pb-8 w-full">
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>İletişim</li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 px-5 lg:px-10">
        <div className="flex flex-col flex-1 bg-slate-100 rounded-box gap-5 py-16 justify-center">
          <div className="flex flex-row gap-2 items-center px-10">
            <PhoneIcon />
            <div className="flex flex-col">
              <p>Telefon</p>
              <p>+90 532 761 45 82</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center px-10">
            <WhatsAppIcon />
            <div className="flex flex-col">
              <p>Whatsapp</p>
              <p>+90 532 761 45 82</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center px-10">
            <MailIcon />
            <div className="flex flex-col">
              <p>E-Posta</p>
              <p>info@sustechclick.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center px-10">
            <BusinessIcon />
            <div className="flex flex-col">
              <p>Adres</p>
              <p>
                BALCALI MAH. GÜNEY KAMPÜS BULV. TEKNOKENT SİTESİ YÖNETİM ve
                KULUÇKA MERKEZİ, 01330 SARIÇAM/ADANA
              </p>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col flex-1 bg-slate-100 rounded-box gap-5 py-10 text-center'>
                    <h1 className='text-xl'>İletişim Formu</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder='Adınız Soyadınız' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder='E-Postanız' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder='Telefon Numaranız' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder='Mesajınız' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button aria-label='contactSendButton' id='contactSendButton' type='button' className="btn btn-success text-white">Gönder</button>
                        </div>
                    </form>
                </div> */}
      </div>
      <div className="flex w-full px-5 lg:px-10 pb-20 pt-10">
        <iframe
          className="w-full rounded-box"
          width="600"
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1940.0897385977162!2d35.3609417424613!3d37.04258627705082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288fe3ce7b1e8b%3A0x8ee4849316454d6b!2zw4d1a3Vyb3ZhIFRla25vbG9qaSBHZWxpxZ90aXJtZSBCw7ZsZ2VzaSBZw7ZuZXRpY2kgQS7Fng!5e0!3m2!1str!2str!4v1710428887194!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
