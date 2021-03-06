import logo from './images/viranos_logo.png';

export default function Splash() {
    return (
        <div>
            <div className="mx-auto mt-5 mb-5 text-center">
                <img src={logo} alt="CardinalKit Logo" />
                <br />
                <h2>Viranos Dashboard</h2>
                <br />
                <p className="lead">Please launch the dashboard from a SMART-on-FHIR compatible launcher to continue.</p>
            </div>
        </div>
    )
}
