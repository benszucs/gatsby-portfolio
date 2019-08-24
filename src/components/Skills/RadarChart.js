import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'HTML5', A: 110, B: 110, fullMark: 150,
  },
  {
    subject: 'NodeJS', A: 50, B: 100, fullMark: 150,
  },
  {
    subject: 'CSS3', A: 110, B: 130, fullMark: 150,
  },
  {
    subject: 'ReactJS', A: 100, B: 130, fullMark: 150,
  },
  {
    subject: 'JAMstack', A: 90, B: 90, fullMark: 150,
  },
  {
    subject: 'D3', A: 65, B: 85, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#b58900" fill="#fdf6e3" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
