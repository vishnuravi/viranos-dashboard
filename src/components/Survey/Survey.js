import { Container, Tabs, Tab } from 'react-bootstrap';
import SymptomLog from './SymptomLog';
import SurveyChart from './SurveyChart';
import PatientBanner from './PatientBanner';

/**
 * A dashboard that visualizes data from surveys
 */
export default function Survey() {
    return (
        <>
            <Container style={{ marginTop: '6em' }}>
                <PatientBanner />
                <Tabs defaultActiveKey="surveychart">
                    <Tab eventKey="surveychart" title="Survey Chart">
                        <SurveyChart />
                    </Tab>
                    <Tab eventKey="symptomlog" title="Symptom Log">
                        <SymptomLog />
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}