import React, { useState } from 'react';
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function AccordionList(props) {
  const [open, setOpen] = useState('1');
  const toggle = id => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <UncontrolledAccordion defaultOpen={['1']} stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1">UI Design</AccordionHeader>
        <AccordionBody accordionId="1">
          <p>
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the.accordion-body, though the transition does limit
            overflow.
          </p>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">Heading 2</AccordionHeader>
        <AccordionBody accordionId="2">
          <p>
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the.accordion-body, though the transition does limit
            overflow.
          </p>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="3">Heading 3</AccordionHeader>
        <AccordionBody accordionId="3">
          <p>
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </p>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="4">Heading</AccordionHeader>
        <AccordionBody accordionId="4">
          <p>
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </p>
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}

export default AccordionList;
