import { TeamInterface } from "../Modules/Team";

interface childInterface {
  team: TeamInterface;
}

export const TeamCard = (child: childInterface) => {
  return (
    <a
      href={`${child.team.website}`}
      className="w-[18rem] rounded-xl text-jet hover:scale-95"
      target="_blank"
    >
      <div
        className="!bg-center !bg-cover !bg-no-repeat w-full h-[18rem] rounded-xl group"
        style={{
          background: `url(https://avatars.githubusercontent.com/${child.team.github})`,
        }}
      >
        <div className="h-full w-full flex flex-col text-center justify-end items-center text-whitesmoke pb-4 opacity-0 group-hover:h-full group-hover:bg-overlay group-hover:opacity-100">
          <h1 className="font-semibold underline">{child.team.name}</h1>
          <p>&nbsp;&nbsp;{child.team.desp}</p>
        </div>
      </div>
    </a>
  );
};
