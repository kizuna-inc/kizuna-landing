import { TeamInterface } from "../Modules/Team";

interface childInterface {
  team: TeamInterface;
}

export const TeamCard = (child: childInterface) => {
  return (
    <a
      href={`https://github.com/${child.team.github}`}
      className="w-[18rem] rounded-xl bg-whitesmoke text-jet hover:scale-95 hover:opacity-80"
      target="_blank"
    >
      <div
        className="!bg-center !bg-cover !bg-no-repeat w-full h-[14rem] rounded-t-xl"
        style={{
          background: `url(https://avatars.githubusercontent.com/${child.team.github})`,
        }}
      ></div>
      <div className="mt-2 flex flex-col gap-2 px-4 py-2 pb-4">
        <h1 className="font-semibold underline">{child.team.name}</h1>
        <p>&nbsp;&nbsp;{child.team.desp}</p>
      </div>
    </a>
  );
};
