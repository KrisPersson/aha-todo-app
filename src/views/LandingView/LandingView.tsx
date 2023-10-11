import "./LandingView.scss"

export default function LandingView() {

    return (
        <div className="view view--landing-view">
            <img src="aha-logo.svg" alt="aha-logo" />
            <h2>A Todo App</h2>
            <article className='sun'>
                <article className='sun__eye sun__eye--left'></article>
                <article className='sun__eye sun__eye--right'></article>
                <article className='sun__mouth'></article>

            </article>
        </div>
    )
}
