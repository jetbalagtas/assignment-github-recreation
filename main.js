$(document).ready(function () {


var avatarURL =  "<img src='" + user.avatar_url + "'>";
$('.avatar').append(avatarURL);

var githubName = "<h1>" + user.name + "</h1>";
$('.user').append(githubName);

$('.username').html(user.login);

$('.aboutLink').html(user.blog);

$('.dateJoined').html(user.created_at);




// var bitterHTML = "";
//
// _.each(bitterData, function (currVal, idx, arr) {
//   bitterHTML += "<article class='bit'>"
//     + "<h3>"
//     + "<img src='"
//     + currVal.avatar
//     + "'>"
//     + "</h3>"
//     + "<p>"
//     + currVal.bitter
//     + "</p>"
//     + "<button class='delete'>Delete</button>"
//     + "</article>";
//     console.log('bitterHTML: ', bitterHTML);
// });
//
// $('.bitters').html(bitterHTML);






















});
