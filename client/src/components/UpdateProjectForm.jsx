import { useState } from "react";
import { useMutation } from "@apollo/client";

import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";

const UpdateProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(() => {
    switch (project.status) {
      case "Not Started":
        return "new";
      case "In Progress":
        return "progress";
      case "Completed":
        return "completed";
      default:
        throw new Error(`Unknown status: ${project.status}`);
    }
  });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status
    },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }]
  })

  const handleProjectFormUpdate = (e) => {
    e.preventDefault();
    
    updateProject(name, description, status);
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleProjectFormUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control mt-1 mb-3"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Description</label>
          <textarea
            className="form-control mt-1 mb-3"
            rows={3}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="form-label">Status</label>
          <select
            className="form-select mt-1 mb-3"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="pending">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProjectForm;
