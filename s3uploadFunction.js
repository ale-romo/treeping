s3.upload({
  Key: fileKey,
  Body: file,
  ContentType: file.type,
  ACL: 'bucket-owner-full-control'
}, function(err, data) {
  if (err) {
    alert("Failed to upload. Please contact the Requester.");
    $("#status").text("Failed upload.");
  }
  else{
    $("#status").text("Success.");
  }
});