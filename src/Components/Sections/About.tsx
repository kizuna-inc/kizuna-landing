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
        <div className="w-full flex flex-col gap-4">
          <p className="text-xl text-whitesmoke px-4">
            We are a team of IT students who want to learn anything even if it's
            hard or not.
          </p>
          <p className="text-xl text-whitesmoke px-4">
            At this moment, we really want to tried on Game Developing and we
            are joining some GameJam on{" "}
            <a
              href="https://itch.io"
              target="_blank"
              className="underline hover:opacity-60 hover:no-underline"
            >
              Itch.io
            </a>
          </p>
          <p className="text-xl text-whitesmoke px-4">
            If you want to give us some advices or want to take with us, it's
            okay to contact us on{" "}
            <a
              href="mailto:caffe@slpy.one"
              target="_blank"
              className="underline hover:opacity-60 hover:no-underline"
            >
              E-Mail
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
