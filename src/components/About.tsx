import { motion } from "framer-motion";

const About = () => {
  const items = [
    {
      title: "Sem 'tecniquês'",
      desc: "Explicação clara para quem precisa comandar, não programar.",
    },
    {
      title: "Framework de Aplicação",
      desc: "Onde usar, como usar e como evitar uso errado.",
    },
    {
      title: "Tour Guiado",
      desc: "Veja na prática o que cada IA faz e por que isso importa.",
    },
    {
      title: "Jornada de Adesão",
      desc: "Como conduzir o tema na equipe sem resistência e sem bagunça.",
    },
    {
      title: "Engenharia de Prompt",
      desc: "Perguntas melhores = decisões melhores e menos retrabalho.",
    },
  ];

  return (
    <section className="py-24 px-4" id="sobre">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Sobre o curso
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Em 2 horas, sem enrolação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Este curso foi desenhado para quem lidera pessoas, cobra resultado, define prioridade e precisa estar preparado quando a IA aparecer na pauta.
          </p>
        </motion.div>

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">Para quem é este curso?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Líderes técnicos</strong> que precisam entender como a IA pode otimizar processos, reduzir custos operacionais e aumentar a eficiência das equipes que gerenciam.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Gestores públicos</strong> que querem incorporar inteligência artificial de forma responsável, ética e estratégica na administração.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tomadores de decisão</strong> que precisam de clareza sobre o que a IA realmente faz — e o que não faz — para liderar com segurança.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Equipes de inovação</strong> que buscam um ponto de partida prático e acessível para iniciar a jornada de adoção da IA nas suas organizações.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow duration-500"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Credibility bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 text-center"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">Insights Políticos & Empresariais</strong> é uma empresa especializada em comunicação e estratégia, conectando líderes a conhecimentos práticos e atualizados sobre inovação, tecnologia e gestão. Nossos cursos são desenvolvidos com rigor técnico e linguagem acessível, ideais para profissionais que precisam decidir com segurança sobre o futuro digital.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
