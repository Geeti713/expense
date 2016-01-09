jQuery(document).ready(function(){
	
		jQuery("#ok").click(function(){
	
			var name= jQuery("#nameinput").val();
			var joining= jQuery("#joininginput").val();
			var designation= jQuery("#designationinput").val();
			var total= jQuery("#total").val();

		jQuery.post("/leavedetails",{name: name, joining:joining, designation:designation, total:total}, function(res){
			
							console.log("request recieve");
							
							if(res.result==1){
						location.href="../index.html";							
								}
				});
				
	});
		
		jQuery("#cancle").click(function(){
			
			location.href= "../index.html"
	});
});
