import React from 'react';
// @ts-ignore
import { ECharts } from 'react-native-echarts-wrapper';

interface Props {
  option: any;
}

export default ({ option }: Props) => {
  const defaultOptions = {};
  return <ECharts option={Object.assign(option, defaultOptions)} />;
};
