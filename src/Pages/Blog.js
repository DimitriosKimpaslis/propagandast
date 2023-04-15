import React from 'react'
import { blogData } from '../blogData'
import BlogCard from '../components/BlogCard'
import '../styles/Blog.css'

const Blog = () => {
  return (
    <div className='blog'>
        {blogData.map((blog , index) => {
            if(index === 0){
                return (
                    <BlogCard blog={blog} key={index}/>
                )
            }else{
                return (
                    <BlogCard blog={blog} key={index}/>
                )
            }
            
        })}
    </div>
  )
}

export default Blog