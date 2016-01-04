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
								if(!found){
									window.location.href="../index.html";
								}			
    					});
					
					var cookies= document.cookie.split("; ");
					if(!cookies || cookies.length<=0){
					}
					for(var i=0; i < cookies.length; i++) {	
						var cookiesarray= cookies[i].split("=");
						var name=cookiesarray[0];
						if(cookiesarray.length>1)
						{
							value= cookiesarray[1];   
						} 				
						if(name=="empid"){
          						var id = cookiesarray[1];
							var loggedid = function(arr){
									 var str= "<lable>"+arr+"</lable>";
									console.log(str);
									return str;
							}
							var login = loggedid(id);
							jQuery("#loggedinid").html(login);	
						}
					}
					jQuery('#logoutinput').click(function(){
    									document.cookie="isloggedin=null; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      										window.location.href = "../index.html";
   			 						
					});
					jQuery('#attendencebutton').click(function(){

    									location.href="/htmls/attendence.html";
					});
					jQuery('#expensebutton').click(function(){

    									location.href="/htmls/expense.html";
					});
					jQuery('#holidaybutton').click(function(){

    									location.href="/htmls/holiday.html";
					});
		
					

});
