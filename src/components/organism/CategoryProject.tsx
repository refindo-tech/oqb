import ProjectPercentage from "@/components/atom/ProjectPrercentage"
const CategoryProject = () => {
    return (
        <article className=" w-full flex  justify-center py-10">
            <div className="w-[80%] h-full rounded-lg bg-biru p-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 lg:gap-y-10">
                <ProjectPercentage title={"Web Design"} percent={90}/>
                <ProjectPercentage title={"Web Development"} percent={90}/>
                <ProjectPercentage title={"Mobile App Design"} percent={70}/>
                <ProjectPercentage title={"Mobile App Development"} percent={85}/>
                <ProjectPercentage title={"Multiplatform Design"} percent={80}/>
                <ProjectPercentage title={"Multiplatform Development"} percent={80}/>
                <ProjectPercentage title={"System integration data application"} percent={70}/>
                <ProjectPercentage title={"Software Infrastructure"} percent={60}/>
            </div>
        </article>
    )
}
export default CategoryProject