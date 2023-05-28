import { Card } from 'antd';
import React from 'react';

const AboutCard: React.FC = () => (
  <div className="site-card-border-less-wrapper">
    <Card title="Hey! I'm Jessica" bordered={false} style={{ width: 300 }}>
      <p>I'm a Front End Developer Based in Texas</p>
      <p>I'm a Full Stack MERN Web Developer</p>
      <p>I'm a 3D Printing Hobbyist and Enthusiast</p>
    </Card>
  </div>
);

export default AboutCard;