import { useEffect, useState } from "react";

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

const Admin = () => {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("waitlist") || "[]");
    setEntries(data);
  }, []);

  const handleClear = () => {
    localStorage.removeItem("waitlist");
    setEntries([]);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Lista de Espera ({entries.length})</h1>
          {entries.length > 0 && (
            <button onClick={handleClear} className="text-sm text-destructive hover:underline">
              Limpar tudo
            </button>
          )}
        </div>

        {entries.length === 0 ? (
          <p className="text-muted-foreground">Nenhuma inscrição ainda.</p>
        ) : (
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium text-muted-foreground">Nome</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">E-mail</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Contato</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Data</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-4">{entry.name}</td>
                    <td className="p-4 text-primary">{entry.email}</td>
                    <td className="p-4">{entry.phone}</td>
                    <td className="p-4 text-muted-foreground">
                      {new Date(entry.timestamp).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
