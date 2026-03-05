import Hero from "@/components/Hero";
import About from "@/components/About";
import Content from "@/components/Content";
import Speaker from "@/components/Speaker";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Content />
      <Speaker />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
