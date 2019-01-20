import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import AddItemDialog from '../../../../components/overlayContent/programming/components/AddItemDialog/AddItemDialog';
import CodeEditor from '../../../../components/overlayContent/programming/components/CodeEditor'
import EditorControls from '../../../../components/overlayContent/programming/components/EditorControls/EditorControls';
import { ActionScript } from '../../../../components/overlayContent/programming/components/types/Types';

const getActionScript = (WithActionScripts) => (
	<WithActionScripts>
      {({ data, addScript, deleteScript }) => {

      	const actionScriptNames = data.map(actionScript => actionScript.name);

      	return (
      		<ActionScript
      			actionScripts={data}
				onDeleteItem={actionScriptName => {
					deleteScript(actionScriptName);
				}}
				onAddActionScript={({ name, fromTopic, toTopic, script }) => {
					addScript({
						name, 
						fromTopic,
						toTopic,
						script,
					})
				}}
	 		/>
	 	)
      }}
	</WithActionScripts>
)

export default getActionScript;
