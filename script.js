// Navigation functionality
function navigate(page) {
        window.location.href = `${page}.html`;
  }
  
  const timeline = document.querySelector('.timeline');
const timelineData = [
  { title: 'Section 1', description: 'Description of Section 1.' },
  { title: 'Section 2', description: 'Description of Section 2.' },
  { title: 'Section 3', description: 'Description of Section 3.' },
  { title: 'Section 4', description: 'Description of Section 4.' },
  { title: 'Section 5', description: 'Description of Section 5.' },
];

// Dynamically populate the timeline
function loadTimelineItems(data) {
  data.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');
    if (index === 0) timelineItem.classList.add('active'); // Highlight the first item initially

    timelineItem.innerHTML = `
      <div class="content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    timeline.appendChild(timelineItem);
  });
}

// Highlight the active timeline item
function highlightActiveItem() {
  const middle = window.innerWidth / 2;

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;

    if (Math.abs(itemCenter - middle) < itemRect.width / 2) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Scroll the timeline with buttons
function scrollTimeline(offset) {
  timeline.scrollBy({ left: offset, behavior: 'smooth' });
}

// Event listener for scrolling
timeline.addEventListener('scroll', highlightActiveItem);

// Load timeline items and initialize
loadTimelineItems(timelineData);
highlightActiveItem();
