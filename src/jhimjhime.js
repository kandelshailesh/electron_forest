var sql = require('mysql');
const electron=require('electron');
const swal=require('sweetalert');
// const printer= require('electron-print');
var dateformat=require('dateformat');
// const printthis= require('print-this');
const BrowserWindow = electron.remote.BrowserWindow;

const { remote } = require('electron');

var connection = sql.createConnection({
  host:'localhost',
  user:'root',
  password:null,
  port:'3308',
  database:'jhimjhime',
  dateStrings:true
})

function sqlconnection()
{
connection.connect(function(err){
  if(err) throw err;
  $('.status').removeClass('text-danger').addClass('text-success');
  $('.status').text('Connected');

  console.log("DB connected");
});
}

function lists()
{
  if($('#ablist').hasClass('d-none'))
  {
  $('#ablist').removeClass('d-none');
  }
  else
  {
  $('#ablist').addClass('d-none');
  }
}

// var quer='SELECT * from `posts`';
// connection.query(quer,function(err,results,fields){
//   if(err){
//     console.log(err.code);
//   }
//   console.log(results[0]);
// })


function fn(e){
  console.log(e.target.value);
  var searchfn=e.target.value;
  var search= "SELECT * FROM jhimjhime where Firstname LIKE  ?";
  connection.query(search,'%'+searchfn+'%',function(err,res,fields){
    $('#listuser').text('');
    if(err) throw err; 
    for(var i=0;i<res.length;i++){
      $('#listuser').append('<li class="list-group-item">'+res[i].Firstname+'</li>');
    }
  
  });
}


      // function test()
      // {
      //   console.log($('#fname').val());
      //   var a=$('#fname').val();
      //   var b=$('#lname').val();
      //   var c=$('#email').val();
      //   var d=$('#pass').val();
      //   var data={Firstname:a,Lastname:b,Email:c,Password:d}
      //   // var insert= 'INSERT INTO jhimjhime VALUES (a,b,c,d)';
      //   connection.query('INSERT INTO jhimjhime SET ?',data,function(err,res){
      //     if(err) throw err;
      //     console.log("insert successfully");
      //   })
      // }
  
      function aamdaani()
      {
      
        $('#aamdaani').removeClass('d-none');
        $('#kharcha').addClass('d-none');
        
      }

      function kharcha()
      {
         $('#aamdaani').addClass('d-none');
        $('#kharcha').removeClass('d-none');
        
      }

    
      

      function kharchaoptions()
      {

        alert("hello world");
        var optionnumber= parseInt($('#kharchaoption').val())+1;
        var i;
        for(i=1;i<12;i++)
        {
          if(i===optionnumber)
          {
            $("#kharchaselect:nth-child("+i+")").removeClass('d-none');
          }
          else 
          {
          console.log("Else");
          if($("#kharchaselect:nth-child("+i+")").hasClass('d-none'))
          {
            console.log("Already");
          }
          else
          {
            $("#kharchaselect:nth-child("+i+")").addClass('d-none');
          }
          }
          }
              }



  function kharchatitlemodal() 
  {
  let win = new BrowserWindow({ width: 600, height: 300 })
  win.on('close', function () { win = null })
  win.loadURL(`file://${__dirname}/kharchatitlemodal.html`)
  win.show()
  
}

var navbar="<div class='col-md-4'><ol type='1' class='nav list-group flex-column  border'><li class='nav-item'><a onclick='javascript:lists()' href='#'' class='nav-link active'>अाय व्यय विवरण </a></li><ol  id='ablist' type='1' style='color:blue;'><li class='nav-item' ><a style='color:blue;' onclick='javascript:showoption(1)' href='#'>अाम्दानी विवरण </a></li><li class='nav-item'><a style='color:blue;' href='#' onclick='javascript:showoption(2)'> खर्च विवरण</a></li></ol><li class='nav-item'><a  href='#' class='nav-link active' onclick='javascript:showoption(3)'>उपभाेक्ता</a></li><li class='nav-item'><a  href='#' class='nav-link active' onclick='javascript:showoption(4)'>पदाधिकारी</a></li><li class='nav-item'><a  href='#' onclick='javascript:showoption(5)' class='nav-link active'>काठकाे विवरण</a></li></ol></div>";

// var kharcha="<form class='w-100 text-center' method='post'><div align='center' id='kharcha'><br/><div class='form-group'><label for='fname' class='d-inline'>खर्चकाे शिर्षक</label><br/><select class='form-control d-inline w-50' onchange='javascript:kharchaoptions()' id='kharchaoption' required><option value='1'>वन संरक्षण कार्य </option><option value='2'>वन विकाश कार्य</option><option value='3'>वन सम्बर्द्वन कार्य</option><option value='4'>वन सदुपयाेग कार्य</option><option value='5'>अायमूलक तथा सामुदायिक विकाश</option><option value='6'>जैविक विविधता संरक्षण कार्य</option><option value='7'>भू तथा जलाधार संरक्षण कार्य</option><option value='8'>संस्थागत विकाश कार्य</option><option value='9'>शुसासन तथा क्षमता अभिबृदि  कार्यक्रम</option><option value='10'>सामाजिक विकाश कार्यक्रम</option><option value='11'>भाैतिक निर्माण कार्य / संघ संस्था अनुदान</option></select><button class='btn btn-success' data-target='#kharchatitlemodal'>+</button></div><div class='form-group w-100'><label for='lname' class='d-inline' >खर्चकाे उपशिर्षक </label><br/><select  class='d-inline form-control w-50' id='kharchaselect' ><option value='1'>वन संरक्षण कार्य </option><option value='2'>वन विकाश कार्य</option><option value='3'>वन सम्बर्द्वन कार्य</option><option value='4'>वन सदुपयाेग कार्य</option><option value='5'>ाअयमूलक तथा सामुदायिक विकाश</option><option value='6'>जैविक विविधता संरक्षण कार्य</option></select> <button type='button' data-toggle='modal' data-target='#modalaamdanisubtitle' class='btn btn-success d-inline '>+</button><div class='modal' id='modalaamdanisubtitle'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>खर्चकाे उपशिर्षक</h4><button type='button' class='close' data-dismiss='modal'>&times;</button> </div><form><div class='modal-body row' ><div class='form-group text-center col-md-8'><input type='text' autofocus class='form-control'></div></div><div class='modal-footer'><div class='text-center'><button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm' onclick='test()'>जाेड्नुहाेस</button></div></div></form></div></div></div><select  class=' d-none form-control w-50' id='kharchaselect'><option value='7'>भू तथा जलाधार संरक्षण कार्य</option><option value='8'>संस्थागत विकाश कार्य</option><option value='9'>शुसासन तथा क्षमता अभिबृदि  कार्यक्रम</option><option value='10'>सामाजिक विकाश कार्यक्रम</option><option value='11'>भाैतिक निर्माण कार्य / संघ संस्था अनुदान</option></select></div><div style='margin-left:-23px;' class=' form-group'><label for='Email' >मूल्य</label><br/><input type='email' id='email' class=' w-50  form-control' autofocus/></div><div align='center' class='form-group w-100'><button type='submit' class='btn btn-primary btn-lg' onclick='test()'>Submit</button></div></form>";




// function kharchasubtitleoptions(value)
// {
// alert(this.value);
// var search= "SELECT * FROM kharchasubtitle where kspid=`value`";
// connection.query(search,function(err,res,fields){
//     if(err) throw err; 
//     for(var i=0;i<res.length;i++){
//       kharchahead+='<option value='+res[i].ksid+'>'+res[i].kstitle+'</option>';
//     }
//     kharchahead+='</select>';
  
//   });
// }




var aamdani="<form class=' w-100 text-center' method='post'><div align='center' id='aamdaani'><br /><div  class='form-group'><label for='fname'>अाम्दानीकाे शिर्षक</label><br/><select class='form-control d-inline w-50' onchange='aamdaanioption()' id='aamdaanioption' required><option value='1' >वन पैदावर बिक्रि</option><option value='2'>संस्थागत विकाश</option><option value='3'>विविध अन्य</option></select><button type='button' data-toggle='modal' data-target='#modelaamdani' class='btn btn-success d-inline '>+</button></div><div class='form-group w-100'><label for='lname' >अाम्दानीकाे उपशिर्षक </label><br/><select class='form-control w-50 d-inline' onchange='aamdaanioption()' id='aamdaanioption' required><option value='1' >वन पैदावर बिक्रि</option><option value='2'>संस्थागत विकाश</option><option value='3'>विविध अन्य</option></select><button type='button' data-toggle='modal' data-target='#modalaamdanisubtitle' class='btn btn-success d-inline '>+</button><div class='modal' id='modalaamdanisubtitle'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>अाम्दानीकाे उपशिर्षक</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><form><div class='modal-body row' ><div class='form-group text-center col-md-8'><input type='text' autofocus class='form-control'></div></div><div class='modal-footer'><div class='text-center'><button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm' onclick='test()'>जाेड्नुहाेस</button></div></div></form></div></div></div>        </div><div class='form-group'><span class='d-inline' for='Email'>मूल्य</span><br/><input type='email'  id='email' class=' d-inline form-control w-50' autofocus/><button type='button' class='d-none btn btn-success  '>+</button></div><div align='center' class='form-group w-50'><button type='submit' class='btn  btn-primary btn-lg' onclick='test()'>Submit</button></div></div></form><form class=' w-100 align-items-center' method='post'><div id='kharcha' class='d-none'><br/><div class='form-group'><label for='fname'  class='d-inline'>खर्चकाे शिर्षक</label><br/><select class='form-control d-inline w-50' onchange='javascript:kharchaoptions()' id='kharchaoption' required><option value='1'>वन संरक्षण कार्य </option><option value='2'>वन विकाश कार्य</option><option value='3'>वन सम्बर्द्वन कार्य</option><option value='4'>वन सदुपयाेग कार्य</option><option value='5'>अायमूलक तथा सामुदायिक विकाश</option><option value='6'>जैविक विविधता संरक्षण कार्य</option><option value='7'>भू तथा जलाधार संरक्षण कार्य</option><option value='8'>संस्थागत विकाश कार्य</option><option value='9'>शुसासन तथा क्षमता अभिबृदि  कार्यक्रम</option><option value='10'>सामाजिक विकाश कार्यक्रम</option><option value='11'>भाैतिक निर्माण कार्य / संघ संस्था अनुदान</option></select><button type='button' data-toggle='modal' data-target='#modalkharcha' class='btn btn-success d-inline '>+</button><div class='modal' id='modalkharcha'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>खर्चकाे शिर्षक</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><form><div class='modal-body row' ><div class='form-group text-center col-md-8'><input type='text' autofocus class='form-control'></div></div><div class='modal-footer'><div class='text-center'><button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm' onclick='test()'>जाेड्नुहाेस</button></div></div></form></div></div></div></div><div class='form-group w-100'><label for='lname' class='d-inline' >खर्चकाे उपशिर्षक </label><br/><select  class='d-none form-control w-25' id='kharchaselect' ><option value='1'>वन संरक्षण कार्य </option><option value='2'>वन विकाश कार्य</option><option value='3'>वन सम्बर्द्वन कार्य</option><option value='4'>वन सदुपयाेग कार्य</option><option value='5'>ाअयमूलक तथा सामुदायिक विकाश</option><option value='6'>जैविक विविधता संरक्षण कार्य</option></select><select  class='d-none form-control w-25' id='kharchaselect'><option value='7'>भू तथा जलाधार संरक्षण कार्य</option><option value='8'>संस्थागत विकाश कार्य</option><option value='9'>शुसासन तथा क्षमता अभिबृदि  कार्यक्रम</option><option value='10'>सामाजिक विकाश कार्यक्रम</option><option value='11'>भाैतिक निर्माण कार्य / संघ संस्था अनुदान</option></select><button type='button' data-toggle='modal' data-target='#modalkharchasubtitle' class='btn btn-success  d-inline-block'>+</button><div class='modal' id='modalkharchasubtitle'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>खर्चकाे उपशिर्षक</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><form><div class='modal-body row' ><div class='form-group text-center col-md-8'><input type='text' autofocus class='form-control'></div></div><div class='modal-footer'><div class='text-center'><button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm' onclick='test()'>जाेड्नुहाेस</button></div></div></form></div></div></div></div><div class='form-group' style='margin-left:23px;'><label class='d-inline' for='Email' >मूल्य</label><br/><input type='number' id='email' class=' form-control w-75' autofocus/></div><div align='center' class='form-group w-100 '><button type='submit'  class='form-control btn btn-primary btn-lg '  onclick='test()'>Submit</button></div></div></form>";

// <input type='text' placeholder='उपभाेक्ताकाे नाम' class='col-md-7 form-control'><a class='btn btn-outline-primary col-md-3'>खाेज</a>

var upavokta="<ul style='list-style-type:none;' class='p-3' ><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:upavoktathap()'>उपभाेक्ता थप</a></li><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:upavoktakhoj()'>उपभाेक्ता खाेज</a></li></ul><form id='upavoktamain'  style='margin-left: 30px;' onsubmit='return false' class=' w-75  align-items-center'><div class='row upavoktadel' ><div class='form-group text-center col-md-4'><label for='fname'>नाम</label><input type='text' id='fname' name='fname' class='pt-2 w-100 form-control' autofocus required /></div><div class='form-group text-center  col-md-4'><label for='lname'>थर </label><input type='text' name='lname' id='lname' class='form-control w-100 ' required /></div><div class='form-group text-center  col-md-4'><label for='address' >ठेगाना</label><input type='text' name='address' id='address' class=' form-control w-100' autofocus required /></div><div class='col-md-4 text-center form-group'><label for='sex'>लिङ्ग</label><br/><select name='gender' class='form-control w-100'><option value='0'>पुरुष</option><option value='1'>महिला</option></select></div></div><div class='row upavoktaadd'><div class='col-12 text-center'> <button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><a class='btn btn-primary btn-sm ml-1' onclick='javascript:adduser();'>जाेड्नुहाेस</a></div></div></div></form>";

function adduser()
{
  var userforms=$('#upavoktamain').serializeArray();  
if(userforms[0]['value'] && userforms[1]['value'] && userforms[2]['value'] && userforms[3]['value'])
{
      var userform=[[userforms[0]['value'],userforms[1]['value'],userforms[2]['value'],userforms[3]['value']]];
  
  console.log(userform);
  var useraddquery="INSERT into upavokta(fname,lname,address,sex) values ?"
  connection.query(useraddquery,[userform],function(err,res)
  {
    if(err) throw err;
    swal({
      title:'User added successfully',
      icon:'success'
    })
  })
}
}
function upavoktakhoj()
{
  $('.upavoktadel').remove();
  $('.upavoktaadd').remove();

  $('#upavoktamain').append("<form class='upavoktakhojform'><div class='upavoktadel row form-group'><select class='form-control w-25 ml-3' id='upavoktakhoj3' name='upavoktakhojaddressselect'><option value='0'>---------------------</option><option value='1'>Location 1</option><option value='2'>Location 2</option><option value='3'>Location 3</option><option value='4'>Location 4</option><option value='5'>Location 5</option></select><input name='upavoktakhojnameinput' type='text' name='personname' placeholder='उपभाेक्ताकाे नाम' class='col-md-4 ml-2 form-control' id='upavoktakhoj1'><select name='upavoktakhojsexinput' class='form-control ml-2 w-25' id='upavoktakhoj2'><option value='0'>------------</option><option value='1'>पुरुष</option><option value='2'>महिला</option></select><a class='btn ml-2 btn-outline-primary col-md-1'>खाेज</a></div></form>");
  var addresslist= "SELECT addressid,addressname from address ";
  connection.query(addresslist,function(err,res,fields){    for(var i=0;i<res.length;i++)
    {
    $('#upavoktakhoj3').append("<option value='"+res[i].addressid+"'>"+res[i].addressname+"</option>");
  }
  });
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
if(!$('#upavoktakhoj3').hasClass('d-none'))
  {
  $('#upavoktakhoj3').addClass('d-none');
}
  $('#upavoktakhoj1').removeClass('d-none');

}
if(value==='2')
{
  if(!$('#upavoktakhoj3').hasClass('d-none'))
  {
  $('#upavoktakhoj3').addClass('d-none');
}
  if(!$('#upavoktakhoj1').hasClass('d-none'))
  {
  $('#upavoktakhoj1').addClass('d-none');
}
  $('#upavoktakhoj2').removeClass('d-none');
}
if(value==='3')
{
   if(!$('#upavoktakhoj1').hasClass('d-none'))
  {
  $('#upavoktakhoj1').addClass('d-none');
}
  if(!$('#upavoktakhoj2').hasClass('d-none'))
  {
  $('#upavoktakhoj2').addClass('d-none');
}
  $('#upavoktakhoj3').removeClass('d-none');
}
}

function upavoktathap()
{
  $('.upavoktadel').remove();
  $('.upavoktaadd').remove();

  $('#upavoktamain').append("<div class='row upavoktadel' ><div class='form-group text-center col-md-4'><label for='fname'>नाम</label><input type='text' id='fname' name='fname' class='pt-2 w-100 form-control' autofocus/></div><div class='form-group text-center  col-md-4'><label for='lname'>थर </label><input type='text' name='lname' id='lname' class='form-control w-100 '/></div><div class='form-group text-center  col-md-4'><label for='address' >ठेगाना</label><input type='text' name='address' id='address' class=' form-control w-100' autofocus/></div><div class='col-md-4 text-center form-group'><label for='sex'>लिङ्ग</label><br/><select class='form-control w-100'><option value='0'>पुरुष</option><option value='1'>महिला</option></select></div></div><div class='col-12 text-center upavoktaadd'> <button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>रद्द गर्नुहाेस</button><button type='submit' class='btn btn-primary btn-sm ml-1' onclick='test()'>जाेड्नुहाेस</button></div></div></form>");
}

var padhadhikari="<ul style='list-style-type:none;' class='p-3' ><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:padhadhikarithap()'>पदाधिकारी थप</a></li><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='javascript:padhadhikarikhoj()'>पदाधिकारी खाेज</a></li></ul><form class='padhadhikarimain'><div class='row text-center'><legend class='ml-5'>पदाधिकारी</legend><div class='form-group p-1 ml-4 col-md-3'><label>नाम</label><input placeholder= 'कर्मचारीकाे नाम' type='text' class='form-control'/></div><div class='form-group col-md-2 ml-2 p-1 '><label>पद</label><select name='post' id='samiti' class='form-control'><option selected='selected' value='0'>-------------------</option><option  value='1'>अध्यक्ष</option><option  value='2'>उपाध्यक्ष</option><option  value='3'>सह सचिव</option><option  value='4'>सचिव</option><option value='5'>सह सचिव</option><option value='6'>सदस्य</option><option value='7'>सल्लाहकार</option><option value='8'>संयाेजक</option><option value='9'>कास</option><option value='10'>वन हेरालु</option></select></div><div class='form-group col-md-3 p-1 ml-2'><label>समिति</label><select name='samiti' id='samiti' class='form-control ml-2'><option selected='selected' value='0'>---------------------</option><option  value='1'>कार्य समिति</option><option  value='2'>लेखा समिति </option><option  value='3'>कर्मचारी विवरण</option></select></div><div class='form-group col-md-2 p-1 ml-3'><label>सुरू मिति</label><input id='startdate'  class='form-control'/></div> <div class='form-group p-1 col-md-2'></div> <br/><div class='form-group text-center col-md-12 '><br/><button type='reset' class='btn  mt-2 btn-danger'>रद्द गर्नुहाेस</button><button type='submit' class=' ml-1 mt-2 btn btn-primary'>जाेड्नुहाेस</button></div></div></form><br/>";

function padhadhikarithap()
{
  console.log('Hello');
  $('.padhadhikarimain').text('');
  $('.padhadhikarimain').append("<form class='padhadhikarimain'><div class='row text-center'><legend class='ml-5'>पदाधिकारी</legend><div class='form-group p-1 col-md-3  ml-4'><label>नाम</label><input placeholder= 'कर्मचारीकाे नाम' type='text' class='form-control'/></div><div class='form-group col-md-2 ml-2 p-1 '><label>पद</label><select name='post' id='samiti' class='form-control'><option selected='selected' value='0'>-------------------</option><option  value='1'>अध्यक्ष</option><option  value='2'>उपाध्यक्ष</option><option  value='3'>सह सचिव</option><option  value='4'>सचिव</option><option value='5'>सह सचिव</option><option value='6'>सदस्य</option><option value='7'>सल्लाहकार</option><option value='8'>संयाेजक</option><option value='9'>कास</option><option value='10'>वन हेरालु</option></select></div><div class='form-group col-md-3 p-1 ml-2'><label>समिति</label><select name='samiti' id='samiti' class='form-control'><option selected='selected' value='0'>---------------------</option><option  value='1'>कार्य समिति</option><option  value='2'>लेखा समिति </option><option  value='3'>कर्मचारी विवरण</option></select></div><div class='form-group col-md-2 p-1'><label>सुरू मिति</label><input id='startdate'  class='form-control ml-3 p-1'/></div> <div class='form-group p-1 col-md-2'></div> <br/><div class='form-group text-center col-md-12 '><br/><button type='reset' class='btn  mt-2 btn-danger'>रद्द गर्नुहाेस</button><button type='submit' class=' ml-1 mt-2 btn btn-primary'>जाेड्नुहाेस</button></div></div></form>");

}
function padhadhikarikhoj()
{
  $('.padhadhikarimain').text('');
  $('.padhadhikarimain').append("<div id='kharchabydate' class='form-group ml-2 col-md-auto d-inline p-2'><input id='datepadhadhikari' class='form-control w-25 d-inline'/><select name='samiti' id='samiti' class='form-control w-25 d-inline ml-2'><option selected='selected' value='0'>सबै</option><option  value='1'>कार्य समिति</option><option  value='2'>लेखा समिति </option><option  value='3'>कर्मचारी विवरण</option></select><a class='btn  kharchakhojbutton btn-primary ml-2' onclick='javascript:padhadhikarikhojbuttons(1)'> खाेज</a></div><div class='form-group pt-2'><br/><table class='table table-striped text-center'><tr><th>सि.नं</th><th>पद</th> <th>नाम</th><th>ठेगाना</th></td></table></div>");
$('#datepadhadhikari').calendarsPicker({calendar: $.calendars.instance('nepali')});

}

var kaathbibaran="<ul style='list-style-type:none;' class='p-3' ><li class='d-inline'><a onclick='kaathbibaranoptions(1)' class='btn bg-white' style='border-bottom-color:green;'>अाम्दानी/विक्रि</a></li><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='kaathbibaranoptions(2)'>अाम्दानी खाेज</a></li><li class='d-inline'><a class='btn bg-white' style='border-bottom-color:green;' onclick='kaathbibaranoptions(3)'>भरखर</a></li></ul><form><div class='row text-center'><legend class='ml-5'>काठ/दाउरा विवरण</legend><div class='form-group col-md-3'><label>काठ/दाउरा</label><select name='kaath' id='kaath' class='form-control'><option selected='selected' value='0'>--------------</option><option  value='1'>सालकाठ A</option><option  value='2'>सालकाठ B</option><option  value='3'>सालकाठ C</option><option  value='4'>असना A</option><option value='5'>असना B</option><option value='6'>जामुन</option><option value='7'>बाँझी</option><option value='8'>कर्मा A</option><option value='9'>कर्मा B</option><option value='10'>कुसुम</option><option value='11'>माैवा</option><option value='12'>जिगर</option><option value='13'>भलायाे</option><option value='14'>बाेडढयराे</option><option value='15'>दाउरा</option></select></div><div class='form-group col-md-3 personadd'><label>अाम्दानी/विक्रि</label><select name='kaath' id='kaath'  class='form-control' onchange='kaathbibaranoptionschange(event)'><option selected='selected' value='0'>--------------</option><option  value='1'>ढलावढा</option><option  value='2'>पुर्नउत्पादन</option><option  value='3'> उ. भित्र विक्री </option><option  value='4'>जि.व.का अापूर्ति</option><option value='5'>लिलाम टेण्डर</option><option value='6'>अान्तरीक खपत</option></select><input id='kaathbibaranoptionuser' type='text' placeholder='उपभाेक्ताकाे नाम' class='mt-2 form-control d-none'></div><div class='form-group col-md-2' required><label>परिमाण(Cft)</label><input class='form-control' name='quantity' type='number' id='quantity' min='0' /></div><div class='form-group  col-md-2'><label>दर </label><input type='number'  class=' form-control' id='individualrate' name='individualrate'></div><div class='col-md-2'><label>कुल रकम </label><input type='number' id='totalrate' name='totalrate' class='form-control'></div><div class='form-group  col-md-4'><br/><button type='reset' class='btn mt-2 btn-danger'>रद्द गर्नुहाेस</button><a class=' mt-2 ml-1 btn btn-primary'>जाेड्नुहाेस</a></div></div></form>";

// function kaathbibaranoptions(value)
// {

// }
$(document).on('keyup','#individualrate',function(){
  // alert("from kaath");
  var total=$('#individualrate').val() * $('#quantity').val();
  $('#totalrate').val(total);
});
$(document).on('keyup','#quantity',function(){
  // alert("from kaath");
  var total=$('#individualrate').val() * $('#quantity').val();
  $('#totalrate').val(total);
});


function kaathbibaranoptionschange(e)
{
var value = e.target.value;
if(value==='3')
{
$('#kaathbibaranoptionuser').removeClass('d-none');
}
else
{
if(!$('#kaathbibaranoptionuser').hasClass('d-none'))
{
$('#kaathbibaranoptionuser').addClass('d-none');
}
}
}

function kharchasubtitlemodal()
{
  let win = new BrowserWindow({ width: 600, height: 300 })
  win.on('close', function () { win = null })
  win.loadURL(`file://${__dirname}/kharchasubtitlemodal.html`);
  win.show()
}

function aamdaanititlemodal()
{
  let win = new BrowserWindow({ width: 600, height: 300 })
  win.on('close', function () { win = null })
  win.loadURL(`file://${__dirname}/aamdaanititlemodal.html`);
  win.show()
}