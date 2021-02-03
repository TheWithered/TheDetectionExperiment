# The Detection Experiment

An experimental JavaScript snippet for easy browser / feature detection.

We deliberately use user agent checking as less as possible. Many browser extensions let you change your user agent at will, and it's not uncommon for a browser to have a user agent string from another browser (E. g. The UA string 'Netscape' is used by literally a dozen browsers that aren't Netscape, including Firefox and Chrome).

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

* Brave
* Opera GX
* Surf
* UC Browser
* Yandex Browser
* Yahoo! Japan Browser

### Browser plugins

* Shockwave Player

### Operating systems

* Tizen
* AmigaOS
* Haiku

### Consoles

* Xbox family
