interface childInterface {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = (child: childInterface) => {
  return (
    <div
      className={`${
        child.navState ? "md:w-[15vw]" : "md:w-[3vw]"
      } h-full rounded-[10px] md:flex flex-col gap-2 py-2 hidden`}
    >
      <a
        className={`w-full flex flex-row justify-center items-center py-4 bg-whitesmoke rounded hover:opacity-60 ${
          child.navState ? "pl-4" : "pl-0"
        }`}
        href="#home"
      >
        <p>H</p>
        <p
          className={`block ${
            child.navState ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        >
          {child.navState ? "ome" : ""}
        </p>
      </a>
      <a
        className={`w-full flex flex-row justify-center items-center py-4 bg-whitesmoke rounded hover:opacity-60 ${
          child.navState ? "pl-4" : "pl-0"
        }`}
        href="#about"
      >
        <p>A</p>
        <p
          className={`block ${
            child.navState ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        >
          {child.navState ? "bout" : ""}
        </p>
      </a>
      <a
        className={`w-full flex flex-row justify-center items-center py-4 bg-whitesmoke rounded hover:opacity-60 ${
          child.navState ? "pl-4" : "pl-0"
        }`}
        href="#works"
      >
        <p>W</p>
        <p
          className={`block ${
            child.navState ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        >
          {child.navState ? "orks" : ""}
        </p>
      </a>
      <a
        className={`w-full flex flex-row justify-center items-center py-4 bg-whitesmoke rounded hover:opacity-60 ${
          child.navState ? "pl-4" : "pl-0"
        }`}
        href="#teams"
      >
        <p>T</p>
        <p
          className={`block ${
            child.navState ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        >
          {child.navState ? "eams" : ""}
        </p>
      </a>
      <div className="h-full"></div>
      <button
        className="w-full py-4 bg-whitesmoke rounded flex flex-row justify-center items-center text-2xl"
        onClick={() => {
          child.setNavState((prevState) => !prevState);
        }}
      >
        {child.navState ? "<" : ">"}
      </button>
    </div>
  );
};
