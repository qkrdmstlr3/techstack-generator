import React, { useState } from 'react';
import SelectTemplate, { TechType } from '../components/templates/select';
import SettingTemplate from '../components/templates/setting/index';
import GlobalStyle from '../style/GlobalStyle';
import { ResultType } from '../components/ui/SettingResult/index';
import ResultTemplate from '../components/templates/result/index';

enum TemplateType {
  select = 'select',
  setting = 'setting',
  result = 'result',
}

const techsSrc: string[] = [
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/js-icon/js-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/ts-icon/ts-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/cpp-icon/cpp-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/graphql-icon/graphql-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/swift-icon/swift-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/react-icon/react-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/github-icon/github-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/docker-icon/docker-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/localhost-icon/localhost-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/raspberrypi-icon/raspberrypi-icon.gif',
  'https://raw.githubusercontent.com/qkrdmstlr3/techstack-generator/master/techs/map-icon/map-icon.gif',
  '',
];

const initTechs = (): TechType[] => {
  return techsSrc.map((src) => ({ src, selected: false, number: 0 }));
};

const IndexPage = () => {
  const [techs, setTechs] = useState<TechType[]>(initTechs());
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(TemplateType.select);

  const [setting, setSetting] = useState({
    size: '65',
    count: 5,
    interval: '50',
    results: [ResultType.html, ResultType.markdown],
  });

  const selectTech = (selectedTech: TechType) => {
    const updatedTechs = techs.map((tech) => {
      if (tech.number > selectedTech.number && selectedTech.number !== 0) {
        tech.number -= 1;
      }
      return tech;
    });
    const selectedTechInList = updatedTechs.find((tech) => tech.src === selectedTech.src);

    selectedTechInList.number = selectedTechInList.selected ? 0 : selectedCount + 1;
    setSelectedCount(selectedTechInList.selected ? selectedCount - 1 : selectedCount + 1);
    selectedTechInList.selected = !selectedTechInList.selected;

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

  const changeSetting = (key: string, value: any) => {
    setSetting({ ...setting, [key]: value });
  };

  const templateComponent = () => {
    switch (currentTemplate) {
      case TemplateType.select:
        return <SelectTemplate techs={techs} selectTech={selectTech} changeTemplate={changeTemplate} />;
      case TemplateType.setting:
        return <SettingTemplate setting={setting} changeSetting={changeSetting} changeTemplate={changeTemplate} />;
      case TemplateType.result:
        return <ResultTemplate setting={setting} techs={techs} changeTemplate={changeTemplate} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      {templateComponent()}
    </>
  );
};

export default IndexPage;
