import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { getMetricMetaInfo } from '@app-utils/helpers';
import UdacitySteppers from './UdacitySteppers';
import UdacitySlider from './UdacitySlider';
import DateHeader from './DateHeader';

const AddEntry = () => {
  const [metrics, setMetrics] = useState({
    run: 0,
    bike: 0,
    sleep: 0,
    sweem: 0,
    eat: 0,
  });

  function incrementMetric(metric) {
    const { max, step } = getMetricMetaInfo(metric);

    setMetrics(state => {
      const count = metrics[metric] * step;

      return {
        ...state,
        [metric]: count > max ? max : count,
      };
    });
  }

  function decrementMetric(metric) {
    const { max, step } = getMetricMetaInfo(metric);

    setMetrics(state => {
      const count = state[metric] * step;

      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      };
    });
  }

  function slide(metric, value) {
    setMetrics({ [metric]: value });
  }

  const metaInfo = getMetricMetaInfo();

  return (
    <View>
      <DateHeader date={new Date().toLocaleDateString()} />

      {Object.keys(metaInfo).map(key => {
        const { getIcon, type, ...rest } = metaInfo[key];
        const value = metrics[key];
        return (
          <View key={key}>
            {getIcon()}
            {type === 'steppers' && <UdacitySteppers value={value} />}
            {type === 'slider' && <UdacitySlider value={value} />}
          </View>
        );
      })}
    </View>
  );
};

export default AddEntry;
