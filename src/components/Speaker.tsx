import { motion } from "framer-motion";
import speakerImg from "@/assets/speaker.jpg";

const Speaker = () => {
  return (
    <section className="py-24 px-4" id="palestrante">
      <div className="container max-w-5xl">
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

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Speaker image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-2/5 shrink-0"
          >
            <div className="rounded-3xl overflow-hidden shadow-glow">
              <img
                src={speakerImg}
                alt="Anndrea Franco - Especialista em IA e Inovação"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* Full bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-3/5 space-y-5"
          >
            <div className="glass rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Sobre a especialista</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professora, executiva de Estratégia e Inovação e fundadora da Fábrica de Produto e da AF Educação.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com formação em <strong className="text-foreground">Direito</strong>, <strong className="text-foreground">Administração</strong> e <strong className="text-foreground">Big Data</strong>, além de especializações pela <strong className="text-foreground">FGV</strong> e <strong className="text-foreground">Harvard</strong>, Anndrea é referência nacional em inovação, transformação digital e uso estratégico de dados e Inteligência Artificial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com ampla atuação em projetos de alto impacto, liderou iniciativas que geraram mais de <strong className="text-foreground">R$ 300 milhões em EBITDA</strong> e <strong className="text-foreground">R$ 2 bilhões em valuation</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sua experiência abrange desde a concepção de produtos digitais até a implementação de estratégias de transformação digital em organizações de grande porte, sempre com foco em resultados mensuráveis e impacto real.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Reconhecida por traduzir conceitos complexos de tecnologia em linguagem acessível para gestores e líderes, Anndrea tem formado centenas de profissionais em todo o Brasil, capacitando-os a tomar decisões mais inteligentes com o apoio de dados e IA.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="glass rounded-xl p-4 md:p-5 text-center">
                <p className="text-lg md:text-2xl font-bold text-primary">R$ 300M+</p>
                <p className="text-[11px] md:text-xs text-muted-foreground mt-1">em EBITDA gerado</p>
              </div>
              <div className="glass rounded-xl p-4 md:p-5 text-center">
                <p className="text-lg md:text-2xl font-bold text-primary">R$ 2B+</p>
                <p className="text-[11px] md:text-xs text-muted-foreground mt-1">em Valuation</p>
              </div>
              <div className="glass rounded-xl p-4 md:p-5 text-center">
                <p className="text-base md:text-2xl font-bold text-primary leading-tight">FGV & Harvard</p>
                <p className="text-[11px] md:text-xs text-muted-foreground mt-1">Especializações</p>
              </div>
              <div className="glass rounded-xl p-4 md:p-5 text-center">
                <p className="text-base md:text-2xl font-bold text-primary leading-tight">3 Formações</p>
                <p className="text-[11px] md:text-xs text-muted-foreground mt-1">Direito, Admin & Big Data</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
