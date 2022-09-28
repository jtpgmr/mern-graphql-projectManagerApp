import {
  AddClientModal,
  AddProjectModal,
  Clients,
  Projects,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Clients />
    </>
  );
};

export default Home;
