import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import getSequences from '../../../../components/overlayContent/programming/components/types/Sequences/getSequences';

const Sequences = getSequences(Header, SelectableTypes);

export default Sequences;