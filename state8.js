demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#0080ff';
    console.log('Stage8');
        addChangeStateEventListeners();
    },
    update: function(){} 
};