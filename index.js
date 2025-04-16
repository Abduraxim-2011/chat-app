document.getElementById("camera-input").addEventListener("change", function (e) {
    var file = e.target.files[0]; // Faqat birinchi faylni olish
    if (file) {
        var reader = new FileReader();

        // Rasm yuklanganida quyidagi kod ishlaydi
        reader.onload = function (event) {
            // profile-img ID sini topib, unga rasmni o'rnatamiz
            document.getElementById("profile-img").src = event.target.result;
        };

        // Faylni o'qish
        reader.readAsDataURL(file);
    }
});
// Profil rasmi o'zgartirilganda ishlash uchun event listener
document.getElementById("camera-input").addEventListener("change", function (e) {
    var file = e.target.files[0]; // Faqat birinchi faylni olish
    if (file) {
        var reader = new FileReader();

        // Rasm yuklanganida quyidagi kod ishlaydi
        reader.onload = function (event) {
            // Rasmni localStorage ga saqlaymiz
            localStorage.setItem("profileImage", event.target.result);
            // Profil rasmi sifatida yangilaymiz
            document.getElementById("profile-img").src = event.target.result;
        };

        // Faylni o'qish
        reader.readAsDataURL(file);
    }
});

// Sahifa yuklanganda rasmni localStorage dan olish
window.onload = function () {
    var savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        // Agar rasm mavjud bo'lsa, uni ko'rsatamiz
        document.getElementById("profile-img").src = savedImage;
    }
};






function setActive(btn) {
    const chatsBtn = document.querySelector('#Chats')
const contactsBtn = document.querySelector('#Contacts')
const browserBtn = document.querySelector('#Browser')
    if (btn === 'chat') {
        chatsBtn.classList.add('active')
        contactsBtn.classList.remove('active')
        browserBtn.classList.remove('active')
        window.location.href = "index.html"
    } else if (btn === 'contact') {
        chatsBtn.classList.remove('active')
        contactsBtn.classList.add('active')
        browserBtn.classList.remove('active')
        window.location.href = "contacts.html"
    } else if (btn === 'browser') {
        chatsBtn.classList.remove('active')
        contactsBtn.classList.remove('active')
        browserBtn.classList.add('active')
        window.location.href = "browser.html"
    }
}