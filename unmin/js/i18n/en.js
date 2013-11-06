/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-06
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- English dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "en",
	"%lang-en": "English",
	"%lang-fr": "anglais",
	"%lang-nat": "English",
	"%all": "All",
	"%home": "Home",
	"%main-page": "Main page",
	"%tphp": "Top of page",
	"%you-are-in": "You are in:",
	"%welcome-to": "Welcome to:",
	"%load": "loading...",
	"%process": "processing...",
	"%srch": "Search",
	"%srch-terms": "Search for term(s):",
	"%no-match": "No match found",
	"%matches": {
		"mixin": "[MIXIN] match(es) found"
	},
	"%menu": "Menu",
	"%settings": "Settings",
	"%langs": "Languages",
	"%about": "About",
	"%curr": "(current)",
	"%hide": "Hide",
	"%err": "Error",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Start",
	"%stop": "Stop",
	"%back": "Back",
	"%cancel": "Cancel",
	"%new-win": " (Opens in a new window)",
	"%min-ago": "a minute ago",
	"%coup-mins": "couple of minutes ago",
	"%mins-ago": {
		"mixin": "[MIXIN] minutes ago"
	},
	"%hour-ago": "an hour ago",
	"%hours-ago": {
		"mixin": "[MIXIN] hours ago"
	},
	"%days-ago": {
		"mixin": "[MIXIN] days ago"
	},
	"%yesterday": "yesterday",

	"%nxt": "Next",
	"%nxt-r": "Next (right arrow key)",
	"%prv": "Previous",
	"%prv-l": "Previous (left arrow key)",
	"%first": "First",
	"%last": "Last",
	"%close-esc": "Close (escape key)",
	"%show": "Show",

	/* Archived Web page template */
	"%arch-pg": "This Web page has been archived on the Web.",
	/* Menu bar */
	"%sm-hlp": "(open the submenu with the enter key and close with the escape key)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Stop tab rotation",
		"on": "Start tab rotation"
	},
	"%tab-list": "Tab list",
	"%tab-pnl-end1": "End of this tab panel.",
	"%tab-pnl-end2": "Return to the tab list",
	"%tab-pnl-end3": "or continue to the rest of page.",
	/* Multimedia player */
	"%play": "Play",
	"%pause": "Pause",
	"%open": "Open",
	"%close": "Close",
	"%rew": "Rewind",
	"%ffwd": "Fast forward",
	"%mute": {
		"on": "Mute",
		"off": "Unmute"
	},
	"%cc": {
		"off": "Hide closed captioning",
		"on": "Show closed captioning"
	},
	"%cc-err": "Error loading closed captions",
	"%adesc": {
		"on": "Enable audio description",
		"off": "Disable audio description"
	},
	"%prog-bar": "use left and right arrow keys to advance and rewind the media's progress",
	"%no-video": "Your browser does not appear to have the capabilities to play this video, please download the video below",
	"%pos": "Current position:",
	"%perc": "Playback percentage:",
	"%dur": "Total time:",
	"%buff": "Buffered:",
	/* Share widget */
	"%fav": "Favourite",
	"%email": "Email",
	"%shr-txt": "Share this page",
	"%shr-hnt": " with {s} ",
	"%shr-email-sub": "Interesting page",
	"%shr-email-bd": "I thought you might find this page interesting:\n{t} ({u})",
	"%shr-fav-ttl": "(bookmark this page)",
	"%shr-man": "Please close this dialog and press Ctrl-D to bookmark this page.",
	"%shr-all": "Show all ({n})",
	"%shr-all-ttl": "All bookmarking sites",
	"%shr-disc": "No endorsement of any products or services is expressed or implied.",
	/* Form validation */
	"%frm-nosubmit": "The form could not be submitted because ",
	"%errs-fnd": " errors were found.",
	"%err-fnd": " error was found.",
	/* Date picker */
	"%date-hide": "Hide calendar",
	"%date-show": "Pick a date from a calendar for field:",
	"%date-sel": "Selected",
	/* Calendar */
	"%days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	"%mnths": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	"%cal": "Calendar",
	"%currDay": "(Current day)",
	"%cal-goToLnk": "Go to<span class=\"wb-inv\"> month of year</span>",
	"%cal-goToTtl": "Go to month of year",
	"%cal-goToMnth": "Month:",
	"%cal-goToYr": "Year:",
	"%cal-goToBtn": "Go",
	"%prvMnth": "Previous Month: ",
	"%nxtMnth": "Next Month: ",
	/* Slideout */
	"%show-toc": "Show table of contents",
	"%hide-toc": "Hide table of contents",
	"%toc": "table of contents",
	/* Lightbox */
	"%lb-curr": "Item %curr% of %total%",
	"%lb-xhr-err": "This content failed to load.",
	"%lb-img-err": "This image failed to load.",
	/* Charts widget */
	"%table-mention": "Table",
	"%table-following": "Chart. Details in the following table.",
	/* Session timeout */
	"%st-to-msg-bgn": "Your session will expire automatically in #min# min #sec# sec.",
	"%st-to-msg-end": "Select \"Continue session\" to extend your session.",
	"%st-msgbx-ttl": "Session timeout warning",
	"%st-alrdy-to-msg": "Sorry your session has already expired. Please sign in again.",
	"%st-btn-cont": "Continue session",
	"%st-btn-end": "End session now",
	/* Toggle details */
	"%td-toggle": "Toggle all",
	"%td-open": "Expand all",
	"%td-close": "Collapse all",
	"%td-ttl-open": "Expand all sections of content",
	"%td-ttl-close": "Collapse all sections of content",
	/* Table enhancement */
	"%sortAsc": ": activate for ascending sort",
	"%sortDesc": ": activate for descending sort",
	"%emptyTbl": "No data is available in the table",
	"%infoEntr": "Showing _START_ to _END_ of _TOTAL_ entries",
	"%infoEmpty": "Showing 0 to 0 of 0 entries",
	"%infoFilt": "(filtered from _MAX_ total entries)",
	"%info1000": ",",
	"%lenMenu": "Show _MENU_ entries",
	/* Geomap */
	"%geo-mapcontrol": "Map control",
	"%geo-zoomin": "Zoom in",
	"%geo-zoomout": "Zoom out",
	"%geo-zoomworld": "Zoom to map extent",
	"%geo-zoomfeature": "Zoom to element",
	"%geo-scaleline": "Map scale",
	"%geo-mouseposition": "Latitude and longitude of the mouse cursor",
	"%geo-ariamap": "Map object. The descriptions of the map features are in the table below.",
	"%geo-accessibilize": "<strong>Keyboard users:</strong> When the map is in focus, use the arrow keys to pan the map and the plus and minus keys to zoom. The arrow keys will not pan the map when zoomed to the map extent.",
	"%geo-accessibilizetitle": "Instructions: Map Navigation",
	"%geo-togglelayer": "Toggle the display of the layer",
	"%geo-hiddenlayer": "This layer is currently hidden.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Canada Base Map",
	"%geo-select": "Select",
	"%geo-labelselect": "Check to select the element on the map",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Basic HTML version",
	"%wb-enable": "Standard version",
	/* Template */
	"%tmpl-signin": "Sign in"
};

window.i18nObj = ind;

})( window );
