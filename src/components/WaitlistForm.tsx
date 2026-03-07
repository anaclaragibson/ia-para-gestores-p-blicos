import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error("Preencha todos os campos.");
      return;
    }

    setLoading(true);

    const data = {
      fullName: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
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
      toast.success("Inscrição realizada com sucesso! Entraremos em contato em breve.");
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 relative" id="lista-espera">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
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
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
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
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
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
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              required
            />
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
