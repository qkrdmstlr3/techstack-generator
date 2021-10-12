import React, { useState } from 'react';
import SettingResult, { ResultType } from '.';

export default {
  title: 'Component/SettingResult',
  component: SettingResult,
};

export const settingResult = (): React.ReactElement => {
  const [results, setResults] = useState<ResultType[]>([]);

  const changeResults = (results: ResultType[]) => {
    setResults(results);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <SettingResult results={results} changeResults={changeResults} />
    </div>
  );
};
