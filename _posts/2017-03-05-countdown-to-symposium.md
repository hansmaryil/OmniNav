---
layout: post
title: "Countdown to Symposium Day!"
subtitle: "Testing and New Features Implemented"
date: 2017-03-12
poster: "Aditya Junnarkar"
header_content: |
    <header class="intro-header" style="background-image: url('/images/background/bg_18.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-lg-offset-0 col-md-10 col-md-offset-1">
                    <div class="post-heading">
                        <h1>Countdown to Symposium Day!</h1>
                        <h2 class="subheading">Testing and New Features Implemented</h2>
                        <p class="post-meta">Posted by Aditya Junnarkar on March 13, 2017</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
---

# The Countdown Begins!!!

It's down to the last few of days before the Mechatronics Symposium 2017! This week has been quite a productive week!


After we finished building our prototype, the belt was tested to ensure the correct motors vibrate when the user wears the belt and turns around. We also finished implementing a very important feature of our product. This feature incorporates PWM to control the intensity of vibration of the motors. For example, if the North and the East motors vibrate (indicating the user turn right), the motor closer to the desired direction vibrates at a higher intensity than the motor further away providing for accurate haptic feedback. We also finished implementing periodic pulsing of the motors to ensure the user does not get annoyed by the constant vibration on his/her waist.


We realized during testing that it is difficult to feel the rear motor vibration as the vibration of the pouch connected to the rear motor is dampened by the velcro strip attaching the pouch to the inner side of the belt fabric. Hence, for our final design, we have redesigned the pouch to take this into account and will be cutting a hole through the velcro.


Additionally, we got the app to communicate with the Bluetooth module in the belt as well as a bluetooth headset.  This means we can now stream voice feedback to the headset so that we can hear turn-by-turn navigational feedback even in crowded environments.


Here's a (clearly candid) photo of Tiffany wearing the belt just before we went outside to test it.

<div style="display: flex; justify-content: center;">
    <img src="/images/blog/2017-03-05/prototype_birds_eye_view.jpg" alt="Candid Photo of Tiffany wearing the belt" width="75%" height="75%" style="padding:20px" />
</div>