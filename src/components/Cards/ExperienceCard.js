import React from "react";
import { RightArrow } from "../Icons";

const ExperienceCard = ({ company, position, from, to, place, details }) => {
  return (
    <div class="my-8 divide-y-2 divide-gray-100 ">
      <div class="py-8 flex flex-wrap md:flex-nowrap rounded-xl shadow md:border-l-4 md:border-t-0 border-t-4 border-blue-500">
        <div class="md:flex-grow pl-4">
          <span class="text-2xl font-medium text-gray-900 title-font mb-2">
            {position}, {company}
          </span>
          <ul class="m-3 list-inside">
            {details.map((x) => {
              return (
                <li className="flex">
                  <span>
                    <RightArrow />
                  </span>
                  <span className="pl-3">{x}</span>
                </li>
              );
            })}
          </ul>
          <br />
          <span className="font-light flex">
            {from} {<RightArrow />} {to}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
