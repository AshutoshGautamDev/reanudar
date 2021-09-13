import React from "react";

const EducationCard = ({ title, period, institution, percentage, details }) => {
  return (
    <>
      <section class="hidden md:block my-8 text-gray-600 body-font">
        <div class="flex container mx-auto rounded-lg shadow-xl">
          <div class="md:w-64 md:mb-0 md:flex md:bg-blue-100 flex-shrink-0  sm:bg-blue-300 rounded-l-lg mr-8">
            <div className="m-auto text-center">
              <span class="font-semibold title-font text-2xl text-blue-500">
                {title}
              </span>
              <br />
              <span class="mt-1 text-gray-500 text-sm">{period}</span>
            </div>
          </div>
          <div class="divide-y-2 py-12 divide-gray-100">
            <div class="my-8">
              <div class="mr-8 text-2xl text-gray-900 title-font mb-2">
                <div className="font-medium">{institution}</div>
                <div className="text-sm font-light">{percentage}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='md:hidden p-2 my-4 text-gray-800 body-font'>
        <div className='text-center h-36 border-t-4 border-blue-500 rounded-xl shadow-lg py-8'>
          <div className="text-2xl font-semibold">{title}</div>
          <div>
            <span className="text-lg">{institution}</span> - <span className="text-sm italic font-light">( {percentage} )</span></div>
        </div>
      </section>
    </>
  );
};

export default EducationCard;
