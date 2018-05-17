import React, { PropTypes } from 'react';
import GenericOverlay from '../../../genericOverlayInner/GenericOverlay';
import ActionBar from './components/ActionBar';
import DatabaseElement from './components/DatabaseElement/DatabaseElement';

const styles = {
  outer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  actionbar: {
    position: 'absolute',
    width: '100%',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 58,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: 'calc(100% - 48px)',
    overflow: 'auto',
  }
};

const Databases = ({
  databases,
  onDatabaseSelected,
  selectedDatabaseIndex,

  setDatabaseAsActive,
  deleteDatabase,
  createNewDatabase,
  onDownloadDatabase,
  onUploadDatabase,
  onCopyDatabase,

}) => (
  <GenericOverlay title="Database Management">
    <div style={styles.outer}>
      <ActionBar
        onSetDatabaseAsActive={setDatabaseAsActive}
        onDeleteDatabase={deleteDatabase}
        onDownloadDatabase={onDownloadDatabase}
        onUploadDatabase={onUploadDatabase}
        onCloneDatabase={onCopyDatabase}
        onCreateDatabase={createNewDatabase}
        style={styles.actionbar}
      />
      <div style={styles.content}>
      {databases.map((database, index) => (
        <DatabaseElement
          isActive={database.isActive || (selectedDatabaseIndex === index)}
          databaseName={database.name}
          onClick={() => {
            console.log('selected: ', index);
            onDatabaseSelected(index);
          }}
        />
      ))}
      </div>
    </div>
  </GenericOverlay>
);

Databases.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDatabaseAsActive: PropTypes.func,
  createNewDatabase: PropTypes.func,
  deleteDatabase: PropTypes.func,
  onDownloadDatabase: PropTypes.func,
  onUploadDatabase: PropTypes.func,
  onCopyDatabase: PropTypes.func,

  onDatabaseSelected: PropTypes.func,
  selectedDatabaseIndex: PropTypes.number,
};

export default Databases;
