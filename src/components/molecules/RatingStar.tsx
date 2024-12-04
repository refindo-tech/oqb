import React from "react";
import Star from "@/components/atom/icons/Star";

const RatingStar: React.FC<{ count: number }> = ({ count }) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push(i)
  }

  return (
  <div className="flex gap-2 h-7">
    {stars.map((index)=>(
        <div
            key={index}
            className="h-7 w-7 text-yellow-500"
        >
            <Star/>
        </div>
    ))
    }
  </div>
)
};

export default RatingStar;
