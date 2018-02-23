import React from 'react';
import Aux from '../../../hoc/Aux';

const ShippingInfo = (props) => {

  let id = 'tab' + props.type;

  let shown = false;
  if (props.currentSection === 'ShippingInfo') {
    shown = true;
  }

  let handleChecked = () => {
    props.setCurrentSection(props.index);
  };

  return (
      <Aux>
        <input id={id} type="radio" name="tabs" onChange={handleChecked}
               checked={shown}/>
        <label htmlFor={id}>Label his</label>
        <div className="tab-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            architecto, explicabo perferendis nostrum, maxime impedit atque odit
            sunt pariatur illo obcaecati soluta molestias iure facere dolorum
            adipisci eum? Saepe, itaque.</p>
        </div>

      </Aux>
  );
};

export default ShippingInfo;