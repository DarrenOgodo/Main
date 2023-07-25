
package healthinsurance;

//importing the needed library
import java.util.List;

public class Customer {

    //declaring the attributes
    private String firstName;

    private String surname; 

    private String gender;

    private String age;

    private List healthConditions;

    private Policy policy;

    
    
    //default constructor
    public Customer (){
    }
    
    
    //constructor passing in the attributes above
    public Customer(String firstName, String surname, String gender, String age, List healthConditions) {
        this.firstName = firstName;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
        this.healthConditions = healthConditions;
    }

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return the surname
     */
    public String getSurname() {
        return surname;
    }

    /**
     * @param surname the surname to set
     */
    public void setSurname(String surname) {
        this.surname = surname;
    }

    /**
     * @return the gender
     */
    public String getGender() {
        return gender;
    }

    /**
     * @param gender the gender to set
     */
    public void setGender(String gender) {
        this.gender = gender;
    }

    /**
     * @return the age
     */
    public String getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(String age) {
        this.age = age;
    }

    /**
     * @return the healthConditions
     */
    public List getHealthConditions() {
        return healthConditions;
    }

    /**
     * @param healthConditions the healthConditions to set
     */
    public void setHealthConditions(List healthConditions) {
        this.healthConditions = healthConditions;
    }

    /**
     * @return the policy
     */
    public Policy getPolicy() {
        return policy;
    }

    /**
     * @param policy the policy to set
     */
    public void setPolicy(Policy policy) {
        this.policy = policy;
    }
    
    
    
    
    
}
