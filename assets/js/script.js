/**
 * Created by jillvandendriessche on 11/14/15.
 */

// Global array for images
var characters = ['Cersei Lannister', 'Daenarys Targaryen', 'Maester Varys', 'Margarey Tyrell', 'Petyr Baelish', 'Samwell Tarly', 'Sansa Stark'];

var activeElement = 0;


var generateLists = function () {
    for (var i = 0, len = characters.length; i < len; i++) {
        var imgurl = characters[i].replace(' ', '-'); // Opzettelijk nog niet met regex. Items zijn zo gemaakt dat er maar 1 spatie inzit
        $('.carousel').append('<li class="hidden"><figure><img src="images/' + imgurl.toLocaleLowerCase() + '-1920.jpg" alt="' + characters[i] + '" title="' + characters[i] + '" /><figcaption>' + characters[i] + '</figcaption></figure></li>');
    }

    // Show only the first item
    $('.carousel li:first').addClass('visible').fadeIn();
};


var changeCarousel = function (e) {
    e.preventDefault();

    if ($(this).hasClass('previous') && (activeElement >0)) {
        swapElement(-1)
    } else if ($(this).hasClass('next') && (activeElement  < characters.length-1)) {
        swapElement(1)
    }
};

var swapElement = function (order) {
    $('.carousel .visible').fadeOut(function(){
        var li = $('.carousel li')[activeElement + order];
        $(li).addClass('visible').fadeIn();
        activeElement = activeElement + order;
    });
};


$(document).ready(function () {

    // Generate list items
    generateLists();

    // Bind events
    $('.sequence a').on('click', changeCarousel);



});
