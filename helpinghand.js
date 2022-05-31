var k=0;
var image_files=['pglg1.jpg','pglg4.png','pglg5.png','html.png'];
setInterval(start,2000);

function start()
{
		document.getElementById("help").src="img2/"+ image_files[k];
	k++;
	if(k>3)
	{
		k=0;
	}
}