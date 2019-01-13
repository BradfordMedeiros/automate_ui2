import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import CodeEditor from '../../../../components/overlayContent/programming/components/CodeEditor'
import EditorControls from '../../../../components/overlayContent/programming/components/EditorControls/EditorControls';
import getActionScriptComponent from '../../../../components/overlayContent/programming/components/types/ActionScript/getActionScript';

const ActionScript = getActionScriptComponent(Header, SelectableTypes, CodeEditor, EditorControls);

const getActionScript = (WithActionScripts) => (
	<WithActionScripts>
      {({ data }) => {

      	const actionScriptNames = data.map(actionScript => actionScript.name);

      	return (
      		<ActionScript
				itemName={'action script name'}
				onDeleteItem={() => {
					console.log('delete item called')
				}}
				actionScriptNames={actionScriptNames}
	 		/>
	 	)
      }}
	</WithActionScripts>
)

export default getActionScript;
