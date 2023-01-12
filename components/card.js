import React from 'react';
import { Card } from 'antd';
const Card = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      title="Card title"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Minim dolore enim proident ullamco culpa velit irure aliqua quis.</p>
      <p>In id adipisicing aliquip mollit minim nisi aliqua labore minim non sit.</p>
      <p>Nostrud id in anim aliqua veniam dolore est.</p>
    </Card>
  </div>
);
export default Card;