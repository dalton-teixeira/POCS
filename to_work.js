C:\Users\ac-dteixeira\.atom\packages

fs = require 'fs'
path = require 'path'

propertyPrefixPattern = /(?:^|\[|\(|,|=|:|\s)\s*((?:And|Given|Then|When).*)$/

module.exports =
  selector: '.source.feature, .feature, given.js, then.js, when.js'
  filterSuggestions: true

  load: ->
    # Not used

  getSuggestions: ({bufferPosition, editor}) ->
    file = editor.getText()
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    @getCompletions(line, file)

  getSuggestions2: (textToFind, regexAsString, fullRegex, results) ->
    regexConcated = ""

    for part in regexAsString
      try
        if (regexConcated != "")
          regexConcated = regexConcated + part
        else
          regexConcated = part

        regexToMatch = new RegExp(regexConcated + "$")

        if (textToFind.match(regexToMatch))
            console.log("matched: " + fullRegex)

            return {
              "text":(fullRegex.replace /^\s+|\s+$/g, ""),
              score: null,
              sortScore: 1,
              replacementPrefix: "open",
              provider: null}

      catch e
        continue

    return null

  getCompletions: (line, file) ->
    thiz = this
    completions = []
    match =  propertyPrefixPattern.exec(line)?[1]

    return completions unless match

    results = []

    line = match
    resultsSoFar = results
    textToFind = line.replace /^(Given|When|Then|And)/, ""
    options =
      paths: ["**/steps/**/given.js",
              "**/steps/**/then.js",
              "**/steps/**/when.js"]
    regexPattern = new RegExp "(.given|.when|.then|.and)\(.*\)"

    atom.workspace.scan regexPattern, options, (stepFiles) ->
      for match in stepFiles.matches
        step = match.matchText.match(/\/([^/]*)/)

        if (step != null && step[1] != 'undefined')
          regexAsString = step[1]
          regexAsString = regexAsString.replace "$string", ".*"
          regexAsString = regexAsString.replace "$string", ".*"
          regexAsString = regexAsString.replace "$string", ".*"
          regexAsString = regexAsString.replace "  ", " "

          newOne = thiz.getSuggestions2(textToFind, regexAsString, step[1])

          if (newOne != null)

            results.push(newOne)

    regex = /(Given|And|When|Then)(.*)/g
    while (myRegexArray = regex.exec(file)) != null
      results.push({"text":myRegexArray[2].replace /^\s+|\s+$/g, ""})

    for feature in fs.readdirSync("#{@rootDirectory()}/features")
      continue unless /.feature/.test(feature)
      data = fs.readFileSync "#{@rootDirectory()}/features/#{feature}", 'utf8'
      while (myRegexArray2 = regex.exec(data)) != null
        results.push({"text":myRegexArray2[2].replace /^\s+|\s+$/g, ""})

    for step in fs.readdirSync("#{@rootDirectory()}/steps")
      regex = /(.given|.and|.when|.then)(.*)/g
      data = fs.readFileSync "#{@rootDirectory()}/steps/#{step}", 'utf8'
      console.debug(data)
      while (myRegexArray2 = regex.exec(data)) != null
        console.debug(myRegexArray2)
        results.push({"text":myRegexArray2[2].replace /^\s+|\s+$/g, ""})

    return  results



  rootDirectory: ->
    atom.project.rootDirectories[0].path

  checkMatches: (matches) ->
