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
      </div>
    </div>
  );
};
