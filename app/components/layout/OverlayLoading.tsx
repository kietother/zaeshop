export default function OverlayLoading() {
    return (
        <div id="overlay-transition" className="overlay-loading">
            <div className="spinner-grow text-warning"  role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}