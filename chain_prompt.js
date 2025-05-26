/**
 * Converts a string to "kebab case" as described:
 * - Throws an error if input is not a string.
 * - Splits input on spaces, hyphens, underscores, and similar separators.
 * - First word: first letter lowercase, rest as is.
 * - Subsequent words: first letter uppercase, rest as is.
 * - Joins all words together (no separator).
 * 
 * Edge cases handled:
 * - Trims leading/trailing whitespace.
 * - Ignores empty segments from multiple separators.
 * - Handles non-alphabetic characters within words.
 * - Returns empty string for empty input.
 */
function toKebabCase(input) {
    // Step 1: Validate input type
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Step 2: Trim whitespace and split on spaces, hyphens, underscores, and similar
    // Regex: split on one or more of space, hyphen, underscore, or non-word character (excluding letters/numbers)
    const words = input.trim().split(/[\s\-_]+/).filter(Boolean);

    // Step 3: Handle empty input after trimming/splitting
    if (words.length === 0) return '';

    // Step 4: Transform words according to rules
    const result = words.map((word, idx) => {
        if (word.length === 0) return '';
        if (idx === 0) {
            // First word: first letter lowercase, rest as is
            return word[0].toLowerCase() + word.slice(1);
        } else {
            // Other words: first letter uppercase, rest as is
            return word[0].toUpperCase() + word.slice(1);
        }
    }).join('');

    // Step 5: Return the final string
    return result;
}

// Example usage:
// toKebabCase('hello_world-test String') => 'helloWorldTestString'