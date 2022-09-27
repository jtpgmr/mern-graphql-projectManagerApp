const NavBar = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg" alt="logo" className="mr-2 mt-1" width={40} height={40} />
          <div className="mt-2 ms-3">Project Manager</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default NavBar