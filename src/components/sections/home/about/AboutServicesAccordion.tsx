import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  title: string;
  description: string;
  items: { heading: string; description: string }[];
}

interface AboutServicesAccordionProps {
  accordionData: {
    [key: string]: AccordionData; // making it flexible for various sections
  };
}

export function AboutServicesAccordion({
  accordionData,
}: AboutServicesAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full pb-10">
      {Object.entries(accordionData).map(([key, value]) => (
        <AccordionItem key={key} className="border-b-white/30" value={key}>
          <AccordionTrigger className="common-bold-subheading font-fancy py-10 data-[state=open]:bg-white data-[state=open]:px-5 data-[state=open]:text-black">
            {value.title}
          </AccordionTrigger>
          <AccordionContent className="px-5 py-10">
            <section className="w-full">
              <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div>
                  <p className="text-left">{value.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {value.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-white/30 p-6 shadow-sm"
                    >
                      <h3 className="item-heading text-white py-5 font-fancy">
                        {item.heading}
                      </h3>
                      <p className="text-white/30 text-lg">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
