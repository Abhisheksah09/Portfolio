import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1aqvn1u", "template_ajw35ws", form.current, {
        publicKey: "9OqJmoJu0ShvBOf56",
      })
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-black py-12 px-2">
      <div className="md:mx-[7rem]  sm:mx-[6rem] py-6 md:py-10 text-center sm:text-left">
        <h1 className="text-4xl text-white font-bold border-b-4 border-cyan-500 p-2 inline">
          Contact
        </h1>
        <p className="py-4 md:py-6 text-gray-300">Let's Work Together</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center lg:px-20">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full md:w-1/2 lg:w-5/12 lg:px-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="from_name"
                    className="block w-full border-2 border-solid-black rounded bg-transparent py-1 px-3 text-white outline-none transition-all duration-200 ease-linear"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    name="from_email"
                    className="block w-full border-2 border-solid-black rounded bg-transparent py-1 px-3 text-white outline-none transition-all duration-200 ease-linear"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="block w-full border-2 border-solid-black rounded bg-transparent py-1 px-3 text-white outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mb-2 w-full border-2 border-solid-black rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full lg:w-7/12 mt-8 lg:mt-0 text-center   md:text-left">
              <div className="flex flex-wrap ">
                <div className="mb-12 w-full md:w-1/2 lg:px-8">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow ">
                      <p className="mb-2 font-bold text-white">Contact</p>

                      <a
                        href={`tel:8879003313`}
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        8879003313
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold text-white">Email</p>

                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        sahabhishek097@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12.75a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0zM15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold text-white">GitHub</p>

                      <a
                        href="https://github.com/Abhisheksah09/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        github.com/Abhisheksah09
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full md:w-1/2 px-4 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8.25v3.75h3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold text-white">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        https://www.linkedin.com/in/abhishek-sah-782409265/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
