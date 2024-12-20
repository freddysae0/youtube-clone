/**
 * Creates a localStorage effect for Recoil state management.
 * @param {string} key - The key to use in localStorage.
 * @returns {function} - The Recoil effect function.
 */
export const localStorageEffect =
    (key) =>
        ({ setSelf, onSet }) => {
            // Initialize state with saved value from localStorage, if available
            const savedValue = localStorage.getItem(key);
            if (savedValue !== null) {
                try {
                    setSelf(JSON.parse(savedValue));
                } catch (error) {
                    setSelf(savedValue); // Fall back to raw value
                }
            }

            // Sync state updates to localStorage
            onSet((newValue, _, isReset) => {
                if (isReset) {
                    localStorage.removeItem(key);
                } else {
                    const valueToStore =
                        typeof newValue === "string" ? newValue : JSON.stringify(newValue);
                    localStorage.setItem(key, valueToStore);
                }
            });
        };

export default { localStorageEffect };
