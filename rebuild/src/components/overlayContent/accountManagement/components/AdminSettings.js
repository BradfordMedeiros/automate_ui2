import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  toggle: {
    padding: 48,
    boxShadow: '0px 0px 8px 1px black',
  },
  outer: {
    marginTop: 80,
  },
};
const AdminSettings = ({
  allowUserCreation,
  enableUserAccountCreation,
  disableUserAccountCreation,
}) => (
  <div style={styles.outer}>
    <FormControlLabel
      label="Allow Account Creation"
      control={(
        <Switch
         checked={allowUserCreation}
         onChange={(_, toggleState) => {
           if (toggleState) {
             enableUserAccountCreation();
           } else {
             disableUserAccountCreation();
           }
         }}
        />)}
    />
  </div>
);

AdminSettings.propTypes = {
  allowUserCreation: PropTypes.bool,
  enableUserAccountCreation: PropTypes.func,
  disableUserAccountCreation: PropTypes.func,
};

export default AdminSettings;
