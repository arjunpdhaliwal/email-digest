'use strict';
function getRedditString(numPoints, postTitle, postLink, authorName, authorLink, commentsString, commentsLink, timeString, subName, subLink) {
    var htmlCard = `<div class="rows" style="font-style:normal;font-variant:normal;padding-left:7px;font-weight:normal;font-size:12px;font-family:verdana,arial,helvetica,sans-serif;line-height:150%;margin-bottom:5px;max-width:500px;background-color:#EEEEEE;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;overflow:auto;position:relative;border-width:1px;border-style:solid;border-color:#000A0F;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:1px 0px 1px 0px rgba(0,0,0,0.75);-moz-box-shadow:1px 0px 1px 0px rgba(0,0,0,0.75);box-shadow:1px 0px 1px 0px rgba(0,0,0,0.75);">
        <table style="border-collapse:collapse;text-align:left;width:100%;overflow:auto;">
            <tr>
                <td class="icons-source" style="height:100%
    display: inline-block;text-align:center;vertical-align:middle;color:#000508;font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:10px;">
                    <div class="icons-source-holder" style="width:40px;"><img width="30" height="30" class="source" src="http://vignette3.wikia.nocookie.net/warframe/images/f/f1/Square-reddit-logo.png" style="object-fit:cover;display:inline;white-space:nowrap;text-align:center;">
                        <div class="icons" style="object-fit:cover;text-align:right;white-space:nowrap;display:inline-block;">${numPoints}<img class="uparrow" width="10" height="10" src="https://news.ycombinator.com/grayarrow.gif" style="object-fit:cover;display:inline;white-space:nowrap;text-align:center;padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:5px;"></div>
                    </div>
                </td>
                <td width="99%" style="color:#000508;font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;">
                    <table class="inner-table">
                        <tr>
                            <td colspan="2" style="font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;color:#000508;border-bottom-width:0px;"><a class="post-title" href="${postLink}" style="color:#333333;font-size:15px;font-weight:bold;">${postTitle}</a> <a class="sub-link" href="${subLink}" style="color:#333333;font-size:12px;font-weight:normal;">(${subName})</a></td>
                        </tr>
                        <tr>
                            <td style="font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;color:#000508;border-bottom-width:0px;"><a href="${authorLink}" style="color:#333333;">${authorName}</a></td>
                        </tr>
                        <tr>
                            <td style="font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;color:#000508;border-bottom-width:0px;"><a href="${commentsLink}" style="color:#333333;">${commentsString}</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div style="text-align:right;margin-right:5px;position:absolute;bottom:8px;right:5%;">${timeString}</div>
    </div>`;

    return htmlCard;
}

function getHnString(numPoints, postTitle, postLink, authorName, authorLink, commentsString, commentsLink, timeString) {
    var htmlCard = `<div class="rows" style="font-style:normal;font-variant:normal;padding-left:7px;font-weight:normal;font-size:12px;font-family:verdana,arial,helvetica,sans-serif;line-height:150%;margin-bottom:5px;max-width:500px;background-color:#EEEEEE;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;overflow:auto;position:relative;border-width:1px;border-style:solid;border-color:#000A0F;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:1px 0px 1px 0px rgba(0,0,0,0.75);-moz-box-shadow:1px 0px 1px 0px rgba(0,0,0,0.75);box-shadow:1px 0px 1px 0px rgba(0,0,0,0.75);">
        <table style="border-collapse:collapse;text-align:left;width:100%;overflow:auto;">
            <tr>
                <td class="icons-source" style="height:100%
    display: inline-block;text-align:center;vertical-align:middle;color:#000508;font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:10px;">
                    <div class="icons-source-holder" style="width:40px;"><img width="30" height="30" class="source" src="https://hn.algolia.com/assets/logo-hn-search.png" style="object-fit:cover;display:inline;white-space:nowrap;text-align:center;">
                        <div class="icons" style="object-fit:cover;text-align:right;white-space:nowrap;display:inline-block;">${numPoints}<img class="uparrow" width="10" height="10" src="https://news.ycombinator.com/grayarrow.gif" style="object-fit:cover;display:inline;white-space:nowrap;text-align:center;padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:5px;"></div>
                    </div>
                </td>
                <td width="99%" style="color:#000508;font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;">
                    <table class="inner-table">
                        <tr>
                            <td colspan="2" style="font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;color:#000508;border-bottom-width:0px;"><a class="post-title" href="${postLink}" style="color:#333333;font-size:15px;font-weight:bold;">${postTitle}</a></td>
                        </tr>
                        <tr>
                            <td style="font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;color:#000508;border-bottom-width:0px;"><a href="${authorLink}" style="color:#333333;">${authorName}</a></td>
                        </tr>
                        <tr>
                            <td style="font-size:12px;font-weight:normal;padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:8px;color:#000508;border-bottom-width:0px;"><a href="${commentsLink}" style="color:#333333;">${commentsString}</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div style="text-align:right;margin-right:5px;position:absolute;bottom:8px;right:5%;">${timeString}</div>
    </div>`;

    return htmlCard;
}


module.exports = {
    getRedditString : getRedditString,
    getHnString         : getHnString
};