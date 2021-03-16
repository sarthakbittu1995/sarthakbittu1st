public class AccountAuraCtrl{
    @AuraEnabled
    public static List<Account> getAccountRecord()
   {
        List<Account> acclist=[Select id,Name from Account where createddate desc limit 10];
		return acclist;
    }
}