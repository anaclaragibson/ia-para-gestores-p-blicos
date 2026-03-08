import { motion } from "framer-motion";
import { Clock, Users, TrendingUp, BookOpen, Shield, Sparkles } from "lucide-react";

const courses = [
  {
    title: "Liderança Preparada para IA",
    subtitle: "Capacitação executiva de sensibilização e uso seguro da IA no serviço público",
    duration: "2 horas",
    audience: "Sem limite de alunos",
    format: "Palestra com prática",
    topics: [
      "IA sem mistério — conceitos essenciais",
      "Aplicações na administração pública",
      "Prompts que funcionam",
      "Uso seguro e revisão humana",
      "Demonstração guiada",
    ],
    price: "R$ 297,00",
    highlight: false,
    icon: BookOpen,
  },
  {
    title: "IA na Prática para Órgãos Públicos",
    subtitle: "Workshop prático com aplicação real em tarefas administrativas",
    duration: "4 horas",
    audience: "Até 50 participantes",
    format: "Workshop Prático",
    topics: [
      "IA sem mistério com aplicação prática",
      "Uso seguro e responsável",
      "Ferramentas e método de uso",
      "Aplicações práticas na rotina",
      "Oficina guiada com tarefa real",
    ],
    price: "R$ 697,00",
    highlight: true,
    badge: "MAIS PROCURADO",
    icon: Sparkles,
  },
  {
    title: "Liderando de Forma Produtiva com IA",
    subtitle: "Capacitação avançada para aplicar IA com segurança e produtividade",
    duration: "6 horas",
    audience: "Até 50 participantes",
    format: "Workshop Prático",
    topics: [
      "Liderança pública na era da IA",
      "Uso seguro e institucional",
      "Aplicações práticas e ferramentas",
      "Priorização e implementação",
      "Oficina guiada + acompanhamento online",
    ],
    price: "R$ 997,00",
    highlight: false,
    icon: TrendingUp,
    buyUrl: "https://youtube.com",
  },
  {
    title: "Formação em Inteligência Artificial",
    subtitle: "Formação prática para aumentar produtividade, melhorar a qualidade técnica dos documentos e usar IA com segurança na rotina administrativa",
    duration: "16 horas (híbrido)",
    audience: "Até 50 participantes",
    format: "Presencial + Online (90 dias)",
    topics: [
      "Fundamentos da IA no serviço público",
      "Método de uso e construção de comandos",
      "Uso seguro, LGPD e revisão humana",
      "Ferramentas do mercado e critérios de escolha",
      "Aplicações práticas na rotina administrativa",
      "Oficina guiada com tarefa real do participante",
    ],
    price: "R$ 2.997,00",
    highlight: false,
    icon: Shield,
    buyUrl: "https://youtube.com",
  },
];

const highlights = [
  { label: "100%", desc: "Adaptado à realidade do setor público" },
  { label: "Prático", desc: "Aplicação imediata em tarefas reais" },
  { label: "Seguro", desc: "Foco em LGPD e responsabilidade institucional" },
];

const Courses = () => {
  return (
    <section className="py-24 px-4 bg-muted/50" id="cursos">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Treinamentos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Modalidades de <span className="text-gradient">Treinamento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha a capacitação que melhor se adequa às necessidades da sua equipe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  course.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass"
                }`}
              >
                {course.badge && (
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {course.badge}
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    course.highlight
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      course.highlight ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    course.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {course.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 mb-5">
                  <span className="flex items-center gap-1.5 text-sm">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Users className="w-4 h-4" /> {course.audience}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <TrendingUp className="w-4 h-4" /> {course.format}
                  </span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex gap-2 items-start text-sm">
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                          course.highlight ? "bg-primary-foreground/60" : "bg-primary"
                        }`}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <p className="mb-4">
                     <span className="text-3xl font-bold">{course.price}</span>
                     <span
                       className={`text-sm ml-1 ${
                         course.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                       }`}
                     >
                       por pessoa
                     </span>
                   </p>
                   <div className={`flex gap-3 ${course.buyUrl ? "flex-col" : ""}`}>
                     <a
                       href="#lista-espera"
                       className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                         course.highlight
                           ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                           : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                       }`}
                     >
                       Saiba Mais
                     </a>
                     {course.buyUrl && (
                       <a
                         href={course.buyUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all border ${
                           course.highlight
                             ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                             : "border-primary text-primary hover:bg-primary/10"
                         }`}
                       >
                         Comprar Agora
                       </a>
                     )}
                   </div>
                 </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 grid md:grid-cols-3 gap-6 text-center"
        >
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="text-2xl font-bold text-gradient mb-1">{h.label}</p>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
