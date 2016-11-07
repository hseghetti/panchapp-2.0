// VENDOR LIBS
import React from 'react';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

// LAYOUT COMPONENTS
import Loading from 'components/layout/loading';

class Log extends React.Component {

    constructor() {
        super();

        firebaseStore.addChangeListener(this.loadLogs.bind(this));

        this.state = {
            logs: firebaseStore.getLog() || []
        };
    }

    componentWillUnmount() {
        firebaseStore.removeChangeListener(this.loadLogs.bind(this));
    }

    render() {
        return (
            <Loading loading={!this.state.logs.length}>
                <ul className="log">
                    {this.state.logs.map(this.renderLog)}
                </ul>
            </Loading>
        );
    }

    renderLog(log, index) {
        return <li className="log--item" key={index}> {log.entry} - Movement: {log.type} - Date: {log.date} </li>;
    }

    loadLogs() {
        this.setState({
            logs: firebaseStore.getLog()
        });
    }
}

export default Log;
