import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import data from './sample-data.json';
import { useFHIRClient } from '../../context/FHIRClientContext';
import moment from 'moment';
import * as zoom from 'chartjs-plugin-zoom';

const SurveyChart = () => {

    const fhirClient = useFHIRClient();
    const patientId = '92de4d08-6b7b-43a9-9e23-1689ce27be97';

    const [physicalHealth, setPhysicalHealth] = useState();
    const [mentalHealth, setMentalHealth] = useState();

    useEffect(() => {
        // format data for chart
        const result = data.filter((patient) => patient.patientId === patientId)[0];

        if (result) {
            const physicalData = result.survey_responses.map(({ date, physical }) => ({ x: new Date(date), y: physical }));
            setPhysicalHealth(physicalData);

            const mentalData = result.survey_responses.map(({ date, mental }) => ({ x: new Date(date), y: mental }));
            setMentalHealth(mentalData);

        }
    }, [patientId]);


    const chartData = {
        datasets: [
            {
                label: 'Composite Physical Health',
                data: physicalHealth,
                fill: false,
                backgroundColor: 'rgb(215, 51, 255)',
                borderColor: 'rgba(255, 51, 246, 0.2)',
                pointRadius: 6
            },
            {
                label: 'Composite Mental Health',
                data: mentalHealth,
                fill: false,
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgba(255, 102, 102, 0.2)',
                pointRadius: 6
            }
        ]
    };

    const options = {
        pan: {
            enabled: true,
            mode: 'x'
        },
        zoom: {
            enabled: true,
            mode: 'x'
        },
        tooltips: {
            enabled: false
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    suggestedMin: moment().subtract(14, 'days').toDate(),
                    suggestedMax: moment().toDate(),
                }
            }]
        },
    }


    return (
        <Container className="p-3">
            { (physicalHealth && mentalHealth) ?
                <Line data={chartData} options={options} />
                :
                <p className="lead">No survey data available.</p>}
        </Container>
    )
};

export default SurveyChart;