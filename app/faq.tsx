import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
          rounded-3xl
          
          "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-6xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-3xl md:text-7xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How accurate are the diagnoses provided by ChatMedica?
            </AccordionTrigger>
            <AccordionContent>
              Our AI models have been trained on extensive medical datasets,
              achieving a 97% accuracy rate. We continuously update and refine
              our models to ensure reliable and precise diagnostic insights for
              our users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does ChatMedica protect my personal data?
            </AccordionTrigger>
            <AccordionContent>
              We prioritize your privacy and data security. All personal
              information is encrypted both during transmission and when stored.
              Our system is fully compliant with healthcare regulations like
              HIPAA/GDPR, ensuring your data is never shared without your
              consent.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is my conversation with the chatbot secure?
            </AccordionTrigger>
            <AccordionContent>
              Yes, all interactions with our chatbot are encrypted end-to-end.
              Your conversation data remains confidential and is only used to
              provide medical insights. No third-party has access to your
              conversations or personal health information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can ChatMedica replace consultation of a doctor?
            </AccordionTrigger>
            <AccordionContent>
              While ChatMedica provides highly accurate diagnostic insights, it
              is not a replacement for professional medical advice. We recommend
              consulting a healthcare provider for any medical concerns and
              using ChatMedica as a supportive tool for initial guidance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
