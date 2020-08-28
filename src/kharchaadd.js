function kharchaadd()
{
  var kharchaadd="<form class='w-100'><div id='kharcha' class='row mt-3'><div class='col-md-3 '><select onchange='javascript:kharchaaddoptions(event)' class='form-control '><option value='1'>शीर्षक थप</option><option value='2'>उपशीर्षक थप</option></select></div><div class='col-md-5'><input class='form-control ' id='kharchatitleoptioninputadd'><select class='form-control d-none' id='kharchatitleoptionselectadd'></select><input type='text' class='form-control mt-2 d-none' id='kharchasubtitleoptioninputadd'></div><div class='col-md-2 form-group w-75'><a class='btn btn-primary'>Add</a></div></div></form>";
  return kharchaadd;
}
function kharchaaddoptions(e)
{
var value=e.target.value;
if(value==='1')
{
if(!$('#kharchatitleoptionselectadd').hasClass('d-none'))
{
$('#kharchatitleoptionselectadd').addClass('d-none');
}
if(!$('#kharchasubtitleoptioninputadd').hasClass('d-none'))
{
$('#kharchasubtitleoptioninputadd').addClass('d-none');
}
$('#kharchatitleoptioninputadd').removeClass('d-none');

}
if(value==='2')
{
if(!$('#kharchatitleoptioninputadd').hasClass('d-none'))
{
  $('#kharchatitleoptioninputadd').addClass('d-none');
}
$('#kharchatitleoptionselectadd').removeClass('d-none');
$('#kharchasubtitleoptioninputadd').removeClass('d-none');
var kharchalist= "SELECT * FROM aamdanititle ";

connection.query(kharchalist,function(err,res,fields){
  if(err) throw err;
  for(var i=1;i<res.length;i++)
  {
      $('#kharchatitleoptionselectadd').append('<option value="'+res[i].kharchaID+'">'+res[i].title+'</option>');
  }
});
}}
