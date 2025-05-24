// Animation drift sur la voiture au clic (page d'accueil)
document.addEventListener('DOMContentLoaded', function() {
  const car = document.getElementById('car');
  if(car) {
    car.addEventListener('click', () => {
      car.classList.add('drift');
      setTimeout(() => car.classList.remove('drift'), 600);
    });
  }
});
