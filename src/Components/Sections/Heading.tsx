interface childInterface {
  className?: string;
}

export const TopHeading = (child: childInterface) => {
  return (
    <div
      className={`w-full h-full !bg-center !bg-no-repeat !bg-cover ${child.className}`}
      style={{ background: `url(https://frame.000189.xyz/cdn)` }}
      id="home"
    >
      <div className="w-full h-full bg-overlay backdrop-blur-lg flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-3xl text-whitesmoke">KIZUNA IS HERE.</p>
        <p className="text-xl text-whitesmoke">
          Do the thing we need with passion.
        </p>
      </div>
    </div>
  );
};
