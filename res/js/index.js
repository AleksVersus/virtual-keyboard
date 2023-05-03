const keyBase = {
  Backquote: {
    engLow: '`',
    engUpp: '~',
    rusLow: 'ё',
    rusUpp: 'Ё',
    engCaps: false,
    rusCaps: true,
  },
  Digit1: {
    engLow: '1',
    engUpp: '!',
    engCaps: false,
    rusCaps: false,
  },
  Digit2: {
    engLow: '2',
    engUpp: '@',
    rusLow: '2',
    rusUpp: '"',
    engCaps: false,
    rusCaps: false,
  },
  Digit3: {
    engLow: '3',
    engUpp: '#',
    rusLow: '3',
    rusUpp: '№',
    engCaps: false,
    rusCaps: false,
  },
  Digit4: {
    engLow: '4',
    engUpp: '$',
    rusLow: '4',
    rusUpp: ';',
    engCaps: false,
    rusCaps: false,
  },
  Digit5: {
    engLow: '5',
    engUpp: '%',
    engCaps: false,
    rusCaps: false,
  },
  Digit6: {
    engLow: '6',
    engUpp: '^',
    rusLow: '6',
    rusUpp: ':',
    engCaps: false,
    rusCaps: false,
  },
  Digit7: {
    engLow: '7',
    engUpp: '&',
    rusLow: '7',
    rusUpp: '?',
    engCaps: false,
    rusCaps: false,
  },
  Digit8: {
    engLow: '8',
    engUpp: '*',
    engCaps: false,
    rusCaps: false,
  },
  Digit9: {
    engLow: '9',
    engUpp: '(',
    engCaps: false,
    rusCaps: false,
  },
  Digit0: {
    engLow: '0',
    engUpp: ')',
    engCaps: false,
    rusCaps: false,
  },
  Minus: {
    engLow: '-',
    engUpp: '_',
    engCaps: false,
    rusCaps: false,
  },
  Equal: {
    engLow: '=',
    engUpp: '+',
    engCaps: false,
    rusCaps: false,
  },
  Backspace: {
    engLow: 'Backspace',
    engCaps: false,
    rusCaps: false,
  },
  Tab: {
    engLow: 'Tab',
    engCaps: false,
    rusCaps: false,
  },
  KeyQ: {
    engLow: 'q',
    engUpp: 'Q',
    rusLow: 'й',
    rusUpp: 'Й',
    engCaps: true,
    rusCaps: true,
  },
  KeyW: {
    engLow: 'w',
    engUpp: 'W',
    rusLow: 'ц',
    rusUpp: 'Ц',
    engCaps: true,
    rusCaps: true,
  },
  KeyE: {
    engLow: 'e',
    engUpp: 'E',
    rusLow: 'у',
    rusUpp: 'У',
    engCaps: true,
    rusCaps: true,
  },
  KeyR: {
    engLow: 'r',
    engUpp: 'R',
    rusLow: 'к',
    rusUpp: 'К',
    engCaps: true,
    rusCaps: true,
  },
  KeyT: {
    engLow: 't',
    engUpp: 'T',
    rusLow: 'е',
    rusUpp: 'Е',
    engCaps: true,
    rusCaps: true,
  },
  KeyY: {
    engLow: 'y',
    engUpp: 'Y',
    rusLow: 'н',
    rusUpp: 'Н',
    engCaps: true,
    rusCaps: true,
  },
  KeyU: {
    engLow: 'u',
    engUpp: 'U',
    rusLow: 'г',
    rusUpp: 'Г',
    engCaps: true,
    rusCaps: true,
  },
  KeyI: {
    engLow: 'i',
    engUpp: 'I',
    rusLow: 'ш',
    rusUpp: 'Ш',
    engCaps: true,
    rusCaps: true,
  },
  KeyO: {
    engLow: 'o',
    engUpp: 'O',
    rusLow: 'щ',
    rusUpp: 'Щ',
    engCaps: true,
    rusCaps: true,
  },
  KeyP: {
    engLow: 'p',
    engUpp: 'P',
    rusLow: 'з',
    rusUpp: 'З',
    engCaps: true,
    rusCaps: true,
  },
  BracketLeft: {
    engLow: '[',
    engUpp: '{',
    rusLow: 'х',
    rusUpp: 'Х',
    engCaps: false,
    rusCaps: true,
  },
  BracketRight: {
    engLow: ']',
    engUpp: '}',
    rusLow: 'ъ',
    rusUpp: 'Ъ',
    engCaps: false,
    rusCaps: true,
  },
  Enter: {
    engLow: 'Enter',
    engCaps: false,
    rusCaps: false,
  },
  CapsLock: {
    engLow: 'CapsLock',
    engCaps: false,
    rusCaps: false,
  },
  KeyA: {
    engLow: 'a',
    engUpp: 'A',
    rusLow: 'ф',
    rusUpp: 'Ф',
    engCaps: true,
    rusCaps: true,
  },
  KeyS: {
    engLow: 's',
    engUpp: 'S',
    rusLow: 'ы',
    rusUpp: 'Ы',
    engCaps: true,
    rusCaps: true,
  },
  KeyD: {
    engLow: 'd',
    engUpp: 'D',
    rusLow: 'в',
    rusUpp: 'В',
    engCaps: true,
    rusCaps: true,
  },
  KeyF: {
    engLow: 'f',
    engUpp: 'F',
    rusLow: 'а',
    rusUpp: 'А',
    engCaps: true,
    rusCaps: true,
  },
  KeyG: {
    engLow: 'g',
    engUpp: 'G',
    rusLow: 'п',
    rusUpp: 'П',
    engCaps: true,
    rusCaps: true,
  },
  KeyH: {
    engLow: 'h',
    engUpp: 'H',
    rusLow: 'р',
    rusUpp: 'Р',
    engCaps: true,
    rusCaps: true,
  },
  KeyJ: {
    engLow: 'j',
    engUpp: 'J',
    rusLow: 'о',
    rusUpp: 'О',
    engCaps: true,
    rusCaps: true,
  },
  KeyK: {
    engLow: 'k',
    engUpp: 'K',
    rusLow: 'л',
    rusUpp: 'Л',
    engCaps: true,
    rusCaps: true,
  },
  KeyL: {
    engLow: 'l',
    engUpp: 'L',
    rusLow: 'д',
    rusUpp: 'Д',
    engCaps: true,
    rusCaps: true,
  },
  Semicolon: {
    engLow: ';',
    engUpp: ':',
    rusLow: 'ж',
    rusUpp: 'Ж',
    engCaps: false,
    rusCaps: true,
  },
  Quote: {
    engLow: "'",
    engUpp: '"',
    rusLow: 'э',
    rusUpp: 'Э',
    engCaps: false,
    rusCaps: true,
  },
  Backslash: {
    engLow: '\\',
    engUpp: '|',
    rusLow: '\\',
    rusUpp: '/',
    engCaps: false,
    rusCaps: false,
  },
  ShiftLeft: {
    engLow: 'Shift',
    engCaps: false,
    rusCaps: false,
  },
  KeyZ: {
    engLow: 'z',
    engUpp: 'Z',
    rusLow: 'я',
    rusUpp: 'Я',
    engCaps: true,
    rusCaps: true,
  },
  KeyX: {
    engLow: 'x',
    engUpp: 'X',
    rusLow: 'ч',
    rusUpp: 'Ч',
    engCaps: true,
    rusCaps: true,
  },
  KeyC: {
    engLow: 'c',
    engUpp: 'C',
    rusLow: 'с',
    rusUpp: 'С',
    engCaps: true,
    rusCaps: true,
  },
  KeyV: {
    engLow: 'v',
    engUpp: 'V',
    rusLow: 'м',
    rusUpp: 'М',
    engCaps: true,
    rusCaps: true,
  },
  KeyB: {
    engLow: 'b',
    engUpp: 'B',
    rusLow: 'и',
    rusUpp: 'И',
    engCaps: true,
    rusCaps: true,
  },
  KeyN: {
    engLow: 'n',
    engUpp: 'N',
    rusLow: 'т',
    rusUpp: 'Т',
    engCaps: true,
    rusCaps: true,
  },
  KeyM: {
    engLow: 'm',
    engUpp: 'M',
    rusLow: 'ь',
    rusUpp: 'Ь',
    engCaps: true,
    rusCaps: true,
  },
  Comma: {
    engLow: ',',
    engUpp: '&lt;',
    rusLow: 'б',
    rusUpp: 'Б',
    engCaps: false,
    rusCaps: true,
  },
  Period: {
    engLow: '.',
    engUpp: '&gt;',
    rusLow: 'ю',
    rusUpp: 'Ю',
    engCaps: false,
    rusCaps: true,
  },
  Slash: {
    engLow: '/',
    engUpp: '?',
    rusLow: '.',
    rusUpp: ',',
    engCaps: false,
    rusCaps: false,
  },
  ShiftRight: {
    engLow: 'Shift',
    engCaps: false,
    rusCaps: false,
  },
  ControlLeft: {
    engLow: 'Ctrl',
    engCaps: false,
    rusCaps: false,
  },
  MetaLeft: {
    engLow: 'Win',
    engCaps: false,
    rusCaps: false,
  },
  AltLeft: {
    engLow: 'Alt',
    engCaps: false,
    rusCaps: false,
  },
  Space: {
    engLow: '&nbsp;',
    engCaps: false,
    rusCaps: false,
  },
  AltRight: {
    engLow: 'Alt',
    engCaps: false,
    rusCaps: false,
  },
  ControlRight: {
    engLow: 'Ctrl',
    engCaps: false,
    rusCaps: false,
  },
  Delete: {
    engLow: 'Del',
    engCaps: false,
    rusCaps: false,
  },
  ArrowUp: {
    engLow: '↑',
    engCaps: false,
    rusCaps: false,
  },
  ArrowRight: {
    engLow: '→',
    engCaps: false,
    rusCaps: false,
  },
  ArrowDown: {
    engLow: '↓',
    engCaps: false,
    rusCaps: false,
  },
  ArrowLeft: {
    engLow: '←',
    engCaps: false,
    rusCaps: false,
  },
};
class KbModes {
  constructor(lang = 'eng') {
    this.isCapsLock = false;
    this.lang = lang;
    this.isShift = false;
  }

  changeLang() {
    this.lang = (this.lang === 'eng' ? 'rus' : 'eng');
  }
}
const saveDot = localStorage;
let keyboardModes;
if (saveDot.getItem('lang')) {
  const lang = saveDot.getItem('lang');
  keyboardModes = new KbModes(lang);
} else {
  keyboardModes = new KbModes();
  saveDot.setItem('lang', keyboardModes.lang);
}
const pressedKeys = new Set(); // keys id (code)-s

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((a) => {
    element.setAttribute(a, attributes[a]);
  });
}

function addKeypadRows(keypad) {
  const levels = ['a', 'b', 'c', 'd', 'e'];
  const result = [];
  while (levels.length > 0) {
    const l = levels.pop();
    const el = document.createElement('div');
    el.classList.add('keypad-row');
    el.classList.add(`keypad-row-${l}`);
    keypad.append(el);
    result.push(el);
  }
  return result;
}

function getButtonText(key) {
  if (keyboardModes.lang === 'eng' || keyBase[key].rusLow === undefined) {
    // eng on if rus symbols is out, or eng lang switch on
    if (((keyboardModes.isCapsLock && keyBase[key].engCaps) || (keyboardModes.isShift))
      && keyBase[key].engUpp !== undefined) {
      return keyBase[key].engUpp;
    }
    return keyBase[key].engLow;
  }
  if (((keyboardModes.isCapsLock && keyBase[key].rusCaps) || (keyboardModes.isShift))
    && keyBase[key].rusUpp !== undefined) {
    return keyBase[key].rusUpp;
  }
  return keyBase[key].rusLow;
}

function retapeButtonsNames() {
  Object.keys(keyBase).forEach((key) => {
    const el = document.querySelector(`#${key}`);
    const last = String(el.innerHTML);
    el.innerHTML = getButtonText(key);
    if (last !== String(el.innerHTML)) {
      el.classList.add('keypad-row__item-change');
      setTimeout((e) => { e.classList.remove('keypad-row__item-change'); }, 300, el);
    }
  });
}

function fillKeypadRows(row, buttons) {
  buttons.forEach((button) => {
    const el = document.createElement('div');
    el.classList.add('keypad-row__item');
    el.id = button;
    el.innerHTML = getButtonText(button);
    row.append(el);
  });
}

function addKeypadItems(keypadRows) {
  const keysRows = {
    e: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    d: ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    c: ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    b: ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
    a: ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight'],
    arrows: ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  };
  keypadRows.forEach((row) => {
    if (row.classList.contains('keypad-row-e')) {
      fillKeypadRows(row, keysRows.e);
    } else if (row.classList.contains('keypad-row-d')) {
      fillKeypadRows(row, keysRows.d);
    } else if (row.classList.contains('keypad-row-c')) {
      fillKeypadRows(row, keysRows.c);
    } else if (row.classList.contains('keypad-row-b')) {
      fillKeypadRows(row, keysRows.b);
    } else if (row.classList.contains('keypad-row-a')) {
      fillKeypadRows(row, keysRows.a);
      const arrowsBlock = document.createElement('div');
      arrowsBlock.classList.add('keypad-row__arrows');
      row.append(arrowsBlock);
      for (let i = 0, b = 0; i < 6; i += 1) {
        const el = document.createElement('div');
        if (i === 0 || i === 2) {
          el.classList.add('keypad-row__spaced');
          el.innerHTML = '&nbsp;';
        } else {
          el.classList.add('keypad-row__item');
          el.classList.add('keypad-row__arrow-item');
          el.id = keysRows.arrows[b];
          el.innerHTML = getButtonText(keysRows.arrows[b]);
          b += 1;
        }
        arrowsBlock.append(el);
      }
    }
  });
}

function getRange() {
  const ta = document.querySelector('#kb-textarea');
  if (document.activeElement === ta) {
    return [ta.selectionStart, ta.selectionEnd];
  }
  return null;
}

function isSign(key) {
  if (keyBase[key].engUpp !== undefined) {
    return true;
  }
  return false;
}

function insertSign(key) {
  const ta = document.querySelector('#kb-textarea');
  const range = getRange();
  const btnText = ((keyBase[key] !== undefined) ? getButtonText(key) : key);
  if (range === null) {
    ta.value += btnText;
  } else {
    ta.value = ta.value.slice(0, range[0]) + btnText + ta.value.slice(range[1]);
    ta.selectionStart = range[0] + 1;
    ta.selectionEnd = range[0] + 1;
  }
}

function deleteSign(key) {
  const ta = document.querySelector('#kb-textarea');
  const range = getRange();
  if (range === null) {
    if (key === 'Backspace') {
      ta.value = ta.value.slice(0, ta.value.length - 1);
    } else if (key === 'Delete') {
      // pass
    }
  } else if (key === 'Backspace') {
    if (range[0] === range[1] && !(range[0] === 0 && range[1] === 0)) {
      ta.value = ta.value.slice(0, range[0] - 1) + ta.value.slice(range[1]);
      ta.selectionStart = range[0] - 1;
      ta.selectionEnd = range[0] - 1;
    } else if (range[0] !== range[1]) {
      ta.value = ta.value.slice(0, range[0]) + ta.value.slice(range[1]);
      // eslint is dummy
      ta.selectionStart = range[0] + 0;
      ta.selectionEnd = range[0] + 0;
    }
  } else if (range[0] === range[1]
    && !(range[0] === ta.value.length || range[1] === ta.value.length)) {
    ta.value = ta.value.slice(0, range[0]) + ta.value.slice(range[1] + 1);
    // eslint is dummy
    ta.selectionStart = range[1] + 0;
    ta.selectionEnd = range[1] + 0;
  } else if (range[0] !== range[1]) {
    ta.value = ta.value.slice(0, range[0]) + ta.value.slice(range[1]);
    // eslint is dummy
    [ta.selectionStart] = range;
    [ta.selectionEnd] = range;
  }
}

function runBtnBehaviour(key) {
  const ta = document.querySelector('#kb-textarea');
  if (isSign(key)) {
    insertSign(key, ta);
  } else {
    switch (key) {
      case 'Space':
        insertSign(' ', ta);
        break;
      case 'Tab':
        insertSign('\t', ta);
        break;
      case 'Enter':
        insertSign('\n', ta);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        insertSign(key, ta);
        break;
      case 'Backspace':
        deleteSign(key, ta);
        break;
      case 'Delete':
        deleteSign(key, ta);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if ((pressedKeys.has('AltLeft') || pressedKeys.has('AltRight')) && pressedKeys.size === 2) {
          keyboardModes.changeLang();
          retapeButtonsNames();
          saveDot.setItem('lang', keyboardModes.lang);
        }
        break;
      case 'AltLeft':
      case 'AltRight':
        if ((pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight')) && pressedKeys.size === 2) {
          keyboardModes.changeLang();
          retapeButtonsNames();
          saveDot.setItem('lang', keyboardModes.lang);
        }
        break;
      default:
        break;
    }
  }
}

function addReferences(wrapper) {
  const ref = [
    'Клавиатура создана в системе <span class="view-selection">Windows</span>',
    '<p class="references">Переключение раскладки производится комбинацией клавиш <span class="view-selection">Alt + Shift</span>',
    '<p class="references">Нажаты клавиши: <span class="view-selection" id="pressed-keys">&nbsp;</span></p>',
  ];
  ref.forEach((i) => {
    const p = document.createElement('p');
    p.classList.add('references');
    p.innerHTML = i;
    wrapper.append(p);
  });
}

function createKeyboard() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('keyboard-wrapper');
  document.body.append(wrapper);
  const textarea = document.createElement('textarea');
  textarea.classList.add('default-textarea');
  setAttributes(textarea, {
    name: 'kb-textarea',
    id: 'kb-textarea',
    cols: '30',
    rows: '10',
  });
  wrapper.append(textarea);
  const keypad = document.createElement('div');
  keypad.classList.add('keypad');
  keypad.id = 'keypad';
  wrapper.append(keypad);
  const keypadRows = addKeypadRows(keypad);
  addKeypadItems(keypadRows);
  addReferences(wrapper);
}

function refreshPressedButton(pressedK) {
  const r = [];
  pressedK.forEach((el) => {
    r.push(el);
  });
  const pressed = document.querySelector('#pressed-keys');
  pressed.innerHTML = r.join(' + ');
}

function pressButton(key) {
  const btn = document.querySelector(`#${key}`);
  if (key !== 'CapsLock') {
    pressedKeys.add(key);
    btn.classList.add('item-active');
  } else {
    if (keyboardModes.isCapsLock) {
      pressedKeys.delete(key);
    } else {
      pressedKeys.add(key);
    }
    keyboardModes.isCapsLock = !keyboardModes.isCapsLock;
    btn.classList.toggle('item-active');
  }
  if (key === 'ShiftRight' || key === 'ShiftLeft') {
    keyboardModes.isShift = true;
  }
  // pressed buttons
  refreshPressedButton(pressedKeys);
  retapeButtonsNames();
  runBtnBehaviour(key);
}

function pressBtnIntercept(event) {
  // keypad intercept event from buttons and run behaviour
  event.preventDefault();
  const clicked = event.target;
  if (clicked.classList.contains('keypad-row__item')) {
    pressButton(clicked.id);
  }
}
function pressKeyIntercept(event) {
  event.preventDefault();
  if (keyBase[event.code] !== undefined) {
    pressButton(event.code);
  } else {
    pressedKeys.add(event.code);
    refreshPressedButton(pressedKeys);
  }
}

function releaseButton(key) {
  const btn = document.querySelector(`#${key}`);
  if (key !== 'CapsLock') {
    pressedKeys.delete(key);
    btn.classList.remove('item-active');
  }
  if (key === 'ShiftRight' || key === 'ShiftLeft') {
    keyboardModes.isShift = false;
  }
  // pressed buttons
  refreshPressedButton(pressedKeys);
  retapeButtonsNames();
}

function releaseBtnIntercept(event) {
  // keypad intercept event from buttons and run behaviour
  const clicked = event.target;
  if (clicked.classList.contains('keypad-row__item')) {
    releaseButton(clicked.id);
  }
}
function releaseKeyIntercept(event) {
  // keypad intercept event from buttons and run behaviour
  if (keyBase[event.code] !== undefined) {
    releaseButton(event.code);
  } else {
    pressedKeys.delete(event.code);
    refreshPressedButton(pressedKeys);
  }
}

createKeyboard();

const keypad = document.querySelector('#keypad');
keypad.addEventListener('mousedown', pressBtnIntercept);
keypad.addEventListener('mouseup', releaseBtnIntercept);
keypad.addEventListener('selectstart', (e) => { e.preventDefault(); });
document.addEventListener('keydown', pressKeyIntercept);
document.addEventListener('keyup', releaseKeyIntercept);
document.querySelector('#kb-textarea').addEventListener('focus', getRange);
