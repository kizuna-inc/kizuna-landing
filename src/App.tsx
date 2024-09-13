import { useState } from "react";
import { ContentBox } from "./Components/ContentsBox";
import { NavBar } from "./Components/NavBar";

function App() {
  const [navState, setNavState] = useState<boolean>(false);

  return (
    <div className="w-full h-screen bg-jet flex flex-row gap-[1vw] p-4 justify-left items-center">
      <NavBar navState={navState} setNavState={setNavState} />
      <ContentBox className="md:max-w-[94vw] md:min-w-[79vw] w-[100%] h-full bg-overlay rounded-[10px]" />
    </div>
  );
}

export default App;
