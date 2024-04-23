import { useNavigate, useParams } from "react-router-dom";
import "../../Css/blog/blog.css";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Blogs = () => {
  const posted = [
    {
      category: "Business",
      title: "How to start 1",
      subtitle: "small description of how to start business",
      writer: "Choki Dorji",
      date: "Apr 16",
      img: "https://wingedsheep.com/content/images/2023/04/wingedsheep_Nature_photograph_by_George_Lucas_and_Melissa_Groo__62f5a5b6-ba64-496f-8ff6-9d30fc57fca8.jpg",
    },
    {
      category: "Business",
      title: "How to start 2",
      subtitle: "small description of how to start business",
      writer: "Choki Dorji",
      date: "Apr 16",
      img: "https://static.vecteezy.com/system/resources/previews/029/468/554/large_2x/ai-generated-ai-generative-beautiful-nature-outdoor-water-river-lake-underwater-landscape-background-adventure-explore-vibe-graphic-art-photo.jpg",
    },
    {
      category: "Business",
      title: "How to start 3",
      subtitle: "small description of how to start business",
      writer: "Choki Dorji",
      date: "Apr 16",
      img: "https://cdn.pixabay.com/photo/2023/03/11/22/19/nature-7845443_1280.jpg",
    },
  ];
  const blogpostList = [
    [
      "At Gokap Innotech, we understand the challenges faced by Bhutanese professionals in finding and securing freelance work opportunities. The current methods of networking and job hunting are often time-consuming and inefficient. That's why we have taken it upon ourselves to create a platform that will streamline the process and make it easier for professionals to connect with clients and showcase their skills.",
      "The Gokap Innotech Freelancing Platform will be a one-stop solution for freelancers in Bhutan, offering a wide range of features and benefits. One of the key features of the platform will be the ability to create a comprehensive professional profile, highlighting skills, experience, and portfolio. This will enable freelancers to showcase their expertise and attract potential clients.",
      "In addition to the profile feature, the platform will also provide a secure and convenient way for freelancers to search and apply for job opportunities. Clients will be able to post projects and specify their requirements, allowing freelancers to browse through the listings and apply for the ones that match their skills and interests. This will save freelancers valuable time and effort in searching for suitable projects.",
    ],
  ];
  const [currentBlog, setCurrentBlog] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const res = posted.findIndex((post) => {
        return post.title == id;
      });
      console.log(res);
      setCurrentBlog(res);
    }
  }, [id]);
  return (
    <>
      <div className="blog-wrapper bg-white-variant-2 text-black-variant-1">
        <div
          className="blog-container"
          style={{ maxWidth: "1300px", margin: "0 auto" }}
        >
          {/* parent for blog card */}
          {/* blog post */}
          <BlogPost
            img={posted[currentBlog].img}
            title={posted[currentBlog].title}
            date={posted[currentBlog].date}
            subtitle={posted[currentBlog].subtitle}
            category={posted[currentBlog].category}
            blogpost={blogpostList[0]}
            writer={posted[currentBlog].writer}
          />
          <div className="d-flex gap-4 flex-wrap px-md-4 px-2 justify-content-center justify-content-md-start">
            {posted &&
              posted.map((posts, index) => (
                <BlogCard
                  key={index}
                  title={posts.title}
                  category={posts.category}
                  writter={posts.writer}
                  date={posts.date}
                  subtitle={posts.subtitle}
                  img={posts.img}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
const BlogPost = ({
  category,
  title,
  subtitle,
  blogpost,
  date,
  img,
  writer,
}) => {
  return (
    <div
      className="blog-post-wrapper px-md-4 px-2 "
      style={{ paddingBottom: "100px", paddingTop: "100px" }}
    >
      {/* category */}

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <p className="p-2 mb-2 blog-category text-black-white-variant-1">
          {category}
        </p>
        {/* title */}
        <h1 className="text-uppercase">{title}</h1>
        {/* small description gay text */}
        <p className="text-black-variant-3 text-capitalize">{subtitle}</p>
        <span className="text-capitalize blog-author">{writer} |</span>{" "}
        <span>{date}</span>
      </div>
      {/* image */}
      <div className="blog-img">
        <img src={img} alt={title} />
      </div>
      {/* blogpost */}
      {blogpost.map((paragrah, index) => (
        <p key={index} style={{ maxWidth: "800px", textAlign: "justify" }}>
          {paragrah}
        </p>
      ))}
    </div>
  );
};

const BlogCard = ({ category, title, subtitle, writter, date, img }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="blog-card cursor-pointer"
      whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
      onClick={() => {
        navigate(`/blogs/${title}`);
        window.scrollTo({ top: 100, behavior: "smooth" });
        // window.location.href = `/blogs/${title}`;
      }}
    >
      {/* Image */}
      <motion.div className="mb-4 blog-card-img-container">
        <img src={img} alt="img" />
      </motion.div>
      {/* category and writter|date color gren */}
      <div className="d-flex justify-content-between mb-2">
        <p className="p-2 mb-0 blog-category">{category}</p>
        <p>
          <span className="blog-author">{writter}</span> | {date}
        </p>
      </div>
      {/* Title */}
      <h2 className="mb-2">{title}</h2>
      {/* subtitle color gray */}
      <p className="text-black-variant-3">{subtitle}</p>
    </motion.div>
  );
};
