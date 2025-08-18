// Main JavaScript file with default export
import { add, multiply, subtract, divide } from './mathUtils.js';
import greet from './mathUtils.js';
import { createProfileCard, addCardToContainer, initProfileSystem } from './profileUtils.js';

// Default export function
/**
 * Main application initialization
 */
export default function initApp() {
    // Test math utilities
    console.log('Math operations:');
    console.log('5 + 3 =', add(5, 3));
    console.log('4 * 7 =', multiply(4, 7));
    console.log('10 - 4 =', subtract(10, 4));
    console.log('20 / 5 =', divide(20, 5));
    
    // Test default export
    console.log(greet('User'));
    console.log(greet());
    
    // Get DOM elements
    const profileContainer = document.getElementById('profileContainer');
    
    if (!profileContainer) {
        return;
    }
    
    // Initialize the profile creation system
    initProfileSystem();
    
    // Add some sample cards on load
    const sampleProfiles = [
        { name: 'John Doe', role: 'Software Engineer' },
        { name: 'Jane Smith', role: 'Product Manager' },
        { name: 'Mike Johnson', role: 'UX Designer' }
    ];
    
    sampleProfiles.forEach(profile => {
        const card = createProfileCard(profile.name, profile.role);
        addCardToContainer(profileContainer, card);
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Also export initApp for potential external use
export { initApp };
