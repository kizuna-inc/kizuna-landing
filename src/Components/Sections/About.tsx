interface childInterface {
  className?: string;
}

export const About = (child: childInterface) => {
  return (
    <div
      className={`w-full min-h-[30vh] bg-pastel-black ${child.className}`}
      id="about"
    >
      <div className="w-full h-full backdrop-blur-lg px-4 py-6">
        <p className="font-bold text-3xl mb-4 text-whitesmoke underline">
          About
        </p>
        <p className="text-xl text-whitesmoke px-4">
          Do the thing we need with passion.
        </p>
      </div>
    </div>
  );
};
