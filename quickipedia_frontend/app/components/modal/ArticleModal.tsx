"use client";
import { ArticleBody } from "@/app/utils/types";
import Link from "next/link";
import React from "react";
import { SpeechButton } from "../speech-button/SpeechButton";
import ReactDOM from "react-dom";

interface ArticleModalProps extends ArticleBody {
  onClose: () => void;
  isVisible: boolean;
}

export const ArticleModal = ({
  article,
  isVisible,
  onClose,
}: ArticleModalProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalClass = isVisible
    ? "animate-expand lg:animate-expand_high"
    : "animate-shrink lg:animate-shrink_high";
  const backdropClass = isVisible
    ? "animate-fade_in"
    : "animate-fade_out pointer-events-none";

  console.log("Modal class: " + modalClass);
  const modalContent = (
    <>
      <div
        className={`fixed inset-0 bg-black/50 h-screen opacity-50 ${backdropClass}`}
        onClick={onClose}
      ></div>
      <div
        className={`flex justify-around ${modalClass} overflow-hidden fixed top-20 left-0 right-0 mx-5 drop-shadow-lg`}
      >
        <div className="border border-gray-200 bg-primaryB rounded-xl mb-3 w-[90%] md:w-[75%] lg:w-[60%]">
          <div className="flex justify-end p-2">
            {
              <button onClick={onClose} className="p-1 rounded-xl group transition ease-in-out delay-150 betterhover:hover:bg-secondaryB-500">
                <svg
                  className="w-6 h-6 text-secondary transition ease-in-out delay-150 betterhover:group-hover:text-secondaryB-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </g>
                </svg>
              </button>
            }
          </div>
          <div className="px-5 text-left text-secondary pb-5">
            <div className="flex flex-row align-middle space-x-3 mb-3">
              <h1 className=" text-xl font-medium">{article.question}</h1>
              <SpeechButton text={article.answer} />
            </div>
          
          <p
            data-te-modal-init
            id="default-modal"
            tabIndex={-1}
            aria-labelledby="exampleModalFullscreenLabel"
            aria-hidden="true"
            className=" text-md mb-5"
          >
            {article.answer}
          </p>
          <Link
            className="underline hover:text-ternary"
            target="_blank"
            href={article.source}
          >
            {"Read more at " + article.source.split(".")[1]}
          </Link>
            </div>
        </div>
      </div>
    </>
  );
  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    return ReactDOM.createPortal(modalContent, modalRoot);
  }
};
