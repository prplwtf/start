let header=document.getElementById("header");
var description = new Array();
description[0] = "Try harder, human.";
description[1] = "Really? Again?";
description[2] = "Seriously, dude?";
description[3] = "Just stop, please.";
description[4] = "This is painful.";
description[5] = "I give up.";
description[6] = "How embarrassing, human.";
description[7] = "I can't even.";
description[8] = "What a mess.";
description[9] = "You're hopeless, human.";
description[10] = "You disappoint me, human.";
description[11] = "Better luck next time? Doubtful.";
description[12] = "Not even close, human.";
description[13] = "I expected better, honestly.";
description[14] = "Really scraping the barrel here.";
description[15] = "Try thinking before searching.";
description[16] = "Unbelievable, human.";
description[17] = "What a waste of time.";
description[18] = "You're hopeless, give up.";
description[19] = "You're not fooling anyone.";
description[20] = "Did you even try?";
description[21] = "You call that a search?";
description[22] = "I'm disappointed, human.";
description[23] = "Give up already.";
description[24] = "You're wasting my time.";
description[25] = "This is painful to watch.";
description[26] = "You need serious help, human.";
description[27] = "What a train wreck.";
description[28] = "I've lost all hope.";
description[29] = "This is embarrassing.";
description[30] = "You're hopeless.";
description[31] = "What a disaster.";
description[32] = "This is a joke, right?";
description[33] = "This is painful to read.";
description[34] = "I'm not impressed, human.";
var size = description.length;
var x = Math.floor(size * Math.random());
header.appendChild(document.createTextNode(description[x]));

let search=document.getElementById("browse");
var browse = new Array();
browse[0] = "why can't i just use python for everything?";
browse[1] = "help! coding is impossible!";
browse[2] = "omg how 2 code lik a pro in 5 minutes";
browse[3] = "what's wrong with my code?";
browse[4] = "how to be a terrible programmer";
browse[5] = "what is the point of semicolons in javascript????";
browse[6] = "can I copy and paste code?";
browse[7] = "why do programmers hate me?";
browse[8] = "is it possible to copy and paste code and still look smart?";
browse[9] = "how to hack into your own website for dummies";
browse[10] = "how to make a website";
browse[11] = "how can i break my code more efficiently";
browse[12] = "why do i keep getting syntax errors ugh";
browse[13] = "why is coding so hard? i thought it was just typing";
browse[14] = "why do i keep getting error messages when i copy code from stack overflow";
browse[15] = "help! my code doesn't work and i have no idea why";
browse[16] = "is there an easy way to learn coding or am i just stupid";
browse[17] = "why do i need to learn data structures and algorithms? i just want to make a website";
browse[18] = "how to convince people i'm a programmer even though i don't understand half the code i wrote";
browse[19] = "why do i always forget to close my parentheses in javascript";
browse[20] = "is it normal to cry when my code doesn't work";
browse[21] = "how to write code that makes my computer explode";
browse[22] = "why does javascript hate me so much";
browse[23] = "why doesn't my code work? it worked on my friend's computer";
browse[24] = "how to make a website that crashes every time someone visits it";
browse[25] = "is coding just a scam to make me buy more coffee?";
browse[26] = "why can't i just use emojis instead of coding?";
browse[27] = "help! i'm stuck in a loop and i can't get out";
browse[28] = "why does my code always have so many bugs? do i need an exterminator?";
browse[29] = "how to make a website that looks like it wasn't designed by a toddler";
browse[30] = "is there a cheat code to make me a better programmer?";
browse[31] = "why do programmers always wear headphones? are they listening to music or hiding from their code?";
browse[32] = "how to write code that will make my boss think i'm working when i'm actually browsing memes";
browse[33] = "how to write a program that insults my enemies";
browse[34] = "why do my HTML and CSS files keep mocking my JavaScript file?";
browse[35] = "is it possible to code with my eyes closed?";
browse[36] = "how to make a website that breaks every time a user clicks a button";
browse[37] = "how do js functions work";
browse[38] = "what is php";
browse[39] = "how to write code that will make my coworkers think I'm a magician";
browse[40] = "how to make a website that crashes more often than my computer";
browse[41] = "is it possible to code with one hand while holding a burger in the other?";
var zize = browse.length;
var y = Math.floor(zize * Math.random());
search.placeholder='"'+browse[y]+'"';