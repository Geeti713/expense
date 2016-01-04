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
					
					var getUrlParameter = function getUrlParameter(sParam) {
    						var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        					sURLVariables = sPageURL.split('&'),sParameterName,i;
						for (i = 0; i < sURLVariables.length; i++) {
        						sParameterName = sURLVariables[i].split('=');
        						if (sParameterName[0] === sParam) {
            						return sParameterName[1] === undefined ? true : sParameterName[1];
        						}
    						}
					};
					var id = getUrlParameter('id');
					var name= getUrlParameter('name');
					var date = getUrlParameter('date');
					var holiday= jQuery("#holidayname").val(name);
					var date = jQuery("#date").val(date);
	 				
					jQuery("#editholidaybutton").click(function(){
						var holiday= jQuery("#holidayname").val();
						var date = jQuery("#date").val();
						
						
						jQuery.post("/editholiday",{name:holiday, date:date, id:id},function(res){		
							if(res.ok==1){
	  								
									location.href="/htmls/holiday.html"
								
									}
									else if(res.ok==0){
									alert("not edit");
													
									}
							else{
								
							}	
						});
							
					});
});
