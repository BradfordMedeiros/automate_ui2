import React from 'react';
import { tile as MqttSlider } from './common/MqttSlider';

const HorizontalSlider = props => <MqttSlider axis="x" {...props} />;

export const tile = HorizontalSlider;

