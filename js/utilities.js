export function showLoading(container) {
  container.innerHTML = `
    <div class="loading">
      <p>Loading programs...</p>
    </div>
  `;
}

export function showError(container) {
  container.innerHTML = `
    <div class="error">
        <p>Failed to load programs. Please try again.</p>
        <button class="retry-button" onclick="window.location.reload()">
            Retry
        </button>
    </div>
  `;
}