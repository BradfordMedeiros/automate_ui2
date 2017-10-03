import React from 'react';
import { tile as MqttSlider } from './common/MqttSlider';

const VerticalSlider = props => <MqttSlider axis="y" {...props} />;

export const tile = VerticalSlider;

