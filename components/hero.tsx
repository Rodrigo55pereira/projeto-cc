export function Hero() {
  return (
    <section className="bg-amber-50 px-6 py-24 text-center dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl">
        <p className="text-6xl" aria-hidden>
          🐶🐱
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Patinhas Felizes
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Cuidado, carinho e diversão para o seu melhor amigo. Banho, tosa,
          veterinário e muito mais em um só lugar.
        </p>
        <a
          href="#contato"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Agendar banho e tosa
        </a>
      </div>
    </section>
  );
}
