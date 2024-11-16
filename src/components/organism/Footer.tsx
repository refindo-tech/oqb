import Link from "next/link";
const Footer = () => {
  return (
    <footer className="min-h-[60vh] w-full bg-[#202942] flex flex-col justify-between items-center text-white py-20 gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-10">
        <div id="detail-perusahaan-footer" className="flex flex-col gap-5">
          <div className="bg-slate-100 rounded-lg h-16 w-full text-black">
            LOGO
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-lg">PT.OQB Software House</h4>
            <p className="font-poppins text-white/70">
              Jalan Villa Tangerang Elok, Kec. Pasar Kemis, Kab. Tangerang,
              Banten, 15560
              <br />
              Whatsapp: 08123456789
              <br />
              Email: oqbsoftwarehouse@gmail.com
            </p>
          </div>
        </div>
        <div id="layanan-footer" className="flex flex-col gap-5 text-white">
          <h5 className="text-white font-semibold text-4xl">Layanan</h5>
          <div className="flex flex-col gap-2 text-white/70">
            <Link href={"/"}>Website Design & Development</Link>
            <Link href={"/"}>Mobile App Design & Development</Link>
            <Link href={"/"}>Multiplatform App Design & Development</Link>
            <Link href={"/"}>System Integration</Link>
          </div>
        </div>
        <div id="contact-footer" className="flex flex-col gap-5 text-white">
          <h5 className="text-white font-semibold text-4xl">Blog</h5>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold">Technology</h6>
            <p className="text-white/70">
              Tutorial pembuatan website dengan menggunakan HTML dan CSS
            </p>
          </div>
        </div>
      </div>
      <div>Copyright PT. OQB Software House</div>
    </footer>
  );
};
export default Footer;
