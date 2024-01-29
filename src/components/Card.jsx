import pin from "../assets/location-pin.png"

export default function Card (props) {
    return (
        <div className="card">
            <img src={props.img} className="card--img" />
            <div className="card--body">
                <p className="card--location">
                    <img src={pin} className="card--location-pin" />
                    <span className="card--location-country">{props.location}</span>
                    <a href={props.gMaps} className="card--location-gmaps">View on Google Maps</a>
                </p>
                <h2 className="card--title">{props.title}</h2>
                <h3 className="card--dates">{props.date}</h3>
                <p className="card--desc">{props.details}</p>
            </div>
        </div>
    )
}