import React from "react";
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-react";

const Saluition = () => {
  return (
    <div>
      <div className="max-w-Container mx-auto">
        <div className="grid grid-cols-1 text-center">
          <div className=" bg-BgColorwhite w-[217px] h-[47px] rounded-[8px] mx-auto ">
            <p className="text-lg font-medium font-Outfit text-[#333333] leading-loose  ">
              Solutions For The Doubts
            </p>
          </div>

          <h2 className="font-bold font-Raleway text-[#1A1A1A] text-[58px] mt-[19px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[20px] text-[#333333] font-medium font-Outfit max-w-[992px] mx-auto mt-[19px]">
            Find all the essential information you need in our FAQ section,
            designed to address the most frequently asked questions and help you
            make informed decisions for your child's education.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-[100px]">
          <div>
            <Accordion className="" flush={true}>
              <AccordionPanel className="bg-[#]" >
                <AccordionContainer >
                  <AccordionTitle className="">
                  What are the school hours at Little Learners Academy?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  Is there a uniform policy for students?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  The Keep React is a collection of UI components, styles, and
                  guidelines that ensure consistency and a unified user
                  experience across our products. It simplifies the design and
                  development process by providing ready-to-use components that
                  can be easily customized and integrated into various
                  applications.
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  What extracurricular activities are available for students?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  The Keep React offers a range of color variants for
                  components. To customize the color scheme, you can use the
                  available color options such as gray,info,error,warning and
                  success. Simply set the desired color variant as a prop when
                  using the component, and it will reflect the chosen color.
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  What extracurricular activities are available for students?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  Yes, the Notification component in the Keep React allows you
                  to include extra content alongside the primary message. The
                  additionalContent prop can be used to display supplementary
                  information, such as buttons, links, or icons, within the
                  notification to provide users with more context and options.
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
          <div>
            <Accordion flush={true}>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  How do you handle food allergies and dietary restrictions?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  The Keep React is a collection of UI components, styles, and
                  guidelines that ensure consistency and a unified user
                  experience across our products. It simplifies the design and
                  development process by providing ready-to-use components that
                  can be easily customized and integrated into various
                  applications.
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  What is the teacher-to-student ratio at Little Learners Academy?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  The Keep React offers a range of color variants for
                  components. To customize the color scheme, you can use the
                  available color options such as gray,info,error,warning and
                  success. Simply set the desired color variant as a prop when
                  using the component, and it will reflect the chosen color.
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  How do you handle discipline and behavior management?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  Yes, the Notification component in the Keep React allows you
                  to include extra content alongside the primary message. The
                  additionalContent prop can be used to display supplementary
                  information, such as buttons, links, or icons, within the
                  notification to provide users with more context and options.
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionContainer>
                  <AccordionTitle>
                  How do I apply for admission to Little Learners Academy?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                  Yes, the Notification component in the Keep React allows you
                  to include extra content alongside the primary message. The
                  additionalContent prop can be used to display supplementary
                  information, such as buttons, links, or icons, within the
                  notification to provide users with more context and options.
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saluition;
