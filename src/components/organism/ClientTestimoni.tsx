import CardTestimoni from "@/components/molecules/CardTestimoni";
import React from "react";
const ClientTestimoni:React.FC<{title:string}> = ({title}) => {
  return (
    <div className="w-full flex justify-center items-center pt-20 gap-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-10 w-[80%]">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-4xl font-poppins text-greenWhite">
            {title}
          </h2>
          <h3 className="text-blueWhite font-poppins text-lg">
            {" "}
            Every project is more than just a task; it’s a partnership built on
            trust, collaboration, and shared goals. Their testimonials speak to
            the quality of our work and the strength of our relationships.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 min-w-[80%] lg:px-10">
          <CardTestimoni
            text="Our new web application allows students to keep up with their studies even when they can’t be in class. The blended learning approach really keeps students engaged, and teachers love how easy it is to share materials and assignments"
            name="Mulki Siti Hajar Rezaini, M.Pd."
            position="Teacher at Senior High School 3 in Serang City"
            rating={5}
          />
          <CardTestimoni
            text="The application developed precisely meets the partner’s needs. The project was swiftly completed. Good job!"
            name="Anggoro Suryo Pramudyo, M.Kom."
            position="Research Secretary at Kedaireka"
            rating={5}
          />
          <CardTestimoni
            text="I hope we can work together again on future projects"
            name="Danik Mulya Sari, S.Pd.Si."
            position="Principal of Irsyadul Ibad 2 Pandeglang"
            rating={5}
          />
          <CardTestimoni
            text="The performance is great! The results are just what I needed"
            name="Dicky Lumena"
            position="Owner of Netplus Connection"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};
export default ClientTestimoni;
