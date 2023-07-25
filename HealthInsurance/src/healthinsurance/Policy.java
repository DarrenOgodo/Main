
package healthinsurance;

public class Policy {

    //declaring the variables 
    private String hospitalCover;

    private double cost;
    
    public double basequote = 200;
    
    public double finalquote = 0.0;

    
    //creating a constructor
    public Policy(String hospitalCover) {
        this.hospitalCover = hospitalCover;
    }

    /**
     * @return the hospitalCover
     */
    public String getHospitalCover() {
        return hospitalCover;
    }

    /**
     * @param hospitalCover the hospitalCover to set
     */
    public void setHospitalCover(String hospitalCover) {
        this.hospitalCover = hospitalCover;
    }

    /**
     * @return the cost
     */
    public double getCost() {
        return cost;
    }

    /**
     * @param cost the cost to set
     */
    public void setCost(double cost) {
        this.cost = cost;
    }

    /**
     *
     * @param customer
     * @return
     */
    
    
    //method to calculate customer's final quote
    public double calculate(Customer customer){
        
        //calculating quote based on gender 
        if (customer.getGender().equals("Male")){
            finalquote = basequote * 2;
        }
        else if (customer.getGender().equals("Female")){
            finalquote = basequote * 0.7;
        }
        
        
        
        //calculating quote based on age
        if (customer.getAge().equals("Under 35")){
            finalquote = finalquote + (finalquote * 0.2);
        }
        else if (customer.getAge().equals("35 to 55 Inclusive")){
            finalquote = finalquote + (finalquote * 0.4);
        } 
        else if (customer.getAge().equals("56 to 70 Inclusive")){
            finalquote = finalquote + (finalquote * 0.65);
        }
        else if (customer.getAge().equals("Over 70")){
            finalquote = 0.0;
        }
        
        
        
        
        //calculating quote based on health Conditions
        if (customer.getHealthConditions().size() > 0){
            
            //looping through the list of health conditions 
            for (int i=0; i<customer.getHealthConditions().size(); i++){
                
                if (customer.getHealthConditions().get(i).equals("Cardiovascular disease")){
                    finalquote = finalquote + (finalquote * 0.3);
                }
                if (customer.getHealthConditions().get(i).equals("Gastrointestinal")){
                    finalquote = finalquote + (finalquote * 0.1);
                }
                if (customer.getHealthConditions().get(i).equals("Infections")){
                    finalquote = finalquote + (finalquote * 0.25);
                }
            }
            
            
        }
        
        //calculating quote based on hospital cover
        if (hospitalCover.equals("Public Hospital")){
            finalquote = finalquote + 0.0;
        }
        else if (hospitalCover.equals("Selected Private Hospitals")){
            finalquote = finalquote + (finalquote * 0.2);
        }
        else if (hospitalCover.equals("Comprehensive Hospital Cover")){
            finalquote = finalquote + (finalquote * 0.3);
        }
        
        System.out.println("Total: €" + finalquote);
        
        
        return finalquote;
    
    }
    
}
