import type { QuestionItem } from "../types";

export const CORE_QUESTIONS: QuestionItem[] = [
  {
    id: "core_001",
    kind: "singleChoice",
    domain: "family",
    prompt: "Minggu pagi di rumah. Kau menemukan sebuah kardus tua berisi barang-barang usang di sudut ruang tengah. Salah satu anggota keluarga lewat dan bergumam, 'Buang saja, sudah jadi sampah.' Kau menatap sebuah jam beker rusak di tumpukan paling atas.",
    options: [
      {
        id: "c001_opt_si_s",
        text: "Aku mengambil jam itu, mengusap debunya perlahan, lalu menyisihkannya ke meja. 'Ini dulu punya cerita, sayang kalau dibuang begitu saja,' ucapku.",
        weights: { cognitive: { Si: 3, Fe: 1, Ne: -1 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c001_opt_se_s",
        text: "Aku berjongkok, membongkar seluruh isi kardus itu di lantai untuk melihat apakah ada barang lain yang masih bisa kupakai atau kuutak-atik sekarang juga.",
        weights: { cognitive: { Se: 3, Ti: 1, Ni: -1 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c001_opt_ni_n",
        text: "Aku menatap tumpukan itu sejenak. Aku sudah membayangkan bagaimana sudut ruangan ini akan terlihat jauh lebih lega dan estetis jika kardus ini menyingkir, jadi aku langsung membuangnya.",
        weights: { cognitive: { Ni: 3, Te: 1, Se: -1 }, mbtiAxis: { N: 2, J: 2, S: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c001_opt_ne_n",
        text: "Aku memegang jam rusak itu dan tertawa. Aku mulai mengarang cerita spontan kepada orang rumah tentang bagaimana jam ini sebenarnya adalah alat pengendali waktu yang kehabisan baterai.",
        weights: { cognitive: { Ne: 3, Fi: 1, Si: -1 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_002",
    kind: "multiChoice",
    domain: "work",
    maxSelect: 2,
    prompt: "Meja kerjamu penuh dengan kertas coretan. Di layar monitor, notifikasi grup terus berbunyi—semua orang saling menyalahkan karena data proyek besok hilang. Di seberang meja, satu rekan timmu hanya duduk menunduk diam tanpa suara.",
    options: [
      {
        id: "c002_opt_te_t",
        text: "Aku merebut kendali situasi. Aku mengetik di grup: 'Berhenti berdebat. Kita bagi ulang tugas dari nol, kumpulkan bagian masing-masing dalam dua jam.'",
        weights: { cognitive: { Te: 3, Ni: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c002_opt_fe_f",
        text: "Aku menaruh pulpen, menepuk bahu rekanku yang diam itu, lalu mengirim pesan ke grup: 'Kita jeda sepuluh menit. Tarik napas dulu, jangan ada yang menyalahkan siapa pun.'",
        weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, J: 1, T: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c002_opt_ti_t",
        text: "Aku membiarkan grup itu berisik. Aku diam-diam membuka direktori sistem dan menelusuri log logis satu per satu untuk mencari celah di mana data itu tersangkut.",
        weights: { cognitive: { Ti: 3, Ne: 1, Fe: -1 }, mbtiAxis: { T: 2, P: 2, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c002_opt_fi_f",
        text: "Aku membisukan notifikasi yang toxic itu. Aku menyingkirkan kertas di mejaku dan mulai mengerjakan bagianku sendiri dulu; aku menolak terseret dalam kepanikan kolektif yang tak berguna.",
        weights: { cognitive: { Fi: 3, Se: 1, Te: -1 }, mbtiAxis: { F: 2, P: 1, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 }
      }
    ]
  },
  {
    id: "core_003",
    kind: "singleChoice",
    domain: "stress",
    prompt: "Kau sedang berada di sebuah lobi gedung tertutup. Tiba-tiba alarm darurat melengking memekakkan telinga. Lampu berkedip mati. Orang-orang mulai berlarian panik dan saling bertabrakan. Jantungmu berdegup sangat kencang.",
    options: [
      {
        id: "c003_opt_dom_se",
        text: "Tubuhku bereaksi sebelum pikiranku. Aku menerobos kerumunan, mataku langsung mengunci letak tanda 'Keluar' merah menyala, dan aku menarik orang terdekat bersamaku.",
        weights: { stackRole: { dominant: 3, auxiliary: 1, inferior: -1 }, cognitive: { Se: 2, Te: 1 }, stress: { confrontation: 3 }, evidence: 3, positive: 2, negative: -1, reliability: 3 }
      },
      {
        id: "c003_opt_dom_si",
        text: "Gerakanku refleks merendah ke lantai. Ingatanku langsung memanggil peta evakuasi yang kulihat sekilas saat masuk tadi, memanduku ke arah tangga darurat.",
        weights: { stackRole: { dominant: 3, opposing: 1, trickster: -1 }, cognitive: { Si: 2, Te: 1 }, stress: { withdrawal: 2 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c003_opt_inf_te",
        text: "Aku membeku sejenak karena suara bising itu sangat menguasai kepalaku. Aku menekan emosiku dalam-dalam dan berteriak marah menyuruh orang-orang agar tidak saling dorong.",
        weights: { stackRole: { inferior: 3, dominant: 1, tertiary: -1 }, cognitive: { Te: 2, Fi: 2 }, stress: { confrontation: 2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 }
      },
      {
        id: "c003_opt_dom_ne",
        text: "Kepalaku seketika dipenuhi berbagai skenario terburuk dan jalan keluar alternatif. Mataku menyapu sekitar mencari benda berat apa pun seandainya kaca pintu harus dipecahkan.",
        weights: { stackRole: { dominant: 3, inferior: 1, critical: -1 }, cognitive: { Ne: 2, Ti: 1 }, stress: { withdrawal: 1, confrontation: 1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_004",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Kau sedang menatap layar HP di kamar yang remang. Seseorang yang akhir-akhir ini terasa menjaga jarak tiba-tiba mengirim satu pesan singkat: 'Bisa bicara? Ada yang aneh.' Titik kedip-kedip penanda ia sedang mengetik muncul lama, lalu menghilang tanpa tambahan kata.",
    options: [
      {
        id: "c004_opt_ni",
        text: "Aku meletakkan HP di dada, menutup mata. Instingku langsung merangkai semua kepingan obrolan kami sebulan terakhir untuk menebak akar masalahnya sebelum aku mengetik balasan.",
        weights: { cognitive: { Ni: 3, Fe: 1, Se: -2 }, mbtiAxis: { N: 2, I: 1, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c004_opt_ne",
        text: "Pikiranku seketika meledak dengan lima skenario berbeda tentang apa arti 'aneh' itu. Aku mengetik, menghapus, lalu mengetik lagi sampai akhirnya membalas singkat, 'Kenapa? Ada apa?'",
        weights: { cognitive: { Ne: 3, Ti: 1, Si: -2 }, mbtiAxis: { N: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c004_opt_ti",
        text: "Aku menaruh HP itu menghadap ke bawah. Aku akan menunggu dia selesai merumuskan kalimat lengkapnya. Bereaksi pada asumsi yang masih menggantung hanya membuang energi logisku.",
        weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 }
      },
      {
        id: "c004_opt_fe",
        text: "Aku langsung menekan tombol panggilan. Menunggu teks balasan yang ragu-ragu itu terlalu menyiksa bagi kami berdua; mendengar nada suaranya akan menjernihkan segalanya saat ini juga.",
        weights: { cognitive: { Fe: 3, Se: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_005",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau berdiri di bawah kanopi halte yang bocor. Hujan turun menderas, taksi onlinemu membatalkan pesanan untuk ketiga kalinya, dan di dalam tasmu, ujung dokumen penting sudah mulai basah tersiram air.",
    options: [
      {
        id: "c005_opt_te",
        text: "Aku langsung membalikkan badan, berjalan setengah berlari ke minimarket terdekat untuk membeli payung dan map plastik tertutup. Rencana penyelamatan harus dieksekusi sekarang juga.",
        weights: { cognitive: { Te: 3, Se: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c005_opt_si",
        text: "Aku merapatkan jaket dan mundur ke sudut yang paling kering. Ingatanku memanggil rutinitas bus kota yang selalu lewat jalan ini setiap jam empat sore; aku akan menunggu itu saja.",
        weights: { cognitive: { Si: 3, Te: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 1, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c005_opt_se",
        text: "Aku tertawa pelan melihat betapa absurdnya nasibku hari ini. Aku mengangkat tasku tinggi-tinggi ke atas kepala dan nekat menerobos hujan deras menuju stasiun terdekat.",
        weights: { cognitive: { Se: 3, Ti: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 1, negative: -2, reliability: 2 }
      },
      {
        id: "c005_opt_ne",
        text: "Aku melihat lampu neon kedai kopi kecil di seberang jalan yang berkedip. Aku memutuskan membatalkan pertemuan hari ini, berlari ke sana, dan mengubah lokasi kerjaku dari sana saja.",
        weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_006",
    kind: "singleChoice",
    domain: "work",
    prompt: "Ruang rapat terasa membeku. Atasanmu baru saja menyalahkan rekanmu secara terbuka atas kegagalan proyek yang kau tahu persis adalah murni kesalahan sistem server perusahaan. Rekanmu hanya menunduk menggenggam pulpennya erat-erat.",
    options: [
      {
        id: "c006_opt_fi_i",
        text: "Dadaku berdebar keras, tapi nuraniku menolak diam melihat ketidakadilan. Aku berdeham, menatap meja, lalu berkata pelan namun tak tergoyahkan, 'Itu bukan sepenuhnya salah dia. Sistem yang eror kemarin.'",
        weights: { cognitive: { Fi: 3, Te: 1, Fe: -1 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c006_opt_fe_e",
        text: "Aku menatap atasan langsung dan memotong ketegangan dengan nada yang diatur agar menenangkan ruang. 'Biar saya bantu perbaiki datanya sekarang, Pak. Kita selesaikan dulu agar klien tidak tertunda.'",
        weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c006_opt_ti_i",
        text: "Aku menarik napas, membuka laptop, dan memutar layarnya ke arah atasan. 'Log teknis menunjukkan anomali data terjadi dua jam sebelum file ini sampai di tangannya,' ucapku memaparkan fakta logis.",
        weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c006_opt_te_e",
        text: "Aku mengabaikan rasa canggung emosional di ruangan. Aku berdiri sedikit, menunjuk ke layar proyektor, 'Tidak ada efisiensinya mencari siapa yang salah. Kita rombak ulang prosedur servernya hari ini agar tidak jebol lagi.'",
        weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 }
      }
    ]
  },
  {
    id: "core_007",
    kind: "singleChoice",
    domain: "friendship",
    prompt: "Di sudut kafe yang temaram, suara mesin kopi berdesis pelan. Seseorang di hadapanmu yang sejak tadi tertawa renyah mendadak terdiam setelah melirik satu pesan di layar HP-nya. Nada suaranya berubah datar, senyumnya lenyap seketika.",
    options: [
      {
        id: "c007_opt_fe",
        text: "Aku segera menuangkan teh ke cangkirnya, mencondongkan tubuh ke depan, lalu bertanya dengan suara sepelan mungkin, 'Ada sesuatu yang mendadak menahan pikiranmu?'",
        weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 1, T: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c007_opt_si",
        text: "Aku langsung menyadari perubahan ritmenya yang drastis. Aku membiarkannya diam sejenak sambil merunut ulang di kepalaku, mencoba memastikan apakah aku salah bicara lima menit yang lalu.",
        weights: { cognitive: { Si: 3, Ti: 1, Ne: -1 }, mbtiAxis: { S: 2, I: 1, P: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c007_opt_ni",
        text: "Aku menatap matanya sekilas, pikiranku secara otomatis merangkai pola tebakan tentang siapa yang berani merusak suasana di jam seperti ini. Aku tidak memaksa bertanya, hanya menunggu ia bersuara.",
        weights: { cognitive: { Ni: 3, Te: 1, Se: -2 }, mbtiAxis: { N: 2, J: 1, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c007_opt_se",
        text: "Aku menepuk meja pelan untuk memecah lamunannya, menyodorkan daftar menu pencuci mulut ke arahnya. 'Coba lihat ini, kayaknya kita butuh pesanan manis tambahan sekarang juga.'",
        weights: { cognitive: { Se: 3, Fi: 1, Ni: -2 }, mbtiAxis: { S: 2, P: 1, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_008",
    kind: "singleChoice",
    domain: "work",
    prompt: "Ruang persiapan tampak seperti kapal pecah. Di atas meja panjang, tumpukan berkas penting berserakan parah, bercampur aduk dengan bungkus sisa makanan ringan. Tenggat waktu pengiriman tinggal satu jam, dan kepanikan mulai merayap naik.",
    options: [
      {
        id: "c008_opt_te",
        text: "Aku menarik napas panjang dan langsung mengambil kendali. Aku menunjuk dua orang, 'Kamu kumpulkan yang di dekat jendela, kamu buang sampahnya. Aku akan mengurutkan alfabetnya di meja utama ini.'",
        weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c008_opt_ti",
        text: "Aku sama sekali mengabaikan kekacauan sampahnya dulu. Aku memisahkan dokumen murni berdasarkan format stempelnya untuk memastikan kerangka datanya tidak ada yang bentrok secara logika.",
        weights: { cognitive: { Ti: 3, Ne: 1, Fe: -2 }, mbtiAxis: { T: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -2, reliability: 2 }
      },
      {
        id: "c008_opt_si",
        text: "Aku duduk di kursi sudut, mengambil tumpukan pertama, dan mulai menyortirnya lembar demi lembar dengan teliti dari awal hingga akhir, memastikan tidak ada satu pun urutan nomor yang terlewat.",
        weights: { cognitive: { Si: 3, Fe: 1, Ne: -2 }, mbtiAxis: { S: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c008_opt_ne",
        text: "Mataku menyapu tumpukan itu dan sebuah ide efisien seketika melompat. 'Bagaimana kalau kita foto langsung saja secara acak pakai ponsel, lalu biarkan sistem folder aplikasi yang menyortirnya otomatis?'",
        weights: { cognitive: { Ne: 3, Ti: 1, Si: -2 }, mbtiAxis: { N: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_009",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Malam sudah sangat larut dan kau bersiap mematikan lampu kamar. Tiba-tiba, seorang teman membunyikan klakson pelan di depan rumahmu. Ia menurunkan kaca jendela mobil, menyuruhmu masuk sekarang juga tanpa menyebutkan tujuannya.",
    options: [
      {
        id: "c009_opt_se_dom",
        text: "Aku tertawa pelan, menyambar jaket terdekat dari gantungan, dan langsung melompat ke kursi penumpang. Sensasi laju kendaraan malam dan udara terbuka adalah kebebasan yang kubutuhkan.",
        weights: { cognitive: { Se: 3, Fi: 1, Ni: -1 }, mbtiAxis: { S: 2, P: 2, J: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c009_opt_ne_dom",
        text: "Otakku langsung memproyeksikan lima kemungkinan petualangan absurd. Aku mengunci pintu rumah sambil berteriak pelan antusias, 'Kita mau ke mana? Berburu hantu atau cari sarapan kepagian?'",
        weights: { cognitive: { Ne: 3, Ti: 1, Si: -1 }, mbtiAxis: { N: 2, P: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c009_opt_inf_pull",
        text: "Ada jeda di mana nuraniku ragu, tapi dorongan aneh di dalam dada membuatku ingin sesekali memberontak dari rutinitas. Aku memakai sepatuku, meski tahu besok aku pasti akan mengeluh kelelahan.",
        weights: { cognitive: { Fi: 2, Fe: 1, Te: -1 }, mbtiAxis: { F: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c009_opt_inf_block",
        text: "Aku merasa jengkel karena jam istirahatku dihancurkan mendadak. Aku melipat tangan di dada, menggeleng tajam, dan menolak mentah-mentah ajakan yang sama sekali tidak memiliki rencana rasional itu.",
        weights: { cognitive: { Ti: 2, Si: 2, Ne: -1, Se: -1 }, mbtiAxis: { I: 2, J: 1, P: -2 }, evidence: 2, positive: 1, negative: -2, reliability: 2 }
      }
    ]
  },
  {
    id: "core_010",
    kind: "singleChoice",
    domain: "family",
    prompt: "Sore itu di beranda, ayah bercerita tentang masa mudanya yang penuh petualangan. Namun, saat ia menyebutkan nama sebuah kota tempat ia dulu bekerja, kau teringat foto tua di album ibu yang menunjukkan tempat itu adalah daerah terlarang baginya saat itu.",
    options: [
      {
        id: "c010_opt_si",
        text: "Aku mengangguk-angguk sambil menyimak detail ceritanya, namun aku diam-diam menghitung rentang tahun yang ia sebutkan dengan catatan di kepalaku, memastikan apakah urutan waktunya masuk akal.",
        weights: { cognitive: { Si: 3, Ti: 1, Ne: -1 }, mbtiAxis: { S: 2, J: 1, N: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c010_opt_ni",
        text: "Aku menatap kosong ke cangkir teh, merasakan ada yang tidak sinkron. Aku tidak memotong ceritanya, tapi instingku mencium ada narasi tersembunyi yang sengaja ia tutup-tutupi.",
        weights: { cognitive: { Ni: 3, Fi: 1, Se: -1 }, mbtiAxis: { N: 2, I: 1, E: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c010_opt_fi",
        text: "Aku merasakan tusukan tidak nyaman di dada. Aku tidak peduli pada fakta sejarahnya, tapi aku merasa sedih membayangkan ibu yang mungkin selama ini menyimpan rahasia di balik senyum ayah.",
        weights: { cognitive: { Fi: 3, Ni: 1, Te: -2 }, mbtiAxis: { F: 2, I: 1, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c010_opt_fe",
        text: "Aku langsung mengalihkan pembicaraan dengan menanyakan detail resep camilan yang ayah sukai saat itu, memastikan suasana tetap hangat tanpa perlu mengungkit kejanggalan yang memicu konflik.",
        weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_011",
    kind: "singleChoice",
    domain: "work",
    prompt: "Di tengah lobi kantor yang dipenuhi suara telepon dan lalu-lalang orang, klienmu menarik tanganmu. 'Saya butuh keputusan sekarang: tetap dengan vendor lama atau ganti yang baru hari ini? Cepat!'",
    options: [
      {
        id: "c011_opt_se",
        text: "Aku tidak membuang waktu. Aku memegang lengannya, menariknya ke jendela lobi, dan menunjuk langsung ke vendor baru yang sedang siaga di depan. 'Ganti sekarang, mereka sudah siap di sana!'",
        weights: { cognitive: { Se: 3, Te: 1, Ni: -2 }, mbtiAxis: { E: 2, P: 1, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c011_opt_te",
        text: "Aku membuka catatan di ponsel, menyorot dua angka perbandingan biaya. 'Vendor lama lebih stabil, tapi vendor baru lebih cepat 30%. Ganti yang baru demi hasil akhir!'",
        weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, F: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c011_opt_ti",
        text: "Aku memejamkan mata sejenak, mengabaikan kebisingan. Aku membayangkan simulasi risiko kegagalan vendor baru. 'Tetap yang lama, risikonya terlalu besar jika kita ganti dalam hitungan menit.'",
        weights: { cognitive: { Ti: 3, Ni: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c011_opt_fe",
        text: "Aku tersenyum menenangkan, memegang bahunya agar ia tidak panik. 'Saya tahu Bapak cemas, tapi vendor lama sudah terbukti setia dengan tim kita selama ini. Mari kita pertahankan mereka.'",
        weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_012",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau sedang duduk di bangku taman. Di depanmu, seorang pelari terus berhenti di tiang yang sama, membenahi sepatunya, lalu mulai berlari lagi dengan cara yang persis sama. Kau memperhatikan bagaimana ia melakukannya tiga kali berturut-turut.",
    options: [
      {
        id: "c012_opt_ni",
        text: "Aku membayangkan ia bukan sekadar pelari, tapi seseorang yang sedang mengejar ketenangan batin yang hilang dari rutinitasnya yang sudah membosankan.",
        weights: { cognitive: { Ni: 3, Fe: 1, Se: -1 }, mbtiAxis: { N: 2, I: 1, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c012_opt_ne",
        text: "Aku bertanya-tanya apakah ia sedang mencoba melakukan ritual keberuntungan atau mungkin ada masalah teknis pada sepatunya yang ia nikmati sebagai tantangan kecil.",
        weights: { cognitive: { Ne: 3, Ti: 1, Si: -1 }, mbtiAxis: { N: 2, P: 1, J: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c012_opt_ti",
        text: "Aku memperhatikan sudut kaki saat ia mendarat. Ia jelas-jelas punya kesalahan biomekanik pada cara ia melangkah yang membuat sepatunya terus longgar setiap beberapa ratus meter.",
        weights: { cognitive: { Ti: 3, Ni: 1, Fe: -1 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c012_opt_fe",
        text: "Aku merasa cemas melihatnya terus berhenti. Aku berharap ia tidak merasa frustrasi atau diperhatikan oleh orang-orang di taman yang sedang lewat.",
        weights: { cognitive: { Fe: 3, Si: 1, Ti: -1 }, mbtiAxis: { F: 2, E: 1, I: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_013",
    kind: "singleChoice",
    domain: "work",
    prompt: "Rekan kerja menatapmu bingung setelah kau memberikan instruksi teknis yang menurutmu sangat mendasar. 'Bisa jelaskan lagi pelan-pelan? Aku masih belum menangkap maksudnya,' ujarnya sambil memegang dahi.",
    options: [
      {
        id: "c013_opt_ti",
        text: "Aku menghela napas, menunjuk kembali layar dengan jari, 'Logikanya sederhana: A mengalir ke B, jika B tersumbat maka C pasti mati. Lihat arah alurnya di sini.'",
        weights: { cognitive: { Ti: 3, Te: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c013_opt_te",
        text: "Aku mengambil kertas, menggambar bagan langkah-langkah yang harus dilakukan. 'Ini langkah satu, ini dua, selesai di tiga. Ikuti urutan ini saja, tidak perlu pusing dengan alur di baliknya.'",
        weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c013_opt_fe",
        text: "Aku tersenyum, menutup laptop sejenak agar ia tidak merasa terintimidasi. 'Maaf, saya tadi terlalu cepat. Bagaimana kalau kita bahas dari bagian yang paling masuk akal buatmu dulu?'",
        weights: { cognitive: { Fe: 3, Ni: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c013_opt_fi",
        text: "Aku merasa frustrasi karena harus mengulang hal yang sama, tapi aku tetap menjaga suara tetap rendah. 'Ini sangat penting bagi integritas proyek kita, mari coba sekali lagi bersama.'",
        weights: { cognitive: { Fi: 3, Ne: 1, Te: -2 }, mbtiAxis: { F: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_014",
    kind: "singleChoice",
    domain: "daily",
    prompt: "Kau memasuki ruang komunitas baru yang ramai dengan orang-orang yang belum pernah kau temui sebelumnya. Aroma kopi dan suara denting gelas memenuhi ruangan, dan semua orang tampak sudah akrab satu sama lain.",
    options: [
      {
        id: "c014_opt_se",
        text: "Aku langsung berjalan ke meja terdekat, menyapa orang di sana dengan senyum lebar, 'Hai, kopi di sini enak ya? Boleh gabung sebentar?'",
        weights: { cognitive: { Se: 3, Fe: 1, Ni: -2 }, mbtiAxis: { E: 2, P: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c014_opt_si",
        text: "Aku mencari sudut yang tenang, memperhatikan tata letak ruangan dan siapa orang yang paling banyak bicara, memastikan aku punya gambaran tempat ini sebelum mendekat.",
        weights: { cognitive: { Si: 3, Ti: 1, Ne: -2 }, mbtiAxis: { I: 2, J: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c014_opt_ne",
        text: "Aku membayangkan betapa uniknya kombinasi orang-orang di sini. Aku segera menghampiri kelompok yang paling berisik, berharap bisa mendengar ide-ide gila yang sedang mereka diskusikan.",
        weights: { cognitive: { Ne: 3, Fi: 1, Si: -2 }, mbtiAxis: { E: 2, N: 2, S: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c014_opt_ni",
        text: "Aku berdiri di ambang pintu, merasakan aura ruangan ini. Aku mencoba menebak apakah tempat ini adalah ruang bagi orang kreatif atau sekadar tempat orang melarikan diri dari kesibukan.",
        weights: { cognitive: { Ni: 3, Te: 1, Se: -2 }, mbtiAxis: { I: 2, N: 2, S: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      }
    ]
  },
  {
    id: "core_015",
    kind: "singleChoice",
    domain: "work",
    prompt: "Laporan bulanan sudah di tanganmu. Angkanya tampak sempurna, terlalu rapi bahkan. Tapi entah kenapa, saat kau menatap kolom total di halaman tiga, perutmu merasa tidak tenang seolah ada sesuatu yang ganjil.",
    options: [
      {
        id: "c015_opt_ni",
        text: "Aku menutup laporan itu, menutup mata, dan membiarkan intuisi bekerja. Angka itu tidak berbohong secara matematis, tapi ia 'berbohong' secara narasi operasional di lapangan.",
        weights: { cognitive: { Ni: 3, Ti: 1, Se: -2 }, mbtiAxis: { N: 2, I: 2, E: -1 }, evidence: 2, positive: 1, negative: -1, reliability: 2 }
      },
      {
        id: "c015_opt_ti",
        text: "Aku membuka dokumen mentah di komputer. Aku akan membedah setiap input data untuk mencari di titik mana kalkulasinya disesuaikan agar terlihat sesempurna ini.",
        weights: { cognitive: { Ti: 3, Se: 1, Fe: -2 }, mbtiAxis: { T: 2, I: 2, E: -1 }, evidence: 3, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c015_opt_fe",
        text: "Aku memanggil rekan yang menyusunnya dengan suara lembut. 'Data ini terlihat sangat bagus, tapi boleh kita cek lagi alur kerjanya agar saya bisa mengerti lebih dalam?'",
        weights: { cognitive: { Fe: 3, Si: 1, Ti: -2 }, mbtiAxis: { F: 2, E: 2, I: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      },
      {
        id: "c015_opt_te",
        text: "Aku membandingkan laporan ini dengan KPI bulan lalu. 'Sesuatu tidak sinkron di sini. Saya akan minta audit internal sekarang untuk melacak keaslian angka-angka ini.'",
        weights: { cognitive: { Te: 3, Si: 1, Fi: -2 }, mbtiAxis: { T: 2, J: 2, P: -1 }, evidence: 2, positive: 2, negative: -1, reliability: 2 }
      }
    ]
  }
];
