import logo from "../assets/logo.png"

export default function Nav () {
    return (
        <nav className="nav">
            <img src={logo} className="nav--logo" />
            <h1 className="nav--heading">my travel journal.</h1>
        </nav>
    )
}