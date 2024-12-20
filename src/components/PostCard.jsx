import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full  rounded-lg  p-2 hover:scale-105 ">
        <div className="w-full justify-center mb-7 ">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className=" rounded-lg "
          />
        </div>
        <div className="text-xl font-bold overflow-x-auto ">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;


