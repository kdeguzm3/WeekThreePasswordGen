# WeekThreePasswordGen
Third homework: password generator

## Password generator

Declare arrays of character types to be included in the password

Ask the user for a length of password, limit between 8 and 128

Validate user entry to see if it matches acceptable parameters:

If valid, generate password:

    *concatenate each array of the user's selected characters into a mixed array
    
    *Ensure at least 1 of each chosen character type goes into the password
    
    *pull random values from mixed array until requested length is reached
    
    *Display the generated password to the user
