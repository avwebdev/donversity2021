import './Navbar.css'

export default function Navbar(props: any) {
    return (
        <div>
        <div className="myNav navbar-overlay">
          <a href="javascript:void(0)" className="navbar-closebtn">&times;</a>
          <div className="navbar-overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">DONVERSITY</a>
            <span>
              <div className="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
              </div>
            </span>
        </nav>
        <div className = "hi"></div> 
        </div>
    );
}
