import React from 'react';
import ImageSlider from './IconIntroduction';
import StepNavigator from './StepNavigator';
import ImageWithCaption from './ImageWithCaption';
import CongratulationsPage from './CongratulationsPage';
import { useTranslation } from "react-i18next";
import "../i18next";

const Home = () => {
    const { t } = useTranslation();

    const images = [
    //LoadAllCookies.png, LoadCookies.png, SaveCookies.png, SaveAllCookies.png, ClearAllClosedCookies.png, ClearCookies.png, DeleteAccount.png, DeleteAllAccount.png
    { src: '/ClearAllClosedCookies.png', caption: 'Clear All Closed Cookies', description: t("clearAllClosedCookies.message") },
    { src: '/ClearCookies.png', caption: 'Clear Cookies', description: t("clearCookies.message") },
    { src: '/DeleteAccount.png', caption: 'Delete Account', description: t("deleteAccount.message") },
    { src: '/DeleteAllAccount.png', caption: 'Delete All Account', description: t("deleteAllAccount.message") },
    { src: '/LoadAllCookies.png', caption: 'Load All Cookies', description: t("loadAllCookies.message") },
    { src: '/LoadCookies.png', caption: 'Load Cookies', description: t("loadCookiesFromAccount.message") },
    { src: '/SaveAllCookies.png', caption: 'Save All Cookies', description: t("saveAllCookies.message") },
    { src: '/SaveCookies.png', caption: 'Save Cookies', description: t("saveCookiesToAccount.message") }
    ];

    const InterfaceIntroduction = () => {
        return (
          <div className="container mx-auto p-2 bg-green-50">
            <div className="text-2xl font-bold text-center">{t("mainInterfaceIntroduction.message")}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageWithCaption
                        src="prop1.jpg"
                        //   caption="Image 1"
                        description={t("interfaceIntroduction1.message")}
              />
              <ImageWithCaption
                src="prop2.jpg"
              //   caption="Image 2"
                description={t("interfaceIntroduction2.message")}
              />
            </div>
          </div>
        );
    };
    
    const OptionsIntroduction = () => {
        return (
          <div className="container mx-auto p-2 ">
            <div className="text-2xl font-bold text-center">{t("optionsIntroduction.message")}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageWithCaption
                        src="options.jpg"
                        //   caption="Image 1"
                        description={t("optionsIntroduction1.message")}
              />
              <ImageWithCaption
                src="prop3.jpg"
              //   caption="Image 2"
                description={t("optionsIntroduction2.message")}
              />
            </div>
          </div>
        );
      };
    
    const steps = [<InterfaceIntroduction/>, <ImageSlider images={images} />, <OptionsIntroduction/>, <CongratulationsPage />];  // 步骤组件

  return (
<div className="container mx-auto p-2 bg-green-50 border border-gray-200 rounded-lg shadow-lg">
      <div className="text-2xl font-bold text-center">{t("cookiesClerkGuide.message")}</div>
            <StepNavigator steps={steps} /> 
    </div>
  );
};

export default Home;