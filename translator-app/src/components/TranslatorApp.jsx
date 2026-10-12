import { useEffect, useRef, useState } from "react";
import { languages } from "../languagesData";

const TranslatorApp = ({ onClose }) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] =
    useState(null);
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en");
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [charsCount, setCharsCount] = useState(0);
  const dropdownRef = useRef(null);
  const maxChars = 200;

  useEffect(() => {
    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedoen", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedoen", handleClickOutside);
    };
  }, [showLanguages]);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowLanguages(false);
    }
  };

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

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;

    if (value.length <= maxChars) {
      setCharsCount(value.length);
      setInputText(value);
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    }

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${selectedLanguageFrom}|${selectedLanguageTo}`,
    );

    const data = await response.json();

    setTranslatedText(data.responseData.translatedText);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTranslate();
    }
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
        <div
          ref={dropdownRef}
          className="absolute top-32 left-8 w-[calc(100%-4rem)] h-[calc(100%-9rem)] p-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded shadow-lg z-10 overflow-y-scroll scrollbar-hidden"
        >
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
        <textarea
          className="textarea text-gray-200"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="absolute bottom-2 right-4 text-gray-400">
          {charsCount}/{maxChars}
        </div>
      </div>
      <button
        className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 active:translate-y-[1px]"
        onClick={handleTranslate}
      >
        <i className="fa-solid fa-chevron-down cursor-pointer"></i>
      </button>
      <div className="w-full">
        <textarea
          className="textarea text-[#b6f492]"
          value={translatedText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
