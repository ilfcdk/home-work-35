import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import './styles/main.scss';
import './styles/main.less';
import _ from 'lodash';

const App = () => (
  <div>
    <h1>Hello, React + TypeScript + Webpack!</h1>
    <p>Lodash: {_.join(['Hello', 'World'], ' ')}</p>
  </div>
);

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}