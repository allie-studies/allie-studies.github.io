// Random Tweet 
// Arjun Srinivasan
// April 2020

function myFunction() {
    var line_number = Math.trunc(132 * Math.random());

    var list_of_tweets = 
    [
        'one last belated hss quote: "i want to be your dad" -as',
        '"my brother\'s a savage. yesterday he got drunk and hoverboarded home" -mvw',
        '"why do you think little caesar\'s mascot is depicted as a white male" - ai',
        '"i\'m a snake for a justice. a vigilante snake!" -as',
        '"i was short and thicc as shit" -ws',
        '"i just got played by the united states department of education" -as',
        '"be original. you don\'t want to be generic MBA debater #6" -vk',
        '"wait [as] for your birthday we should just stick a candle in a hot chick -ac',
        '"i want my splooge" -mvw',
        '"debates aren\'t bread"-vk',
        '"i don\'t say the n word. instead i say doge" -ws',
        '"[ab] don\'t be annoying or you get your privilege revoked" -bb',
        '"chex mix knows that brian has a chin hair?" -ac',
        '"you\'re about to have the best hot chick of your life" -ai',
        '"this is a microaggression...but a little bit smaller. a nanoaggresion" -aj',
        'we love u !!!! go eags',
        '"you\'re not eating toilet paper anyway so it doesn\'t matter if it has milk or cheese in it" -mvw',
        '"we are toast. it is going to melt the human species like a wax museum on fire." -aj',
        '"when i was little, i was pudgy. now i\'m older i\'m a only a little pudgy—and taller" -ws',
        '"racism is so good" -as',
        'aaaaand the start of a new one!!!',
        'HSS 2017 starts today. the end of an era/generation... #RIPOGHSSQUOTES',
        '"if atul was a tool what tool would atul be" -bb',
        '#woodwardkidthoughts',
        '"tbh im so excited for hillary to be president" -kc',
        'hss quotes misses u too :(((',
        'daily update..............i miss camp...................',
        '"this was the best seven weeks of my life. jk, the best seven weeks of my life was when I was in the womb" - rd',
        '"[hw] you should grow up" -rt',
        '"Sometimes I end 2nc cx early bc I start to look like a fool" -mw',
        '"lakers like \'we stay catching L\'s\'"-em',
        '"is kavya the girl with the broken smile?" -cm',
        '"i am moisturized and ready to party" -kc',
        '"that tree looks dilapitated" -wr "no. all tress are good" -kc',
        '"maddie" - wr',
        '"i\'m not a memer" -js',
        '"let\'s go to our secret play land?" -aj',
        '"i just don\'t agree with that" -jlb',
        '"im a big fan of senator ted cruz" -as',
        '"no one has ever seen the moon" -rt',
        '"[ak] definitely wants to be a basic bitch" -ac',
        '"this nail polish can dance better than me" -mw',
        '"remember Madison pettis? that\'s the story" -mw',
        '"love me some ganja" -as',
        '" i was confused for a sec b/c i thought yall were talking about tinder swipes like i didnt get how they could be traded" -aa',
        'my mistake - i forgot -kc',
        '"theres not even time to tweet during this lecture its too fast" -kc',
        '"once i had four advil it was a crazy time" -ac',
        '"this is how i got hooked on speed" -aa',
        '"have you ever smoked a weed" -as',
        '"this sautéed cabbage is wild"',
        '"Im a big fan of the meat only" -aa',
        '"im into foot stuff, but only with my parents" - wp',
        '"im wearing the hood bc it makes me feel cool i feel like bill clinton when he wears sunglasses" -kc',
        '"i love putting on hoodies i feel like im coming through the womb again its like being reborn" -kc',
        '"it takes two to tango" -cm "close but no tomato" -cm',
        '"jesus turned water into wine, he certainly could give a 1ar on condo" -bb',
        '"my stomach is stirring like a pot of stew" -kc',
        '"i love old white men" -kc',
        '"i\'m not white or republican" -mw',
        '"what\'s your opinion on naps" -rt',
        '"who are you, farmer mcgee? trying to plow the fields?" -df',
        '"does anyone have brown eyeliner I accidentally shaved off some of my eyebrow" -mw',
        '"raam sits naked on my chair" -as "...do you have any gum" -kc',
        '"i feel like too many white girls are on crack" -rd',
        '"im totally gonna make my kids massage me" -aa',
        '"so would you kill all the babies" -jp "i struggle with that question..." -rt',
        '"im breaking down the patriarchy by cat calling men" -as',
        '"just like a pumpkin spice latte...it doesn\'t exist" -js',
        '"[as] just googled how to consume cocaine" -kc',
        '"its not like youre smoking more cocaine" -zv',
        '"its not cool to be unclear" - jp',
        '"oh yeah beyonce... i\'ve heard of her...." -kc',
        '"i was really into the gender binary as a kid" - mw',
        '"oh, i forgot you\'re all unethical" -bb',
        '"terrell? do they name their dicks or something?" -anon',
        '"hes like christian grey but without the money for the equipment" -jl',
        '"[x] is like jizz- white and annoying" -rd',
        '"we should accede the us to china, like give back the land, but china style" -zv',
        '"harder and faster is the same thing" -msu HC',
        '"you gotta cut them all" -jp',
        '"we\'re clubbing them like baby seals on this DA" - jp',
        '"JP is champagne papi" - jl/cm',
        '"i hope this doesnt appear in my living room beacuse these are not effective framing issues" -jp',
        '"just get some bread your poor person"',
        '1:35 am - "if you like something so much why don\'t you marry it"',
        '"your mom is a problematic room" -aj',
        '"that card doesn\'t say anything about broccoli, or is it just me" -df',
        '"im really tired, I think the alcohol in my pasta is getting to me" -kc',
        '"i learned a new vocabulary word - darty, or day party" -as',
        '"ive known a lot of dicks in my life" -mw',
        '"it doesn\'t matter if you have a bitch if you\'re in a ditch" -as',
        '"my family wasn\'t rich enough to own slaves" -th',
        '"qpqs dont happen all the time, neither does unconditional" -anon',
        '"you want the full thrust, you don\'t want me holding back" -rd',
        '"whole milk makes me feel like I\'m drinking from the cow" -kc',
        '"i can\'t send my meme response" -mw',
        '"can I have a frito? i wanna make [es] snort it" -bk',
        '"put a frito on his seat and see how he reacts" -ws',
        '"i\'ve never done a threesome in the literal sense" -as',
        '"im from deep in the cut" -js',
        '"how do you have sex if you\'re a mermaid?" -jw',
        '"that was such a wholesome meme" -kc',
        '"i feel like I\'m at the mercy of nature" -kc',
        '"YES daddy made ribs" -mw',
        '"metaphors are NOT links" -jp',
        '"i feel better looking down on everyone" -js',
        '"that\'s because raam is daddy" -as',
        '"harambe died so we could be saved" -js',
        '"wait you got dropped into a gorilla pit?" -df',
        '"i would be dtf with lobster rolls" -mw',
        '"you know your food is good when you start crying" -kc',
        '"i can find my own weed, I live in California" -bk',
        '"i like memes" -ac',
        '"do you ever feel that baudrillard is just true" -jw',
        '"i think I have lint in my belly button" -rd',
        '"are you an espionage?" -cm',
        '"ill show you pictures of us at the beach" -bk',
        '"jake gallant is daddy" -as',
        '"the bookstore is closed." "for realz?" -as',
        '"i think I would have a good time at a rave" -kc',
        'this just in: anon used to say the n word all the time, they thought it meant "pal"',
        '"i can pick out the jews" -aa',
        '"you know it\'s coming before it comes out" -sr',
        '"repko is daddy" -jl',
        '"i was scratching the air" -da',
        '"i was trying to make a joke about abortion" -mw',
        '"this folk song is lit" -kc',
        '"can you walk up to him and ask him if he would fuck me hard" -sr'
    ]

    document.getElementById("demo").innerHTML = list_of_tweets[line_number]

}
                  