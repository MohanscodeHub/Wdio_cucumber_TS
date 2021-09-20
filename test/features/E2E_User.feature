Feature: Test End to  End User

    Scenario Outline: Validate End to End Get Single User


        Given I am on page <Pageurl>
        When I perform <Endpoint> user search
        And I make GET  <Endpoint> api  call
        Then I validate the search result

        Examples:
            | Pageurl                   | Endpoint     |
            | https://resttesttest.com/ | /api/users/2 |