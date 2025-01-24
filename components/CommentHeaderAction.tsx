/** @format */

import React from "react";
import Image from "next/image";

interface CommentHeaderActionsProps {
  type: "delete" | "edit" | "reply";
}

function CommentHeaderAction(props: CommentHeaderActionsProps) {
  return (
    <button
      type="button"
      className="flex gap-[0.5rem] justify-center items-center"
    >
      <Image src={`icon-${props.type}.svg`} alt="Reply using this button" width={13} height={13} />
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
