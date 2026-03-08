import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const courseOptions = [
  "Liderança Preparada para IA — R$ 297,00",
  "IA na Prática para Órgãos Públicos — R$ 697,00",
  "Liderando de Forma Produtiva com IA — R$ 997,00",
  "Formação em Inteligência Artificial — R$ 2.997,00",
];

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !sector || !course) {
      toast.error("Preencha todos os campos.");
      return;
    }

    setLoading(true);

    const data = {
      fullName: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      sector,
      course,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz8fDwPik76_uus3RNGDs0yaBOOgP4qQI3k0IZpFPeDmOyIM2am2NbCNuGSZvJs4Ykp/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      setName("");
      setEmail("");
      setPhone("");
      setSector("");
      setCourse("");
      toast.success("Inscrição realizada com sucesso! Entraremos em contato em breve.");
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-background/60 border border-border/60 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 hover:border-primary/30 hover:bg-background/80 transition-all duration-300";

  return (
    <section className="py-24 px-4 relative bg-muted" id="lista-espera">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent" />
      <div className="container max-w-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Garanta sua vaga
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lista de <span className="text-gradient">Espera</span>
          </h2>
          <p className="text-muted-foreground">
            Preencha seus dados e seja avisado assim que as inscrições abrirem.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground">Nome completo</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              maxLength={100}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              maxLength={255}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground">Contato (WhatsApp)</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(69) 99999-9999"
              maxLength={15}
              className={inputClass}
              required
            />
          </div>

          {/* Setor */}
          <div>
            <label className="text-sm font-medium mb-3 block text-foreground">Você trabalha em:</label>
            <div className="flex gap-3">
              {["Órgão Público", "Empresa Privada"].map((option) => (
                <label
                  key={option}
                  onClick={() => setSector(option)}
                  className={`relative flex items-center justify-center cursor-pointer rounded-2xl border px-5 py-3.5 text-sm font-medium transition-all duration-300 flex-1 select-none ${
                    sector === option
                      ? "border-primary/40 bg-primary/[0.08] text-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.2),0_2px_8px_-2px_hsl(var(--primary)/0.15)]"
                      : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/30 hover:bg-primary/[0.03]"
                  }`}
                >
                  <span
                    className={`mr-2.5 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
                      sector === option
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/30 bg-transparent"
                    }`}
                  >
                    {sector === option && (
                      <span className="w-[6px] h-[6px] rounded-full bg-primary-foreground" />
                    )}
                  </span>
                  {option}
                  <input type="radio" name="sector" value={option} checked={sector === option} onChange={() => setSector(option)} className="sr-only" />
                </label>
              ))}
            </div>
          </div>

          {/* Curso de interesse */}
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground">Curso de interesse</label>
            <div className="relative">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                required
              >
                <option value="" disabled>
                  Selecione um curso
                </option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Quero participar"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default WaitlistForm;
