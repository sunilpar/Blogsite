import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import HomeGov from "./HomeGov";
import Homelogin from "../components/Homelogin";


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-4 mt-4 text-center min-h-screen ">
        <Container>
            <HomeGov />
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 flex  ">
      <div>
        <img src="../assets/logo_np_gov.png" alt="" />
      </div>
      <Container>
        <Homelogin />
        <div className="flex flex-wrap justify-center min-w-[360px]">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 min-w-[300px]">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
