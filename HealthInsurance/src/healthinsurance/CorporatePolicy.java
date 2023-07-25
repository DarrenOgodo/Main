
package healthinsurance;

public class CorporatePolicy extends Policy 
{
    
    //declaring the attributes/variables
    private double discount;
    
    private double quote;

    
    
    //creating a constructor
    public CorporatePolicy(String hospitalCover) {
        super(hospitalCover);
    }

    /**
     * @return the discount
     */
    public double getDiscount() {
        return discount;
    }

    /**
     * @param discount the discount to set
     */
    public void setDiscount(double discount) {
        this.discount = discount;
    }
    
    //calculate method which overrides the main calculate method in the policy class and calculates a discount
    public double calculate (Customer customer){
        quote = super.calculate(customer);
        quote = quote - (quote * 0.1);
        return quote;
    }
    
}
