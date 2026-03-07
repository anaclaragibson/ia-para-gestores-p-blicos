import { motion } from "framer-motion";
import logo from "@/assets/logo-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <motion.img
          src={logo}
          alt="Insights Políticos & Empresariais"
          className="w-56 md:w-64 brightness-[2] contrast-[0.8]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Curso Presencial · Porto Velho, Rondônia
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Liderança Preparada:{" "}
            <span className="text-gradient">IA na Prática</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Você não precisa ser "da tecnologia" para liderar na era da Inteligência Artificial. Mas precisa entender o suficiente para não ficar para trás.
          </p>
        </motion.div>

        <motion.a
          href="#lista-espera"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-glow"
        >
          Entrar na Lista de Espera
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
