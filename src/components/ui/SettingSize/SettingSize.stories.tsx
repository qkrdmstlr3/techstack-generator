import React, { useState } from 'react';
import SettingSize from '.';

export default {
  title: 'Component/SettingSize',
  component: SettingSize,
};

export const settingSize = (): React.ReactElement => {
  const [size, setSize] = useState('65');
  const changeSize = (size: string) => {
    setSize(size);
  };

  return <SettingSize size={size} changeSize={changeSize} />;
};
