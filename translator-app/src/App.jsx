import TranslatorStart from "./components/TranslatorStart";
import TranslatorApp from "./components/TranslatorApp";

const App = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-l from-[#b6f492] to-[#338b93]">
      <div className="flex flex-col w-[90%] max-w-lg sm:h-auto bg-[#2d2d2d] rounded-xl shadow-2xl shadow-gray-800">
        <TranslatorStart />
        {/* <TranslatorApp /> */}
      </div>
    </div>
  );
};

export default App;
