import React, { useState } from "react";
import catImage from "../assets/ebooks-dog.jpg";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    showPopup && (
      <div className="fixed inset-x-0 bottom-0 p-4">
        <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm">
          <button
            onClick={() => setShowPopup(false)}
            type="button"
            className="absolute right-1 top-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="red"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              alt=""
              src={catImage}
              className="h-full w-full rounded-xl object-cover"
            />

            <div>
              <h2 className="text-lg font-medium">
                Discover the Secret Lives of Your Furry Friends!
              </h2>
              {/* Elevate your pet's life with wisdom at your fingertips. */}
              <p className="mt-4 text-sm text-gray-500">
                Start your journey to happier, healthier pets today with our top
                ebooks on dog training and cat health.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Perfect for new and seasoned pet parents alike.
              </p>
              <div className="mt-6 sm:text-right">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
