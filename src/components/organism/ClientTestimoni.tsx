import CardTestimoni from "@/components/molecules/CardTestimoni";
const ClientTestimoni = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 gap-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-10 w-[80%]">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-4xl font-poppins">
            Our Clients Said
          </h2>
          <h3 className="text-gray-500">
            {" "}
            Every project is more than just a task; it’s a partnership built on
            trust, collaboration, and shared goals. Their testimonials speak to
            the quality of our work and the strength of our relationships.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 min-w-[80%] lg:px-10">
          <CardTestimoni />
          <CardTestimoni />
          <CardTestimoni />
          <CardTestimoni />
        </div>
      </div>
    </div>
  );
};
export default ClientTestimoni;
