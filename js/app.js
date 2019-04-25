var positionX = 0;

var app = {

  
  
  init: function() {
    //console.log('init');
    
    // TODO
    
    app.drawBoard();
    
    document.querySelector('#launchScript').addEventListener('click', app.handleLaunchScriptButton);
   
   
    


    // Event listeners - TODO
  },

  moveForward: function(){
    var currentCell = document.querySelector('.cellCurrent');
    

    //console.log(positionX);
    
    // Avance vers la droite
    if (currentCell.classList.contains('cellCurrent-right')) {
      currentCell.classList.remove('cellCurrent', 'cellCurrent-right');
      currentCell.nextSibling.classList.add('cellCurrent', 'cellCurrent-right');  
      return positionX++;
    }

    // Avance vers la gauche

    else if (currentCell.classList.contains('cellCurrent-left')) {
      currentCell.classList.remove('cellCurrent', 'cellCurrent-left');
      currentCell.previousSibling.classList.add('cellCurrent', 'cellCurrent-left');
      return positionX--;  
    }

    // Avance vers le bas TODO

    /* 
    - si ma flèche est tournée vers bottom je veux avancer vers la div au même rang dans la row avec l'id ++
    */
    else if (currentCell.classList.contains('cellCurrent-bottom')) {
       
      //console.log(currentCell.childNodes);
      

          if ( positionX == 0 ) {
            currentCell.classList.remove('cellCurrent','cellCurrent-bottom');
            //console.log(currentCell.parentNode.nextSibling.firstChild);
            currentCell.parentNode.nextSibling.firstChild.classList.add('cellCurrent','cellCurrent-bottom');
  
          }

          else if (positionX == 1 ) {
            currentCell.classList.remove('cellCurrent','cellCurrent-bottom');
            //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling);
            currentCell.parentNode.nextSibling.firstChild.nextSibling.classList.add('cellCurrent','cellCurrent-bottom');
  
          }

          else if (positionX == 2 ) {
            currentCell.classList.remove('cellCurrent','cellCurrent-bottom');
            //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling);
            currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-bottom');

          }

          else if (positionX == 3 ) {
            currentCell.classList.remove('cellCurrent','cellCurrent-bottom');
            //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling);
            currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-bottom');
  
          }

          else if (positionX == 4 ) {
            currentCell.classList.remove('cellCurrent','cellCurrent-bottom');
            //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling);
            currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-bottom');
  
          }

          else if (positionX == 5 ) {
            currentCell.classList.remove('cellCurrent','cellCurrent-bottom');
            //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
            currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-bottom');
  
          }
    }

    // Avance vers le haut

    /*
    -si ma flèche est tournée avec le haut je veux avancer vers la div au même rang dans la row avec l'id --
    */
   else if (currentCell.classList.contains('cellCurrent-top')) {
       
    //console.log(currentCell.childNodes);
    

        if ( positionX == 0 ) {
          currentCell.classList.remove('cellCurrent','cellCurrent-top');
          //console.log(currentCell.parentNode.nextSibling.firstChild);
          currentCell.parentNode.previousSibling.firstChild.classList.add('cellCurrent','cellCurrent-top');

        }

        else if (positionX == 1 ) {
          currentCell.classList.remove('cellCurrent','cellCurrent-top');
          //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling);
          currentCell.parentNode.previousSibling.firstChild.nextSibling.classList.add('cellCurrent','cellCurrent-top');

        }

        else if (positionX == 2 ) {
          currentCell.classList.remove('cellCurrent','cellCurrent-top');
          //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling);
          currentCell.parentNode.previousSibling.firstChild.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-top');

        }

        else if (positionX == 3 ) {
          currentCell.classList.remove('cellCurrent','cellCurrent-top');
          //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling);
          currentCell.parentNode.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-top');

        }

        else if (positionX == 4 ) {
          currentCell.classList.remove('cellCurrent','cellCurrent-top');
          //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling);
          currentCell.parentNode.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-top');

        }

        else if (positionX == 5 ) {
          currentCell.classList.remove('cellCurrent','cellCurrent-top');
          //console.log(currentCell.parentNode.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
          currentCell.parentNode.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('cellCurrent','cellCurrent-top');

        }
  }
  

  },

  turnRight: function(){
    var currentCell = document.querySelector('.cellCurrent');

    // Si la flèche est tournée avec la droite elle se tourne vers le bas
    if (currentCell.classList.contains('cellCurrent-right')) {
      currentCell.classList.remove('cellCurrent-right');
      currentCell.classList.add('cellCurrent-bottom');  
    }

    // Si la flèche est tournée avec le bas elle se tourne vers la gauche
    else if (currentCell.classList.contains('cellCurrent-bottom')) {
      currentCell.classList.remove('cellCurrent-bottom');
      currentCell.classList.add('cellCurrent-left');  
    }

    // Si la flèche est tournée avec la gauche elle se tourne vers le haut
    else if (currentCell.classList.contains('cellCurrent-left')) {
      currentCell.classList.remove( 'cellCurrent-left');
      currentCell.classList.add( 'cellCurrent-top');  
    }

    // Si la flèche est tournée avec le heut elle se tourne vers la droite
    else if (currentCell.classList.contains('cellCurrent-top')) {
      currentCell.classList.remove( 'cellCurrent-top');
      currentCell.classList.add( 'cellCurrent-right');  
    }
    
  },

  turnLeft: function(){
    var currentCell = document.querySelector('.cellCurrent');
    if (currentCell.classList.contains('cellCurrent-right')) {
      currentCell.classList.remove('cellCurrent-right');
      currentCell.classList.add('cellCurrent-top');  
    }
    else if (currentCell.classList.contains('cellCurrent-bottom')) {
      currentCell.classList.remove('cellCurrent-bottom');
      currentCell.classList.add('cellCurrent-right');  
    }
    else if (currentCell.classList.contains('cellCurrent-left')) {
      currentCell.classList.remove('cellCurrent-left');
      currentCell.classList.add('cellCurrent-bottom');  
    }
    else if (currentCell.classList.contains('cellCurrent-top')) {
      currentCell.classList.remove('cellCurrent-top');
      currentCell.classList.add('cellCurrent-left');  
    }
    
  },

  drawBoard: function(){
    var board = document.getElementById('board');

    //console.log(board);
     for(var i=1; i<5; i++){
       var addDiv = document.createElement('div');
       addDiv.setAttribute('id','row'+i);
       addDiv.classList.add('cellRow')

       board.appendChild(addDiv);

       for(var j=0; j<6; j++){
         var addCell = document.createElement('div');
        addCell.classList.add('cell');

        addDiv.appendChild(addCell);

          if(i==1 && j==0){
            addCell.classList.add('cellStart');
            addCell.classList.add('cellCurrent')
            addCell.classList.add('cellCurrent-right')
          }
          if(i==4 && j==5){
            addCell.classList.add('cellEnd');
          }
        }

     }


  },

  handleLaunchScriptButton: function() {
    // TODO
    var scriptArea = document.getElementById('userCode').value;
    //console.log(scriptArea);
    // TODO : get all lines as an array
    var codeLines = scriptArea.split(' ');

    //console.log(codeLines);

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },
  codeLineLoop: function(codeLines, index) {
    // Getting currentLine
    var currentLine = codeLines[index];
    console.log(currentLine);
    if (currentLine == 'turnleft'){
      app.turnLeft();
    }
    else if (currentLine == 'turnright'){
      app.turnRight();
    }
    else if(currentLine == 'moveforward'){
      app.moveForward();
    }
    else{
      alert('Vous avez entré une mauvaise commande! Entrez une des commandes suivantes : moveforward, turnright, turnleft')
    }
    

    // Increment
    index++;

    // if still a line to interpret
    if (index < codeLines.length) {
      // Recall same method (=> make a loop)
      window.setTimeout(function() {
        app.codeLineLoop(codeLines, index);
      }, 1000);
    } else {
      window.setTimeout(function() {
        app.checkSuccess();
      }, 1000);
    }
  },
  checkSuccess: function() {
    var currentCell = document.querySelector('.cellCurrent');
    console.log(currentCell);
    // TODO display if the game is won or not
    if (currentCell.classList.contains('cellEnd')){
      alert('Vous avez gagné !')
    } else {
      alert('Vous avez perdu!')
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);
