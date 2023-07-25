//install Minim Library
//importing required library
import ddf.minim.*;

//declaring the program variables
Minim minim;
AudioPlayer sound1;
AudioPlayer sound2;
String [] questions; //Array to store the questions from .txt document in data directory
                     //gotten from https://discourse.processing.org/t/quiz-game-need-help/3166/2

int count = 1, score = 0, lives = 3, correct = 0, wrong = 0;//"count" helps the program know what question to run.
float timer = 0.0;
PImage img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11;


void setup()
{
  size(600, 400);
  questions = loadStrings("questions.txt");//transferring questions into araay

  //loading all images for individual questions from
  //the data directory in the folder
  img1 = loadImage("mcd_2.jpg");
  img2 = loadImage("spider_2.jpg");
  img3 = loadImage("reptiles_2.jpg");
  img4 = loadImage("google_2.jpg");
  img5 = loadImage("lady_2.jpg");
  img6 = loadImage("balls_2.jpg");
  img7 = loadImage("btr_2.jpg");
  img8 = loadImage("fifa18_3.jpg");
  img9 = loadImage("ig_2.jpg");
  img10 = loadImage("epl_2.jpg");
  img11 = loadImage("phobia_2.jpg");

  //loading sound files
  minim = new Minim(this);
  sound1 = minim.loadFile("yes.mp3");
  sound2 = minim.loadFile("no.mp3");
}


void draw()
{
  //creating grid to house the options of each question
  background(240);
  stroke(0);
  strokeWeight(4);
  line(0, height*0.55, width, height*0.55);
  line(0, height*0.77, width, height*0.77);
  line(width*0.5, height*0.55, width*0.5, height);

  /*        D1
    condition statements that run depending if the user is right or
    wrong depending on their choice which will be gotten from the 
    mouseReleased() function (see D2 and bottom of program)*/
  if (correct == 1) {
    Correct();
  }
  if (wrong == 1) {
    Wrong();
  }

  //switch statements that lets the program know what question to run
  switch (count)
  {
  case 1:
    Question1();
    break;
  case 2:
    Question2();
    break;
  case 3:
    Question3();
    break;
  case 4:
    Question4();
    break;
  case 5:
    Question5();
    break;
  case 6:
    Question6();
    break;
  case 7:
    Question7();
    break;
  case 8:
    Question8();
    break;
  case 9:
    Question9();
    break;
  case 10:
    Question10();
    break;
  case 11:
    Question11();
    break;
  default:
    break;
  }
}

/*      D2
  This method takes in the value of count and uses that to decide whether the player has clicked on
  the correct or incorrect answer based on whatever value becomes assigned to the variables "correct"
  and "wrong" respectively. This function then returns the value of both variables to the draw method above
  which then decides to either to call the function that lets the player aware of the outcome of their choice.
  (see D1 again for better clarity);  
  https://forum.processing.org/one/topic/mouseclicked-and-if-statement.html
*/
void mouseReleased()
{
  //TOP LEFT
  if (count == 1 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 1 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 1 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    correct = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 1 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 2 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 2 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 2 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    correct = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 2 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 3 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 3 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 3 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    correct = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 3 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 4 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 4 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 4 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 4 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    correct = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 5 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    correct = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 5 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 5 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 5 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 6 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 6 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    correct = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 6 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 6 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 7 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 7 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 7 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 7 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    correct = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 8 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    correct = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 8 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 8 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 8 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 9 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 9 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    correct = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 9 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 9 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 10 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    correct = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 10 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 10 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 10 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }

  //TOP LEFT
  if (count == 11 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    wrong = 1;
    System.out.println("A");
  }
  //TOP RIGHT
  else if (count == 11 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.55) && mouseY<(height*0.77))
  {
    correct = 1;
    System.out.println("B");
  }
  //BOTTOM LEFT
  else if (count == 11 && mouseX>0 && mouseX<(width/2) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("C");
  }
  //BOTTOM RIGHT
  else if (count == 11 && mouseX>(width/2) && mouseX<(width) && mouseY>(height*0.77) && mouseY<height)
  {
    wrong = 1;
    System.out.println("D");
  }
}

/*
  methods that house the questions and their answers and related images
  and also displays the score and amount of lives the player has left 
*/

//Question 1
void Question1()
{
  image(img1, 230, 50);//display question's image
  fill(0);//text color
  textSize(25);//text size
  textAlign(CENTER);//text alignment
  text(questions[0], width/2, height/2);//positioning the questions
  textSize(20);//text size for answers
  text("1909", 145, 270);//multiple choice options
  text("1947", 440, 270);
  text("1955", 145, 360);
  text("1971", 440, 360);
  text("Lives: "+lives, 40, 20);//display the number of lives
  text("Score: "+score, 550, 20);//display the score
}

//Question 2
void Question2()
{
  image(img2, 230, 50);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[1], width/2, height/2);
  textSize(20);
  text("4", 145, 270);
  text("6", 440, 270);
  text("8", 145, 360);
  text("10", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 3
void Question3()
{
  image(img3, 230, 50);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[2], width/2, height/2);
  textSize(20);
  text("Komodo Dragon", 145, 270);
  text("Green Sea Turtle", 440, 270);
  text("Tomato Frog", 145, 360);
  text("King Cobra", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 4
void Question4()
{
  image(img4, 210, 50);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[3], width/2, height/2);
  textSize(20);
  text("1995", 145, 270);
  text("1993", 440, 270);
  text("2001", 145, 360);
  text("1998", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 5
void Question5()
{
  image(img5, 208, 44);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[4], width/2, height/2);
  textSize(20);
  text("Slyvia Plath", 145, 270);
  text("William Shakespeare", 440, 270);
  text("Oscar Wilde", 145, 360);
  text("Teresa Deevy", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 6
void Question6()
{
  image(img6, 210, 45);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[5], width/2, height/2);
  textSize(20);
  text("Baseball", 145, 270);
  text("Basketball", 440, 270);
  text("Rugby", 145, 360);
  text("American Football", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 7
void Question7()
{
  image(img7, 205, 50);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[6], width/2, height/2);
  textSize(20);
  text("David Bowie", 145, 270);
  text("Zayn Malik", 440, 270);
  text("Niall Horan", 145, 360);
  text("Logan Henderson", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 8
void Question8()
{
  image(img8, 210, 20);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[7], width/2, height/2);
  textSize(20);
  text("Cristiano Ronaldo", 145, 270);
  text("Lionel Messi", 440, 270);
  text("Shane Duffy", 145, 360);
  text("Kevin De Bruyne", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 9
void Question9()
{
  image(img9, 210, 30);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[8], width/2, height/2);
  textSize(20);
  text("2012", 145, 270);
  text("2010", 440, 270);
  text("2008", 145, 360);
  text("2013", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 10
void Question10()
{
  image(img10, 206, 50);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[9], width/2, height/2);
  textSize(20);
  text("Liverpool FC", 145, 270);
  text("Manchester city", 440, 270);
  text("Manchester United", 145, 360);
  text("Chelsea FC", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}

//Question 11
void Question11()
{
  image(img11, 213, 50);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text(questions[10], width/2, height/2);
  textSize(20);
  text("Ghosts", 145, 270);
  text("Mirrors", 440, 270);
  text("Facial Hair", 145, 360);
  text("Slugs", 440, 360);
  text("Lives: "+lives, 40, 20);
  text("Score: "+score, 550, 20);
}



/*
  method that lets the player know they are correct and 
  updates the score and moves to the next question 
  or ends the game, dependent on the situation
*/ 
void Correct()
{
  sound1.play();
  timer += 0.25;
  fill(0, 255, 0);
  textAlign(CENTER);
  textSize(30);
  text("CORRECT!", 500, 110);


  if (timer == 25) {
    count++;
    score++;
    correct = 0;
    timer = 0;
    sound1.pause();
    sound1.cue(0);
  }
  if (count == 11) {
    Finish_2();
  }
}

/*
  method that lets the player know they are wrong and 
  updates the score and moves to the next question 
  or ends the game, dependent on the situation
*/
void Wrong()
{
  sound2.play();
  timer += 0.25;
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(30);
  text("WRONG!", 500, 110);
  if (lives == 0)
  {
    Finish();
  }
  if (timer == 25 && lives != 0 && count != 11) {
    count++;
    lives--;
    wrong = 0;
    timer = 0;
    sound2.pause();
    sound2.cue(0);
  }
  else if (count == 11) {
    Finish();
  }
}


//method that ends the program
void Finish()
{
  timer += 0.15;
  fill(0, 0, 255);
  textAlign(CENTER);
  textSize(20);
  text("SCORE: "+score+"/11", 80, 100);
  text("GAME OVER!!!", 85, 130);
  if (timer == 89.200195)
  {
    exit();
  }
}

void Finish_2()
{
  timer += 0.15;
  fill(0, 0, 255);
  textAlign(CENTER);
  textSize(20);
  text("SCORE: "+(score+1)+"/11", 80, 100);
  text("GAME OVER!!!", 85, 130);
  if (timer == 89.200195)
  {
    exit();
  }
}
