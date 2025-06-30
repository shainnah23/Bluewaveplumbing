import PlumbingService from './services/plumbingService.js';

const plumbingService = new PlumbingService();

// Example: List all scheduled services
plumbingService.listAllServices();

// Example: Schedule a new plumbing service
plumbingService.scheduleService({
    customerName: 'Alice Johnson',
    serviceType: 'Water Heater Installation',
    date: '2025-07-05'
});

// Example: List all scheduled services (after scheduling)
plumbingService.listAllServices();