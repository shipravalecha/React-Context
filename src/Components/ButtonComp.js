import React from 'react';
import langContext from '../Contexts/langContext.js';
import colorContext from '../Contexts/colorContext.js';

class ButtonComp extends React.Component {

  renderSubmit(value)  {
      return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (

<colorContext.Consumer>
{(color) =>
  <button type="button" style={{color}}>
  <langContext.Consumer>
  {(value) => this.renderSubmit(value) }
  </langContext.Consumer>
  </button>
}
</colorContext.Consumer>
    );
  }
}
export default ButtonComp;
