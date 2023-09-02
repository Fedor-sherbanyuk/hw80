import React from 'react';
import ReactDOM from 'react-dom/client';
import Progress from "./components/Progress";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Progress percentage={60} />
);
