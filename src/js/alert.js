export default class Alert {
    constructor() {
      this.alertList = document.createElement('section');
      this.alertList.classList.add('alert-list');
      this.loadAlerts();
    }
  
    async loadAlerts() {
      try {
        const response = await fetch('alert.js');
        const alerts = await response.json();
        this.createAlerts(alerts);
      } catch (error) {
        console.error('Error loading alerts:', error);
      }
    }
  
    createAlerts(alerts) {
      for (const alert of alerts) {
        const alertElem = document.createElement('p');
        alertElem.innerText = alert.message;
        alertElem.style.backgroundColor = alert.backgroundColor;
        alertElem.style.foregroundColor = alert.foregroundColor;
        this.alertList.appendChild(alertElem);
      }
      document.body.appendChild(this.alertList);
    }
  }
  