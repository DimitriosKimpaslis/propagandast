import React from 'react'
import { blogData } from '../blogData'
import BlogCard from '../components/BlogCard'
import '../styles/Blog.css'
import { getCurrentUrl } from "swup";
import { useOutletContext } from 'react-router-dom';

const Blog = () => {
    const setUrl = useOutletContext();
    setUrl(getCurrentUrl())
  return (
    <div className='blog'>
        {blogData.map((blog , index) => {
            return(
                <BlogCard blog={blog} key={index} order={index} />
            )
        })}
    </div>
  )
}

export default Blog