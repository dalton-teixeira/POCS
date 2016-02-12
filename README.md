# POCS
Frameworks 
  - _lodash
  - cucumber
  - yadda
  - mocha
  - cucumber-autocomplete
  - cucumber-step-into
  - jshint for atom
  - GraphQL

feature files
  - steps regex
    - support [action/checks]
    ** Given/And/Then/When can use same action/check
      - Action(PO.Element) perfome an operation upon a mapped element
      ** if elemenet is not mapped then throws error
        - Knows browser actions
        - Knows PO

- Steps/Actions/Checks
    - Must be generic
      - Only one for each action
        - Eg.: Only one Click action for all elements
        - Only one type action for all elements
    - Must be access all POs without coupling (PO dictionary created on app startup)
    - Receives PO as string as parameter, call the dictionary service to perform the operation (function with or without parameters) upon element.
    - Dictionary services has a try catch, error log, for an given operation (action function received with prameters like a given PO.Element, and others parameters like test to type.
    Action
      functionA = function(browser, PO.element, paramters){
        var ele = dict[PO.element]
        if ele is not null
        
        ele.click()
        ele.type(parameters)
      }
      Service.call(functionA)

    Service
      Call(func, browser, POE, parameters){
        try{func(browser, , POE, parameters);
        }catch(e){}
      }
    New Actions/steps/checks must not be increased among the system and it must be genric to work among several systems. 
    You need to do actions/steps/checks only once for all systems you need to automatize
    
    For each new page/system, you need to write feature file reusing all steps/ need to create new PO mappings structured.
    For a same system, several feature files will use same steps change only the step order/PO/Data

- Data repository
    - Operations
      - Assure data bulk (insert data dependencies avoiding unecessary insert/delete)
        - It is easier delete all data and insert, but if not possible then use complex logic to avoid it
          - Try getting, if not then try update, if not then insert. 
      - Pull data bulk (get data bulk to use to fill fields)

    - Working 
      - Assure execution prior to all features execution
      - Maybe data pull can work as servie where fills PO properties for each data
        - To use as PO properties on feature files

- Improve log file to have meanfull content to dubby guy be able to work upon framework

- PO (elements mappings / page structure)
  - Home
  - Shared
  - Login
    - Shared One
  - POS Object with disctionary containing all  POs structure
  - Always change URl PO change too, one PO for each URL  
  - Each PO has url and elemenents mappings


  * commom errors
    - Element not found
      - Actions should wait before perform an action
        - Implicit Wait of 3s / Implicit ajax wait and page load
        - Wait greather than it needs to be explicit with a command 
      - (PO structure / mapping)
    - No such step matched
      - Steps autocomplete
    - Tests failing on CI server
      - Verbose test reporter on Jenkis
