
const sampleString = "Forget  CVs..Save time . x x";
const splitString = sampleString.split(/\.|!|\?/);

var wordCountList = [];

// console.log(splitString);

for(var index=0; index < splitString.length; index++){
    const validString1 = splitString[index].replace(/^\s+|\s+$/g, "");
    const validString2 = validString1.replace(/\s\s+/g, ' ');

    // console.log(validString);

    if(validString2 === ''){
        wordCountList.push(0);
    }else{
        const words = validString2.split(/\s/);
        console.log(words);

        const wordCount = (validString2.split(/\s/)).length;
        wordCountList.push(wordCount);
    }
}

const maxValue =  Math.max.apply(null,wordCountList);
console.log(maxValue);