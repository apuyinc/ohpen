import com.intuit.karate.junit5.Karate;

class AllTestsRunner {
    
    @Karate.Test
    Karate testAll() {
        return new Karate().relativeTo(getClass());
    }    

}
