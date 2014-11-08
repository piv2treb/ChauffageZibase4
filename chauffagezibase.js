exports.action = function (data, callback, config, SARAH) {

console.log('-------');
console.log(data.scenario);
console.log('-------');

		
//Mode Confort//
	
	if (data.scenario=="Mode Confort") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 16. vset 26 16. vset 29 16"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Mode confort enclenché"});
	}
	
	if (data.scenario=="Mode Confort") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Mode confort enclenché&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Eco//
	
	if (data.scenario=="Mode Eco") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 48. vset 26 48. vset 29 48"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Mode éco enclenché"});
	}
	
	if (data.scenario=="Mode Eco") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Mode éco enclenché&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Auto//
	
	if (data.scenario=="Mode Auto") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 0. vset 26 0. vset 29 0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Mode auto enclenché"});
	}
	
	if (data.scenario=="Mode Auto") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Mode auto enclenché&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Hors Gel//
	
	if (data.scenario=="Mode Hors Gel") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 6. vset 26 6. vset 29 6"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Mode hors gel enclenché"});
	}
	
	if (data.scenario=="Mode Hors Gel") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Mode hors gel enclenché&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Arrêt//	

	if (data.scenario=="Mode Arrêt") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 5. vset 26 5. vset 29 5"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Le chauffage est coupé"});
	}
	
	if (data.scenario=="Mode Arrêt") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Le chauffage est coupé&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Confort Temp//
	
	if (data.scenario=="Mode Confort Temp") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 32. vset 26 32. vset 29 32"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Mode confort temporaire enclenché"});
	}
	
	if (data.scenario=="Mode Confort Temp") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=ordre bien reçu. Mode confort temporaire enclenché&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Eco Temp//
	
	if (data.scenario=="Mode Eco Temp") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 64. vset 26 64. vset 29 64"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Mode éco temporaire enclenché"});
	}
	
	if (data.scenario=="Mode Eco Temp") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Mode éco temporaire enclenché&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Mode Chambre//	

	if (data.scenario=="Mode Chambre") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 23 16. vset 26 5. vset 29 5"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Je chauffe uniquement létage"});
	}
	
	if (data.scenario=="Mode Arrêt") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Je chauffe uniquement l'étage&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
	
//Chauffage +1°//

	if (data.scenario=="Chauffage Consigne plus") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=lm [SarahChauffageplus1]"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Je monte la température de consigne d'un degré"});
	}
	
	if (data.scenario=="Chauffage Consigne plus") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Température augmentée d'un dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	

//Chauffage -1°//

	if (data.scenario=="Chauffage Consigne moins") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=lm [SarahChauffagemoins1]"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Je descends la température de consigne d'un degré"});
	}
	
	if (data.scenario=="Chauffage Consigne moins") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Température diminuée d'un dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	
	
//Chauffage 18°//

	if (data.scenario=="Chauffage Consigne 18") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 21 180. vset 24 180. vset 27 180"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. La température de consigne est maintenant à 18 degré"});
	}
	
	if (data.scenario=="Chauffage Consigne 18") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Nouvelle température de consigne de 18 dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	

//Chauffage 19°//

	if (data.scenario=="Chauffage Consigne 19") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 21 190. vset 24 190. vset 27 190"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. La température de consigne est maintenant à 19 degré"});
	}
	
	if (data.scenario=="Chauffage Consigne 19") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Nouvelle température de consigne de 19 dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	
	
//Chauffage 20°//

	if (data.scenario=="Chauffage Consigne 20") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 21 200. vset 24 200. vset 27 200"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. La température de consigne est maintenant à 20 degré"});
	}
	
	if (data.scenario=="Chauffage Consigne 20") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Nouvelle température de consigne de 20 dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	

//Chauffage 21°//

	if (data.scenario=="Chauffage Consigne 21") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 21 210. vset 24 210. vset 27 210"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. La température de consigne est maintenant à 21 degré"});
	}
	
	if (data.scenario=="Chauffage Consigne 21") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Nouvelle température de consigne de 21 dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	
		
//Chauffage 22°//

	if (data.scenario=="Chauffage Consigne 22") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 21 220. vset 24 220. vset 27 220"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. La température de consigne est maintenant à 22 degré"});
	}
	
	if (data.scenario=="Chauffage Consigne 22") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Nouvelle température de consigne de 22 dedré&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}		
	
//Chauffage Température de consigne Hiver//

	if (data.scenario=="Chauffage Consigne Hiver") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=vset 21 200. vset 24 200. vset 27 205"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({'tts':"Ordre bien reçu ' [name] '. Je réinitialise vos températures de consigne"});
	}
	
	if (data.scenario=="Chauffage Consigne Hiver") {
//		url="http://IP-OpenKarotz/cgi-bin/tts?text=Ordre bien reçu. Température de consigne réinitialisé&voice=antoine&nocache=0"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
	
//Question Etat du Chauffage//

	if (data.scenario=="questionétatchauffage") {
//		url="http://IP-Zibase/cgi-bin/domo.cgi?cmd=lm [QuestionChauff1]"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
		
//Réponse Etat du Chauffage - Mode Arrêt//

	if (data.scenario=="reponsechauffagemodearret") {
//		url="http://IP-Sarah:8080/sarah/parle?phrase=le chauffage est en ce moment arraité"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Réponse Etat du Chauffage - Mode Auto//

	
	if (data.scenario=='reponsechauffagemodeauto') {
       var json={"request":{}};
      json.request.question="le chauffage est sur le mode auto. Vouler vous en savoir pluss";
      json.request.answer=["oui sil te plait","non pas la peine"];     
//      json.request.answervalue=["http://IP-Zibase/cgi-bin/domo.cgi?cmd=lm [QuestionChauff4]","http://IP-Sarah:8080/sarah/parle?phrase=très%20bien%20c%20vous%20qui%20décider"];
      json.request.answercallback=[false,false];
      json.request.TTSanswer=["",""];  
 //     json.request.no_answervalue="http://IP-Sarah:8080/sarah/parle?phrase=je%20me%20met%20en%20attente";
      json.request.recall=false;
      json.request.timeout=15;
	  json.request.callback_immediatly=true;
      var url='http://127.0.0.1:8080/sarah/askme';
      var request = require('request');
      request({
         'uri': url,
         'method': 'POST',
         'json': json,
        'timeout': 5000,
        }, function (err, response, body){
          if (err || response.statusCode != 200) {
            callback({'tts':'error'});
            return;
          }
		  callback({'tts':'OK'});
        });
    }	
										
//Réponse Etat du Chauffage - Mode Auto - Radiateurs ON//

	if (data.scenario=="reponsechauffagemodeautoON") {
//		url="http://IP-Sarah:8080/sarah/parle?phrase=les radiateurs fonctionnent et chauffe en ce moment"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
//Réponse Etat du Chauffage - Mode Auto - Radiateurs OFF//

	if (data.scenario=="reponsechauffagemodeautoOFF") {
//		url="http://IP-Sarah:8080/sarah/parle?phrase=les radiateurs ne chauffent pas pour l'instant"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}

//Réponse Etat du Chauffage - Mode Confort//

	if (data.scenario=="reponsechauffagemodeconfort") {
//		url="http://IP-Sarah:8080/sarah/parle?phrase=le chauffage est sur le mode confort"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}	

//Réponse Etat du Chauffage - Mode Eco//

	if (data.scenario=="reponsechauffagemodeeco") {
//		url="http://IP-Sarah:8080/sarah/parle?phrase=le chauffage est sur le mode éco"
		var request = require('request');
		request({ 'uri' : url },
    function (err, response, body)
            {
         console.log("requete OK:"+body);
            });﻿
		callback({});
	}
	
}