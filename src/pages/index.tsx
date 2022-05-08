import React, { useState, useEffect } from 'react';
import SelectTemplate, { TechType } from '../components/templates/select';
import SettingTemplate, { SettingType } from '../components/templates/setting/index';
import GlobalStyle from '../style/GlobalStyle';
import { ResultType } from '../components/ui/SettingResult/index';
import ResultTemplate from '../components/templates/result/index';
import SEO from '../utils/SEO';

enum TemplateType {
  select = 'select',
  setting = 'setting',
  result = 'result',
}

const techsSrc: string[] = [
  'js-icon.svg',
  'ts-icon.svg',
  'rescript-icon.svg',
  'cpp-icon.svg',
  'csharp-icon.svg',
  'swift-icon.svg',
  'react-icon.svg',
  'redux-icon.svg',
  'gatsby-icon.svg',
  'sass-icon.svg',
  'storybook-icon.svg',
  'webpack-icon.svg',
  'eslint-icon.svg',
  'prettier-icon.svg',
  'jest-icon.svg',
  'testinglibrary-icon.svg',
  'python-icon.svg',
  'django-icon.svg',
  'graphql-icon.svg',
  'restapi-icon.svg',
  'github-icon.svg',
  'docker-icon.svg',
  'kubernetes-icon.svg',
  'aws-icon.svg',
  'nginx-icon.svg',
  'mysql-icon.svg',
  'raspberrypi-icon.svg',
  'java-icon.svg',
];

const initTechs = (): TechType[] => {
  return techsSrc.map((src) => ({ src, selected: false, number: 0 }));
};

const IndexPage = () => {
  const [techs, setTechs] = useState<TechType[]>(initTechs());
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(TemplateType.select);
  const [setting, setSetting] = useState<SettingType>({
    size: '65',
    count: 1,
    interval: '50',
    results: [ResultType.markdown],
  });

  useEffect(() => {
    if (selectedCount && setting.count - 1 == selectedCount) {
      setSetting({ ...setting, count: selectedCount });
    }
  }, [selectedCount]);

  const selectTech = (selectedTech: TechType) => {
    const updatedTechs = techs.map((tech) => {
      if (tech.number > selectedTech.number && selectedTech.number !== 0) {
        tech.number -= 1;
      }
      return tech;
    });

    const selectedTechInList = updatedTechs.find((tech) => tech.src === selectedTech.src);
    selectedTechInList.selected = !selectedTechInList.selected;
    selectedTechInList.number = selectedTechInList.selected ? selectedCount + 1 : 0;

    setSelectedCount(selectedTechInList.selected ? selectedCount + 1 : selectedCount - 1);
    setTechs(updatedTechs);
  };

  const changeTemplate = (isBackButton?: boolean) => {
    switch (currentTemplate) {
      case TemplateType.select:
        setCurrentTemplate(TemplateType.setting);
        break;
      case TemplateType.setting:
        if (isBackButton) setCurrentTemplate(TemplateType.select);
        else setCurrentTemplate(TemplateType.result);
        break;
      case TemplateType.result:
        setCurrentTemplate(TemplateType.setting);
        break;
    }
  };

  const changeSetting = (key: string, value: string | number | ResultType[]) => {
    setSetting({ ...setting, [key]: value });
  };

  return (
    <>
      <SEO />
      <GlobalStyle />
      {(() => {
        switch (currentTemplate) {
          case TemplateType.select:
            return <SelectTemplate techs={techs} selectTech={selectTech} changeTemplate={changeTemplate} />;
          case TemplateType.result:
            return <ResultTemplate setting={setting} techs={techs} changeTemplate={changeTemplate} />;
          case TemplateType.setting:
            return (
              <SettingTemplate
                setting={setting}
                selectedCount={selectedCount}
                changeSetting={changeSetting}
                changeTemplate={changeTemplate}
              />
            );
        }
      })()}
    </>
  );
};

export default IndexPage;
