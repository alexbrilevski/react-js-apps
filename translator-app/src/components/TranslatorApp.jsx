const TranslatorApp = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-y-4 w-full px-6 pt-12 pb-6">
      <button className="absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-xl text-gray-300"></i>
      </button>
      <div className="flex justify-center items-center w-full min-h-20 px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg">
        <div className="language">English</div>
        <i className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"></i>
        <div className="language">English</div>
      </div>
      <div className="relative w-full">
        <textarea className="textarea text-gray-200"></textarea>
        <div className="absolute bottom-2 right-4 text-gray-400">0/200</div>
      </div>
      <button className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 active:translate-y-[1px]">
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className="w-full">
        <textarea className="textarea text-[#b6f492]"></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
