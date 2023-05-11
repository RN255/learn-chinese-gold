let inputText =
  "13,你多大？,How old are you?,你多大？,我二十八岁。,我十九岁。我的朋友三十七岁。,我的同事四十五岁。,刘明多大？,刘明六十一岁。,New words,多,duō,many,大,dà,big,多大,duōdà,how old,二,èr,2,十,shí,10,八,bā,8,二十八,èrshíbā,28,岁,suì,years,九,jiǔ,9,十九,shíjiǔ,19,三,sān,3,七,qī,7,三十七,sānshíqī,37,同事,tóngshì,colleague,四,sì,4,五,wǔ,5,四十五,sì shí wǔ,45,六,liù,6,一,yī,1,六十一,liù shí yī,61,Dialogue translation and pinyin,Nǐ duōdà?,(How old are you?),Wǒ èrshíbā suì.,(I am 28 years old.),Wǒ shíjiǔ suì. Wǒde péngyǒu sānshíqī suì.,(I am 19 years old. My friend is 37 years old.),Wǒde tóngshì sìshíwǔ suì.,(My colleague is 45 years old),Liú míng duōdà?,(How old is liu ming?),Liú míng liùshíyī suì.,(liu ming is 61 years old.),Key phrases,你多大？,Nǐ duōdà?,How old are you?,我二十八岁。,Wǒ èrshíbā suì.,I am 28 years old.,我的朋友三十七岁。, Wǒde péngyou sānshíqī suì.,My friend is 37 years old.";

var splitText = inputText.split(",");

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

  if (splitText[startingIndex + 3] === "Dialogue translation and pinyin") {
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
firstThreeLines();
MainConvo();

// Print the output the the terminal
for (let i = 0; i < 100; i++) {
  console.log(splitText[i]);
}
