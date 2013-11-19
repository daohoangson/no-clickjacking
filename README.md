no-clickjacking
===============

Google Chrome Extension v1.1: [link](https://chrome.google.com/webstore/detail/clickjacking-reveal/ecillfeckjnmpgfdabblnebhibndmnho)

Firefox Extension v1.1: [link](https://addons.mozilla.org/en-US/firefox/addon/no-clickjacking/)

Safari Extension v1.1: [link](https://s3.amazonaws.com/sondh/no-clickjacking/no-clickjacking.safariextz)

CHANGE LOGS
===========

2013-11-19
 * Updated opacity check to consider all opacity less than 0.1 hidden. Some site has been using negative value (-1) or non-zero value (0.01) to avoid being revealed.
 * Updated Firefox extension to work similar to its Chrome/Safari counter part (regarding getComputedStyle).
 * Implemented strikes system to deal with inline !important rules. If the extension cannot reveal a hidden frame, the target will be deleted after the third strike.
