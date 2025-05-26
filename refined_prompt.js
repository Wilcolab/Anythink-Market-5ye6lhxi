/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string on spaces, underscores, and hyphens, then transforms it into camelCase.
 * - The first word is always lowercased.
 * - Subsequent words are capitalized unless they are acronyms (all uppercase, length > 1), which are preserved as-is.
 * - Handles multiple consecutive delimiters and trims whitespace.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty or contains only whitespace.
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * Splits the input string on spaces, underscores, and hyphens, then joins the words using dots.
 * - All words are lowercased.
 * - Handles multiple consecutive delimiters and trims whitespace.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty or contains only whitespace.
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input string cannot be empty');
    }

    // Split on spaces, underscores, hyphens, and handle multiple delimiters
    const words = input
        .split(/[\s_\-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Helper to check if a word is an acronym (all uppercase, length > 1)
    const isAcronym = word => word.length > 1 && /^[A-Z0-9]+$/.test(word);

    return words
        .map((word, idx) => {
            if (idx === 0) {
                // First word: lowercase unless it's an acronym
                return isAcronym(word) ? word.toLowerCase() : word.toLowerCase();
            }
            // Next words: preserve acronyms, else capitalize first letter
            if (isAcronym(word)) return word;
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input string cannot be empty');
    }

    // Split on spaces, underscores, hyphens, and handle multiple delimiters
    const words = input
        .split(/[\s_\-]+/)
        .filter(Boolean);

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

