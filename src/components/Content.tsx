import { motion } from "framer-motion";

const Content = () => {
  const problems = [
    "Tarefas repetitivas e documentos redundantes",
    "Busca de informações dispersas e análise manual de processos",
    "Retrabalho em fluxos burocráticos",
    "Desgaste na produtividade percebida das equipes",
  ];

  const opportunities = [
    "Redação inicial de documentos e resumo de processos",
    "Leitura de legislações e análise de planilhas",
    "Revisão textual e organização de informações",
    "Liberar tempo para atividades de maior qualidade técnica",
  ];

  return (
    <section className="py-24 px-4 relative bg-muted/50" id="conteudo">
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            O Curso
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            IA para <span className="text-gradient">Órgãos Públicos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Uma capacitação executiva para servidores e gestores que precisam entender, aplicar e conduzir o uso da IA com segurança, clareza e responsabilidade institucional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problema */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-destructive">O problema atual</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Em muitos órgãos, parte relevante do tempo da equipe ainda é consumida por tarefas que poderiam ser otimizadas. Pesquisas mostram que esse desgaste já afeta a produtividade e abre espaço concreto para o uso inteligente da IA.
            </p>
            <ul className="space-y-3">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive/60 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Oportunidade */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">A oportunidade com IA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              A IA pode apoiar a administração pública em diversas atividades. O valor não está em substituir o servidor, mas em liberar tempo para decisões de maior qualidade — gerando menos exaustão na equipe.
            </p>
            <ul className="space-y-3">
              {opportunities.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{o}</span>
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
