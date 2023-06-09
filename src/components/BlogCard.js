import React ,{useEffect} from 'react'
import '../styles/Blog.css'
import { useNavigate } from 'react-router-dom'


const BlogCard = ({blog , order, recent}) => {
    const first100char = (text) =>{
        const newText = text.slice(0 , 200);
        return newText;
    }
    const navigate = useNavigate();
    let path = '/blog/' + blog.id.toString();

    const handleClick = (e) =>{
        navigate(path)
        window.scrollTo(0, 0)
    }
    
  return (
    <div className={order === 0 ? 'firstBlogCard' : 'blogCard'} onClick={handleClick}>
        <div className='blogCardImage'>
            <img src={require('../content/dynamic/' + blog.image)} />
        </div>
        <div className='BlogCardText'>
            <h5>{blog.date}</h5>
            <h4>{blog.title}</h4>
            <p>{recent ? '' : first100char(blog.text)+'...'}</p>
        </div>
    </div>
  )
}

export default BlogCard