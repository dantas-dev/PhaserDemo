demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#ff8000';
        addChangeStateEventListeners();
    },
    update: function(){} 
};