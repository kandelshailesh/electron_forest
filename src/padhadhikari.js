var padhadhikari="<ul style='list-style-type:none;' class='p-3' ><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:padhadhikarithap()'>पदाधिकारी थप</a></li><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:padhadhikarikhoj()'>पदाधिकारी खाेज</a></li></ul><form class='padhadhikarimain'><div class='row text-center'><legend class='ml-5'>पदाधिकारी</legend><div class='form-group p-1 col-md-3'><label>नाम</label><input placeholder= 'कर्मचारीकाे नाम' type='text' class='form-control'/></div><div class='form-group col-md-2 p-1 '><label>पद</label><select name='post' id='samiti' class='form-control'><option selected='selected' value='0'>-------------------</option><option  value='1'>अध्यक्ष</option><option  value='2'>उपाध्यक्ष</option><option  value='3'>सह सचिव</option><option  value='4'>सचिव</option><option value='5'>सह सचिव</option><option value='6'>सदस्य</option><option value='7'>सल्लाहकार</option><option value='8'>संयाेजक</option><option value='9'>कास</option><option value='10'>वन हेरालु</option></select></div><div class='form-group col-md-3 p-1'><label>समिति</label><select name='samiti' id='samiti' class='form-control'><option selected='selected' value='0'>---------------------</option><option  value='1'>कार्य समिति</option><option  value='2'>लेखा समिति </option><option  value='3'>कर्मचारी विवरण</option></select></div><div class='form-group col-md-2 p-1'><label>सुरू मिति</label><input id='startdate'  class='form-control'/></div> <div class='form-group p-1 col-md-2'><label>अन्तिम मिति</label><input id='enddate' class='form-control' /></div> <br/><div class='form-group text-center col-md-12 '><br/><button type='reset' class='btn  mt-2 btn-danger'>रद्द गर्नुहाेस</button><button type='submit' class=' ml-1 mt-2 btn btn-primary'>जाेड्नुहाेस</button></div></div></form><br/>";

function padhadhikarithap()
{
  console.log('Hello');
  $('.padhadhikarimain').text('');
  $('.padhadhikarimain').append("<form class='padhadhikarimain'><div class='row text-center'><legend class='ml-5'>पदाधिकारी</legend><div class='form-group p-1 col-md-3'><label>नाम</label><input placeholder= 'कर्मचारीकाे नाम' type='text' class='form-control'/></div><div class='form-group col-md-2 p-1 '><label>पद</label><select name='post' id='samiti' class='form-control'><option selected='selected' value='0'>-------------------</option><option  value='1'>अध्यक्ष</option><option  value='2'>उपाध्यक्ष</option><option  value='3'>सह सचिव</option><option  value='4'>सचिव</option><option value='5'>सह सचिव</option><option value='6'>सदस्य</option><option value='7'>सल्लाहकार</option><option value='8'>संयाेजक</option><option value='9'>कास</option><option value='10'>वन हेरालु</option></select></div><div class='form-group col-md-3 p-1'><label>समिति</label><select name='samiti' id='samiti' class='form-control'><option selected='selected' value='0'>---------------------</option><option  value='1'>कार्य समिति</option><option  value='2'>लेखा समिति </option><option  value='3'>कर्मचारी विवरण</option></select></div><div class='form-group col-md-2 p-1'><label>सुरू मिति</label><input id='startdate'  class='form-control'/></div> <div class='form-group p-1 col-md-2'><label>अन्तिम मिति</label><input id='enddate' class='form-control' /></div> <br/><div class='form-group text-center col-md-12 '><br/><button type='reset' class='btn  mt-2 btn-danger'>रद्द गर्नुहाेस</button><button type='submit' class=' ml-1 mt-2 btn btn-primary'>जाेड्नुहाेस</button></div></div></form>");

}
function padhadhikarikhoj()
{
  $('.padhadhikarimain').text('');
  $('.padhadhikarimain').append("<div id='kharchabydate' class='form-group ml-2 col-md-auto d-inline p-2'><input id='datepadhadhikari' class='form-control w-25 d-inline'/><select name='samiti' id='samiti' class='form-control w-25 d-inline ml-2'><option selected='selected' value='0'>सबै</option><option  value='1'>कार्य समिति</option><option  value='2'>लेखा समिति </option><option  value='3'>कर्मचारी विवरण</option></select><a class='btn  kharchakhojbutton btn-primary ml-2' onclick='javascript:padhadhikarikhojbuttons(1)'> खाेज</a></div><div class='form-group pt-2'><br/><table class='table table-striped text-center'><tr><th>सि.नं</th><th>पद</th> <th>नाम</th><th>ठेगाना</th></td></table></div>");
$('#datepadhadhikari').calendarsPicker({calendar: $.calendars.instance('nepali')});

}
