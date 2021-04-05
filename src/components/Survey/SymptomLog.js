import { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Container } from 'react-bootstrap';
import data from './sample-data.json';
import { useFHIRClient } from '../../context/FHIRClientContext';
import moment from 'moment';

/**
 * A demo heatmap calendar component for visualizing symptoms
 */

const SymptomLog = () => {

    const fhirClient = useFHIRClient();
    const patientId = '92de4d08-6b7b-43a9-9e23-1689ce27be97';

    const [symptomLogs, setSymptomLogs] = useState();

    useEffect(() => {
        // get symptom log data
        const result = data.filter((patient) => patient.patientId === patientId)[0];
        if (result) {
            setSymptomLogs(result.symptoms);
        }
    }, [fhirClient, patientId]);

    return (
        <Container className="p-3">

            {(symptomLogs && symptomLogs.length) ? symptomLogs.map((log) => {
                return (
                    <>
                        <h4 className="lead">{log.symptom_name}</h4>
                        <br />
                        <CalendarHeatmap
                            startDate={moment().subtract(6, 'months').toDate()}
                            endDate={new Date()}
                            showWeekdayLabels={true}
                            horizontal={true}
                            gutterSize={5}
                            values={log.dates_reported}
                        />
                    </>
                )
            })
                : <p className="lead">No symptom log data available.</p>}

        </Container>
    );
}

export default SymptomLog;