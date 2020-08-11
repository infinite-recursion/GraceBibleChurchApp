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


function setupHeightOfCards(){

    var $item = $('.carousel-item'); 
    var $wHeight = $(window).height();
    
    //The height of the menu
    var $menuHeight = $('#menu').height();

    //Iterate through all 8 cards
    for(var i = 0; i < 9; i++){

        var itemHeight = $item.eq(i).height();
        
        //Set the height of each card to be the entire height of displayble screen.
        //Motive behind this is to have each card take up at least the entire screen in case
        //the height of the card due to it's content is less than the entire height of the screen
        if(itemHeight < $wHeight-$menuHeight){
         
            $item.eq(i).height($wHeight-$menuHeight); 
        }

        $item.eq(i).addClass('full-screen');

    }

}

// Code inside here gets called once the HTML has loaded
$( document ).ready(function() {
    
 var $item = $('.carousel-item'); 
 //Set the first item in the carousel to be the first one that displays
 $item.eq(0).addClass('active');

 setupHeightOfCards();

 //The last item (item 8, the romans summary), will have a height
 //that is equal to the amount of content, which is why
 //the height isn't explicitly set like the other cards. This is done because
 //setting it to be the height of the screen may cause the content
 //to not all display since the amount of content is more than the size of the
 //screen

 //Set each carousel item (except the romans summary, item 8) to take up
 //screen if the orientation of the screen changes
 //(for example, someone rotating the phone to make it horziontal instead of vertical)
 $(window).on('resize', function (){
    setupHeightOfCards();
});

 
    
});
    