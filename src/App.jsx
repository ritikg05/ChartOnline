import { Package, LayoutDashboard, BarChart3 } from "lucide-react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Feature from "./Feature";
import feature1 from "./assets/feature/chart.avif";
import feature2 from "./assets/feature/last_chart.avif";
import feature3 from "./assets/feature/option.avif";
import HowItWorks from "./HowItWork";
import FAQ from './FAQ';
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <div className="space-y-16 p-8">
        <Feature
          icon={Package}
          title="User-Friendly Interface"
          description="No complex steps required—create graphs from Excel effortlessly using Chart Online’s intuitive interface, making it accessible for users of all skill levels."
          image={feature1}
          c="ml-32"
        />
        <Feature
          icon={BarChart3}
          title="Efficient Data Visualization"
          description="Easily create bar, line, and pie charts from Excel to enhance your data presentation, making it more understandable and visually appealing for all audiences."
          image={feature2}
          reverse
          c="mr-32"
        />
        <Feature
          icon={LayoutDashboard}
          title="Streamlined Process"
          description="With Chart Online, generating professional charts from Excel is simple and fast, saving you time and effort for more critical analysis tasks."
          image={feature3}
          c="ml-32"
        />
        <HowItWorks />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
