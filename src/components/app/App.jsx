import React, {PropTypes} from 'react';
import AppTemplate from './templates/app.rt';
import './assets/styles/app.styl';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return AppTemplate();
    }
}

export default App;
