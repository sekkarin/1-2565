public class Person {
	private static String idCard;
	private static String fristName;
	private static String lastName;
	private static String birth;
	private static String address;
//	private static String religion;
	Person(String idCard,String fristName,String lastName,String birth,String address){
		Person.idCard = idCard;
		Person.fristName = fristName;
		Person.lastName = lastName;
		Person.birth = birth;
		Person.address = address;
	}
	public void disPlayFullName() {
		 System.out.println(fristName+" "+lastName);
	}
	
	public static void disPlayBirth() {
		 System.out.println(birth);
	}
	public void disPlayAddress() {
		 System.out.println(address);
	}
	public void changeName(String newname) {
		fristName = newname;
	}

}
