import ButtonComponent from "@/components/atom/Button"
const ScrollToTop = () => {
    return(
        <div className="bg-biru rounded-lg fixed right-4 bottom-4">
            <ButtonComponent propsClass="bg-transparent text-white" content={"toTop"}/>
        </div>
    )
}
export default ScrollToTop