const services = [
  {
    icon: "🛁",
    title: "Banho e Tosa",
    description: "Seu pet limpinho, cheiroso e com visual novo.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description: "Consultas, vacinas e acompanhamento com carinho.",
  },
  {
    icon: "🏠",
    title: "Hotelzinho",
    description: "Hospedagem segura e divertida enquanto você viaja.",
  },
  {
    icon: "🦴",
    title: "Loja de produtos",
    description: "Rações, petiscos, brinquedos e acessórios.",
  },
];

export function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold">Nossos serviços</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-zinc-200 p-6 text-center dark:border-zinc-800"
            >
              <p className="text-4xl" aria-hidden>
                {service.icon}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
