// Sample YouTube Video Data (Can be replaced with API)
const videos = [
    { id: "VIDEO_ID_1", title: "Explore Bali", category: "beach" },
    { id: "VIDEO_ID_2", title: "Hiking the Himalayas", category: "mountain" },
    { id: "VIDEO_ID_3", title: "City Life in Tokyo", category: "city" },
    { id: "VIDEO_ID_4", title: "Scuba Diving in Maldives", category: "adventure" }
];

// Load Videos Dynamically
function loadVideos(filter = "all") {
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = ""; // Clear previous videos

    videos.forEach(video => {
        if (filter === "all" || video.category === filter) {
            const videoElement = `
                <div class="video-card">
                    <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
                    <p>${video.title}</p>
                </div>
            `;
            videoContainer.innerHTML += videoElement;
        }
    });
}

// Search Functionality
document.getElementById("search").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    document.querySelectorAll(".video-card").forEach(card => {
        const title = card.querySelector("p").innerText.toLowerCase();
        card.style.display = title.includes(searchText) ? "block" : "none";
    });
});

// Filter Functionality
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
        loadVideos(this.getAttribute("data-category"));
    });
});

// Load all videos on page load
loadVideos();
