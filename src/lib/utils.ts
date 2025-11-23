import { clsx, type ClassValue } from "clsx";
import { ToastOptions } from "react-toastify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toastOptions: ToastOptions = {
  autoClose: 5000,
  // type: toast.TYPE.INFO,
  position: "top-right",
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  // className: "sm:!w-[90%] mx-auto",
};
