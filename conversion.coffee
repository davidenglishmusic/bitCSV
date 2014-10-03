$(document).ready ->
  $link = $("#dataLink")
  $('#getJsonButton').click ->
    formInfo = $("#bitJson").val()
    if formInfo.length > 0
        bitJson = JSON.parse(formInfo)
        csv = "Subject,Start Date,Start Time,Location\n"
        for event in bitJson
          venue = (event.venue)
          eventSubject = "Performance" + " - " + venue.name
          eventDate = (event.datetime).substring(0,10)
          eventStartTime = (event.datetime).substring(11,19)
          eventLocation = venue.city + " " + venue.region + " " + venue.country
          csv += eventSubject + "," + eventDate + "," + eventStartTime + "," + eventLocation + "\n"
        $link.attr("href", 'data:Application/octet-stream,' + encodeURIComponent(csv))[0].click()
