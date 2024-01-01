import { createContext } from "react";

const BlogContext = createContext({
    blogs: [],
    addBlog : ()=>{}
})

export default BlogContext;