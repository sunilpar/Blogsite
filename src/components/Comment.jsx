import React, { useState } from "react";
import { useForm } from "react-hook-form";
import appwriteService from "../appwrite/config";
import { Input, Button } from "./index";
import parse from "html-react-parser";
import anonymous from "../assets/anonymous_user.png";

function Comment(post) {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: { comment: "" },
  });

  // Initialize state for comments
  const [comments, setComments] = useState(post.comments || []);

  const submit = async (data) => {
    const updatedComments = [...comments, data.comment];
    console.log(updatedComments);
    await appwriteService.updatePost(post.$id, {
      ...post,
      comments: updatedComments,
    });
    setComments(updatedComments);
    reset();
  };

  return (
    <div className="flex flex-col justify-start mt-28">
      <div>
        <form onSubmit={handleSubmit(submit)} className="flex flex-row w-fit gap-4">
          <Input
            placeholder="Add a Comment"
            className="mb-4 w-[500px]"
            {...register("comment")}
          />
          <Button type="submit" className="text-gray-100 mb-9 bg-gray-800">
            Comment
          </Button>
        </form>
      </div>
      <div className="min-h-screen text-white flex flex-col justify-start">
        <h2 className="text-3xl text-gray-400 flex justify-start mb-14">Citizen's Comments:</h2>
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-row ml-40">
            <div className="min-w-[50px] w-fit mr-6">
              <img
                className="w-[50px] h-[50px] opacity-50"
                src={anonymous}
                alt="anonymous user"
              />
            </div>
            <div className="mb-10 flex flex-row justify-start align-middle p-3 rounded-lg w-fit bg-gray-900">
              {parse(comment)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
