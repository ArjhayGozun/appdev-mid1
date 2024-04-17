// alert("Hello");

// 1st step - Movement animation to happen
const card = $('.card');
const container = $('.container');
// These lines initialize variables card and container with jQuery objects representing DOM elements with classes card and container, respectively.



// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social = $('.social');
const info = $('.info h4');
const profile = $('.profile');
//These lines initialize variables for various elements within the card.



// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
//This sets up an event listener for mouse movement within the container element.
//It calculates the xAxis and yAxis values based on the mouse position relative to the center of the window and updates the transform property of the card element accordingly to create a 3D rotation effect.



// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.css('transform', "none");
    // Popout animation for all items
    photo.css('transform', "translateZ(50px)");
    title.css('transform', "translateZ(50px)");
    social.css('transform', "translateZ(50px)");
    info.css('transform', "translateZ(50px)");
    profile.css('transform', "translateZ(50px)");
});
//This event fires when the mouse enters the container element.
//It resets the transform property of the card element to its initial state (no rotation) and applies a pop-out animation effect to various elements within the card (photo, title, social, info, profile) by translating them along the z-axis.



// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.css('transition', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});
//This event fires when the mouse leaves the container element.
//It adds a transition effect to the card element to smoothly animate its rotation back to its initial state (no rotation) using CSS transition, effectively resetting the 3D rotation.