import WhatsappIcon from "@/components/atom/icons/WhatsappIcon";
// import ButtonComponent from "@/components/atom/Button"
import Link from "next/link";
const WhatsappButton = () => {
  return (
    <Link href={"https://wa.me/6287853850821"} className="rounded-full fixed right-4 bottom-4">
      {/* <ButtonComponent 
                propsClass="bg-transparent text-blueWhite"
                content={
                }
            /> */}
      <div className="h-12 w-12 text-blueWhite hover:text-greenWhite">
        <WhatsappIcon />
      </div>
    </Link>
  );
};
export default WhatsappButton;
