import { Container, Tabs, Tab } from 'react-bootstrap';
import MedicationLog from './MedicationLog';
import BPChart from './Chart';
import PatientBanner from './PatientBanner';

/**
 * A dashboard that visualizes data from surveys
 */
export default function Survey() {
    return (
        <>
            <Container style={{ marginTop: '6em' }}>
                <PatientBanner />
                <Tabs defaultActiveKey="bpchart">
                    <Tab eventKey="bpchart" title="BP Trend">
                        <BPChart />
                    </Tab>
                    <Tab eventKey="medlog" title="Medication Log">
                        <MedicationLog />
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}