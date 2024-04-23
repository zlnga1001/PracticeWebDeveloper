const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    e.preventDefault(); 
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    tweetsContainer.append(newTweet);

    // console.log(usernameInput.value, tweetInput.value)

});

tweetsContainer.addEventListener('click', function(e){
    e.target.nodeName === 'LI' && e.target.remove();
})
