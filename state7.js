demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#00ff40';
    console.log('Stage7');
        addChangeStateEventListeners();
    },
    update: function(){} 
};