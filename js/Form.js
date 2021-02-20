class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h1');
      this.reset = createButton('Reset');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Infinite Runner Game");
      this.title.position(displayWidth/2 - 120, 50);
      this.title.style('color', 'skyblue');
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 87, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.updatePersonsRank(0)
      });
  
    }
  }
  