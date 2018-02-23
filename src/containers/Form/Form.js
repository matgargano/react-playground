import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

import Master from '../../components/FormSections/Master/Master';

class Forms extends Component {

  state = {

    steps: ['ContactInfo', 'ShippingInfo', 'ShippingMethod'],
    currentSection: 0,

  };

  moveForward = () => {

    this.setState((prevState) => {

      let nextStep = prevState.currentSection + 1;
      if ((nextStep + 1) <= prevState.steps.length) {
        return {currentSection: nextStep};
      }
    });
  };

  moveBackwards = () => {
    this.setState((prevState) => {
      let nextStep = Math.max(0, prevState.currentSection - 1);
      return {currentSection: nextStep};
    });
  };

  setCurrentSection = (which) => {

    this.setState({currentSection: which});

  };

  render() {

    let nextButtonDisabled = false;
    if (parseInt(this.state.currentSection, 10) + 1 >=
        this.state.steps.length) {
      nextButtonDisabled = true;
    }

    let prevButtonDisabled = false;
    if (parseInt(this.state.currentSection, 10) === 0) {
      prevButtonDisabled = true;
    }

    return (
        <Aux>

          <div className="wrapper">


            <Master index="0"
                    type="ContactInfo"
                    currentSection={this.state.steps[this.state.currentSection]}
                    setCurrentSection={this.setCurrentSection}
            />
            <Master index="1"

                    type="ShippingInfo"
                    currentSection={this.state.steps[this.state.currentSection]}
                    setCurrentSection={this.setCurrentSection}
            />

            <Master index="2"
                    type="ShippingMethod"
                    currentSection={this.state.steps[this.state.currentSection]}
                    setCurrentSection={this.setCurrentSection}
            />


            <button disabled={prevButtonDisabled} onClick={this.moveBackwards}>
              Prev
            </button>
            <button disabled={nextButtonDisabled} onClick={this.moveForward}>
              Next
            </button>

          </div>
        </Aux>

    );
  }

}

export default Forms;
