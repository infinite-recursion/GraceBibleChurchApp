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







// A $( document ).ready() block.
$( document ).ready(function() {
    
    

 //Logic for the carousel: setting each carousel
 //item to take up the entire screen
 var $item = $('.carousel-item'); 
 var $wHeight = $(window).height();
 $item.eq(0).addClass('active');
 $item.height($wHeight); 
 $item.addClass('full-screen');

 
 $(window).on('resize', function (){
   $wHeight = $(window).height();
   $item.height($wHeight);
 });
 
//  $('.carousel').carousel({
//    interval: false
//  });

 //Setting up the cards
 var card1 = document.getElementById('card1');
 
 //Add listener so that the card will flip when it is clicked on
 card1.addEventListener( 'click', function() {
     var cardFront = card1.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card1.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

 var card2 = document.getElementById('card2');
 
 card2.addEventListener( 'click', function() {
     var cardFront = card2.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card2.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

 var card3 = document.getElementById('card3');
 
 card3.addEventListener( 'click', function() {
     var cardFront = card3.querySelector('.card-front');
     cardFront.classList.toggle('is-flipped');
     var cardBack = card3.querySelector('.card-back');
     cardBack.classList.toggle('is-flipped');
     
     });

 var card4 = document.getElementById('card4');

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
    