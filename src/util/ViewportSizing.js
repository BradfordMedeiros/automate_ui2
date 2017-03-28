
import React, { PropTypes, Component} from 'react';
import MediaQuery from 'react-responsive';

const desktop = '(min-height: 768px) and (min-width: 1024px)';
const mobile = '(max-height: 767px), (max-width: 1023px)';

export class Desktop extends Component {
    render() {
        const { children, style } = this.props;
        return (
      <MediaQuery query={desktop}>
        <div style={style} >
          {children}
        </div>
      </MediaQuery>
        );
    }
}

export class Mobile extends Component {
    render() {
        const { children, style } = this.props;
        return (
      <MediaQuery query={mobile}>
        <div style={style} >
          {children}
        </div>
      </MediaQuery>
        );
    }
}

