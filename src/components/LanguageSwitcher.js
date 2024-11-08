import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
      <select 
        onChange={changeLanguage}
        defaultValue={i18n.language} 
        style={{
            border: 'none',
            fontSize: '1rem',
            background: 'transparent'
        }}>
        <option value="en">Eng</option>
        <option value="de">Ger</option>
        <option value="pl">Pol</option>
        <option value="nl">Ned</option>
      </select>
  );
};

export default LanguageSwitcher;
