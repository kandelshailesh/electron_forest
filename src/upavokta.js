var upavokta="<ul style='list-style-type:none;' class='p-3' ><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:upavoktathap()'>उपभाेक्ता थप</a></li><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:upavoktakhoj()'>उपभाेक्ता खाेज</a></li></ul><form id='upavoktamain' style='margin-left: 30px;' class=' w-75  align-items-center' method='post'><div class='row upavoktadel' ><div class='form-group text-center col-md-4'><label for='fname'>नाम</label><input type='text' id='fname' class='pt-2 w-100 form-control' autofocus/></div><div class='form-group text-center  col-md-4'><label for='lname'>थर </label><input type='text' id='lname' class='form-control w-100 '/></div><div class='form-group text-center  col-md-4'><label for='address' >ठेगाना</label><input type='text' id='email' class=' form-control w-100' autofocus/></div><div class='col-md-4 text-center form-group'><label for='sex'>लिङ्ग</label><br/><select class='form-control w-100'><option value='0'>पुरुष</option><option value='1'>महिला</option></select></div></div><div class='row upavoktaadd'><div class='col-12 text-center'> <button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm ml-1' onclick='test()'>जाेड्नुहाेस</button></div></div></div></form>";


function upavoktakhoj()
{
  $('.upavoktadel').remove();
  $('.upavoktaadd').remove();

  $('#upavoktamain').append("<div class='upavoktadel row form-group'><select class='form-control w-25' onchange='javascript:upavoktakhojchange(event)'><option value='1'>नाम अनुसार</option><option value='2'>लिङ्ग अनुसार </option></select><input type='text' name='personname' placeholder='उपभाेक्ताकाे नाम' class='col-md-5 ml-1 form-control' id='upavoktakhoj1'><select class='form-control d-none ml-1 w-25' id='upavoktakhoj2'><option value='0'>पुरुष</option><option value='1'>महिला</option></select><a class='btn ml-2 btn-outline-primary col-md-3'>खाेज</a></div></form>");
}

function upavoktakhojchange(e)
{
  var value= e.target.value;

  if(value==='1')
  {
  // $('#upavoktakhoj'+1).addClass('d-none');
  if(!$('#upavoktakhoj2').hasClass('d-none'))
  {
  $('#upavoktakhoj2').addClass('d-none');
}
  $('#upavoktakhoj1').removeClass('d-none');

}
if(value==='2')
{
  if(!$('#upavoktakhoj1').hasClass('d-none'))
  {
  $('#upavoktakhoj1').addClass('d-none');
}
  $('#upavoktakhoj2').removeClass('d-none');
}

}

function upavoktathap()
{
  $('.upavoktadel').remove();
  $('.upavoktaadd').remove();

  $('#upavoktamain').append("<div class='row upavoktadel' ><div class='form-group text-center col-md-4'><label for='fname'>नाम</label><input type='text' id='fname' name='fname' class='pt-2 w-100 form-control' autofocus/></div><div class='form-group text-center  col-md-4'><label for='lname'>थर </label><input type='text' name='lname' id='lname' class='form-control w-100 '/></div><div class='form-group text-center  col-md-4'><label for='address' >ठेगाना</label><input type='text' name='address' id='address' class=' form-control w-100' autofocus/></div><div class='col-md-4 text-center form-group'><label for='sex'>लिङ्ग</label><br/><select class='form-control w-100'><option value='0'>पुरुष</option><option value='1'>महिला</option></select></div></div><div class='col-12 text-center upavoktaadd'> <button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm ml-1' onclick='test()'>जाेड्नुहाेस</button></div></div></form>");
