import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />

      <section className="cards">
        <Card
          title="Lightning Fast"
          desc="Experience blazing-fast performance powered by modern technologies, optimized architecture, and beautiful UI interactions."
          logo="🦾"
        />

        <Card
          title="AI Powered"
          desc="Integrate intelligent AI solutions into your applications for automation, personalization, and next-generation experiences."
          logo="😍"
        />

        <Card
          title="Premium Design"
          desc="Modern glassmorphism, smooth animations, futuristic colors, and responsive layouts that stand out on every device."
          logo="🐱‍🚀"
        />
      </section>

      <Hero />
      <Footer />
    </>
  );
}

export default App;