javascript: (() => {
  const words = ["予め", "併せ", "いったん", "及び", "下さ", "る事", "た事", "な事", "の事", "う事", "先程", "更に", "既に", "全て", "ぜひ", "沢山", "但し", "為", "出来", "問合", "合せ", "通り", "殆ど", "又", "まったく", "迄", "様な", "様に", "宜しく", "ヵ月", "か月", "カ月", "ケ月", "おこな", "子供", "こども", "弊社", "PC", "HP", "一つ一つ", "一人々", "等", "頂", "致", "ご対応", "共に", "伴"];
  const harfWidthWords = ["(", ")", "?", "!"];
  const fullWidthWords = ["：", "；", "０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ", "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "＆", "ｘ", "ｙ", "ｚ", "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ", "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "＆", "Ｘ", "Ｙ", "Ｚ"];
  const compareWords = [
    ["分か", "わか"],
    ["綺麗", "きれい", "キレイ"],
    ["お勧め", "おすすめ", "オススメ"],
    ["様々", "さまざま"],
    ["参", "まい"]
  ];
  const elements = ["iframe", "style", "script", "noscript"];
  for (let element of elements) {
    const elements = document.querySelectorAll(element);
    if (elements) {
      for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].parentNode.removeChild(elements[i]);
      }
    }
  }
  let bodyText = document.body.textContent;
  const WordsToDelete = ["様子", "皆様", "お客様", "患者様", "徒様", "施主様", "先祖様", "釈迦様", "阿弥陀様"];
  WordsToDelete.forEach(word => {
    const regex = new RegExp(word, 'g');
    bodyText = bodyText.replace(regex, '');
  });
  while (true) {
    const startIndex = bodyText.indexOf("/*");
    const endIndex = bodyText.indexOf("*/");
    if (startIndex === -1 || endIndex === -1) {
      break;
    }
    const startText = bodyText.slice(0, startIndex);
    const endText = bodyText.slice(endIndex + 2);
    bodyText = startText + endText;
  }
  const wordsList = [...words, ...harfWidthWords, ...fullWidthWords];
  let wordsInBody = [];
  wordsList.forEach(word => {
    if (bodyText.includes(word)) {
      wordsInBody.push(word);
    }
  });
  let mixedBodyText = [];
  compareWords.forEach(ary => {
    let matchedWords = ary.filter(word => bodyText.includes(word));
    if (matchedWords.length >= 2) {
      mixedBodyText.push(matchedWords);
    }
  });
  const alertText = `含まれる：\n${wordsInBody.join("、")}\n\n表記ゆれ：\n${mixedBodyText.join("\n")}`;
  alert(alertText);
})();