/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 
 //Code created by Cordova
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

    
};

app.initialize();
//End code created by Cordova


// Code inside here gets called once the HTML has loaded
$( document ).ready(function() {
    
    

 //Logic for the carousel: The carousel (from Bootstrap library) is the container that holds are the cards
 //The carousel is what provides the arrows that let you go from one card to the next, as well
 //as allowing you to swipe to get to the next card
 var $item = $('.carousel-item'); 
 var $wHeight = $(window).height();
 //Set the first item in the carousel to be the first one that displays
 $item.eq(0).addClass('active');
 //Set the height of each carousel item: will set the height to be the entire height of screen
 $item.height($wHeight); 
 //The full-screen css class is in index.css
 $item.addClass('full-screen');

 //Set each carousel item to take up
 //screen if the orientation of the screen changes
 //(for example, someone rotating the phone to make it horziontal instead of vertical)
 $(window).on('resize', function (){
   $wHeight = $(window).height();
   $item.height($wHeight);
 });

 //Setting up the cards:

 //Get the first card
 var card1 = document.getElementById('card1');
 
 //Add listener so the first card so that it will flip when it is clicked on
 card1.addEventListener( 'click', function() {

    //Get the front of the card and toggle whether or not it should be displayed. By default
    //The front of the card is displayed
     var cardFront = card1.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');

     //Get the back of the card and toggle whether or not it should be displayed.
     var cardBack = card1.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

  //Get the second card
 var card2 = document.getElementById('card2');
 
 //Add listener to the second card so that it will flip when it is clicked on. Same logic as the first card
 card2.addEventListener( 'click', function() {
     var cardFront = card2.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card2.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

 //Get the third card
 var card3 = document.getElementById('card3');
 
  //Add listener to the third card so that it will flip when it is clicked on. Same logic as the first card
 card3.addEventListener( 'click', function() {
     var cardFront = card3.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card3.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

 //Get the foruth card
 var card4 = document.getElementById('card4');

  //Add listener to the fourth card so that it will flip when it is clicked on. Same logic as the first card
 card4.addEventListener( 'click', function() {
     var cardFront = card4.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card4.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

 var card5 = document.getElementById('card5');

 card5.addEventListener( 'click', function() {
     var cardFront = card5.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card5.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });
    
    
    
});
    