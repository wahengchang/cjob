function stringParser(str) {
    const result = [];
    let current = '';
    let isInQuotes = false;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === '"' && !isInQuotes) {
        isInQuotes = true;
        current += '"';
      } else if (char === '"' && isInQuotes && str[i + 1] === '.') {
        isInQuotes = false;
        current += '"';
        result.push(current);
        current = '';
        i++; // Skip the next character (.)
      } else if (char === '.' && !isInQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
  
    result.push(current);
    return result;
  }
  function jsonParser(json, path) {
    const keys = stringParser(path);
  
    let value = json;
    for (let key of keys) {
      if (typeof value !== 'object' || value === null) {
        return undefined; // Invalid path or non-object value encountered
      }
  
      if (key.startsWith('"') && key.endsWith('"')) {
        // Remove surrounding quotes from the key
        key = key.slice(1, -1);
      }
  
      if (Array.isArray(value) && /^\d+$/.test(key)) {
        // If the value is an array and the key is a non-negative integer, convert the key to a number
        key = parseInt(key, 10);
      }
  
      value = value[key];
  
      if (value === undefined) {
        return undefined; // Key not found in the object
      }
    }
  
    return value;
  }
  
  module.exports = jsonParser