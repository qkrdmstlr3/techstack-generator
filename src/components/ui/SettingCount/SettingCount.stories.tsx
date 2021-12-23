import React, { useState } from 'react';
import SettingCount from '.';

export default {
  title: 'Component/SettingCount',
  component: SettingCount,
};

export const settingCount = (): React.ReactElement => {
  const [count, setCount] = useState(0);

  const changeCount = (count: number) => {
    setCount(count);
  };

  return <SettingCount count={count} changeCount={changeCount} />;
};
