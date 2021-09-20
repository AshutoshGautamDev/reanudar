import React from "react";
import { Close } from "./Icons";

const Notification = ({ message, onClose }) => {
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative justify-center ml-auto mr-auto w-1/3"
      role="alert"
    >
      <strong class="font-bold mr-2">Holy smokes!</strong>
      <span class="block sm:inline">{message}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
        <Close />
      </span>
    </div>
  );
};

export default Notification;
