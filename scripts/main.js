/* 
    I might want to have a threshold for
    when the class is toggled.

    What counts as an intersection?

    An intersection is whenever a given percentage
    of an element is visible within the
    viewport.

    How much should be showing to trigger 
    an intersection?

    Threshold: 25% or .25
*/

/* 
    In what context is the observer observing

    It is observing the root node.
*/

    let options = {
        root: null,
        threshold: .25,
    }

/*
    How are we going to handle intersection changes?

    1) When something starts to intersect
    2) When something ceases to intersect

    If it starts to intersect what do we want to do?
    - Apply the active class

    If it ceases to intersect what do we want to do?
    - Remove the active class
*/

function intersectionHandler(entries, observer) {
    //Do the stuff above//
   console.log(entries);
   entries.forEach(entry => {
       if(entry.isIntersecting) {
            entry.target.classList.add("active");
            let color = entry.target.dataset.color;
            document.body.style.backgroundColor = color;
       } else {
        //remove active if no longer intersecting
        entry.target.classList.remove("active");
       }
   });
}
   //i fit is intersecting

let observer = new IntersectionObserver(intersectionHandler, options);

/* Reference all of our images */

let images = document.querySelectorAll("img");

/* Loop through all images and tell the observer
to observe each one */

//for (let i = 0; i< images.length; i++) { } //ugly way


images.forEach((image) => {
    observer.observe(image);

});



