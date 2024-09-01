import Dsacourse from "../components/Dsacourse";
import Navbar from "../utilities/Navbar";
function DsaCourse({ theme, handleThemeSwitch }) {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark"
          ? "bg-[#131313] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Dsacourse theme={theme} />
    </div>
  );
}

export default DsaCourse;
