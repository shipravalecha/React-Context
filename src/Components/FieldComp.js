import React from 'react';
import langContext from '../Contexts/langContext.js';

class FieldComp extends React.Component {

static contextType = langContext;

  render() {

const text = (this.context) === 'english' ? 'Name' : 'Naam';

    return (
<div>
<label>{text}:</label>
<input />
</div>
    );
  }
}
export default FieldComp;
