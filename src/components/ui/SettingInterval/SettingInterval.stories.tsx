import React, { useState } from 'react';
import SettingInterval from '.';

export default {
  title: 'Component/SettingInterval',
  component: SettingInterval,
};

export const settingInterval = (): React.ReactElement => {
  const [interval, setInterval] = useState('50');
  const changeInterval = (interval: string) => {
    setInterval(interval);
  };

  return <SettingInterval interval={interval} changeInterval={changeInterval} />;
};
