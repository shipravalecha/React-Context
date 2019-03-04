import React from 'react';
import UserCreate from './UserCreate.js';
import langContext from '../Contexts/langContext.js';
import colorContext from '../Contexts/colorContext.js';


class App extends React.Component {

  state = {
    language: 'english'
  };

  renderlang = (language) => {
    this.setState({
      language
    });
  }

  render() {
    return (
<div>

<div>Select a language: <br />
<button type="button" onClick= {() => this.renderlang('english')}>English</button>
<button type="button" onClick= {() => this.renderlang('dutch')}>Dutch</button>
</div>
<colorContext.Provider value="red">
<langContext.Provider value={this.state.language}>
<UserCreate />
</langContext.Provider>
</colorContext.Provider>
</div>
    );
  }
}


export default App;
