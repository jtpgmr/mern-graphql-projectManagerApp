import { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaUser } from "react-icons/fa";

import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // useMutations works by taking in a certain mutation object
  // and which variables we want to pass through the object
  // the cache is then updated with the data from the mutation
  // after the cache is updated, this update is then reflected on the UI
  // via writeQuery
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {name, email, phone},
    update(cache, { data: { addClient }}) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.concat([addClient])
        }
      })
    }
  })

  const clear = () => {
    setName("")
    setEmail("")
    setPhone("")
  };

  const handleFormSubmit = (e) => {
      e.preventDefault()
      // console.log(`
      // name: ${name}, 
      // email: ${email}, 
      // phone: ${phone}`
      // )

      if (name === "" || email === "" || phone === "") {
        return alert("Please fill in all of the fields");
      }

      addClient(name, email, phone)

      clear();
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addClient"
      >
        <div className="d-flex align-items-center gap-2">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClient"
        tabIndex="-1"
        aria-labelledby="addClientLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientLabel">
                Add Client
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientModal;
