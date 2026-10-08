"use strict";

/*
 * =========================================
 * MAS MAIL DIGITAL
 * PORTFOLIO DATA
 *
 * SATU TEMPAT UNTUK DATA PORTFOLIO
 * =========================================
 */

const WHATSAPP_NUMBER = "6282253652317";

const DEFAULT_PURCHASE_URL =
    "https://lynk.id/ismail280701";


/* =========================================
   HELPER WHATSAPP
========================================= */

function createPortfolioWhatsApp(message) {

    const text =
        encodeURIComponent(
            message || ""
        );

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}


/* =========================================
   DATA PORTFOLIO
========================================= */

const portfolioData = {

    /* =====================================
       WEBSITE
    ===================================== */

    "website-alihsan": {

        type: "website",

        category: "website",

        categoryLabel: "WEBSITE",

        title:
            "Website Profil PonPes Al Ihsan",

        cardDescription:
            "Website profil pesantren dengan tampilan modern, responsif, dan informatif.",

        description:
            "Website profil pesantren dengan tampilan modern, responsif, dan dirancang agar informasi lembaga lebih mudah diakses.",

        about:
            "Website ini dibuat sebagai media informasi dan profil digital PonPes Al Ihsan. Struktur halaman dirancang agar pengunjung dapat mengenal pesantren, program, kegiatan, dan informasi penting lainnya dengan lebih nyaman.",

        highlights: [
            "Desain modern dan responsif",
            "Tampilan mobile-friendly",
            "Struktur halaman informatif",
            "Navigasi yang mudah digunakan",
            "Dapat diakses melalui internet"
        ],

        media: [
            {
                type: "image",
                src:
                    "Portofolio/website/websiteponpesalihsan.webp",
                alt:
                    "Website Profil PonPes Al Ihsan"
            }
        ],

        websiteUrl:
            "https://ponpesalihsanicu.my.id",

        whatsappMessage:
            "Halo Mas Mail, saya tertarik dengan jasa pembuatan website seperti Website Profil PonPes Al Ihsan."
    },


    /* =====================================
       CANVA TEMPLATE
    ===================================== */

    "poster-tahfidz": {

        type: "template",

        category: "canva",

        categoryLabel: "CANVA TEMPLATE",

        title:
            "Template Ucapan Selamat Tasmi' Hafalan Al-Qur'an",

        cardDescription:
            "Template Canva untuk kebutuhan ucapan dan publikasi Tasmi' hafalan Al-Qur'an.",

        description:
            "Template Canva untuk kebutuhan ucapan dan publikasi Tasmi' hafalan Al-Qur'an dengan desain yang siap digunakan.",

        about:
            "Template ini dibuat untuk membantu pesantren, sekolah, maupun individu membuat desain ucapan Tasmi' hafalan Al-Qur'an dengan lebih cepat. Teks dan beberapa bagian desain dapat disesuaikan melalui Canva.",

        highlights: [
            "Ukuran siap digunakan",
            "Dapat diedit melalui Canva",
            "Cocok untuk publikasi pesantren",
            "Mudah disesuaikan",
            "Siap digunakan untuk media sosial"
        ],

        media: [
            {
                type: "image",
                src:
                    "Portofolio/Canva/Templet ucapan selamat Tasmi' hafalan al qur'an_20260928_130011_0000.webp",
                alt:
                    "Template Ucapan Selamat Tasmi' Hafalan Al-Qur'an"
            }
        ],

        purchaseUrl:
            "https://lynk.id/ismail280701/972dn525z7w9",

        whatsappMessage:
            "Halo Mas Mail, saya tertarik menggunakan Template Ucapan Selamat Tasmi' Hafalan Al-Qur'an."
    },


    /* =====================================
       POWERPOINT
    ===================================== */

    "template-ppt": {

        type: "template",

        category: "ppt",

        categoryLabel: "POWERPOINT",

        title:
            "Template PowerPoint",

        cardDescription:
            "Template presentasi PowerPoint dengan desain modern yang siap disesuaikan.",

        description:
            "Template presentasi PowerPoint dengan desain modern yang dapat digunakan untuk berbagai kebutuhan presentasi.",

        about:
            "Template PowerPoint ini dirancang untuk membantu membuat presentasi terlihat lebih rapi dan profesional. Media tambahan seperti gambar atau video dapat ditampilkan di bagian detail karya.",

        highlights: [
            "Desain presentasi modern",
            "Cocok untuk berbagai kebutuhan",
            "Mudah disesuaikan",
            "Struktur slide siap digunakan",
            "Dapat digunakan untuk presentasi"
        ],

        media: [
            {
                type: "image",
                src:
                    "assets/portfolio/ppt-01.jpg",
                alt:
                    "Preview Template PowerPoint"
            }
        ],

        purchaseUrl:
            "https://lynk.id/ismail280701/wo8rvjrlmrwd",

        whatsappMessage:
            "Halo Mas Mail, saya tertarik dengan Template PowerPoint."
    },


    /* =====================================
       SERTIFIKAT / PIAGAM
    ===================================== */

    "sertifikat-piagam": {

        type: "service",

        category: "sertifikat",

        categoryLabel: "SERTIFIKAT & PIAGAM",

        title:
            "Desain Sertifikat & Piagam",

        cardDescription:
            "Jasa pembuatan desain sertifikat dan piagam sesuai kebutuhan.",

        description:
            "Jasa pembuatan desain sertifikat dan piagam untuk sekolah, pesantren, organisasi, maupun kebutuhan pribadi.",

        about:
            "Desain dibuat berdasarkan kebutuhan dan identitas yang diinginkan. Konsep, teks, ukuran, serta elemen visual dapat disesuaikan dengan kebutuhan pemesan.",

        highlights: [
            "Desain sesuai kebutuhan",
            "Cocok untuk sekolah dan pesantren",
            "Bisa menyesuaikan identitas lembaga",
            "Ukuran dapat disesuaikan",
            "Konsultasi sebelum pengerjaan"
        ],

        media: [
            {
                type: "image",
                src:
                    "assets/portfolio/sertifikat-01.jpg",
                alt:
                    "Desain Sertifikat dan Piagam"
            }
        ],

        whatsappMessage:
            "Halo Mas Mail, saya ingin konsultasi mengenai desain sertifikat atau piagam."
    },


    /* =====================================
       CANVA TEMPLATE
    ===================================== */

    "template-canva": {

        type: "template",

        category: "canva",

        categoryLabel: "CANVA TEMPLATE",

        title:
            "Template Canva",

        cardDescription:
            "Template desain Canva yang dapat digunakan dan disesuaikan untuk berbagai kebutuhan.",

        description:
            "Template desain Canva yang dapat digunakan dan disesuaikan untuk berbagai kebutuhan.",

        about:
            "Template Canva dibuat agar pengguna dapat melakukan penyesuaian sendiri dengan lebih mudah. Teks, gambar, warna, maupun elemen desain dapat disesuaikan melalui Canva.",

        highlights: [
            "Dapat diedit melalui Canva",
            "Mudah disesuaikan",
            "Desain siap digunakan",
            "Cocok untuk kebutuhan digital",
            "Praktis untuk digunakan kembali"
        ],

        media: [
            {
                type: "image",
                src:
                    "assets/portfolio/canva-02.jpg",
                alt:
                    "Template Canva"
            }
        ],

        purchaseUrl:
            "https://lynk.id/ismail280701",

        whatsappMessage:
            "Halo Mas Mail, saya tertarik dengan Template Canva."
    },


    /* =====================================
       APLIKASI
    ===================================== */

    "proyek-aplikasi": {

        type: "service",

        category: "aplikasi",

        categoryLabel: "APLIKASI",

        title:
            "Proyek Aplikasi",

        cardDescription:
            "Pengembangan aplikasi sederhana untuk membantu kebutuhan administrasi dan pengelolaan data.",

        description:
            "Pengembangan aplikasi sederhana untuk membantu kebutuhan administrasi dan pengelolaan data.",

        about:
            "Proyek aplikasi dapat disesuaikan dengan kebutuhan pengguna, mulai dari struktur data, tampilan, hingga alur penggunaan.",

        highlights: [
            "Disesuaikan dengan kebutuhan",
            "Membantu pengelolaan data",
            "Tampilan mudah digunakan",
            "Dapat dikembangkan sesuai kebutuhan",
            "Konsultasi sebelum pengerjaan"
        ],

        media: [
            {
                type: "image",
                src:
                    "assets/portfolio/aplikasi-01.jpg",
                alt:
                    "Proyek Aplikasi"
            }
        ],

        whatsappMessage:
            "Halo Mas Mail, saya ingin konsultasi mengenai pembuatan aplikasi."
    }

};


/* =========================================
   PUBLIC
========================================= */

function getPortfolioCategories() {
    const categories = [];

    Object.values(portfolioData).forEach((item) => {
        if (!item.category) {
            return;
        }

        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });

    return categories;
}

window.MasMailPortfolioData = {
    data: portfolioData,
    createWhatsAppUrl: createPortfolioWhatsApp,
    defaultPurchaseUrl: DEFAULT_PURCHASE_URL,
    getCategories: getPortfolioCategories
};
