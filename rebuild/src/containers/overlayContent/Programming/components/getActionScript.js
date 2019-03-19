import React from 'react';
import { ActionScript } from '../../../../components/overlayContent/programming/types/Types';

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
