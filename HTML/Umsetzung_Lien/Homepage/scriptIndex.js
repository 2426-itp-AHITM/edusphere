const data = {
  2023: { Informatik: 600, Medientechnik: 400, Elektronik: 100, Medizintechnik: 200, Fachschule: 90, Kolleg: 50 },
  2022: { Informatik: 550, Medientechnik: 350, Elektronik: 90, Medizintechnik: 180, Fachschule: 80, Kolleg: 45 },
  2021: { Informatik: 500, Medientechnik: 300, Elektronik: 85, Medizintechnik: 170, Fachschule: 75, Kolleg: 40 },
};

const yearSelect = document.getElementById("yearSelect");
const numbers = document.querySelectorAll(".number");


function animateNumber(element, start, end) {
  let current = start;
  const duration = 1000;
  const increment = Math.ceil(end / (duration / 20));
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = current;
  }, 20);
}


function updateNumbers(year) {
  numbers.forEach((number) => {
    const department = number.dataset.department;
    const endValue = data[year][department];
    animateNumber(number, 0, endValue);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateNumbers(yearSelect.value);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

numbers.forEach((number) => observer.observe(number));


yearSelect.addEventListener("change", () => updateNumbers(yearSelect.value));


const targetNumbers = {
  classes: 45,
  teachers: 100,
  students: 1100
};

const duration = 2000;

function animateCounter(id, target) {
  const element = document.getElementById(id);
  let current = 0;
  const step = Math.ceil(target / (duration / 16));

  const counter = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    element.textContent = current;
  }, 16);
}

window.onload = () => {
  animateCounter('classes', targetNumbers.classes);
  animateCounter('teachers', targetNumbers.teachers);
  animateCounter('students', targetNumbers.students);
};


const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const carousel = document.querySelector('.carousel');

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
