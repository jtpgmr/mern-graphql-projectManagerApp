import React from 'react'
import { useQuery } from '@apollo/client'

import Spinner from './Spinner'
import Project from './Project'
import { GET_PROJECTS } from '../queries/projectQueries'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />

  if (error) return <p>Some went wrong: {error}</p>;

  return (
    <>
    {data.projects.length > 0 ? (
      <div className="row mt-3">
        {data.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    ) : (
      <p>No projects at the moment.</p>
    )}
    </>
  )
}

export default Projects