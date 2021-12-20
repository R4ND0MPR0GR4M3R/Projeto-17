var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var moeda, moedaImg;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  moedaImg = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite(200,200);
//adicione uma imagem para a pista
path.addImage(pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY = -12
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(180,340,30,30);
//adicione uma animação de corrida para ele
boy.addAnimation("RUSBÉ",boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;

moedaG = new Group();
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }


  if (World.frameCount % 100 == 0) {
    moeda = createSprite(Math.round(random(110, 290)),0 , 10, 10);
    moeda.addImage(moedaImg);
    moeda.velocityY = 3;
    moeda.lifetime = 150;
    moeda.scale = 0.2;
    moedaG.add(moeda);
    }
  
    if (boy.isTouching(moedaG)){
    moedaG.destroyEach();
  }

  drawSprites();
  }


