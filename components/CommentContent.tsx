/** @format */

import React from "react";
import CommentContentMention from "./CommentContentMention";

function CommentContent() {
  return (
    <p>
      I honestly don&apos;t know how the development will be done in one day. Am
      I just psyching myself out by trying to finish this in one day? Can I do
      this in one day? What do you think &nbsp;
      <CommentContentMention handle="@finnybobinny" />?
    </p>
  );
}

export default CommentContent;
