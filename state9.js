demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#ff00bf';
    console.log('Stage9');
        addChangeStateEventListeners();
    },
    update: function(){} 
};