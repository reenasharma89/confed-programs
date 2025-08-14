import { fetchPrograms } from './api.js';
import { renderPrograms } from './render.js';
import { showLoading, showError } from './utilities.js';

async function initializeApp() {
  const container = document.getElementById('programs_container');
    
  try {
    showLoading(container);
    const programs = await fetchPrograms();
    renderPrograms(container, programs);
  } catch (error) {
      console.error('Failed to load programs:', error);
      showError(container);
  }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);