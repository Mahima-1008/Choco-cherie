import Hero from "../sections/Hero";
import Categories from "../components/Categories";
import WhyUs from "../sections/WhyUs";
import Custom from "../sections/Custom";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyUs />
      <Custom />
      <Contact />
    </>
  );
}