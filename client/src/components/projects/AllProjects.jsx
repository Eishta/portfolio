import React from 'react'
import IMG from '../../assets/portfolio1.jpg';
import { useSelector } from 'react-redux';

const AllProjects = ({filterProp}) => {
  const projects = useSelector(state => state.detail?.projects || []);

  return (
    <div className="container projects__container">
      {projects && projects.length > 0 && projects.map((project, i) => (filterProp == 'all' || project[filterProp]) && <article className="project" key={i}>
        <img src={process.env.PUBLIC_URL + '/assets' + project.image} alt="" className="project__image" />
        <div className="project__content">
          <div className="project__tag">
            <h3>{project.name}</h3>
          </div>
          <div className="project__desc">
            <p>{project.desc}</p>
            <div className="btns">
              <a href={project.gitLink} className='btn btn-primary' target='_blank'>Github</a>
              <a href={project.demoLink} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </div>
      </article>)
      }
    </div>
  )
}

export default AllProjects