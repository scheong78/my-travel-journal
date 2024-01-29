export default function Card (props) {
    return (
        <div className="card">
            <img src={props.img} className="card--img" />
            <div className="card--body">
                <h2 className="card--title">{props.title}</h2>
            </div>
        </div>
    )
}