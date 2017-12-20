
import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
 toggle: {
   padding: 48,
   boxShadow: '0px 0px 8px 1px black',
 },
 outer: {
   marginTop: 80,
 }
};
const AdminSettings = ({
  allowUserCreation,
  enableUserAccountCreation,
  disableUserAccountCreation,
}) => {
  return (
    <div style={styles.outer}>
      <Toggle
        toggled={allowUserCreation}
        onToggle={(_, toggleState) => {
          if (toggleState){
            enableUserAccountCreation();
          }else{
            disableUserAccountCreation();
          }
        }}
        style={styles.toggle}
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
}

AdminSettings.propTypes = {
  allowUserCreation: PropTypes.bool,
  enableUserAccountCreation: PropTypes.func,
  disableUserAccountCreation: PropTypes.func,
};

export default AdminSettings;