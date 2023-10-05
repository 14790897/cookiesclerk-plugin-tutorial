// CongratulationsPage.js
import React from 'react';
import { useTranslation } from "react-i18next";
import "../i18next";

const CongratulationsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">{t("congratulations.message")}</h1>
        <p className="mb-4">{t("thankYouNote.message")}</p>
        <hr className="my-4" />
        <p className="mb-4">{t("tutorialBy.message")}</p>
        <a 
          href="support.jpg" 
          className="text-blue-500 hover:text-blue-700 underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t("sponsorLinkText.message")}
        </a>
      </div>
    </div>
  );
};

export default CongratulationsPage;
