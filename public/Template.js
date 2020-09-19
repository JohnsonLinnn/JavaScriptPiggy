$(document).ready(()=>{ // jQuery main
    console.log('jQ done')
	let stage = new createjs.Stage(canvas);
    let repo = new createjs.LoadQueue();
    stage.enableMouseOver();
    let gameStage=1;
    let switcher=1;
    let playerlife=4;
    let bagsnum = 30;
    let bags = new Array(bagsnum);
    let bagspicture = new Array(bagsnum);
    let bagsxray = new Array(bagsnum);
    let deads = new Array(4);
    let lifes = new Array(4);
    let timeout = new Array(bagsnum*3);
    repo.loadManifest([
        //cover
        {id:'cover',src:'./images/gameStage/cover/cover.png'},
        {id:'enter',src:'./images/gameStage/cover/enter.png'},
        {id:'enterhover',src:'./images/gameStage/cover/enterhover.png'},
        //intro
        {id:'intro',src:'./images/gameStage/introduction/intro.png'},
        {id:'intro2',src:'./images/gameStage/introduction/intro2.png'},
        {id:'intro3',src:'./images/gameStage/introduction/intro3.png'},
        {id:'next',src:'./images/gameStage/introduction/next.png'},
        {id:'nexthover',src:'./images/gameStage/introduction/nexthover.png'},
        {id:'start',src:'./images/gameStage/introduction/start.png'},
        {id:'starthover',src:'./images/gameStage/introduction/starthover.png'},
        //playing
        {id:'picked',src:'./images/gameStage/playing/picked.png'},
        {id:'wrongpicked',src:'./images/gameStage/playing/wrongpicked.png'},
        {id:'playing',src:'./images/gameStage/playing/playing.jpg'},
        {id:'track',src:'./images/gameStage/playing/track.png'},
        {id:'box',src:'./images/gameStage/playing/box.png'},
        {id:'monitor',src:'./images/gameStage/playing/monitor.png'},
        {id:'life',src:'./images/gameStage/playing/life.png'},
        {id:'dead',src:'./images/gameStage/playing/dead.png'},
        {id:'deadpig',src:'./images/gameStage/playing/deadpig.png'},
        //the bags
        //bagA
        {id:'Alook1',src:'./images/gameStage/playing/bags/bagA/luggageA-1.png'},
        {id:'Alook2',src:'./images/gameStage/playing/bags/bagA/luggageA-2.png'},
        {id:'Alook3',src:'./images/gameStage/playing/bags/bagA/luggageA-3.png'},
        {id:'Anormal1',src:'./images/gameStage/playing/bags/bagA/normalA-1.png'},
        {id:'Anormal2',src:'./images/gameStage/playing/bags/bagA/normalA-2.png'},
        {id:'Anormal3',src:'./images/gameStage/playing/bags/bagA/normalA-3.png'},
        {id:'Anormal4',src:'./images/gameStage/playing/bags/bagA/normalA-4.png'},
        {id:'Ainfected1',src:'./images/gameStage/playing/bags/bagA/infectedA-1.png'},
        {id:'Ainfected2',src:'./images/gameStage/playing/bags/bagA/infectedA-2.png'},
        {id:'Ainfected3',src:'./images/gameStage/playing/bags/bagA/infectedA-2.png'},
        //bagB
        {id:'Blook1',src:'./images/gameStage/playing/bags/bagB/luggageB-1.png'},
        {id:'Blook2',src:'./images/gameStage/playing/bags/bagB/luggageB-2.png'},
        {id:'Blook3',src:'./images/gameStage/playing/bags/bagB/luggageB-3.png'},
        {id:'Bnormal1',src:'./images/gameStage/playing/bags/bagB/normalB-1.png'},
        {id:'Bnormal2',src:'./images/gameStage/playing/bags/bagB/normalB-2.png'},
        {id:'Bnormal3',src:'./images/gameStage/playing/bags/bagB/normalB-3.png'},
        {id:'Bnormal4',src:'./images/gameStage/playing/bags/bagB/normalB-4.png'},
        {id:'Binfected1',src:'./images/gameStage/playing/bags/bagB/infectedB-1.png'},
        {id:'Binfected2',src:'./images/gameStage/playing/bags/bagB/infectedB-2.png'},
        {id:'Binfected3',src:'./images/gameStage/playing/bags/bagB/infectedB-3.png'},
        //bagC
        {id:'Clook1',src:'./images/gameStage/playing/bags/bagC/luggageC-1.png'},
        {id:'Clook2',src:'./images/gameStage/playing/bags/bagC/luggageC-2.png'},
        {id:'Clook3',src:'./images/gameStage/playing/bags/bagC/luggageC-3.png'},
        {id:'Cnormal1',src:'./images/gameStage/playing/bags/bagC/normalC-1.png'},
        {id:'Cnormal2',src:'./images/gameStage/playing/bags/bagC/normalC-2.png'},
        {id:'Cnormal3',src:'./images/gameStage/playing/bags/bagC/normalC-3.png'},
        {id:'Cnormal4',src:'./images/gameStage/playing/bags/bagC/normalC-4.png'},
        {id:'Cinfected1',src:'./images/gameStage/playing/bags/bagC/infectedC-1.png'},
        {id:'Cinfected2',src:'./images/gameStage/playing/bags/bagC/infectedC-2.png'},
        {id:'Cinfected3',src:'./images/gameStage/playing/bags/bagC/infectedC-3.png'},
        //bagD
        {id:'Dlook1',src:'./images/gameStage/playing/bags/bagD/luggageD-1.png'},
        {id:'Dlook2',src:'./images/gameStage/playing/bags/bagD/luggageD-2.png'},
        {id:'Dlook3',src:'./images/gameStage/playing/bags/bagD/luggageD-3.png'},
        {id:'Dnormal1',src:'./images/gameStage/playing/bags/bagD/normalD-1.png'},
        {id:'Dnormal2',src:'./images/gameStage/playing/bags/bagD/normalD-2.png'},
        {id:'Dnormal3',src:'./images/gameStage/playing/bags/bagD/normalD-3.png'},
        {id:'Dnormal4',src:'./images/gameStage/playing/bags/bagD/normalD-4.png'},
        {id:'Dinfected1',src:'./images/gameStage/playing/bags/bagD/infectedD-1.png'},
        {id:'Dinfected2',src:'./images/gameStage/playing/bags/bagD/infectedD-2.png'},
        {id:'Dinfected3',src:'./images/gameStage/playing/bags/bagD/infectedD-3.png'},
        //bagE
        {id:'Elook1',src:'./images/gameStage/playing/bags/bagE/luggageE-1.png'},
        {id:'Elook2',src:'./images/gameStage/playing/bags/bagE/luggageE-2.png'},
        {id:'Elook3',src:'./images/gameStage/playing/bags/bagE/luggageE-3.png'},
        {id:'Enormal1',src:'./images/gameStage/playing/bags/bagE/normalE-1.png'},
        {id:'Enormal2',src:'./images/gameStage/playing/bags/bagE/normalE-2.png'},
        {id:'Enormal3',src:'./images/gameStage/playing/bags/bagE/normalE-3.png'},
        {id:'Enormal4',src:'./images/gameStage/playing/bags/bagE/normalE-4.png'},
        {id:'Einfected1',src:'./images/gameStage/playing/bags/bagE/infectedE-1.png'},
        {id:'Einfected2',src:'./images/gameStage/playing/bags/bagE/infectedE-2.png'},
        {id:'Einfected3',src:'./images/gameStage/playing/bags/bagE/infectedE-3.png'},
        //failed
        {id:'fail',src:'./images/gameStage/failed/fail.png'},
        {id:'again',src:'./images/gameStage/failed/again.png'},
        {id:'againhover',src:'./images/gameStage/failed/againhover.png'},
        {id:'failbanner',src:'./images/gameStage/failed/failbanner.png'},
        //success
        {id:'promote',src:'./images/gameStage/succeed/win-12.png'},
        {id:'promotebanner',src:'./images/gameStage/succeed/promote-19.png'},
        //soundeffect
        {id:'correct',src:'./music/correct.mp3'},
        {id:'wrong',src:'./music/wrong.mp3'},
        {id:'mouseclick',src:'./music/mouse_click.mp3'},
        //music
        {id:'pigrain',src:'./music/pig_rain.mp3'},
        {id:'startmusic',src:'./music/start.mp3'},
        {id:'failmusic',src:'./music/fail.mp3'},
        {id:'playingmusic',src:'./music/gaming.mp3'},
        {id:'successmusic',src:'./music/success.mp3'}
    ]);
    repo.on('complete', draw);




    function setup() {
        console.log('setup done');
		// automatically update
		createjs.Ticker.on("tick", e => stage.update());
		createjs.Ticker.framerate = 60;
		//preloading images



        for(let i=0;i<bagsnum;i++){
            let bagtype=Math.floor(Math.random()*5);
            let baglook= Math.floor(Math.random()*3);
            let bagcontain= Math.floor(Math.random()*7);
            bags[i]={type:bagtype,look:baglook,contain:bagcontain,infected:0}
        }

	}

	function draw(){
        //initialize all music
        //sound effect
        let correct =repo.getResult('correct');
        let wrong = repo.getResult('wrong');
        let mouseClick = repo.getResult('mouseclick');
        //background music

        let failMusic = repo.getResult('failmusic');
        let playingMusic = repo.getResult('playingmusic');
        console.log('draw done');
    	if(gameStage ===1) {
           cover();
        }else if(gameStage === 2){
    	    intro();
		}else if(gameStage ===3){
           playing();
		}else if(gameStage ===4){
          failed();
		}else if(gameStage ===5){
          succeed();
		}
	}
	function cover(){
        let startMusic = repo.getResult('startmusic');
        startMusic.play();
        let bacground = new createjs.Bitmap(repo.getResult('cover'));
        bacground.scaleX=0.24;
        bacground.scaleY=0.24;
        stage.addChild(bacground);
        //
        let enter = new createjs.Bitmap(repo.getResult('enter'));
        enter.x=939;
        enter.y=720;
        stage.addChild(enter);
        //加入'下一個'按鈕hover物件
        let enterhover = new createjs.Bitmap(repo.getResult('enterhover'));
        enterhover.x=939;
        enterhover.y=720;
        //eventlistener
        enter.addEventListener("mouseover",hover);
        enter.addEventListener("mouseout",hoverout);
        enter.addEventListener("click",press);
        function hover(){
            stage.addChild(enterhover);
        }
        function hoverout(){
            stage.removeChild(enterhover);
        }
        function press(){
           gameStage=2;
            stage.removeChild(enter);
            startMusic.pause();
            startMusic.currentTime=0;
            draw();
        }
    }
    function intro(){
        //切換
        let startMusic = repo.getResult('startmusic');

        startMusic.play();
            if (switcher === 1) {
                //加入底圖
                let bacground = new createjs.Bitmap(repo.getResult('intro'));
                bacground.scaleX = 0.24;
                bacground.scaleY = 0.24;
                stage.addChild(bacground);
                //加入’下一個’按鈕物件
                let next = new createjs.Bitmap(repo.getResult('next'));
                next.x=618;
                next.y=724;
                stage.addChild(next);
                //加入'下一個'按鈕hover物件
                let nexthover = new createjs.Bitmap(repo.getResult('nexthover'));
                nexthover.x=618;
                nexthover.y=724;
                //eventlistener
                next.addEventListener("mouseover",hover);
                next.addEventListener("mouseout",hoverout);
                next.addEventListener("click",press);
                function hover(){
                    stage.addChild(nexthover);
                }
                function hoverout(){
                    stage.removeChild(nexthover);
                }
                function press(){
                    switcher=2;
                    stage.removeChild(next);

                    draw();
                }

            } else if (switcher === 2) {

                let bacground = new createjs.Bitmap(repo.getResult('intro2'));
                bacground.scaleX = 0.24;
                bacground.scaleY = 0.24;
                stage.addChild(bacground);
                //加入’下一個’按鈕物件
                let next = new createjs.Bitmap(repo.getResult('next'));
                next.x=906;
                next.y=738;
                stage.addChild(next);
                //加入'下一個'按鈕hover物件
                let nexthover = new createjs.Bitmap(repo.getResult('nexthover'));
                nexthover.x=906;
                nexthover.y=741;
                //eventlistener
                next.addEventListener("mouseover",hover);
                next.addEventListener("mouseout",hoverout);
                next.addEventListener("click",press);
                function hover(){
                    stage.addChild(nexthover);
                }
                function hoverout(){
                    stage.removeChild(nexthover);
                }
                function press(){
                    switcher=3;
                    stage.removeChild(next);
                    draw();
                }
            } else if (switcher === 3) {
                let bacground = new createjs.Bitmap(repo.getResult('intro3'));
                bacground.scaleX = 0.24;
                bacground.scaleY = 0.24;
                stage.addChild(bacground);
                let start = new createjs.Bitmap(repo.getResult('start'));
                start.x=922;
                start.y=722;
                stage.addChild(start);
                //加入'下一個'按鈕hover物件
                let starthover = new createjs.Bitmap(repo.getResult('starthover'));
                starthover.x=922;
                starthover.y=722;
                //eventlistener
                start.addEventListener("mouseover",hover);
                start.addEventListener("mouseout",hoverout);
                start.addEventListener("click",press);
                function hover(){
                    stage.addChild(starthover);
                }
                function hoverout(){
                    stage.removeChild(starthover);
                }
                function press(){
                  gameStage=3;
                    stage.removeChild(start);
                    stage.removeAllChildren();
                    startMusic.pause();
                    startMusic.currentTime=0;
                    draw();
                }
            }
    }

    function playing(){
        console.log('playing started');
        let playingMusic = repo.getResult('playingmusic');
        playingMusic.play();
        let correctSound = repo.getResult('correct');
        let wrongSound = repo.getResult('wrong');
        //initialize background
        let background = new createjs.Bitmap(repo.getResult('playing'));
        background.scaleX=0.24;
        background.scaleY=0.24;
        stage.addChild(background);
        console.log('background drawing done')
        let track = new createjs.Bitmap(repo.getResult('track'));
        track.scaleX=0.24;
        track.scaleY=0.24;
        track.x=-1200;
        track.y=600;
        stage.addChild(track);
        createjs.Tween.get(track,{loop:true}).to({x:-200,y:600},10000);
        console.log('track drawing done')
        //give bag picture
        for(let i=0;i<bagsnum;i++){
            if(bags[i].type===0){
                if(bags[i].look===0){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Alook1'));
                }else if(bags[i].look===1){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Alook2'));
                }else if(bags[i].look===2){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Alook3'));
                }
            }else if(bags[i].type===1){
                if(bags[i].look===0){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Blook1'));
                }else if(bags[i].look===1){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Blook2'));
                }else if(bags[i].look===2){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Blook3'));
                }
            }else if(bags[i].type===2){
                if(bags[i].look===0){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Clook1'));
                }else if(bags[i].look===1){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Clook2'));
                }else if(bags[i].look===2){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Clook3'));
                }
            }else if(bags[i].type===3){
                if(bags[i].look===0){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Dlook1'));
                }else if(bags[i].look===1){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Dlook2'));
                }else if(bags[i].look===2){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Dlook3'));
                }
            }else if(bags[i].type===4){
                if(bags[i].look===0){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Elook1'));
                }else if(bags[i].look===1){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Elook2'));
                }else if(bags[i].look===2){
                    bagspicture[i]=new createjs.Bitmap(repo.getResult('Elook3'));
                }
            }

        }
        console.log('putting bag picture into array done')
        //draw bags on the track
        for(let i=0;i<bagsnum;i++) {
            bagspicture[i].scaleX = 0.24;
            bagspicture[i].scaleY = 0.24;
            bagspicture[i].x = -200-i*200;
            bagspicture[i].y = 550;
            createjs.Tween.get(bagspicture[i], {loop: false}).to({x: 1400, y: 550}, 16000+i*2000);
            stage.addChild(bagspicture[i]);
        }
        console.log('bags putting done')

        //xray
        let box = new createjs.Bitmap(repo.getResult('box'));
        box.scaleX=0.24;
        box.scaleY=0.24;
        stage.addChild(box);
         let monitor = new createjs.Bitmap(repo.getResult('monitor'));
         monitor.scaleX=0.24;
         monitor.scaleY=0.24;
         stage.addChild(monitor);
        console.log('xray  mechine drawing done')

       // draw xray pic
        for(let i=0;i<bagsnum;i++){
            if(bags[i].type===0){
                if(bags[i].contain===0){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Anormal1'));
                }else if(bags[i].contain===1){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Anormal2'));
                }else if(bags[i].contain===2){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Anormal3'));
                }else if(bags[i].contain===3){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Anormal4'));
                }else if(bags[i].contain===4){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Ainfected1'));
                    bags[i].infected=1;
                }else if(bags[i].contain===5){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Ainfected2'));
                    bags[i].infected=1;
                }else if(bags[i].contain===6){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Ainfected2'));
                    bags[i].infected=1;
                }
            }else if(bags[i].type===1){
                if(bags[i].contain===0){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Bnormal1'));
                }else if(bags[i].contain===1){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Bnormal2'));
                }else if(bags[i].contain===2){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Bnormal3'));
                }else if(bags[i].contain===3){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Bnormal4'));
                }else if(bags[i].contain===4){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Binfected1'));
                    bags[i].infected=1;
                }else if(bags[i].contain===5){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Binfected2'));
                    bags[i].infected=1;
                }else if(bags[i].contain===6){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Binfected3'));
                    bags[i].infected=1;
                }
            }else if(bags[i].type===2){
                if(bags[i].contain===0){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cnormal1'));
                }else if(bags[i].contain===1){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cnormal2'));
                }else if(bags[i].contain===2){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cnormal3'));
                }else if(bags[i].contain===3){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cnormal4'));
                }else if(bags[i].contain===4){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cinfected1'));
                    bags[i].infected=1;
                }else if(bags[i].contain===5){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cinfected2'));
                    bags[i].infected=1;
                }else if(bags[i].contain===6){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Cinfected3'));
                    bags[i].infected=1;
                }
            }else if(bags[i].type===3){
                if(bags[i].contain===0){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dnormal1'));
                }else if(bags[i].contain===1){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dnormal2'));
                }else if(bags[i].contain===2){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dnormal3'));
                }else if(bags[i].contain===3){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dnormal4'));
                }else if(bags[i].contain===4){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dinfected1'));
                    bags[i].infected=1;
                }else if(bags[i].contain===5){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dinfected2'));
                    bags[i].infected=1;
                }else if(bags[i].contain===6){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Dinfected3'));
                    bags[i].infected=1;
                }
            }else if(bags[i].type===4){
                if(bags[i].contain===0){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Enormal1'));
                }else if(bags[i].contain===1){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Enormal2'));
                }else if(bags[i].contain===2){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Enormal3'));
                }else if(bags[i].contain===3){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Enormal4'));
                }else if(bags[i].contain===4){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Einfected1'));
                    bags[i].infected=1;
                }else if(bags[i].contain===5){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Einfected2'));
                    bags[i].infected=1;
                }else if(bags[i].contain===6){
                    bagsxray[i]=new createjs.Bitmap(repo.getResult('Einfected3'));
                    bags[i].infected=1;
                }
            }
        }
        console.log('putting xraybag picture into array done');
        //adding icon for clicking on xray pic
        let picked = new createjs.Bitmap(repo.getResult('picked'));
        let wrongpicked = new createjs.Bitmap(repo.getResult('wrongpicked'));
        picked.scaleX = 0.24;
        picked.scaleY = 0.24;
        picked.x=-150;
        picked.y=50;
        wrongpicked.scaleX = 0.24;
        wrongpicked.scaleY = 0.24;
        wrongpicked.x=-150;
        wrongpicked.y=50;

        //adding xray pic to canvas
        for(let i=0;i<bagsnum;i++) {
            bagsxray[i].scaleX = 0.4;
            bagsxray[i].scaleY = 0.4;
            bagsxray[i].x = 670;
            bagsxray[i].y = 500;
            timeout[i]=setTimeout(function(){
                stage.addChild(bagsxray[i]);
                console.log('vicky');}
                ,7000+i*2000);
            bagsxray[i].addEventListener("click",showResult);
            function showResult(){
                if(bags[i].infected===1){
                    stage.addChild(picked);
                    correctSound.play();
                    bags[i].infected=0;
                    setTimeout(function(){
                        stage.removeChild(picked);
                    },1000);
                    //correct.play();
                }else if(bags[i].infected===0){
                    stage.addChild(wrongpicked)
                    wrongSound.play();
                    setTimeout(function(){
                        stage.removeChild(wrongpicked);
                    },1000);
                }
            }
            //
        }

        lifesdetector();
        successDetector();

        for(let i=0;i<bagsnum;i++) {
           timeout[i+60]= setTimeout(function(){
                 if(bags[i].infected===1){
                     console.log('sad');
                     playerlife --;
                     let deadPig =new createjs.Bitmap(repo.getResult('deadpig'));
                     deadPig.scaleX=0.4;
                     deadPig.scaleY=0.4;
                     deadPig.x=1200;
                     deadPig.y=400;
                     createjs.Tween.get(deadPig,{loop:false}).to({x:600,y:-300},3000);
                     stage.addChild(deadPig);

                 }
                lifesdetector();
            },2000*i+14000);
        }

        function lifesdetector() {
            for (let i = 0; i < playerlife; i++) {
                lifes[i] = new createjs.Bitmap(repo.getResult('life'));
                lifes[i].x = i * 110;
                lifes[i].scaleX = 0.24;
                lifes[i].scaleY = 0.24
                stage.addChild(lifes[i]);
            }
            for (let i = 0; i < 5 - playerlife; i++) {
                deads[i] = new createjs.Bitmap(repo.getResult('dead'))
                deads[i].x = 440 - i * 110;
                deads[i].scaleX = 0.24;
                deads[i].scaleY = 0.24
                stage.addChild(deads[i]);
            }
            if(playerlife===0){
                gameCleanup();
                gameInitial();
                playingMusic.pause();
                playingMusic.currentTime=0;
                gameStage=4;
                draw();
            }
        }
        function successDetector(){
            timeout[200]=setTimeout(function(){
                if(playerlife>0){
                    gameCleanup();
                    gameInitial();
                    console.log('victory')
                    playingMusic.pause();
                    playingMusic.currentTime=0;
                    gameStage=5;
                    draw();
                }
                },12000+bagsnum*2000);

        }
        function gameCleanup(){
            bags.splice(0,60);
            bagsxray.splice(0,60);
            bagspicture.splice(0,60);
            lifes.splice(0,4);
            deads.splice(0,4);
        }
        function gameInitial(){
            bagsnum = 59;
            bags = new Array(bagsnum);
            bagspicture = new Array(bagsnum);
            bagsxray = new Array(bagsnum);
            deads = new Array(4);
            lifes = new Array(4);
            for(let i=0;i<bagsnum;i++){
                let bagtype=Math.floor(Math.random()*5);
                let baglook= Math.floor(Math.random()*3);
                let bagcontain= Math.floor(Math.random()*7);
                bags[i]={type:bagtype,look:baglook,contain:bagcontain,infected:0}
            }
            for(let i=0;i<300;i++){
                clearTimeout(timeout[i]);
                console.log('cleanvicky')
            }
        }
    }

    function failed(){
        let failMusic = repo.getResult('failmusic');
        failMusic.play();
        console.log("faileddone");
        let background = new createjs.Bitmap(repo.getResult('fail'));
        background.scaleX=0.24;
        background.scaleY=0.24;
        stage.addChild(background);
        let failBanner = new createjs.Bitmap(repo.getResult('failbanner'));
        failBanner.x=1200;
        failBanner.y=500;
        createjs.Tween.get(failBanner,{loop:true}).to({x:-400,y:500},8000);
        stage.addChild(failBanner);
        let promoteBanner =new createjs.Bitmap(repo.getResult('promotebanner'));
        setTimeout(function(){
            stage.addChild(promoteBanner);
            },8000
        )
        setTimeout(function(){
                stage.removeChild(promoteBanner);
            },16000
        )

        let again = new createjs.Bitmap(repo.getResult('again'));
        let againhover = new createjs.Bitmap(repo.getResult('againhover'))
        again.x=912;
        again.y=760;
        againhover.x=912;
        againhover.y=760;
        stage.addChild(again);
        again.addEventListener("mouseover",hover);
        again.addEventListener("mouseout",hoverout);
        again.addEventListener("click",press);
        function hover(){
            stage.addChild(againhover);
        }
        function hoverout(){
            stage.removeChild(againhover);
        }
        function press(){
            stage.addChild(againhover);
            playerlife=5;
            gameStage=2;
            switcher=1;
            bagsnum = 59;
            bags = new Array(bagsnum);
            bagspicture = new Array(bagsnum);
            bagsxray = new Array(bagsnum);
            deads = new Array(4);
            lifes = new Array(4);
            for(let i=0;i<bagsnum;i++){
                let bagtype=Math.floor(Math.random()*5);
                let baglook= Math.floor(Math.random()*3);
                let bagcontain= Math.floor(Math.random()*7);
                bags[i]={type:bagtype,look:baglook,contain:bagcontain,infected:0}
            }
            for(let i=0;i<300;i++){
                clearTimeout(timeout[i]);
                console.log('cleanvicky')
            }
            failMusic.pause();
            failMusic.currentTime=0;
            draw();
            stage.removeChild(again);
            stage.removeChild(againhover);
        }


        for(let i=0;i<bagsnum;i++){
            stage.removeChild(bagsxray[i]);
            stage.removeChild(bagspicture[i]);
        }
        for(let i =0;i<5;i++){
            stage.removeChild(lifes[i]);
            stage.removeChild(deads[i]);

        }
    }
	function succeed(){
        let background = new createjs.Bitmap(repo.getResult('promote'));
        //background.scaleX=0.24;
        //background.scaleY=0.24;
        stage.addChild(background);
        let successMusic=repo.getResult('successmusic');
        successMusic.play();
        let promoteBanner =new createjs.Bitmap(repo.getResult('promotebanner'));
        setTimeout(function(){
                stage.addChild(promoteBanner);
            },3000
        )
        setTimeout(function(){
                stage.removeChild(promoteBanner);
            },10000
        )
    }
	setup();

	
});






