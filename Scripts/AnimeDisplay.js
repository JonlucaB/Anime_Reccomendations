import../ Pages / style.css

export default function AnimeDisplay(props) {
    return (
        <div class="card">
            <h1>{props.title}</h1>
            <img
                src={props.image}
                class="img-fluid img-center img-round img-featured"
                data-v-0f11a864=""
            />
            <li>
                <ul>Type: {props.type}</ul>
                <ul>Region: {props.region}</ul>
            </li>
            <p>
                <button>More Information</button>
            </p>
        </div>
}