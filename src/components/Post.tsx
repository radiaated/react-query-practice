import React, { useState } from "react";
import { TypePost } from "../utils/types";
import ProfileBadge from "./ProfileBadge";
import { Link } from "react-router-dom";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import Comment from "./Comment";

type TypeProps = {
  post: TypePost;
};

const Post = ({ post }: TypeProps) => {
  const [isLike, setLike] = useState<boolean>(false);

  const [showComments, setShowComments] = useState<boolean>(false);

  return (
    <div className="card shadow-sm p-2">
      <div className="row">
        <div className="col-1">
          <ProfileBadge name={post.author.name} size={35} />
        </div>
        <div className="col-11">
          <h6 className="mb-0">{post.title}</h6>
          <div style={{ fontSize: "0.65rem" }} className="text-secondary">
            Oct. 1
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="p-2" style={{ fontSize: "0.85rem" }}>
            {post.description}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-sm"
              onClick={() => setLike((state: boolean) => !state)}
            >
              {isLike ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </button>
            <Link
              to="#"
              className="link-underline-primary"
              style={{ width: "fit-content" }}
              onClick={() => setShowComments((state: boolean) => !state)}
            >
              <div className="col" style={{ fontSize: "0.8rem" }}>
                Comments({post.comments.length})
              </div>
            </Link>
          </div>
        </div>
      </div>

      {showComments && (
        <>
          <hr />
          <div className="row">
            <div className="col">
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
