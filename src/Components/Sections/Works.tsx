import { GameJam, OtherWorks } from "../../Modules/Works";
import { WorkCard } from "../WorksCard";

interface childInterface {
  className?: string;
}

export const Works = (child: childInterface) => {
  return (
    <div
      className={`w-full min-h-[30vh] bg-[#3d3f3f] ${child.className}`}
      id="works"
    >
      <div className="w-full h-full backdrop-blur-lg px-4 py-6">
        <p className="font-bold text-3xl mb-4 text-whitesmoke underline">
          Works
        </p>
        <p className="text-xl text-whitesmoke px-4">
          This section gonna show you the works we have done before!
        </p>

        <p className="text-2xl text-whitesmoke font-semibold underline p-4 mt-2">
          GameJam's Works that we have joined. 
        </p>
        <div className="md:w-[80%] w-full py-4 flex flex-row flex-wrap justify-center items-start gap-4 mx-auto">
          {GameJam.map((data) => {
            return <WorkCard works={data} />;
          })}
        </div>

        <p className={`${OtherWorks.length > 0 ? '' : 'hidden'} text-2xl text-whitesmoke font-semibold underline p-4 mt-2`}>
          Other works
        </p>
        <div className={`${OtherWorks.length > 0 ? '' : 'hidden'} md:w-[80%] w-full py-4 flex flex-row flex-wrap justify-center items-start gap-4 mx-auto`}>
          {
            OtherWorks.length > 0 ? OtherWorks.map((data) => { return <WorkCard works={data} /> }) : ''
          }
        </div>
      </div>
    </div>
  );
};
