const buttons = document.querySelectorAll('.services-nav-button');
const services = document.querySelectorAll('.services');

// Loop through each button
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    // Remove every active class from all
        buttons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        console.log(filter);

        // Loop through each services
        services.forEach(service => {
          if (filter === "all" || service.getAttribute('data-category') === filter) {
            service.style.display = "block";
          } else {
            service.style.display = "none";
            }
        });
      });
    });