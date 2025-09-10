// Fun Facts Carousel Script
const funFacts = [
  "I love hiking and exploring the outdoors.",
  "I was part of the world record for the largest broadcasted live stream yoga event with over 240,000 attendees.",
  "I am learning to play the acoustic guitar in my free time. I'm a complete beginner but, if you have any tips, please share!"
];
let funFactIndex = 0;
window.addEventListener('DOMContentLoaded', function() {
  const funFactContent = document.getElementById('funFactContent');
  const funFactDots = document.getElementById('funFactDots');
  function renderFunFact(idx) {
    funFactContent.textContent = funFacts[idx];
    funFactDots.innerHTML = funFacts.map((_, i) => `<span class='fun-fact-dot${i===idx?" active":""}'></span>`).join('');
  }
  document.getElementById('funFactPrev').onclick = () => {
    funFactIndex = (funFactIndex - 1 + funFacts.length) % funFacts.length;
    renderFunFact(funFactIndex);
  };
  document.getElementById('funFactNext').onclick = () => {
    funFactIndex = (funFactIndex + 1) % funFacts.length;
    renderFunFact(funFactIndex);
  };
  renderFunFact(funFactIndex);

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
});

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
