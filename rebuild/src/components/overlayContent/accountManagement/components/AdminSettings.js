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
      control={(
        <Switch
                        // toggled={allowUserCreation}
          onToggle={(_, toggleState) => {
                            if (toggleState) {
                                enableUserAccountCreation();
                            } else {
                                disableUserAccountCreation();
                            }
                        }}
        />)}
      label="Allow Account Creation"
    />


    {/*
       I want these features so leaving them in here even though they are not implemented
       <Toggle style={styles.toggle} label="Allow Password Email Reset" />
       <Toggle style={styles.toggle} label="Grid is Per User" />
       <Toggle style={styles.toggle} label="Enable Guest User" />
       */}
  </div>
);

AdminSettings.propTypes = {
  allowUserCreation: PropTypes.bool,
  enableUserAccountCreation: PropTypes.func,
  disableUserAccountCreation: PropTypes.func,
};

export default AdminSettings;
