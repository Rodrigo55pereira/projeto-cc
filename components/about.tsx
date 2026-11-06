const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "5 mil", label: "pets atendidos" },
  { value: "100%", label: "amor por animais" },
];

export function About() {
  return (
    <section className="bg-amber-50 px-6 py-20 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Sobre nós</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Somos uma equipe apaixonada por animais. Tratamos cada pet como parte
          da família, com atendimento atencioso e ambiente seguro.
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold text-brand">{stat.value}</dd>
              <p className="text-sm text-zinc-600 dark:text-zinc-400" aria-hidden>
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
