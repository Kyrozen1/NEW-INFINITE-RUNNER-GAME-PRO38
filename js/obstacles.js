function obstacles1(){
    var x = people[0].x+700;
    if(people[0].x%1500===0){
    obstacle1 = createSprite(x, 420, 10, 10);
    obstacle1.addImage("obstacle1", obstacleImage);
    obstacle1.scale=0.4;
    obstacle1Group.add(obstacle1);
    }
  }
  
  function obstacles2(){
    var x = people[0].x+1400;
    if(people[0].x%1500===0){
    obstacle2 = createSprite(x, 625, 10, 10);
    obstacle2.addImage("obstacle2", obstacle2Image);
    obstacle2.scale=0.4;
    obstacle2Group.add(obstacle2);
    }
  }

  function coins1(){
    var x = people[0].x+900;
    if(people[0].x%600===0){
    coin1 = createSprite(x, 520, 20, 20);
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: coin1.y = 390;
      break;
      case 2: coin1.y = 520;
      break;
      case 3: coin1.y = 650;
      break;
    }
    coin1.addImage("coin1", coinImage);
    coin1.scale=0.7
    score1Group.add(coin1);
    return coin1;
    }
  }

  function obstacles3(){
    var x = people[1].x+700;
    if(people[1].x%1500===0){
    obstacle3 = createSprite(x, 420, 10, 10);
    obstacle3.addImage("obstacle3", obstacleImage);
    obstacle3.scale=0.4;
    obstacle3Group.add(obstacle3);
    }
  }
  
  function obstacles4(){
    var x = people[1].x+1400;
    if(people[1].x%1500===0){
    obstacle4 = createSprite(x, 625, 10, 10);
    obstacle4.addImage("obstacle4", obstacle2Image);
    obstacle4.scale=0.4;
    obstacle4Group.add(obstacle4);
    }
  }

  function coins2(){
    var x = people[1].x+900;
    if(people[1].x%600===0){
    coin2 = createSprite(x, 520, 20, 20);
    var rand = Math.round(random(1, 3));
    switch(rand){
      case 1: coin2.y = 390;
      break;
      case 2: coin2.y = 520;
      break;
      case 3: coin2.y = 650;
      break;
    }
    coin2.addImage("coin2", coin2Image);
    coin2.scale=0.7
    score2Group.add(coin2);
    return coin2;
    }
  }