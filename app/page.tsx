/** @format */

import Comment from "@/components/Comment";
import CommentInput from "@/components/CommentInput";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-lightgray">
      <Comment />
      <CommentInput />
    </div>
  );
}
