import Hero from "@/components/Hero";
import About from "@/components/About";
import Content from "@/components/Content";
import Speaker from "@/components/Speaker";
import Courses from "@/components/Courses";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Content />
      <Speaker />
      <Courses />
      <WaitlistForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
