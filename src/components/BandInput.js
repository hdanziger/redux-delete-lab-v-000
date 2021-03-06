import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: {
        text: this.state.text,
      },
    });
    this.setState({
      text: '',
    });
  }

  render() {
   return (
     <div>
       <form onSubmit={(event) => this.handleOnSubmit(event)}>
       <p>
       <label>Add a band</label>
       <input type="text"
       value={this.state.text}
       onChange={(event) => this.handleOnChange(event)} />
       </p>
       <input type="submit" />
       </form>
     </div>
   );
 }
};

export default BandInput;
