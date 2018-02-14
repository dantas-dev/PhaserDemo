demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#ffbf00';
    console.log('Stage3');
        addChangeStateEventListeners();
    },
    update: function(){} 
};