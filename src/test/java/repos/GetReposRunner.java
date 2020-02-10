package repos;

import com.intuit.karate.junit5.Karate;

class GetReposRunner {
    
    @Karate.Test
    Karate testGetRepos() {
        return new Karate().feature("get_repos").relativeTo(getClass());
    }    

}
