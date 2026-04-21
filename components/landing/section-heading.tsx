type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignment = centered ? "mx-auto text-center" : "";
  const titleTone = light ? "text-[#f8f1e8]" : "text-[#2d2418]";
  const descriptionTone = light ? "text-[#e9dccb]" : "text-[#6f5c48]";

  return (
    <div className={`${alignment} ${className}`}>
      <p className={`eyebrow ${light ? "!text-[#f0c98f]" : ""}`}>{eyebrow}</p>
      <h2
        className={`font-heading mt-4 text-4xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-5xl ${titleTone}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg ${centered ? "mx-auto" : ""} ${descriptionTone}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

