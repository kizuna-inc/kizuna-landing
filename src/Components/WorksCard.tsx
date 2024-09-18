import { WorksInterface } from "../Modules/Works";

interface childInterface {
  works: WorksInterface;
}

export const WorkCard = (child: childInterface) => {
  return (
    <a
      href={child.works.links}
      className="w-[18rem] rounded-xl bg-whitesmoke text-jet hover:scale-95 hover:opacity-80"
      target="_blank"
    >
      <div
        className="!bg-center !bg-cover !bg-no-repeat w-full h-[12rem] rounded-t-xl"
        style={{ background: `url(${child.works.image})` }}
      ></div>
      <div className="mt-2 flex flex-col gap-2 px-4 py-2 pb-4">
        <h1 className="font-semibold underline">{child.works.name}</h1>
        <p>&nbsp;&nbsp;{child.works.desp}</p>
      </div>
    </a>
  );
};
