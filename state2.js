var barrel,velocity = 1000,bullets,nextFire = 0,fireRate = 200,enemy,bullet,enemyGroup;

demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        //load images
        game.load.image('base','assets/sprites/cannonBase.png');
        game.load.image('barrel','assets/sprites/cannonBarrel.png');
        game.load.image('bullet','assets/sprites/bullet.png');
    },
    create: function(){
    game.stage.backgroundColor = '#d3d3d3';
        addChangeStateEventListeners();
        
        //add base
        var base = game.add.sprite(centerX,centerY,'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(0.4);
        
        //add bullets as a group
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet'); //(qnt,sprite)
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y',0.5);
        bullets.setAll('scale.x',0.85);        
        bullets.setAll('scale.y',0.85);        
        //add barrel
        barrel = game.add.sprite(centerX,centerY,'barrel');        
        barrel.anchor.setTo(0.3,0.5);
        barrel.scale.setTo(0.5);
        
        //add enemy
        enemy = game.add.sprite(100,200,'adam');
        game.physics.enable(enemy);
        
        //add enemy in group
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        for(var i = 0; i < 3; i++){
            enemyGroup.create(1300,350 * i + 100,'adam');
        }
        enemyGroup.setAll('anchor.x',0.5);
        enemyGroup.setAll('anchor.y',0.5);
        enemyGroup.setAll('scale.y',0.4);
        enemyGroup.setAll('scale.x',0.4);
        

        
    },
    update: function(){
        //set rotation to barrel
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        //call fire function if click mouse
        if(game.input.activePointer.isDown){
            this.fire();
           }
        
        //if bullet overlap enemy
        game.physics.arcade.overlap(bullets,enemy,this.hitEnemy);
        game.physics.arcade.overlap(bullets,enemyGroup,this.hitGroup);
    } ,
    
    fire: function(){
        if (game.time.now > nextFire) {
            nextFire = game.time.now + fireRate;
            console.log('firing');
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

            game.physics.arcade.moveToPointer(bullet, velocity);
            bullet.rotation = game.physics.arcade.angleToPointer(bullet);

        }
    },
    
    hitEnemy: function(){
        console.log('hit');
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(b,e){
        b.kill(); //bullet
        e.kill(); //enemyGroup
    }
};