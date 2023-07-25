
package healthinsurance;

public class IndividualPolicy extends Policy 
{

    //declaring the attributes/variables
    private String dayToDayExpenses;
    
    public double quote = 0.0;

    
    //creating the constructor
    public IndividualPolicy(String hospitalCover) {
        super(hospitalCover);
    }
    
    //calculate method which overrides the main calculate method in the policy class and calculates a discount
    public double calculate (Customer customer){
        quote = super.calculate(customer);
        return quote;
    }

    /**
     * @return the dayToDayExpenses
     */
    public String getDayToDayExpenses() {
        return dayToDayExpenses;
    }

    /**
     * @param dayToDayExpenses the dayToDayExpenses to set
     */
    public void setDayToDayExpenses(String dayToDayExpenses) {
        this.dayToDayExpenses = dayToDayExpenses;
    }

    
}
