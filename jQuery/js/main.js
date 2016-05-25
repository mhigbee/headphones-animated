// What is the DOM
// What is the Browser Dom
// What is the HTML Dom
// What is DOM Node
// When an HTML document is loaded into a web browser, it becomes a document object.
// What is the document Node The document object is the root node of the HTML document and the "owner" of all other nodes:
// (element nodes, text nodes, attribute nodes, and comment nodes).
// This is important The document object provides properties and methods to access all node objects, from within JavaScript.
// This is important  The document is a part of the Window object and can be accessed as window.document.
// Certain types of nodes inherit methods and properties that others do not
// Check out the methods and properties of the DOM Api for the document  http://www.w3schools.com/jsref/dom_obj_document.asp
// Here are more examples of properties and methods available to elements http://www.w3schools.com/jsref/dom_obj_all.asp

$( document ).ready(function() {
   // $('#menu').click(function(){
   //     $('.menu-overlay').toggleClass('hide-menu');
   //
   // });
    $('#menu').click(function(){
        $('.side-slideout').toggleClass('hide-item');
    });


    //var theMenu = document.getElementById('menu'),
    //    overLay = document.getElementById('someother'),
    //    menu = document.getElementById('menu').style;
    //
    //theMenu.addEventListener('click', function(){
    //    menu.height = '200px';
    //    menu.background = "#ccc";
    //})

});