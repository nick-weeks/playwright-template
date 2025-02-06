export function findLocation(obj: any, targetText: string): any | null {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (obj[key].navigationText === targetText) {
                return obj[key]; // Found the matching object
            }
            // Recursively search nested objects
            const found = findLocation(obj[key], targetText);
            if (found) return found;
        }
    }
    return null; // No match found
  }