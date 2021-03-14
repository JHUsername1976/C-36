class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("car racing game");
        title.position(150,80);

        var input = createInput("Name: ");
        var button = createButtom("Play!");
        input.position(300,160);
        button.position(300,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("hello "+name);
            greeting.position(300,220);
        })
    }




}