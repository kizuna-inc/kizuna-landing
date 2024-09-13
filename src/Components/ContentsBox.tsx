import { About } from "./Sections/About";
import { TopHeading } from "./Sections/Heading";

interface childInterface {
  className?: string;
}

export const ContentBox = (child: childInterface) => {
  return (
    <div className={`overflow-y-auto ${child.className}`} id="contentBox">
      <TopHeading />
      <About />
    </div>
  );
};
