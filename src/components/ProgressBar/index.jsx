import "./style.scss"

export default function ProgressBar({max}) {
    return(
        <progress max={max} value={5000} className="progress-bar">

        </progress>
    )
}