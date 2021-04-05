# Viranos Clinician/Researcher Dashboard

A SMART-on-FHIR dashboard application that runs within an electronic health record system and can be used by clinicians and researchers to view data collected by study subjects in the [mobile app](https://github.com/vishnuravi/viranos/). Based on [CardinalKit SMART-on-FHIR Dashboard](https://github.com/cardinalkit/CardinalKit-SMART-on-FHIR/)

## Testing the app with the SMART Launcher

1. From the `dashboard` folder, install dependencies by running `yarn install`
2. Start the application locally by running `yarn start`.
3. Load the [SMART Launcher](https://launch.smarthealthit.org) in your browser, select a sample patient and provider, then add `http://localhost:3000/launch` as the App Launch URL and launch the app.