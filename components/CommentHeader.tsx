/** @format */

import React from "react";
import Image from "next/image";
import CommentHeaderAction from "./CommentHeaderAction";

function CommentHeader() {
  return (
    <div className="flex gap-[1rem] justify-between items-center py-[0.15rem]">
      <Image
        src="/avatars/image-amyrobson.png"
        alt="Your profile picture!"
        width={32}
        height={32}
      />

      <h4 className="font-medium text-darkblue lowercase">noreturndancing</h4>
      <span className="bg-modblue text-white px-[0.5rem] text-[0.85rem] rounded-[0.25rem] -ml-[0.25rem]">
        you
      </span>
      <p className="mr-auto">1 month ago</p>
      <CommentHeaderAction type={"delete"} />
    </div>
  );
}

export default CommentHeader;
