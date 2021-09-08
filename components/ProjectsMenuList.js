export function ProjectsMenuList(props) {
  console.log(props.active)
  return (
    <nav className={`menu ${props.active ? "open" : ""}`}>
    <div>
      <ul>
        {props.projects.map((project, index) => (
          <li key={index}>
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  </nav>
  )
}