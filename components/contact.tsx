export function Contact() {
  return (
    <section id="contato" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Fale com a gente</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Agende um horário pelo WhatsApp ou venha nos visitar.
        </p>
        <ul className="mt-8 space-y-2">
          <li>📍 Rua das Flores, 123 - Centro</li>
          <li>📞 (11) 99999-9999</li>
          <li>🕗 Seg a Sáb, 8h às 18h</li>
        </ul>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
