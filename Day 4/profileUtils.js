// Profile card creation utilities (named exports)

/**
 * Creates a new profile card element
 * @param {string} name - The person's name
 * @param {string} role - The person's role
 * @returns {HTMLElement} The created profile card
 */
export function createProfileCard(name, role) {
    // Create the main card container
    const card = document.createElement('div');
    card.className = 'profile-card';
    
    // Create role badge
    const roleBadge = document.createElement('span');
    roleBadge.className = 'role-badge';
    roleBadge.textContent = role;
    
    // Create name heading
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;
    
    // Create role paragraph
    const roleParagraph = document.createElement('p');
    roleParagraph.textContent = `Role: ${role}`;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn danger';
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => removeCard(card));
    
    // Append all elements to the card
    card.appendChild(roleBadge);
    card.appendChild(nameHeading);
    card.appendChild(roleParagraph);
    card.appendChild(deleteBtn);
    
    return card;
}

/**
 * Removes a profile card from the DOM
 * @param {HTMLElement} card - The card element to remove
 */
export function removeCard(card) {
    if (card && card.parentNode) {
        card.style.transform = 'scale(0.8)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.parentNode.removeChild(card);
            showMessage('Profile removed successfully', 'success');
        }, 300);
    }
}

/**
 * Adds a profile card to the container
 * @param {HTMLElement} container - The container element
 * @param {HTMLElement} card - The card element to add
 */
export function addCardToContainer(container, card) {
    if (container && card) {
        container.appendChild(card);
        
        // Add entrance animation
        card.style.transform = 'scale(0.8)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transform = 'scale(1)';
            card.style.opacity = '1';
        }, 50);
        
        showMessage('Profile added successfully', 'success');
    }
}

/**
 * Validates profile input
 * @param {string} name - The person's name
 * @param {string} role - The person's role
 * @returns {Object} Validation result
 */
export function validateProfileInput(name, role) {
    const errors = {};
    
    if (!name || name.trim() === '') {
        errors.name = 'Name is required';
    } else if (name.trim().length > 50) {
        errors.name = 'Name must be 50 characters or less';
    }
    
    if (!role || role.trim() === '') {
        errors.role = 'Role is required';
    } else if (role.trim().length > 50) {
        errors.role = 'Role must be 50 characters or less';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

/**
 * Shows a message to the user
 * @param {string} message - The message to display
 * @param {string} type - The message type (success, error)
 */
export function showMessage(message, type = 'success') {
    const messageContainer = document.getElementById('messageContainer');
    if (!messageContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    messageContainer.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

/**
 * Opens the profile modal
 */
export function openProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

/**
 * Closes the profile modal
 */
export function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    const form = document.getElementById('profileForm');
    if (modal) {
        modal.style.display = 'none';
    }
    if (form) {
        form.reset();
    }
}

/**
 * Handles profile form submission
 * @param {Event} event - The form submission event
 */
export function handleProfileFormSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('profileName');
    const roleInput = document.getElementById('profileRole');
    
    if (!nameInput || !roleInput) return;
    
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    
    const validation = validateProfileInput(name, role);
    
    if (!validation.isValid) {
        // Show validation errors
        Object.keys(validation.errors).forEach(field => {
            const errorElement = document.getElementById(`${field}Error`);
            if (errorElement) {
                errorElement.textContent = validation.errors[field];
            }
        });
        return;
    }
    
    // Clear any previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Create and add the profile
    const container = document.getElementById('profileContainer');
    const card = createProfileCard(name, role);
    
    if (container) {
        addCardToContainer(container, card);
    }
    
    closeProfileModal();
}

/**
 * Initializes the profile creation system
 */
export function initProfileSystem() {
    const addProfileBtn = document.getElementById('addProfileBtn');
    const modal = document.getElementById('profileModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('profileForm');
    
    if (addProfileBtn) {
        addProfileBtn.addEventListener('click', openProfileModal);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProfileModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeProfileModal);
    }
    
    if (form) {
        form.addEventListener('submit', handleProfileFormSubmit);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProfileModal();
            }
        });
    }
}
