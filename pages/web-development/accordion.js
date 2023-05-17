import React, { useState } from 'react';
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

import LogoDesigns from './logo-designs';
import UiDesigns from './ui-designs';

function AccordionList() {
  const [open, setOpen] = useState('1');
  const toggle = id => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <UncontrolledAccordion defaultOpen={['1', '2']} stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1">UI Design Tools</AccordionHeader>
        <AccordionBody accordionId="1">
          <UiDesigns />
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">Logo Designs</AccordionHeader>
        <AccordionBody accordionId="2">
          <LogoDesigns />
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="3">Ad Banners</AccordionHeader>
        <AccordionBody accordionId="3">
          <p>
            <strong>Section under construction.</strong>
          </p>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="4">Social Media Branding</AccordionHeader>
        <AccordionBody accordionId="4">
          <p>
            <strong>Section under construction.</strong>
          </p>
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}

export default AccordionList;
