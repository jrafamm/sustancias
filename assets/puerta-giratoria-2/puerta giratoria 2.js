(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Asset13 = function() {
	this.initialize(img.Asset13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,423);


(lib.Asset14 = function() {
	this.initialize(img.Asset14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,419);


(lib.Asset15 = function() {
	this.initialize(img.Asset15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,295);


(lib.Asset16 = function() {
	this.initialize(img.Asset16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,104);


(lib.Asset17 = function() {
	this.initialize(img.Asset17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,103);


(lib.Asset18 = function() {
	this.initialize(img.Asset18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset18();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.072,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,90,90), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset17();
	this.instance.parent = this;
	this.instance.setTransform(754,120,1.062,1.165);

	this.instance_1 = new lib.Asset16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,120,1.034,1.154);

	this.instance_2 = new lib.Asset13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,4,0.833,0.833);

	this.instance_3 = new lib.Asset14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(270,0,0.861,0.859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,900,360), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset18();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.072,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,90,90), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.872,0.881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,260,260), null);


// stage content:
(lib.puertagiratoria2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Acto1-1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(725,225,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:714.1,y:224.5},0).wait(1).to({x:703.1,y:223.9},0).wait(1).to({x:692.2,y:223.4},0).wait(1).to({x:681.2,y:222.8},0).wait(1).to({x:670.3,y:222.3},0).wait(1).to({x:659.3,y:221.7},0).wait(1).to({x:648.4,y:221.2},0).wait(1).to({x:637.4,y:220.6},0).wait(1).to({x:626.5,y:220.1},0).wait(1).to({x:615.5,y:219.5},0).wait(1).to({x:604.6,y:219},0).wait(1).to({x:600.7,y:222.9},0).wait(1).to({x:596.9,y:226.7},0).wait(1).to({x:593,y:230.6},0).wait(1).to({x:589.2,y:234.4},0).wait(1).to({x:585.3,y:238.3},0).wait(1).to({x:581.5,y:242.1},0).wait(1).to({x:577.6,y:245.9},0).wait(1).to({x:573.8,y:249.8},0).wait(1).to({x:569.9,y:253.6},0).wait(1).to({x:566.1,y:257.5},0).wait(1).to({x:562.2,y:261.4},0).wait(1).to({x:558.4,y:265.2},0).wait(1).to({x:554.5,y:269.1},0).wait(1).to({x:547.6,y:273.8},0).wait(1).to({x:540.7,y:278.6},0).wait(1).to({x:533.7,y:283.3},0).wait(1).to({x:526.8,y:288.1},0).wait(1).to({x:519.9,y:292.8},0).wait(1).to({x:513,y:297.6},0).wait(1).to({x:506,y:302.3},0).wait(1).to({x:499.1,y:307.1},0).wait(1).to({x:492.2,y:311.8},0).wait(1).to({x:485.3,y:316.6},0).wait(1).to({x:478.3,y:321.3},0).wait(1).to({x:471.4,y:326.1},0).wait(1).to({x:464.5,y:330.9},0).wait(1).to({x:459.7,y:330.2},0).wait(1).to({x:455,y:329.6},0).wait(1).to({x:450.2,y:329},0).wait(1).to({x:445.4,y:328.4},0).wait(1).to({x:440.6,y:327.8},0).wait(1).to({x:435.9,y:327.2},0).wait(1).to({x:431.1,y:326.5},0).wait(1).to({x:426.3,y:325.9},0).wait(1).to({x:421.5,y:325.3},0).wait(1).to({x:416.8,y:324.7},0).wait(1).to({x:412,y:324.1},0).wait(1).to({x:407.2,y:323.5},0).wait(1).to({x:402.5,y:322.9},0).wait(1).to({x:400,y:320.6},0).wait(1).to({x:397.6,y:318.3},0).wait(1).to({x:395.1,y:316},0).wait(1).to({x:392.7,y:313.7},0).wait(1).to({x:390.2,y:311.4},0).wait(1).to({x:387.8,y:309.1},0).wait(1).to({x:385.3,y:306.9},0).wait(1).to({x:382.9,y:304.6},0).wait(1).to({x:380.4,y:302.3},0).wait(1).to({x:378,y:300},0).wait(1).to({x:375.5,y:297.7},0).wait(1).to({x:373.1,y:295.4},0).wait(1).to({x:370.6,y:293.1},0).wait(1).to({x:368.2,y:290.9},0).wait(1).to({x:367.1,y:287.8},0).wait(1).to({x:366,y:284.7},0).wait(1).to({x:365,y:281.6},0).wait(1).to({x:363.9,y:278.5},0).wait(1).to({x:362.8,y:275.5},0).wait(1).to({x:361.7,y:272.4},0).wait(1).to({x:360.7,y:269.3},0).wait(1).to({x:359.6,y:266.2},0).wait(1).to({x:358.5,y:263.2},0).wait(1).to({x:357.4,y:260.1},0).wait(1).to({x:356.4,y:257},0).wait(1).to({x:355.3,y:253.9},0).wait(1).to({x:354.2,y:250.9},0).wait(1).to({x:346.7,y:248.4},0).wait(1).to({x:339.2,y:246},0).wait(1).to({x:331.7,y:243.6},0).wait(1).to({x:324.2,y:241.1},0).wait(1).to({x:316.7,y:238.7},0).wait(1).to({x:309.2,y:236.3},0).wait(1).to({x:301.7,y:233.9},0).wait(1).to({x:294.2,y:231.4},0).wait(1).to({x:286.7,y:229},0).wait(1).to({x:279.2,y:226.6},0).wait(1).to({x:271.7,y:224.1},0).wait(1).to({x:264.2,y:221.7},0).wait(1).to({x:256.7,y:219.3},0).wait(1).to({x:249.2,y:216.9},0).wait(1).to({x:244.8,y:217.4},0).wait(1).to({x:240.5,y:218},0).wait(1).to({x:236.1,y:218.6},0).wait(1).to({x:231.7,y:219.2},0).wait(1).to({x:227.3,y:219.8},0).wait(1).to({x:223,y:220.4},0).wait(1).to({x:218.6,y:221},0).wait(1).to({x:214.2,y:221.5},0).wait(1).to({x:209.9,y:222.1},0).wait(1).to({x:205.5,y:222.7},0).wait(1).to({x:201.1,y:223.3},0).wait(1).to({x:196.7,y:223.9},0).wait(1).to({x:192.4,y:224.5},0).wait(1).to({x:188,y:225.1},0).wait(1).to({x:181.1,y:225},0).wait(1).to({x:174.2},0).wait(1).to({x:167.2},0).wait(1).to({x:160.3},0).wait(1).to({x:153.4},0).wait(1).to({x:146.5},0).wait(1).to({x:139.5},0).wait(1).to({x:132.6},0).wait(1).to({x:125.7},0).wait(1).to({x:118.8},0).wait(1).to({x:111.8},0).wait(1).to({x:104.9},0).wait(1).to({x:98},0).wait(266));

	// Acto1-2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(725,225,1,1,0,0,0,45,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).wait(1).to({x:719,y:223.4},0).wait(1).to({x:712.9,y:221.7},0).wait(1).to({x:706.9,y:220.1},0).wait(1).to({x:700.8,y:218.5},0).wait(1).to({x:694.8,y:216.8},0).wait(1).to({x:688.8,y:215.2},0).wait(1).to({x:682.7,y:213.5},0).wait(1).to({x:676.7,y:211.9},0).wait(1).to({x:670.6,y:210.3},0).wait(1).to({x:664.6,y:208.6},0).wait(1).to({x:658.6,y:207},0).wait(1).to({x:649.9,y:210.3},0).wait(1).to({x:641.2,y:213.5},0).wait(1).to({x:632.5,y:216.8},0).wait(1).to({x:623.8,y:220},0).wait(1).to({x:615.1,y:223.3},0).wait(1).to({x:606.5,y:226.5},0).wait(1).to({x:597.8,y:229.8},0).wait(1).to({x:589.1,y:233},0).wait(1).to({x:580.4,y:236.3},0).wait(1).to({x:571.7,y:239.5},0).wait(1).to({x:570,y:249.4},0).wait(1).to({x:568.2,y:259.2},0).wait(1).to({x:566.5,y:269.1},0).wait(1).to({x:559.9,y:272.6},0).wait(1).to({x:553.3,y:276.1},0).wait(1).to({x:546.7,y:279.6},0).wait(1).to({x:540,y:283.1},0).wait(1).to({x:533.4,y:286.7},0).wait(1).to({x:526.8,y:290.2},0).wait(1).to({x:520.2,y:293.7},0).wait(1).to({x:513.6,y:297.2},0).wait(1).to({x:507,y:300.8},0).wait(1).to({x:500.3,y:304.3},0).wait(1).to({x:493.7,y:307.8},0).wait(1).to({x:487.1,y:311.3},0).wait(1).to({x:480.5,y:314.9},0).wait(1).to({x:476.5,y:315.6},0).wait(1).to({x:472.5,y:316.4},0).wait(1).to({x:468.5,y:317.2},0).wait(1).to({x:464.5,y:317.9},0).wait(1).to({x:460.5,y:318.7},0).wait(1).to({x:456.5,y:319.5},0).wait(1).to({x:452.5,y:320.2},0).wait(1).to({x:448.5,y:321},0).wait(1).to({x:444.5,y:321.8},0).wait(1).to({x:440.5,y:322.5},0).wait(1).to({x:436.5,y:323.3},0).wait(1).to({x:432.5,y:324.1},0).wait(1).to({x:428.5,y:324.9},0).wait(1).to({x:425,y:323.3},0).wait(1).to({x:421.6,y:321.7},0).wait(1).to({x:418.1,y:320.1},0).wait(1).to({x:414.7,y:318.6},0).wait(1).to({x:411.2,y:317},0).wait(1).to({x:407.8,y:315.4},0).wait(1).to({x:404.3,y:313.9},0).wait(1).to({x:400.9,y:312.3},0).wait(1).to({x:397.4,y:310.7},0).wait(1).to({x:394,y:309.1},0).wait(1).to({x:390.5,y:307.6},0).wait(1).to({x:387.1,y:306},0).wait(1).to({x:383.6,y:304.4},0).wait(1).to({x:380.2,y:302.9},0).wait(1).to({x:378.2,y:300.1},0).wait(1).to({x:376.2,y:297.3},0).wait(1).to({x:374.2,y:294.5},0).wait(1).to({x:372.2,y:291.8},0).wait(1).to({x:370.2,y:289},0).wait(1).to({x:368.2,y:286.2},0).wait(1).to({x:366.2,y:283.5},0).wait(1).to({x:364.2,y:280.7},0).wait(1).to({x:362.2,y:277.9},0).wait(1).to({x:360.2,y:275.2},0).wait(1).to({x:358.2,y:272.4},0).wait(1).to({x:356.2,y:269.6},0).wait(1).to({x:354.2,y:266.9},0).wait(1).to({x:349.3,y:263.1},0).wait(1).to({x:344.3,y:259.4},0).wait(1).to({x:339.4,y:255.7},0).wait(1).to({x:334.5,y:252},0).wait(1).to({x:329.6,y:248.3},0).wait(1).to({x:324.6,y:244.6},0).wait(1).to({x:319.7,y:240.9},0).wait(1).to({x:314.8,y:237.1},0).wait(1).to({x:309.8,y:233.4},0).wait(1).to({x:304.9,y:229.7},0).wait(1).to({x:300,y:226},0).wait(1).to({x:295.1,y:222.3},0).wait(1).to({x:290.1,y:218.6},0).wait(1).to({x:285.2,y:214.9},0).wait(1).to({x:278.3,y:215.6},0).wait(1).to({x:271.3,y:216.3},0).wait(1).to({x:264.4,y:217},0).wait(1).to({x:257.4,y:217.8},0).wait(1).to({x:250.5,y:218.5},0).wait(1).to({x:243.5,y:219.2},0).wait(1).to({x:236.6,y:220},0).wait(1).to({x:229.7,y:220.7},0).wait(1).to({x:222.7,y:221.4},0).wait(1).to({x:215.8,y:222.1},0).wait(1).to({x:208.8,y:222.9},0).wait(1).to({x:201.9,y:223.6},0).wait(1).to({x:194.9,y:224.3},0).wait(1).to({x:188,y:225.1},0).wait(1).to({x:181.1,y:225},0).wait(1).to({x:174.2},0).wait(1).to({x:167.2},0).wait(1).to({x:160.3},0).wait(1).to({x:153.4},0).wait(1).to({x:146.5},0).wait(1).to({x:139.5},0).wait(1).to({x:132.6},0).wait(1).to({x:125.7},0).wait(1).to({x:118.8},0).wait(1).to({x:111.8},0).wait(1).to({x:104.9},0).wait(1).to({x:98},0).wait(223));

	// Acto1-3
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(725,225,1,1,0,0,0,45,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).wait(288));

	// Texto1
	this.text = new cjs.Text("El Estado venezolano asegura grandes logros en materia de incautación de drogas como parte de la lucha contra el narcotráfico", "24px 'Poppins SemiBold'", "#D0D065");
	this.text.lineHeight = 42;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(13.1,552.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:549.4},0).wait(1).to({y:546.4},0).wait(1).to({y:543.4},0).wait(1).to({y:540.4},0).wait(1).to({y:537.4},0).wait(1).to({y:534.4},0).wait(1).to({y:531.4},0).wait(1).to({y:528.4},0).wait(1).to({y:525.4},0).wait(1).to({y:522.4},0).wait(1).to({y:519.4},0).wait(1).to({y:516.3},0).wait(1).to({y:513.3},0).wait(1).to({y:510.3},0).wait(1).to({y:507.3},0).wait(1).to({y:504.3},0).wait(1).to({y:501.3},0).wait(1).to({y:498.3},0).wait(1).to({y:495.3},0).wait(1).to({y:492.3},0).wait(1).to({y:489.3},0).wait(1).to({y:486.3},0).wait(1).to({y:483.3},0).wait(1).to({y:480.3},0).wait(1).to({y:477.3},0).wait(1).to({y:474.3},0).wait(1).to({y:471.3},0).wait(1).to({y:468.3},0).wait(1).to({y:465.3},0).wait(1).to({y:462.3},0).wait(1).to({y:459.3},0).wait(1).to({y:456.3},0).wait(1).to({y:453.3},0).wait(1).to({y:450.2},0).wait(1).to({y:447.2},0).wait(1).to({y:444.2},0).wait(1).to({y:441.2},0).wait(1).to({y:438.2},0).wait(1).to({y:435.2},0).wait(1).to({y:432.2},0).wait(1).to({y:429.2},0).wait(1).to({y:426.2},0).wait(1).to({y:423.2},0).wait(1).to({y:420.2},0).wait(1).to({y:417.2},0).wait(1).to({y:414.2},0).wait(1).to({y:411.2},0).wait(1).to({y:408.2},0).wait(1).to({y:405.2},0).wait(1).to({y:402.2},0).wait(1).to({y:399.2},0).wait(1).to({y:396.2},0).wait(1).to({y:393.2},0).wait(1).to({y:390.2},0).wait(1).to({y:387.2},0).wait(1).to({y:384.2},0).wait(1).to({y:381.1},0).wait(1).to({y:378.1},0).wait(1).to({y:375.1},0).wait(1).to({y:372.1},0).wait(1).to({y:369.1},0).wait(1).to({y:366.1},0).wait(1).to({y:363.1},0).wait(1).to({y:360.1},0).wait(1).to({y:357.1},0).wait(1).to({y:354.1},0).wait(1).to({y:351.1},0).wait(1).to({y:348.1},0).wait(1).to({y:345.1},0).wait(1).to({y:342.1},0).wait(1).to({y:339.1},0).wait(1).to({y:336.1},0).wait(1).to({y:333.1},0).wait(1).to({y:330.1},0).wait(1).to({y:327.1},0).wait(1).to({y:324.1},0).wait(1).to({y:321.1},0).wait(1).to({y:318.1},0).wait(1).to({y:315},0).wait(1).to({y:312},0).wait(1).to({y:309},0).wait(1).to({y:306},0).wait(1).to({y:303},0).wait(1).to({y:300},0).wait(1).to({y:297},0).wait(1).to({y:294},0).wait(1).to({y:291},0).wait(1).to({y:288},0).wait(1).to({y:285},0).wait(1).to({y:282},0).wait(1).to({x:-18.9},0).wait(1).to({x:-50.9},0).wait(1).to({x:-82.9},0).wait(1).to({x:-114.9},0).wait(1).to({x:-146.9},0).wait(1).to({x:-178.9},0).wait(1).to({x:-210.9},0).wait(1).to({x:-242.9},0).wait(1).to({x:-274.9},0).wait(1).to({x:-306.9},0).wait(284));

	// Acto2-3
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98,225,1,1,0,0,0,45,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({_off:false},0).wait(1).to({x:121.6,y:222.3},0).wait(1).to({x:145.1,y:219.7},0).wait(1).to({x:168.7,y:217},0).wait(1).to({x:192.2,y:214.3},0).wait(1).to({x:215.8,y:211.7},0).wait(1).to({x:239.3,y:209},0).wait(1).to({x:262.9,y:206.3},0).wait(1).to({x:286.4,y:203.7},0).wait(1).to({x:310,y:201},0).wait(1).to({x:319.7,y:188.3},0).wait(1).to({x:324.3,y:183.7},0).wait(1).to({x:328.8,y:179},0).wait(1).to({x:333.4,y:174.3},0).wait(1).to({x:338,y:169.7},0).wait(1).to({x:342.6,y:165},0).wait(1).to({x:347.3,y:159.7},0).wait(1).to({x:352,y:154.3},0).wait(1).to({x:356.6,y:149},0).wait(1).to({x:361.3,y:143.7},0).wait(1).to({x:366,y:138.3},0).wait(1).to({x:370.7,y:133},0).wait(1).to({x:373.7,y:129.9},0).wait(1).to({x:376.8,y:126.8},0).wait(1).to({x:379.9,y:123.8},0).wait(1).to({x:383,y:120.7},0).wait(1).to({x:386,y:117.6},0).wait(1).to({x:389.1,y:114.5},0).wait(1).to({x:392.2,y:111.5},0).wait(1).to({x:395.3,y:108.4},0).wait(1).to({x:398.3,y:105.3},0).wait(1).to({x:401.4,y:102.2},0).wait(1).to({x:404.5,y:99.2},0).wait(1).to({x:407.6,y:96.1},0).wait(1).to({x:410.7,y:93},0).wait(1).to({x:414.2},0).wait(1).to({x:417.7},0).wait(1).to({x:421.3,y:93.1},0).wait(1).to({x:424.8},0).wait(1).to({x:428.4},0).wait(1).to({x:431.9},0).wait(1).to({x:435.5},0).wait(1).to({x:439},0).wait(1).to({x:442.6,y:93.2},0).wait(1).to({x:446.1},0).wait(1).to({x:449.7},0).wait(1).to({x:454.7,y:92.4},0).wait(1).to({x:459.8,y:91.5},0).wait(1).to({x:464.9,y:90.7},0).wait(1).to({x:470,y:89.8},0).wait(1).to({x:475.1,y:89},0).wait(1).to({x:480.2,y:88.1},0).wait(1).to({x:484.5,y:89.7},0).wait(1).to({x:488.9,y:91.2},0).wait(1).to({x:493.2,y:92.8},0).wait(1).to({x:497.6,y:94.3},0).wait(1).to({x:501.9,y:95.9},0).wait(1).to({x:506.3,y:97.4},0).wait(1).to({x:510.7,y:99},0).wait(1).to({x:515.5,y:100.6},0).wait(1).to({x:520.3,y:102.3},0).wait(1).to({x:525.2,y:103.9},0).wait(1).to({x:530,y:105.6},0).wait(1).to({x:534.8,y:107.2},0).wait(1).to({x:533.7,y:111.1},0).wait(1).to({x:535.9,y:114.9},0).wait(1).to({x:538.1,y:118.6},0).wait(1).to({x:540.3,y:122.3},0).wait(1).to({x:542.5,y:126.1},0).wait(1).to({x:544.7,y:129.8},0).wait(1).to({x:546.9,y:133.5},0).wait(1).to({x:549.1,y:137.2},0).wait(1).to({x:551.3,y:141},0).wait(1).to({x:553.5,y:144.7},0).wait(1).to({x:555.7,y:148.4},0).wait(1).to({x:557.9,y:152.2},0).wait(1).to({x:560.2,y:155.9},0).wait(1).to({x:562.4,y:159.6},0).wait(1).to({x:564.6,y:163.3},0).wait(1).to({x:566.8,y:167.1},0).wait(1).to({x:569,y:170.8},0).wait(1).to({x:571.2,y:174.5},0).wait(1).to({x:573.4,y:178.3},0).wait(1).to({x:575.6,y:182},0).wait(1).to({x:580.1,y:187.9},0).wait(1).to({x:586.7,y:191.1},0).wait(1).to({x:593.3,y:194.4},0).wait(1).to({x:600,y:197.6},0).wait(1).to({x:606.6,y:200.8},0).wait(1).to({x:613.2,y:204.1},0).wait(1).to({x:619.8,y:207.3},0).wait(1).to({x:626.4,y:210.6},0).wait(1).to({x:633,y:213.8},0).wait(1).to({x:639.6,y:217.1},0).wait(1).to({x:646.2,y:217.7},0).wait(1).to({x:652.9,y:218.3},0).wait(1).to({x:659.5,y:218.9},0).wait(1).to({x:666.1,y:219.5},0).wait(1).to({x:672.7,y:220.1},0).wait(1).to({x:679.3,y:220.7},0).wait(1).to({x:685.9,y:221.3},0).wait(1).to({x:692.5,y:221.9},0).wait(1).to({x:699.1,y:222.6},0).wait(1).to({x:705.8,y:223.2},0).wait(1).to({x:712.4,y:223.8},0).wait(1).to({x:719,y:224.4},0).wait(1).to({x:725.6,y:225},0).wait(138));

	// Acto2-2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(98,225,1,1,0,0,0,45,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(188).to({_off:false},0).wait(1).to({x:121.6,y:222.3},0).wait(1).to({x:145.1,y:219.7},0).wait(1).to({x:168.7,y:217},0).wait(1).to({x:192.2,y:214.3},0).wait(1).to({x:215.8,y:211.7},0).wait(1).to({x:239.3,y:209},0).wait(1).to({x:262.9,y:206.3},0).wait(1).to({x:286.4,y:203.7},0).wait(1).to({x:310,y:201},0).wait(1).to({x:319.7,y:188.3},0).wait(1).to({x:324.3,y:183.7},0).wait(1).to({x:328.8,y:179},0).wait(1).to({x:333.4,y:174.3},0).wait(1).to({x:338,y:169.7},0).wait(1).to({x:342.6,y:165},0).wait(1).to({x:347.3,y:159.7},0).wait(1).to({x:352,y:154.3},0).wait(1).to({x:356.6,y:149},0).wait(1).to({x:361.3,y:143.7},0).wait(1).to({x:366,y:138.3},0).wait(1).to({x:370.7,y:133},0).wait(1).to({x:373.7,y:129.9},0).wait(1).to({x:376.8,y:126.8},0).wait(1).to({x:379.9,y:123.8},0).wait(1).to({x:383,y:120.7},0).wait(1).to({x:386,y:117.6},0).wait(1).to({x:389.1,y:114.5},0).wait(1).to({x:392.2,y:111.5},0).wait(1).to({x:395.3,y:108.4},0).wait(1).to({x:398.3,y:105.3},0).wait(1).to({x:401.4,y:102.2},0).wait(1).to({x:404.5,y:99.2},0).wait(1).to({x:407.6,y:96.1},0).wait(1).to({x:410.7,y:93},0).wait(1).to({x:414.2},0).wait(1).to({x:417.7},0).wait(1).to({x:421.3,y:93.1},0).wait(1).to({x:424.8},0).wait(1).to({x:428.4},0).wait(1).to({x:431.9},0).wait(1).to({x:435.5},0).wait(1).to({x:439},0).wait(1).to({x:442.6,y:93.2},0).wait(1).to({x:446.1},0).wait(1).to({x:449.7},0).wait(1).to({x:454.7,y:92.4},0).wait(1).to({x:459.8,y:91.5},0).wait(1).to({x:464.9,y:90.7},0).wait(1).to({x:470,y:89.8},0).wait(1).to({x:475.1,y:89},0).wait(1).to({x:480.2,y:88.1},0).wait(1).to({x:484.5,y:89.7},0).wait(1).to({x:488.9,y:91.2},0).wait(1).to({x:493.2,y:92.8},0).wait(1).to({x:497.6,y:94.3},0).wait(1).to({x:501.9,y:95.9},0).wait(1).to({x:506.3,y:97.4},0).wait(1).to({x:510.7,y:99},0).wait(1).to({x:515.5,y:100.6},0).wait(1).to({x:520.3,y:102.3},0).wait(1).to({x:525.2,y:103.9},0).wait(1).to({x:530,y:105.6},0).wait(1).to({x:534.8,y:107.2},0).wait(1).to({x:533.7,y:111.1},0).wait(1).to({x:535.9,y:114.9},0).wait(1).to({x:538.1,y:118.6},0).wait(1).to({x:540.3,y:122.3},0).wait(1).to({x:542.5,y:126.1},0).wait(1).to({x:544.7,y:129.8},0).wait(1).to({x:546.9,y:133.5},0).wait(1).to({x:549.1,y:137.2},0).wait(1).to({x:551.3,y:141},0).wait(1).to({x:553.5,y:144.7},0).wait(1).to({x:555.7,y:148.4},0).wait(1).to({x:557.9,y:152.2},0).wait(1).to({x:560.2,y:155.9},0).wait(1).to({x:562.4,y:159.6},0).wait(1).to({x:564.6,y:163.3},0).wait(1).to({x:566.8,y:167.1},0).wait(1).to({x:569,y:170.8},0).wait(1).to({x:571.2,y:174.5},0).wait(1).to({x:573.4,y:178.3},0).wait(1).to({x:575.6,y:182},0).wait(1).to({x:580.1,y:187.9},0).wait(1).to({x:586.7,y:191.1},0).wait(1).to({x:593.3,y:194.4},0).wait(1).to({x:600,y:197.6},0).wait(1).to({x:606.6,y:200.8},0).wait(1).to({x:613.2,y:204.1},0).wait(1).to({x:619.8,y:207.3},0).wait(1).to({x:626.4,y:210.6},0).wait(1).to({x:633,y:213.8},0).wait(1).to({x:639.6,y:217.1},0).wait(1).to({x:646.2,y:217.7},0).wait(1).to({x:652.9,y:218.3},0).wait(1).to({x:659.5,y:218.9},0).wait(1).to({x:666.1,y:219.5},0).wait(1).to({x:672.7,y:220.1},0).wait(1).to({x:679.3,y:220.7},0).wait(1).to({x:685.9,y:221.3},0).wait(1).to({x:692.5,y:221.9},0).wait(1).to({x:699.1,y:222.6},0).wait(1).to({x:705.8,y:223.2},0).wait(1).to({x:712.4,y:223.8},0).wait(1).to({x:719,y:224.4},0).wait(1).to({x:725.6,y:225},0).wait(90));

	// Acto2-1
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(98,225,1,1,0,0,0,45,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(237).to({_off:false},0).wait(1).to({x:121.6,y:222.3},0).wait(1).to({x:145.1,y:219.7},0).wait(1).to({x:168.7,y:217},0).wait(1).to({x:192.2,y:214.3},0).wait(1).to({x:215.8,y:211.7},0).wait(1).to({x:239.3,y:209},0).wait(1).to({x:262.9,y:206.3},0).wait(1).to({x:286.4,y:203.7},0).wait(1).to({x:310,y:201},0).wait(1).to({x:319.7,y:188.3},0).wait(1).to({x:324.3,y:183.7},0).wait(1).to({x:328.8,y:179},0).wait(1).to({x:333.4,y:174.3},0).wait(1).to({x:338,y:169.7},0).wait(1).to({x:342.6,y:165},0).wait(1).to({x:347.3,y:159.7},0).wait(1).to({x:352,y:154.3},0).wait(1).to({x:356.6,y:149},0).wait(1).to({x:361.3,y:143.7},0).wait(1).to({x:366,y:138.3},0).wait(1).to({x:370.7,y:133},0).wait(1).to({x:373.7,y:129.9},0).wait(1).to({x:376.8,y:126.8},0).wait(1).to({x:379.9,y:123.8},0).wait(1).to({x:383,y:120.7},0).wait(1).to({x:386,y:117.6},0).wait(1).to({x:389.1,y:114.5},0).wait(1).to({x:392.2,y:111.5},0).wait(1).to({x:395.3,y:108.4},0).wait(1).to({x:398.3,y:105.3},0).wait(1).to({x:401.4,y:102.2},0).wait(1).to({x:404.5,y:99.2},0).wait(1).to({x:407.6,y:96.1},0).wait(1).to({x:410.7,y:93},0).wait(1).to({x:414.2},0).wait(1).to({x:417.7},0).wait(1).to({x:421.3,y:93.1},0).wait(1).to({x:424.8},0).wait(1).to({x:428.4},0).wait(1).to({x:431.9},0).wait(1).to({x:435.5},0).wait(1).to({x:439},0).wait(1).to({x:442.6,y:93.2},0).wait(1).to({x:446.1},0).wait(1).to({x:449.7},0).wait(1).to({x:454.7,y:92.4},0).wait(1).to({x:459.8,y:91.5},0).wait(1).to({x:464.9,y:90.7},0).wait(1).to({x:470,y:89.8},0).wait(1).to({x:475.1,y:89},0).wait(1).to({x:480.2,y:88.1},0).wait(1).to({x:484.5,y:89.7},0).wait(1).to({x:488.9,y:91.2},0).wait(1).to({x:493.2,y:92.8},0).wait(1).to({x:497.6,y:94.3},0).wait(1).to({x:501.9,y:95.9},0).wait(1).to({x:506.3,y:97.4},0).wait(1).to({x:510.7,y:99},0).wait(1).to({x:515.5,y:100.6},0).wait(1).to({x:520.3,y:102.3},0).wait(1).to({x:525.2,y:103.9},0).wait(1).to({x:530,y:105.6},0).wait(1).to({x:534.8,y:107.2},0).wait(1).to({x:533.7,y:111.1},0).wait(1).to({x:535.9,y:114.9},0).wait(1).to({x:538.1,y:118.6},0).wait(1).to({x:540.3,y:122.3},0).wait(1).to({x:542.5,y:126.1},0).wait(1).to({x:544.7,y:129.8},0).wait(1).to({x:546.9,y:133.5},0).wait(1).to({x:549.1,y:137.2},0).wait(1).to({x:551.3,y:141},0).wait(1).to({x:553.5,y:144.7},0).wait(1).to({x:555.7,y:148.4},0).wait(1).to({x:557.9,y:152.2},0).wait(1).to({x:560.2,y:155.9},0).wait(1).to({x:562.4,y:159.6},0).wait(1).to({x:564.6,y:163.3},0).wait(1).to({x:566.8,y:167.1},0).wait(1).to({x:569,y:170.8},0).wait(1).to({x:571.2,y:174.5},0).wait(1).to({x:573.4,y:178.3},0).wait(1).to({x:575.6,y:182},0).wait(1).to({x:580.1,y:187.9},0).wait(1).to({x:586.7,y:191.1},0).wait(1).to({x:593.3,y:194.4},0).wait(1).to({x:600,y:197.6},0).wait(1).to({x:606.6,y:200.8},0).wait(1).to({x:613.2,y:204.1},0).wait(1).to({x:619.8,y:207.3},0).wait(1).to({x:626.4,y:210.6},0).wait(1).to({x:633,y:213.8},0).wait(1).to({x:639.6,y:217.1},0).wait(1).to({x:646.2,y:217.7},0).wait(1).to({x:652.9,y:218.3},0).wait(1).to({x:659.5,y:218.9},0).wait(1).to({x:666.1,y:219.5},0).wait(1).to({x:672.7,y:220.1},0).wait(1).to({x:679.3,y:220.7},0).wait(1).to({x:685.9,y:221.3},0).wait(1).to({x:692.5,y:221.9},0).wait(1).to({x:699.1,y:222.6},0).wait(1).to({x:705.8,y:223.2},0).wait(1).to({x:712.4,y:223.8},0).wait(1).to({x:719,y:224.4},0).wait(1).to({x:725.6,y:225},0).wait(41));

	// Texto2
	this.text_1 = new cjs.Text("... pero la custodia oficial de las sustancias incautadas no evita el retorno de las sustancias ilegales al mercado", "24px 'Poppins SemiBold'", "#FFFF70");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 296;
	this.text_1.parent = this;
	this.text_1.setTransform(886.3,552.9);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(3).to({y:553},0).wait(3).to({y:553.1},0).wait(2).to({y:553.2},0).wait(3).to({y:553.3},0).wait(2).to({y:553.4},0).wait(3).to({y:553.5},0).wait(2).to({y:553.6},0).wait(3).to({y:553.7},0).wait(2).to({y:553.8},0).wait(3).to({y:553.9},0).wait(2).to({y:554},0).wait(3).to({y:554.1},0).wait(2).to({y:554.2},0).wait(3).to({y:554.3},0).wait(2).to({y:554.4},0).wait(3).to({y:554.5},0).wait(2).to({y:554.6},0).wait(3).to({y:554.7},0).wait(2).to({y:554.8},0).wait(3).to({y:554.9},0).wait(2).to({y:555},0).wait(3).to({y:555.1},0).wait(2).to({y:555.2},0).wait(3).to({y:555.3},0).wait(3).to({y:555.4},0).wait(2).to({y:555.5},0).wait(3).to({y:555.6},0).wait(2).to({y:555.7},0).wait(3).to({y:555.8},0).wait(2).to({y:553.1},0).wait(1).to({y:550.4},0).wait(1).to({y:547.7},0).wait(1).to({y:545},0).wait(1).to({y:542.3},0).wait(1).to({y:539.6},0).wait(1).to({y:536.8},0).wait(1).to({y:534.1},0).wait(1).to({y:531.4},0).wait(1).to({y:528.7},0).wait(1).to({y:526},0).wait(1).to({y:523.3},0).wait(1).to({y:520.6},0).wait(1).to({y:517.9},0).wait(1).to({y:515.2},0).wait(1).to({y:512.4},0).wait(1).to({y:509.7},0).wait(1).to({y:507},0).wait(1).to({y:504.3},0).wait(1).to({y:501.6},0).wait(1).to({y:498.9},0).wait(1).to({y:496.2},0).wait(1).to({y:493.5},0).wait(1).to({y:490.8},0).wait(1).to({y:488},0).wait(1).to({y:485.3},0).wait(1).to({y:482.6},0).wait(1).to({y:479.9},0).wait(1).to({y:477.2},0).wait(1).to({y:474.5},0).wait(1).to({y:471.8},0).wait(1).to({y:469.1},0).wait(1).to({y:466.4},0).wait(1).to({y:463.6},0).wait(1).to({y:460.9},0).wait(1).to({y:458.2},0).wait(1).to({y:455.5},0).wait(1).to({y:452.8},0).wait(1).to({y:450.1},0).wait(1).to({y:447.4},0).wait(1).to({y:444.7},0).wait(1).to({y:442},0).wait(1).to({y:439.2},0).wait(1).to({y:436.5},0).wait(1).to({y:433.8},0).wait(1).to({y:431.1},0).wait(1).to({y:428.4},0).wait(1).to({y:425.7},0).wait(1).to({y:423},0).wait(1).to({y:420.3},0).wait(1).to({y:417.6},0).wait(1).to({y:414.8},0).wait(1).to({y:412.1},0).wait(1).to({y:409.4},0).wait(1).to({y:406.7},0).wait(1).to({y:404},0).wait(1).to({y:401.3},0).wait(1).to({y:398.6},0).wait(1).to({y:395.9},0).wait(1).to({y:393.2},0).wait(1).to({y:390.4},0).wait(1).to({y:387.7},0).wait(1).to({y:385},0).wait(1).to({y:382.3},0).wait(1).to({y:379.6},0).wait(1).to({y:376.9},0).wait(1).to({y:374.2},0).wait(1).to({y:371.5},0).wait(1).to({y:368.8},0).wait(1).to({y:366},0).wait(1).to({y:363.3},0).wait(1).to({y:360.6},0).wait(1).to({y:357.9},0).wait(1).to({y:355.2},0).wait(1).to({y:352.5},0).wait(1).to({y:349.8},0).wait(1).to({y:347.1},0).wait(1).to({y:344.4},0).wait(1).to({y:341.6},0).wait(1).to({y:338.9},0).wait(1).to({y:336.2},0).wait(1).to({y:333.5},0).wait(1).to({y:330.8},0).wait(1).to({y:328.1},0).wait(1).to({y:325.4},0).wait(1).to({y:322.7},0).wait(1).to({y:320},0).wait(1).to({y:317.2},0).wait(1).to({y:314.5},0).wait(1).to({y:311.8},0).wait(1).to({y:309.1},0).wait(1).to({y:306.4},0).wait(1).to({y:303.7},0).wait(1).to({y:301},0).wait(1).to({y:298.3},0).wait(1).to({y:295.6},0).wait(1).to({y:292.8},0).wait(1).to({y:290.1},0).wait(1).to({y:287.4},0).wait(1).to({y:284.7},0).wait(1).to({y:282},0).wait(1).to({x:918.3},0).wait(1).to({x:950.3},0).wait(1).to({x:982.3},0).wait(1).to({x:1014.3},0).wait(1).to({x:1046.3},0).wait(1).to({x:1078.3},0).wait(1).to({x:1110.3},0).wait(1).to({x:1142.3},0).wait(1).to({x:1174.3},0).wait(1).to({x:1206.3},0).wait(198));

	// Texto 3
	this.texto3 = new cjs.Text("Al menos 102 toneladas de drogas incautadas entre 2010 y 2018 no fueron destruidas por el sistema de administración de justicia, lo cual implica una violación de ley.", "24px 'Poppins SemiBold'", "#FFFF70");
	this.texto3.name = "texto3";
	this.texto3.lineHeight = 42;
	this.texto3.lineWidth = 806;
	this.texto3.parent = this;
	this.texto3.setTransform(13,554.5);

	this.timeline.addTween(cjs.Tween.get(this.texto3).wait(3).to({y:554.6},0).wait(6).to({y:554.7},0).wait(1).to({x:12.9},0).wait(5).to({y:554.8},0).wait(6).to({y:554.9},0).wait(6).to({y:555},0).wait(3).to({x:12.8},0).wait(3).to({y:555.1},0).wait(5).to({y:555.2},0).wait(6).to({y:555.3},0).wait(5).to({x:12.7},0).wait(1).to({y:555.4},0).wait(6).to({y:555.5},0).wait(6).to({y:555.6},0).wait(5).to({y:555.7},0).wait(2).to({x:12.6},0).wait(4).to({y:555.8},0).wait(6).to({y:555.9},0).wait(6).to({y:556},0).wait(3).to({x:12.5},0).wait(3).to({y:556.1},0).wait(6).to({y:556.2},0).wait(5).to({y:556.3},0).wait(6).to({x:12.4,y:556.4},0).wait(6).to({y:556.5},0).wait(6).to({y:556.6},0).wait(6).to({y:556.7},0).wait(1).to({x:12.3},0).wait(4).to({y:556.8},0).wait(6).to({y:556.9},0).wait(6).to({y:557},0).wait(4).to({x:12.2},0).wait(2).to({y:557.1},0).wait(6).to({y:557.2},0).wait(6).to({y:557.3},0).wait(5).to({x:12.1,y:557.4},0).wait(6).to({y:557.5},0).wait(5).to({y:553.5},0).wait(1).to({y:549.5},0).wait(1).to({y:545.6},0).wait(1).to({y:541.6},0).wait(1).to({y:537.6},0).wait(1).to({y:533.6},0).wait(1).to({y:529.6},0).wait(1).to({y:525.6},0).wait(1).to({y:521.6},0).wait(1).to({y:517.6},0).wait(1).to({y:513.6},0).wait(1).to({y:509.7},0).wait(1).to({y:505.7},0).wait(1).to({y:501.7},0).wait(1).to({y:497.7},0).wait(1).to({y:493.7},0).wait(1).to({y:489.7},0).wait(1).to({y:485.7},0).wait(1).to({y:481.7},0).wait(1).to({y:477.8},0).wait(1).to({y:473.8},0).wait(1).to({y:469.8},0).wait(1).to({y:465.8},0).wait(1).to({y:461.8},0).wait(1).to({y:457.8},0).wait(1).to({y:453.8},0).wait(1).to({y:449.8},0).wait(1).to({y:445.8},0).wait(1).to({y:441.9},0).wait(1).to({y:437.9},0).wait(1).to({y:433.9},0).wait(1).to({y:429.9},0).wait(1).to({y:425.9},0).wait(1).to({y:421.9},0).wait(1).to({y:417.9},0).wait(1).to({y:413.9},0).wait(1).to({y:409.9},0).wait(1).to({y:406},0).wait(1).to({y:402},0).wait(1).to({y:398},0).wait(1).to({y:394},0).wait(1).to({y:390},0).wait(1).to({y:386},0).wait(1).to({y:382},0).wait(12).to({x:-32.1},0).wait(1).to({x:-76.3},0).wait(1).to({x:-120.5},0).wait(1).to({x:-164.7},0).wait(1).to({x:-209},0).wait(1).to({x:-253.1},0).wait(1).to({x:-297.3},0).wait(1).to({x:-341.6},0).wait(1).to({x:-385.8},0).wait(1).to({x:-430},0).wait(1).to({x:-474.2},0).wait(1).to({x:-518.4},0).wait(1).to({x:-562.6},0).wait(1).to({x:-606.8},0).wait(1).to({x:-651.1},0).wait(1).to({x:-695.3},0).wait(1).to({x:-739.5},0).wait(1).to({x:-783.6},0).wait(1).to({x:-827.9},0).wait(134));

	// Texto4
	this.text_2 = new cjs.Text("Casi la mitad de esta droga -44 toneladas- que el Estado reconoció haber incautado no aparece en el Plan Nacional Antidrogas 2019-2025, el cual presenta los decomisos de los últimos 20 años", "24px 'Poppins SemiBold'", "#FFFF70");
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 804;
	this.text_2.parent = this;
	this.text_2.setTransform(12,570.9);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(26).to({x:12.1},0).wait(51).to({x:12.2},0).wait(52).to({x:12.3},0).wait(51).to({x:12.4},0).wait(51).to({x:12.5},0).wait(1).to({y:567.7},0).wait(1).to({y:564.5},0).wait(1).to({y:561.3},0).wait(1).to({y:558.1},0).wait(1).to({y:554.9},0).wait(1).to({y:551.7},0).wait(1).to({y:548.5},0).wait(1).to({y:545.3},0).wait(1).to({y:542.1},0).wait(1).to({y:538.9},0).wait(1).to({y:535.7},0).wait(1).to({y:532.5},0).wait(1).to({y:529.3},0).wait(1).to({y:526.1},0).wait(1).to({y:522.9},0).wait(1).to({y:519.7},0).wait(1).to({y:516.5},0).wait(1).to({y:513.3},0).wait(1).to({y:510.1},0).wait(1).to({y:506.9},0).wait(1).to({y:503.7},0).wait(1).to({y:500.5},0).wait(1).to({y:497.3},0).wait(1).to({y:494.1},0).wait(1).to({y:490.9},0).wait(1).to({y:487.7},0).wait(1).to({y:484.5},0).wait(1).to({y:481.3},0).wait(1).to({y:478.1},0).wait(1).to({y:474.9},0).wait(1).to({y:471.7},0).wait(1).to({y:468.5},0).wait(1).to({y:465.3},0).wait(1).to({y:462.1},0).wait(1).to({y:458.9},0).wait(1).to({y:455.7},0).wait(1).to({y:452.5},0).wait(1).to({y:449.3},0).wait(1).to({y:446.1},0).wait(1).to({y:442.9},0).wait(1).to({y:439.7},0).wait(1).to({y:436.5},0).wait(1).to({y:433.3},0).wait(1).to({y:430.1},0).wait(1).to({y:426.9},0).wait(1).to({y:423.7},0).wait(1).to({y:420.5},0).wait(1).to({y:417.3},0).wait(1).to({y:414.1},0).wait(1).to({y:410.9},0).wait(1).to({y:407.7},0).wait(1).to({y:404.5},0).wait(1).to({y:401.3},0).wait(1).to({y:398.1},0).wait(1).to({y:394.9},0).wait(1).to({y:391.7},0).wait(1).to({y:388.5},0).wait(1).to({y:385.3},0).wait(1).to({y:382.1},0).wait(1).to({y:378.9},0).wait(1).to({x:-29.5},0).wait(1).to({x:-71.5},0).wait(1).to({x:-113.5},0).wait(1).to({x:-155.5},0).wait(1).to({x:-197.5},0).wait(1).to({x:-239.5},0).wait(1).to({x:-281.5},0).wait(1).to({x:-323.5},0).wait(1).to({x:-365.5},0).wait(1).to({x:-407.5},0).wait(1).to({x:-449.5},0).wait(1).to({x:-491.5},0).wait(1).to({x:-533.5},0).wait(1).to({x:-575.5},0).wait(1).to({x:-617.5},0).wait(1).to({x:-659.5},0).wait(1).to({x:-701.5},0).wait(1).to({x:-743.5},0).wait(1).to({x:-785.5},0).wait(1).to({x:-827.5},0).wait(73));

	// Texto5
	this.text_3 = new cjs.Text("En un país identificado como \"puente\" del tráfico internacional de drogas, la infraestructura creada hace una década para impedir el reciclaje de estupefacientes está desmantelada.", "24px 'Poppins SemiBold'", "#FFFF70");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 42;
	this.text_3.lineWidth = 780;
	this.text_3.parent = this;
	this.text_3.setTransform(887.8,570.9,1.031,1.031);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1).to({x:887.9,y:570.8},0).wait(1).to({x:888},0).wait(4).to({x:888.1,y:570.9},0).wait(4).to({x:888.2},0).wait(4).to({x:888.3},0).wait(3).to({x:888.4},0).wait(4).to({x:888.5},0).wait(4).to({x:888.6},0).wait(4).to({x:888.7},0).wait(3).to({x:888.8},0).wait(4).to({x:888.9},0).wait(4).to({x:889},0).wait(4).to({x:889.1},0).wait(3).to({x:889.2},0).wait(4).to({x:889.3},0).wait(4).to({x:889.4},0).wait(4).to({x:889.5},0).wait(3).to({x:889.6},0).wait(4).to({x:889.7},0).wait(4).to({x:889.8},0).wait(4).to({x:889.9},0).wait(3).to({x:890},0).wait(4).to({x:890.1},0).wait(4).to({x:890.2},0).wait(4).to({x:890.3},0).wait(3).to({x:890.4},0).wait(4).to({x:890.5},0).wait(4).to({x:890.6},0).wait(4).to({x:890.7},0).wait(3).to({x:890.8},0).wait(4).to({x:890.9},0).wait(4).to({x:891},0).wait(4).to({x:891.1},0).wait(3).to({x:891.2},0).wait(4).to({x:891.3},0).wait(4).to({x:891.4},0).wait(4).to({x:891.5},0).wait(3).to({x:891.6},0).wait(4).to({x:891.7},0).wait(4).to({x:891.8},0).wait(4).to({x:891.9},0).wait(3).to({x:892},0).wait(4).to({x:892.1},0).wait(4).to({x:892.2},0).wait(4).to({x:892.3},0).wait(3).to({x:892.4},0).wait(4).to({x:892.5},0).wait(4).to({x:892.6},0).wait(4).to({x:892.7},0).wait(3).to({x:892.8},0).wait(4).to({x:892.9},0).wait(4).to({x:893},0).wait(4).to({x:893.1},0).wait(3).to({x:893.2},0).wait(4).to({x:893.3},0).wait(4).to({x:893.4},0).wait(4).to({x:893.5},0).wait(3).to({x:893.6},0).wait(4).to({x:893.7},0).wait(4).to({x:893.8},0).wait(4).to({x:893.9},0).wait(3).to({x:894},0).wait(4).to({x:894.1},0).wait(4).to({x:894.2},0).wait(4).to({x:894.3},0).wait(3).to({x:894.4},0).wait(4).to({x:894.5},0).wait(4).to({x:894.6},0).wait(4).to({x:894.7},0).wait(3).to({x:894.8},0).wait(4).to({x:894.9},0).wait(4).to({x:895},0).wait(4).to({x:895.1},0).wait(3).to({x:895.2},0).wait(4).to({x:895.3},0).wait(4).to({x:895.4},0).wait(4).to({x:895.5},0).wait(3).to({x:895.6},0).wait(4).to({x:895.7},0).wait(4).to({x:895.8},0).wait(4).to({x:895.9},0).wait(2).to({y:567.8},0).wait(1).to({y:564.7},0).wait(1).to({y:561.6},0).wait(1).to({y:558.5},0).wait(1).to({y:555.4},0).wait(1).to({y:552.3},0).wait(1).to({y:549.2},0).wait(1).to({y:546.1},0).wait(1).to({y:543.1},0).wait(1).to({y:540},0).wait(1).to({y:536.9},0).wait(1).to({y:533.8},0).wait(1).to({y:530.7},0).wait(1).to({y:527.6},0).wait(1).to({y:524.5},0).wait(1).to({y:521.4},0).wait(1).to({y:518.3},0).wait(1).to({y:515.2},0).wait(1).to({y:512.1},0).wait(1).to({y:509},0).wait(1).to({y:505.9},0).wait(1).to({y:502.8},0).wait(1).to({y:499.7},0).wait(1).to({y:496.6},0).wait(1).to({y:493.6},0).wait(1).to({y:490.5},0).wait(1).to({y:487.4},0).wait(1).to({y:484.3},0).wait(1).to({y:481.2},0).wait(1).to({y:478.1},0).wait(1).to({y:475},0).wait(1).to({y:471.9},0).wait(1).to({y:468.8},0).wait(1).to({y:465.7},0).wait(1).to({y:462.6},0).wait(1).to({y:459.5},0).wait(1).to({y:456.4},0).wait(1).to({y:453.3},0).wait(1).to({y:450.2},0).wait(1).to({y:447.2},0).wait(1).to({y:444.1},0).wait(1).to({y:441},0).wait(1).to({y:437.9},0).wait(1).to({y:434.8},0).wait(1).to({y:431.7},0).wait(1).to({y:428.6},0).wait(1).to({y:425.5},0).wait(1).to({y:422.4},0).wait(1).to({y:419.3},0).wait(1).to({y:416.2},0).wait(1).to({y:413.1},0).wait(1).to({y:410},0).wait(1).to({y:406.9},0).wait(1).to({y:403.8},0).wait(1).to({y:400.7},0).wait(1).to({y:397.7},0).wait(1).to({y:394.6},0).wait(1).to({y:391.5},0).wait(1).to({y:388.4},0).wait(1).to({y:385.3},0).wait(1).to({y:382.2},0).wait(1).to({x:936.9},0).wait(1).to({x:977.9},0).wait(1).to({x:1018.9},0).wait(1).to({x:1059.9},0).wait(1).to({x:1100.9},0).wait(1).to({x:1141.9},0).wait(1).to({x:1182.9},0).wait(1).to({x:1223.9},0).wait(1).to({x:1264.9},0).wait(1).to({x:1305.9},0).wait(1).to({x:1346.9},0).wait(1).to({x:1387.9},0).wait(1).to({x:1428.9},0).wait(1).to({x:1469.9},0).wait(1).to({x:1510.9},0).wait(1).to({x:1551.9},0).wait(1).to({x:1592.9},0).wait(1).to({x:1633.9},0).wait(1).to({x:1674.9},0).wait(1).to({x:1715.9},0).wait(3));

	// Puerta
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(447,210,1,1,0,0,0,130,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:1.9},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:5.6},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:9.3},0).wait(1).to({rotation:11.2},0).wait(1).to({rotation:13.1},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:16.8},0).wait(1).to({rotation:18.7},0).wait(1).to({rotation:20.6},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:26.2},0).wait(1).to({rotation:28},0).wait(1).to({rotation:29.9},0).wait(1).to({rotation:31.8},0).wait(1).to({rotation:33.6},0).wait(1).to({rotation:35.5},0).wait(1).to({rotation:37.4},0).wait(1).to({rotation:39.2},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:43},0).wait(1).to({rotation:44.8},0).wait(1).to({rotation:46.7},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:50.4},0).wait(1).to({rotation:52.3},0).wait(1).to({rotation:54.2},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:57.9},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:61.7},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:65.4},0).wait(1).to({rotation:67.3},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:71},0).wait(1).to({rotation:72.9},0).wait(1).to({rotation:74.7},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:78.5},0).wait(1).to({rotation:80.3},0).wait(1).to({rotation:82.2},0).wait(1).to({rotation:84.1},0).wait(1).to({rotation:85.9},0).wait(1).to({rotation:87.8},0).wait(1).to({rotation:89.7},0).wait(1).to({rotation:91.6},0).wait(1).to({rotation:93.4},0).wait(1).to({rotation:95.3},0).wait(1).to({rotation:97.2},0).wait(1).to({rotation:99},0).wait(1).to({rotation:100.9},0).wait(1).to({rotation:102.8},0).wait(1).to({rotation:104.6},0).wait(1).to({rotation:106.5},0).wait(1).to({rotation:108.4},0).wait(1).to({rotation:110.2},0).wait(1).to({rotation:112.1},0).wait(1).to({rotation:114},0).wait(1).to({rotation:115.8},0).wait(1).to({rotation:117.7},0).wait(1).to({rotation:119.6},0).wait(1).to({rotation:121.4},0).wait(1).to({rotation:123.3},0).wait(1).to({rotation:125.2},0).wait(1).to({rotation:127.1},0).wait(1).to({rotation:128.9},0).wait(1).to({rotation:130.8},0).wait(1).to({rotation:132.7},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:136.4},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:140.1},0).wait(1).to({rotation:142},0).wait(1).to({rotation:143.9},0).wait(1).to({rotation:145.7},0).wait(1).to({rotation:147.6},0).wait(1).to({rotation:149.5},0).wait(1).to({rotation:151.3},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:155.1},0).wait(1).to({rotation:156.9},0).wait(1).to({rotation:158.8},0).wait(1).to({rotation:160.7},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:164.4},0).wait(1).to({rotation:166.3},0).wait(1).to({rotation:168.2},0).wait(1).to({rotation:170},0).wait(1).to({rotation:171.9},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:175.6},0).wait(1).to({rotation:177.5},0).wait(1).to({rotation:179.4},0).wait(1).to({rotation:181.2},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:185},0).wait(1).to({rotation:186.8},0).wait(1).to({rotation:188.7},0).wait(1).to({rotation:190.6},0).wait(1).to({rotation:192.4},0).wait(1).to({rotation:194.3},0).wait(1).to({rotation:196.2},0).wait(1).to({rotation:198.1},0).wait(1).to({rotation:199.9},0).wait(1).to({rotation:201.8},0).wait(1).to({rotation:203.7},0).wait(1).to({rotation:205.5},0).wait(1).to({rotation:207.4},0).wait(1).to({rotation:209.3},0).wait(1).to({rotation:211.1},0).wait(1).to({rotation:213},0).wait(1).to({rotation:214.9},0).wait(1).to({rotation:216.7},0).wait(1).to({rotation:218.6},0).wait(1).to({rotation:220.5},0).wait(1).to({rotation:222.3},0).wait(1).to({rotation:224.2},0).wait(1).to({rotation:226.1},0).wait(1).to({rotation:227.9},0).wait(1).to({rotation:229.8},0).wait(1).to({rotation:231.7},0).wait(1).to({rotation:233.6},0).wait(1).to({rotation:235.4},0).wait(1).to({rotation:237.3},0).wait(1).to({rotation:239.2},0).wait(1).to({rotation:241},0).wait(1).to({rotation:242.9},0).wait(1).to({rotation:244.8},0).wait(1).to({rotation:246.6},0).wait(1).to({rotation:248.5},0).wait(1).to({rotation:250.4},0).wait(1).to({rotation:252.2},0).wait(1).to({rotation:254.1},0).wait(1).to({rotation:256},0).wait(1).to({rotation:257.8},0).wait(1).to({rotation:259.7},0).wait(1).to({rotation:261.6},0).wait(1).to({rotation:263.4},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:267.2},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:270.9},0).wait(1).to({rotation:272.8},0).wait(1).to({rotation:274.7},0).wait(1).to({rotation:276.5},0).wait(1).to({rotation:278.4},0).wait(1).to({rotation:280.3},0).wait(1).to({rotation:282.1},0).wait(1).to({rotation:284},0).wait(1).to({rotation:285.9},0).wait(1).to({rotation:287.7},0).wait(1).to({rotation:289.6},0).wait(1).to({rotation:291.5},0).wait(1).to({rotation:293.3},0).wait(1).to({rotation:295.2},0).wait(1).to({rotation:297.1},0).wait(1).to({rotation:298.9},0).wait(1).to({rotation:300.8},0).wait(1).to({rotation:302.7},0).wait(1).to({rotation:304.6},0).wait(1).to({rotation:306.4},0).wait(1).to({rotation:308.3},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:312},0).wait(1).to({rotation:313.9},0).wait(1).to({rotation:315.8},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:319.5},0).wait(1).to({rotation:321.4},0).wait(1).to({rotation:323.2},0).wait(1).to({rotation:325.1},0).wait(1).to({rotation:327},0).wait(1).to({rotation:328.8},0).wait(1).to({rotation:330.7},0).wait(1).to({rotation:332.6},0).wait(1).to({rotation:334.4},0).wait(1).to({rotation:336.3},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:340.1},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:343.8},0).wait(1).to({rotation:345.7},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:349.4},0).wait(1).to({rotation:351.3},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:355},0).wait(1).to({rotation:356.9},0).wait(1).to({rotation:358.7},0).wait(1).to({rotation:360.6},0).wait(1).to({rotation:362.5},0).wait(1).to({rotation:364.3},0).wait(1).to({rotation:366.2},0).wait(1).to({rotation:368.1},0).wait(1).to({rotation:369.9},0).wait(1).to({rotation:371.8},0).wait(1).to({rotation:373.7},0).wait(1).to({rotation:375.6},0).wait(1).to({rotation:377.4},0).wait(1).to({rotation:379.3},0).wait(1).to({rotation:381.2},0).wait(1).to({rotation:383},0).wait(1).to({rotation:384.9},0).wait(1).to({rotation:386.8},0).wait(1).to({rotation:388.6},0).wait(1).to({rotation:390.5},0).wait(1).to({rotation:392.4},0).wait(1).to({rotation:394.2},0).wait(1).to({rotation:396.1},0).wait(1).to({rotation:398},0).wait(1).to({rotation:399.8},0).wait(1).to({rotation:401.7},0).wait(1).to({rotation:403.6},0).wait(1).to({rotation:405.4},0).wait(1).to({rotation:407.3},0).wait(1).to({rotation:409.2},0).wait(1).to({rotation:411.1},0).wait(1).to({rotation:412.9},0).wait(1).to({rotation:414.8},0).wait(1).to({rotation:416.7},0).wait(1).to({rotation:418.5},0).wait(1).to({rotation:420.4},0).wait(1).to({rotation:422.3},0).wait(1).to({rotation:424.1},0).wait(1).to({rotation:426},0).wait(1).to({rotation:427.9},0).wait(1).to({rotation:429.7},0).wait(1).to({rotation:431.6},0).wait(1).to({rotation:433.5},0).wait(1).to({rotation:435.3},0).wait(1).to({rotation:437.2},0).wait(1).to({rotation:439.1},0).wait(1).to({rotation:440.9},0).wait(1).to({rotation:442.8},0).wait(1).to({rotation:444.7},0).wait(1).to({rotation:446.6},0).wait(1).to({rotation:448.4},0).wait(1).to({rotation:450.3},0).wait(1).to({rotation:452.2},0).wait(1).to({rotation:454},0).wait(1).to({rotation:455.9},0).wait(1).to({rotation:457.8},0).wait(1).to({rotation:459.6},0).wait(1).to({rotation:461.5},0).wait(1).to({rotation:463.4},0).wait(1).to({rotation:465.2},0).wait(1).to({rotation:467.1},0).wait(1).to({rotation:469},0).wait(1).to({rotation:470.8},0).wait(1).to({rotation:472.7},0).wait(1).to({rotation:474.6},0).wait(1).to({rotation:476.4},0).wait(1).to({rotation:478.3},0).wait(1).to({rotation:480.2},0).wait(1).to({rotation:482.1},0).wait(1).to({rotation:483.9},0).wait(1).to({rotation:485.8},0).wait(1).to({rotation:487.7},0).wait(1).to({rotation:489.5},0).wait(1).to({rotation:491.4},0).wait(1).to({rotation:493.3},0).wait(1).to({rotation:495.1},0).wait(1).to({rotation:497},0).wait(1).to({rotation:498.9},0).wait(1).to({rotation:500.7},0).wait(1).to({rotation:502.6},0).wait(1).to({rotation:504.5},0).wait(1).to({rotation:506.3},0).wait(1).to({rotation:508.2},0).wait(1).to({rotation:510.1},0).wait(1).to({rotation:511.9},0).wait(1).to({rotation:513.8},0).wait(1).to({rotation:515.7},0).wait(1).to({rotation:517.6},0).wait(1).to({rotation:519.4},0).wait(1).to({rotation:521.3},0).wait(1).to({rotation:523.2},0).wait(1).to({rotation:525},0).wait(1).to({rotation:526.9},0).wait(1).to({rotation:528.8},0).wait(1).to({rotation:530.6},0).wait(1).to({rotation:532.5},0).wait(1).to({rotation:534.4},0).wait(1).to({rotation:536.2},0).wait(1).to({rotation:538.1},0).wait(1).to({rotation:540},0).wait(1).to({rotation:541.8},0).wait(1).to({rotation:543.7},0).wait(1).to({rotation:545.6},0).wait(1).to({rotation:547.4},0).wait(1).to({rotation:549.3},0).wait(1).to({rotation:551.2},0).wait(1).to({rotation:553.1},0).wait(1).to({rotation:554.9},0).wait(1).to({rotation:556.8},0).wait(1).to({rotation:558.7},0).wait(1).to({rotation:560.5},0).wait(1).to({rotation:562.4},0).wait(1).to({rotation:564.3},0).wait(1).to({rotation:566.1},0).wait(1).to({rotation:568},0).wait(1).to({rotation:569.9},0).wait(1).to({rotation:571.7},0).wait(1).to({rotation:573.6},0).wait(1).to({rotation:575.5},0).wait(1).to({rotation:577.3},0).wait(1).to({rotation:579.2},0).wait(1).to({rotation:581.1},0).wait(1).to({rotation:582.9},0).wait(1).to({rotation:584.8},0).wait(1).to({rotation:586.7},0).wait(1).to({rotation:588.6},0).wait(1).to({rotation:590.4},0).wait(1).to({rotation:592.3},0).wait(1).to({rotation:594.2},0).wait(1).to({rotation:596},0).wait(1).to({rotation:597.9},0).wait(1).to({rotation:599.8},0).wait(1).to({rotation:601.6},0).wait(1).to({rotation:603.5},0).wait(1).to({rotation:605.4},0).wait(1).to({rotation:607.2},0).wait(1).to({rotation:609.1},0).wait(1).to({rotation:611},0).wait(1).to({rotation:612.8},0).wait(1).to({rotation:614.7},0).wait(1).to({rotation:616.6},0).wait(1).to({rotation:618.4},0).wait(1).to({rotation:620.3},0).wait(1).to({rotation:622.2},0).wait(1).to({rotation:624.1},0).wait(1).to({rotation:625.9},0).wait(1).to({rotation:627.8},0).wait(1).to({rotation:629.7},0).wait(1).to({rotation:631.5},0).wait(1).to({rotation:633.4},0).wait(1).to({rotation:635.3},0).wait(1).to({rotation:637.1},0).wait(1).to({rotation:639},0).wait(1).to({rotation:640.9},0).wait(1).to({rotation:642.7},0).wait(1).to({rotation:644.6},0).wait(1).to({rotation:646.5},0).wait(1).to({rotation:648.3},0).wait(1).to({rotation:650.2},0).wait(1).to({rotation:652.1},0).wait(1).to({rotation:653.9},0).wait(1).to({rotation:655.8},0).wait(1).to({rotation:657.7},0).wait(1).to({rotation:659.6},0).wait(1).to({rotation:661.4},0).wait(1).to({rotation:663.3},0).wait(1).to({rotation:665.2},0).wait(1).to({rotation:667},0).wait(1).to({rotation:668.9},0).wait(1).to({rotation:670.8},0).wait(1).to({rotation:672.6},0).wait(1).to({rotation:674.5},0).wait(1).to({rotation:676.4},0).wait(1).to({rotation:678.2},0).wait(1).to({rotation:680.1},0).wait(1).to({rotation:682},0).wait(1).to({rotation:683.8},0).wait(1).to({rotation:685.7},0).wait(1).to({rotation:687.6},0).wait(1).to({rotation:689.4},0).wait(1).to({rotation:691.3},0).wait(1).to({rotation:693.2},0).wait(1).to({rotation:695.1},0).wait(1).to({rotation:696.9},0).wait(1).to({rotation:698.8},0).wait(1).to({rotation:700.7},0).wait(1).to({rotation:702.5},0).wait(1).to({rotation:704.4},0).wait(1).to({rotation:706.3},0).wait(1).to({rotation:708.1},0).wait(1).to({rotation:710},0).wait(1).to({rotation:711.9},0).wait(1).to({rotation:713.7},0).wait(1).to({rotation:715.6},0).wait(1));

	// Background
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(451,210,1,1,0,0,0,450,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(384));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(451,305,900,778.7);
// library properties:
lib.properties = {
	id: '71920B2C4B431D4695F86073A99BAED9',
	width: 900,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Asset13.png", id:"Asset13"},
		{src:"images/Asset14.png", id:"Asset14"},
		{src:"images/Asset15.png", id:"Asset15"},
		{src:"images/Asset16.png", id:"Asset16"},
		{src:"images/Asset17.png", id:"Asset17"},
		{src:"images/Asset18.png", id:"Asset18"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['71920B2C4B431D4695F86073A99BAED9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;