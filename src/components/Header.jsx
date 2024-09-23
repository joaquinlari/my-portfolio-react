import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <h1 className="text-3xl">
        Header
      </h1>
      <ul className="list-item">
        <li className="item">
          <a href="/">Home</a>
        </li>
        <li className="item">
          <a href="/">Proyectos</a>
        </li>
        <li className="item">
          <a href="/">Contacto</a>
        </li>
      </ul>
    </div>
  )
};
