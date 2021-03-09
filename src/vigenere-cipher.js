class VigenereCipheringMachine {
  constructor(isDirectOrder = true) {
    this.isDirectOrder = isDirectOrder;
  }

  encryptF(indexOfMsgChar, indexOfKeyChar) {
    return indexOfMsgChar + indexOfKeyChar >= 26 ? Math.abs((indexOfMsgChar + indexOfKeyChar) - 26) : indexOfMsgChar + indexOfKeyChar;
  }

  decryptF(indexOfMsgChar, indexOfKeyChar) {
    return indexOfMsgChar - indexOfKeyChar < 0 ? 26 - Math.abs(indexOfMsgChar - indexOfKeyChar) : indexOfMsgChar - indexOfKeyChar;
  }

  cryptoFunction(message, key, encryptFunction) {
    if (!message || !key) {
      throw new Error('Not enough arguments')
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    message = message.toUpperCase();
    key = key.toUpperCase();

    let indexOfKey = -1;
    let lengthOfKey = key.length;

    let encryptArr = [];
    for (let i = 0; i < message.length; i++) {
      let indexOfMsgChar = alphabet.indexOf(message[i]);
      if (indexOfMsgChar > -1) {
        if (indexOfKey < lengthOfKey - 1) {
          indexOfKey += 1;
        } else {
          indexOfKey = 0;
        }
        let indexOfKeyChar = alphabet.indexOf(key[indexOfKey]);
        let indexOfEncriptChar = encryptFunction(indexOfMsgChar, indexOfKeyChar);
        encryptArr.push(alphabet[indexOfEncriptChar]);
      } else {
        encryptArr.push(message[i])
      }
    }
    return this.isDirectOrder ? encryptArr.join('') : encryptArr.reverse().join('');
  }

  encrypt(message, key, encryptF = this.encryptF) {
    return this.cryptoFunction(message, key, encryptF);
  }

  decrypt(message, key, decryptF = this.decryptF) {
    return this.cryptoFunction(message, key, decryptF);
  }
}

module.exports = VigenereCipheringMachine;
