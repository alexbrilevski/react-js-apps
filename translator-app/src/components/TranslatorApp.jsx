import { useState } from "react";
import { languages } from "../languagesData";

const TranslatorApp = ({ onClose }) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] =
    useState(null);
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en");
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");

  const handleLanguageClick = (type) => {
    setCurrentLanguageSelection(type);
    setShowLanguages(true);
  };

  const handleLanguageSelect = (languageCode) => {
    if (currentLanguageSelection === "from") {
      setSelectedLanguageFrom(languageCode);
    } else {
      setSelectedLanguageTo(languageCode);
    }
    setShowLanguages(false);
  };

  const handleSwapLanguage = () => {
    setSelectedLanguageFrom(selectedLanguageTo);
    setSelectedLanguageTo(selectedLanguageFrom);
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-y-4 w-full px-6 pt-12 pb-6">
      <button className="absolute top-4 right-4">
        <i
          className="fa-solid fa-xmark text-xl text-gray-300 cursor-pointer"
          onClick={onClose}
        ></i>
      </button>
      <div className="flex justify-center items-center w-full min-h-20 px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg">
        <div className="language" onClick={() => handleLanguageClick("from")}>
          {languages[selectedLanguageFrom] || "English"}
        </div>
        <i
          className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
          onClick={handleSwapLanguage}
        ></i>
        <div className="language" onClick={() => handleLanguageClick("to")}>
          {languages[selectedLanguageTo] || "English"}
        </div>
      </div>
      {showLanguages && (
        <div className="absolute top-32 left-8 w-[calc(100%-4rem)] h-[calc(100%-9rem)] p-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded shadow-lg z-10 overflow-y-scroll scrollbar-hidden">
          <ul>
            {Object.entries(languages).map(([code, name]) => (
              <li
                key={code}
                className="transition duration-200 p-2 rounded cursor-pointer hover:bg-[#10646b]"
                onClick={() => handleLanguageSelect(code)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="relative w-full">
        <textarea className="textarea text-gray-200"></textarea>
        <div className="absolute bottom-2 right-4 text-gray-400">0/200</div>
      </div>
      <button className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 active:translate-y-[1px]">
        <i className="fa-solid fa-chevron-down cursor-pointer"></i>
      </button>
      <div className="w-full">
        <textarea className="textarea text-[#b6f492]"></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
