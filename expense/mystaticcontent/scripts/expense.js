jQuery(document).ready(function(){ 
					jQuery(window).load(function(){
						var cookies= document.cookie.split("; ");
						if(!cookies || cookies.length<=0)
						{
							window.location.href="../index.html";
							return ;
						}
						var found=false;
						for(var i=0; i < cookies.length; i++) 
						{	
							var cookiesarray= cookies[i].split("=");
							var name=cookiesarray[0];
							var value= "";
							if(cookiesarray.length>1)
							{
								value= cookiesarray[1];   
							} 				
							if(name=="isloggedin" && value == "true")
							{
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
					var generatelist = function(arr)
					{
						var str = "<table><tr><td><b>Category</b></td><td><b>Type</b></td><td><b>d</b></td><td><b>amt</b></td><td><b>dt</b></td><td><b>id</b></td><td><b>Email</b></td><td><b>Name</b></td><td><b>Status</b></td><td><b>Reference no</b></td><td></td></tr>";
						arr.forEach(function(elem)
						{
							str=str+ 
							"<tr><td>"+elem.category+"</td><td>"+elem.type+"</td><td>"+elem.d+"</td><td>"+elem.amt+"</td><td>"+elem.dt+"</td><td>"+elem.id+"</td><td>"+elem.email+"</td><td>"+elem.name+"</td><td>"+elem.status+
							"</td><td>"+"<input class="+ "'inputrefno'"+" id=" +'referno'+elem._id+ " type="+" 'text'"+" value="+"'"+elem.referenceno+"'"+">"+"</td><td>"+"<input class="+ "'mycheckbox'"+" id="+elem._id+ " type= "+"'checkbox'"+ ">"+"</td></tr>";
						});
						str= str+"</table>";
						return str;
					}				
					
					jQuery.get("/getexpense", function(res){

						var a = res.arr;
						var holiday = generatelist(a);	
						jQuery("#expenserecords").html(holiday);
						
						
						jQuery("#checkedpaid").click(function(){
							
							var clickedoncheckbox = false;

							$(".mycheckbox").each(function(){
								if(this.checked ==true)
								{
									var self= this;
									var id=$(self).attr("id"); 
									var inputid= "referno"+id;
									var inputval= $("#"+inputid).val();
									clickedoncheckbox = true;
  									if(!inputval)
									{
										alert("no referenceno provied");
												 
									}
									else
									{
										jQuery.get("/paidifischeck?id="+id+ "&refno="+ inputval, function(res)
										{
											if(res.ok==1){
												location.reload();
											}
											else{
												alert("not paid");				
											}
										});
									}								
								}
								
							});
							if(!clickedoncheckbox)
								{
									alert("select the check box");
													
								}
						
						
													
						});
						
					});
});
