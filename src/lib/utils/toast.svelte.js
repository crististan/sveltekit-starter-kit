let toasts = $state([]);

export function getToasts() {
    return toasts;
}

/**
 * Add a new toast notification
 * 
 * @param {string} message - The toast message
 * @param {string} type - Toast type (success, error, info, warning)
 * @param {number} duration - Duration in milliseconds before auto-dismiss
 * @returns {number} The toast ID
 */
export function showToast(message, type, duration = 3000) {
    const id = Date.now();

    toasts.push({ id, message, type, duration });

    // Remove toast after duration
    if (duration > 0) {
        setTimeout(() => {
            dismissToast(id);
        }, duration);
    }

    return id;
}
  
/**
 * Remove a toast by ID
 * 
 * @param {number} id - The toast ID to remove
 */
export function dismissToast(id) {
    const index = toasts.findIndex(toast => toast.id === id);
    if (index !== -1) {
        toasts.splice(index, 1); // ✅ in-place mutation
    }
}