---
layout: post
title: "Android Application Development - UI"
subtitle: "A rundown of our progress on the App's UI Functionality"
date: 2017-01-22
poster: "Tiffany Cheung"
header_content: |
    <header class="intro-header" style="background-image: url('/images/background/bg_21.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-lg-offset-0 col-md-10 col-md-offset-1">
                    <div class="post-heading">
                        <h1 class="post-title-font">Android Application Development - UI</h1>
                        <h2 class="subheading">A rundown of our progress on the App's UI Functionality</h2>
                        <p class="post-meta">Posted by Tiffany Cheung on January 22, 2017</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
---

To interface between Google Maps and the OmniNav Belt, a smartphone application is developed. At the moment, the application is only being developed on Android.

Previously, in December, the functionalities of the application included:

- Accepting starting and ending location inputs
- Calculating the quickest walking route using Google Maps’ API
    - Draws the route on the map
    - Displays the first instruction on the interface

A screen capture of the application can be seen below:

<div style="display: flex; justify-content: center;">
	<img src="/images/blog/2017-01-22/image_1.png" alt="OLD App Screen Capture" width="25%" height="25%" style="padding:20px" />
</div>

The user interface (UI) has been updated in January as seen in the screen captures below:

<div style="display: flex; justify-content: center;">
	<img src="/images/blog/2017-01-22/image_2.png" alt="App Updated Screen Capture_1" width="25%" height="25%" style="padding:20px" /> <img src="/images/blog/2017-01-22/image_3.png" alt="App Updated Screen Capture_3" width="25%" height="25%" style="padding:20px" />
</div>

<div style="display: flex; justify-content: center;">
	<img src="/images/blog/2017-01-22/image_4.png" alt="App Updated Screen Capture_4" width="25%" height="25%" style="padding:20px" /> <img src="/images/blog/2017-01-22/image_5.png" alt="App Updated Screen Capture_5" width="25%" height="25%" style="padding:20px" />
</div>

The updated application has implemented the following new functionalities:

- Voice recognition: allows voice typing of the destination
- Text-to-speech: allows audio feedback of the current direction
- Current location set as the starting location by default
- Walking and transit routes
- A new screen displaying the current direction and the map of the route
- A new screen displaying the list of directions involved in the route

The first screen capture is the home screen of the application. By default, the starting location is set as user’s starting location but can be changed. The destination can be entered using the keyboard or by audio input. The application accepts the destination by voice (as seen in the second screen capture) when the microphone is pressed. The user can choose one of the two modes of transportation: walking and transit. The application then makes a call to Google Maps’ API which returns the quickest route. The application is redirected to the third screen capture. The third screen displays the current direction and the map of the route. When the instruction is clicked, the fourth screen capture is displayed which outlines all the directions involved in the route.

The new update to the application accomplishes all the basic functionalities using the touch screen interface. For the next update of the application, we will incorporate control of the entire application using only voice commands.