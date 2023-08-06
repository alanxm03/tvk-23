async function  registerMemberDetails(){
            let data={

        "name":document.getElementById('name').value,
        "fatherName":document.getElementById('fatherName').value,
        "gender":document.getElementById('gender').value,
        "dob":document.getElementById('dob').value,
        "country":document.getElementById('country').value,
        "contact":document.getElementById('contact').value,
        "whatsapp":document.getElementById('whatsapp').value,
        "email":document.getElementById('email').value,
        "state":document.getElementById('state').value,
        "district":document.getElementById('district').value,
        "area":document.getElementById('area').value,
        "position":document.getElementById('position').value,
        "positionDesc":document.getElementById('positionDesc').value,
        "address":document.getElementById('address').value
                
            }
            console.log(data);
            
            var s= await fetch('/registermember',{
            
            "headers":{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            "method":"POST",
            "body": JSON.stringify(data)
            
        
        })
        var r=await s.json();
        if(r.data==="Saved to DataBase"){
            alert("Saved Successfully")
            window.location='/registerMember'
        }
        }



        function disFun(){

var x= document.getElementById("con2");
var t=document.getElementById("con1");
var z=document.getElementById("con3")
if(x.style.visibility="visible"){
    x.style.visibility="hidden";
    x.style.display="none"
    t.style.visibility="visible";
    t.style.display="block";
    // console.log(z);

}


}

function dispFun(){

var x= document.getElementById("con2");
var t=document.getElementById("con1");
var z=document.getElementById("con3")

    if( document.memberForm.state.value == "" ) {
            alert( "Please provide your state!" );
            document.memberForm.state.focus() ;
            return false;
         }
         if( document.memberForm.district.value == "" ) {
            alert( "Please provide your district!" );
            document.memberForm.district.focus() ;
            return false;
         }
         if( document.memberForm.area.value == "" ) {
            alert( "Please provide your area!" );
            document.memberForm.area.focus() ;
            return false;
         }
         if( document.memberForm.position.value == "" ) {
            alert( "Please provide your part!" );
            document.memberForm.position.focus() ;
            return false;
         }
         if( document.memberForm.positionDesc.value == "" ) {
            alert( "Please provide your partDetails!" );
            document.memberForm.positionDesc.focus() ;
            return false;
         }
         if( document.memberForm.address.value == "" ) {
            alert( "Please provide your address!" );
            document.memberForm.address.focus() ;
            return false;
         }
         if(true){
            if(x.style.visibility="visible"){
    x.style.visibility="hidden";
    x.style.display="none"
    z.style.visibility="visible";
    z.style.display="block";
            }
         }
    // console.log(z);

}



        function reg2(){
            var x= document.getElementById("con2");
            var t=document.getElementById("con1");
        if( document.memberForm.name.value == "" ) {
            alert( "Please provide your name!" );
            document.memberForm.name.focus() ;
            
            return false;
         }
         if( document.memberForm.fatherName.value == "" ) {
            alert( "Please provide your Father name!" );
            document.memberForm.fatherName.focus() ;
            return false;
         }
         if( document.memberForm.gender.value == "" ) {
            alert( "Please provide your gender!" );
            document.memberForm.gender.focus() ;
            return false;
         }
         if( document.memberForm.dob.value == "" ) {
            alert( "Please provide your DOB!" );
            document.memberForm.dob.focus() ;
            return false;
         }
         if( document.memberForm.country.value == "" ) {
            alert( "Please provide your country!" );
            document.memberForm.country.focus() ;
            return false;
         }
         if( document.memberForm.contact.value == "" ) {
            alert( "Please provide your mobile!" );
            document.memberForm.conttact.focus() ;
            return false;
         }
         if( document.memberForm.whatsapp.value == "" ) {
            alert( "Please provide your whatsappNo!" );
            document.memberForm.whatsapp.focus() ;
            return false;
         }
         if( document.memberForm.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.memberForm.email.focus() ;
            return false;
         }
         
         if(true){
            if(t.style.visibility="visible"){
                t.style.visibility="hidden";
                t.style.display="none";

                x.style.visibility="visible";
                x.style.display='block';
                // console.log(t);

            }
        }  
        }
