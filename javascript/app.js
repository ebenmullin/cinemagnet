
document.getElementById('sort-select').addEventListener('change', function() {
    const selectedValue = this.value;
    const projectList = document.getElementById('gallery');
    const projects = Array.from(projectList.getElementsByClassName('half-width'));
  
    projects.sort((a, b) => {
      if (selectedValue === '3d') {
        return a.dataset.category === '3d' ? -1 : 1;
      } else if (selectedValue === 'film') {
        return a.dataset.category === 'film' ? -1 : 1;
      } else {
        // Custom order for 'both', e.g., based on your favorites
        const favoriteOrder = ['3d', 'film'];
        return favoriteOrder.indexOf(a.dataset.category) - favoriteOrder.indexOf(b.dataset.category);
      }
    });
  
    // Append projects back to the list in sorted order
    projects.forEach(project => projectList.appendChild(project));
  });