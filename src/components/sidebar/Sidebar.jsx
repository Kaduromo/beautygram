import { NavLink } from "react-router-dom"

function Sidebar() {
  const initialLink = [
    {
      name: "Главная",
      path: "/",
      class: "bi bi-house-door",
    },
    {
      name: "Интересное",
      path: "/explore",
      class: "bi bi-compass",
    },
    {
      name: "Сообщения",
      path: "/chat",
      class: "bi bi-chat-dots",
    },
    {
      name: "Уведомления",
      path: "/heart",
      class: "bi bi-heart",
    },
    {
      name: "Профиль",
      path: "/user",
      class: "bi bi-person",
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h1 className="sidebar__title">
          <NavLink to="/">
            <i className="bi bi-bootstrap-fill" /> <span>BeautyGram</span>
          </NavLink>
        </h1>
        <ul className="sidebar__list">
          {initialLink &&
            initialLink.map((i) => (
              <li key={i.name} className="sidebar__item">
                <NavLink to={i.path} className="sidebar__link">
                  {({ isActive }) => (
                    <>
                      <i className={isActive ? i.class + "-fill" : i.class} />
                      <span>{i.name}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
