function ReportCard()
			{	
				
				var x=parseFloat(document.frm.txtMaths.value);
				var y=parseFloat(document.frm.txtEnglish.value);
				var z=parseFloat(document.frm.txtComputer.value); 
				
				alert ("Total Numbers = "  + (x+y+z));
				alert ("Percentage = " + ((x+y+z)*100)/300);
				
				if((x+y+z)<210)
				{
					alert ("Status = Fail")
				}
				else
				{
					alert ("Status = Pass")
				}
			}	
		