/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Accordion() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="accordion" id="accordionFAQ">
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
             What is CRM in IT and Support?
            </button>
          </h2>
          <div
            className={
              isActive.key == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
            A tool known as customer relationship management is used to handle all interactions and relationships between your business and its clients. The goal is straightforward to maintain business connections. CRM systems help companies maintain client contact, facilitate procedures, and increase profitability.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
             	Why CRM is important IT project?
            </button>
          </h2>
          <div
            className={
              isActive.key == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
            CRM is a business strategy, not a technological or software-based solution. CRM has more alters with customer experiences. The company provides by focusing more intently and intelligently on its customers which is more essential for IT and Support services.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              	What are the three stages of the CRM process?
            </button>
          </h2>
          <div
            className={
              isActive.key == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
            Three steps are involved in developing a CRM strategy: setting the destination, assessing the current condition, and planning the route to the destination.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(4)}>
            <button
              className={
                isActive.key == 4
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
             	Why does your organization need CRM?
            </button>
          </h2>
          {/* <div
            className={
              isActive.key == 4
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
            Your sales leads may be sorted, analyzed, and prioritized by a CRM so your sales staff can concentrate on opportunities. This is likely to close and give customers correct responses quickly and effectively, and your customer care team gets the data they need for cross-selling and up-selling.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(5)}>
            <button
              className={
                isActive.key == 5
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              What are the delivery types you use?
            </button>
          </h2>
          <div
            className={
              isActive.key == 5
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature Id pro
              doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco
              tritani partiendo. Omittantur No tale choro fastidii his, pri cu
              epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius
              quaestio mea ex. Ex illum officiis id.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(6)}>
            <button
              className={
                isActive.key == 6
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              How can I pay for my purchases?
            </button>
          </h2>
          <div
            className={
              isActive.key == 6
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature Id pro
              doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco
              tritani partiendo. Omittantur No tale choro fastidii his, pri cu
              epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius
              quaestio mea ex. Ex illum officiis id.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(7)}>
            <button
              className={
                isActive.key == 7
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Can I cancel my order?
            </button>
          </h2>
          <div
            className={
              isActive.key == 7
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature Id pro
              doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco
              tritani partiendo. Omittantur No tale choro fastidii his, pri cu
              epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius
              quaestio mea ex. Ex illum officiis id.
            </div>
          </div>*/}
        </div> 
      </div>
    </>
  );
}

export default Accordion;
