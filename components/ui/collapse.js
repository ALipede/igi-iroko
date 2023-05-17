import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function CollapseItems(props) {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('001');

  const onEntering = () => setStatus('Opening...');
  const onEntered = () => setStatus('Love is Beautiful');
  const onExiting = () => setStatus('Closing...');
  const onExited = () => setStatus('001');
  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <h5>ICONS: {status}</h5>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseItems;
