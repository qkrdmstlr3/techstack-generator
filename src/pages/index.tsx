import React, { useState } from 'react';
import SelectTemplate, { TechType } from '../components/templates/select';
import SettingTemplate from '../components/templates/setting/index';
import GlobalStyle from '../style/GlobalStyle';

enum TemplateType {
  select = 'select',
  setting = 'setting',
  result = 'result',
}

const techsSrc: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

const initTechs = (): TechType[] => {
  return techsSrc.map((src) => ({ src, selected: false, number: 0 }));
};

const IndexPage = () => {
  const [techs, setTechs] = useState<TechType[]>(initTechs());
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(TemplateType.select);

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

  const templateComponent = () => {
    switch (currentTemplate) {
      case TemplateType.select:
        return <SelectTemplate techs={techs} selectTech={selectTech} changeTemplate={changeTemplate} />;
      case TemplateType.setting:
        return <SettingTemplate />;
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
