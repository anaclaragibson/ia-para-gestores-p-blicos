import { motion } from "framer-motion";

const About = () => {
  const commitments = [
    {
      title: "Inovação Constante",
      desc: "Trazemos as últimas tendências e ferramentas, como a IA Generativa, para o coração da gestão e comunicação em Rondônia.",
    },
    {
      title: "Capacitação Estratégica",
      desc: "Empoderamos líderes e equipes com o conhecimento necessário para navegar e prosperar na era digital.",
    },
    {
      title: "Resultados Tangíveis",
      desc: "Transformamos o potencial da tecnologia em ganhos reais de produtividade, transparência e eficácia.",
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
            Sobre a empresa
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Insights Políticos & <span className="text-gradient">Empresariais</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong className="text-foreground">Insights Políticos e Empresariais</strong> é referência em comunicação e estratégia no estado de Rondônia, com foco em inteligência de dados e tecnologias de ponta para a construção de narrativas vencedoras e otimização da gestão pública e privada.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Em parceria estratégica com a renomada especialista <strong className="text-foreground">Anndrêa Franco</strong>, apresentamos um marco para a modernização da administração estadual: um ecossistema de <strong className="text-foreground">Formação em Inteligência Artificial</strong> focado em Órgãos Públicos.
          </p>
        </motion.div>

        {/* Compromisso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Nosso Compromisso com o <span className="text-gradient">Futuro de Rondônia</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa expertise vai além da consultoria tradicional. Respiramos inovação, buscando e adaptando as melhores práticas globais para a realidade rondoniense.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow duration-500"
            >
              <h4 className="text-lg font-semibold mb-2 text-primary">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
