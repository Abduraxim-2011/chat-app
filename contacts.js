const contacts = [
    { id: "contact1", firstName: "John", lastName: "Doe", image: "./img/fakeava.svg" },
    { id: "contact2", firstName: "Jane", lastName: "Smith", image: "./img/fakeava.svg" },
    { id: "contact3", firstName: "Alice", lastName: "Johnson", image: "https://via.placeholder.com/50" },
    { id: "contact4", firstName: "Bob", lastName: "Brown", image: "https://via.placeholder.com/50" },
    { id: "contact5", firstName: "Charlie", lastName: "Davis", image: "https://via.placeholder.com/50" },
    { id: "contact6", firstName: "Dave", lastName: "Wilson", image: "https://via.placeholder.com/50" },
    { id: "contact7", firstName: "Eva", lastName: "Thomas", image: "https://via.placeholder.com/50" },
    { id: "contact8", firstName: "Frank", lastName: "Moore", image: "https://via.placeholder.com/50" },
    { id: "contact9", firstName: "Grace", lastName: "Taylor", image: "https://via.placeholder.com/50" },
    { id: "contact10", firstName: "Hannah", lastName: "Lee", image: "https://via.placeholder.com/50" },
    { id: "contact11", firstName: "Ivy", lastName: "Harris", image: "https://via.placeholder.com/50" },
    { id: "contact12", firstName: "Jack", lastName: "Martin", image: "https://via.placeholder.com/50" },
    { id: "contact13", firstName: "Liam", lastName: "White", image: "https://via.placeholder.com/50" },
    { id: "contact14", firstName: "Mia", lastName: "Walker", image: "https://via.placeholder.com/50" },
    { id: "contact15", firstName: "Noah", lastName: "Green", image: "https://via.placeholder.com/50" },
    { id: "contact16", firstName: "Olivia", lastName: "Adams", image: "https://via.placeholder.com/50" },
    { id: "contact17", firstName: "Paul", lastName: "King", image: "https://via.placeholder.com/50" },
    { id: "contact18", firstName: "Quinn", lastName: "Scott", image: "https://via.placeholder.com/50" },
    { id: "contact19", firstName: "Rachel", lastName: "Perez", image: "https://via.placeholder.com/50" },
    { id: "contact20", firstName: "Sam", lastName: "Robinson", image: "https://via.placeholder.com/50" }
  ];


const container = document.querySelector(".contacts-container");
container.innerHTML= ""

function render(){
    contacts.forEach(e => {
        container.innerHTML += `
        <div id="${e.id}" class="swiper myContactSwiper">
            <div class="swiper-wrapper swiper-flex">
    
              <div class="swiper-slide call-contact">
                <button class="call-btn" onclick="location.href='call.html'">
                  <i class="fa-solid fa-phone"></i>
                </button>
                <button class="videoCall-btn" onclick="location.href='VideoCall.html'">
                  <i class="fa-solid fa-video"></i>
                </button>
    
              </div>
    
    
              <div class="swiper-slide contact">
                <div class="flex-contact">
                  <button class="contact-btn" onclick="location.heref='chat.html'">
                    <img src="${e.image}" alt="Contact.ava" class="contact-ava">
                  </button>
    
                  <button class="contact-btn" onclick="location.href='chat.html'">
                    <div class="flex-contact">
                      <h1 class="contact-name " id="title"> ${e.firstName}  ${e.lastName} <br><br></h1>
                      <p class="contact-online-time"> <br> Oxirgi Marta 9:40da onlayn edi </p>
                    </div>
                  </button>
    
    
                </div>
              </div>
    
              <div class="swiper-slide delete-contact">
                <button class="contact-profile-btn"><i class="fa-solid fa-bars"></i></button>
                <button class="contact-mute-btn"><i class="fa-solid fa-bell-slash"></i></button>
<button onclick="OpenDialog()"  id="openDialog "><i id="delete-contact-icon" class="fa-solid fa-trash"></i></button>
    
    
    
              </div>
    
            </div>
          </div>
            <div id="dialogOverlay" class="overlay">
    <div class="dialogBox">
      <h1>Bu chat butunlay oʻchirilsinmi?</h1>
      <p class="DialogSorov">Bu nafaqat oxirgi xabarlarni emas, ${e.Firstname} bilan barcha yozishmalaringiz o'chib ketadi!</p>
      <div class="buttons"> 
        <button id="cancelBtn" class="cancel">Ortga</button>
        <button id="deleteBtn" class="delete">O'chirilsin</button>
      </div>
    </div>

</div> `
    })
}
render(contacts);
const openDialog = document.getElementById('openDialog');
const cancelBtn = document.getElementById('cancelBtn');
const overlay = document.getElementById('dialogOverlay');
const dialogP = document.querySelector(".DialogSorov")

function OpenDialog() {
    overlay.style.display = 'block';
}

cancelBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

