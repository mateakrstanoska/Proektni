$(document).on('click', '.user, .already-account', function() {
    $('.form').addClass('login-active').removeClass('sign-up-active');
});

$(document).on('click', '.sign-up-btn', function() {
    $('.form').addClass('sign-up-active').removeClass('login-active');
});

$(document).on('click', '.form-cancel', function() {
    $('.form').removeClass('login-active').removeClass('sign-up-active');
});

$(document).ready(function() {
 
    $('#show-popup-button').click(function() {
        $('.popup').show();
    });

    $('.rate-cancel').click(function() {
        $('.popup').hide();
    });
});
/* const starsE1 = document.querySelectorAll(".fa-star");
const emojisE1=document.querySelectorAll(".fa-regular");

starsE1.forEach((starsE1, index)=>{
    starsE1.addEventListener("click",()=>{
        updaterating(index)
    });
});
function updaterating(index){
    starsE1.forEach((starsE1, idx)=>{
        if (idx< index + 1){
            starsE1.classList.add("active");
        }
        else{
            starsE1.classList.remove("active");
        }
    })
    emojisE1.forEach(emojiE1 =>{
        emojiE1.style.transform = 'translateX (-${index * 50}px)';
    })
} 
*/





const starsE1 = document.querySelectorAll(".fa-star");
const emojisE1 = document.querySelectorAll(".fa-regular");
const colorArray=["red","orange","lightblue","lightgreen","green"]

updaterating(4);
starsE1.forEach((starE1, index) => {
    starE1.addEventListener("click", () => {
        updaterating(index);
    });
});

function updaterating(index) {
    starsE1.forEach((starE1, idx) => {
        if (idx < index + 1) {
            starE1.classList.add("active");
        } else {
            starE1.classList.remove("active");
        }
    });

    emojisE1.forEach((emojiE1, idx) => {
        emojiE1.style.transform = `translateX(-${index * 60}px)`;
        emojiE1.style.color=colorArray[index];
    });
    
} 





const submitBtn = document.querySelector('.submit__btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart__icon')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments__container')

likeIcon.addEventListener('click', likePhoto)
submitBtn.addEventListener('click', submitFeedback)


feedbackArr = []
let positiveFeedback = false
let likesCount = 0

function submitFeedback(e){
    // get user name
    const userForm = userName.value 
    // get feedback
    const commentForm = comment.value 
    // if inputs are not empty
    if(userForm && commentForm !== ''){
        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // if liked add to count
        if(positiveFeedback === true){
            addLikes()
        }
        // clear inputs 
        resetForm()
        // add feedback to list
        addFeedback(newFeedback)
    }


    e.preventDefault()
}

function likePhoto(){
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
        // set feedback to liked
        positiveFeedback = true
    } else {
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
        // set feedback to not liked
        positiveFeedback = false
    }
}

function addLikes(){
    likesCount++
    count.innerHTML = likesCount
}

function resetForm(){
    userName.value = ''
    comment.value = ''
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`
    positiveFeedback = false
}

function addFeedback(item){
    // select first letter of the user name
    const letter = (item.userName).charAt(0)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'comment__card'
    // add id
    div.id = item.id 
    // add html
    div.innerHTML = `
    <div class="pic center__display">
                    ${letter}
                </div>
                <div class="comment__info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                    <div class="comment__bottom">
                        <div class="heart__icon--comment">
                            ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                        </div>
                        <button>
                            Reply
                        </button>
                    </div>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)
}





