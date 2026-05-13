const mockEvents = [
  {
    title: "Summer Beats Festival",
    artist: "The Weeknd & Dua Lipa",
    location: "Madrid, España",
    date: "2026-06-15",
    price: "€65 - €120",
    image: "https://images.unsplash.com/photo-1648260029310-5f1da359af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Electronic Dreams",
    artist: "Calvin Harris",
    location: "Valencia, España",
    date: "2026-08-05",
    price: "€45 - €80",
    image: "https://images.unsplash.com/photo-1607313029691-fa108ddf807d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

const mockCarpoolRides = [
  {
    driver: "Carlos Ruiz",
    departureLocation: "Sevilla, España",
    pricePerSeat: 15,
    carModel: "Toyota Corolla 2022"
  }
];

const mockHousingOffers = [
  {
    host: "Ana García",
    location: "Centro, Madrid",
    pricePerNight: 25,
    description: "Habitación acogedora en pleno centro de Madrid"
  }
];

function renderEvents() {
  const container = document.getElementById("events-container");

  container.innerHTML = mockEvents.map(event => `
    <div class="card">
      <img src="${event.image}" alt="${event.title}">
      <div class="card-content">
        <span class="badge">${event.date}</span>
        <h3>${event.title}</h3>
        <p>${event.artist}</p>
        <p>${event.location}</p>
        <strong>${event.price}</strong>
      </div>
    </div>
  `).join("");
}

function renderCarpool() {
  const container = document.getElementById("carpool-container");

  container.innerHTML = mockCarpoolRides.map(ride => `
    <div class="card">
      <div class="card-content">
        <h3>${ride.driver}</h3>
        <p>Salida: ${ride.departureLocation}</p>
        <p>Coche: ${ride.carModel}</p>
        <strong>€${ride.pricePerSeat}/asiento</strong>
      </div>
    </div>
  `).join("");
}

function renderHousing() {
  const container = document.getElementById("housing-container");

  container.innerHTML = mockHousingOffers.map(home => `
    <div class="card">
      <div class="card-content">
        <h3>${home.host}</h3>
        <p>${home.location}</p>
        <p>${home.description}</p>
        <strong>€${home.pricePerNight}/noche</strong>
      </div>
    </div>
  `).join("");
}

renderEvents();
renderCarpool();
renderHousing();
