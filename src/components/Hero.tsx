import { motion } from "framer-motion";
import logo from "@/assets/logo-academy.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <motion.img
          src={logo}
          alt="Insights Políticos & Empresariais"
          className="w-56 md:w-64 bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 shadow-[0_8px_32px_-8px_hsl(187_90%_42%/0.15)]"
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
            <span className="text-gradient">IA no Setor Público</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Você não precisa ser "da tecnologia" para liderar na era da Inteligência Artificial. Mas precisa entender o suficiente para não ficar para trás.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#lista-espera"
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-glow text-center"
          >
            Quero participar da próxima turma
          </a>
          <a
            href="https://wa.me/5569999236876?text=Olá! Gostaria de levar o curso para minha equipe."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary/10 transition-all text-center"
          >
            Quero levar para minha equipe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
