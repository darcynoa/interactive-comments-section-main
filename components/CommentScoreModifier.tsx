/** @format */

import React from "react";

interface CommentScoreModifierProps {
  action: string;
}

function CommentScoreModifier(props: CommentScoreModifierProps) {
  return (
    <button
      type="button"
      className="text-lightgrayblue hover:text-modblue text-[1.2rem]"
    >
      {props.action}
    </button>
  );
}

export default CommentScoreModifier;
