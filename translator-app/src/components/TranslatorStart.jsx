const TranslatorStart = ({ onStart }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-12">
      <div className="flex flex-col justify-center w-full h-64 pr-6 bg-gradient-to-l from-[#b6f492] to-[#338b93] rounded-t-full rounded-bl-full text-gray-700">
        <span className="font-shojumaru text-5xl text-center">
          Hello
        </span>
        <span className="text-2xl text-center">Привет</span>
        <span className="font-noto-sans-jp text-3xl text-right">
          こんにちは
        </span>
        <span className="text-2xl text-right">Hola</span>
      </div>
      <div className="w-full space-y-5 mt-20 mb-36 text-right">
        <h1 className="font-righteous text-4xl text-white uppercase">
          Translator App
        </h1>
        <button
          className="w-32 h-10 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full font-righteous font-bold text-lg uppercase text-gray-700 tracking-widest cursor-pointer active:translate-y-[1px]"
          onClick={onStart}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default TranslatorStart;
