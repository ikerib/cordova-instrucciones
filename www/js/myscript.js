
$(document).on("mobileinit", function() {
   $.mobile.loader.prototype.options.text = "Itxaron apur bat...";
   $.mobile.loader.prototype.options.textVisible = true;
   $.mobile.loader.prototype.options.theme = "e";
});

$(document).on("pageshow", function() {
});

document.addEventListener('deviceready', function () {

}, false);


$('#btnclick').on('click', function() {
  var url = $(this).data("pdfurl");
  console.log(url);
  var options = buildViewerOptions();
  SitewaertsDocumentViewer.viewDocument(
    url, 'application/pdf', options,
    function ()
    {
      // shown
      window.console.log('document shown');
    },
    function ()
    {
        // closed
        window.console.log('document closed');
    },
    function (appId, installer)
    {
        // missing app
        if (confirm("Do you want to install the free PDF Viewer App "
                + appId + " for Android?"))
        {
            installer(
                    function ()
                    {
                        window.console.log('successfully installed app');
                        if (confirm("App installed. Do you want to view the document now?"))
                            viewDocument(url, mimeType, storage);
                    },
                    function (error)
                    {
                        window.console.log('cannot install app');
                        window.console.log(error);
                    }
            );
        }
    },
    function (error)
    {
        alert('cannot view document ' + url);
        window.console.log('cannot view document ' + url);
        window.console.log(error);
        alert(error);
    }
  )
});

var VIEWER_OPTIONS = {
    documentView : { closeLabel : "Fertig"},
    navigationView : {closeLabel : "Zurück"}
};
function buildViewerOptions()
{
    var options = $.extend({}, VIEWER_OPTIONS);
    if(window["cordova"])
    {
        if (!options.android)
            options.android = {};
    }
    return options;
};

$('.btnpuesto').on('click', function() {

    $.getJSON('/api/listdirectory', function(json, textStatus) {
            var lista = $('#filelist');
            $.each(data, function(index, val) {
                var row = '<li class="ui-li-has-thumb ui-first-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="img/album-bb.jpg"><h2>Broken Bells</h2><p>Broken Bells</p></a></li>'
                $(lista).clear();
                $(lista).append(row);
            });
    });

})