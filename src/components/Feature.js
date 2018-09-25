import React, { Component } from 'react';
import requireAuth from './requireAuth';
import ChartComponent from './stock';
import './Feature.css';

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <ChartComponent />
      </div>
    );
  }
}

export default requireAuth(Feature);
