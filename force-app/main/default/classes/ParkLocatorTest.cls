@isTest
private class ParkLocatorTest {
    @isTest static void testCallout() {              
        // This causes a fake response to be generated
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        // Call the method that invokes a callout
        string countryName='India';
        string[] result = ParkLocator.country(CountryName);
        // Verify that a fake result is returned
        System.assertEquals(new List<string>{'India', 'USA'}, result); 
    }
}