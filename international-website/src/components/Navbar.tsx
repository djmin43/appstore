import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, navigate } from "gatsby";

const Navbar = () => {
  const { t } = useTranslation();
  const { language } = i18next;

  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLang = event.target.value;
    i18next.changeLanguage(selectedLang);
    navigate(`/${selectedLang}/`);
  }

  return (
    <nav>
      <select value={language} onChange={changeLanguage}>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </nav>
  );
};

const languageOptions = [
  {
    label: "english",
    value: "en",
  },
  {
    label: "한국어",
    value: "ko",
  },
] as const;

export default Navbar;
