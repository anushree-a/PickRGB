//all the colors which will be used
//var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"];

var squares = document.getElementsByClassName("square");
var h2 = document.querySelector("h2");
var h4 = document.querySelector("h4");
var easybutton = document.getElementById("ideasy");
var hardbutton = document.getElementById("idhard");
var resetbutton = document.getElementById("idreset");
var randomcolorid = document.getElementById("randomcolorid");
var length = undefined;
var randomid = undefined;
var pickedcolor = undefined;
var colors = undefined;

function generateColors(n)
{
	var colors = [];
	for(var i=0;i<n;i++)
	{
		var r = Math.floor((Math.random()*256));
		var g = Math.floor((Math.random()*256));
		var b = Math.floor((Math.random()*256));
		c = "rgb("+r+", "+g+", "+b+")";
		colors.push(c);
	}
	return colors;
}



easybutton.addEventListener("click",function(){
	length = 3;
	randomid = Math.floor((Math.random() * 2) + 0);
	colors = generateColors(length);
	pickedcolor = colors[randomid];
	h2.textContent = "What do you think this color looks like?";
	h4.textContent = "Pick the tile best matching the color "+pickedcolor;
	//randomcolorid.textContent = pickedcolor;
	for(var i=0;i<length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor = this.style.background;
		if(clickedcolor==pickedcolor)
		{
			h2.textContent = "Correct! Try again with greater difficulty perhaps?";
			for(var i=0;i<length;i++)
			{
				squares[i].style.background = clickedcolor;
			}
		}
		else
		{
			h2.textContent = "Whoops. Please try another tile!";
			this.style.background = "black";
		}


	});
}
});

hardbutton.addEventListener("click",function(){
	length = 6;
	randomid = Math.floor((Math.random() * 5) + 0);
	colors = generateColors(length);
	pickedcolor = colors[randomid];
	h2.textContent = "What do you think this color looks like?";
	h4.textContent = "Pick the tile best matching the color "+pickedcolor;
	//randomcolorid.textContent = pickedcolor;
	for(var i=0;i<length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor = this.style.background;
		if(clickedcolor==pickedcolor)
		{
			h2.textContent = "Correct! Try again with the same difficulty perhaps?";
			for(var i=0;i<length;i++)
			{
				squares[i].style.background = clickedcolor;
			}
		}
		else
		{
			h2.textContent = "Whoops. Please try another tile!";
			this.style.background = "black";
		}
	});
}
});

resetbutton.addEventListener("click",function()
{
	length = undefined;
	randomid = undefined;
	pickedcolor = undefined;
	clickedcolor = undefined;
	h2.textContent = "Fancy another try at the game? Choose your difficulty level."
	h4.textContent = "You know you'll sharpen your RGB color guessing skills with this game!"
	for(var i=0;i<6;i++)
	{
		squares[i].style.background = "black";
	}
})