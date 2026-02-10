import Header from "@/components/layout/Header";
import Hero from "@/components/shared/Hero";
import TimeProgress from "@/components/shared/TimeProgress";
import FeatureDemo from "@/components/shared/FeatureDemo";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <TimeProgress />
      <FeatureDemo />
      <Footer />
    </div>
  );
}
