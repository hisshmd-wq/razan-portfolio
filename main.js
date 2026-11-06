/* =====================================
   RAZAN MOHAMED - PORTFOLIO
   Main JavaScript
===================================== */

// تحديد الصفحة الحالية
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// روابط القائمة الجانبية
const navigationLinks = [
    { name: "Home", link: "index.html" },
    { name: "Achievements", link: "achievements.html" },
    { name: "Skills", link: "skills.html" },
    { name: "Projects", link: "projects.html" },
    { name: "Titles", link: "titles.html" },
    { name: "About Me", link: "about.html" }
];

// إنشاء القائمة الجانبية
const sidebar = document.getElementById("sidebar");

if (sidebar) {
    const nav = sidebar.querySelector(".navigation");

    if (nav) {
        nav.innerHTML = navigationLinks.map(item => `
            <a href="${item.link}"
               class="${currentPage === item.link ? "active" : ""}">
               ${item.name}
            </a>
        `).join("");
    }
}

// رسالة تأكيد تشغيل الموقع
console.log("RAZAN PORTFOLIO LOADED SUCCESSFULLY");