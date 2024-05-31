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
      "Nur standesamtlich im kleinen Kreis. Danach möchten wir ganz entspannt ein bisschen mit euch feiern.",
  },
  {
    value: "item-2",
    triggerText: "Wollt ihr einen JGA?",
    content:
      "Nein, danke! Ist nicht unser Ding. Wie freuen uns stattdessen auf den 04.10. mit euch!",
  },
  {
    value: "item-3",
    triggerText: "Wie ist der Dresscode?",
    content:
      "Wäre schön, wenn ihr euch etwas schick macht. Wie man eben zu einer Hochzeit geht. Ihr müsst es aber nicht übertreiben!",
  },
  {
    value: "item-4",
    triggerText: "Kann man an der Location parken?",
    content: "Ja, der Herzogspark hat ausreichend Parkplätze.",
  },
  {
    value: "item-5",
    triggerText: "Was wünscht ihr euch als Geschenk?",
    content: "Geld ist immer gut. 😉",
  },
  {
    value: "item-6",
    triggerText: "Kann man auch übernachten?",
    content:
      "Ja, der Herzogspark bietet für Hochzeitsgäste Zimmer für 105€ (EZ) bzw. 145€ (DZ) an. Alternativ auch in der Dependance Akazienhaus direkt neben dem Herzogspark für 80€ (EZ) bzw. 120€ (DZ). Frühstück ist jeweils dabei.",
  },
  {
    value: "item-7",
    triggerText: "Können wir unsere Kinder mitbringen?",
    content: "Ausnahmsweise! Spaß beiseite: Ja, klar.",
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
          <AccordionTrigger className="bold md:text-xl">
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
