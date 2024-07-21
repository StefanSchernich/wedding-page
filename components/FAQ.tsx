import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "item-1",
    triggerText: "Wie heiratet ihr?",
    content:
      "Wir heiraten standesamtlich in Obermichelbach und möchten danach ein bisschen mit euch feiern.",
  },
  // {
  //   value: "item-2",
  //   triggerText: "Wie ist der Ablauf?",
  //   content:
  //     "Direkt nach der standesamtlichen Hochzeit gibt es in der Bürgerhalle einen Sektempfang. Danach fahren wir zum Herzogspark, wo wir ab 16:30 Uhr die Hochzeitstorte mit Kaffee servieren. Ab 18:30 Uhr gibt es dann ein fränkisches Buffet!",
  // },
  {
    value: "item-3",
    triggerText: "Wollt ihr einen JGA?",
    content:
      "Nein, danke! Ist nicht unser Ding. Wie freuen uns stattdessen auf den 04.10. mit euch!",
  },
  {
    value: "item-4",
    triggerText: "Wie ist der Dresscode?",
    content:
      "Wäre schön, wenn ihr euch etwas schick macht. Wie man eben zu einer Hochzeit geht. Ihr müsst es aber nicht übertreiben!",
  },
  {
    value: "item-5",
    triggerText: "Kann man an den Locations parken?",
    content:
      "Ja, sowohl vor der Bürgerhalle als auch beim Herzogspark gibt es ausreichend Parkplätze.",
  },
  {
    value: "item-6",
    triggerText: "Was wünscht ihr euch als Geschenk?",
    content:
      "Falls ihr uns etwas schenken wollt, freuen wir uns über Geld. Ihr kennt ja den Stefan. 😉",
  },
  {
    value: "item-7",
    triggerText: "Kann man auch übernachten?",
    content:
      "Ja, der Herzogspark bietet für Hochzeitsgäste Zimmer für 105€ (EZ) bzw. 145€ (DZ) an. Alternativ auch in der Dependance Akazienhaus direkt neben dem Herzogspark für 80€ (EZ) bzw. 120€ (DZ). Frühstück ist jeweils dabei.",
  },
  // {
  //   value: "item-8",
  //   triggerText: "Können wir unsere Kinder mitbringen?",
  //   content: "Ausnahmsweise! Spaß beiseite: Ja, klar.",
  // },
  {
    value: "item-9",
    triggerText: "Wir haben Ideen, wen können wir kontaktieren?",
    content:
      "Veronikas Schwester Alexandra ist unsere Wedding Plannerin. Ihr könnt sie unter 0157 - 3626 2799 kontaktieren.",
  },
];

export default function FAQ() {
  return (
    <Accordion
      className="m-auto w-full max-w-[600px] items-center rounded-lg bg-white px-4"
      type="single"
      collapsible
    >
      {faqs.map(({ value, triggerText, content }) => (
        <AccordionItem
          key={value}
          value={value}
          className="py-2 last:border-b-0"
        >
          <AccordionTrigger className="bold text-left md:text-xl">
            {triggerText}
          </AccordionTrigger>
          <AccordionContent className="text-balance text-gray-600 md:text-lg">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
