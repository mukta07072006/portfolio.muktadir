
        const textArray = [
            "Brand Identity Designer",
            "Logo Designer",
            "Poster Creator",
            "Social Media Expert",
            "Product Image Editor"
        ];
        let index = 0;
        let charIndex = 0;
        let currentText = '';
        let isDeleting = false;
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const delayBetween = 2000;
    
        const typedText = document.getElementById("typed-text");
    
        function type() {
            if (index >= textArray.length) index = 0;
            currentText = textArray[index];
    
            if (!isDeleting) {
                typedText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(type, delayBetween);
                } else {
                    setTimeout(type, typingSpeed);
                }
            } else {
                typedText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    index++;
                }
                setTimeout(type, erasingSpeed);
            }
        }
    
        document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  // Change Icon
  if (body.classList.contains('light-theme')) {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Show Moon
  } else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Show Sun
  }
});
  // Trigger animations when page loads
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });

document.addEventListener('DOMContentLoaded', () => {
  const progresses = document.querySelectorAll('.progress');
  progresses.forEach(progress => {
    const width = progress.style.width;
    progress.style.width = '0';
    setTimeout(() => {
      progress.style.width = width;
    }, 300);
  });
});
