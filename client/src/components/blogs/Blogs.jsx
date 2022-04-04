import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getblogs } from '../../redux/actions/actions';
import './blogs.css';
import moment from 'moment';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.detail?.blogs || []);
  useEffect(() => {
    dispatch(getblogs())
  }, [])
  return (
    <section id='blogs'>
      <h5>My Content</h5>
      <h2>Blogs</h2>
      <div className="container blogs__container">
        {blogs.items && blogs?.items.map(blog => <a className='blog' href={blog.link} target='_blank' key={blog.guid}>
          <div className='thumbnail' style={{ backgroundImage: `url(${blog.thumbnail})` }}>
            <img src={blogs.image} alt="author-image" className="author-image" />
          </div>
          <div className="blog-body">
            <h4>{blog.title}</h4>
            <h5> {blog.author}</h5>
            <small className='text-light'>{moment(blog.pubDate).format("MMM DD, YYYY hh:mm")}</small>
          </div>
        </a>)}
      </div>
    </section>
  )
}

export default Blogs