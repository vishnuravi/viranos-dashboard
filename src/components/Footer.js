import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <div>
                    <hr />
                    <p className="text-center">Dashboard for <a href="https://viranos.org" target="_blank" rel="noreferrer">Viranos</a></p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;