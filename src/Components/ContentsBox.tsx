import { Footer } from "./Footer";
import { About } from "./Sections/About";
import { TopHeading } from "./Sections/Heading";
import { Teams } from "./Sections/Teams";
import { Works } from "./Sections/Works";

interface childInterface {
  className?: string;
}

export const ContentBox = (child: childInterface) => {
  return (
    <div className={`overflow-y-auto ${child.className}`} id="contentBox">
      <TopHeading />
      <About />
      <Works />
      <Teams />
      <Footer />
    </div>
  );
};
