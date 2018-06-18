import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import CodeEditor from '../../../../components/overlayContent/programming/components/CodeEditor'
import EditorControls from '../../../../components/overlayContent/programming/components/EditorControls/EditorControls';
import getActionScript from '../../../../components/overlayContent/programming/components/types/ActionScript/getActionScript';

const ActionScript = getActionScript(Header, SelectableTypes, CodeEditor, EditorControls);

export default ActionScript;
