window.onload=init;

let time=5;
let score=0;
let isplaying=false;
let prevscore;

const wordinput=document.querySelector('#word-input');
const currentword=document.querySelector('#current-word');
const inputword=document.querySelector('#word-input');
const message=document.querySelector('#message');
 
const words=['good','joke','lake','push','damn','write',
'done','judge','river',"agreement",'american','crushing','assume','become','country','defense','discussion','focus','language'];

function init(){

	//selecting words
	showWord(words);
	//countdown
	setInterval(countdown,1000);
	//checking status
	setInterval(checkstatus,1020);
	//previous score
	setInterval(previous,1020);
}

function startmatch(){
	if(wordmatch())
	{
		time=5;
		isplaying=true;
		showWord(words);
		score++;
		document.querySelector('#word-input').value='';
	}
}



function wordmatch()
{
	if(document.querySelector('#word-input').value===document.querySelector('#current-word').innerHTML)
		{
			document.querySelector('#message').innerHTML='Matched!';
			return true;
		}
	else
		{
		document.querySelector('#message').innerHTML='Not Matched!';
		return false;
		}
}



function showWord(words)
{
	const randIndex=Math.floor(Math.random()*words.length);
	document.querySelector('#current-word').innerHTML=words[randIndex];
}



function countdown(){
	document.querySelector('#time').innerHTML=time;
	if(time>0)
	{
		time-=1;
	}
	else if(time===0)
	{
		time=0;
		isplaying=false;
		return 0;
	}
}

function checkstatus()
{
	if(!isplaying && time===0)
	{
		score=0;
		document.querySelector('#score').innerHTML=score;
		document.querySelector('#message').innerHTML='Game over!!';
	}
	else
	{
		document.querySelector('#score').innerHTML=score;
	}
}

function previous(){
	if(isplaying && time===0)
	{
		
		prevscore=score;
		document.querySelector('#prev-score').innerHTML=prevscore;
	}
}

