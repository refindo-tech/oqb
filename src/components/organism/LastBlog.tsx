import ContainerCard from "@/components/molecules/ContainerCard";
const LastBlog = () => {
  return (
    <article className="flex flex-col items-center gap-10 lg:gap-20 py-10">
      <div className="flex flex-row justify-between w-[80%] gap-10 flex-wrap">
        <div className="flex flex-col gap-3 ">
          <h2 className="font-semibold text-xl text-purple">Insights</h2>
          <h3 className="font-semibold text-4xl text-greenWhite">Read Our Latest Articles</h3>
        </div>
      </div>
      <ContainerCard />
    </article>
  );
};
export default LastBlog;
