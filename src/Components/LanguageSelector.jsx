import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const [t, i18n ]= useTranslation("global");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='border p-2 w-full bg-red-200 my-2' onClick={() => changeLanguage('en')}>English</button>
      <button className='border p-2 w-full bg-red-200 my-2' onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
}

export default LanguageSelector;