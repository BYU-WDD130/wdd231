import { renderActivities } from './activities.js';

async function loadActivities() {
  try {
    const response = await fetch('activities.json');
    const activities = await response.json();
    renderActivities(activities);
  } catch (error) {
    console.error('Error loading activities:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadActivities);


export function renderActivities(activities) {
  const container = document.querySelector('#activities-container');
  container.innerHTML = activities.map(activity => `
    <div class="activity-card">
      <img src="${activity.image}" alt="${activity.name}" loading="lazy">
      <h3>${activity.name}</h3>
      <p>${activity.description}</p>
      <span>Duration: ${activity.duration}</span>
      <button class="details-btn">View Details</button>
    </div>
  `).join('');

  // Add event listeners for modals here
}