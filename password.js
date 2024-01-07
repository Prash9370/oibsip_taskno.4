function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  function convertString(input) {
    let result = '';
    let count = 1;
  
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];
  
      if (count <= 5) {
        const randomChars = Array.from({ length: count - 1 }, getRandomCharacter).join('');
  
        result += randomChars + currentChar;
      } else {
        const randomChars = Array.from({ length: 10 - count }, getRandomCharacter).join('');
  
        result += randomChars + currentChar;
      }
  
      count = count < 10 ? count + 1 : 1;
    }
  
    return result;
  }
  
  function getOriginalCharacter(encodedChar, count) {
    if (count <= 5) {
      return encodedChar.charAt(encodedChar.length - 1);
    } else {
      return encodedChar.charAt(encodedChar.length - 1);
    }
  }
  
  function retractString(encoded) {
    let result = '';
    let count = 1;
    let encodedIndex = 0;
  
    for (let i = 0; i < encoded.length; i++) {
      if (count <= 5) {
        const originalChar = getOriginalCharacter(encoded.slice(encodedIndex, encodedIndex + count), count);
        result += originalChar;
  
        encodedIndex += count;
      } else {
        const originalChar = getOriginalCharacter(encoded.slice(encodedIndex, encodedIndex + (10 - count + 1)), count);
        result += originalChar;
  
        encodedIndex += (10 - count + 1);
      }
  
      count = count < 10 ? count + 1 : 1;
    }
  
    return result;
  }
