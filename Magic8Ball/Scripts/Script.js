//function getRandom(number) {
//    var randomNum = Math.round(Math.random() * number);
//    randomNum = randomNum.toString();

//    if (randomNum.length < 2) {
//        randomNum = "0" + randomNum;
//    }

//    return randomNum;
//}

var eightBall = [
    'As I See It Yes',
    'Ask Again Later',
    'Better Not Tell You Now',
    'Cannot Predict Now',
    'Concentrate and Ask Again',
    'Dont Count On It',
    'It Is Certain',
    'It Is Decidely So',
    'Most Likely',
    'My Reply Is No',
    'My Sources Say No',
    'Outlook Good',
    'Outlook Not So Good',
    'Reply Hazy Try Again',
    'Signs Point to Yes',
    'Very Doubtful',
    'Without A Doubt',
    'Yes',
    'Yes - Definitely',
    'You May Rely On It',
];
var randonFortune = eightBall[Math.floor(Math.random() * eightBall.length)];

function getRandomFortune() {
    document.getElementById('quote').innerHTML = randonFortune;
}
showquote();


//function getRandomFortune() {
    
//    var randomNum = Math.floor(Math.random() * eightBall.length);

//    audioElement.setAttribute('src', eightBall[randomNum]);


//}