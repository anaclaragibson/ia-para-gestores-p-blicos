import { motion } from "framer-motion";
import speakerImg from "@/assets/speaker.jpg";

const Speaker = () => {
  return (
    <section className="py-24 px-4" id="palestrante">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Especialista
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Anndrea <span className="text-gradient">Franco</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden md:flex"
        >
          <div className="md:w-2/5 relative">
            <img
              src={speakerImg}
              alt="Anndrea Franco - Especialista em IA e Inovação"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/30" />
          </div>
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Professora, executiva de Estratégia e Inovação e fundadora da Fábrica de Produto e da AF Educação. Com formação em Direito, Administração e Big Data, além de especializações pela <strong className="text-foreground">FGV</strong> e <strong className="text-foreground">Harvard</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Anndrea é referência nacional em inovação, transformação digital e uso estratégico de dados e Inteligência Artificial.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com ampla atuação em projetos de alto impacto, liderou iniciativas que geraram mais de <strong className="text-foreground">R$ 300 milhões em EBITDA</strong> e <strong className="text-foreground">R$ 2 bilhões em valuation</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaker;
