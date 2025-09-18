document.addEventListener("DOMContentLoaded", () => {
  // put all your carousel code here
  const carouselImages = [
      {
        src: 'assets/service1.jpg',
        caption: `<h2>USA National Youth Ambassador</h2><p><strong>Service Highlight</strong><br>As a UNICEF USA National Youth Ambassador for 2 consecutive years, I had the privilege of representing UNICEF and advocating for children's rights and well-being.</p>`
      },
      {
        src: 'assets/service2.jpg',
        caption: `<h2>Big Event Volunteer</h2><p><strong>Big Event Volunteer</strong><br>As a Big Event Volunteer, I participated in Texas A&M's largest day of service helping beautify the community around campus.</p>`
      },
      {
        src: 'assets/service3.jpg',
        caption: `<h2>Tennis Coaching for Youth</h2><p><strong>Collaborative Service</strong><br>As a tennis coach for youth, I have had the opportunity to teach young athletes, helping them to improve their skills on and off the court.</p>`
      },
      {
        src: 'assets/service4.jpg',
        caption: `<h2>Engineering Honors Executive Committee Service Chair</h2><p><strong>Leading by Example</strong><br>As the Service Chair for the Engineering Honors Executive Committee, I organized various community service events and initiatives to appreciate our faculty, staff, and students.</p>`
      },
      {
        src: 'assets/service5.jpg',
        caption: `<h2>Hope Health Care Volunteer</h2><p><strong>Community Impact</strong><br>As a volunteer at Hope Health Care, I provided comfort care as a companion to many old age and underserved people in the community.</p>`
      }
    ];
    let currentIndex = 1; // Start at service2.jpg
    const imageEl = document.getElementById('carousel-image');
    const captionEl = document.getElementById('carousel-caption');
    const dots = document.querySelectorAll('.personality-dot');

    document.getElementById('carousel-prev').onclick = function() {
      currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
      updateCarousel();
    };
    document.getElementById('carousel-next').onclick = function() {
      currentIndex = (currentIndex + 1) % carouselImages.length;
      updateCarousel();
    };
    dots.forEach(dot => {
      dot.onclick = function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        updateCarousel();
      };
    });
    function updateCarousel() {
      imageEl.src = carouselImages[currentIndex].src;
      captionEl.innerHTML = carouselImages[currentIndex].caption;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }
});


// Portfolio Carousel for style2.css
document.addEventListener('DOMContentLoaded', function() {
  console.log("Portfolio carousel code running");
  const portfolioProjects = [
    {
      src: "assets/projects1.jpg",
      caption: `<h3>Criminality</h3><p>AI lie detector that uses machine learning and facial recognition to analyze micro-expressions and detect deception. Uses transcription audio of court cases and compares to witness testimonies to generate insights on the court proceedings.</p>`,
      github: "https://github.com/pharwadekar/criminality"
    },
    {
      src: "assets/projects2.jpg",
      caption: `<h3>Pantry Pal</h3><p>Using computer vision for pantry tracking and adding elements to shopping lists. The app helps users manage their pantry inventory and suggests recipes based on available ingredients.</p>`,
      github: "https://github.com/pharwadekar/build4good"
    },
    {
      src: "assets/projects3.jpg",
      caption: `<h3>Datathon Cookie Regression Challenge</h3><p>Built a regression-based data science challenge with over 200 participants. The goal was to teach and apply regression and curve-fitting techniques by asking participants to determine the equation of a shape based on a set of points.</p>`,
      github: "https://github.com/tamu-datathon-org/MiniD25/tree/main/CookieRegressionChallenge"
    }
  ];

  // Check if portfolio elements exist to prevent errors on other pages
  const imageEl = document.getElementById('portfolio-image');
  const captionEl = document.getElementById('portfolio-caption');
  const githubEl = document.getElementById('portfolio-github');
  const dotsEl = document.getElementById('portfolio-dots');
  const prevBtn = document.getElementById('portfolio-prev');
  const nextBtn = document.getElementById('portfolio-next');
  
  // Only proceed if we have the necessary elements
  if (imageEl && captionEl && githubEl && dotsEl && prevBtn && nextBtn) {
    console.log("Portfolio elements found");
    let currentIndex = 0;
    
    function updatePortfolioCarousel() {
      const themeLink = document.getElementById('theme-stylesheet');
      if (!themeLink || !themeLink.getAttribute('href').includes('style2.css')) return;
      console.log("Updating carousel to index:", currentIndex);
      
      // Update image, caption and link
      imageEl.src = portfolioProjects[currentIndex].src;
      captionEl.innerHTML = portfolioProjects[currentIndex].caption;
      githubEl.href = portfolioProjects[currentIndex].github;
      
      // Update dots
      dotsEl.innerHTML = portfolioProjects.map((_, idx) =>
        `<span class="portfolio-dot${idx === currentIndex ? ' active' : ''}" data-index="${idx}"></span>`
      ).join('');
      
      // Add click handlers to dots
      document.querySelectorAll('.portfolio-dot').forEach(dot => {
        dot.addEventListener('click', function() {
          currentIndex = parseInt(this.getAttribute('data-index'));
          updatePortfolioCarousel();
        });
      });
    }

    // Add event listeners to prev/next buttons
    prevBtn.addEventListener('click', function() {
      console.log("Prev button clicked");
      currentIndex = (currentIndex - 1 + portfolioProjects.length) % portfolioProjects.length;
      updatePortfolioCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
      console.log("Next button clicked");
      currentIndex = (currentIndex + 1) % portfolioProjects.length;
      updatePortfolioCarousel();
    });

    // Initial render
    updatePortfolioCarousel();
    
    // Re-render on theme change
    const themeLink = document.getElementById('theme-stylesheet');
    if (themeLink) {
      const observer = new MutationObserver(updatePortfolioCarousel);
      observer.observe(themeLink, { attributes: true, attributeFilter: ['href'] });
    }
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Zigzag candy bar for style2.css only
  const zigzagDiv = document.getElementById('candy-zigzag');
  const themeLink = document.getElementById('theme-stylesheet');
  function renderZigzag() {
    if (themeLink && themeLink.getAttribute('href') === 'style2.css') {
      let imgs = '';
      for (let i = 0; i < 10; i++) {
        imgs += '<img src="assets/under-nav.png" alt="" draggable="false">';
      }
      zigzagDiv.innerHTML = imgs;
      zigzagDiv.style.display = 'flex';
    } else {
      zigzagDiv.innerHTML = '';
      zigzagDiv.style.display = 'none';
    }
  }
  renderZigzag();
  // If you have a theme toggle, update zigzag on theme change
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      setTimeout(renderZigzag, 100); // Wait for theme to switch
    });
  }
});



// Fun Facts Carousel Script
const funFacts = [
  "I love hiking and exploring the outdoors.",
  "I was part of the world record for the largest broadcasted live stream yoga event with over 240,000 attendees.",
  "I am learning to play the acoustic guitar in my free time. I'm a complete beginner but, if you have any tips, please share!"
];

function renderCandyFunFacts() {
  const container = document.getElementById('funFactsCandy');
  container.innerHTML = funFacts.map(fact =>
    `<div class="fun-fact-trapezoid">${fact}</div>`
  ).join('');
}

const themeLink = document.getElementById('theme-stylesheet');
function showFunFacts() {
  const isCandy = themeLink && themeLink.getAttribute('href').includes('style2.css');
  document.getElementById('funFactsCandy').style.display = isCandy ? 'flex' : 'none';
  document.getElementById('funFactsClassic').style.display = isCandy ? 'none' : 'block';
  if (isCandy) renderCandyFunFacts();
}

// Run on page load
window.addEventListener('DOMContentLoaded', showFunFacts);

// Re-run when theme changes (using MutationObserver)
if (themeLink) {
  const observer = new MutationObserver(showFunFacts);
  observer.observe(themeLink, { attributes: true, attributeFilter: ['href'] });
}

// Classic carousel logic
let funFactIndex = 0;
function renderFunFact(idx) {
  const funFactContent = document.getElementById('funFactContent');
  const funFactDots = document.getElementById('funFactDots');
  if (funFactContent && funFactDots) {
    funFactContent.textContent = funFacts[idx];
    funFactDots.innerHTML = funFacts.map((_, i) => `<span class='fun-fact-dot${i===idx?" active":""}'></span>`).join('');
  }
}
const prevBtn = document.getElementById('funFactPrev');
const nextBtn = document.getElementById('funFactNext');
if (prevBtn && nextBtn) {
  prevBtn.onclick = () => {
    funFactIndex = (funFactIndex - 1 + funFacts.length) % funFacts.length;
    renderFunFact(funFactIndex);
  };
  nextBtn.onclick = () => {
    funFactIndex = (funFactIndex + 1) % funFacts.length;
    renderFunFact(funFactIndex);
  };
  renderFunFact(funFactIndex);
}

// Personality Carousel Script
const personalityFacts = [
  "I enjoy playing sports and am an adventurous person who loves to explore new places and try new things.",
  "I enjoy meeting new people and learning about different cultures.",
  "My friends would describe me as friendly, curious, and up to try something new.",
  "I'm hoping to study abroad in the future to immerse myself in a different culture."
];
let personalityIndex = 0;
const personalityContent = document.getElementById('personalityContent');
const personalityDots = document.getElementById('personalityDots');
function renderPersonality(idx) {
  personalityContent.textContent = personalityFacts[idx];
  personalityDots.innerHTML = personalityFacts.map((_, i) => `<span class='personality-dot${i===idx?" active":""}'></span>`).join('');
}
document.getElementById('personalityPrev').onclick = () => {
  personalityIndex = (personalityIndex - 1 + personalityFacts.length) % personalityFacts.length;
  renderPersonality(personalityIndex);
};
document.getElementById('personalityNext').onclick = () => {
  personalityIndex = (personalityIndex + 1) % personalityFacts.length;
  renderPersonality(personalityIndex);
};
renderPersonality(personalityIndex);




