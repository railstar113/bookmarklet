javascript: (() => {
  const words = ["予め", "併せ", "いったん", "及び", "下さ", "る事", "た事", "な事", "の事", "う事", "先程", "更に", "既に", "全て", "ぜひ", "沢山", "但し", "為", "出来", "問合", "通り", "殆ど", "又", "まったく", "迄", "様な", "様に", "宜しく", "ヵ月", "か月", "カ月", "ケ月", "おこな", "子供", "こども", "弊社", "PC", "HP", "一つ一つ", "一人々", "等", "頂", "致", "ご対応", "共に", "伴", "：", "；", "(", ")", "?", "!", "０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ", "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "＆", "ｘ", "ｙ", "ｚ", "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ", "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "＆", "Ｘ", "Ｙ", "Ｚ"];
  const comparison = [
    ["分か", "わか"],
    ["綺麗", "きれい", "キレイ"],
    ["お勧め", "おすすめ", "オススメ"]
  ];
  const titleText = document.title;
  const descText = document.getElementsByTagName("meta[name=\"description\"]").content;
  const iframes = document.querySelectorAll("iframe");
  if (iframes) {
    for (let i = iframes.length - 1; i >= 0; i--) {
      iframes[i].parentNode.removeChild(iframes[i]);
    }
  }
  let bodyText = document.body.textContent;
  const startIndex = bodyText.indexOf("/*");
  const endIndex = bodyText.lastIndexOf("*/");
  if (startIndex !== -1 && endIndex !== -1) {
    const startText = bodyText.slice(0, startIndex);
    const endText = bodyText.slice(endIndex + 2);
    bodyText = startText + endText;
  }
  let wordsInHead = [];
  let wordsInBody = [];
  words.forEach(word => {
    if (titleText.includes(word)) {
      wordsInHead.push(word);
    }
    if (descText) {
      if (descText.includes(word)) {
        wordsInHead.push(word);
      }
    }
    if (bodyText.includes(word)) {
      wordsInBody.push(word);
    }
  });
  let mixedHeadText = [];
  let mixedBodyText = [];
  comparison.forEach(ary => {
    let titleMatch = ary.filter(word => titleText.includes(word));
    if (titleMatch.length >= 2) {
      mixedHeadText.push(titleMatch);
    }
    let descMatch = [];
    if (descText) {
      descMatch = ary.filter(word => descText.includes(word));
    }
    if (descMatch) {
      if (descMatch.length >= 2) {
        mixedHeadText.push(descMatch);
      }
    }
    let bodyMatch = ary.filter(word => bodyText.includes(word));
    if (bodyMatch.length >= 2) {
      mixedBodyText.push(bodyMatch);
    }
  });
  let alertText = `メタに含まれる：\n${wordsInHead.join("、")}\n本文に含まれる：\n${wordsInBody.join("、")}\n\n表記ゆれ（メタ）：\n${mixedHeadText.join("\n ")}\n表記ゆれ（本文）：\n${mixedBodyText.join("\n ")}`;
  alert(alertText);
})();