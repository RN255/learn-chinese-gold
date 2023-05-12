let inputText =
"37$现在几点？$What time is it now?$现在几点？$现在三点十七分。$你几点起床？$六点半。$我们几点上课？$我们八点上课。$我们几点下课。$我们十点差十分下课。$New words$现在$xiànzài$now$几点？$jǐ diǎn?$what time?$点$diǎn$o’clock$分$fēn$minute$床$chuáng$bed$起床$qǐchuáng$get up$半$bàn$half$上课$shàng kè$start class$下课$xià kè$finish class$差$chà$short of$Dialouge translation and pinyin$Xiànzài jǐ diǎn?$(What time is it now?)$Xiànzài sān diǎn shíqī fēn.$(Now it is three o’clock and 17 minutes.)$Nǐ jǐ diǎn qǐchuáng?$(What time do you get up?)$Liù diǎn bàn.$(six thirty)$Wǒmen jǐ diǎn shàng kè?$(What time do we start class?)$Wǒmen bā diǎn shàng kè.$(We start class at 8 o’clock.)$Wǒmen jǐ diǎn xià kè?$(What time do we finish class?)$Wǒmen shí diǎn chà shí fēn xià kè.$(We finish class at ten minutes to ten.)$Key phrases$现在几点？$Xiànzài jǐ diǎn?$What time is it now?$现在三点十七分。$Xiànzài sān diǎn shíqī fēn.$Now it is three o’clock and 17 minutes.$你几点起床？$Nǐ jǐ diǎn qǐchuáng?$What time do you get up?$我们几点上课？$Wǒmen jǐ diǎn shàng kè?$ What time do we start class?"

var splitText = inputText.split("$");

function removeWhitespace() {
  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = splitText[i].trim();
  }
}

function firstThreeLines() {
  splitText[0] = "lessonNumber: " + '"' + splitText[0] + '",';
  splitText[1] = "titleChinese: " + '"' + splitText[1] + '",';
  splitText[2] = "titleEnglish: " + '"' + splitText[2] + '",';
}

function MainConvo() {
  for (let i = 3; i < splitText.length; i++) {
    if (splitText[i] === "New words") {
      splitText.splice(i, 1);
      indexAfterNewWords = i;
      translatedWords(indexAfterNewWords);
      break;
    } else if (i == 3) {
      splitText[i] = "convoLineOne: " + '"' + splitText[i] + '",';
    } else if (i == 4) {
      splitText[i] = "convoLineTwo: " + '"' + splitText[i] + '",';
    } else if (i == 5) {
      splitText[i] = "convoLineThree: " + '"' + splitText[i] + '",';
    } else if (i == 6) {
      splitText[i] = "convoLineFour: " + '"' + splitText[i] + '",';
    } else if (i == 7) {
      splitText[i] = "convoLineFive: " + '"' + splitText[i] + '",';
    } else if (i == 8) {
      splitText[i] = "convoLineSix: " + '"' + splitText[i] + '",';
    } else if (i == 9) {
      splitText[i] = "convoLineSeven: " + '"' + splitText[i] + '",';
    } else if (i == 10) {
      splitText[i] = "convoLineEight: " + '"' + splitText[i] + '",';
    } else if (i == 11) {
      splitText[i] = "convoLineNine: " + '"' + splitText[i] + '",';
    } else if (i == 12) {
      splitText[i] = "convoLineTen: " + '"' + splitText[i] + '",';
    } else if (i == 13) {
      splitText[i] = "convoLineEleven: " + '"' + splitText[i] + '",';
    }
  }
}

let stop = 0;
let wordTranslationRound = 1;

let yourNumber = [
  "zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
];

function translatedWords(startingIndex) {
  //   console.log("I was told this:" + startingIndex);
  //   for (let i = startingIndex; i < startingIndex + 5; i++) {
  //     console.log("this is i:" + i);
  //     splitText[i] = "translationChinWordOne: " + '"' + splitText[i] + '",';
  //   }

  //   a word block
  splitText[startingIndex] =
    "translationChinWord" +
    yourNumber[wordTranslationRound] +
    ': "' +
    splitText[startingIndex] +
    '",';

  splitText[startingIndex + 1] =
    "translationPinWord" +
    yourNumber[wordTranslationRound] +
    ': "' +
    splitText[startingIndex + 1] +
    '",';

  splitText[startingIndex + 2] =
    "translationEngWord" +
    yourNumber[wordTranslationRound] +
    ': "' +
    splitText[startingIndex + 2] +
    '",';

  wordTranslationRound++;

  if (splitText[startingIndex + 3] === "Dialouge translation and pinyin") {
    toDelete = startingIndex + 3;
    splitText.splice(toDelete, 1);
    sentanceStartingIndex = startingIndex + 3;
    sentanceTranslation(sentanceStartingIndex);
    // return;
  } else if (stop < 25) {
    newStartingIndex = startingIndex + 3;
    stop++;
    // console.log("new starting index" + newStartingIndex);
    translatedWords(newStartingIndex);
  } else {
    return;
  }
}

let sentanceTranslationRound = 1;
let sentanceStop = 0;

function sentanceTranslation(startingIndex) {
  //   a sentance block
  splitText[startingIndex] =
    "sentanceTranslationPin" +
    yourNumber[sentanceTranslationRound] +
    ': "' +
    splitText[startingIndex] +
    '",';

  let string = splitText[startingIndex + 1];
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "(" && string[i] !== ")") {
      result += string[i];
    }
  }

  splitText[startingIndex + 1] =
    "sentanceTranslationEng" +
    yourNumber[sentanceTranslationRound] +
    ': "' +
    result +
    '",';

  sentanceTranslationRound++;

  if (splitText[startingIndex + 2] === "Key phrases") {
    // return;
    toDelete = startingIndex + 2;
    splitText.splice(toDelete, 1);

    phraseStartingIndex = startingIndex + 2;
    keyPhrase(phraseStartingIndex);
  } else if (sentanceStop < 10) {
    newSentanceStartingIndex = startingIndex + 2;
    sentanceStop++;
    // console.log("new starting index" + newStartingIndex);
    sentanceTranslation(newSentanceStartingIndex);
  } else {
    return;
  }
}

let keyPhraseRound = 1;
let keyPhraseStop = 0;

function keyPhrase(startingIndex) {
  //   console.log("I was told this:" + startingIndex);
  //   for (let i = startingIndex; i < startingIndex + 5; i++) {
  //     console.log("this is i:" + i);
  //     splitText[i] = "translationChinWordOne: " + '"' + splitText[i] + '",';
  //   }

  //   a word block
  splitText[startingIndex] =
    "keyPhraseChin" +
    yourNumber[keyPhraseRound] +
    ': "' +
    splitText[startingIndex] +
    '",';

  splitText[startingIndex + 1] =
    "keyPhrasePin" +
    yourNumber[keyPhraseRound] +
    ': "' +
    splitText[startingIndex + 1] +
    '",';

  splitText[startingIndex + 2] =
    "keyPhraseEng" +
    yourNumber[keyPhraseRound] +
    ': "' +
    splitText[startingIndex + 2] +
    '",';

  keyPhraseRound++;

  if (splitText[startingIndex + 3] === undefined) {
    return;
  } else if (keyPhraseStop < 10) {
    newPhraseStartingIndex = startingIndex + 3;
    keyPhraseStop++;
    // console.log("new starting index" + newStartingIndex);
    keyPhrase(newPhraseStartingIndex);
  } else {
    return;
  }
}

// Call the functions
removeWhitespace();
firstThreeLines();
MainConvo();

// Print the output the the terminal
for (let i = 0; i < splitText.length; i++) {
  console.log(splitText[i]);
}
