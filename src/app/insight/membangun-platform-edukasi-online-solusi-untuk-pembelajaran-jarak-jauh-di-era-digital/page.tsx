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
              Membangun Platform Edukasi Online: Solusi untuk Pembelajaran Jarak
              Jauh di Era Digital
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
                <strong>oqbsoftware.com - </strong>Di era digital, teknologi
                telah menjadi elemen penting dalam hampir semua aspek kehidupan,
                termasuk pendidikan. Dengan meningkatnya kebutuhan pembelajaran
                jarak jauh, platform edukasi online menjadi solusi utama untuk
                mengatasi tantangan aksesibilitas, fleksibilitas, dan efisiensi
                pembelajaran.
              </p>
              <p>
                <br />
              </p>
              <p>
                Namun, bagaimana menciptakan platform yang tidak hanya memenuhi
                kebutuhan pendidikan umum, tetapi juga mendukung program khusus
                seperti kesehatan sekolah, pengelolaan nilai akademik, atau
                kebutuhan siswa dengan jadwal yang padat? Jawaban atas tantangan
                ini dapat kita lihat dari keberhasilan tiga aplikasi inovatif di
                bidang pendidikan: <strong>e-Rapor MDTA</strong>,{" "}
                <strong>KesSekolah</strong>, dan platform{" "}
                <strong>M-Learning untuk siswa atlet</strong>.
              </p>
              <p>
                <br />
              </p>
              <p>
                Ketiga aplikasi ini menunjukkan bagaimana teknologi dapat
                diterapkan untuk memenuhi kebutuhan spesifik pengguna. Artikel
                ini akan mengeksplorasi apa yang dapat kita pelajari dari
                pengembangan dan implementasi ketiga platform tersebut untuk
                membangun solusi pendidikan online yang lebih inklusif.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Tiga Studi Kasus: Mengapa Penting dan Apa yang Bisa
                  Dipelajari?
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  1. e-Rapor MDTA: Efisiensi dalam Pengelolaan Akademik
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Konteks:</strong>
              </p>
              <p>
                e-Rapor MDTA adalah aplikasi berbasis Laravel yang dirancang
                untuk SDIT Irsyadul Ibad 2 Pandeglang. Tujuannya adalah
                menggantikan sistem manual berbasis Microsoft Excel dalam
                mengelola nilai siswa.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Manfaat Utama:</strong>
              </p>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Automasi Penilaian:</strong> Sistem mendukung
                  penilaian deskriptif dan numerik, mengurangi kesalahan manual.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Real-Time Monitoring:</strong> Guru dan wali kelas
                  dapat memantau perkembangan siswa secara langsung.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Keamanan Data:</strong> Dengan enkripsi bawaan
                  Laravel, data siswa tersimpan dengan aman.
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <strong>Relevansi:</strong>
              </p>
              <p>
                {" "}
                Platform ini menunjukkan bagaimana teknologi dapat meningkatkan
                efisiensi pengelolaan akademik sekaligus memastikan data
                tersimpan secara aman dan terstruktur.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <p>
                <strong>
                  2. KesSekolah: Mendukung Program Kesehatan Siswa
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Konteks:</strong>
              </p>
              <p>
                KesSekolah adalah aplikasi yang dirancang untuk mendukung Unit
                Kesehatan Sekolah (UKS) di 29 SMP Negeri di Serang. Aplikasi ini
                memudahkan pencatatan data kesehatan siswa dan pelaporan program
                UKS.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Manfaat Utama:</strong>
              </p>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Integrasi Data Kesehatan:</strong> Memungkinkan
                  pencatatan data kesehatan siswa secara real-time.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Evaluasi Program:</strong> Memberikan laporan yang
                  dapat digunakan untuk mengukur keberhasilan program kesehatan.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Penerimaan Tinggi:</strong> Dengan skor UAT (User
                  Acceptance Testing) rata-rata di atas 90%, aplikasi ini
                  mendapat respons positif dari guru dan tenaga kesehatan.
                </li>
              </ol>
              <p>
                <strong>Relevansi:</strong>
              </p>
              <p>
                {" "}
                KesSekolah menunjukkan bagaimana platform edukasi dapat
                diperluas untuk mendukung kebutuhan non-akademik, seperti
                kesehatan siswa, yang sering kali terabaikan.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <p>
                <strong>
                  3. M-Learning untuk Siswa Atlet: Pembelajaran yang Fleksibel
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Konteks:</strong>
              </p>
              <p>
                Siswa atlet di SMA Negeri 3 Kota Serang sering menghadapi
                tantangan karena jadwal latihan yang padat. Sebanyak{" "}
                <strong>57% siswa kesulitan menghadiri kelas reguler</strong>,
                sehingga membutuhkan sistem pembelajaran fleksibel.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Fitur Utama:</strong>
              </p>
              <ol>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Fleksibilitas Waktu:</strong> Aplikasi memungkinkan
                  siswa mengakses materi pelajaran kapan saja.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Diskusi Virtual:</strong> Fitur ini membantu siswa
                  tetap terhubung dengan guru dan teman meskipun tidak hadir di
                  kelas.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Evaluasi Online:</strong> Kuis, tugas, dan penilaian
                  dapat dilakukan secara digital.
                </li>
                <li data-list="bullet">
                  <span className="ql-ui" contentEditable="false"></span>
                  <strong>Kepraktisan Tinggi:</strong> Dalam uji kepuasan, fitur
                  aplikasi dinilai memiliki tingkat kepraktisan diatas{" "}
                  <strong>85%</strong>, menekankan kemudahan penggunaannya.
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <strong>Manfaat:</strong>
              </p>
              <p>
                M-Learning menawarkan solusi untuk keterbatasan waktu dan
                tempat, memastikan siswa dengan kebutuhan khusus tetap dapat
                belajar dengan optimal.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">
                  Fitur Utama dalam Membangun Platform Edukasi Online
                </strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>1. Aksesibilitas dan User-Friendly Design</strong>
              </p>
              <p>
                Platform harus mudah digunakan oleh semua kelompok pengguna,
                mulai dari siswa hingga guru dan orang tua. Sebagai contoh,
                e-Rapor MDTA memanfaatkan desain intuitif berbasis Laravel untuk
                memastikan pengguna dapat dengan cepat mengakses fitur-fitur
                penting.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>2. Automasi Data dan Pelaporan</strong>
              </p>
              <p>
                Seperti pada KesSekolah dan e-Rapor MDTA, sistem yang otomatis
                dapat mengurangi beban administrasi guru, memberikan lebih
                banyak waktu untuk fokus pada pengajaran.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>3. Interaktivitas dan Kolaborasi</strong>
              </p>
              <p>
                Diskusi virtual dan pengumpulan tugas online, seperti yang
                diterapkan pada platform M-Learning siswa atlet, memungkinkan
                pengalaman belajar yang lebih dinamis dan kolaboratif.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>4. Keamanan dan Skalabilitas</strong>
              </p>
              <p>
                Data pendidikan dan kesehatan adalah informasi sensitif. Dengan
                teknologi seperti enkripsi pada Laravel, platform dapat menjaga
                kerahasiaan data. Selain itu, sistem berbasis cloud seperti yang
                diadopsi KesSekolah memastikan aplikasi dapat menangani jumlah
                pengguna yang terus bertambah.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Tantangan dan Solusi</strong>
              </h2>
              <p>
                <br />
              </p>
              <p>
                <strong>1. Infrastruktur Digital yang Tidak Merata</strong>
              </p>
              <p>
                Di beberapa daerah, keterbatasan akses internet menjadi kendala
                utama. Solusi seperti aplikasi ringan dan opsi akses offline
                harus dipertimbangkan dalam desain platform.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>2. Penerimaan dan Adopsi Teknologi</strong>
              </p>
              <p>
                Tidak semua pengguna familiar dengan teknologi digital.
                Pelatihan awal dan panduan penggunaan sederhana dapat membantu
                meningkatkan adopsi.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>3. Keberlanjutan Sistem</strong>
              </p>
              <p>
                Dengan volume data yang terus bertambah, sistem harus dirancang
                agar dapat diperbarui dan diskalakan sesuai kebutuhan di masa
                depan.
              </p>
              <p className="ql-align-center">
                <br />
              </p>
              <h2>
                <strong className="ql-size-large">Kesimpulan</strong>
              </h2>
              <p>
                Dari <strong>e-Rapor MDTA</strong>, <strong>KesSekolah</strong>,
                hingga <strong>platform M-Learning</strong> untuk siswa atlet,
                kita belajar bahwa membangun platform edukasi online yang
                efektif membutuhkan pemahaman mendalam terhadap kebutuhan
                pengguna. Platform yang sukses harus fleksibel, aman, dan
                mendukung kolaborasi—baik untuk kebutuhan akademik maupun
                non-akademik.
              </p>
              <p>
                Di era digital ini, solusi pendidikan online lebih dari sekadar
                alternatif; mereka adalah kebutuhan utama. Dengan strategi dan
                teknologi yang tepat, kita dapat menciptakan platform yang tidak
                hanya menyelesaikan tantangan pendidikan, tetapi juga membuka
                peluang baru untuk pembelajaran yang lebih inklusif.
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  Oqb siap membantu Anda mengembangkan platform edukasi yang
                  mendukung pembelajaran jarak jauh untuk semua.
                </strong>{" "}
                Apakah Anda siap membangun solusi yang mengubah cara kita
                belajar di masa depan? Let’s build it together!
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
