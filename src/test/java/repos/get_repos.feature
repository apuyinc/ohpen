Feature: get repositories

  Background:
    * url baseUrl
    * configure headers = { 'Content-Type': 'application/json' }

#  Scenario: get public repos
#    Given path , usersUrl, 'apuyinc', reposUrl
#    When method get
#    Then status 200

# Scenario Outline: get repos where user is collaborator
#   Given path usersUrl, '<username>', reposUrl
#   And param type = 'member'
#   When method get
#   Then status 200
#   And match response[*].name contains '<repo_name>'

#   Examples:
#   | username  | repo_name  |
#   | apuyinc   | testOhpen  |

Scenario: Create a new repo with existing name
  Given path userUrl, reposUrl
  And header Authorization = 'Bearer ' + securityToken
  And request { name: 'Hello-World' }
  When method post

  Given path userUrl, reposUrl
  And header Authorization = 'Bearer ' + securityToken
  And request { name: 'Hello-World' }
  When method post
  Then status 422
  And match response contains { "message": "Repository creation failed." }
  And match response.errors[*].message contains "name already exists on this account"
