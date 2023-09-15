import React from "react";

type Props = {
  sectionId: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function SectionLayout({
  sectionId,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section
      id={sectionId}
      className="max-w-7xl p-12 pt-14 mx-auto my-0 h-screen"
    >
      <div className="flex flex-row justify-between items-start py-10 whitespace-pre-line">
        <h1 className="font-proxima font-extrabold text-5xl">{title}</h1>
        <h2 className="font-bold text-xl text-right">{subtitle}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}
