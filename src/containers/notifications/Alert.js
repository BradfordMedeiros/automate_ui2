import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

class Alert extends Component {
  state = {
    numberOfItems: 1,
    showNotification: false,
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.message === nextProps.message) {
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
    const { message } = this.props;
    const numberString = (this.state.numberOfItems > 1) ? `(${this.state.numberOfItems})` : '';
    return (
      <div>
        <Snackbar
          open={this.state.showNotification}
          message={`${message} ${numberString}`}
          autoHideDuration={4000}
          onRequestClose={() => {
            this.setState({
              numberOfItems: 1,
              showNotification: false,
            });
          }}
        />
        )

      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Alert;

