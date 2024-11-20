function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById("bmiResult").textContent = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmiCategory").textContent = `Category: ${category}`;
}
/////////////////////////////////////////////////////////////////////////displaying divs////////////////////////////////////////////////////////
///////////////////////////////////:timeout opacity for every action///////////////////////:////////////:
function toggleBMISection() {
    const bmiSection = document.getElementById("bmi");
    bmiSection.style.display = 'block';
      setTimeout(()=>{
        bmiSection.style.opacity = 1;
      }),1000;
    
}
////////////////////////////////////////////////////////////////// CONTROLLING THE IMAGE SLIDER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1;
}    
  if (n < 1) {
    slideIndex = slides.length;
}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
