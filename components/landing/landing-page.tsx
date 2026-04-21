import { CTAButton } from "@/components/landing/cta-button";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  aromas,
  aromasContent,
  benefits,
  comparisonRows,
  faqs,
  finalCtaContent,
  heroContent,
  howItWorksContent,
  steps,
  storyContent,
  subHeroContent,
  testimonials,
  whatsappHref,
} from "@/lib/alvea-content";

const containerClass = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export function LandingPage() {
  return (
    <main className="relative overflow-x-clip pb-28 md:pb-0">
      <BackgroundGlow />

      <header className="relative z-20 pt-5 sm:pt-6">
        <div className={`${containerClass} flex items-center justify-between gap-4`}>
          <a
            href="#hero"
            className="inline-flex items-center gap-3 rounded-full border border-white/65 bg-white/60 px-3 py-2 text-sm font-semibold tracking-[0.22em] text-[#2d2418] backdrop-blur"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[#d5b378] shadow-[0_0_16px_rgba(213,179,120,0.75)]"
            />
            ALVEA
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-5 text-sm text-[#6f5c48]">
              <a className="transition hover:text-[#2d2418]" href="#story">
                História
              </a>
              <a className="transition hover:text-[#2d2418]" href="#aromas">
                Aromas
              </a>
              <a className="transition hover:text-[#2d2418]" href="#faq">
                FAQ
              </a>
            </nav>
            <CTAButton href={whatsappHref} className="px-5 py-3 text-sm">
              Solicitar orçamento
            </CTAButton>
          </div>
        </div>
      </header>

      <section id="hero" className="relative z-10 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pb-24">
        <div
          className={`${containerClass} grid items-center gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)] lg:gap-12`}
        >
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow">{heroContent.eyebrow}</p>
            <h1 className="font-heading mt-4 text-[2.85rem] leading-[0.92] font-semibold tracking-[-0.03em] text-[#2d2418] sm:text-[4.4rem]">
              {heroContent.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6f5c48] sm:text-lg">
              {heroContent.description}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              {heroContent.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="premium-card rounded-[1.6rem] px-4 py-4 text-sm font-medium leading-6 text-[#3a2e22]"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eadf] text-[#8d6d2c]">
                    <CheckIcon />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base font-medium text-[#4a3c2e]">
              {heroContent.note}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={whatsappHref} className="w-full sm:w-auto">
                {heroContent.cta}
              </CTAButton>
              <a
                href="#aromas"
                className="inline-flex items-center justify-center rounded-full border border-[#ccb89e] bg-white/72 px-6 py-3.5 text-sm font-semibold text-[#2d2418] shadow-[0_14px_30px_rgba(74,53,25,0.10)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                {heroContent.secondaryCta}
              </a>
            </div>

            <p className="mt-4 text-sm text-[#7d6a57]">{heroContent.utilityText}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[32rem] animate-rise lg:ml-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(230,196,145,0.55),_transparent_45%)] blur-3xl" />

            <div className="premium-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Coleção sensorial</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f5c48]">
                    Luxo artesanal, calor natural e personalização total.
                  </p>
                </div>
                <span className="rounded-full border border-[#e5d2b7] bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8d6d2c]">
                  Até 40h
                </span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="relative mx-auto h-[21rem] w-full max-w-[15rem]">
                  <div className="absolute left-1/2 top-2 h-14 w-1 -translate-x-1/2 rounded-full bg-[#433225]/70" />
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-[#f5d8a0] blur-[6px]" />
                  <div className="absolute inset-x-2 bottom-0 h-[15.6rem] rounded-[2.6rem_2.6rem_1.9rem_1.9rem] border border-white/70 bg-[linear-gradient(180deg,#fbf2e0_0%,#ead9b7_38%,#cb9a56_100%)] shadow-[0_22px_50px_rgba(88,60,27,0.22)]">
                    <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] bg-[rgba(255,249,241,0.9)] p-4 text-center shadow-inner">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#8d6d2c]">
                        ALVEA
                      </p>
                      <p className="font-heading mt-1 text-[1.4rem] font-semibold text-[#2d2418]">
                        Candle
                      </p>
                      <p className="mt-2 text-xs leading-5 text-[#6f5c48]">
                        100% cera de abelha
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:pt-6">
                  <FeatureChip title="Feita à mão">
                    Cada peça nasce com cuidado, ritmo e atenção aos detalhes.
                  </FeatureChip>
                  <FeatureChip title="Aroma sofisticado">
                    Presença envolvente para decorar, presentear e marcar momentos.
                  </FeatureChip>
                  <FeatureChip title="Personalização total">
                    Escolha aroma, pote e identidade visual com assinatura própria.
                  </FeatureChip>

                  <div className="premium-card rounded-[1.4rem] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8d6d2c]">
                      Paleta aromática
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {aromas.map((aroma) => (
                        <span
                          key={aroma.name}
                          className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-xs font-medium text-[#4a3c2e]"
                        >
                          <span
                            aria-hidden="true"
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: aroma.color }}
                          />
                          {aroma.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card animate-float-delayed absolute -bottom-5 right-3 rounded-[1.4rem] p-4 sm:-bottom-6 sm:-right-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#8d6d2c]">
                Ideal para
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {storyContent.useCases.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f6eee4] px-3 py-2 text-xs font-medium text-[#4a3c2e]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-8 sm:pb-12">
        <div className={containerClass}>
          <div className="premium-card rounded-[2rem] px-5 py-8 text-center sm:px-8 sm:py-10">
            <p className="eyebrow">Mais do que uma vela</p>
            <h2 className="font-heading mx-auto mt-4 max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.02em] text-[#2d2418] sm:text-4xl">
              {subHeroContent.title}
              <span className="block text-[#8d6d2c]">{subHeroContent.subtitle}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6f5c48] sm:text-lg">
              {subHeroContent.description}
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14`}>
          <div>
            <SectionHeading
              eyebrow={storyContent.eyebrow}
              title={storyContent.title}
              description={storyContent.paragraphs[0]}
            />
          </div>

          <div className="space-y-4">
            <div className="premium-card rounded-[1.8rem] p-5 sm:p-6">
              <p className="text-base leading-7 text-[#4a3c2e] sm:text-lg">
                {storyContent.paragraphs[1]}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {storyContent.useCases.map((useCase) => (
                <article
                  key={useCase}
                  className="premium-card rounded-[1.6rem] p-5 text-center"
                >
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f4eadf] text-[#8d6d2c]">
                    <SparkIcon />
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-[#2d2418]">
                    {useCase}
                  </h3>
                </article>
              ))}
            </div>
            <div className="premium-card rounded-[1.8rem] p-5 sm:p-6">
              <p className="text-base leading-7 text-[#4a3c2e] sm:text-lg">
                {storyContent.paragraphs[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="aromas" className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={containerClass}>
          <SectionHeading
            eyebrow={aromasContent.eyebrow}
            title={aromasContent.title}
            description={aromasContent.note}
            centered
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {aromas.map((aroma) => (
              <article
                key={aroma.name}
                className="soft-shadow relative overflow-hidden rounded-[1.8rem] border border-white/70 p-5"
                style={{
                  background: `linear-gradient(180deg, ${aroma.color}22 0%, rgba(255,255,255,0.9) 38%, rgba(255,248,241,0.86) 100%)`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute right-3 top-3 h-20 w-20 rounded-full blur-2xl"
                  style={{ backgroundColor: `${aroma.color}55` }}
                />
                <span
                  aria-hidden="true"
                  className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70"
                  style={{ backgroundColor: aroma.color }}
                >
                  <span className="h-3.5 w-3.5 rounded-full bg-white/90" />
                </span>
                <h3 className="font-heading relative mt-5 text-3xl font-semibold text-[#2d2418]">
                  {aroma.name}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-[#5c4c3c]">
                  {aroma.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <CTAButton href={whatsappHref}>Solicitar orçamento personalizado</CTAButton>
          </div>
        </div>
      </section>

      <section className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Comparação"
            title="Velas comuns vs ALVEA"
            description="Escolha uma vela que vai além da fragrância e entrega presença, acabamento e significado."
          />

          <div className="mt-8 space-y-4">
            {comparisonRows.map((row) => (
              <article
                key={row.label}
                className="premium-card grid gap-3 rounded-[1.8rem] p-4 sm:p-5 lg:grid-cols-[160px_1fr_1fr] lg:items-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8d6d2c]">
                  {row.label}
                </p>
                <ComparisonValue tone="negative" title="Velas comuns">
                  {row.common}
                </ComparisonValue>
                <ComparisonValue tone="positive" title="ALVEA">
                  {row.alvea}
                </ComparisonValue>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Benefícios"
            title="Qualidade premium que você sente no ambiente"
            description="Cada detalhe foi pensado para valorizar o espaço, o presente e a experiência do começo ao fim."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="premium-card rounded-[1.8rem] p-5 sm:p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d6d2c]">
                  0{index + 1}
                </span>
                <h3 className="font-heading mt-4 text-[1.9rem] leading-tight font-semibold text-[#2d2418]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5c4c3c]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={containerClass}>
          <SectionHeading
            eyebrow={howItWorksContent.eyebrow}
            title={howItWorksContent.title}
            description="Da escolha da essência ao acabamento final, tudo acontece de forma simples e personalizada."
          />

          <div className="relative mt-8">
            <div className="absolute bottom-5 left-5 top-5 w-px bg-[#dcc8ae] lg:hidden" />
            <div className="grid gap-4 lg:grid-cols-4">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="premium-card relative rounded-[1.8rem] p-5 pl-16 sm:p-6 sm:pl-18 lg:p-6"
                >
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2d2418] text-sm font-semibold text-white lg:left-6 lg:top-6">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-3xl font-semibold text-[#2d2418]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c4c3c]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="premium-card mt-8 flex flex-col gap-4 rounded-[1.8rem] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="eyebrow">Pronto para criar a sua?</p>
              <p className="mt-2 text-sm leading-6 text-[#5c4c3c] sm:text-base">
                {howItWorksContent.cta}
              </p>
            </div>
            <CTAButton href={whatsappHref} className="w-full sm:w-auto">
              Solicitar orçamento personalizado
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Depoimentos"
            title="Uma presença que permanece além da chama"
            description="Comentários que reforçam a sofisticação, o cuidado e o impacto da experiência ALVEA."
            centered
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {testimonials.map((quote) => (
              <figure
                key={quote}
                className="premium-card rounded-[1.8rem] p-5 sm:p-6"
              >
                <span className="font-heading text-5xl leading-none text-[#c8ad84]">“</span>
                <blockquote className="mt-3 text-base leading-7 text-[#4a3c2e] sm:text-lg">
                  {quote}
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#8d6d2c]">
                  Experiência ALVEA
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-divider relative z-10 py-14 sm:py-18 lg:py-20">
        <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12`}>
          <SectionHeading
            eyebrow="FAQ"
            title="As respostas para decidir com tranquilidade"
            description="Tudo o que você precisa saber para pedir sua vela personalizada com confiança."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="premium-card group rounded-[1.6rem] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#2d2418]">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3e8dc] text-xl text-[#8d6d2c] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/70 pt-4 text-sm leading-7 text-[#5c4c3c]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-16 pt-6 sm:pb-24">
        <div className={containerClass}>
          <div className="premium-card-dark relative overflow-hidden rounded-[2.2rem] px-5 py-10 text-[#f8f1e8] sm:px-8 sm:py-12 lg:px-12">
            <div className="absolute left-[-4rem] top-[-5rem] h-48 w-48 rounded-full bg-[#d8a75b]/20 blur-3xl" />
            <div className="absolute bottom-[-3rem] right-[-2rem] h-56 w-56 rounded-full bg-[#4f3921]/55 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <SectionHeading
                eyebrow={finalCtaContent.eyebrow}
                title={finalCtaContent.title}
                description={finalCtaContent.description}
                light
              />

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href={whatsappHref} variant="light" className="w-full sm:w-auto">
                  {finalCtaContent.cta}
                </CTAButton>
                <p className="text-sm leading-6 text-[#e9dccb]">
                  Produção artesanal, personalização sob medida e atendimento via
                  WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-[#d8c5ac]/70 bg-[rgba(247,239,230,0.92)] px-4 pt-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#8d6d2c]">
              Orçamento personalizado
            </p>
            <p className="truncate text-sm font-medium text-[#2d2418]">
              Crie sua vela exclusiva no WhatsApp
            </p>
          </div>
          <CTAButton href={whatsappHref} className="shrink-0 px-4 py-3 text-sm">
            Solicitar
          </CTAButton>
        </div>
      </div>
    </main>
  );
}

function FeatureChip({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="premium-card rounded-[1.4rem] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8d6d2c]">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#5c4c3c]">{children}</p>
    </div>
  );
}

function ComparisonValue({
  title,
  children,
  tone,
}: {
  title: string;
  children: React.ReactNode;
  tone: "negative" | "positive";
}) {
  const toneClass =
    tone === "positive"
      ? "bg-[#edf3e8] text-[#294b30]"
      : "bg-[#f5ebe0] text-[#6d5541]";

  return (
    <div className={`rounded-[1.3rem] px-4 py-4 ${toneClass}`}>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
        {title}
      </p>
      <div className="mt-2 flex items-start gap-3 text-sm leading-6">
        <span
          aria-hidden="true"
          className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/75"
        >
          {tone === "positive" ? <CheckIcon /> : <CrossIcon />}
        </span>
        <p>{children}</p>
      </div>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="animate-float absolute left-[-6rem] top-[-4rem] h-56 w-56 rounded-full bg-[#e7c48b]/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="animate-float-delayed absolute right-[-5rem] top-32 h-56 w-56 rounded-full bg-[#d9c4ae]/32 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute left-1/2 top-[34rem] h-64 w-64 -translate-x-1/2 rounded-full bg-[#efe3d2]/70 blur-3xl" />
      <div className="absolute bottom-24 right-[-6rem] h-64 w-64 rounded-full bg-[#d5b07a]/20 blur-3xl sm:h-80 sm:w-80" />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10 4 4 8-8" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 6 8 8" />
      <path d="m14 6-8 8" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
      <path d="M5 17.5 6 21l1-3.5L10.5 16 7 15l-1-3.5L5 15l-3.5 1L5 17.5Z" />
      <path d="M18 17.5 19 21l1-3.5 3.5-1.5L20 15l-1-3.5L18 15l-3.5 1 3.5 1.5Z" />
    </svg>
  );
}
