import Hero from "../sections/Hero";
import Categories from "../components/Categories";
import WhyUs from "../sections/WhyUs";
import Reviews from "../components/Reviews";


export default function Home() {
  return (
    <div className="fade">
      <Hero />
      <Categories />
      <WhyUs />
       <Reviews />
    </div>
  );
}