demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#ff4000';
    console.log('Stage1');
        
     addChangeStateEventListeners();
        
    },
    update: function(){} 
};