import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
// import BlogContent from "@/components/organism/BlogContent";
import LastArticle from "@/components/molecules/LastArticle";
import WhatsappButton from "@/components/molecules/WhatsappButton";
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
            Apa Itu &apos;DevSecOps&apos; dan Mengapa Penting dalam Pengembangan Software
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
                <strong>oqbsoftware.com - </strong>Bayangkan jika keamanan
                aplikasi tidak lagi menjadi penghalang, tetapi justru menjadi
                bagian tak terpisahkan dari setiap langkah pengembangannya.
                Inilah yang ditawarkan DevSecOps—pendekatan yang menyatukan
                pengembangan, keamanan, dan operasi. Di tengah dunia digital
                yang penuh tantangan, DevSecOps menjadi solusi untuk menciptakan
                aplikasi yang cepat sekaligus aman. Penasaran bagaimana caranya?
                Yuk, kita kupas tuntas!
              </p>
              <p>
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Apa Itu DevSecOps?</strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                DevSecOps adalah praktik yang menempatkan keamanan sebagai
                prioritas sejak tahap perencanaan hingga pemeliharaan aplikasi.
                Tujuan utamanya adalah menciptakan aplikasi yang lebih aman
                tanpa mengorbankan kecepatan atau efisiensi pengembangan.
              </p>
              <p>
                <br />
              </p>
              <p>
                DevSecOps berbeda dari metode tradisional yang sering
                memperlakukan keamanan sebagai langkah terakhir. Dengan
                pendekatan ini, semua tim—pengembang, keamanan, dan
                operasi—bekerja bersama untuk memastikan setiap perubahan kode
                diuji keamanannya sebelum diimplementasikan.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Ciri utama DevSecOps:</strong>
              </p>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Integrasi Keamanan Otomatis</strong>: Menggunakan alat
                  yang mendeteksi dan memperbaiki kerentanan secara real-time.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Kolaborasi Tim</strong>: Menghilangkan silo antara
                  pengembang, keamanan, dan operasi.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Proses Berkelanjutan</strong>: Keamanan menjadi bagian
                  dari alur kerja CI/CD, memastikan kecepatan tanpa kompromi.
                </li>
              </ol>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Pipeline DevSecOps: Bagaimana Prosesnya Berjalan?
                </strong>
              </h2>
              <p>
                Pipeline DevSecOps adalah alur kerja otomatis yang
                mengintegrasikan keamanan ke dalam setiap tahap pengembangan.
                Berikut adalah tahapan utama dalam pipeline ini:
              </p>
              <p>
                <br />
              </p>
              <p className="ql-indent-1">
                <strong>1. Perencanaan (Plan)</strong>
              </p>
              <p className="ql-indent-1">
                Tahap awal ini melibatkan semua tim untuk memahami kebutuhan
                aplikasi dan potensi risiko keamanan. Strategi keamanan
                dirancang sejak awal untuk menghindari masalah di kemudian hari.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p className="ql-indent-1">
                <strong>2. Pengkodean (Code)</strong>
              </p>
              <p className="ql-indent-1">
                Pengembang menulis kode menggunakan prinsip{" "}
                <em>secure coding</em>, didukung oleh alat analisis kode seperti{" "}
                <em>SonarQube</em> untuk mendeteksi kerentanan sebelum proses
                berlanjut.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p className="ql-indent-1">
                <strong>3. Pembuatan (Build)</strong>
              </p>
              <p className="ql-indent-1">
                Kode diubah menjadi artefak yang siap diuji. Pada tahap ini,
                pustaka pihak ketiga juga dipindai untuk memastikan tidak ada
                kerentanan menggunakan alat seperti{" "}
                <em>OWASP Dependency-Check</em>.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p className="ql-indent-1">
                <strong>4. Pengujian (Test)</strong>
              </p>
              <p className="ql-indent-1">
                Tahap ini melibatkan pengujian keamanan dinamis menggunakan alat
                seperti <em>OWASP ZAP</em> untuk memastikan aplikasi bebas dari
                celah keamanan runtime.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p className="ql-indent-1">
                <strong>5. Rilis dan Penerapan (Release &amp; Deploy)</strong>
              </p>
              <p className="ql-indent-1">
                Aplikasi yang telah diuji dirilis ke lingkungan produksi
                menggunakan alat CI/CD seperti <em>Jenkins</em> atau{" "}
                <em>GitLab</em>. Pengaturan keamanan tambahan dilakukan pada
                tahap ini, termasuk kontrol akses dan konfigurasi infrastruktur.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <p className="ql-indent-1">
                <strong>
                  6. Operasi dan Pemantauan (Operate &amp; Monitor)
                </strong>
              </p>
              <p className="ql-indent-1">
                Setelah aplikasi berjalan, alat seperti <em>Splunk</em>{" "}
                digunakan untuk memantau aktivitas, mendeteksi ancaman baru, dan
                memberikan data umpan balik kepada tim pengembang.
              </p>
              <p className="ql-indent-1">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Mengapa DevSecOps Penting?
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>Kecepatan dan Efisiensi</strong>
              </p>
              <p>
                DevSecOps memungkinkan pengujian keamanan berlangsung bersamaan
                dengan pengembangan, sehingga aplikasi dapat dirilis lebih cepat
                tanpa mengorbankan kualitas.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Mitigasi Risiko Lebih Dini</strong>
              </p>
              <p>
                Dengan mendeteksi kerentanan di awal siklus pengembangan,
                perusahaan dapat menghindari biaya perbaikan yang tinggi dan
                risiko reputasi yang timbul dari pelanggaran data.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Kolaborasi yang Lebih Baik</strong>
              </p>
              <p>
                Pendekatan ini memupuk kerja sama antara tim pengembang,
                keamanan, dan operasi, menciptakan budaya yang fokus pada
                keamanan.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Peningkatan Kepercayaan Konsumen</strong>
              </p>
              <p>
                Aplikasi yang aman adalah dasar dari pengalaman pengguna yang
                positif. Dengan DevSecOps, perusahaan dapat meningkatkan
                kepercayaan pelanggan terhadap produk mereka.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Tantangan dalam Implementasi DevSecOps
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>Resistensi Perubahan</strong>
              </p>
              <p>
                Tim yang terbiasa dengan metode tradisional sering kali
                menghadapi kesulitan beradaptasi dengan pendekatan baru.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Kebutuhan Teknologi dan Alat</strong>
              </p>
              <p>
                DevSecOps memerlukan investasi dalam alat otomatisasi dan
                infrastruktur yang memadai, seperti <em>Jenkins</em>,{" "}
                <em>HashiCorp Vault</em>, dan <em>OWASP ZAP</em>.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Kesenjangan Keahlian</strong>
              </p>
              <p>
                Tim pengembang mungkin tidak cukup paham tentang keamanan,
                sementara tim keamanan mungkin kurang memahami proses
                pengembangan. Pelatihan lintas tim menjadi kunci untuk mengatasi
                tantangan ini.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Kesimpulan: Masa Depan DevSecOps
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                DevSecOps bukan hanya sekadar tren, tetapi sebuah evolusi dalam
                pengembangan software. Dengan mengintegrasikan keamanan sejak
                awal, otomatisasi yang canggih, dan kolaborasi yang solid,
                pendekatan ini membantu perusahaan menciptakan aplikasi yang
                lebih cepat dan aman.
              </p>
              <p>
                <br />
              </p>
              <p>
                Namun, perubahan ini membutuhkan adaptasi budaya kerja dan
                teknologi. <strong>oqb siap mendampingi Anda</strong> menuju
                implementasi DevSecOps yang sukses. Jadi, apakah Anda siap
                menjadikan keamanan sebagai kekuatan utama dalam pengembangan
                software? Bersama <strong>oqb</strong>, saatnya melangkah lebih
                percaya diri di era digital ini!
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
