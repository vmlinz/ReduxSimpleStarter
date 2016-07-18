import React from 'react';
import { Line } from 'react-chartjs';

const Chart = (props) => (
  <div>
    <Line
      data={props.data}
      width={props.width}
      height={props.height}
    />
  </div>
);

Chart.propTypes = {
  data: React.PropTypes.Object.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default Chart;
