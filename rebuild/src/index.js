import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from './components/appbar/Appbar';
import './style.css';

const MockApp = () => (
    <div style={{
        display: 'flex',
        flexGrow: 1,
        background: 'radial-gradient(rgb(30,30,30),rgb(20,20,20))'
    }}>
        <Appbar
            title="automate"
            showHideMenu
        />

    </div>
);

ReactDOM.render(<MockApp />, document.getElementById("root"));
