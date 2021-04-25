<img src="https://user-images.githubusercontent.com/1212163/113707563-140ffc80-96ae-11eb-9339-1d1297c9d21d.png" width="150" />

# Viranos Clinician/Researcher Dashboard

A @smart-on-fhir dashboard application that runs within an electronic health record system and can be used by clinicians and researchers to view data collected by study subjects in the [mobile app](https://github.com/vishnuravi/viranos/). Based on [CardinalKit SMART-on-FHIR Dashboard](https://github.com/cardinalkit/CardinalKit-SMART-on-FHIR/).

## Screenshots

![Visualize data trend](https://user-images.githubusercontent.com/1212163/116002358-60709d00-a5c7-11eb-92de-b760df937bc6.JPG)
![Visualize symptom log](https://user-images.githubusercontent.com/1212163/116002368-69fa0500-a5c7-11eb-9c8a-bb4dc1db56ad.JPG)

## Testing the app with the SMART Launcher

1. Install dependencies by running `yarn install`
2. Start the application locally by running `yarn start`.
3. Load the [SMART Launcher](https://launch.smarthealthit.org) in your browser, select a sample patient and provider, then add `http://localhost:3000/launch` as the App Launch URL and launch the app.

## Built with

- React
- SMART-on-FHIR framework
