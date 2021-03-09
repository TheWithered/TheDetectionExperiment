/**
 * Detection.js
 * ----------------------------------------------------------------------------------------------------
 * Allows you to easily detect browsers, Flash, OS and devices without any bullshit
 * Rule #1: Only use User Agent sniffing when we have no other option.
 *  -- User agent sniffing is unreliable and deprecated.
 * Author: Wither
 * -----------------------------------------------------------------------------------------------------
 * Usage: Use variables in conditional code, eg.
 * if (gotIE) {alert("ew, stinky IE succ")} else {alert("You're good, kid.")}
 * if (!gotMobile) {console.log("You aren't using a mobile device!")}
 * 
 * As for Flash, you can do it like so:
 * if (flashVersion > 9) {console.log("yeet Flash Player 9")}
 * -----------------------------------------------------------------------------------------------------
 * Attribution:
 *  - Many users of Stack Overflow
 *  - Whoever made this website: https://ds.iris.edu/qd/html/browserdetect.html
 * -----------------------------------------------------------------------------------------------------
 * Installation:
 *  - Add this in your <head>:
 *
 *          <script 
 *              type = "text/javascript" 
 *              src  = "https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js"
 *          ></script>
 *
 *  - Install through jQuery: 
 *
 *     $.getScript('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js');
 *
 *  - (MediaWiki only) Use:
 *      mw.loader.load('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js');
 *    or alternatively:
 *     mw.loader.getScript('https://raw.githubusercontent.com/TheWithered/TheDetectionExperiment/main/Source/Main.js');
 * ------------------------------------------------------------------------------------------------------
 * I advise AGAINST copy-pasting this code! You may end up with outdated versions of the script when
 * it is updated. This can't happen if you import it by URL.
 * ------------------------------------------------------------------------------------------------------
 */

// --------------
// Preparation
// --------------

const desys  = window.navigator.platform;         // DEvice + SYStem
const detect = navigator.userAgent.toLowerCase(); // Necessary for certain exotic browsers (eg. Konqueror, iCab)

function checkIt(string) {
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}

// ----------
// Browsers
// ----------

const 

   gotIE =
        !!/*@cc_on!@*/0                                        ||
        (!+"\v1") ? true: false                                ||
        "ActiveXObject" in window                              ||
        !!window.MSInputMethodContext                          ||
        !!window.ScriptEngineMajorVersion                      ||
        navigator.appName === "Microsoft Internet Explorer"    ||
        document.all                                           ||
        '\v' == 'v'                                            ||
        window.navigator.msPointerEnabled                      ||
        ('-ms-scroll-limit' in document.documentElement.style  && 
        '-ms-ime-align'     in document.documentElement.style) ||
        ('behavior'         in document.documentElement.style  && 
	'-ms-user-select'   in document.documentElement.style) ||
        document.body.style.msTouchAction !== undefined	       ||
        '-ms-wrap-flow'     in document.documentElement.style  ||
        !document.currentScript                                ||
        'expression'        in document.documentElement.style  ||
        document.documentMode && !window.MSAssertion,

  gotSafari = 
        /constructor/i.test(window.HTMLElement)                                                           ||
        (function (p) {return p.toString() === "[object SafariRemoteNotification]";})(!window['safari'])  ||
        window.safari !== undefined                                                                       ||
        (window.safari && window.safari.pushNotification)                                                 ||
        navigator.vendor ==  "Apple Computer, Inc."                                                       ||
        Object.getOwnPropertyDescriptor(Document.prototype, 'cookie').descriptor === false                ||
        Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')                         ||
        /a/.__proto__ == '//'                								  ||
        /constructor/i.test(function HTMLElementConstructor() {}),

  gotOpera = 
        typeof window.opr !== "undefined"             || 
        window.opera && window.opera.buildNumber      ||
        window.opera && window.opera.version          ||
        new RegExp(/^function \(/).test([].sort)      ||
        Object.prototype.toString.call(window.opera) == "[object Opera]",

  gotFirefox = 
        typeof InstallTrigger !== 'undefined'                         ||
        (('netscape' in window) && / rv:/.test(navigator.userAgent))  ||
        CSS.supports("@document")                                     ||
        !!window.sidebar                                              ||
        !!window.globalStorage                                        ||
        !!/a/[-1] == 'a'                                              ||
        (function x() {} )[-6] == 'x'                                 ||
        (function x() {} )[-5] == 'x'                                 ||
        'MozAppearance'   in document.documentElement.style           ||
        '-moz-binding'    in document.documentElement.style           ||
        "mozInnerScreenX" in window,

  // The old version of Edge

  gotEdgeTrident = 
  
        // I couldn't find a method to find Edge WITHOUT User Agent, sadly.
        
        (!!navigator.userAgent.match(/Trident\/7\./) && !!(window.StyleMedia || document.uniqueID || window.MSAssertion)) ||
        (!!RegExp(/Edge\/\d./i.test(navigator.userAgent)) && !!(window.StyleMedia || document.uniqueID || window.MSAssertion)),

  // The new version of Edge

  gotEdgeChromium = 
        navigator.userAgent.indexOf("Edg")  != -1 || 
        navigator.userAgent.indexOf("Edg/") != -1, // Same here

  gotChrome = 
        !!window.chrome !== undefined               ||
        RegExp(/source/).test((/a/.toString + '')),

  gotBlink =
        (gotChrome || gotOpera || (window.Intl && Intl.v8BreakIterator)) && 
        "CSS" in window,

  gotCamino = 
        navigator.userAgent.indexOf("Camino") > -1, // We don't have a choice here either. =(

  gotOmniWeb =
        navigator.userAgent.indexOf("OmniWeb") > -1 || // Or here =/
        checkIt("omniweb"),

  gotiCab = 
        navigator.vendor == "iCab",

  gotKonqueror = 
        navigator.vendor == ("Konqueror" || "KDE")         ||
        checkIt("konqueror")                               ||
        "KhtmlOpacity" in document.documentElement.style,

  gotYandexBrowser =
        navigator.userAgent.indexOf("yabrowser") >= 0,

  gotUCBrowser =
        navigator.userAgent.indexOf(' UCBrowser/') >= 0,

  gotBrave =
        (navigator.brave && await navigator.brave.isBrave() || false),

  gotQQ =
        navigator.userAgent.indexOf("QQBrowser") >= 0,

  gotOperaMini = 
        Object.prototype.toString.call(window.operamini) === "[object OperaMini]"  ||
        desys == 'Pike v7.6 release 92'                                            ||
        desys == "Pike v7.8 release 517",

  gotFirefoxMobile = 
 
        // User agent is the only known way to detect mobile Firefox =/
        
        navigator.userAgent.match("FxiOS") || 
        navigator.userAgent.toLowerCase().indexOf('fennec') > -1,

  gotSeaMonkey = 
        navigator.userAgent.indexOf("Seamonkey"),

  gotNetscapeNavigator = 
        ('layers' || 'ids' || 'tags' || 'classes' || 'contextual')  in document           ||
        (!checkIt("compatible")                                                           ||
        navigator.userAgent.indexOf("Mozilla/") >= 0 && !gotFirefox                       ||
        (navigator.userAgent.indexOf("Netscape") >=0 || navigator.appName == "Netscape")) && 
            !gotFirefox          &&
            !gotSafari           &&
            !gotIE               &&
            !gotEdgeTrident      &&
            !gotEdgeChromium     &&
            !gotChrome           &&
            !gotFirefoxMobile

;

// ------------------
// Mobile (general)
// ------------------
        
const gotMobile =
        typeof window.orientation !== 'undefined'              ||
        'ontouchstart'           in document.documentElement   ||
        'DeviceOrientationEvent' in window                     ||
        "maxTouchPoints"         in navigator                  ||
        window.matchMedia("(min-width: 400px)").matches
;

// -----------------------
// Mobile (More specific)
// ------------------------

const 

   gotBlackBerry =
      navigator.userAgent.match(new RegExp(/BlackBerry/i)),
      
   gotWinMobile  =
      navigator.userAgent.match(new RegExp(/IEMobile/i))       || 
      navigator.userAgent.match(new RegExp(/WPDesktop/i))      ||
      navigator.userAgent.match(new RegExp(/Windows Phone/i))
   
;

const kindleStrings = new RegExp( 
    /Kindle|Silk|KFTT|KFOT|KFJWA|KFJWI|KFSOWI|KFTHWA|KFTHWI|KFAPWA|KFAPWI|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i
);

const gotKindle = kindleStrings.test(navigator.userAgent);

// Further variables for other mobile devices are further down
   
// ---------------------------------------------------------
// Flash Simple -- Simple, just detect existence of Flash
// ---------------------------------------------------------

const gotFlash = 

        ((typeof navigator.plugins == "undefined" || navigator.plugins.length == 0) ? 
        !!(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")): navigator.plugins["Shockwave Flash"]);

// In function format

function hasFlash() {
    let b = !1;

    function c(a) {
        if (a = a.match(/[\d]+/g)) {
            a.length = 3;
        }
    }

    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            let a = navigator.plugins["Shockwave Flash"];

            if (a && (b = !0, a.description)) {
                c(a.description);
                return;
            }

            if (navigator.plugins["Shockwave Flash 2.0"]) {
                b = !0;
                return;
            }
        }

        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], b = !(!a || !a.enabledPlugin))) {
            c(a.enabledPlugin.description);
            return;
        }

        if ("undefined" != typeof ActiveXObject) {
            try {
                let d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                b = !0;
                c(d.GetVariable("$version"));
                return;
            } catch (e) {}
            
            try {
                d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                b = !0;
                return;
            } catch (e) {}
            
            try {
                d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, c(d.GetVariable("$version"));
            } catch (e) {}
        }
    })();
    
    return b;
}

// --------------------------------------------
// Flash Advanced -- Check version and sniff
// --------------------------------------------

function getFlashVersion() {

    // Internet Explorer

    try {
        try {
            // avoid fp6 minor version lookup issues
            // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
            let axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
            try {
                axo.AllowScriptAccess = 'always';
            } catch (e) {
                return '6,0,0';
            }
        } catch (e) {}
        return new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
            .GetVariable('$version')
            .replace(/\D+/g, ',')
            .match(/^,?(.+),?$/)[1];
    
    // Other browsers
    
    } catch (e) {
        try {
            if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                return (
                        navigator.plugins["Shockwave Flash 2.0"] ||
                        navigator.plugins["Shockwave Flash"]
                    ).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
            }
        } catch (e) {}
    }
    return '0, 0, 0';
}

let flashVersion = getFlashVersion().split(',').shift();

// -----
// OS
// -----

const 

    // Windows (Advanced)

    gotWin32 = 
        desys == "Win32",
          
    gotMSTablet = 
        desys == "Win64",
        
    gotoldWin =
        desys == "Win16",
        
    gotWinCompact = 
        desys == "WinCE",

    // Windows (Nonspecific)

    gotWindows = 
        desys.indexOf("Win") >= 0 || 
        desys == ("Pocket PC" || "OS/2"),
    
    // Apple (General)
    
    gotMac =
        desys.toUpperCase().indexOf("MAC") >= 0,
        
    gotiOS = 
        new RegExp(/(iPhone|iPod|iPad)/i).test(desys),

    // Apple (In case you need mobile devices seperately)

    gotiPhone =
        desys == "iPhone",
    
    gotiPad =
        desys == "iPad",
    
    gotiPod =
        desys == "iPod",
    
    gotAppleSimulator = 
        desys == ("iPhone Simulator" || "iPod Simulator" || "iPad Simulator"),
    
    // Other mobile devices
    
    gotAndroid = 
      
      	// Android and Linux have overlapping navigator.platform values and share
        // much of the same codebase, so it's necessary to perform the mobile check
      
        (desys == ("Android" || null)) && gotMobile ||
        (desys.indexOf("Linux") >= 0) && gotMobile,
    
    gotSymbian = 
        desys == ("Symbian" || "Symbian OS" || "S60" || "Nokia_Series_40"),
    
    gotPalm =
       desys == ("PalmOS" || "webOS"),

    // Other computer OS systems

    gotSolaris = 
       desys.indexOf("SunOS") >= 0,
       
    gotFreeBSD =
       desys.indexOf("FreeBSD") >= 0,
       
    gotOpenBSD = 
       desys == "OpenBSD amd64",
       
    gotHPUX =
       desys == "HP-UX",
       
    gotLinux =
       (desys.indexOf("Linux") >= 0) && !gotMobile, 

    // Consoles (General)

    gotNintendoDevice = 
       desys.indexOf("Nintendo") >= 0, // Detects DSi, Wii, WiiU, 3DS and New 3DS
       
    gotSony =
       desys == ("PSP" || "PLAYSTATION 3" || "PlayStation 4"),
      
    // Consoles (Advanced)

    gotDSi =
       desys == "Nintendo DSi",
       
    got3DS =
       desys == "Nintendo 3DS",
    
    gotNew3DS =
       desys == "New Nintendo 3DS",
    
    gotWii =
       desys == "Nintendo Wii",
    
    gotWiiU =
       desys == "Nintendo WiiU",

    gotPSP = 
      desys == "PSP",
      
    gotPS3 = 
      desys == "PLAYSTATION 3",
      
    gotPS4 = 
      desys == "PlayStation 4",

    // Other

    gotX11 = 
      desys == "X11",
      
    gotMaskingAgent = 
      desys == "masking-agent"

;

// -------
// Misc
// -------

const 

    gotWebTV = 
      ~navigator.userAgent.toLowerCase().indexOf("webtv") ||
      desys == "WebTV OS",
      
    gotWebOS =
      navigator.userAgent.indexOf("webOS") >= 0

;      

