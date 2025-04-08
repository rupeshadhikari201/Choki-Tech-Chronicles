import { useNavigate, useParams } from "react-router-dom";
import "./blog.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { blogpostList, posted } from "../../repository/blogs";
import CustomHeading from "../../components/heading/heading";

const Blogs = () => {
  const [currentBlog, setCurrentBlog] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const res = posted.findIndex((post) => {
        return post.title == id;
      });
      // console.log(res);
      setCurrentBlog(res);
    }
  }, [id]);
  return (
    <>
      <div className="blog-wrapper bg-white-variant-2 text-black-variant-1">
        <CustomHeading
          page={"Blog"}
          title={"Transforming Businesses and Fostering growth"}
        />
        <div className="blog-container max-w-1200 mx-auto">
          {/* parent for blog card */}
          {/* blog post */}
          <BlogPost
            img={posted[currentBlog].img}
            title={posted[currentBlog].title}
            date={posted[currentBlog].date}
            subtitle={posted[currentBlog].subtitle}
            category={posted[currentBlog].category}
            blogpost={blogpostList[currentBlog]}
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
    <div className="blog-post-wrapper px-md-4 px-2 pb-50 pt-50">
      {/* category */}

      <div
        style={{
          margin: "0 auto",
          paddingBottom: "50px",
        }}
      >
        <p className="mb-2 blog-category text-black-white-variant-1">
          {category}
        </p>
        {/* title */}
        <h1
          className="text-uppercase blog-post-title"
          style={{ maxWidth: "900px" }}
        >
          {title}
        </h1>
        {/* small description gay text */}
        <p
          className="text-black-variant-3 text-capitalize"
          style={{ maxWidth: "400px" }}
        >
          {subtitle}
        </p>
        <span className="text-capitalize blog-author">{writer} |</span>{" "}
        <span>{date}</span>
      </div>
      {/* image */}
      <div className="blog-img">
        <img src={img} alt={title} />
      </div>
      {/* blogpost */}
      {blogpost.map((paragraph, index) => (
        <div key={index} style={{ maxWidth: "800px", textAlign: "justify" }}>
          <h3 className="" style={{ textAlign: "left" }}>
            {paragraph.title}
          </h3>
          <p>{paragraph.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export const BlogCard = ({ category, title, subtitle, writter, date, img }) => {
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
