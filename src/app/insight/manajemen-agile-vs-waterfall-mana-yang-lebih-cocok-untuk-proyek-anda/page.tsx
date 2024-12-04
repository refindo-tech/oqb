import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
// import BlogContent from "@/components/organism/BlogContent";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import LastArticle from "@/components/molecules/LastArticle";
import "react-quill-new/dist/quill.snow.css";

const GenerativeAIPage = () => {
  // const router = useRouter()
  return (
    <>
      <Navbar />
      <article className="w-full min-h-screen flex justify-center py-20">
        <div className="w-[90%] flex gap-5 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-[70%] rounded-xl bg-[#00224D] text-white p-10">
            <h1 className="text-3xl lg:text-5xl font-bold pb-5 border-b-2 border-greenWhite">
              Manajemen Agile vs Waterfall: Mana yang Lebih Cocok untuk Proyek
              Anda
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
                <strong>oqbsoftware.com - </strong>Dalam dunia pengelolaan
                proyek teknologi, memilih metode yang tepat sangat menentukan
                keberhasilan implementasi. Dua pendekatan yang paling sering
                dibahas adalah Waterfall dan Agile, masing-masing dengan
                kelebihan dan pendekatan yang berbeda. Waterfall, dengan
                struktur linier dan terencana dengan matang, telah menjadi
                pilihan klasik untuk proyek dengan persyaratan yang jelas.
                Sementara itu, Agile memberikan fleksibilitas untuk beradaptasi
                dengan perubahan sepanjang proses. Jadi, metode mana yang lebih
                sesuai untuk kebutuhan proyek Anda? Yuk, temukan jawabannya
                dalam artikel ini!
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Apa Itu Waterfall dan Bagaimana Langkah-Langkahnya?
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>Waterfall: Metode Linier yang Terstruktur</strong>
              </p>
              <p>
                {" "}
                Waterfall adalah salah satu pendekatan tertua dalam manajemen
                proyek, terutama untuk pengembangan perangkat lunak. Metode ini
                mengikuti alur kerja linier, di mana setiap tahap harus
                diselesaikan sebelum melanjutkan ke tahap berikutnya. Karena
                sifatnya yang kaku, Waterfall sering digunakan dalam proyek yang
                memiliki kebutuhan tetap dan tidak memerlukan banyak perubahan.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Langkah-Langkah dalam Proses Waterfall:</strong>
              </p>
              <p>
                <br />
              </p>
              <ol>
                <li data-list="ordered">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Requirements Analysis and Description:</strong>
                </li>
              </ol>
              <p className="ql-indent-1">
                Tahap pertama adalah mengumpulkan dan menganalisis semua
                kebutuhan proyek. Pada tahap ini, setiap detail harus dicatat
                dan didokumentasikan secara jelas. Tujuannya adalah untuk
                memastikan bahwa semua kebutuhan klien dipahami sebelum
                melangkah ke tahap desain.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                2<strong>. Design:</strong>
              </p>
              <p className="ql-indent-1">
                Setelah kebutuhan ditentukan, desain sistem dibuat. Tahap ini
                mencakup desain arsitektur, diagram alur data, dan spesifikasi
                teknis lainnya. Hasil dari tahap ini adalah panduan untuk proses
                implementasi.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                3<strong>. Implementation:</strong>
              </p>
              <p className="ql-indent-1">
                Pada tahap ini, tim mulai mengembangkan perangkat lunak
                berdasarkan desain yang telah disiapkan. Pengkodean dilakukan
                sesuai spesifikasi, dan biasanya tidak ada ruang untuk perubahan
                besar setelah tahap ini dimulai.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                4<strong>. Integration and Testing:</strong>
              </p>
              <p className="ql-indent-1">
                Setelah pengembangan selesai, semua komponen diuji untuk
                memastikan bahwa sistem bekerja sesuai rencana. Pengujian
                meliputi pengujian fungsionalitas, kompatibilitas, dan kinerja.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                5<strong>. Operation:</strong>
              </p>
              <p className="ql-indent-1">
                Sistem kemudian diluncurkan ke lingkungan produksi dan mulai
                digunakan oleh pengguna akhir.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p>
                {" "}
                6<strong>. Maintenance:</strong>
              </p>
              <p className="ql-indent-1">
                Tahap ini adalah pemeliharaan sistem setelah peluncuran. Jika
                ada masalah atau kebutuhan tambahan, pembaruan akan dilakukan,
                meskipun sifat Waterfall membuat perubahan besar sulit
                dilakukan.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kelebihan Waterfall:</strong>
              </h2>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Struktur yang jelas dan mudah dipahami.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Cocok
                  untuk proyek dengan kebutuhan yang tetap.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Dokumentasi lengkap membantu memahami setiap tahap proses.
                </li>
              </ol>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kekurangan Waterfall:</strong>
              </h2>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Kurang
                  fleksibel terhadap perubahan.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Membutuhkan banyak waktu sebelum hasil dapat terlihat.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Tidak
                  cocok untuk proyek yang kompleks dan dinamis.
                </li>
              </ol>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Apa Itu Agile dan Apa Prinsip Utamanya?
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>Agile: Metode Iteratif yang Adaptif</strong>
              </p>
              <p>
                Agile adalah pendekatan modern yang bertujuan untuk mengatasi
                keterbatasan metode tradisional seperti Waterfall. Agile
                memberikan kebebasan kepada tim untuk bekerja secara iteratif,
                di mana pengembangan dilakukan dalam siklus pendek yang disebut{" "}
                <strong>sprint</strong>. Dalam setiap sprint, tim menghasilkan
                produk yang dapat digunakan, memungkinkan evaluasi dan perubahan
                secara berkelanjutan.
              </p>
              <p>
                <br />
              </p>
              <p>
                Pendekatan ini didasarkan pada <strong>Manifesto Agile</strong>,
                yang menekankan nilai-nilai berikut:
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  1. Individuals and Interactions over Processes and Tools:
                </strong>
              </p>
              <p>
                Agile memprioritaskan kolaborasi antar individu, baik di dalam
                tim maupun dengan klien, daripada terlalu mengandalkan proses
                atau alat tertentu.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  2. Working Software over Comprehensive Documentation:
                </strong>
              </p>
              <p>
                Fokus utama Agile adalah menghasilkan perangkat lunak yang
                berfungsi, bukan dokumentasi yang panjang tanpa hasil nyata.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  3. Customer Collaboration over Contract Negotiation:
                </strong>
              </p>
              <p>
                Pelanggan dianggap sebagai bagian integral dari tim, memastikan
                kebutuhan mereka selalu diperhatikan sepanjang proses
                pengembangan.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>4. Responding to Change over Following a Plan:</strong>{" "}
              </p>
              <p>
                Agile dirancang untuk fleksibel terhadap perubahan kebutuhan,
                bahkan jika perubahan tersebut terjadi di tengah-tengah proyek.
              </p>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kelebihan Agile:</strong>
              </h2>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Memberikan fleksibilitas tinggi untuk menghadapi perubahan.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Hasil
                  dapat dilihat lebih cepat karena pengembangan dilakukan secara
                  bertahap.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Mendukung kolaborasi yang erat antara tim dan klien.
                </li>
              </ol>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kekurangan Agile:</strong>
              </h2>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Membutuhkan keterlibatan aktif dari semua pihak, termasuk
                  klien.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Kurang
                  cocok untuk proyek dengan batas waktu ketat dan kebutuhan
                  tetap.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Tidak
                  selalu menghasilkan dokumentasi yang lengkap.
                </li>
              </ol>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Perbandingan Waterfall dan Agile
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <table>
                <tbody>
                  <tr>
                    <td data-row="1" className="ql-align-center">
                      <strong>Aspek</strong>
                    </td>
                    <td data-row="1" className="ql-align-center">
                      <strong>Waterfall</strong>
                    </td>
                    <td data-row="1" className="ql-align-center">
                      <strong>Agile</strong>
                    </td>
                  </tr>
                  <tr>
                    <td data-row="2">
                      <strong>Pendekatan</strong>
                    </td>
                    <td data-row="2">Linier, terstruktur</td>
                    <td data-row="2">Iteratif, fleksibel</td>
                  </tr>
                  <tr>
                    <td data-row="3">
                      <strong>Kebutuhan Awal</strong>
                    </td>
                    <td data-row="3">Tetap dan terdokumentasi sejak awal</td>
                    <td data-row="3">Dapat berubah sesuai kebutuhan</td>
                  </tr>
                  <tr>
                    <td data-row="4">
                      <strong>Hasil Akhir</strong>
                    </td>
                    <td data-row="4">Dihasilkan setelah semua tahap selesai</td>
                    <td data-row="4">
                      Dihasilkan secara bertahap di setiap iterasi
                    </td>
                  </tr>
                  <tr>
                    <td data-row="5">
                      <strong>Fleksibilitas</strong>
                    </td>
                    <td data-row="5">Rendah</td>
                    <td data-row="5">Tinggi</td>
                  </tr>
                  <tr>
                    <td data-row="6">
                      <strong>Keterlibatan Pelanggan</strong>
                    </td>
                    <td data-row="6">Terbatas pada tahap awal dan akhir</td>
                    <td data-row="6">Aktif sepanjang proses</td>
                  </tr>
                  <tr>
                    <td data-row="7">
                      <strong>Cocok untuk Proyek</strong>
                    </td>
                    <td data-row="7">Dengan kebutuhan yang stabil dan jelas</td>
                    <td data-row="7">Dengan kebutuhan yang dinamis</td>
                  </tr>
                </tbody>
              </table>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Kapan Menggunakan Waterfall atau Agile?
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>Pilih Waterfall Jika:</strong>
              </p>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Proyek
                  memiliki kebutuhan yang tetap dan jelas sejak awal.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  Dokumentasi terperinci adalah prioritas utama.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Lingkup
                  proyek tidak memungkinkan perubahan selama pelaksanaan.
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <strong>Pilih Agile Jika:</strong>
              </p>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Proyek
                  memiliki kebutuhan yang mungkin berubah seiring waktu.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Tim
                  Anda memiliki kemampuan untuk berkolaborasi secara aktif.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>Tujuan
                  proyek adalah menghasilkan nilai secara bertahap dan
                  terus-menerus.
                </li>
              </ol>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kesimpulan</strong>
              </h2>
              <p>
                <strong>Waterfall</strong> dan <strong>Agile</strong> adalah dua
                pendekatan manajemen proyek yang memiliki kelebihan dan
                kekurangannya masing-masing. Waterfall menawarkan struktur yang
                lebih kaku dan cocok untuk proyek dengan kebutuhan yang sudah
                jelas sejak awal, sementara Agile memberikan fleksibilitas
                tinggi untuk mengatasi perubahan selama pengembangan.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Oqb percaya</strong>, pemilihan metode yang
                tepat—tergantung pada sifat proyek, tim, dan keterlibatan
                klien—akan memastikan kelancaran dan keberhasilan proyek. Jadi,
                metode mana yang akan Anda pilih untuk proyek Anda? Bagikan
                pengalaman Anda dengan salah satu pendekatan ini, dan mari kita
                wujudkan proyek sukses bersama!
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
export default GenerativeAIPage;
