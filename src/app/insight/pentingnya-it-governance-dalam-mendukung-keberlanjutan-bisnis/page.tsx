import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
// import BlogContent from "@/components/organism/BlogContent";
import LastArticle from "@/components/molecules/LastArticle";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import "react-quill-new/dist/quill.snow.css";

const ItGovernancePage = () => {
  // const router = useRouter()
  return (
    <>
      <Navbar />
      <article className="w-full min-h-screen flex justify-center py-20">
        <div className="w-[90%] flex gap-5 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-[70%] rounded-xl bg-[#00224D] text-white p-10">
            <h1 className="text-3xl lg:text-5xl font-bold pb-5 border-b-2 border-greenWhite">
              Pentingnya IT Governance dalam Mendukung Keberlanjutan Bisnis
            </h1>
            {/* <div className="font-serif mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi recusandae saepe molestias est fugit voluptatem, blanditiis ad totam atque aut. Blanditiis perspiciatis ipsa odio, molestiae cumque quam delectus iste!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit, voluptatibus sequi error, at quia ratione obcaecati, tempora corrupti tempore reiciendis consectetur eius pariatur suscipit aperiam aspernatur deserunt earum blanditiis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae libero aperiam repellat iure non numquam doloribus cumque alias eius, debitis possimus accusamus facilis eveniet molestiae expedita blanditiis quaerat optio quae.</p>
                    </div> */}
            <div
              id="quill-content"
              className=" mt-5 ql-editor font-serif"
              style={{
                wordWrap: "break-word",
                overflow: "hidden",
                maxWidth: "100%",
              }}
            >
              <p>
                <strong>oqbsoftware.com - </strong>Di tengah persaingan global
                yang semakin ketat, teknologi informasi (IT) telah menjadi pilar
                utama bagi keberhasilan bisnis. Namun, tanpa tata kelola yang
                tepat, potensi besar teknologi ini bisa terhambat oleh risiko,
                inefisiensi, atau bahkan kegagalan operasional. Di sinilah IT
                governance berperan—sebuah solusi strategis untuk memastikan IT
                digunakan secara optimal demi mendukung tujuan bisnis, mengelola
                risiko, dan menciptakan keberlanjutan jangka panjang. Bersama{" "}
                <strong>oqb</strong>, mari kita pelajari lebih jauh bagaimana
                tata kelola IT dapat menjadi fondasi penting bagi bisnis Anda!
              </p>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Apa Itu IT Governance dan Mengapa Penting?
                </strong>
              </h2>
              <p>
                IT governance adalah kerangka kerja yang mencakup kebijakan,
                proses, dan struktur organisasi yang memastikan IT memberikan
                nilai maksimal sekaligus memitigasi risiko yang mungkin muncul.
                Tata kelola ini tidak hanya relevan bagi perusahaan besar,
                tetapi juga untuk organisasi kecil yang ingin tetap kompetitif.
              </p>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Mengapa IT Governance Penting?
                </strong>
              </h2>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Keberlanjutan Bisnis:</strong> Membantu organisasi
                  menjaga stabilitas operasional dalam menghadapi perubahan
                  pasar.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Efisiensi Sumber Daya:</strong> Mengoptimalkan alokasi
                  sumber daya IT untuk meminimalkan pemborosan.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Mitigasi Risiko:</strong> Mengurangi ancaman dari
                  kegagalan teknologi, serangan siber, atau ketidakpatuhan
                  terhadap regulasi.
                </li>
              </ol>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Lima Prinsip IT Governance
                </strong>
              </h2>
              <p>
                IT governance dibangun berdasarkan lima prinsip utama yang
                menjadi fondasi tata kelola yang efektif:
              </p>
              <p>
                <br />
              </p>
              <p>
                {" "}
                <strong>1. Value Delivery</strong>
              </p>
              <p className="ql-indent-1">
                Fokus utama tata kelola IT adalah memastikan bahwa setiap
                investasi teknologi memberikan nilai nyata bagi organisasi.
                Nilai ini bisa berupa penghematan biaya, peningkatan efisiensi,
                atau penciptaan peluang bisnis baru.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                <strong>2. Strategic Alignment</strong>
              </p>
              <p className="ql-indent-1">
                Teknologi informasi harus selaras dengan tujuan strategis
                organisasi. Tata kelola IT membantu menyelaraskan strategi IT
                dengan visi dan misi perusahaan, memastikan bahwa teknologi
                mendukung prioritas bisnis.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                <strong>3. Performance Management</strong>
              </p>
              <p className="ql-indent-1">
                Evaluasi kinerja adalah elemen penting dari IT governance.
                Organisasi harus menetapkan metrik yang jelas untuk mengukur
                keberhasilan implementasi teknologi, seperti efisiensi
                operasional, kepuasan pelanggan, atau waktu yang dihemat.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                <strong>4. Resource Management</strong>
              </p>
              <p className="ql-indent-1">
                Prinsip ini memastikan bahwa sumber daya IT, baik manusia,
                perangkat keras, maupun perangkat lunak, digunakan secara
                efisien. Dengan pengelolaan yang tepat, organisasi dapat
                menghindari duplikasi dan memaksimalkan produktivitas.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                <strong>5. Risk Management</strong>
              </p>
              <p className="ql-indent-1">
                Manajemen risiko adalah inti dari tata kelola IT. Organisasi
                harus mampu mengidentifikasi, mengevaluasi, dan memitigasi
                risiko yang terkait dengan teknologi, seperti ancaman keamanan
                atau kegagalan sistem, tanpa mengorbankan inovasi.
              </p>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Bagaimana IT Governance Mendukung Keberlanjutan Bisnis?
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>1. Memberikan Nilai Tambah bagi Organisasi</strong>
              </p>
              <p>
                Dengan fokus pada <em>value delivery</em>, organisasi dapat
                memastikan bahwa teknologi memberikan kontribusi langsung
                terhadap keuntungan atau pertumbuhan. Proyek IT yang dikelola
                dengan baik dapat mempercepat transformasi digital dan
                memperluas jangkauan pasar.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>2. Meningkatkan Efisiensi Operasional</strong>
              </p>
              <p>
                Melalui <em>resource management</em>, tata kelola IT membantu
                organisasi menggunakan sumber daya secara optimal, mengurangi
                pemborosan, dan meningkatkan produktivitas.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>3. Mengelola Risiko dengan Lebih Baik</strong>
              </p>
              <p>
                <em>Risk management</em> memastikan bahwa organisasi memiliki
                langkah mitigasi yang kuat terhadap ancaman seperti serangan
                siber atau pelanggaran data, menjaga reputasi dan kepercayaan
                pelanggan.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>4. Mendukung Pengambilan Keputusan Strategis</strong>
              </p>
              <p>
                Dengan <em>strategic alignment</em>, perusahaan dapat memastikan
                bahwa investasi teknologi selaras dengan tujuan bisnis, sehingga
                menghasilkan keputusan yang lebih terarah dan efektif.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>5. Monitoring dan Evaluasi yang Berkelanjutan</strong>
              </p>
              <p>
                {" "}
                Melalui <em>performance management</em>, organisasi dapat secara
                rutin mengevaluasi keberhasilan strategi IT dan melakukan
                penyesuaian jika diperlukan, menjaga relevansi dan efektivitas
                teknologi.
              </p>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kesimpulan</strong>
              </h2>
              <p>
                IT governance adalah kunci untuk menciptakan keberlanjutan
                bisnis di era digital. Dengan menerapkan lima prinsip utama—
                <strong>
                  value delivery, strategic alignment, performance management,
                  resource management
                </strong>
                , dan <strong>risk management</strong>—organisasi dapat
                mengelola teknologi secara lebih efisien, memitigasi risiko, dan
                memaksimalkan hasil.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Oqb percaya</strong>, tata kelola IT yang baik adalah
                investasi strategis untuk masa depan bisnis Anda. Jadi, apakah
                perusahaan Anda sudah siap menerapkan IT governance secara
                optimal? Jika belum, sekarang saatnya menyusun kerangka kerja
                yang relevan untuk mendukung pertumbuhan dan daya saing bisnis
                Anda!.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[30%]">
            <LastArticle />
          </div>
        </div>
      </article>
      <WhatsappButton />
      <Footer />
    </>
  );
};
export default ItGovernancePage;
