/** @format */

import Image from "next/image";
import React from "react";

function CommentInput() {
  return (
    <div className="fixed mx-auto bottom-[2rem] bg-white rounded-[1rem]">
      <Image
        src="/avatars/maxblagun"
        alt="Profile of Max Blagun"
        width={50}
        height={50}
      />
      <textarea />
    </div>
  );
}

export default CommentInput;
