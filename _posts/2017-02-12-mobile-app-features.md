---
layout: post
title: "Mobile App Features"
subtitle: "Update on added functionality"
date: 2017-02-12
poster: "Tiffany Cheung"
header_content: |
    <header class="intro-header" style="background-image: url('/images/background/bg_21.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-lg-offset-0 col-md-10 col-md-offset-1">
                    <div class="post-heading">
                        <h1 class="post-title-font">Mobile App Features</h1>
                        <h2 class="subheading">Update on added functionality</h2>
                        <p class="post-meta">Posted by Tiffany Cheung on February 12, 2017</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
---

# Recap
In the last update on the Android application, the next step of the application was to incorporate voice control of the application using voice commands.

<br>

# Voice Recognition and Touch-screen Features

Originally, the application was supposed to be designed such that it is controllable by the touch screen interface and voice commands at the same time. To incorporate voice recognition, a library named Pocketsphinx was initially used. However, after hours of testing and debugging, we could not get accurate results from the voice recognition provided by Pocketsphinx. In addition, the application was designed such that, Pocketsphinx is continuously listening for voice commands which drained the phone battery significantly. Thus, a new mode was introduced to the application to handle voice recognition.


The application was separated into two modes: touch-screen and voice modes. The touch-screen mode includes the interface that was mentioned in the last update of the application. The voice mode is designed to handle all voice recognition and to be used specifically for the visually impaired. In this mode, as seen in the screenshots below, the user must hold onto any part of the screen for 3 seconds before the voice recognition is activated. The user is then prompted to speak where it accepts commands such as ‘set the destination to the University of Waterloo’, ‘set the mode to walking’, etc. When the user has provided all the parameters to start the navigation, the user must tell the application to ‘start navigation’ where it proceeds to the second screen shot below. In both modes, there is voice feedback that directs the user of which direction they should walk towards. The voice mode shares the same functionality as the touch-screen mode except it is commanded by voice. The user can also switch between the two modes using the slide to unlock button at the bottom of the application as seen in the screenshots.

<div style="display: flex; justify-content: center;">
    <img src="/images/blog/2017-02-12/02.png" alt="Voice Screen Capture #1" width="25%" height="25%" style="padding:20px" />
    <img src="/images/blog/2017-02-12/05.png" alt="Voice Screen Capture #2" width="25%" height="25%" style="padding:20px" />
</div>

<br>

# More Features

Aside from the incorporation of the voice mode, new functionalities were added to the application as outlined below:
- New splash screen with the logo of the project
- Auto complete of addresses
- Recalculation of routes

The new functionalities can be seen in the screenshots below.

<div style="display: flex; justify-content: center;">
    <img src="/images/blog/2017-02-12/01.png" alt="Splash Screen" width="25%" height="25%" style="padding:20px" />
    <img src="/images/blog/2017-02-12/03.png" alt="Address Auto-Complete" width="25%" height="25%" style="padding:20px" />
    <img src="/images/blog/2017-02-12/04.png" alt="Route Recalculation" width="25%" height="25%" style="padding:20px" />
</div>

<br>

# Next Steps

The majority of the application has been completed with minor bug fixes to be done. In the next step, testing of the application will be performed outdoors in conjunction with the belt.