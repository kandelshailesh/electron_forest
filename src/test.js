
function aamdanimenu() {
  // body...

     var aamdaanimenu="<ul class='aamdaanimenu' style='list-style-type:none;'><li class='d-inline '><button onclick='javascript:aamdaaniselect(event,1)' class=' btn bg-white' style='border-bottom-color:green;'>अाम्दानी थप</button></li><li class='d-inline'><button class='btn bg-white' onclick='javascript:aamdaaniselect(event,2)'' style='border-bottom-color:green;'>अाम्दानी खाेज</button></li><li class='d-inline'><button class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:aamdaaniselect(event,3)'>भरखर</button></li></ul>";
     return aamdaanimenu;
}

function aamdaaniselect(e,value)
{
  var e=e || window.event;
  // var value=e.target.value;
  // alert(value);
  var aamdaaniselectdict={1:aamdaaniheads,2:aamdaanikhoj};
  $('#aamdaani').remove();
  $('.aamdaanimenu').append(aamdaaniselectdict[value]);
}

function aamdaanikhoj()
{
  var aamdaanikhoj="<form class='w-100' method='post'><div id='aamdaani' class='row text-center'><br/><div class='form-group aamdaanikhoj col-12'><label for='fname' class='d-inline'><br/>खाेज</label></div><div class='form-group  col-4'><select class='form-control d-inline w-100' onchange='javascript:aamdaanikhojvalue(event)'   required><option value='0'>----------------------</option><option value='1'>मिति अनुसार</option><option value='2'>शिर्षक अनुसार</option></select></div> ";

  return aamdaanikhoj;
}

function aamdaanikhojvalue(e)
{
// alert(e);
  var e = window.event || e;
  if(e.target.value==='1')
  {
    // alert(e.target.value);
    $('#aamdaanibytitle').remove();
    $('.aamdaanikhojbutton').remove();
    $('.table-placement').remove();

    $('#aamdaani').append("<div id='aamdaanibydate' class='form-group ml-2 col-md-auto d-inline'><input type='date' class='form-control w-75 d-inline'/><a class='btn  aamdaanikhojbutton btn-md btn-primary ml-2' onclick='javascript:aamdaanikhojbuttons(1)'> खाेज</a></div>");

  }
  if(e.target.value==='2')
  {
    // alert(e.target.value);
    $('#aamdaanibydate').remove();
    $('.aamdaanikhojbutton').remove();
    $('.table-placement').remove();
    

     var aamdaanihead="<div style='margin-top:-24px;' id='aamdaanibytitle' class='form-group col-md-auto'><br/><select class='form-control ' id='aamdaanititleoption' required><option value='0'>----------------------</option></select>";

    $('#aamdaani').append(aamdaanihead);

      var aamdaanilist= "SELECT * FROM aamdaanititle ";

      connection.query(aamdaanilist,function(err,res,fields){
          if(err) throw err;
          for(var i=1;i<res.length;i++)
          {
              $('#aamdaanititleoption').append('<option value="'+res[i].aamdaaniID+'">'+res[i].title+'</option>');
          }
$('#aamdaani').append("<a class='btn btn-primary h-75 aamdaanikhojbutton' onclick='javascript:aamdaanikhojbuttons(2)'> खाेज</a></div>");
     
});
}
}

function aamdaanikhojbuttons(value)
{
$('.table-placement').remove();
var aamdaanitableplacement="<div class='table-placement col-12'>";
$('#aamdaani').append(aamdaanitableplacement);
$('.table-placement').append('<br/><table class="aamdaanikhojtable table table-striped"><tr><th>Heading 1</th><th>Heading 2</th><th>Heading 3 </th></tr></table></div></div></form>');
}

      function aamdaaniheads()
      {
          
          var aamdaanihead="<form class='w-100 ' method='post'><div align='center' id='aamdaani'><br/><div class='form-group text-center'><label for='fname' class='d-inline'>खर्चकाे शिर्षक</label><br/><select class='form-control d-inline w-50' onchange='javascript:aamdaanisubtitleoptions(event);'  id='aamdaanititleoption' required><option value='0'>----------------------</option></select>";



          var aamdaanilist= "SELECT * FROM aamdaani ";

          connection.query(aamdaanilist,function(err,res,fields){
              if(err) throw err;
              for(var i=1;i<res.length;i++)
              {
                  $('#aamdaanititleoption').append('<option value="'+res[i].aamdaaniID+'">'+res[i].title+'</option>');
              }
          $('#aamdaani').append("</div></div></form><div class='form-group text-center'><label for='fname' class='d-inline'>खर्चकाे उपशिर्षक</label><br/><select class='form-control d-inline w-50'  id='aamdaanisubtitleoption' required><option value='0'>----------------------</option></select>"); 
          // $('#aamdaani').prepend(aamdaanimenu);
                
                
            });

          return aamdaanihead;
    }

 function aamdaanisubtitleoptions(e)
  {
    e=e || window.event;
  // alert(e.target.value);''
  if(e.target.value>0)
  {
  var search= "SELECT * FROM aamdaanisubtitle where aspid="+e.target.value;
  connection.query(search,function(err,res,fields){
      console.log(res);
      if(err) throw err; 
        $('#aamdaanisubtitleoption').val('');

      for(var i=0;i<res.length;i++){
        $('#aamdaanisubtitleoption').append("<option value='"+res[i].asid+"'>"+res[i].astitle+"</option>")
        
      }
      // $('#aamdaani').append('</select>');
     // alert($("#aamdaani").find('div').hasClass("mulye"));
if($("#aamdaani").find('div').hasClass("mulye"))
{

  console.log("Already defined");
}
else{
      $('#aamdaani').append("<div class='mulye w-50 text-center'><label for='Email' >मूल्य</label><br/><input type='text'  id='email' class=' form-control d-inline ' autofocus/></div><div align='center' class='form-group w-50 mt-3 text-center aamdaanisubmit'><button type='reset' class='form-control w-25 btn btn-primary aamdaanireset'>रद्द गर्नुहाेस</button><button type='submit'  class='ml-2  form-control aamdaanisubmit w-25 btn btn-primary btn-sm '  onclick='test()'>Submit</button></div></div></form>");
    }
    });
  }
  else
{
   $('#aamdaanisubtitleoption').text('');
   $('#aamdaanisubtitleoption').append('<option value="0">--------------</option>');
   if($('#aamdaani').find('div').hasClass('mulye'))
   {

    $('#aamdaani').find('div.mulye').remove();
    // $('#aamdaani').find('div.mulye').removeClass('mulye');
    $('#aamdaani').find('div.aamdaanisubmit').remove();
    $('#aamdaani').find('div.aamdaanireset').remove();


   }

}
}