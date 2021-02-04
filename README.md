# The Detection Experiment

An experimental JavaScript snippet for easy browser / feature detection.

We deliberately use user agent checking as less as possible, as that is generally agreed upon to be deprecated / bad practice. Instead, we utilize feature detection and JavaScript browser hacks. User agent sniffing is used only in the event that no alternatives are available.

Many Chinese browsers are hard to detect. Particularly 360 Secure Browser by Qihoo is tedious to strap, as the browser has no exclusive properties / known JS hacks and is programmed to change its user agent in set intervals. A Chinese programmer has developed a workaround to this, but it requires jQuery. You can find thee code [here](https://github.com/cloudcome/alien/blob/master/src/core/navigator/shell.js).

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
