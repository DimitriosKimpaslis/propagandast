import React from 'react'
import { blogData } from '../blogData'
import BlogCard from './BlogCard'
import '../styles/ColumnBlog.css'

const ColumnBlog = () => {
    const temp = blogData.slice(1).slice(0 , 4);

  return (
    <div>
        <div className='firstBlog'>
            <h1>HOT POST</h1>
            <div>
                <BlogCard blog={blogData[0]} />
            </div>
            <h2>Recent Posts</h2>
            <div className='recentBlogs'>
                {temp.map((blog , index) =>{
                    return <BlogCard blog={blog} key={index} recent={true} />
                })}
            </div>
        </div>
    </div>
  )
}

export default ColumnBlog