import React, { useRef , useEffect} from "react";
import InstagramPost from "../components/InstagramPost";
import NavBar from "../components/NavBar";
import ShowInstaPost from "../components/ShowInstaPost";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Home = () => {
  const post = useSelector((state) => state.post.data);

  const postRef = useRef(null);

  useEffect(() => {
    if (post && postRef.current) {
      postRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [post]);

  return (
    <div>
      <div>
        <NavBar />
        <InstagramPost />
        {/* Post Section */}
        {post && (
          <section
            ref={postRef}
            className="w-full max-w-2xl mx-auto mt-16 px-4"
          >
            <ShowInstaPost post={post} />
          </section>
        )}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
