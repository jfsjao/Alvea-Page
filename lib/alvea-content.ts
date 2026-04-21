const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent(
  "Olá! Quero solicitar um orçamento personalizado da ALVEA.",
);

export const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : `https://wa.me/?text=${whatsappMessage}`;

export const heroContent = {
  eyebrow: "Velas artesanais premium",
  title: "Transforme qualquer ambiente em uma experiência sensorial inesquecível",
  description:
    "Velas aromáticas de cera de abelha, feitas à mão e totalmente personalizadas para elevar momentos, presentear com elegância e criar atmosferas únicas.",
  highlights: [
    "100% naturais e sem toxinas",
    "Aroma marcante e sofisticado",
    "Até 40 horas de queima limpa",
  ],
  note: "Crie algo exclusivo para você ou seu evento.",
  cta: "Solicitar orçamento personalizado no WhatsApp",
  secondaryCta: "Explorar aromas",
  utilityText: "Para presentes, eventos e momentos de autocuidado.",
} as const;

export const subHeroContent = {
  title: "ALVEA não é apenas uma vela.",
  subtitle: "É a combinação entre natureza, design e sensação.",
  description:
    "Cada peça é produzida artesanalmente para transformar espaços comuns em experiências acolhedoras, sofisticadas e memoráveis.",
} as const;

export const storyContent = {
  eyebrow: "Storytelling",
  title:
    "Em um mundo acelerado, os momentos de pausa se tornaram raros — e valiosos.",
  paragraphs: [
    "A ALVEA nasce da busca por desacelerar, sentir e viver com mais presença.",
    "Nossas velas são feitas com cera de abelha pura, respeitando o tempo da natureza e o cuidado do artesanal. Cada detalhe — do aroma à personalização — é pensado para criar uma experiência que vai além da decoração.",
    "Seja para um momento de autocuidado, um presente especial ou um evento marcante, a ALVEA transforma o simples em significativo.",
  ],
  useCases: [
    "Momento de autocuidado",
    "Presente especial",
    "Evento marcante",
  ],
} as const;

export const aromas = [
  {
    name: "Campi Limão",
    color: "#ABB36F",
    description:
      "Refrescante e energizante, traz leveza e vitalidade ao ambiente.",
  },
  {
    name: "Lavanda",
    color: "#9B94B0",
    description: "Calma profunda e relaxamento — ideal para desacelerar.",
  },
  {
    name: "Flor",
    color: "#D4A59A",
    description:
      "Delicado e envolvente, perfeito para momentos acolhedores.",
  },
  {
    name: "Ocean",
    color: "#8A9BA8",
    description: "Fresco e sofisticado, inspira tranquilidade e amplitude.",
  },
  {
    name: "Chá Branco",
    color: "#C2A991",
    description: "Suave e elegante, cria uma atmosfera leve e refinada.",
  },
] as const;

export const aromasContent = {
  eyebrow: "Aromas",
  title: "Escolha a essência que traduz o momento que você deseja criar:",
  note: "Todos os aromas disponíveis para personalização completa.",
} as const;

export const comparisonRows = [
  {
    label: "Composição",
    common: "Parafina (derivada do petróleo)",
    alvea: "100% cera de abelha natural",
  },
  {
    label: "Queima",
    common: "Queima irregular",
    alvea: "Queima limpa e duradoura (até 40h)",
  },
  {
    label: "Aroma",
    common: "Aroma artificial ou fraco",
    alvea: "Aroma marcante e sofisticado",
  },
  {
    label: "Produção",
    common: "Produção em massa",
    alvea: "Feitas à mão, peça por peça",
  },
  {
    label: "Personalização",
    common: "Sem personalização",
    alvea: "Totalmente personalizáveis (pote, aroma, identidade)",
  },
] as const;

export const benefits = [
  {
    title: "Experiência sensorial completa",
    description:
      "Mais que fragrância — uma atmosfera que transforma o ambiente.",
  },
  {
    title: "Elegância que se destaca",
    description:
      "Design minimalista e sofisticado que valoriza qualquer espaço.",
  },
  {
    title: "Personalização total",
    description:
      "Crie algo único: escolha aroma, pote e identidade visual.",
  },
  {
    title: "Natural e segura",
    description: "Sem toxinas, sem parafina — apenas o essencial.",
  },
  {
    title: "Queima prolongada",
    description:
      "Até 40 horas de duração, mantendo o aroma do início ao fim.",
  },
] as const;

export const steps = [
  {
    title: "Escolha sua essência",
    description:
      "Selecione o aroma que melhor representa o momento ou evento.",
  },
  {
    title: "Personalize sua vela",
    description:
      "Defina pote, identidade visual e detalhes exclusivos.",
  },
  {
    title: "Produção artesanal",
    description: "Cada vela é feita à mão com cuidado e precisão.",
  },
  {
    title: "Receba ou presenteie",
    description:
      "Perfeito para decorar, relaxar ou marcar ocasiões especiais.",
  },
] as const;

export const howItWorksContent = {
  eyebrow: "Como funciona",
  title: "Um processo simples para criar algo único",
  cta: "Solicite seu orçamento personalizado agora",
} as const;

export const testimonials = [
  "Simplesmente transformou o ambiente. O aroma é marcante na medida certa e a estética é impecável.",
  "Escolhi para presentear e foi um sucesso. Dá pra ver o cuidado em cada detalhe.",
  "Usei na decoração e fez toda diferença. Ficou sofisticado e acolhedor ao mesmo tempo.",
  "É outro nível de vela. Não tem comparação com as comuns.",
] as const;

export const faqs = [
  {
    question: "As velas são realmente naturais?",
    answer:
      "Sim. Utilizamos 100% cera de abelha, sem parafina ou toxinas.",
  },
  {
    question: "Posso personalizar tudo?",
    answer:
      "Sim. Você pode escolher aroma, pote e identidade (adesivo/visual).",
  },
  {
    question: "Qual a duração da vela?",
    answer: "Até 40 horas de queima limpa e constante.",
  },
  {
    question: "Qual o prazo de produção?",
    answer:
      "O prazo varia conforme o pedido e quantidade. Informamos tudo no orçamento.",
  },
  {
    question: "Vocês fazem para eventos?",
    answer:
      "Sim. Atendemos desde presentes individuais até encomendas para eventos.",
  },
  {
    question: "Como faço o pedido?",
    answer: "Basta solicitar seu orçamento pelo WhatsApp.",
  },
] as const;

export const finalCtaContent = {
  eyebrow: "Solicitar orçamento",
  title: "Crie uma experiência que vai além da decoração.",
  description:
    "Surpreenda, encante e transforme momentos com uma peça única.",
  cta: "Solicitar orçamento personalizado agora no WhatsApp",
} as const;

