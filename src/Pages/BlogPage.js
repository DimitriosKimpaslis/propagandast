import React, { createElement } from 'react'
import { blogData } from '../blogData';
import { useParams } from 'react-router-dom';
import '../styles/BlogPage.css'
import Author from '../components/Author';
import { people } from '../peopleData';

const BlogPage = () => {
    const paramsObj = useParams();
    const id = paramsObj.id;
    const blog = blogData.find(blog => {
        return blog.id === Number(id)
    })

    const paragraphGenerator = (text) => {
        let string = text;
        const tempArr = [];
        let count = 0
        while(string.includes('\n')){
            const breakIndex = string.indexOf('\n'); //finds index of \n
            const partText = string.slice(0 , breakIndex); //takes part of the text
            string = string.slice(breakIndex + 1 , string.length) //removes text taken out
            let temp = createElement('p',{className: 'blogParagraph', key: count},partText)
            tempArr.push(temp)
            count = count + 1
         }
         return tempArr
    }    

    const authorObj = people.find(person => blog.writer === (person.name + ' ' + person.surname));
    console.log(authorObj)

  return (
    <div className='blogPage'>
        <h1>{blog.title}</h1>
        <div className='blogContent'>
            <h4>Υποβλήθηκε από τον/ην {blog.writer} στις {blog.date}</h4>
        </div>
        <div className='blogPageImg'>
            <img src={require('../content/dynamic/' + blog.image)} />
        </div>
        {paragraphGenerator(blog.text)}
        <Author authorObj={authorObj}/>
    </div>
  )
}

export default BlogPage