demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#ffff00';
    console.log('Stage4');
        addChangeStateEventListeners();
    },
    update: function(){} 
};