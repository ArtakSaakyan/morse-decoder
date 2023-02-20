  const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  }

function decode(expr) {
  let code = []
  let decodeSplit =  expr.match(/.{2}/g);
  decodeSplit.forEach(el => {
    switch (el) {
      case '00': code.push('*')
        break
      case '10': code.push('.')
        break

      case '11': code.push('-')
        break

      case '**': code.push('*')
        break
    }
  })

  let morseList = []
  let morseSplit = code.join('').match(/.{5}/g)
  morseSplit.forEach(el => {
    if (el === '*****') {
      el = ' '
    } else {
      el = el.match(/[^*]/g).join('')
    }

    morseList.push(el)
  })

  return morseList.map(el => MORSE_TABLE[el] || ' ').join('')
}

// 00 - '*'
// 10 - '.'
// 11 - '-'
// ** - '*'

module.exports = {
  decode
}
