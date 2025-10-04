export default function Navbar() {
  return (
    <nav className="nav">
      <span className="logo">
        <span style={{ color: '#4793f8' }}>Ben</span>tolio
      </span>
      <ul className="navLinks">
        <li className="active">Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Works</li>
        <li>Blogs</li>
      </ul>
      <button className="talkBtn">Let&apos;s Talk</button>
    </nav>
  )
}
