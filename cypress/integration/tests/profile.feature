Feature: Validating Profile
  
        Scenario: Validating Profile
            Given Open URL
            And Enter emai "kashyapasha42@gmail.com" and password "asha"
            And Click on login button
            When user click on edit profile
            And update required data
            Then validate the required data is updated or not
           

            

            
            