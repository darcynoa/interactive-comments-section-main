/** @format */

import React from "react";

interface CommentHeaderActionsProps {
  type: "delete" | "edit" | "reply";
}

function CommentHeaderAction(props: CommentHeaderActionsProps) {
  return (
    <button
      type="button"
      className="flex gap-[0.5rem] justify-center items-center"
    >
      <img src={`\icon-${props.type}.svg`} alt="Reply using this button" />
      <h4
        className={`${
          props.type === "delete" ? "text-error" : "text-modblue"
        } font-medium capitalize`}
      >
        {props.type}
      </h4>
    </button>
  );
}

export default CommentHeaderAction;
