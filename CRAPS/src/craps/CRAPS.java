/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package craps;

/**
 *
 * @author Darren
 */

//importing the needed module
import java.util.Scanner;
public class CRAPS 
{

    // method to roll two die and return the sum of the rolls 
    public int rollDice(){
       int roll_1 = (int)(Math.random()*(5)) + 1;
       int roll_2 = (int)(Math.random()*(5)) + 1;
       int diceRoll = roll_1 + roll_2;
       return diceRoll;
    }
    
    // method to integrate program logic
    public void play(){
        
        //printing welcome message and header
        System.out.println("\n      GAME OF CRAPS!!!    ");
        System.out.printf("\n%-5s %21s %n","New Roll","Outcome");
        System.out.println("------------------------------");
        
        //declaring variable to represent method
        int roll = rollDice();
        
        //conditional statements to decide if user wins or not
        if (roll ==  7 || roll == 11){
            System.out.printf("\n%-5d %25s %n",roll,"Nice Roll");
            System.out.println("\n------------------------------");
            System.out.println("YOU WIN!!!");
        }
        
        else if (roll == 2 || roll == 3 || roll == 12){
            System.out.printf("\n%-5d %25s %n",roll,"Bad Roll");
            System.out.println("\n------------------------------");
            System.out.println("You lose!");
        }
        
        else{
            
            int count = 0,point = roll;
            System.out.printf("\n%-5s %20d %n","POINT:",point);
            
            
            //iterating through a new set of rules for a new set of die rolls
            while (count >= 0 ){
                
                //rolling new die
                int new_roll = rollDice();
            
            
                if (new_roll == point){
                    System.out.printf("%-5d %25s %n",new_roll,"made point");
                    System.out.println("\n------------------------------");
                    System.out.println("YOU WIN!!!!");
                    break;
                }
                else if (new_roll == 7){
                    System.out.printf("%-5d %27s %n",new_roll,"lost with 7");
                    System.out.println("\n------------------------------");
                    System.out.println("You lose");
                    break;
                }
                else {
                    System.out.printf("%-5d %25s %n",new_roll,"No help");
                    count++;
                }
            }
            
        }
    } 

    
    
    
    
    //main method of program
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) 
    {
        // TODO code application logic here
        
        //assigning variable to scanner object
        Scanner input = new Scanner ( System.in );
        
        String replay;
        boolean keep_playing = true;
        
        
        // creating new CRAPS object
        CRAPS myGame = new CRAPS();
        
        //calling the play method 
        myGame.play();
        
        //iterating the main program if the user decides to continue playing
        while (keep_playing == true){
        
            //asking the user if they wish to play again
            System.out.print("\nDo you want to play again: ");
            replay = input.next();

            if (replay.toLowerCase().equals("yes") || replay.toLowerCase().equals("y")){
                keep_playing = true;
                myGame.play();
            }
            else{
                keep_playing = false;
            }


                
        }
        
    }
    
}
