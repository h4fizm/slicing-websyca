// Pop-Up Logout
function logout() {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "yes",
    denyButtonText: `no`,
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: "https://startyourcontentacademy.com/sign_in/logout",
        type: "GET",
        dataType: "JSON",
        async: true,
        success: function (response) {
          location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          ajaxErrRes(jqXHR, textStatus, errorThrown);
        },
      });
    }
  });
}

// Mobile Menu Toggle
function doMenu() {
  const mobileMenu = document.querySelector(".popup-mobile-menu");
  if (mobileMenu) {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || !mobileMenu.style.display
        ? "block"
        : "none";
  }
}

// Close Mobile Menu
document.querySelector(".close-button")?.addEventListener("click", () => {
  document.querySelector(".popup-mobile-menu").style.display = "none";
});

// Fungsi untuk menampilkan menu di mode HP
function doMenu() {
  $(".content-hp-play").hide();
  $(".content-hp-menu").show();
}

// Event listener untuk input pencarian
$("#search_val").keyup(function () {
  search();
});

// Fungsi untuk melakukan pencarian
async function search() {
  let search_val = $("#search_val").val();
  var url =
    "https://startyourcontentacademy.com/Api/search?search=" + search_val;

  await $.ajax({
    url: url,
    type: "GET",
    dataType: "JSON",
    async: true,
    success: function (response) {
      $(".resultView").html(response.view);
    },
  });
}

// Variabel global untuk pagination dan parameter pencarian
var page = 0; // Melacak halaman saat ini untuk fitur pagination
let cate = "all"; // Menyimpan kategori yang sedang dipilih
let filter = "all"; // Menyimpan filter yang diterapkan
let myCourseCategory = "all"; // Menyimpan kategori kursus pengguna

// Fungsi yang dijalankan setelah DOM siap
$(document).ready(function () {
  // Menjalankan fungsi pencarian kursus pertama kali saat halaman dimuat
  Csearch();

  // Event listener untuk mengganti kategori kursus
  $(document).on("change", "#category", function () {
    page = 0; // Reset ke halaman awal
    Csearch(); // Panggil ulang fungsi pencarian
  });

  // Event listener untuk memilih kategori kursus milik pengguna
  $(document).on("click", ".b-my-course-category", function () {
    myCourseCategory = $(this).data("category-name"); // Ambil kategori dari atribut data
    Csearch("", "", cate, filter, myCourseCategory); // Panggil ulang pencarian dengan parameter baru
  });

  // Event listener untuk menerapkan filter pencarian
  $(document).on("click", ".b-filter", function () {
    filter = $(this).data("filter-name"); // Ambil filter dari atribut data
    page = 0; // Reset ke halaman awal
    Csearch("", "", cate, filter, myCourseCategory); // Panggil ulang pencarian
  });

  // Event listener untuk memilih kategori utama
  $(document).on("click", ".b-category", function () {
    cate = $(this).data("category-name"); // Ambil kategori dari atribut data
    page = 0; // Reset ke halaman awal
    Csearch("", "", cate, filter, myCourseCategory); // Panggil ulang pencarian
  });
});

// Fungsi untuk melakukan pencarian kursus
async function Csearch(f, b, cate, filter, myCourseCategory) {
  // Mengatur default parameter jika tidak diberikan
  if (typeof b != "undefined") page = f; // Jika parameter b diberikan, gunakan untuk pagination
  if (typeof cate == "undefined") cate = "all"; // Default kategori adalah 'all'
  if (typeof myCourseCategory == "undefined") myCourseCategory = "all"; // Default kategori pengguna adalah 'all'
  if (typeof filter == "undefined") filter = "all"; // Default filter adalah 'all'

  // Membentuk URL untuk request AJAX
  let url =
    "https://startyourcontentacademy.com/course/courseView?page=" +
    page +
    "&category=" +
    encodeURIComponent(cate) +
    "&my-course-category=" +
    encodeURIComponent(myCourseCategory) +
    "&filter=" +
    encodeURIComponent(filter) +
    "&search=";

  // Melakukan request AJAX untuk mendapatkan data kursus
  await $.ajax({
    url: url, // URL API
    type: "GET", // Metode HTTP
    dataType: "JSON", // Format data yang diharapkan
    async: true, // Request dilakukan secara asinkron
    success: function (response) {
      // Menampilkan hasil pencarian di elemen HTML tertentu
      $("#myCourseView").html(response.myCourseView); // Menampilkan kursus pengguna
      $("#cView").html(response.view); // Menampilkan kursus sesuai filter/kategori
      $("#cViewHelp").html(response.viewHelp); // Menampilkan bantuan terkait kursus

      // Menambahkan nomor halaman untuk pagination berikutnya
      page += 1;

      // Mengaktifkan animasi scroll (plugin sal.js)
      const scrollAnimations = sal();
      scrollAnimations.enable();

      // Menyimpan riwayat pencarian di URL
      setHistory(
        "course?category=" +
          encodeURIComponent(cate) +
          "&my-course-category=" +
          encodeURIComponent(myCourseCategory) +
          "&filter=" +
          encodeURIComponent(filter) +
          "&search="
      );
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // Menangani error jika request AJAX gagal
      ajaxErrRes(jqXHR, textStatus, errorThrown);
    },
  });
}

// Fungsi untuk memastikan elemen footer sudah dimuat
document.addEventListener("DOMContentLoaded", function () {
  console.log("Footer area loaded successfully.");
  // Tambahkan logika tambahan jika diperlukan
});

// Site Script Course 1
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);

fbq("init", "800225455535758");
fbq("track", "PageView");
