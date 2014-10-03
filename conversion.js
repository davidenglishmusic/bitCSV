// Generated by CoffeeScript 1.7.1
(function() {
  $(document).ready(function() {
    var $link;
    $link = $("#dataLink");
    return $('#getJsonButton').click(function() {
      var bitJson, csv, event, eventDate, eventLocation, eventStartTime, eventSubject, formInfo, venue, _i, _len;
      formInfo = $("#bitJson").val();
      if (formInfo.length > 0) {
        bitJson = JSON.parse(formInfo);
        csv = "Subject,Start Date,Start Time,Location\n";
        for (_i = 0, _len = bitJson.length; _i < _len; _i++) {
          event = bitJson[_i];
          venue = event.venue;
          eventSubject = "Performance" + " - " + venue.name;
          eventDate = event.datetime.substring(0, 10);
          eventStartTime = event.datetime.substring(11, 19);
          eventLocation = venue.city + " " + venue.region + " " + venue.country;
          csv += eventSubject + "," + eventDate + "," + eventStartTime + "," + eventLocation + "\n";
        }
        return $link.attr("href", 'data:Application/octet-stream,' + encodeURIComponent(csv))[0].click();
      }
    });
  });

}).call(this);