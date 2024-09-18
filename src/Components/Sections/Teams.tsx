import { TeamData } from "../../Modules/Team";
import { TeamCard } from "../TeamCard";

interface childInterface {
  className?: string;
}

export const Teams = (child: childInterface) => {
  return (
    <div
      className={`w-full min-h-[30vh] bg-pastel-black ${child.className}`}
      id="teams"
    >
      <div className="w-full h-full backdrop-blur-lg px-4 py-6">
        <p className="font-bold text-3xl mb-4 text-whitesmoke underline">
          Teams
        </p>
        <p className="text-xl text-whitesmoke px-4">
          This is a organize, so we are a small team to do what we even aimed
          for. :D
        </p>
        <div className="md:w-[80%] w-full py-4 flex flex-row flex-wrap justify-center items-start gap-4 mx-auto">
          {TeamData.map((data) => {
            return <TeamCard team={data} />;
          })}
        </div>
      </div>
    </div>
  );
};
