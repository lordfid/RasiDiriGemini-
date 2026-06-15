import type { QuestionItem } from "../types";

export const CORE_QUESTIONS: QuestionItem[] = [
  {
    id: "core_001",
    kind: "singleChoice",
    domain: "family",
    prompt: "Minggu pagi di rumah. Kau menemukan sebuah kardus tua berisi barang-barang usang di sudut ruang tengah. Salah satu anggota keluarga lewat dan bergumam, 'Buang saja, sudah jadi sampah.' Kau menatap sebuah jam beker rusak di tumpukan paling atas.",
    options: [
      { id: "c001_opt_si_s", text: "Aku mengambil jam itu, mengusap debunya perlahan, lalu menyisihkannya ke meja. 'Ini dulu punya cerita, sayang kalau dibuang begitu saja,' ucapku.", weights: { cognitive: { Si: 3, Fe: 1, Ne: -1 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c001_opt_se_s", text: "Aku berjongkok, membongkar seluruh isi kardus itu di lantai untuk melihat apakah ada barang lain yang masih bisa kupakai atau kuutak-atik sekarang juga.", weights: { cognitive: { Se: 3, Ti: 1, Ni: -1 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c001_opt_ni_n", text: "Aku menatap tumpukan itu sejenak. Aku sudah membayangkan bagaimana sudut ruangan ini akan terlihat jauh lebih lega dan estetis jika kardus ini menyingkir, jadi aku langsung membuangnya.", weights: { cognitive: { Ni: 3, Te: 1, Se: -1 }, mbtiAxis: { N: 2, J: 2, S: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c001_opt_ne_n", text: "Aku memegang jam rusak itu dan tertawa. Aku mulai mengarang cerita spontan kepada orang rumah tentang bagaimana jam ini sebenarnya adalah alat pengendali waktu yang kehabisan baterai.", weights: { cognitive: { Ne: 3, Fi: 1, Si: -1 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_002",
    kind: "multiChoice",
    domain: "work",
    maxSelect: 2,
    prompt: "Meja kerjamu penuh dengan kertas coretan. Di layar monitor, notifikasi grup terus berbunyi—semua orang saling menyalahkan karena data proyek besok hilang. Di seberang meja, satu rekan timmu hanya duduk menunduk diam tanpa suara.",
    options: [
      { id: "c002_opt_te_t", text: "Aku merebut kendali situasi. Aku mengetik di grup: 'Berhenti berdebat. Kita bagi ulang tugas dari nol, kumpulkan bagian masing-masing dalam dua jam.'", weights: { cognitive: { Te: 3, Ni: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c002_opt_fe_f", text: "Aku menaruh pulpen, menepuk bahu rekanku yang diam itu, lalu mengirim pesan ke grup: 'Kita jeda sepuluh menit. Tarik napas dulu, jangan ada yang menyalahkan siapa pun.'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, J: 1, T: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c002_opt_ti_t", text: "Aku membiarkan grup itu berisik. Aku diam-diam membuka direktori sistem dan menelusuri log logis satu per satu untuk mencari celah di mana data itu tersangkut.", weights: { cognitive: { Ti: 3, Ne: 1, Fe: -1 }, mbtiAxis: { T: 2, P: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c002_opt_fi_f", text: "Aku membisukan notifikasi yang toxic itu. Aku menyingkirkan kertas di mejaku dan mulai mengerjakan bagianku sendiri dulu; aku menolak terseret dalam kepanikan kolektif yang tak berguna.", weights: { cognitive: { Fi: 3, Se: 1, Te: -1 }, mbtiAxis: { F: 2, P: 1, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_003",
    kind: "singleChoice",
    domain: "stress",
    prompt: "Kau sedang berada di sebuah lobi gedung tertutup. Tiba-tiba alarm darurat melengking memekakkan telinga. Lampu berkedip mati. Orang-orang mulai berlarian panik dan saling bertabrakan. Jantungmu berdegup sangat kencang.",
    options: [
      { id: "c003_opt_dom_se", text: "Tubuhku bereaksi sebelum pikiranku. Aku menerobos kerumunan, mataku langsung mengunci letak tanda 'Keluar' merah menyala, dan aku menarik orang terdekat bersamaku.", weights: { stackRole: { dominant: 3, auxiliary: 1, inferior: -1 }, cognitive: { Se: 2, Te: 1 }, stress: { confrontation: 3 }, evidence: 3, positive: 2, negative: -1, reliability: 3 } },
      { id: "c003_opt_dom_si", text: "Gerakanku refleks merendah ke lantai. Ingatanku langsung memanggil peta evakuasi yang kulihat sekilas saat masuk tadi, memanduku ke arah tangga darurat.", weights: { stackRole: { dominant: 3, opposing: 1, trickster: -1 }, cognitive: { Si: 2, Te: 1 }, stress: { withdrawal: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c003_opt_inf_te", text: "Aku membeku sejenak karena suara bising itu sangat menguasai kepalaku. Aku menekan emosiku dalam-dalam dan berteriak marah menyuruh orang-orang agar tidak saling dorong.", weights: { stackRole: { inferior: 3, dominant: 1, tertiary: -1 }, cognitive: { Te: 2, Fi: 2 }, stress: { confrontation: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c003_opt_dom_ne", text: "Kepalaku seketika dipenuhi berbagai skenario terburuk dan jalan keluar alternatif. Mataku menyapu sekitar mencari benda berat apa pun seandainya kaca pintu harus dipecahkan.", weights: { stackRole: { dominant: 3, inferior: 1, critical: -1 }, cognitive: { Ne: 2, Ti: 1 }, stress: { withdrawal: 1, confrontation: 1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_004",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Kau sedang menatap layar HP di kamar yang remang. Seseorang yang akhir-akhir ini terasa menjaga jarak tiba-tiba mengirim satu pesan singkat: 'Bisa bicara? Ada yang aneh.' Titik kedip-kedip penanda ia sedang mengetik muncul lama, lalu menghilang tanpa tambahan kata.",
    options: [
      { id: "c004_opt_ni", text: "Aku meletakkan HP di dada, menutup mata. Instingku langsung merangkai semua kepingan obrolan kami sebulan terakhir untuk menebak akar masalahnya sebelum aku mengetik balasan.", weights: { cognitive: { Ni: 3, Fe: 1, Se: -2 }, mbtiAxis: { N: 2, I: 1, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c004_opt_ne", text: "Pikiranku seketika meledak dengan lima skenario berbeda tentang apa arti 'aneh' itu. Aku mengetik, menghapus, lalu mengetik lagi sampai akhirnya membalas singkat, 'Kenapa? Ada apa?'", weights: { cognitive: { Ne: 3, Ti: 1, Si: -2 }, mbtiAxis: { N: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c004_opt_ti", text: "Aku menaruh HP itu menghadap ke bawah. Aku akan menunggu dia selesai merumuskan kalimat lengkapnya. Bereaksi pada asumsi yang masih menggantung hanya membuang energi logisku.", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c004_opt_fe", text: "Aku langsung menekan tombol panggilan. Menunggu teks balasan yang ragu-ragu itu terlalu menyiksa bagi kami berdua; mendengar nada suaranya akan menjernihkan segalanya saat ini juga.", weights: { cognitive: { Fe: 3, Se: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_005",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau berdiri di bawah kanopi halte yang bocor. Hujan turun menderas, taksi onlinemu membatalkan pesanan untuk ketiga kalinya, dan di dalam tasmu, ujung dokumen penting sudah mulai basah tersiram air.",
    options: [
      { id: "c005_opt_te", text: "Aku langsung membalikkan badan, berjalan setengah berlari ke minimarket terdekat untuk membeli payung dan map plastik tertutup. Rencana penyelamatan harus dieksekusi sekarang juga.", weights: { cognitive: { Te: 3, Se: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c005_opt_si", text: "Aku merapatkan jaket dan mundur ke sudut yang paling kering. Ingatanku memanggil rutinitas bus kota yang selalu lewat jalan ini setiap jam empat sore; aku akan menunggu itu saja.", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 1, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c005_opt_se", text: "Aku tertawa pelan melihat betapa absurdnya nasibku hari ini. Aku mengangkat tasku tinggi-tinggi ke atas kepala dan nekat menerobos hujan deras menuju stasiun terdekat.", weights: { cognitive: { Se: 3, Ti: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c005_opt_ne", text: "Aku melihat lampu neon kedai kopi kecil di seberang jalan yang berkedip. Aku memutuskan membatalkan pertemuan hari ini, berlari ke sana, dan mengubah lokasi kerjaku dari sana saja.", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_006",
    kind: "singleChoice",
    domain: "work",
    prompt: "Ruang rapat terasa membeku. Atasanmu baru saja menyalahkan rekanmu secara terbuka atas kegagalan proyek yang kau tahu persis adalah murni kesalahan sistem server perusahaan. Rekanmu hanya menunduk menggenggam pulpennya erat-erat.",
    options: [
      { id: "c006_opt_fi_i", text: "Dadaku berdebar keras, tapi nuraniku menolak diam melihat ketidakadilan. Aku berdeham, menatap meja, lalu berkata pelan namun tak tergoyahkan, 'Itu bukan sepenuhnya salah dia. Sistem yang eror kemarin.'", weights: { cognitive: { Fi: 3, Te: 1, Fe: -1 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c006_opt_fe_e", text: "Aku menatap atasan langsung dan memotong ketegangan dengan nada yang diatur agar menenangkan ruang. 'Biar saya bantu perbaiki datanya sekarang, Pak. Kita selesaikan dulu agar klien tidak tertunda.'", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c006_opt_ti_i", text: "Aku menarik napas, membuka laptop, dan memutar layarnya ke arah atasan. 'Log teknis menunjukkan anomali data terjadi dua jam sebelum file ini sampai di tangannya,' ucapku memaparkan fakta logis.", weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -1, reliability: 2 } },
      { id: "c006_opt_te_e", text: "Aku mengabaikan rasa canggung emosional di ruangan. Aku berdiri sedikit, menunjuk ke layar proyektor, 'Tidak ada efisiensinya mencari siapa yang salah. Kita rombak ulang prosedur servernya hari ini agar tidak jebol lagi.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_007",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Di sudut kafe yang temaram, suara mesin kopi berdesis pelan. Seseorang di hadapanmu yang sejak tadi tertawa renyah mendadak terdiam setelah melirik satu pesan di layar HP-nya. Nada suaranya berubah datar, senyumnya lenyap seketika.",
    options: [
      { id: "c007_opt_fe", text: "Aku segera menuangkan teh ke cangkirnya, mencondongkan tubuh ke depan, lalu bertanya dengan suara sepelan mungkin, 'Ada sesuatu yang mendadak menahan pikiranmu?'", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 1, T: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c007_opt_si", text: "Aku langsung menyadari perubahan ritmenya yang drastis. Aku membiarkannya diam sejenak sambil merunut ulang di kepalaku, mencoba memastikan apakah aku salah bicara lima menit yang lalu.", weights: { cognitive: { Si: 3, Ti: 1, Ne: -1 }, mbtiAxis: { S: 2, I: 1, P: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c007_opt_ni", text: "Aku menatap matanya sekilas, pikiranku secara otomatis merangkai pola tebakan tentang siapa yang berani merusak suasana di jam seperti ini. Aku tidak memaksa bertanya, hanya menunggu ia bersuara.", weights: { cognitive: { Ni: 3, Te: 1, Se: -2 }, mbtiAxis: { N: 2, J: 1, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c007_opt_se", text: "Aku menepuk meja pelan untuk memecah lamunannya, menyodorkan daftar menu pencuci mulut ke arahnya. 'Coba lihat ini, kayaknya kita butuh pesanan manis tambahan sekarang juga.'", weights: { cognitive: { Se: 3, Fi: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 1, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_008",
    kind: "singleChoice",
    domain: "work",
    prompt: "Ruang persiapan tampak seperti kapal pecah. Di atas meja panjang, tumpukan berkas penting berserakan parah, bercampur aduk dengan bungkus sisa makanan ringan. Tenggat waktu pengiriman tinggal satu jam, dan kepanikan mulai merayap naik.",
    options: [
      { id: "c008_opt_te", text: "Aku menarik napas panjang dan langsung mengambil kendali. Aku menunjuk dua orang, 'Kamu kumpulkan yang di dekat jendela, kamu buang sampahnya. Aku akan mengurutkan alfabetnya di meja utama ini.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c008_opt_ti", text: "Aku sama sekali mengabaikan kekacauan sampahnya dulu. Aku memisahkan dokumen murni berdasarkan format stempelnya untuk memastikan kerangka datanya tidak ada yang bentrok secara logika.", weights: { cognitive: { Ti: 3, Ne: 1, Fe: -2 }, mbtiAxis: { T: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } },
      { id: "c008_opt_si", text: "Aku duduk di kursi sudut, mengambil tumpukan pertama, dan mulai menyortirnya lembar demi lembar dengan teliti dari awal hingga akhir, memastikan tidak ada satu pun urutan nomor yang terlewat.", weights: { cognitive: { Si: 3, Fe: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c008_opt_ne", text: "Mataku menyapu tumpukan itu dan sebuah ide efisien seketika melompat. 'Bagaimana kalau kita foto langsung saja secara acak pakai ponsel, lalu biarkan sistem folder aplikasi yang menyortirnya otomatis?'", weights: { cognitive: { Ne: 3, Ti: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_009",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Malam sudah sangat larut dan kau bersiap mematikan lampu kamar. Tiba-tiba, seorang teman membunyikan klakson pelan di depan rumahmu. Ia menurunkan kaca jendela mobil, menyuruhmu masuk sekarang juga tanpa menyebutkan tujuannya.",
    options: [
      { id: "c009_opt_se_dom", text: "Aku tertawa pelan, menyambar jaket terdekat dari gantungan, dan langsung melompat ke kursi penumpang. Sensasi laju kendaraan malam dan udara terbuka adalah kebebasan yang kubutuhkan.", weights: { cognitive: { Se: 3, Fi: 1, Ni: -1 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c009_opt_ne_dom", text: "Otakku langsung memproyeksikan lima kemungkinan petualangan absurd. Aku mengunci pintu rumah sambil berteriak pelan antusias, 'Kita mau ke mana? Berburu hantu atau cari sarapan kepagian?'", weights: { cognitive: { Ne: 3, Ti: 1, Si: -1 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c009_opt_inf_pull", text: "Ada jeda di mana nuraniku ragu, tapi dorongan aneh di dalam dada membuatku ingin sesekali memberontak dari rutinitas. Aku memakai sepatuku, meski tahu besok aku pasti akan mengeluh kelelahan.", weights: { cognitive: { Fi: 2, Fe: 1, Te: -1 }, mbtiAxis: { F: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c009_opt_inf_block", text: "Aku merasa jengkel karena jam istirahatku dihancurkan mendadak. Aku melipat tangan di dada, menggeleng tajam, dan menolak mentah-mentah ajakan yang sama sekali tidak memiliki rencana rasional itu.", weights: { cognitive: { Ti: 2, Si: 2, Ne: -1, Se: -1 }, mbtiAxis: { I: 2, J: 1, P: -2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_010",
    kind: "singleChoice",
    domain: "family",
    prompt: "Sore itu di beranda, ayah bercerita tentang masa mudanya yang penuh petualangan. Namun, saat ia menyebutkan nama sebuah kota tempat ia dulu bekerja, kau teringat foto tua di album ibu yang menunjukkan tempat itu adalah daerah terlarang baginya saat itu.",
    options: [
      { id: "c010_opt_si", text: "Aku mengangguk-angguk sambil menyimak detail ceritanya, namun aku diam-diam menghitung rentang tahun yang ia sebutkan dengan catatan di kepalaku, memastikan apakah urutan waktunya masuk akal.", weights: { cognitive: { Si: 3, Ti: 1, Ne: -1 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c010_opt_ni", text: "Aku menatap kosong ke cangkir teh, merasakan ada yang tidak sinkron. Aku tidak memotong ceritanya, tapi instingku mencium ada narasi tersembunyi yang sengaja ia tutup-tutupi.", weights: { cognitive: { Ni: 3, Fi: 1, Se: -1 }, mbtiAxis: { N: 2, I: 1, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c010_opt_fi", text: "Aku merasakan tusukan tidak nyaman di dada. Aku tidak peduli pada fakta sejarahnya, tapi aku merasa sedih membayangkan ibu yang mungkin selama ini menyimpan rahasia di balik senyum ayah.", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 1, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c010_opt_fe", text: "Aku langsung mengalihkan pembicaraan dengan menanyakan detail resep camilan yang ayah sukai saat itu, memastikan suasana tetap hangat tanpa perlu mengungkit kejanggalan yang memicu konflik.", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_011",
    kind: "singleChoice",
    domain: "work",
    prompt: "Di tengah lobi kantor yang dipenuhi suara telepon dan lalu-lalang orang, klienmu menarik tanganmu. 'Saya butuh keputusan sekarang: tetap dengan vendor lama atau ganti yang baru hari ini? Cepat!'",
    options: [
      { id: "c011_opt_se", text: "Aku tidak membuang waktu. Aku memegang lengannya, menariknya ke jendela lobi, dan menunjuk langsung ke vendor baru yang sedang siaga di depan. 'Ganti sekarang, mereka sudah siap di sana!'", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { E: 2, P: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c011_opt_te", text: "Aku membuka catatan di ponsel, menyorot dua angka perbandingan biaya. 'Vendor lama lebih stabil, tapi vendor baru lebih cepat 30%. Ganti yang baru demi hasil akhir!'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c011_opt_ti", text: "Aku memejamkan mata sejenak, mengabaikan kebisingan. Aku membayangkan simulasi risiko kegagalan vendor baru. 'Tetap yang lama, risikonya terlalu besar jika kita ganti dalam hitungan menit.'", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c011_opt_fe", text: "Aku tersenyum menenangkan, memegang bahunya agar ia tidak panik. 'Saya tahu Bapak cemas, tapi vendor lama sudah terbukti setia dengan tim kita selama ini. Mari kita pertahankan mereka.'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_012",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau sedang duduk di bangku taman. Di depanmu, seorang pelari terus berhenti di tiang yang sama, membenahi sepatunya, lalu mulai berlari lagi dengan cara yang persis sama. Kau memperhatikan bagaimana ia melakukannya tiga kali berturut-turut.",
    options: [
      { id: "c012_opt_ni", text: "Aku membayangkan ia bukan sekadar pelari, tapi seseorang yang sedang mengejar ketenangan batin yang hilang dari rutinitasnya yang sudah membosankan.", weights: { cognitive: { Ni: 3, Fe: 1, Se: -1 }, mbtiAxis: { N: 2, I: 1, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c012_opt_ne", text: "Aku bertanya-tanya apakah ia sedang mencoba melakukan ritual keberuntungan atau mungkin ada masalah teknis pada sepatunya yang ia nikmati sebagai tantangan kecil.", weights: { cognitive: { Ne: 3, Ti: 1, Si: -1 }, mbtiAxis: { N: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c012_opt_ti", text: "Aku memperhatikan sudut kaki saat ia mendarat. Ia jelas-jelas punya kesalahan biomekanik pada cara ia melangkah yang membuat sepatunya terus longgar setiap beberapa ratus meter.", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -1 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c012_opt_fe", text: "Aku merasa cemas melihatnya terus berhenti. Aku berharap ia tidak merasa frustrasi atau diperhatikan oleh orang-orang di taman yang sedang lewat.", weights: { cognitive: { Fe: 3, Si: 1, Ti: -1 }, mbtiAxis: { F: 2, E: 1, I: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_013",
    kind: "singleChoice",
    domain: "work",
    prompt: "Rekan kerja menatapmu bingung setelah kau memberikan instruksi teknis yang menurutmu sangat mendasar. 'Bisa jelaskan lagi pelan-pelan? Aku masih belum menangkap maksudnya,' ujarnya sambil memegang dahi.",
    options: [
      { id: "c013_opt_ti", text: "Aku menghela napas, menunjuk kembali layar dengan jari, 'Logikanya sederhana: A mengalir ke B, jika B tersumbat maka C pasti mati. Lihat arah alurnya di sini.'", weights: { cognitive: { Ti: 3, Te: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c013_opt_te", text: "Aku mengambil kertas, menggambar bagan langkah-langkah yang harus dilakukan. 'Ini langkah satu, ini dua, selesai di tiga. Ikuti urutan ini saja, tidak perlu pusing dengan alur di baliknya.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c013_opt_fe", text: "Aku tersenyum, menutup laptop sejenak agar ia tidak merasa terintimidasi. 'Maaf, saya tadi terlalu cepat. Bagaimana kalau kita bahas dari bagian yang paling masuk alur buatmu dulu?'", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c013_opt_fi", text: "Aku merasa frustrasi karena harus mengulang hal yang sama, tapi aku tetap menjaga suara tetap rendah. 'Ini sangat penting bagi integritas proyek kita, mari coba sekali lagi bersama.'", weights: { cognitive: { Fi: 3, Ne: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_014",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau memasuki ruang komunitas baru yang ramai dengan orang-orang yang belum pernah kau temui sebelumnya. Aroma kopi dan suara denting gelas memenuhi ruangan, dan semua orang tampak sudah akrab satu sama lain.",
    options: [
      { id: "c014_opt_se", text: "Aku langsung berjalan ke meja terdekat, menyapa orang di sana dengan senyum lebar, 'Hai, kopi di sini enak ya? Boleh gabung sebentar?'", weights: { cognitive: { Se: 3, Fe: 1, Ni: -2 }, mbtiAxis: { E: 2, P: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c014_opt_si", text: "Aku mencari sudut yang tenang, memperhatikan tata letak ruangan dan siapa orang yang paling banyak bicara, memastikan aku punya gambaran tempat ini sebelum mendekat.", weights: { cognitive: { Si: 3, Ti: 1, Ne: -2 }, mbtiAxis: { I: 2, J: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c014_opt_ne", text: "Aku membayangkan betapa uniknya kombinasi orang-orang di sini. Aku segera menghampiri kelompok yang paling berisik, berharap bisa mendengar ide-ide gila yang sedang mereka diskusikan.", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { E: 2, N: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c014_opt_ni", text: "Aku berdiri di ambang pintu, merasakan aura ruangan ini. Aku mencoba menebak apakah tempat ini adalah ruang bagi orang kreatif atau sekadar tempat orang melarikan diri dari kesibukan.", weights: { cognitive: { Ni: 3, Te: 1, Se: -2 }, mbtiAxis: { I: 2, N: 2, S: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_015",
    kind: "singleChoice",
    domain: "work",
    prompt: "Laporan bulanan sudah di tanganmu. Angkanya tampak sempurna, terlalu rapi bahkan. Tapi entah kenapa, saat kau menatap kolom total di halaman tiga, perutmu merasa tidak tenang seolah ada sesuatu yang ganjil.",
    options: [
      { id: "c015_opt_ni", text: "Aku menutup laporan itu, menutup mata, dan membiarkan intuisi bekerja. Angka itu tidak berbohong secara matematis, tapi ia 'berbohong' secara narasi operasional di lapangan.", weights: { cognitive: { Ni: 3, Ti: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c015_opt_ti", text: "Aku membuka dokumen mentah di komputer. Aku akan membedah setiap input data untuk mencari di titik mana kalkulasinya disesuaikan agar terlihat sesempurna ini.", weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c015_opt_fe", text: "Aku memanggil rekan yang menyusunnya dengan suara lembut. 'Data ini terlihat sangat bagus, tapi boleh kita cek lagi alur kerjanya agar saya bisa mengerti lebih dalam?'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c015_opt_te", text: "Aku membandingkan laporan ini dengan KPI bulan lalu. 'Sesuatu tidak sinkron di sini. Saya akan minta audit internal sekarang untuk melacak keaslian angka-angka ini.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_016",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Temanmu sedang duduk sendirian di bangku taman, wajahnya menatap kosong ke kolam ikan. Kau tahu ia sedang melalui minggu yang sangat berat, tapi ia belum pernah membukanya padamu.",
    options: [
      { id: "c016_opt_fe", text: "Aku duduk di sampingnya dalam diam. Aku tidak bertanya apa pun, hanya menggeser kotak makan berisi camilan favoritnya ke tengah, berharap itu bisa mencairkan suasana.", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c016_opt_fi", text: "Aku mendekat dan berkata dengan suara tulus, 'Aku tidak akan memaksa bicara, tapi aku ada di sini kalau kau butuh orang untuk mendengar tanpa menghakimi.'", weights: { cognitive: { Fi: 3, Ne: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c016_opt_si", text: "Aku menepuk bahunya pelan, lalu beranjak ke kios minuman terdekat untuk membelikan air dingin. 'Aku beli minum dulu, nanti balik lagi ke sini ya,' ucapku santai.", weights: { cognitive: { Si: 3, Fe: 1, Ne: -1 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c016_opt_ne", text: "Aku sengaja menjatuhkan buku di dekatnya untuk memancing perhatian, lalu tertawa kecil, 'Duh, malah terjatuh. Ngomong-ngomong, kau mau dengar cerita konyol yang menimpaku tadi?'", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_017",
    kind: "singleChoice",
    domain: "work",
    prompt: "Keran di pantry kantor tiba-tiba lepas dan menyemprotkan air ke mana-mana hingga membasahi lantai dan tumpukan laporan yang harus segera dikirim.",
    options: [
      { id: "c017_opt_se", text: "Aku menyambar kain pel terdekat, menutup semprotan air dengan tangan kosong, lalu berteriak, 'Tolong matikan katup utama di bawah meja, sekarang!'", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 1, J: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c017_opt_te", text: "Aku segera mengarahkan rekan lain untuk menyingkirkan semua dokumen dari lantai, sementara aku mencari kunci inggris di laci alat untuk menutup keran itu selamanya.", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c017_opt_si", text: "Aku melakukan persis apa yang diajarkan buku manual maintenance gedung; aku menutupi keran dengan ember untuk mengalihkan air ke dalam drainase sambil menunggu petugas datang.", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c017_opt_ti", text: "Aku berdiri sejenak melihat tekanan airnya. Jika aku menaruh beban berat di atas pipa yang longgar, tekanannya akan berkurang. Aku menekan pipa itu dengan kursi kantor.", weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { T: 2, P: 1, J: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_018",
    kind: "singleChoice",
    domain: "identity",
    prompt: "Dua tawaran besar ada di tanganmu. Tawaran pertama penuh dengan sorak sorai perayaan dan teman-teman hebat, tapi tawaran kedua adalah proyek sunyi di pelosok yang sudah lama kauimpikan untuk menuntaskan ambisimu.",
    options: [
      { id: "c018_opt_ne", text: "Aku memilih tawaran pertama yang ramai. Begitu banyak orang hebat di sana yang akan membuat setiap hari menjadi petualangan baru yang tidak bisa kuprediksi.", weights: { cognitive: { Ne: 3, Te: 1, Ni: -2 }, mbtiAxis: { N: 2, E: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c018_opt_ni", text: "Aku memilih jalan sunyi di pelosok itu. Aku butuh ruang untuk benar-benar menyelesaikan apa yang telah kupikirkan selama bertahun-tahun tanpa ada gangguan kebisingan.", weights: { cognitive: { Ni: 3, Fi: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c018_opt_fi", text: "Aku memilih proyek di pelosok, bukan karena ambisi, tapi karena di sanalah aku merasa jiwaku tidak akan terbelah oleh ekspektasi orang banyak.", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c018_opt_te", text: "Aku memilih proyek yang ramai, karena di sanalah sumber daya, koneksi, dan peluang pertumbuhan karier yang paling terukur berada untuk masa depan.", weights: { cognitive: { Te: 3, Ni: 1, Fi: -2 }, mbtiAxis: { T: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_019",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Temanmu memamerkan draf tulisan atau proyek barunya, lalu menatapmu tajam. 'Jujur, ini bagus atau cuma membuang waktu? Aku butuh pendapat yang tidak bertele-tele.'",
    options: [
      { id: "c019_opt_fi", text: "Aku terdiam sejenak merasakan gurat usahanya. 'Aku menghargai kejujuranmu, tapi bagi saya, bagian ini terasa kurang jiwanya. Apakah kau benar-benar merasa yakin saat menulisnya?'", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c019_opt_fe", text: "Aku tersenyum mendukung dan memegang bahunya. 'Kerja kerasmu terlihat di sini. Mungkin bagian tengahnya perlu sedikit penyesuaian agar pembaca lebih mudah terkoneksi.'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c019_opt_ti", text: "Aku menunjuk satu bagian draf. 'Strukturnya punya lubang logika di halaman dua. Kalau ini tidak diperbaiki, pembaca akan kehilangan benang merahnya. Ini belum siap.'", weights: { cognitive: { Ti: 3, Ne: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c019_opt_te", text: "Aku melihat jam, lalu menatapnya tegas. 'Untuk mencapai target pasar yang kau mau, draf ini terlalu panjang. Potong bagian ini dan fokus pada hasil akhirnya saja.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_020",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Jalan yang biasa kau lalui untuk pulang tiba-tiba ditutup total karena perbaikan kabel. Kau terpaksa mencari jalan tikus yang asing, gelap, dan sangat berbeda dari rutinitasmu.",
    options: [
      { id: "c020_opt_si", text: "Aku merasa tidak tenang melihat tanda pengalihan jalan yang tidak jelas. Aku menepikan kendaraan, mengeluarkan peta digital, dan membandingkannya dengan arah kompas untuk mencari rute yang paling teruji.", weights: { cognitive: { Si: 3, Ti: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, N: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c020_opt_se", text: "Aku langsung memacu kendaraan ke jalan tikus itu tanpa pikir panjang. Lampu jalan yang remang dan tikungan tajam justru menantang ketangkasanku mengemudi.", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 3, positive: 2, negative: -2, reliability: 2 } },
      { id: "c020_opt_ni", text: "Aku mengamati setiap percabangan jalan dan membiarkan insting membimbingku. Ada firasat kalau jalan ini akan membawaku kembali ke jalur utama meski terlihat berputar-putar.", weights: { cognitive: { Ni: 3, Fe: 1, Se: -2 }, mbtiAxis: { N: 2, J: 1, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c020_opt_ne", text: "Aku tersenyum melihat jalanan asing ini. Ini kesempatan bagus untuk mengeksplorasi kedai kopi atau bangunan tua yang belum pernah kulihat sebelumnya.", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_021",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Dua orang sahabatmu sedang beradu mulut dengan suara keras di ruang tengah. Mereka menuntutmu untuk memihak. 'Katakan padanya, siapa yang sebenarnya salah di sini!'",
    options: [
      { id: "c021_opt_fe_aux", text: "Aku berdiri di antara mereka, menenangkan keadaan dengan nada suara rendah. 'Bisa kita bicara tanpa teriak? Aku peduli pada kalian berdua, mari cari jalan tengah.'", weights: { cognitive: { Fe: 3, Ti: -2 }, stackRole: { auxiliary: 3, opposing: -1 }, mbtiAxis: { F: 2, E: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c012_opt_ti_opp", text: "Aku menunjuk fakta-fakta yang mereka abaikan dengan suara datar. 'Faktanya, kalian berdua sama-sama salah dalam eksekusi tadi. Mengapa harus membuang energi untuk saling menyalahkan?'", weights: { cognitive: { Ti: 3, Fe: -2 }, stackRole: { opposing: 3, auxiliary: -1 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c021_opt_fi_aux", text: "Aku menarik napas panjang, menatap mereka dengan tatapan kecewa namun lembut. 'Aku tidak akan memihak. Aku sedih melihat persahabatan kita hancur hanya karena ego.'", weights: { cognitive: { Fi: 3, Te: -2 }, stackRole: { auxiliary: 3, opposing: -1 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c021_opt_te_opp", text: "Aku melipat tangan di dada dan memotong mereka. 'Cukup! Pertengkaran ini tidak menghasilkan apa-apa. Sekarang, siapa yang mau memperbaiki masalahnya atau kita hentikan semua ini?'", weights: { cognitive: { Te: 3, Fi: -2 }, stackRole: { opposing: 3, auxiliary: -1 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_022",
    kind: "singleChoice",
    domain: "work",
    prompt: "Kau mengamati deretan komponen mesin yang gagal berfungsi di atas meja. Sekilas tampak normal, tapi saat kau mendekat dan memperhatikan sisa residu halus pada sambungan tembaganya, kau menyadari ada yang tidak beres.",
    options: [
      { id: "c022_opt_se", text: "Aku mengambil kaca pembesar, menyentuh residu itu dengan ujung jariku untuk merasakan teksturnya. 'Ini korosi kimia, bukan aus mekanis,' ucapku sambil menunjuk titik kebocoran.", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 1, J: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c022_opt_si", text: "Aku membandingkan komponen itu dengan foto manual servis tahun lalu. 'Lihat, pola endapannya berbeda. Ini dipasang dengan spesifikasi torsi yang salah sejak awal.'", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c022_opt_te", text: "Aku tidak membuang waktu mengamati residu. Aku langsung melepas komponen tersebut. 'Komponen ini tidak efisien, ganti dengan model terbaru yang tahan korosi agar target kita tidak molor.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c022_opt_ni", text: "Aku menatap residu itu, lalu membayangkan seluruh rangkaian sistemnya dari awal hingga akhir. 'Residu ini hanyalah gejala. Masalah sebenarnya ada pada suhu sistem pusat yang terlalu tinggi.'", weights: { cognitive: { Ni: 3, Se: 1, Te: -2 }, mbtiAxis: { N: 2, J: 1, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_023",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Di ruang tengah, teman-temanmu sedang sibuk mengobrol. Kau tidak mendengar apa yang mereka bicarakan, tapi kau melihat satu per satu dari mereka menghindari kontak mata dengan orang yang sedang memegang ponsel di sudut ruangan.",
    options: [
      { id: "c023_opt_fe", text: "Aku langsung mendekati orang di sudut itu, menanyakan kabarnya dengan nada hangat, mencoba meredam suasana dingin yang diciptakan kelompok itu padanya.", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c023_opt_ni", text: "Aku berdiri diam, menatap situasi itu sejenak. Instingku mengatakan ada rahasia besar yang baru saja tersebar lewat ponsel itu, dan aku memilih untuk tidak ikut campur dalam dinamika yang retak ini.", weights: { cognitive: { Ni: 3, Ti: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c023_opt_ne", text: "Aku tertawa kecil, menghampiri kelompok itu dan mulai bercerita hal konyol yang memecah ketegangan, berharap bisa mengubah arah percakapan mereka menjadi sesuatu yang lebih menyenangkan.", weights: { cognitive: { Ne: 3, Fe: 1, Si: -2 }, mbtiAxis: { N: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c023_opt_ti", text: "Aku memperhatikan setiap gerak-gerik mereka dengan tajam. Ada pola pengucilan yang disengaja. Aku tidak bereaksi, hanya merekam situasi ini sebagai bahan analisis hubungan mereka nanti.", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_024",
    kind: "singleChoice",
    domain: "work",
    prompt: "Mejamu berantakan dengan tagihan, jadwal rapat, dan janji pertemuan yang tumpang tindih. Kau merasa hari ini akan berakhir kacau jika tidak segera ditata.",
    options: [
      { id: "c024_opt_te", text: "Aku mengambil papan tulis kecil, menyusun prioritas berdasarkan margin keuntungan, lalu menempelkannya tepat di depan monitor agar setiap tindakanku hari ini terarah ke target.", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c024_opt_si", text: "Aku mengeluarkan buku agenda, mengurutkan jadwal berdasarkan kronologis jam, lalu merapikan tumpukan kertas sesuai kategori warnanya agar mudah diakses.", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c024_opt_ti", text: "Aku membuang separuh berkas yang tidak relevan secara logis. Aku mengatur ulang sistem folder di komputer agar pencarian data tidak memakan waktu lebih dari tiga detik.", weights: { cognitive: { Ti: 3, Ne: 1, Fe: -2 }, mbtiAxis: { T: 2, P: 1, J: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } },
      { id: "c024_opt_ne", text: "Aku memindahkan seluruh catatan ke dalam satu aplikasi berbasis awan agar aku bisa mengelola semuanya dari mana saja, membebaskan diriku dari meja yang terkekang.", weights: { cognitive: { Ne: 3, Si: 1, Ti: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_025",
    kind: "singleChoice",
    domain: "identity",
    prompt: "Acara komunitas besar sedang berlangsung. Kau merasa sudah terlalu lama berada di sana, dikelilingi percakapan yang terus berputar di tempat yang sama. Kau melihat pintu keluar yang terbuka sedikit.",
    options: [
      { id: "c025_opt_ext_fe", text: "Aku mengedarkan pandangan, menyapa satu per satu orang yang sempat berinteraksi denganku untuk berpamitan dengan hangat agar tidak ada yang merasa tersinggung.", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { E: 2, F: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c025_opt_int_fi", text: "Aku menarik napas dalam-dalam, mengambil tas, dan berjalan keluar dengan cepat tanpa menoleh ke belakang. Aku butuh ketenangan batin yang tidak bisa kupaksakan di tengah keramaian ini.", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { I: 2, F: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c025_opt_int_ti", text: "Aku menatap jam. Acara ini secara logis sudah selesai intinya. Aku pergi begitu saja tanpa merasa perlu berpamitan pada siapa pun yang tidak relevan dengan kepentinganku.", weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { I: 2, T: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c025_opt_ext_te", text: "Aku menunggu pembicara selesai memberikan pengumuman penutup, lalu beranjak pergi setelah memastikan seluruh agendaku tercapai dan networking sudah aman.", weights: { cognitive: { Te: 3, Ni: 1, Fi: -2 }, mbtiAxis: { E: 2, T: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_026",
    kind: "singleChoice",
    domain: "work",
    prompt: "Sebuah kesempatan investasi kecil muncul. Risikonya nyata dan bisa menghabiskan tabunganmu, tapi potensinya bisa membuka jalan bagi karier impianmu yang sudah lama tertunda.",
    options: [
      { id: "c026_opt_ne", text: "Aku melihat ini sebagai gerbang. Aku berani mengambil risiko itu sekarang karena peluang seperti ini tidak akan muncul dua kali dalam hidup.", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c026_opt_se", text: "Aku mengecek aset fisik yang bisa kujaminkan. Jika aku bisa mengamankan modal dengan cepat, aku akan masuk ke pasar ini sebelum orang lain menyadarinya.", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 3, positive: 2, negative: -2, reliability: 2 } },
      { id: "c026_opt_ni", text: "Aku duduk berjam-jam mempelajari tren jangka panjangnya. Aku tidak akan masuk jika aku tidak bisa melihat masa depan industri ini lima tahun ke depan.", weights: { cognitive: { Ni: 3, Ti: 1, Se: -2 }, mbtiAxis: { N: 2, J: 2, S: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c026_opt_si", text: "Aku menolak tawaran itu. Tabunganku adalah pondasi untuk kebutuhan masa depan yang sudah direncanakan, dan aku tidak akan merusak kestabilan itu demi spekulasi.", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, N: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_027",
    kind: "singleChoice",
    domain: "moral",
    prompt: "Di kantor, dua karyawan memperebutkan satu bonus tahunan. Karyawan A sangat butuh untuk biaya rumah sakit ibunya, sementara karyawan B adalah orang yang kinerjanya 200% melampaui target.",
    options: [
      { id: "c027_opt_ti", text: "Aku merekomendasikan bonus diberikan pada karyawan B. Sesuai kebijakan, reward diberikan berdasarkan hasil kinerja, bukan latar belakang kondisi pribadi.", weights: { cognitive: { Ti: 3, Te: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 3, positive: 2, negative: -2, reliability: 2 } },
      { id: "c027_opt_te", text: "Aku mengusulkan sistem split bonus. Sebagian untuk B sebagai pengakuan prestasi, sebagian untuk A sebagai dana bantuan perusahaan untuk menjaga moral tim.", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c027_opt_fi", text: "Aku memberikan bonus itu pada A. Bagi saya, perusahaan harus memiliki empati pada karyawannya saat mereka sedang berada di titik terendah hidup mereka.", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } },
      { id: "c027_opt_fe", text: "Aku berdiskusi dengan keduanya. 'Bagaimana kalau B merelakan sebagian porsi, dan kita buat penggalangan dana di kantor untuk membantu A juga?' Semua menang.", weights: { cognitive: { Fe: 3, Ne: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_028",
    kind: "singleChoice",
    domain: "identity",
    prompt: "Saat membersihkan gudang, kau menemukan sebuah pena tinta tua yang sudah kering. Begitu kau memegangnya, ingatan tentang seseorang yang dulu memberikan pena itu melintas dengan sangat jelas.",
    options: [
      { id: "c028_opt_si", text: "Aku teringat persis detail ruang kelas saat pena itu diberikan, aroma buku tulis yang baru, dan bagaimana kami berjanji akan menulis cerita bersama suatu saat nanti.", weights: { cognitive: { Si: 3, Fe: 1, Ni: -2 }, mbtiAxis: { S: 2, I: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c028_opt_ni", text: "Aku menatap pena itu dan menyadari betapa waktu telah mengubah arah hidupku. Pena ini bukan sekadar alat, tapi pengingat akan visi yang dulu hampir kulupakan.", weights: { cognitive: { Ni: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, I: 2 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c028_opt_fi", text: "Dadaku terasa sesak. Pena ini menyimpan emosi yang tak tersampaikan. Aku merasa harus menjaga pena ini sebagai bagian dari memori yang membentuk siapa aku sekarang.", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c028_opt_fe", text: "Aku tersenyum lembut, teringat betapa perhatian orang itu. Aku meletakkan pena itu di tempat yang layak, menghargai kebaikan yang pernah ia berikan padaku dulu.", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_029",
    kind: "singleChoice",
    domain: "social",
    prompt: "Kau tiba di pesta kejutan yang sangat bising. Musik berdentum, orang-orang berdansa, dan kau berdiri di ambang pintu melihat kelompok-kelompok yang sudah terbentuk.",
    options: [
      { id: "c029_opt_ext_fe", text: "Aku langsung mencari tuan rumah, menyapa dengan antusias, lalu bergerak aktif dari satu kelompok ke kelompok lain untuk memastikan suasana pesta tetap hidup.", weights: { cognitive: { Fe: 3, Se: 1, Ti: -2 }, stackRole: { dominant: 3, trickster: -1 }, mbtiAxis: { E: 3, F: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c029_opt_ext_te", text: "Aku memindai ruangan untuk mencari siapa saja orang-orang penting di sini. Aku akan berbaur dengan mereka untuk melihat apakah ada peluang kolaborasi yang bisa dibicarakan.", weights: { cognitive: { Te: 3, Se: 1, Fi: -2 }, stackRole: { dominant: 3, critical: -1 }, mbtiAxis: { E: 3, T: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c029_opt_int_ti", text: "Aku memilih duduk di sudut ruangan dengan segelas minuman, mengamati interaksi di sana sebagai bahan riset tentang bagaimana dinamika sosial kelompok ini terbentuk.", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, stackRole: { auxiliary: 2, opposing: 2 }, mbtiAxis: { I: 3, T: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c029_opt_int_se", text: "Aku terhanyut dalam dentuman musik dan cahaya lampu yang berpendar. Aku mencari satu orang yang terlihat paling asyik berdansa untuk bergabung dengannya tanpa banyak bicara.", weights: { cognitive: { Se: 3, Fe: 1, Ni: -2 }, stackRole: { transformative: 2, tertiary: 1 }, mbtiAxis: { I: 1, E: 1, S: 2 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_030",
    kind: "singleChoice",
    domain: "stress",
    prompt: "Semua orang di ruang rapat panik karena sistem utama padam total. Suara teriakan memenuhi ruangan. Kau diam mematung selama lima detik, menatap layar yang gelap.",
    options: [
      { id: "c030_opt_dom", text: "Dalam keheningan itu, aku sudah mengunci penyebab utamanya. Aku berdiri dan bersuara tegas: 'Sistem listrik cadangan gagal. Lepaskan terminal B sekarang juga.'", weights: { stackRole: { dominant: 3, trickster: -1 }, cognitive: { Ti: 3, Te: 1 }, stress: { confrontation: 3 }, evidence: 2, positive: 2, negative: -1, reliability: 3 } },
      { id: "c030_opt_inf", text: "Aku merasa kewalahan oleh kebisingan itu. Pikiranku justru kosong, dan aku hanya bisa menatap rekan-rekanku dengan panik, menunggu seseorang memberitahuku apa yang harus dilakukan.", weights: { stackRole: { inferior: 3, auxiliary: -1 }, cognitive: { Fe: 2, Si: 2 }, stress: { withdrawal: 3 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c030_opt_opp", text: "Aku justru merasa terganggu oleh kepanikan mereka. Aku diam bukan karena takut, tapi karena aku menunggu mereka lelah sendiri sebelum aku menawarkan solusi yang paling logis.", weights: { stackRole: { opposing: 3, dominant: -1 }, cognitive: { Te: 3, Ni: 1 }, stress: { confrontation: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c030_opt_tri", text: "Aku diam karena aku justru sibuk memikirkan apakah ini saat yang tepat untuk berpura-pura tidak tahu apa-apa dan keluar dari tanggung jawab yang membosankan ini.", weights: { stackRole: { trickster: 3, critical: -1 }, cognitive: { Ne: 3, Ti: 1 }, stress: { withdrawal: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_031",
    kind: "singleChoice",
    domain: "moral",
    prompt: "Seorang rekan kerja menunjukkan proyek yang ia kerjakan berbulan-bulan, namun kau melihat kesalahan fatal yang akan membuat klien membatalkan kontrak. Ia menatapmu penuh harap.",
    options: [
      { id: "c031_opt_fe", text: "Aku menatapnya dengan empati, lalu berkata perlahan, 'Hasilnya estetik sekali. Namun, mungkin akan lebih aman jika kita menyesuaikan bagian data ini agar klien tidak salah paham.'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c031_opt_fi", text: "Aku memegang bahunya dengan tulus. 'Saya menghargai usahamu, tapi saya merasa kau pantas mendapatkan hasil yang lebih kuat dari ini. Bagian ini belum merepresentasikan kemampuan aslimu.'", weights: { cognitive: { Fi: 3, Ne: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c031_opt_ti", text: "Aku menunjuk titik kesalahan di layar. 'Secara teknis, angka di sini tidak selaras. Jika dikirim sekarang, kontrak akan batal. Ini harus segera dikoreksi total.'", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c031_opt_te", text: "Aku menatap jam, lalu berkata tegas, 'Proyek ini berisiko bagi reputasi tim. Kita rombak bagian ini dalam satu jam, atau saya tidak bisa mengizinkan pengiriman hari ini.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_032",
    kind: "singleChoice",
    domain: "work",
    prompt: "Proyek besar tiba-tiba dihentikan oleh manajemen. Semua orang tampak kacau, lembaran laporan beterbangan di lantai, dan telepon terus berdering tanpa henti.",
    options: [
      { id: "c032_opt_ne", text: "Aku melihat kekacauan ini sebagai celah. Aku segera menghampiri tim lain yang juga terdampak, 'Ini saatnya kita mengusulkan ide proyek baru yang selama ini tidak dilirik.'", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c032_opt_se", text: "Aku langsung memungut dokumen penting yang berserakan, mencari barang yang masih bisa diselamatkan, lalu berteriak, 'Amankan aset yang ada di server sekarang juga!'", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c032_opt_te", text: "Aku memungut laporan yang terpenting, lalu membagi tugas kepada rekan terdekat. 'Fokus ke data yang masih relevan. Kita susun laporan untuk manajemen sebelum jam makan siang.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c032_opt_ni", text: "Aku diam sejenak di tengah huru-hara, memejamkan mata. Aku tahu ada alasan di balik penghentian ini, dan aku bisa melihat bagaimana ini akan memberi kita keuntungan di masa depan.", weights: { cognitive: { Ni: 3, Ti: 1, Se: -2 }, mbtiAxis: { N: 2, J: 1, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_033",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Seseorang yang baru kau kenal mengajakmu ke sebuah tempat yang sangat asing saat larut malam. Ia sangat antusias, tapi tiba-tiba bulu kudukmu berdiri dan ada rasa tidak nyaman yang menjalar di punggungmu.",
    options: [
      { id: "c033_opt_si", text: "Aku terbayang kejadian tidak menyenangkan di masa lalu saat aku nekat mengikuti ajakan serupa. 'Maaf, saya lebih nyaman pulang malam ini saja,' ucapku sambil melangkah menjauh.", weights: { cognitive: { Si: 3, Ti: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c033_opt_ni", text: "Ada suara lirih di kepala yang menyuruhku berhenti. Entah kenapa, aku merasa jika aku pergi ke sana, langkahku tidak akan pernah sama lagi. 'Saya tidak bisa ikut, maaf.'", weights: { cognitive: { Ni: 3, Fi: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c033_opt_se", text: "Tubuhku bereaksi; ototku menegang dan aku merasa tidak aman. Aku langsung menolak dan beralasan, 'Lain kali saja, saya mendadak harus mengurus sesuatu yang mendesak.'", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 1, J: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } },
      { id: "c033_opt_fi", text: "Aku menatap matanya, mencoba mencari ketulusan, tapi hatiku menolak mentah-mentah. 'Saya punya prinsip untuk tidak pergi ke tempat yang tidak saya kenal saat larut.'", weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_034",
    kind: "singleChoice",
    domain: "work",
    prompt: "Di tengah sibuknya pengiriman, seorang rekan mengabaikan prosedur keamanan standar. Saat kau menegurnya, ia memutar bola mata dan berkata, 'Ayolah, jangan kaku. Aku sudah lakukan ini seratus kali dan tidak ada apa-apa.'",
    options: [
      { id: "c034_opt_te", text: "Aku menatapnya tajam. 'Prosedur ini ada untuk memitigasi risiko kegagalan. Kalau kau tidak bisa mematuhinya sekarang, aku harus melaporkan ini ke manajer lapangan.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c034_opt_ti", text: "Aku melipat tangan. 'Itu bukan argumen yang valid. Statistik menunjukkan risiko terjadi saat kau lengah di kali ke-101. Ini soal probabilitas, bukan keberuntungan.'", weights: { cognitive: { Ti: 3, Ne: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c034_opt_fe", text: "Aku menghela napas, berusaha tetap tenang. 'Saya tahu ini membosankan, tapi saya sangat mengkhawatirkan keselamatanmu. Mari ikuti prosedurnya agar kita semua aman di sini.'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c034_opt_fi", text: "Aku menatapnya dengan rasa kecewa. 'Aku tidak ingin melihatmu celaka hanya karena kau menyepelekan hal ini. Aku tidak akan diam saja melihatmu mengambil risiko itu.'", weights: { cognitive: { Fi: 3, Ne: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_035",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau melihat seorang rekan kerja secara sengaja memindahkan berkas penting di meja bos saat sedang tidak ada orang. Itu adegan kecil, tapi kau merasa itu tanda dari rencana besar yang lebih gelap.",
    options: [
      { id: "c035_opt_ni", text: "Aku tidak mempedulikan berkas itu sendiri, tapi aku mulai memetakan siapa saja yang dia temui dalam seminggu terakhir. Sesuatu yang besar akan segera terjadi di kantor ini.", weights: { cognitive: { Ni: 3, Ti: 1, Se: -2 }, mbtiAxis: { N: 2, J: 2, S: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c035_opt_si", text: "Aku mencatat waktu kejadian itu dengan detail. Jika berkas itu hilang atau posisinya berubah besok pagi, aku punya bukti kronologis untuk memperingatkan atasan.", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c035_opt_ne", text: "Aku tertawa kecil. Mungkin dia sedang mencoba melakukan sabotase, atau mungkin dia sedang mencoba melamar jabatan itu? Aku ingin melihat bagaimana skenario ini berkembang.", weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c035_opt_te", text: "Aku segera memasang kamera pengawas tersembunyi di area tersebut. Aku tidak akan membiarkan ada penyimpangan prosedur yang mengancam kinerja tim kami.", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_036",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Sepulang kerja, kau mendapati meja kerjamu berantakan, lampu kantor berkedip-kedip, dan rekan kerja di sebelahmu sedang menangis tersedu-sedu karena dimarahi bos.",
    options: [
      { id: "c036_opt_se", text: "Aku langsung memperbaiki lampu yang berkedip dengan kursi kantor, merapikan dokumen yang berserakan, lalu kembali ke rekan kerjaku untuk memberinya tisu.", weights: { cognitive: { Se: 3, Fe: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c036_opt_fe", text: "Aku mengabaikan meja dan lampu. Aku langsung duduk di samping rekan itu, mendengarkan isak tangisnya dan membiarkannya bicara sampai ia merasa lebih lega.", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c036_opt_te", text: "Aku merapikan dokumen-dokumen yang berserakan agar tidak ada data hilang, lalu berkata pada rekan itu, 'Tangis tidak akan menyelesaikan masalah. Ayo kita revisi laporannya sekarang.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 } },
      { id: "c036_opt_fi", text: "Aku merasa marah melihat bagaimana bos kami memperlakukannya. Aku merapikan meja rekan itu sebagai bentuk dukungan moral, lalu menemaninya menenangkan diri.", weights: { cognitive: { Fi: 3, Ne: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_037",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Seorang teman bercerita bahwa ia tidak pergi ke pesta tadi malam karena harus menjaga ibunya yang sakit. Namun, kau melihat foto di media sosial yang menunjukkan ia sedang berada di restoran mewah bersama orang lain tepat di jam pesta tersebut.",
    options: [
      { id: "c037_opt_ti", text: "Aku tidak bereaksi emosional. Aku hanya mencatat dalam pikiran bahwa cerita dan realitanya tidak selaras. Aku akan memperhatikan apakah ada kebohongan lain yang muncul nanti.", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c037_opt_ni", text: "Aku menatapnya dengan tenang, merasakan ada sesuatu yang disembunyikan di balik ceritanya. Mungkin ia hanya takut dianggap tidak setia kawan jika mengakui apa yang sebenarnya terjadi.", weights: { cognitive: { Ni: 3, Fe: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c037_opt_fe", text: "Aku memilih untuk tidak menyinggung foto itu. Jika ia merasa perlu berbohong, mungkin ia sedang mengalami tekanan yang membuat ia merasa tidak aman untuk jujur padaku.", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c037_opt_se", text: "Aku menunjukkannya foto itu secara langsung. 'Bukankah ini restoran tempatmu tadi malam? Jangan berbohong, saya melihat foto ini di media sosial.'", weights: { cognitive: { Se: 3, Ti: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_038",
    kind: "singleChoice",
    domain: "work",
    prompt: "Kau sudah menyiapkan rencana rinci untuk proyek bulan depan. Tiba-tiba, atasan memberikan tugas baru yang sama sekali berbeda dan menuntut rencana itu diubah total dalam waktu singkat.",
    options: [
      { id: "c038_opt_si", text: "Aku merasa terganggu karena rencana awal sudah matang. Aku meminta waktu satu hari untuk meninjau kembali apakah rencana baru ini masih sesuai dengan standar kualitas kita.", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, N: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c038_opt_ne", text: "Aku merasa tertantang. Rencana lama mungkin sudah usang. Aku langsung membayangkan bagaimana rencana baru ini bisa menjadi kesempatan emas untuk inovasi yang lebih berani.", weights: { cognitive: { Ne: 3, Te: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c038_opt_te", text: "Aku segera menyesuaikan sumber daya. 'Baik, rencana lama kita simpan. Kita alihkan fokus ke tugas baru ini agar target akhir kita tetap tercapai tepat waktu.'", weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c038_opt_fi", text: "Aku merasa lelah karena pengorbanan rencana lama sia-sia. Namun, aku tetap menjalankan tugas baru demi komitmen dan tanggung jawab pada tim.", weights: { cognitive: { Fi: 3, Te: 1, Si: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_039",
    kind: "singleChoice",
    domain: "work",
    prompt: "Tim sedang stagnan dalam rapat. Semua orang menunggu seseorang memberi instruksi, tapi atasan sedang sibuk dengan panggilan telepon di luar ruangan.",
    options: [
      { id: "c039_opt_te", text: "Aku berdiri dan mengambil alih papan tulis. 'Oke, mari kita buat keputusan cepat. Kita bagi tugas menjadi tiga bagian, mulai kerjakan sekarang agar kita punya hasil saat atasan kembali.'", weights: { cognitive: { Te: 3, Se: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c039_opt_fe", text: "Aku menatap rekan-rekanku. 'Sepertinya kita semua sedang bingung. Bagaimana kalau kita diskusikan dulu apa hambatan terbesar kita saat ini sambil menunggu atasan selesai?'", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c039_opt_se", text: "Aku membagikan kertas catatan ke setiap orang. 'Tuliskan satu tindakan konkret yang bisa dilakukan detik ini juga. Kita mulai dari tindakan yang paling mudah dan nyata.'", weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c039_opt_ti", text: "Aku mengajukan satu pertanyaan krusial yang mengarah pada inti masalah. 'Jika kita tidak melakukan apa pun dalam 10 menit ke depan, apa dampak kerugian terburuk bagi kita?'", weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_040",
    kind: "singleChoice",
    domain: "work",
    prompt: "Laporan keuangan menunjukkan angka yang bersih dan sesuai prosedur. Namun, kau melihat rekanmu menyimpan satu catatan transaksi kecil di buku saku pribadinya yang tidak dia masukkan ke sistem.",
    options: [
      { id: "c040_opt_se", text: "Aku berjalan ke mejanya dan berkata santai, 'Buku saku itu menarik. Boleh aku lihat catatan transaksi yang kau catat tadi untuk mencocokkan data harian kita?'", weights: { cognitive: { Se: 3, Ti: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 1, J: -1 }, evidence: 3, positive: 2, negative: -2, reliability: 2 } },
      { id: "c040_opt_ni", text: "Aku tidak bertanya, tapi aku mulai mengamati pola tindakannya. Ada sesuatu yang janggal di balik keteraturannya. Aku akan mencari tahu apa yang sebenarnya ia sembunyikan.", weights: { cognitive: { Ni: 3, Fe: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c040_opt_ti", text: "Aku membandingkan total laporan sistem dengan data yang sempat kulihat di buku sakunya secara diam-diam. Selisihnya tidak masuk akal secara logis. Ini harus dikonfrontasi.", weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c040_opt_fe", text: "Aku mengajaknya bicara empat mata, 'Aku memperhatikanmu mencatat sesuatu. Jika ada beban atau masalah yang kau hadapi, mungkin aku bisa membantu meluruskannya?'", weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_041",
    kind: "singleChoice",
    domain: "work",
    prompt: "Rapat berlangsung dua jam dan tidak ada satu pun ide baru yang muncul. Semua orang terdiam menatap meja, kelelahan. Bos menatapmu, 'Fida, apa kita akan terus seperti ini?'",
    options: [
      { id: "c041_opt_ne", text: "Aku berdiri, berjalan ke papan tulis, dan menggambar alur yang sama sekali baru. 'Bagaimana kalau kita balik modelnya? Kita mulai dari kebutuhan klien, bukan dari kapasitas produksi kita.'", weights: { cognitive: { Ne: 3, Fe: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c041_opt_ti", text: "Aku menunjuk data proyeksi kuartal depan. 'Masalahnya ada pada efisiensi distribusi. Kita tidak butuh ide kreatif, kita butuh perampingan alur operasional di sini.'", weights: { cognitive: { Ti: 3, Te: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -1, reliability: 2 } },
      { id: "c041_opt_fe", text: "Aku menatap rekan-rekanku. 'Kita semua lelah. Mari kita bagi ide jadi kelompok kecil agar suasananya tidak seberat ini. Mungkin ide terbaik justru muncul dari obrolan santai.'", weights: { cognitive: { Fe: 3, Ne: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c041_opt_te", text: "Aku mengambil alih agenda. 'Saya usulkan tiga langkah taktis yang harus selesai sore ini. Siapa yang mau ambil tanggung jawab untuk masing-masing bagian?'", weights: { cognitive: { Te: 3, Ti: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_042",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Seorang teman kembali mengulang kesalahan yang sama dalam hubungan asmaranya, meski kau sudah menasihatinya berkali-kali di masa lalu. Ia datang lagi menangis karena hal yang persis sama.",
    options: [
      { id: "c042_opt_si", text: "Aku mendengarkannya sejenak, lalu berkata pelan, 'Ini sudah yang kelima kalinya, kan? Ingat saat kau menangis karena hal persis sama bulan lalu? Kenapa kau melakukannya lagi?'", weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, P: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c042_opt_fi", text: "Aku membiarkannya menangis di pundakku. Aku tahu ini menyakitkan, dan meski dia mengulang kesalahan, aku tetap ada di sini untuk memastikan dia tidak merasa sendirian.", weights: { cognitive: { Fi: 3, Fe: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c042_opt_te", text: "Aku menatapnya tajam. 'Kau punya pola yang merusak. Kalau kau tidak memutus hubungan ini sekarang juga, aku tidak bisa lagi mendengar cerita yang sama setiap bulan.'", weights: { cognitive: { Te: 3, Fi: 1, Si: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c042_opt_fe", text: "Aku memberinya segelas air, menatapnya penuh pengertian. 'Kau pasti sangat lelah melalui ini. Mari kita bicara tentang apa yang membuatmu selalu kembali ke sana.'", weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_043",
    kind: "singleChoice",
    domain: "identity",
    prompt: "Sebuah ide besar yang kau simpan bertahun-tahun tiba-tiba dipakai orang lain dan mereka menuai sukses besar. Kau melihatnya di berita pagi.",
    options: [
      { id: "c043_opt_ni", text: "Aku tersenyum tipis. Aku sudah melihat potensi itu sejak lama, hanya saja dunia baru siap menerimanya sekarang. Aku sudah lanjut ke ide berikutnya.", weights: { cognitive: { Ni: 3, Ti: 1 }, stackRole: { dominant: 3, trickster: -1 }, mbtiAxis: { N: 2, J: 1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c043_opt_fi", text: "Aku merasa kehilangan sebuah bagian dari diriku. Itu bukan sekadar ide, itu adalah ekspresi jiwaku yang dicuri di depan mata.", weights: { cognitive: { Fi: 3, Si: 1 }, stackRole: { inferior: 3, critical: -1 }, mbtiAxis: { F: 2, I: 2 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c043_opt_te", text: "Aku segera mencari celah hukum dan bukti orisinalitas rancanganku. Jika aku bisa membuktikan hak paten, aku akan menuntut hak kompensasiku.", weights: { cognitive: { Te: 3, Si: 1 }, stackRole: { auxiliary: 3, opposing: -1 }, mbtiAxis: { T: 2, J: 2 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c043_opt_ne", text: "Aku terinspirasi. Jika mereka bisa mewujudkannya, berarti aku punya bukti valid bahwa konsepku brilian. Aku akan buat versi yang jauh lebih revolusioner.", weights: { cognitive: { Ne: 3, Ti: 1 }, stackRole: { transformative: 3, auxiliary: -1 }, mbtiAxis: { N: 2, P: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_044",
    kind: "singleChoice",
    domain: "work",
    prompt: "Bos menugaskanmu memimpin tim yang terdiri dari orang-orang yang tidak pernah akur satu sama lain. Suasana ruangan saat kau masuk sangat dingin.",
    options: [
      { id: "c044_opt_fe", text: "Aku mengajak mereka makan siang bersama tanpa agenda kerja. Aku ingin mendengar langsung apa yang membuat mereka saling membenci agar kita bisa membangun kembali rasa percaya.", weights: { cognitive: { Fe: 3, Si: 1 }, stackRole: { dominant: 3, critical: -1 }, mbtiAxis: { F: 2, E: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c044_opt_ti", text: "Aku memberikan aturan main baru yang ketat: setiap konflik harus diselesaikan lewat data dan bukti, bukan perasaan. Yang tidak produktif akan langsung dipindahkan.", weights: { cognitive: { Ti: 3, Te: 1 }, stackRole: { opposing: 3, auxiliary: -1 }, mbtiAxis: { T: 2, I: 2 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c044_opt_se", text: "Aku menunjuk tugas konkret untuk masing-masing orang. Fokus kita adalah menyelesaikan order hari ini. Konflik mereka tidak relevan dengan target produksi.", weights: { cognitive: { Se: 3, Te: 1 }, stackRole: { transformative: 3, tertiary: -1 }, mbtiAxis: { S: 2, E: 1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c044_opt_si", text: "Aku meminta mereka untuk mengerjakan prosedur standar yang sudah terbukti berhasil. Jika kita mengikuti alur yang benar, gesekan pribadi akan berkurang dengan sendirinya.", weights: { cognitive: { Si: 3, Fe: 1 }, stackRole: { auxiliary: 3, inferior: -1 }, mbtiAxis: { S: 2, J: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_045",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau menemukan pintu darurat yang tidak terkunci di sebuah gedung tinggi, padahal akses ke sana seharusnya dibatasi dengan kartu kunci.",
    options: [
      { id: "c045_opt_ti", text: "Aku mencoba masuk. Aku perlu tahu apakah sistem keamanan gedung ini memang cacat atau ini hanya jebakan untuk melacak karyawan yang menyelinap.", weights: { cognitive: { Ti: 3, Ni: 1 }, stackRole: { opposing: 3, critical: -1 }, mbtiAxis: { T: 2, I: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c045_opt_se", text: "Aku melihat pemandangan kota yang luar biasa dari balik pintu itu. Aku mengambil beberapa foto untuk dokumentasi pribadi sebelum menutupnya kembali.", weights: { cognitive: { Se: 3, Fi: 1 }, stackRole: { transformative: 3, tertiary: -1 }, mbtiAxis: { S: 2, P: 2 }, evidence: 3, positive: 2, negative: -1, reliability: 2 } },
      { id: "c045_opt_te", text: "Ini adalah ancaman keamanan. Aku langsung memfoto kerusakan kunci tersebut dan mengirimkannya ke bagian pemeliharaan gedung untuk diperbaiki hari ini juga.", weights: { cognitive: { Te: 3, Si: 1 }, stackRole: { dominant: 3, trickster: -1 }, mbtiAxis: { T: 2, J: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c045_opt_fe", text: "Aku tidak masuk. Aku mengunci pintu tersebut dan berjaga di depan sampai petugas keamanan datang, karena aku khawatir ada orang lain yang masuk dan celaka.", weights: { cognitive: { Fe: 3, Ni: 1 }, stackRole: { auxiliary: 3, inferior: -1 }, mbtiAxis: { F: 2, J: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_046",
    kind: "singleChoice",
    domain: "identity",
    prompt: "Temanmu bertanya, 'Apa arti hidup bagimu?' di tengah heningnya perjalanan kereta malam.",
    options: [
      { id: "c046_opt_ni", text: "Arti hidup adalah evolusi. Kita terus bergerak menuju bentuk terbaik dari diri kita, dan setiap kesulitan adalah bagian dari proses transformasi tersebut.", weights: { cognitive: { Ni: 3, Fi: 1 }, stackRole: { dominant: 3, opposing: -1 }, mbtiAxis: { N: 2, I: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c046_opt_ne", text: "Hidup itu seperti kanvas kosong. Tidak ada arti pasti; kita bebas menggambar apa saja yang kita inginkan dan mengubahnya kapan pun kita bosan.", weights: { cognitive: { Ne: 3, Ti: 1 }, stackRole: { transformative: 3, trickster: -1 }, mbtiAxis: { N: 2, P: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c046_opt_si", text: "Hidup adalah tentang menjaga akar kita. Keluarga, kenangan masa kecil, dan nilai-nilai yang ditanamkan orang tua adalah pegangan yang membuat kita tetap manusiawi.", weights: { cognitive: { Si: 3, Fe: 1 }, stackRole: { auxiliary: 3, inferior: -1 }, mbtiAxis: { S: 2, J: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c046_opt_te", text: "Hidup adalah tentang pencapaian. Kita lahir, kita bekerja, dan kita meninggalkan dampak nyata bagi dunia. Jika tidak ada yang dicapai, hidup jadi sia-sia.", weights: { cognitive: { Te: 3, Ni: 1 }, stackRole: { critical: 3, dominant: -1 }, mbtiAxis: { T: 2, J: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_047",
    kind: "singleChoice",
    domain: "work",
    prompt: "Kau menemukan dokumen rahasia perusahaan yang menyatakan timmu akan dibubarkan bulan depan demi efisiensi anggaran.",
    options: [
      { id: "c047_opt_ti", text: "Aku menganalisis angka-angka di dokumen itu. Jika mereka membubarkan tim sekarang, justru pengeluaran akan membengkak. Aku akan menyiapkan data untuk melawan keputusan itu.", weights: { cognitive: { Ti: 3, Te: 1 }, stackRole: { opposing: 3, auxiliary: -1 }, mbtiAxis: { T: 2, I: 2 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c047_opt_fi", text: "Aku merasa hancur. Aku akan mulai mencari pekerjaan baru diam-diam dan membantu teman-temanku mempersiapkan diri sebelum kabar ini meledak.", weights: { cognitive: { Fi: 3, Ni: 1 }, stackRole: { inferior: 3, tertiary: -1 }, mbtiAxis: { F: 2, I: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c047_opt_fe", text: "Aku tidak akan membocorkannya, tapi aku akan memastikan tim tetap tenang dan bekerja baik hingga saat terakhir, menjaga moral mereka agar tetap terjaga.", weights: { cognitive: { Fe: 3, Si: 1 }, stackRole: { dominant: 3, trickster: -1 }, mbtiAxis: { F: 2, E: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c047_opt_se", text: "Aku langsung mencari bos dan menanyakan apakah ini benar. Jika ia berbohong, aku sudah punya rencanaku sendiri untuk segera keluar dari gedung ini.", weights: { cognitive: { Se: 3, Te: 1 }, stackRole: { transformative: 3, dominant: -1 }, mbtiAxis: { S: 2, P: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  },
  {
    id: "core_048",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Saat berjalan di trotoar, seseorang menabrakmu hingga ponselmu jatuh ke selokan air.",
    options: [
      { id: "c048_opt_se", text: "Aku refleks menangkap tangannya sebelum dia pergi. 'Ponselku masuk selokan karena kau! Lihat apa yang kau lakukan!'", weights: { cognitive: { Se: 3, Fi: 1 }, stackRole: { transformative: 3, inferior: -1 }, mbtiAxis: { S: 2, P: 2 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c048_opt_ti", text: "Aku menghitung cepat berapa nilai ponsel itu dibanding energi yang akan habis jika aku mengejarnya. Aku membiarkannya pergi dan fokus mencari cara mengambil ponselku.", weights: { cognitive: { Ti: 3, Ni: 1 }, stackRole: { opposing: 3, auxiliary: -1 }, mbtiAxis: { T: 2, I: 2 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } },
      { id: "c048_opt_fe", text: "Orang itu tampak panik dan meminta maaf dengan gemetar. Aku menenangkan dia, 'Tidak apa-apa, ini kecelakaan. Mari bantu saya ambil ponselnya saja.'", weights: { cognitive: { Fe: 3, Si: 1 }, stackRole: { dominant: 3, trickster: -1 }, mbtiAxis: { F: 2, E: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c048_opt_si", text: "Aku merasa sial sekali. Ini ponsel yang kubeli dengan susah payah tahun lalu. Aku mengambil dahan kayu dan mulai mengorek selokan dengan sangat teliti.", weights: { cognitive: { Si: 3, Fi: 1 }, stackRole: { auxiliary: 3, inferior: -1 }, mbtiAxis: { S: 2, J: 2 }, evidence: 2, positive: 1, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_049",
    kind: "singleChoice",
    domain: "moral",
    prompt: "Seorang teman memintamu untuk menutupi kesalahan fatal yang dia lakukan di kantor, karena dia terancam dipecat jika kau tidak bicara.",
    options: [
      { id: "c049_opt_ti", text: "Aku menolak. 'Aku tidak bisa menanggung risiko karierku sendiri untuk kesalahan yang kau buat secara sadar. Aku akan bicara apa adanya jika ditanya.'", weights: { cognitive: { Ti: 3, Te: 1 }, stackRole: { opposing: 3, critical: -1 }, mbtiAxis: { T: 2, I: 2 }, evidence: 3, positive: 1, negative: -2, reliability: 2 } },
      { id: "c049_opt_fi", text: "Aku merasa terjepit, tapi aku tetap memilih diam. 'Aku tidak akan membantumu, tapi aku juga tidak akan menghancurkanmu. Selesaikan ini sendiri.'", weights: { cognitive: { Fi: 3, Ni: 1 }, stackRole: { inferior: 3, tertiary: -1 }, mbtiAxis: { F: 2, I: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } },
      { id: "c049_opt_fe", text: "Aku berbicara dengan atasan atas nama teman itu, mengakui kesalahannya sebagai tanggung jawab bersama tim agar dia tidak langsung dipecat.", weights: { cognitive: { Fe: 3, Si: 1 }, stackRole: { dominant: 3, trickster: -1 }, mbtiAxis: { F: 2, E: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c049_opt_te", text: "Aku memaksa dia untuk melapor sendiri ke atasan sekarang juga. 'Jika kau tidak melakukannya, aku yang akan melaporkannya agar tim tidak menanggung akibatnya.'", weights: { cognitive: { Te: 3, Si: 1 }, stackRole: { critical: 3, auxiliary: -1 }, mbtiAxis: { T: 2, J: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } }
    ]
  },
  {
    id: "core_050",
    kind: "singleChoice",
    domain: "identity",
    prompt: "Kau diberi kesempatan untuk menghapus satu penyesalan terbesar dalam hidupmu.",
    options: [
      { id: "c050_opt_ni", text: "Aku tidak ingin menghapus apa pun. Penyesalan adalah guru terbaik yang membawaku ke titik ini. Tanpa itu, aku tidak akan pernah belajar.", weights: { cognitive: { Ni: 3, Fi: 1 }, stackRole: { dominant: 3, opposing: -1 }, mbtiAxis: { N: 2, I: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c050_opt_ne", text: "Aku menghapus satu kesalahan konyol di masa lalu hanya untuk melihat seperti apa jadinya jika hidupku berjalan di jalur yang berbeda sepenuhnya.", weights: { cognitive: { Ne: 3, Ti: 1 }, stackRole: { transformative: 3, trickster: -1 }, mbtiAxis: { N: 2, P: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c050_opt_si", text: "Aku menghapus kejadian di mana aku menyakiti orang yang kucintai. Aku ingin memperbaiki momen itu agar hubungan kami tidak pernah rusak hingga saat ini.", weights: { cognitive: { Si: 3, Fe: 1 }, stackRole: { auxiliary: 3, inferior: -1 }, mbtiAxis: { S: 2, J: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 } },
      { id: "c050_opt_te", text: "Aku menghapus keputusan karier yang salah. Jika aku bisa mengulang waktu, aku akan memilih jalan yang memberikan keuntungan lebih besar bagi masa depanku.", weights: { cognitive: { Te: 3, Se: 1 }, stackRole: { critical: 3, dominant: -1 }, mbtiAxis: { T: 2, J: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 } }
    ]
  }
];

```
