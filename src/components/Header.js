import { Navbar } from 'react-bootstrap';
import logo from '../images/viranos_logo.png';
import { useUser } from '../context/UserContext';
import { useFHIRClient } from '../context/FHIRClientContext';
import { formatName } from '../fhir';
import { Button } from 'react-bootstrap';

const Header = () => {
    const user = useUser();
    const fhirClient = useFHIRClient();
    const id_token = fhirClient.getIdToken();

    const getProviderName = () => {
        // try to get logged in provider's name from user context. 
        // if no context available, then get from ID token
        if (user) {
            return formatName(user);
        } else if (id_token) {
            return id_token.given_name + " " + id_token.family_name;
        } else {
            return "Unknown User";
        }
    }

    return (
        <Navbar className="header-bg-color" fixed="top" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Viranos Logo"
                    height="50"
                />
            </Navbar.Brand>
            <Navbar.Text className="text-white mx-auto">
                <h4>Viranos Long COVID-19 Dashboard</h4>
            </Navbar.Text>
            {getProviderName() !== "Unknown User" &&
                <Navbar.Text className="text-white ml-auto">
                    <Button variant="dark"> {getProviderName()}</Button>
                </Navbar.Text>
            }
        </Navbar>
    )
}

export default Header;