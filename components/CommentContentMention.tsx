/** @format */

import React from "react";

interface CommentContentMentionProps {
  handle: string;
}

function CommentContentMention(props: CommentContentMentionProps) {
  return (
    <span className="text-modblue hover:opacity-50 hover:cursor-pointer font-medium">
      {props.handle}
    </span>
  );
}

export default CommentContentMention;
