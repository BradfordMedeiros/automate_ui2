import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfItems: 1,
      showNotification: false,
    };
    if (props.message) {
      this.state.showNotification = true;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.topic === nextProps.topic) {
      this.setState({
        showNotification: true,
        numberOfItems: this.state.numberOfItems + 1,
      });
    } else {
      this.setState({
        showNotification: true,
        numberOfItems: 1,
      });
    }
  }
  render() {
    const { message, topic } = this.props;
    console.log('rendering: ', topic, ' message: ', message);

    const numberString = (this.state.numberOfItems > 1) ? `(${this.state.numberOfItems})` : '';
    return (
      <div>
        <Snackbar
          open={this.state.showNotification}
          message={`topic: ${topic} message: ${message} ${numberString}`}
          autoHideDuration={4000}
          onRequestClose={() => {
            this.setState({
              numberOfItems: 1,
              showNotification: false,
            });
          }}
        />)
      </div>
    );
  }
}

Alert.propTypes = {
  topic: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default Alert;

