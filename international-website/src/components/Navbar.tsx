import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { navigate } from "gatsby";
import { styled } from "../gatsby-plugin-stitches/config";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const { t } = useTranslation();
  const { language } = i18next;

  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLang = event.target.value;
    i18next.changeLanguage(selectedLang);
    navigate(`/${selectedLang}/`);
  }

  return (
    <NavContainer>
      <StaticImage
        src="../images/logo.svg"
        alt="harmony logo"
        width={125}
        height={43}
      />
      <div>
        <button>
          <Text>{t("login")}</Text>
        </button>
        <Text>|</Text>
        <button>
          <Text>{t("pricing plan")}</Text>
        </button>
        <SignUpButton>
          <Text>{t("signup")}</Text>
        </SignUpButton>
        <select value={language} onChange={changeLanguage}>
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled("nav", {
  backgroundColor: "$primaryDefault",
  height: "100px",
  width: "100vw",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "sticky",
  top: "0",
  zIndex: "5",
});

const SignUpButton = styled("button", {
  padding: "10px 20px",
  background: "$primaryLight",
  margin: "1rem",
});

const Text = styled("span", {
  fontSize: "$small",
  color: "$white",
  padding: "0.5rem",
});

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
