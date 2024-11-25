import ProjectPercentage from "@/components/atom/ProjectPrercentage"
const CategoryProject = () => {
    return (
        <article className=" w-full flex  justify-center py-10">
            <div className="w-[80%] h-full rounded-lg border-2 border-blueWhite p-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
                <ProjectPercentage title={"Web Design"} percent={100}/>
                <ProjectPercentage title={"Web Development"} percent={93}/>
                <ProjectPercentage title={"Mobile App Design"} percent={87}/>
                <ProjectPercentage title={"Mobile App Development"} percent={85}/>
                <ProjectPercentage title={"Multiplatform Design"} percent={84}/>
                <ProjectPercentage title={"Multiplatform Development"} percent={80}/>
                <ProjectPercentage title={"System integration data application"} percent={88}/>
                <ProjectPercentage title={"Software Infrastructure"} percent={76}/>
            </div>
        </article>
    )
}
export default CategoryProject