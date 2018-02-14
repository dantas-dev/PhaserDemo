demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#bfff00';
    console.log('Stage5');
        addChangeStateEventListeners();
    },
    update: function(){} 
};