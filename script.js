// Navigation functionality
function navigate(page) {
        window.location.href = `${page}.html`;
  }
  
  const timeline = document.querySelector('.timeline');
  const timelineData = [
    { title: '18th Century', description: 'An era of revolutions and enlightenment, marked by the rise of modern science, industrialization, and the American and French Revolution', url: 'map.html?era=18th' },
    { title: '19th Century', description: 'The age of empires, innovation, and reform, featuring the Industrial Revolution, abolition movements, and the rise of nationalism worldwide', url: 'map.html?era=19th' },
    { title: '20th Century', description: 'A century of transformation and turbulence, with two World Wars, the Space Race, and the dawn of the digital age', url: 'map.html?era=20th' },
    { title: '21st Century', description: 'A time of global connectivity, rapid technological advancement, and challenges like climate change shaping the future of humanity.', url: 'map.html?era=21st' },
  ];
  
  // Dynamically populate the timeline
  function loadTimelineItems(data) {
    data.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.classList.add('timeline-item');
      if (index === 0) timelineItem.classList.add('active'); // Highlight the first item initially
  
      timelineItem.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
  
      // Add click event to navigate to the specified URL
      timelineItem.addEventListener('click', () => {
        window.location.href = item.url;
      });
  
      timeline.appendChild(timelineItem);
    });
  }
  
  // Highlight the active section based on the screen width
  function highlightActiveSection(index) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  // Add event listeners for navigation via keyboard
  function setupNavigation() {
    let currentIndex = 0;
  
    document.addEventListener('keydown', (e) => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      if (e.key === 'ArrowRight' && currentIndex < timelineItems.length - 1) {
        currentIndex++;
        highlightActiveSection(currentIndex);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        highlightActiveSection(currentIndex);
      }
    });
  }
  
  // Load timeline items and initialize navigation
  loadTimelineItems(timelineData);
  setupNavigation();


