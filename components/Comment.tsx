/** @format */

import React from "react";
import CommentScore from "./CommentScore";
import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";

function Comment() {
  return (
    <div className="bg-white text-grayblue p-[1rem] w-1/2 grid grid-cols-[10%_1fr] gap-[0.5rem] rounded-[1rem]">
      {/*  Comment Rating */}
      <CommentScore />
      {/* Comment Header */}
      <CommentHeader />

      {/* Comment content */}
      <CommentContent />
    </div>
  );
}

export default Comment;
