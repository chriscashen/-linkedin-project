const userName = document.querySelector('.nav__username');
const profileCardTitle= document.querySelector('.profile-card__title')
const profileImage = document.querySelector('.profile-card__img').children[0];
const postImage = document.querySelector('.start-post-user__img').children[0];

const userdata = { name: 'Chris Cashen', job: 'Web Developer', profileImage: './assets/images/man.png' };

// Update the UI with the user data
function updateUserData(data) {
  userName.textContent = data.name;

  //Example Chris Cashen, Web Developer
  profileCardTitle.textContent = `${data.name}, ${data.job}`;
}

// Update the UI with the user image
function updateImage(data) {
  profileImage.src = data.profileImage;
}

// Update the UI with the user image
function updatePostImage(data) {
  postImage.src = data.profileImage;
}

// Update the UI
function updateUI(data) {
  updateUserData(data);
  updateImage(data);
  updatePostImage(data);
}


// Call the function to update the UI
updateUI(userdata);
