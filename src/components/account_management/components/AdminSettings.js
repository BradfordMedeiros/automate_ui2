
import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
 toggle: {
   padding: 48,
   boxShadow: '0px 0px 8px 1px black',
 }
};
const AdminSettings = () => (
  <div>
    <Toggle style={styles.toggle} label="Allow Account Creation" />
    <Toggle style={styles.toggle} label="Allow Password Email Reset" />
  </div>
);

export default AdminSettings;