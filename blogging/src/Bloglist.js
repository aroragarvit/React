// data will be passed in prop  when Blog will be used as child component

// note map function is written in ()=> these brackets

// make handle delete function in home.js and pass it as prop
const Bloglist = (props) => {
  const blogs = props.blogs;
  const handeledelete = props.handledelete;
  console.log(props, blogs);
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-prev" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            {blog.body} --{blog.author}
          </p>
          <button onClick={() => handeledelete(blog.id)}>Delete</button>{" "}
          {/* passing handle delete function by reference using bracket function  */}
        </div>
      ))}
    </div>
  );
};
export default Bloglist;
