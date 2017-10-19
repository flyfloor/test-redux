import React from 'react';
import { createDevTools } from 'redux-devtools';
import ChartMonitor from 'redux-devtools-chart-monitor';

export default createDevTools(
  <ChartMonitor />
)