# The Detection Experiment

An experimental JavaScript snippet for easy browser / feature detection.

We deliberately use user agent checking as less as possible, as that is generally agreed upon to be deprecated / bad practice. Instead, we utilize feature detection and JavaScript browser hacks. User agent sniffing is used only in the event that no alternatives are available.

Many Chinese browsers are hard to detect. Particularly 360 Secure Browser by Qihoo is tedious to strap, as the browser has no exclusive properties / known JS hacks and is programmed to change its user agent in set intervals. A Chinese programmer has developed a workaround to this, but it requires jQuery. You can find the code [here](https://github.com/cloudcome/alien/blob/master/src/core/navigator/shell.js).

# Usage guide

The way that the library works is that it contains a variety of different conditionals within constant variables. You can then use these in if-else statements, switches, and potentially loops if need be.

Let's take Opera as an example. This is the variable for Opera:

```javascript
gotOpera = 
        typeof window.opr !== "undefined"             || 
        window.opera && window.opera.buildNumber      ||
        window.opera && window.opera.version          ||
        new RegExp(/^function \(/).test([].sort)      ||
        Object.prototype.toString.call(window.opera) == "[object Opera]",
```

You can then use the variable `gotOpera` in your code like so:

```javascript
if (gotOpera) {
  alert("We are in Opera!");
}
```

The above code is equivalent to the following:

```javascript
if (typeof window.opr !== "undefined"  || 
    window.opera && window.opera.buildNumber ||  
    window.opera && window.opera.version ||
    new RegExp(/^function \(/).test([].sort) || 
    Object.prototype.toString.call(window.opera) == "[object Opera]"
   ) {
      alert("We are in Opera!");    
}
```

Long story short, the library compiles a myriad of different detection methods and contains them in short variables that you can then invoke wherever you want.

# Installation methods

Add the following to your HTML:

```html

<script 
   type = "text/javascript" 
   src  = "https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js"
></script>

```

Using jQuery:

```javascript
// Standard

$.getScript('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js');

// Also correct, use this if you can't call jQuery from the dollar sign (E. g. You're using Prototype.js)

jQuery.getScript('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js');

```

You can also download the code directly into your project folder, but that comes with the risk of missing out on updates. If you really want to use the code locally, you should regularly check back for updates.

# Currently checks for

### Browsers

* Google Chrome
* Mozilla Firefox
* Firefox Mobile
* Microsoft Edge (Old + New)
* Opera
* Opera Mini
* Safari
* Internet Explorer
* Blink
* Konqueror
* Camino
* iCab
* OmniWeb
* Netscape Navigator / Browser
* Brave
* Yandex Browser
* Tencent QQ Browser
* UC Browser

### Browser plugins

* Adobe Flash (Dead as of 12 January 2021; retained for legacy reasons)

### Operating systems

* Microsoft Windows (16-bit, 32-bit, 64-bit, CE)
* Macintosh
* iOS
* iPadOS
* iPod
* Amazon Kindle Fire
* Solaris / SunOS
* FreeBSD
* OpenBSD
* Linux
* Android
* HP-UX
* WebOS

### Consoles

* PlayStation Portable
* PlayStation 3 and 4
* Nintendo DS(i)
* (New) Nintendo 3DS
* Nintendo Wii
* Nintendo Wii U

### Other

* X11
* Masking agents
* WebTV
* General mobile devices, by checking for mobile-only features (E. g. rotating the screen)


# Support planned for

### Browser plugins

* Microsoft Silverlight
* Microsoft ActiveX

### Operating systems and devices

* Other Unix-derived operating systems

# Support considered for

(Depends on wether I can succesfully gather the info required to write the code for these)

### Browsers

* Opera GX
* Surf
* Yahoo! Japan Browser

### Browser plugins

* Shockwave Player

### Operating systems

* Tizen
* AmigaOS
* Haiku

### Consoles

* Xbox family

# MT-Regex.js

A second JavaScript file that checks for all known mobile hardware at the time of its writing using a __giant__ regex (Regular expression), as an alternative for the mobile detection in Main.js. Its usage is __highly disrecommended__. If you absolutely *must*, you may install it as so:

```html

<script 
   type = "text/javascript" 
   src  = "https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/MT-Regex.js"
></script>

```

Or:

```javascript
$.getScript('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/MT-Regex.js');
jQuery.getScript('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/MT-Regex.js');
```

You may then call the function from the window.
