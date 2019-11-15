(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"puerta giratoria_atlas_", frames: [[544,0,216,225],[544,227,214,227],[0,0,542,536]]}
];



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



(lib.person1 = function() {
	this.spriteSheet = ss["puerta giratoria_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.person2 = function() {
	this.spriteSheet = ss["puerta giratoria_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.puertagiratoriacompleta = function() {
	this.spriteSheet = ss["puerta giratoria_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.person1();
	this.instance.parent = this;
	this.instance.setTransform(49.5,0,0.315,0.311,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,97.6,97.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.person2();
	this.instance.parent = this;
	this.instance.setTransform(48.1,0,0.318,0.308,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,97.6,97.6), null);


(lib.rotatorydoor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puertagiratoriacompleta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rotatorydoor, new cjs.Rectangle(0,0,179,177), null);


// stage content:
(lib.puertagiratoria = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-62.9,186.4,1,1,0,0,0,48.8,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.4,x:-42,y:183},0).wait(1).to({rotation:0.9,x:-21.3,y:179.6},0).wait(1).to({rotation:1.3,x:-0.5,y:176.1},0).wait(1).to({rotation:1.7,x:20.3,y:172.8},0).wait(1).to({rotation:2.2,x:41,y:169.3},0).wait(1).to({rotation:2.6,x:61.8,y:165.9},0).wait(1).to({rotation:3,x:82.6,y:162.4},0).wait(1).to({rotation:3.5,x:103.3,y:159},0).wait(1).to({rotation:3.9,x:124.1,y:155.6},0).wait(1).to({rotation:4.3,x:144.9,y:152.2},0).wait(1).to({rotation:4.7,x:165.7,y:148.8},0).wait(1).to({rotation:5.2,x:186.4,y:145.4},0).wait(1).to({rotation:5.6,x:197.7,y:143.5},0).wait(1).to({rotation:6,x:209.1,y:141.6},0).wait(1).to({rotation:6.4,x:220.4,y:139.7},0).wait(1).to({rotation:6.8,x:231.7,y:137.8},0).wait(1).to({rotation:7.3,x:243,y:135.9},0).wait(1).to({rotation:7.7,x:254.2,y:134.1},0).wait(1).to({rotation:8.1,x:265.5,y:132.2},0).wait(1).to({rotation:8.6,x:272.6,y:134.2},0).wait(1).to({x:279.6,y:136.3},0).wait(1).to({x:286.6,y:138.3},0).wait(1).to({x:293.6,y:140.4},0).wait(1).to({x:300.6,y:142.4},0).wait(1).to({x:307.6,y:144.5},0).wait(1).to({x:314.6,y:146.5},0).wait(1).to({x:321.7,y:148.6},0).wait(1).to({x:328.7,y:150.6},0).wait(1).to({x:334,y:153.5},0).wait(1).to({x:339.2,y:156.5},0).wait(1).to({x:344.5,y:159.4},0).wait(1).to({x:349.8,y:162.3},0).wait(1).to({x:355.1,y:165.2},0).wait(1).to({x:360.4,y:168.2},0).wait(1).to({x:365.7,y:171.1},0).wait(1).to({x:371,y:174},0).wait(1).to({x:376.2,y:176.9},0).wait(1).to({x:381.5,y:179.9},0).wait(1).to({x:386.8,y:182.8},0).wait(1).to({x:392.1,y:185.7},0).wait(1).to({x:397.4,y:188.6},0).wait(1).to({x:402.7,y:191.6},0).wait(1).to({x:408,y:194.5},0).wait(1).to({x:413.2,y:197.4},0).wait(1).to({x:418.5,y:200.3},0).wait(1).to({x:423.8,y:203.3},0).wait(1).to({x:440,y:204.7},0).wait(1).to({x:456.2,y:206.1},0).wait(1).to({x:472.4,y:207.5},0).wait(1).to({x:488.6,y:208.9},0).wait(1).to({x:504.8,y:210.4},0).wait(1).to({x:521,y:211.8},0).wait(1).to({x:537.2,y:213.2},0).wait(1).to({x:553.4,y:214.6},0).wait(1).to({x:569.5,y:216},0).wait(1).to({x:585.7,y:217.4},0).wait(1).to({x:601.9,y:218.9},0).wait(1).to({x:618.1,y:220.3},0).wait(72).to({_off:true},1).wait(54));

	// Layer 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-153.4,192.9,1,1,0,0,0,48.8,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-140.2,y:191.1},0).wait(1).to({x:-127.1,y:189.4},0).wait(1).to({x:-114,y:187.7},0).wait(1).to({x:-100.9,y:186},0).wait(1).to({x:-87.7,y:184.3},0).wait(1).to({x:-74.6,y:182.6},0).wait(1).to({x:-61.5,y:180.9},0).wait(1).to({x:-48.4,y:179.2},0).wait(1).to({x:-35.3,y:177.5},0).wait(1).to({x:-22.2,y:175.8},0).wait(1).to({rotation:0.1,x:-7.4},0).wait(1).to({x:7.5},0).wait(1).to({x:22.3},0).wait(1).to({x:37.1},0).wait(1).to({x:51.8},0).wait(1).to({x:66.6},0).wait(1).to({x:81.4},0).wait(1).to({x:96.2},0).wait(1).to({x:111},0).wait(1).to({x:120.7,y:174.5},0).wait(1).to({x:130.3,y:173.1},0).wait(1).to({x:140,y:171.8},0).wait(1).to({x:149.7,y:170.5},0).wait(1).to({x:159.3,y:169.1},0).wait(1).to({x:169,y:167.8},0).wait(1).to({x:178.7,y:166.5},0).wait(1).to({x:188.4,y:165.1},0).wait(1).to({x:198,y:163.8},0).wait(1).to({x:209.7,y:159.8},0).wait(1).to({x:221.3,y:155.8},0).wait(1).to({rotation:0.2,x:233,y:151.8},0).wait(1).to({x:236.4,y:150.6},0).wait(1).to({x:239.8,y:149.4},0).wait(1).to({x:243.2,y:148.2},0).wait(1).to({x:246.6,y:147},0).wait(1).to({x:250,y:145.8},0).wait(1).to({rotation:5.2,x:258,y:142.8},0).wait(1).to({rotation:10.2,x:266,y:139.8},0).wait(1).to({rotation:15.2,x:274,y:136.8},0).wait(1).to({rotation:21.2,x:277.8,y:138},0).wait(1).to({rotation:27.2,x:281.6,y:139.2},0).wait(1).to({rotation:33.2,x:285.4,y:140.4},0).wait(1).to({rotation:39.2,x:289.2,y:141.5},0).wait(1).to({rotation:45.2,x:293,y:142.7},0).wait(1).to({rotation:39.1,x:297.6,y:144.2},0).wait(1).to({rotation:33,x:302.1,y:145.7},0).wait(1).to({rotation:40.6,x:306.9,y:149},0).wait(1).to({rotation:48.1,x:311.6,y:152.1},0).wait(1).to({rotation:55.7,x:316.4,y:155.3},0).wait(1).to({rotation:63.3,x:321.1,y:158.5},0).wait(1).to({rotation:66.8,x:326,y:162.6},0).wait(1).to({rotation:70.3,x:330.8,y:166.6},0).wait(1).to({rotation:73.8,x:335.7,y:170.6},0).wait(1).to({rotation:77.3,x:340.6,y:174.7},0).wait(1).to({rotation:80.8,x:345.4,y:178.6},0).wait(1).to({rotation:86.3,x:346.3,y:184.1},0).wait(1).to({rotation:91.8,x:347.2,y:189.6},0).wait(1).to({rotation:97.3,x:348.1,y:195},0).wait(1).to({rotation:102.8,x:349,y:200.5},0).wait(1).to({rotation:108.3,x:349.9,y:206},0).wait(1).to({rotation:113.8,x:350.8,y:211.5},0).wait(1).to({rotation:119.3,x:351.7,y:216.9},0).wait(1).to({rotation:124.8,x:352.6,y:222.4},0).wait(1).to({rotation:130.3,x:353.4,y:227.8},0).wait(1).to({rotation:134.1,x:351.4,y:232.4},0).wait(1).to({rotation:138,x:349.4,y:236.9},0).wait(1).to({rotation:141.8,x:347.3,y:241.4},0).wait(1).to({rotation:145.7,x:345.3,y:245.9},0).wait(1).to({rotation:149.6,x:343.2,y:250.4},0).wait(1).to({rotation:153.4,x:341.1,y:255},0).wait(1).to({rotation:154.9,x:336.3,y:258.2},0).wait(1).to({rotation:156.5,x:331.4,y:261.6},0).wait(1).to({rotation:158,x:326.6,y:264.9},0).wait(1).to({rotation:159.5,x:321.7,y:268.2},0).wait(1).to({rotation:161,x:316.9,y:271.5},0).wait(1).to({rotation:162.5,x:312,y:274.8},0).wait(1).to({rotation:164,x:307.2,y:278.2},0).wait(1).to({rotation:165.5,x:302.3,y:281.5},0).wait(1).to({rotation:167.1,x:297.5,y:284.8},0).wait(1).to({rotation:168.6,x:292.6,y:288},0).wait(1).to({rotation:170.1,x:287.8,y:291.4},0).wait(1).to({rotation:171.6,x:282.9,y:294.6},0).wait(1).to({rotation:173.1,x:278,y:298},0).wait(1).to({x:270.7,y:295.5},0).wait(1).to({x:263.3,y:293.1},0).wait(1).to({x:256,y:290.6},0).wait(1).to({x:248.5,y:288.2},0).wait(1).to({x:241.2,y:285.7},0).wait(1).to({x:233.8,y:283.3},0).wait(1).to({x:226.4,y:280.8},0).wait(1).to({rotation:173,x:219.1,y:278.3},0).wait(1).to({x:211.7,y:275.9},0).wait(1).to({x:204.3,y:273.4},0).wait(1).to({x:196.9,y:271},0).wait(1).to({rotation:173.5,x:187.2,y:267.7},0).wait(1).to({rotation:173.9,x:177.4,y:264.4},0).wait(1).to({rotation:174.4,x:167.6,y:261.1},0).wait(1).to({rotation:174.8,x:157.8,y:257.7},0).wait(1).to({rotation:175.3,x:148,y:254.4},0).wait(1).to({rotation:175.7,x:138.3,y:251.1},0).wait(1).to({rotation:176.2,x:128.5,y:247.8},0).wait(1).to({rotation:176.6,x:118.7,y:244.5},0).wait(1).to({rotation:177.1,x:108.9,y:241.1},0).wait(1).to({rotation:177.5,x:99.1,y:237.9},0).wait(1).to({rotation:177.9,x:89.4,y:234.6},0).wait(1).to({rotation:178.4,x:79.6,y:231.2},0).wait(1).to({rotation:178.8,x:69.8,y:227.9},0).wait(1).to({rotation:177.9,x:45.5,y:224.2},0).wait(1).to({rotation:176.9,x:21.1,y:220.4},0).wait(1).to({rotation:176,x:-3.2,y:216.6},0).wait(1).to({rotation:175,x:-27.5,y:212.9},0).wait(1).to({rotation:174.1,x:-51.9,y:209.1},0).wait(1).to({rotation:173.1,x:-76.2,y:205.4},0).wait(1).to({rotation:175.7,x:-83.7,y:210.5},0).wait(1).to({rotation:165.4,x:-88,y:211},0).wait(1).to({rotation:155.2,x:-92.2,y:211.5},0).wait(1).to({rotation:145,x:-96.4,y:212.1},0).wait(1).to({rotation:147.3,x:-88.9,y:213.2},0).wait(1).to({rotation:149.5,x:-81.2,y:214.4},0).wait(1).to({rotation:151.8,x:-73.6,y:215.5},0).wait(1).to({rotation:155.1,x:-85.3,y:213.8},0).wait(1).to({rotation:158.4,x:-96.9,y:212},0).wait(1).to({rotation:161.7,x:-108.5,y:210.2},0).wait(1).to({rotation:159.9,x:-113.5,y:203.5},0).wait(1).to({rotation:158.1,x:-118.4,y:196.8},0).wait(1).to({rotation:163.1,x:-108.7,y:200.8},0).wait(1).to({rotation:168.1,x:-98.8,y:204.7},0).wait(1).to({rotation:173.2,x:-89,y:208.7},0).wait(1).to({rotation:176.8,x:-108.2,y:190.3},0).wait(1).to({rotation:218.1,x:-114.4,y:209},0).to({_off:true},1).wait(54));

	// Layer 33
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-153.4,192.9,1,1,0,0,0,48.8,48.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(1).to({x:-140.2,y:191.1},0).wait(1).to({x:-127.1,y:189.4},0).wait(1).to({x:-114,y:187.7},0).wait(1).to({x:-100.9,y:186},0).wait(1).to({x:-87.7,y:184.3},0).wait(1).to({x:-74.6,y:182.6},0).wait(1).to({x:-61.5,y:180.9},0).wait(1).to({x:-48.4,y:179.2},0).wait(1).to({x:-35.3,y:177.5},0).wait(1).to({x:-22.2,y:175.8},0).wait(1).to({rotation:0.1,x:-7.4},0).wait(1).to({x:7.5},0).wait(1).to({x:22.3},0).wait(1).to({x:37.1},0).wait(1).to({x:51.8},0).wait(1).to({x:66.6},0).wait(1).to({x:81.4},0).wait(1).to({x:96.2},0).wait(1).to({x:111},0).wait(1).to({x:120.7,y:174.5},0).wait(1).to({x:130.3,y:173.1},0).wait(1).to({x:140,y:171.8},0).wait(1).to({x:149.7,y:170.5},0).wait(1).to({x:159.3,y:169.1},0).wait(1).to({x:169,y:167.8},0).wait(1).to({x:178.7,y:166.5},0).wait(1).to({x:188.4,y:165.1},0).wait(1).to({x:198,y:163.8},0).wait(1).to({x:209.7,y:159.8},0).wait(1).to({x:221.3,y:155.8},0).wait(1).to({rotation:0.2,x:233,y:151.8},0).wait(1).to({x:236.4,y:150.6},0).wait(1).to({x:239.8,y:149.4},0).wait(1).to({x:243.2,y:148.2},0).wait(1).to({x:246.6,y:147},0).wait(1).to({x:250,y:145.8},0).wait(1).to({rotation:5.2,x:258,y:142.8},0).wait(1).to({rotation:10.2,x:266,y:139.8},0).wait(1).to({rotation:15.2,x:274,y:136.8},0).wait(1).to({rotation:21.2,x:277.8,y:138},0).wait(1).to({rotation:27.2,x:281.6,y:139.2},0).wait(1).to({rotation:33.2,x:285.4,y:140.4},0).wait(1).to({rotation:39.2,x:289.2,y:141.5},0).wait(1).to({rotation:45.2,x:293,y:142.7},0).wait(1).to({rotation:39.1,x:297.6,y:144.2},0).wait(1).to({rotation:33,x:302.1,y:145.7},0).wait(1).to({rotation:40.6,x:306.9,y:149},0).wait(1).to({rotation:48.1,x:311.6,y:152.1},0).wait(1).to({rotation:55.7,x:316.4,y:155.3},0).wait(1).to({rotation:63.3,x:321.1,y:158.5},0).wait(1).to({rotation:66.8,x:326,y:162.6},0).wait(1).to({rotation:70.3,x:330.8,y:166.6},0).wait(1).to({rotation:73.8,x:335.7,y:170.6},0).wait(1).to({rotation:77.3,x:340.6,y:174.7},0).wait(1).to({rotation:80.8,x:345.4,y:178.6},0).wait(1).to({rotation:86.3,x:346.3,y:184.1},0).wait(1).to({rotation:91.8,x:347.2,y:189.6},0).wait(1).to({rotation:97.3,x:348.1,y:195},0).wait(1).to({rotation:102.8,x:349,y:200.5},0).wait(1).to({rotation:108.3,x:349.9,y:206},0).wait(1).to({rotation:113.8,x:350.8,y:211.5},0).wait(1).to({rotation:119.3,x:351.7,y:216.9},0).wait(1).to({rotation:124.8,x:352.6,y:222.4},0).wait(1).to({rotation:130.3,x:353.4,y:227.8},0).wait(1).to({rotation:134.1,x:351.4,y:232.4},0).wait(1).to({rotation:138,x:349.4,y:236.9},0).wait(1).to({rotation:141.8,x:347.3,y:241.4},0).wait(1).to({rotation:145.7,x:345.3,y:245.9},0).wait(1).to({rotation:149.6,x:343.2,y:250.4},0).wait(1).to({rotation:153.4,x:341.1,y:255},0).wait(1).to({rotation:154.9,x:336.3,y:258.2},0).wait(1).to({rotation:156.5,x:331.4,y:261.6},0).wait(1).to({rotation:158,x:326.6,y:264.9},0).wait(1).to({rotation:159.5,x:321.7,y:268.2},0).wait(1).to({rotation:161,x:316.9,y:271.5},0).wait(1).to({rotation:162.5,x:312,y:274.8},0).wait(1).to({rotation:164,x:307.2,y:278.2},0).wait(1).to({rotation:165.5,x:302.3,y:281.5},0).wait(1).to({rotation:167.1,x:297.5,y:284.8},0).wait(1).to({rotation:168.6,x:292.6,y:288},0).wait(1).to({rotation:170.1,x:287.8,y:291.4},0).wait(1).to({rotation:171.6,x:282.9,y:294.6},0).wait(1).to({rotation:173.1,x:278,y:298},0).wait(1).to({x:270.7,y:295.5},0).wait(1).to({x:263.3,y:293.1},0).wait(1).to({x:256,y:290.6},0).wait(1).to({x:248.5,y:288.2},0).wait(1).to({x:241.2,y:285.7},0).wait(1).to({x:233.8,y:283.3},0).wait(1).to({x:226.4,y:280.8},0).wait(1).to({rotation:173,x:219.1,y:278.3},0).wait(1).to({x:211.7,y:275.9},0).wait(1).to({x:204.3,y:273.4},0).wait(1).to({x:196.9,y:271},0).wait(1).to({rotation:173.5,x:187.2,y:267.7},0).wait(1).to({rotation:173.9,x:177.4,y:264.4},0).wait(1).to({rotation:174.4,x:167.6,y:261.1},0).wait(1).to({rotation:174.8,x:157.8,y:257.7},0).wait(1).to({rotation:175.3,x:148,y:254.4},0).wait(1).to({rotation:175.7,x:138.3,y:251.1},0).wait(1).to({rotation:176.2,x:128.5,y:247.8},0).wait(1).to({rotation:176.6,x:118.7,y:244.5},0).wait(1).to({rotation:177.1,x:108.9,y:241.1},0).wait(1).to({rotation:177.5,x:99.1,y:237.9},0).wait(1).to({rotation:177.9,x:89.4,y:234.6},0).wait(1).to({rotation:178.4,x:79.6,y:231.2},0).wait(1).to({rotation:178.8,x:69.8,y:227.9},0).wait(1).to({rotation:177.9,x:45.5,y:224.2},0).wait(1).to({rotation:176.9,x:21.1,y:220.4},0).wait(1).to({rotation:176,x:-3.2,y:216.6},0).wait(1).to({rotation:175,x:-27.5,y:212.9},0).wait(1).to({rotation:174.1,x:-51.9,y:209.1},0).wait(1).to({rotation:173.1,x:-76.2,y:205.4},0).wait(1).to({rotation:175.7,x:-83.7,y:210.5},0).wait(1).to({rotation:165.4,x:-88,y:211},0).wait(1).to({rotation:155.2,x:-92.2,y:211.5},0).wait(1).to({rotation:145,x:-96.4,y:212.1},0).wait(1).to({rotation:147.3,x:-88.9,y:213.2},0).wait(1).to({rotation:149.5,x:-81.2,y:214.4},0).wait(1).to({rotation:151.8,x:-73.6,y:215.5},0).wait(1).to({rotation:155.1,x:-85.3,y:213.8},0).wait(1).to({rotation:158.4,x:-96.9,y:212},0).wait(1).to({rotation:161.7,x:-108.5,y:210.2},0).wait(1).to({rotation:159.9,x:-113.5,y:203.5},0).wait(1).to({rotation:158.1,x:-118.4,y:196.8},0).wait(1).to({rotation:163.1,x:-108.7,y:200.8},0).wait(1).to({rotation:168.1,x:-98.8,y:204.7},0).wait(1).to({rotation:173.2,x:-89,y:208.7},0).wait(1).to({rotation:176.8,x:-108.2,y:190.3},0).wait(1).to({rotation:218.1,x:-114.4,y:209},0).to({_off:true},1).wait(14));

	// Layer 22
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62.9,186.4,1,1,0,0,0,48.8,48.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).wait(1).to({rotation:0.4,x:-42,y:183},0).wait(1).to({rotation:0.9,x:-21.3,y:179.6},0).wait(1).to({rotation:1.3,x:-0.5,y:176.1},0).wait(1).to({rotation:1.7,x:20.3,y:172.8},0).wait(1).to({rotation:2.2,x:41,y:169.3},0).wait(1).to({rotation:2.6,x:61.8,y:165.9},0).wait(1).to({rotation:3,x:82.6,y:162.4},0).wait(1).to({rotation:3.5,x:103.3,y:159},0).wait(1).to({rotation:3.9,x:124.1,y:155.6},0).wait(1).to({rotation:4.3,x:144.9,y:152.2},0).wait(1).to({rotation:4.7,x:165.7,y:148.8},0).wait(1).to({rotation:5.2,x:186.4,y:145.4},0).wait(1).to({rotation:5.6,x:197.7,y:143.5},0).wait(1).to({rotation:6,x:209.1,y:141.6},0).wait(1).to({rotation:6.4,x:220.4,y:139.7},0).wait(1).to({rotation:6.8,x:231.7,y:137.8},0).wait(1).to({rotation:7.3,x:243,y:135.9},0).wait(1).to({rotation:7.7,x:254.2,y:134.1},0).wait(1).to({rotation:8.1,x:265.5,y:132.2},0).wait(1).to({rotation:8.6,x:272.6,y:134.2},0).wait(1).to({x:279.6,y:136.3},0).wait(1).to({x:286.6,y:138.3},0).wait(1).to({x:293.6,y:140.4},0).wait(1).to({x:300.6,y:142.4},0).wait(1).to({x:307.6,y:144.5},0).wait(1).to({x:314.6,y:146.5},0).wait(1).to({x:321.7,y:148.6},0).wait(1).to({x:328.7,y:150.6},0).wait(1).to({x:334,y:153.5},0).wait(1).to({x:339.2,y:156.5},0).wait(1).to({x:344.5,y:159.4},0).wait(1).to({x:349.8,y:162.3},0).wait(1).to({x:355.1,y:165.2},0).wait(1).to({x:360.4,y:168.2},0).wait(1).to({x:365.7,y:171.1},0).wait(1).to({x:371,y:174},0).wait(1).to({x:376.2,y:176.9},0).wait(1).to({x:381.5,y:179.9},0).wait(1).to({x:386.8,y:182.8},0).wait(1).to({x:392.1,y:185.7},0).wait(1).to({x:397.4,y:188.6},0).wait(1).to({x:402.7,y:191.6},0).wait(1).to({x:408,y:194.5},0).wait(1).to({x:413.2,y:197.4},0).wait(1).to({x:418.5,y:200.3},0).wait(1).to({x:423.8,y:203.3},0).wait(1).to({x:440,y:204.7},0).wait(1).to({x:456.2,y:206.1},0).wait(1).to({x:472.4,y:207.5},0).wait(1).to({x:488.6,y:208.9},0).wait(1).to({x:504.8,y:210.4},0).wait(1).to({x:521,y:211.8},0).wait(1).to({x:537.2,y:213.2},0).wait(1).to({x:553.4,y:214.6},0).wait(1).to({x:569.5,y:216},0).wait(1).to({x:585.7,y:217.4},0).wait(1).to({x:601.9,y:218.9},0).wait(1).to({x:618.1,y:220.3},0).wait(72).to({_off:true},1).wait(14));

	// Layer 1
	this.instance_4 = new lib.rotatorydoor();
	this.instance_4.parent = this;
	this.instance_4.setTransform(276.5,211.6,1,1,0,0,0,89.4,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:89.5,rotation:4.4,x:276.6},0).wait(1).to({rotation:8.8},0).wait(1).to({rotation:13.2,y:211.5},0).wait(1).to({rotation:17.6,y:211.6},0).wait(1).to({rotation:22},0).wait(1).to({rotation:26.4,x:276.7},0).wait(1).to({rotation:30.8,x:276.6},0).wait(1).to({rotation:35.2},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:44},0).wait(1).to({rotation:48.4},0).wait(1).to({rotation:52.8},0).wait(1).to({rotation:57.2},0).wait(1).to({rotation:61.6,x:276.7},0).wait(1).to({rotation:66,x:276.6},0).wait(1).to({rotation:70.3},0).wait(1).to({rotation:74.7},0).wait(1).to({rotation:79.1},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:87.9},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:96.7},0).wait(1).to({rotation:101.1,x:276.7,y:211.5},0).wait(1).to({rotation:105.5,y:211.6},0).wait(1).to({rotation:109.9,x:276.6},0).wait(1).to({rotation:114.3,x:276.7},0).wait(1).to({rotation:118.7},0).wait(1).to({rotation:123.1,x:276.6,y:211.5},0).wait(1).to({rotation:127.5,x:276.7},0).wait(1).to({rotation:131.9},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:140.7},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:149.5},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:158.3},0).wait(1).to({rotation:162.7},0).wait(1).to({rotation:167.1},0).wait(1).to({rotation:171.5,x:276.8},0).wait(1).to({rotation:175.9},0).wait(1).to({rotation:180.3},0).wait(1).to({rotation:184.7},0).wait(1).to({rotation:189.1,y:211.4},0).wait(1).to({rotation:193.5},0).wait(1).to({rotation:197.9},0).wait(1).to({rotation:202.3},0).wait(1).to({rotation:206.6,x:276.9},0).wait(1).to({rotation:211},0).wait(1).to({rotation:215.4},0).wait(1).to({rotation:219.8},0).wait(1).to({rotation:224.2},0).wait(1).to({rotation:228.6},0).wait(1).to({rotation:233},0).wait(1).to({rotation:237.4,x:277},0).wait(1).to({rotation:241.8},0).wait(1).to({rotation:246.2},0).wait(1).to({rotation:250.6,x:277.1,y:211.3},0).wait(1).to({rotation:255,y:211.4},0).wait(1).to({rotation:259.4},0).wait(1).to({rotation:263.8},0).wait(1).to({rotation:268.2},0).wait(1).to({rotation:272.6},0).wait(1).to({rotation:277,x:277.2},0).wait(1).to({rotation:281.4},0).wait(1).to({rotation:285.8,y:211.5},0).wait(1).to({rotation:290.2,y:211.4},0).wait(1).to({rotation:294.6},0).wait(1).to({rotation:299,y:211.5},0).wait(1).to({rotation:303.4,y:211.4},0).wait(1).to({rotation:307.8},0).wait(1).to({rotation:312.2,x:277.3},0).wait(1).to({rotation:316.6},0).wait(1).to({rotation:321,y:211.5},0).wait(1).to({rotation:325.4},0).wait(1).to({rotation:329.8},0).wait(1).to({rotation:334.2},0).wait(1).to({rotation:338.5},0).wait(1).to({rotation:342.9},0).wait(1).to({rotation:347.3},0).wait(1).to({rotation:351.7,y:211.6},0).wait(1).to({rotation:356.1,y:211.5},0).wait(1).to({rotation:360.5,x:277.4,y:211.6},0).wait(1).to({rotation:364.9,x:277.3,y:211.5},0).wait(1).to({rotation:369.3,y:211.6},0).wait(1).to({rotation:373.7,x:277.4},0).wait(1).to({rotation:378.1},0).wait(1).to({rotation:382.5},0).wait(1).to({rotation:386.9},0).wait(1).to({rotation:391.3},0).wait(1).to({rotation:395.7},0).wait(1).to({rotation:400.1},0).wait(1).to({rotation:404.5},0).wait(1).to({rotation:408.9},0).wait(1).to({rotation:413.3},0).wait(1).to({rotation:417.7},0).wait(1).to({rotation:422.1},0).wait(1).to({rotation:426.5},0).wait(1).to({rotation:430.9},0).wait(1).to({rotation:435.3},0).wait(1).to({rotation:439.7},0).wait(1).to({rotation:444.1},0).wait(1).to({rotation:448.5},0).wait(1).to({rotation:452.9},0).wait(1).to({rotation:457.3},0).wait(1).to({rotation:461.7},0).wait(1).to({rotation:466.1},0).wait(1).to({rotation:470.5,x:277.5},0).wait(1).to({rotation:474.8,x:277.4,y:211.5},0).wait(1).to({rotation:479.2,x:277.5,y:211.6},0).wait(1).to({rotation:483.6,x:277.4,y:211.5},0).wait(1).to({rotation:488},0).wait(1).to({rotation:492.4,y:211.6},0).wait(1).to({rotation:496.8,y:211.5},0).wait(1).to({rotation:501.2},0).wait(1).to({rotation:505.6},0).wait(1).to({rotation:510},0).wait(1).to({rotation:514.4},0).wait(1).to({rotation:518.8},0).wait(1).to({rotation:523.2},0).wait(1).to({rotation:527.6},0).wait(1).to({rotation:532},0).wait(1).to({rotation:536.4},0).wait(1).to({rotation:540.8,y:211.4},0).wait(1).to({rotation:545.2},0).wait(1).to({rotation:549.6,y:211.5},0).wait(1).to({rotation:554,y:211.4},0).wait(1).to({rotation:558.4},0).wait(1).to({rotation:562.8},0).wait(1).to({rotation:567.2},0).wait(1).to({rotation:571.6},0).wait(1).to({rotation:576},0).wait(1).to({rotation:580.4},0).wait(1).to({rotation:584.8},0).wait(1).to({rotation:589.2,x:277.5},0).wait(1).to({rotation:593.6},0).wait(1).to({rotation:598},0).wait(1).to({rotation:602.4},0).wait(1).to({rotation:606.8},0).wait(1).to({rotation:611.1},0).wait(1).to({rotation:615.5},0).wait(1).to({rotation:619.9},0).wait(1).to({rotation:624.3},0).wait(1).to({rotation:628.7},0).wait(1).to({rotation:633.1},0).wait(1).to({rotation:637.5,x:277.6},0).wait(1).to({rotation:641.9},0).wait(1).to({rotation:646.3},0).wait(1).to({rotation:650.7},0).wait(1).to({rotation:655.1},0).wait(1).to({rotation:659.5},0).wait(1).to({rotation:663.9},0).wait(1).to({rotation:668.3},0).wait(1).to({rotation:672.7,y:211.5},0).wait(1).to({rotation:677.1},0).wait(1).to({rotation:681.5},0).wait(1).to({rotation:685.9},0).wait(1).to({rotation:690.3},0).wait(1).to({rotation:694.7},0).wait(1).to({rotation:699.1},0).wait(1).to({rotation:703.5},0).wait(1).to({rotation:707.9,y:211.6},0).wait(1).to({rotation:712.3,y:211.5},0).wait(1).to({rotation:716.7},0).wait(1).to({rotation:721.1,y:211.6},0).wait(1).to({rotation:725.5,y:211.5},0).wait(1).to({rotation:729.9},0).wait(1).to({rotation:734.3,y:211.6},0).wait(1).to({rotation:738.7},0).wait(1).to({rotation:743},0).wait(1).to({rotation:747.4},0).wait(1).to({rotation:751.8},0).wait(1).to({rotation:756.2},0).wait(1).to({rotation:760.6,x:277.5},0).wait(1).to({rotation:765},0).wait(1).to({rotation:769.4},0).wait(1).to({rotation:773.8},0).wait(1).to({rotation:778.2},0).wait(1).to({rotation:782.6},0).wait(1).to({rotation:787},0).wait(1).to({rotation:791.4},0).wait(1).to({rotation:795.8},0).wait(1).to({rotation:800.2},0).wait(1).to({rotation:804.6,x:277.4},0).wait(1).to({rotation:809},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.8,323.1,568.3,177);
// library properties:
lib.properties = {
	id: 'C5A6CDF24F8A5C4591B06E6C494B8A9B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/puerta giratoria_atlas_.png", id:"puerta giratoria_atlas_"}
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
an.compositions['C5A6CDF24F8A5C4591B06E6C494B8A9B'] = {
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