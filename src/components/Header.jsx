import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <h1 className="text-3xl">
        Header
      </h1>
      <ul>
        <li className="list-item">
          <a className="item" href="/">Home</a>
        </li >
        <li className="list-item">
          <a className="item" href="/">Contacto</a>
        </li>
        <li className="list-item">
          <a className="item" href="/">Proyectos</a>
        </li>

      </ul>
    </div>
  )
};
