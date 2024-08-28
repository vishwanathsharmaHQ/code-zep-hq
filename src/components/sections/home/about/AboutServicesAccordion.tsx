import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutServicesAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full pb-10">
      <AccordionItem className=" border-b-white/30" value="item-1">
        <AccordionTrigger className="common-bold-subheading font-fancy py-10  data-[state=open]:bg-white  data-[state=open]:px-5 data-[state=open]:text-black ">
          Strategy
        </AccordionTrigger>
        <AccordionContent className="px-5 py-10">
          <section className="w-full ">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="">
                <p className="text-left">
                  Understand your needs, set a solid foundation, and transform
                  your business.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Discovery Sessions
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Dive deep into your business, goals, and challenges to
                    uncover opportunities.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Competitor Analysis
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Understand the competitive landscape and identify your
                    unique positioning.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    User Journey Mapping
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Map out the user experience and identify pain points to
                    create seamless interactions.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Information Architecture
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Organize content and functionality to create a clear and
                    intuitive structure.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Vision Setting
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Collaborate to define a clear vision and roadmap for your
                    project.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Business Transformation
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Identify opportunities to improve your business processes
                    and operations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className=" border-b-white/30" value="item-2">
        <AccordionTrigger className="common-bold-subheading font-fancy py-10  data-[state=open]:bg-white data-[state=open]:px-5 data-[state=open]:text-black ">
          Design
        </AccordionTrigger>
        <AccordionContent className="px-5 py-10">
          <section className="w-full ">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="">
                <p className="text-left">
                  Crafting intuitive and engaging user experiences.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Heuristic Evaluation
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Assess the usability and accessibility of your existing
                    design.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Idea Generation
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Brainstorm and explore innovative design concepts and
                    solutions.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Wireframing
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Create low-fidelity prototypes to validate the user
                    experience.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Prototyping
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Build interactive high-fidelity prototypes to test and
                    refine the design.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Visual Design
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Craft visually appealing and on-brand designs that captivate
                    users.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Design Direction
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Provide strategic guidance and design leadership to achieve
                    your goals.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    UI/UX Design
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Create intuitive and engaging user interfaces that delight
                    your customers.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    3D Design
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Bring your ideas to life with immersive 3D designs and
                    visualizations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className=" border-b-white/30" value="item-3">
        <AccordionTrigger className="common-bold-subheading font-fancy py-10  data-[state=open]:bg-white data-[state=open]:px-5 data-[state=open]:text-black ">
          Development
        </AccordionTrigger>
        <AccordionContent className="px-5 py-10">
          <section className="w-full ">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="">
                <p className="text-left">
                  Bringing your designs to life with robust and scalable code.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Static Websites
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Fast, secure, and SEO-friendly static websites built with
                    modern frameworks.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    CMS Integration
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Seamlessly integrate your designs with popular content
                    management systems.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Web Apps
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Develop feature-rich web applications with a focus on
                    performance and scalability.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Mobile Apps
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Create responsive and engaging mobile experiences for iOS
                    and Android.
                  </p>
                </div>
                <div className="rounded-lg border border-white/30 p-6 shadow-sm ">
                  <h3 className="item-heading text-white py-5 font-fancy ">
                    Full-Stack Development
                  </h3>
                  <p className=" text-white/30 text-lg">
                    Provide end-to-end development services, from the backend to
                    the frontend.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
