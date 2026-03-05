import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Insights Políticos & Empresariais" className="w-16 rounded-lg" />
            <p className="text-sm font-semibold">Insights Políticos & Empresariais</p>
            <p className="text-xs text-muted-foreground">Comunicação & Estratégia</p>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm font-medium text-foreground">Contato</p>
            <p className="text-sm text-muted-foreground">
              Waldo Alves —{" "}
              <a href="https://wa.me/5569981121212" className="text-primary hover:underline">(69) 98112-1212</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Bernard Nagel —{" "}
              <a href="https://wa.me/5569999236876" className="text-primary hover:underline">(69) 99923-6876</a>
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              <a href="https://instagram.com/insightspoliticosoficial" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                @insightspoliticosoficial
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Insights Políticos & Empresariais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
