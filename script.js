// Mock event data - Ideally, this would come from an API or database
const eventList = [
    {
      id: 101,
      name: "City Music Carnival",
      date: "2025-06-20",
      time: "19:00",
      venue: "Downtown Arena, LA",
      category: "music",
      cost: "$55",
      image: "https://example.com/music.jpg",
      shortDesc: "An unforgettable night of live music performances.",
    },
    {
      id: 102,
      name: "Future Tech Expo",
      date: "2025-07-15",
      time: "09:30",
      venue: "Tech Convention Center, SF",
      category: "technology",
      cost: "$150",
      image: "https://example.com/tech.jpg",
      shortDesc: "Discover the latest innovations and industry leaders.",
    },
  ];
  
  // Wait for DOM to fully load
  window.addEventListener("DOMContentLoaded", function () {
    if (document.body.id === "homePage") {
      displayFeaturedEvents();
    } else if (document.body.id === "eventsPage") {
      listAllEvents();
    } else if (document.body.id === "eventDetailPage") {
      showEventDetails();
    }
  });
  
  // Display featured events on homepage
  function displayFeaturedEvents() {
    const featureContainer = document.getElementById("featuredEvents");
    if (!featureContainer) return;
    
    let output = "";
    eventList.slice(0, 2).forEach((event) => {
      output += createEventCard(event);
    });
    featureContainer.innerHTML = output;
  }
  
  // Generate event cards
  function createEventCard(event) {
    return `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="event-box">
          <img src="${event.image}" alt="${event.name}" class="event-img">
          <h4>${event.name}</h4>
          <p><i class="bi bi-geo-alt"></i> ${event.venue}</p>
          <p>${event.shortDesc}</p>
          <p><strong>${event.date} at ${event.time}</strong></p>
          <a href="event-details.html?id=${event.id}" class="btn btn-outline-info">More Info</a>
        </div>
      </div>
    `;
  }
  
  // Display all events on events page
  function listAllEvents() {
    const eventsContainer = document.getElementById("eventsSection");
    if (!eventsContainer) return;
    
    let output = "";
    eventList.forEach((event) => {
      output += createEventCard(event);
    });
    eventsContainer.innerHTML = output;
  }
  
  // Load event details based on URL parameters
  function showEventDetails() {
    const params = new URLSearchParams(window.location.search);
    const eventId = parseInt(params.get("id"));
    const selectedEvent = eventList.find((e) => e.id === eventId);
    
    if (!selectedEvent) {
      document.body.innerHTML = "<h2>Event not found</h2>";
      return;
    }
    
    document.getElementById("eventTitle").textContent = selectedEvent.name;
    document.getElementById("eventDate").textContent = selectedEvent.date;
    document.getElementById("eventTime").textContent = selectedEvent.time;
    document.getElementById("eventLocation").textContent = selectedEvent.venue;
    document.getElementById("eventPrice").textContent = selectedEvent.cost;
    document.getElementById("eventImage").src = selectedEvent.image;
    document.getElementById("eventDescription").textContent = selectedEvent.shortDesc;
  }
  
  // Simple error handler
  function handleError(message) {
    console.error("Error:", message);
    alert("Something went wrong. Please try again.");
  }
  