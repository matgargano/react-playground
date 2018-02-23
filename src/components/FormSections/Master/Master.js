import React from 'react';
import ContactInfo from '../../../components/FormSections/ContactInfo/ContactInfo';
import ShippingMethod from '../../../components/FormSections/ShippingMethod/ShippingMethod';
import ShippingInfo from '../../../components/FormSections/ShippingInfo/ShippingInfo';

const Master = (props) => {

  let output;
  switch (props.type) {

    case('ContactInfo'):

      output =
          <ContactInfo
              setCurrentSection={props.setCurrentSection}
              type="ContactInfo"
              index={props.index}
              currentSection={props.currentSection}/>;

      break;

    case('ShippingInfo'):

      output =
          <ShippingInfo
              setCurrentSection={props.setCurrentSection}
              type="ShippingInfo"
              index={props.index}
              currentSection={props.currentSection}/>;

      break;
    case('ShippingMethod'):
      output = <ShippingMethod
          setCurrentSection={props.setCurrentSection}
          type="ShippingMethod"
          index={props.index}
          currentSection={props.currentSection}/>;
      break;
    default:
      output = 'ERROR';
      break;

  }

  return (

      <div className="tab">
        {output}
      </div>

  );
};

export default Master;