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

	 				
					jQuery("#addholidaybutton").click(function(){
							
						var holiday= jQuery("#holidayname").val();
						var date = (jQuery("#date").val());
						
						console.log(date);
						
						jQuery.post("/addholiday",{name:holiday, date:date},function(res){		
							if(res.ok==1){
									location.href="/htmls/holiday.html"
					
									}
									else if(res.ok==0){
										alert("not insert");
													
									}
							else{
								
							}	
						});
							
	});
});
