function finalIntroStart(_0x4dab4b){_0x4dab4b=='tutorial'&&$['getJSON']('/api/tutorial-status',async function(_0x440faf){!_0x440faf['rooms']&&(document['querySelector']('#nav-learn')?setTimeout(showTutorialIntroNew,0x7d0):setTimeout(showTutorialIntroOld,0x7d0));});}function showTutorialIntroNew(){const _0x21718c=introJs(),_0x24825f=document['querySelector']('#browser-machine-start');toggleSidebar('open'),_0x21718c['setOptions']({'steps':[{'element':document['querySelector']('#nav-learn'),'intro':'Learn\x20independently\x20by\x20searching\x20hacktivities,\x20or\x20enroll\x20in\x20a\x20structured\x20learning\x20pathway'},{'element':_0x24825f,'intro':'Deploy\x20your\x20AttackBox,\x20a\x20web-based\x20machine\x20used\x20to\x20attack\x20other\x20machines\x20on\x20TryHackMe'},{'element':document['querySelectorAll']('[onclick=\x27deploy(this)\x27]')[0x0],'intro':'Some\x20tasks\x20contain\x20deployable\x20machines,\x20which\x20can\x20be\x20used\x20to\x20put\x20your\x20knowledge\x20into\x20practice!'}],'showStepNumbers':![],'showProgress':![]}),_0x21718c['start'](),$['post']('/api/completeTutorial',{'type':'room'},async function(_0x26b169){});}function showTutorialIntroOld(){const _0x5682e6=introJs(),_0x4baf83=document['querySelector']('#browser-machine-start');toggleSidebar('open'),_0x5682e6['setOptions']({'steps':[{'element':document['querySelector']('[href=\x27/paths\x27]'),'intro':'To\x20learn\x20in\x20a\x20more\x20structured\x20way,\x20check\x20out\x20our\x20learning\x20paths.'},{'element':document['querySelector']('[href=\x27/hacktivities\x27]'),'intro':'Pick\x20from\x20a\x20range\x20of\x20topics\x20and\x20guide\x20your\x20own\x20learning!'},{'element':_0x4baf83,'intro':'This\x20will\x20deploy\x20your\x20AttackBox,\x20a\x20machine\x20to\x20attack\x20other\x20machines'},{'element':document['querySelectorAll']('[onclick=\x27deploy(this)\x27]')[0x0],'intro':'Tasks\x20often\x20contain\x20hackable\x20machines,\x20accessed\x20through\x20the\x20AttackBox'}],'showStepNumbers':![],'showProgress':![]}),_0x4baf83['style']['display']!='none'&&(_0x5682e6['start'](),$['post']('/api/completeTutorial',{'type':'room'},async function(_0x2111ce){}));}function showAttackBoxBtnIntro(){const _0x42ba59=introJs();_0x42ba59['setOptions']({'steps':[{'element':document['querySelector']('#browser-machine-start'),'intro':'Deploy\x20your\x20AttackBox\x20to\x20access\x20other\x20machines\x20you\x20deploy\x20on\x20TryHackMe.'}],'showStepNumbers':![],'showProgress':![],'showBullets':![]}),_0x42ba59['start']();}function startIntro(){$['post']('/api/completeTutorial',{'type':'room'},async function(_0x1aff37){});const _0x3fa162=introJs();_0x3fa162['onbeforechange'](function(){document['querySelector']('[href=\x27/paths\x27]')['style']['color']='white';if(this['_currentStep']==0x2){const _0x22098a=document['querySelectorAll']('[onclick=\x27deploy(this)\x27]'),_0xbf2759=$(_0x22098a)['parents']()['eq'](0x3);!$(_0xbf2759)['is'](':visible')&&$(_0xbf2759)['toggle']();}}),_0x3fa162['setOptions']({'steps':[{'element':document['querySelectorAll']('.with-logo')[0x0],'intro':'Welcome\x20To\x20TryHackMe!\x20We\x20use\x20rooms\x20to\x20deliver\x20content\x20and\x20challenges!'},{'element':document['querySelector']('#\x5c31\x20'),'intro':'A\x20room\x20is\x20broken\x20down\x20into\x20multiple\x20tasks\x20to\x20make\x20your\x20learning\x20more\x20structured.'},{'element':document['querySelector']('[onclick=\x27deploy(this)\x27]'),'intro':'Some\x20tasks\x20have\x20machines\x20you\x20can\x20deploy!'},{'element':document['querySelector']('*[data-target=\x22#access-machines\x22]'),'intro':'To\x20access\x20deployed\x20machines,\x20you\x20need\x20to\x20connect\x20through\x20OpenVPN\x20or\x20a\x20Browser-Based\x20machine.'},{'element':document['querySelectorAll']('.task-question')[0x0],'intro':'Answer\x20questions\x20and\x20redeem\x20hints\x20to\x20progress\x20through\x20the\x20room.'},{'element':document['querySelector']('[href=\x27/paths\x27]'),'intro':'To\x20learn\x20in\x20a\x20more\x20structured\x20way,\x20check\x20out\x20our\x20learning\x20paths.'},{'element':document['querySelector']('[href=\x27/hacktivities\x27]'),'intro':'Pick\x20from\x20a\x20range\x20of\x20topics\x20and\x20guide\x20your\x20own\x20learning!'}],'showStepNumbers':![],'showProgress':!![]}),_0x3fa162['start'](),_0x3fa162['onexit'](function(){document['querySelector']('[href=\x27/hacktivities\x27]')['style']['color']='white';});}