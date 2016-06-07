/*\
|*|	
|*|	SEVEN HUNDRED AND FOURTY THREE FRAGMENTS DRIFTING
|*| By Benjamin Forster and Sarah Rodigari
|*|
|*| Copyright (C) 2016 Benjamin Forster and Sarah Rodigari
|*| 
|*| This program is free software: you can redistribute it and/or modify
|*| it under the terms of the GNU General Public License as published by
|*| the Free Software Foundation, either version 3 of the License, or
|*| (at your option) any later version.
|*| 
|*| This program is distributed in the hope that it will be useful,
|*| but WITHOUT ANY WARRANTY; without even the implied warranty of
|*| MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
|*| GNU General Public License for more details.
|*| 
|*| You should have received a copy of the GNU General Public License
|*| along with this program.  If not, see <http://www.gnu.org/licenses/>.
|*| 
\*/

(function() {

	function ok_to_run() {
		var is_ok = true;
		var no_goes = [
			"https://www.biennaleofsydney.com.au/20bos/shop/",
			"https://www.biennaleofsydney.com.au/20bos/cart/",
			"https://www.biennaleofsydney.com.au/20bos/checkout/",
			"https://www.biennaleofsydney.com.au/20bos/education/education-bookings/"
			];
		for (var i =0; i<no_goes.length; i++) {
			if(window.location.toString().indexOf(no_goes[i])===0) {
				is_ok = false;
				break;
			}
		}
		return is_ok;
	}
	if(!ok_to_run()) return;

	var variation = 200,
				stable = 4500,
				weight = 200;
	var a_pause = 650;
	var started = false;
	var show_title = 0;
	var colour;
	var colour_count = 0;
	var w_count = 0;
	var s_count = 0;
	var paragraph;
	var sentence;
	var colours = shuffle(["#f25379","#13d1d1","#4df488","#e400ff","#13d1d1","#8e05ff"]);//"#002bff",
	var title = ["SEVEN HUNDRED AND FOURTY THREE FRAGMENTS  DRIFTING 2016", "BY BENJAMIN FORSTER AND SARAH RODIGARI"];
	var text = [["I have a machine to hear people",
	"Finished men of sins and bravado",
	"I don’t someone  and an hour",
	"It could actually bear  and stand",
	"Carve you oddly",
	"Also   it will excuse a phone"],
	["The beginning for class has awaken",
	"This is not a smile",
	"You pick your story   as the details that every little Zen thought",
	"“Think” I was good",
	"It’s really too genius. Have to abandon"],
	["There was a contractor   amateur on hot houses",
	"The times of problems I still decide about",
	"We progress "],
	["It is a surface as thin as this window"],
	["Fragment from the morning of the 17th", 
	"Some printed ink on paper traverses the administrative infrastructure into our hands.",
	"A circuit that emphasises resources and access   a pdf emailed to admin at organistation dot org.",
	"Downloaded   control-P to WIFI to network cable to printer",
	"Stapled   folded  placed in my back pocket",
	"Taken for a walk",
	"Sat on for a while",
	"The paper taking on the form of my arse",
	"Taken out of my pocket   waiting on the table while I pack my bag to retire "],
	["In the morning, waking to an alarm   I pretend to be a worker getting ready for work",
	"I sit down to read the paper   but the paper is still on the table far away   on that table",
	"It is waiting",
	"The computer streaming live news runs out of battery",
	"It is exhausted at 8am too",
	"Anyway   I read the text in small print   sliding it around   pinching it to a legible scale",
	"I tire and skim the remainder looking at the proper nouns.",
	"All are white male and canonical",
	"I have to stand to let someone off the train",
	"I look out the window at the reflection of the passengers on the other side of the train",
	"Thinking again of Sontag’s weight   her currency amongst our circles",
	"I think about the lineage of thought   the accumulation of knowledge  about patriarchy and feminism"],
	["The air-conditioning cuts off on the train  and there is a sudden shift in the atmosphere   the absence of noise suddenly so loud"],
	["The building standing as it does",
	"Just after the discover of",
	"And the invasion of",
	"Just after the discover of",
	"And the invasion of",
	"Just after the discover of",
	"and the invasion of",
	"Just after the discover of",
	"and the invasion of",
	"I know that we’ve come a long way to be here",
	"What’s more   we’ve come a long way to be here together",
	"Here in our bodies that have changed so much over the years",
	"We know that this moment",
	"And the moment that carries us forward",
	"Can also mean no way back"],
	["I won’t lie to you",
	"It’s going to be an emotional rollercoaster",
	"But somehow we’re going get through it"],
	["I’ve been thinking about this day forever",
	"I’ve been thinking about this day forever",
	"I’ve been thinking about this day forever",
	"I’ve been thinking about this day forever"],
	["Marked a recognition by others of their new beginning",
	"The weather here is fine",
	"It is not quite anything"],
	["We have reached a “just” “turning” “point” of a middle season where things",
	"Like nature and fashion are between totalities.",
	"And obviously a metaphor for something bigger.",
	"A Stuart Membery skirt   size 10 beige  linen and not quite anything",
	"Floating midway on waves   Gaulle is a sunless sea  "],
	["Do you think straight photography is a bad title",
	"It’s a term not some double entendre"],
	["Is a forced attempt at a failing",
	"And obviously a metaphor for something bigger",
	"In which   from now on   every comment will be received the wrong way "],
	["It could be this one",
	"Or it could be this one",
	"But I would suggest another",
	"Not in this window",
	"Not in this corner",
	"Not in this room "],
	["RULES   TO BE NEGOTIATED   Remember this offer is not negotiable"],
	["It could be this room",
	"This picture",
	"This paradox",
	"This present and this remoteness"],
	["I would like to begin by inviting you to think of",
	"to begin by inviting you to think of",
	"you to think of "],
	["Pause to hold up the sky",
	"Hyper-individualised and excessively autobiographical",
	"This present and this remoteness "],
	["For as long as I can remember I have wanted",
	"I have wanted",
	"I have wanted",
	"I have wanted",
	"I have wanted"]];

	$(document).ready(next_word);

	function next_colour () {
		colour_count++;
		if(colour_count>=colours.length-1) {
			colour_count=0;
			shuffle(colours);
		}
		return (colour!==colours[colour_count])? colours[colour_count]: next_colour();
	}

	function next_paragraph() {
		paragraph = (show_title++ == 1)? title : random(text);
		show_title %= 4;
		s_count=0;
		w_count=0;
		colour = next_colour();
		return (!started) ? a_pause : a_pause*5;
	}

	function next_sentence() {
		sentence = paragraph[s_count].split(' ');
		s_count++;
		w_count=0;
		return a_pause*3;
	}

	function next_word() {
		var time = a_pause;
		if(!paragraph || (s_count>=paragraph.length && w_count>=sentence.length)) {
			time += next_paragraph();
			time +=next_sentence();
		} else if(!sentence || w_count>=sentence.length) {
			time += next_sentence();
		}

		var w = sentence[w_count];
		w_count++;
		if(!started) started = true;
		if(w) setTimeout(function(){ rain(w);}, time);
		else setTimeout(next_word,time/2);
	}

	function rain(word) {

		var i;
		var container = $('<div></div>').css({
			'position':'fixed',
			'top': 0,
			'left': 0,
			color: colour,

			'text-align':'center',
			'z-index':99999999,
			"pointer-events":'none'
		});

		$('body').append(container);
				
		var type = ($(window).width()<746)? '<h3></h3>': '<h1></h1>';
		var sentence = $(type)
									.css({margin:0,padding:0})
									.appendTo(container);
		var count = 0;
		var letters = [];
		//make letters.
		
		for(i=0; i<word.length; i++) {
			var letter = $('<span></span>').text(word[i])
			.appendTo(sentence)
			.css({
				position:"relative",
				top:'0'
			});
			if(letter!==' ') {
				count++;
				letters.push(letter);
			}
		}
		container.css({
			top: -sentence.height(),
			left: Math.floor(Math.random()*($(window).width()-sentence.width()))+'px'
		});
		// cascade
		for(i=0; i<letters.length; i++) {
			letters[i].delay(i*30+(10*Math.random())).animate(
				{ top: $(window).height()+sentence.height() },
				(Math.random()*variation)+
				stable+(weight*letters.length), 
				'linear',
				end
			);
		}

		function end() {
			if(--count === 0) {
				container.empty();
				container.remove();
			}
		}
		next_word();
	}

	function shuffle (array) {
		var i = 0, j = 0, temp = null;
		for (i = array.length - 1; i > 0; i-- ) {
			j = Math.floor(Math.random() * (i + 1));
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
	function random(list) {
		return list[Math.floor(Math.random()*list.length)];
	}
})();