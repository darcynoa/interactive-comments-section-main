/** @format */

import React from "react";
import CommentScoreModifier from "./CommentScoreModifier";

function CommentScore() {
  return (
    <div className="row-span-2">
      <div className="flex flex-col gap-[0.5rem] justify-between items-center bg-lightgray rounded-[0.75rem] w-fit px-[1rem] py-[0.25rem] font-medium">
        {/* Score Modifier Button + */}
        <CommentScoreModifier action={"+"} />
        <p className="text-darkblue">8</p>
        {/* Score Modifier Button - */}
        <CommentScoreModifier action={"-"} />
      </div>
    </div>
  );
}

export default CommentScore;
