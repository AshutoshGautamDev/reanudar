import React from "react";

const EducationCard = ({ title, period, institution, percentage, details }) => {
  return (
    <section class="my-8 text-gray-600 body-font">
      <div class="flex container mx-auto rounded-lg shadow-xl">
        <div class="md:w-64 md:mb-0 md:flex md:bg-red-200 flex-shrink-0  sm:bg-blue-300 rounded-l-lg mr-8">
          <div className="m-auto text-center">
            <span class="font-semibold title-font text-2xl text-gray-700">
              {title}
            </span>
            <br />
            <span class="mt-1 text-gray-500 text-sm">{period}</span>
          </div>
        </div>
        <div class="divide-y-2 py-12 divide-gray-100">
          <div class="my-8 flex flex-wrap md:flex-nowrap">
            <div class="md:flex-grow">
              <h2 class="flex mr-8 text-2xl text-gray-900 title-font mb-2">
                <span className="font-medium">{institution}</span>
                <span className="font-extralight ml-auto">{percentage}</span>
              </h2>
              <p class="leading-relaxed">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
