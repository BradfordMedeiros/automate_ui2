import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import AddItemDialog from '../../../../components/overlayContent/programming/components/AddItemDialog/AddItemDialog';
import CodeEditor from '../../../../components/overlayContent/programming/components/CodeEditor'
import EditorControls from '../../../../components/overlayContent/programming/components/EditorControls/EditorControls';
import getActionScriptComponent from '../../../../components/overlayContent/programming/components/types/ActionScript/getActionScript';

const ActionScript = getActionScriptComponent(Header, SelectableTypes, AddItemDialog, CodeEditor, EditorControls);

const getActionScript = (WithActionScripts) => (
	<WithActionScripts>
      {({ data, addScript, deleteScript }) => {

      	const actionScriptNames = data.map(actionScript => actionScript.name);

      	return (
      		<ActionScript
				itemName={'action script name'}
				onDeleteItem={actionScriptName => {
					deleteScript(actionScriptName);
				}}
				actionScriptNames={actionScriptNames}
				onAddActionScript={({ name }) => {
					addScript({
						name, 
						fromTopic: 'testfrom',
						toTopic: 'testto',
						script: 'return 2',
					})
				}}
	 		/>
	 	)
      }}
	</WithActionScripts>
)

export default getActionScript;
