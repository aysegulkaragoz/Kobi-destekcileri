import { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from '@mui/icons-material/Error';

const ScheduleMeetingPage = () => {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const availableTimeslots = [
    0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17,
  ].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      ),
    };
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pliu18a", "template_ebx4rfj", form.current, {
        publicKey: "5t58b_PUzWCz8t6sa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("failed");
        }
      );
  };

  const Scheduler = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-10 py-10 ">
        <h1 className="text-3xl">Bizimle iletişime Geçin</h1>
        <div className="flex flex-row gap-5 items-center justify-center px-20">
          <ScheduleMeeting
            borderRadius={10}
            primaryColor="#3f5b85"
            eventDurationInMinutes={60}
            availableTimeslots={availableTimeslots}
            format_startTimeFormatString="H:ss"
            startTimeListStyle="scroll-list"
            onStartTimeSelect={(value) => {
              const hours =
                value.startTime.getHours() < 10
                  ? "0" + value.startTime.getHours()
                  : value.startTime.getHours();
              const minutes =
                value.startTime.getMinutes() < 10
                  ? "0" + value.startTime.getMinutes()
                  : value.startTime.getMinutes();
              setDate(
                `${value.startTime.getDate()}/${
                  value.startTime.getMonth() + 1
                }/${value.startTime.getFullYear()} ${hours}:${minutes}`
              );
            }}
          />
          <form
            className="flex flex-col shadow-xl h-full p-10 rounded-box border"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="label">İsminiz</label>
            <input
              type="text"
              className="input input-bordered"
              name="user_name"
            />
            <label className="label">E-Postanız</label>
            <input
              type="email"
              className="input input-bordered"
              name="user_email"
            />
            <label className="label">Telefon Numaranız</label>
            <input
              type="number"
              className="input input-bordered"
              name="phone_number"
            />
            <label className="label">Mesajınız</label>
            <textarea
              className="textarea textarea-bordered"
              name="message"
              placeholder="Varsa mesajınızı giriniz."
            ></textarea>
            <input
              id="date-input"
              defaultValue={date}
              type="text"
              className="input input-bordered"
              hidden={true}
              name="date"
            />
            <br />
            <input type="submit" className="btn" value="Gönder" />
          </form>
        </div>
      </div>
    );
  };

  const Success = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-10 h-full w-full">
        <CheckCircleIcon fontSize="large" color="success" />
        <h1>
          Bizimle iletişime geçtiğiniz için teşekkür ederiz. En yakın zamanda
          bizden haber alacaksınız.
        </h1>
        <a
          aria-label="anasayfaya-don"
          href="/"
          className="px-8 py-2 z-10 rounded-full text-white"
          style={{ backgroundColor: "#0168FF" }}
        >
          Anasayfaya Dön
        </a>
      </div>
    );
  };

  const Failed = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-10 h-full w-full">
        <ErrorIcon fontSize="large" color="error"/>
        <h1>
          Teknik bir arızadan dolayı talebiniz iletilemedi. Lütfen tekrar deneyiniz.
        </h1>
        <a
          aria-label="anasayfaya-don"
          href="/"
          className="px-8 py-2 z-10 rounded-full text-white"
          style={{ backgroundColor: "#0168FF" }}
        >
          Anasayfaya Dön
        </a>
      </div>
    );
  };

  return status == "" ? <Scheduler /> : status == "success" ? <Success /> : <Failed />
};

export default ScheduleMeetingPage;
