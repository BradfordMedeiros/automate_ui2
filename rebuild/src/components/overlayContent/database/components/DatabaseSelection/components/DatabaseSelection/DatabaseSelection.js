import React from 'react';
import PropTypes from 'prop-types';
import ActionBar from '../ActionBar/ActionBar';
import DatabaseElement from '../DatabaseElement/DatabaseElement';
import './style.css';

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
    <div className="database_selection_outer">
        <ActionBar
            onSetDatabaseAsActive={setDatabaseAsActive}
            onDeleteDatabase={deleteDatabase}
            onDownloadDatabase={onDownloadDatabase}
            onUploadDatabase={onUploadDatabase}
            onCloneDatabase={onCopyDatabase}
            onCreateDatabase={createNewDatabase}
        />
        <div className="database_selection_content">
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
