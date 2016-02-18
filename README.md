# POCS
  * Test always with manager so far
  * Workaroud: Prior to start testing, perform login with M, B and E at google.
    * Create a login script for it
    
  *Jenkins
    *Schedule
    *Report 
  
  Test Data
    *Mappings 
      *Hard coded
        *Models properties are hasd coded data
      Filled from the database, database queries through sequelizejs
        Models properties are functions to database queries
    *Data generation
      *Models needed
      *Strategy to assure the data
        It runs as "given" steps.
        It runs on hooks
    
First: SQL inserting scripts to assure every scenario
So far: The data script are ran mannualy
