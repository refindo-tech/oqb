import CardTestimoni from "@/components/molecules/CardTestimoni";
const ClientTestimoni = () => {
  return (
    <div className="w-full flex flex-col items-center py-20 gap-10">
      <h2 className="font-semibold text-4xl font-poppins">Our Clients Said</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 min-w-[80%] px-10 lg:px-20">
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
      </div>
    </div>
  );
};
export default ClientTestimoni;
