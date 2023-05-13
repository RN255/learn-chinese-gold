let inputText =
  "51 $你去过英国吗？$Have you been to the UK? $我要把这个包裹和这封信寄到英国。 $你打算空运还是海运？ $空运大概是多少？ $一百块左右。 $哦，有点贵。你去过英国吗？ $我没去过。 $New words $包裹 $bāoguǒ $parcel $封 $fēng $measure word for letters $信 $xìn $letter $寄 $jì $send, post $到 $dào $to, arrive $空运 $kōngyùn $airmail $海运 $hǎiyùn $sea mail $大概 $dàgài $approximately $左右 $zuǒyòu $approximately $过 $guò $indicates an action has been completed $Dialouge translation and pinyin $Wǒ yào bǎ zhège bāoguǒ hé zhè fēng xìn jì dào yīngguó. $(I want to send this parcel and this letter to the UK.) $Nǐ dǎsuàn kōngyùn háishì hǎiyùn? $(Do you intend to use airmail or sea mail?) $Kōngyùn dàgài shì duōshao? $(How much approximately is airmail?) $Yìbǎi kuài zuǒyòu. $(Approximately 100 yuan.) $Ò, yǒudiǎn guì. Nǐ qù guo yīngguó ma? $(O, a bit expensive. Have you been to the UK?) $Wǒ méi qù guo. $(I have not been.) $Key phrases $我要把这个包裹和这封信寄到英国。$Wǒ yào bǎ zhège bāoguǒ hé zhè fēng xìn jì dào yīngguó. $I want to send this parcel and this letter to the UK. $空运大概是多少？ $Kōngyùn dàgài shì duōshao? $How much approximately is airmail? $我猜是一百块左右。 $Wǒ cāi shì yìbǎi kuài zuǒyòu. $I guess it is approximately 100 yuan. $你去过英国吗？ $Nǐ qù guo yīngguó ma? $Have you been to the UK? $我没去过。 $Wǒ méi qù guo. $I have not been.";

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
