
import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const styles = {
  header: {
    margin: 20,
    boxShadow: '0px 0px 1px 1px black',
    padding: 18,
    background: '#383838',
  },
  field: {
    margin: 80,
    marginTop: 0,
  }
};

class AccountManagement extends Component {
  state = {
    showImageUpload: false,
    imageUrl: '',
  };
  showImageUpload = () => {
    this.setState({
      showImageUpload: true,
    })
  };
  hideImageUpload = () => {
    this.setState({
      showImageUpload: false,
    });
  };
  uploadImage = () => {
    this.props.onUploadImage(this.state.imageUrl);
    this.hideImageUpload();
  };
  render() {
    const { username, onLogout } = this.props;
    return (
      <div style={{
        background: 'rgb(30,30,30)',
        width: '100%',
        height: '100%',
        fontSize: 28,
        color: 'whitesmoke',
        padding: 28,
        paddingTop: 30,
      }}>
        <Dialog
          open={this.state.showImageUpload}
          onRequestClose={this.hideImageUpload}
          actions={[
            <FlatButton onClick={this.hideImageUpload} label="Cancel" />,
            <FlatButton onClick={this.uploadImage} label="Upload" />
          ]}
        >
          <div>
            Select image url to upload
          </div>
          <TextField
            fullWidth
            floatingLabelText="Image URL"
            onChange={(_, imageUrl) => {
              this.setState({
                imageUrl,
              })
            }}
          />
        </Dialog>
        <div style={{
          fontSize: 28,
          color: 'whitesmoke',
          padding: 48,
          paddingLeft: 0,
          paddingTop: 30,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          height: 100,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid black', cursor: 'pointer', width: 100, height: 100 }} />
            <div style={{ marginLeft: 48 }}>My Account</div>
          </div>
          <div>
            <RaisedButton style={{ margin: 4 }} label="Set Profile Icon" onClick={this.showImageUpload} />
            <RaisedButton style={{ margin: 4 }} label="Logout" onClick={onLogout} />
          </div>
        </div>
        <Divider />
        <div style={styles.header}>Username</div>
        <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
        <div style={styles.header}>Email</div>
        <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
        <div style={styles.header}>Alias</div>
        <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
      </div>
    )
  }
}

AccountManagement.propTypes = {
  username: PropTypes.string,
  onLogout: PropTypes.func,
  onUploadImage: PropTypes.func,
};

export default AccountManagement;