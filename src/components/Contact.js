import React, { useState } from "react";
import { send } from "emailjs-com";
import { Element } from "react-scroll";
import Notification from "./Notification";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Ashutosh Gautam",
    message: "",
    reply_to: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setError("");
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (
      toSend.from_name === "" ||
      toSend.message === "" ||
      toSend.reply_to === ""
    ) {
      setError("Plese enter all details");
      return;
    }

    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!toSend.reply_to.match(validRegex)) {
      setError("please enter valid email id");
      return;
    }

    if (toSend.message.length < 50) {
      setError("Enter message with at least 50 character");
      return;
    }

    send(
      "service_9n4hxnc",
      "template_h2aj87l",
      toSend,
      "user_rPqnnzdCtlABCTTUB4ZXP"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Done");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Error");
      });
  };

  return (
    <section class="text-gray-600 body-font relative">
      <Element name="to-contact">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Feel free to contact
          </p>
        </div>
        {error && <Notification message={error} onClose={() => setError("")} />}
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={toSend.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                onClick={onSubmit}
                class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Send
              </button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="aashutoshgautam2611@gmail.com" class="text-blue-500">
                aashutoshgautam2611@gmail.com
              </a>
              <p class="leading-normal my-5">
                Indore
                <br />
                Madhya Pradesh, India 456010
              </p>
            </div>
          </div>
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Contact;
