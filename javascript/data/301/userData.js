//Write a function that takes in an object of userData with the following structure (but filled in with actual information)

const user1 = {
    username: 'Oscar',
    location: 'Los Angeles',
    favoriteColor: 'Green',
};

function myInfo(user1){
    console.log(`The user\’s name is ${user1.username}, they\’re located in ${user1.location}, and they love the color ${user1.favoriteColor}!`);

}// use . to call information from an object user1.username

myInfo(user1);
