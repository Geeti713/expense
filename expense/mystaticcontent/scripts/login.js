jQuery(document).ready(function(){
					jQuery(window).load(function(){
								var cookies= document.cookie.split("; ");
								if(!cookies || cookies.length<=0){
									window.location.href="../index.html";
									return ;
								}
								var found=false;
								for(var i=0; i < cookies.length; i++) {	
									var cookiesarray= cookies[i].split("=");
									var name=cookiesarray[0];
									var value= "";
									if(cookiesarray.length>1)
									{
										 value= cookiesarray[1];   
									} 				
									if(name=="isloggedin" && value == "true"){
          									found=true;	
									}
								}
								if(found){
									window.location.href="/htmls/expense.html";
								}			
    					});
	 				
					jQuery("#submitbutton").click(function(){
						//match passward and id		
						var email= jQuery("#emailid").val();
						var password = jQuery("#pswd").val();
						
						jQuery.post("/login",{email:email, pssd:password},function(res){		
							if(res.ok==1){
	  								document.cookie="isloggedin=true";
									console.log(document.cookie);
									location.href="/htmls/expense.html"
								
									}
									else if(res.ok==0){
									alert("Invaild email or password");				
									}
							else{
								alert("Invaild email or password");
							}	
						});
							
	});
});
