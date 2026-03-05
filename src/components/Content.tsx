import { motion } from "framer-motion";

const Content = () => {
  const topics = [
    "O que é IA (sem tecniquês)",
    "Framework de Aplicação de IA (como usar, casos de uso)",
    "Tour guiado por IAs: ChatGPT, Claude, Gemini, VEO3, Nano Banana, Lovable",
    "Jornada de Adesão de Uso pelas equipes",
    "Engenharia de Prompt: a arte de fazer perguntas",
  ];

  const outcomes = [
    "Clareza sobre o que é IA e o que não é",
    "Vocabulário seguro para falar do tema sem depender de ninguém",
    "Visão prática de como essas ferramentas funcionam e onde ajudam",
    "Um caminho de adesão para conduzir o uso com critério na sua equipe",
  ];

  return (
    <section className="py-24 px-4 relative" id="conteudo">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Conteúdo programático
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">Tópicos</h3>
            <ul className="space-y-4">
              {topics.map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-primary shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">Você vai sair com</h3>
            <ul className="space-y-4">
              {outcomes.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-primary shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Content;
