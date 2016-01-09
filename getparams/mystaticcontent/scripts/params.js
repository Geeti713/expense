jQuery(document).ready(function(){
					jQuery("getparams").click(function(){
						var generatelist = function(arr){
							var str = "<table><tr><td>Get Parameters</td></tr>";
							arr.forEach(function(elem){
								str=str+"<tr><td>"+elem.name+"<td><tr>";			
							});
							str= str+"</table>";
							return str;						
						}
						jQuery.get("/realtimeparams?p=", function(res){
							var a = res.arr;
							var params= generatelist(a);	
							jQuery("#urlparams").html(params);
						});		
							
					});
				
});







