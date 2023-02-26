import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <nav>
      <h3 >
      <a class="logo" href="/">little lemon</a>
      </h3>
    <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">about</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><a href="/#reservations">Reservations</a></li>
        <li><a href="/#order_online">Order Online</a></li>
        <li><a href="/#login">Login</a></li>
    </ul>
    </nav>
  )
}

export default Nav