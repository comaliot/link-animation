// register the plugin so GSAP could know that we're going to use it
gsap.registerPlugin(Flip);

// get all links
const links = document.querySelectorAll('.link-item a');

// get the line under the active link
const activeNavLine = document.querySelector('.active-link');

// loop through each link and add an event listener to each of the links
links.forEach(link => {
  link.addEventListener('click', () => {
    // set all links to defined color
    gsap.to(links, { color: '#023047' });

    // set the active element to defined color
    if (document.activeElement === link) {
      gsap.to(link, { color: '#ffb703' });
    }

    // Line movement animation

    // we pass in an element that we want to animate to the Flip.getState
    const state = Flip.getState(activeNavLine);
    // add/append active nav line to link that is pressed
    link.appendChild(activeNavLine);
    Flip.from(state, {
      duration: 0.9, // duration of movement
      absolute: true,
      ease: 'elastic.out(1, 0.5)',
    });
  });
});
