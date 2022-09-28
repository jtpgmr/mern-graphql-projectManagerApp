import { Link, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"

import { GET_PROJECT } from "../queries/projectQueries"
import Spinner from "../components/Spinner"
import { ClientInfo, DeleteProjectButton } from "../components"
import UpdateProjectForm from "../components/UpdateProjectForm"

const Project = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });

  if (loading) return <Spinner />

  if (error) return <p>Some went wrong: {error}</p>
  return (
    <div className="mx-auto w-75 card p-5">
      <Link to="/" className="btn btn-secondary btn-lg py-2 px-4 d-inline ms-auto ">Back</Link>

      <h2>{data.project.name}</h2>
      <p className="mb-4">{data.project.description}</p>

      <h5>Project Status</h5>
      <p>{data.project.status}</p>

      <ClientInfo client={data.project.client} />

      <UpdateProjectForm project={data.project} />

      <DeleteProjectButton projectId={data.project.id} />
    </div>
  )
}

export default Project