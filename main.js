document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-item');
  const sections = document.querySelectorAll('.section');

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active from all menu items
      menuItems.forEach(i => i.classList.remove('active'));
      // Hide all sections
      sections.forEach(sec => sec.classList.remove('active'));
      // Activate this menu item
      this.classList.add('active');
      // Show the corresponding section
      let sectionId = 'section-' + this.getAttribute('data-section');
      // For 'talks', show the speakers section (which is now section-talks)
      if (this.getAttribute('data-section') === 'talks') {
        sectionId = 'section-talks';
      }
      document.getElementById(sectionId).classList.add('active');
    });
  });
});
