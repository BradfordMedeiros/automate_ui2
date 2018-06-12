import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import CodeEditor from '../../../../components/overlayContent/programming/components/CodeEditor';
import EditorControls from '../../../../components/overlayContent/programming/components/EditorControls/EditorControls';
import getStateScript from '../../../../components/overlayContent/programming/components/types/StateScript/getStateScript';

const StateScript = getStateScript(Header, SelectableTypes, CodeEditor, EditorControls);

export default StateScript;