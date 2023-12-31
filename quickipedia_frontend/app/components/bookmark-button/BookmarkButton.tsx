import React from "react";

type Props = {
  articleId: string;
  isBookmarked: boolean;
  toggleBookmark: (articleId: string) => void;
};
export const BookmarkButton = ({ isBookmarked, toggleBookmark, articleId}: Props) => {
  const toggleFill: string = isBookmarked ? "fill-rose-50": "fill-none";
  return (
    <button
      type="button"
      className={toggleFill + " group bg-secondaryB-500  betterhover:hover:bg-ternary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"}
      onClick={() => toggleBookmark(articleId)}
    >
      <svg
        className="w-4 h-4 text-primaryB"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M 5 6.2 C 5 5.07989 5 4.51984 5.21799 4.09202 C 5.40973 3.71569 5.71569 3.40973 6.09202 3.21799 C 6.51984 3 7.07989 3 8.2 3 H 15.8 C 16.9201 3 17.4802 3 17.908 3.21799 C 18.2843 3.40973 18.5903 3.71569 18.782 4.09202 C 19 4.51984 19 5.07989 19 6.2 V 21 L 12 16 L 5 21 V 6.2 Z"
        />
      </svg>
    </button>
  );
};
