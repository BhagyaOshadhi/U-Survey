

public class Problem9 {
    public static void main(String[] args) {
        for(int a =1; a<998; a++){
            for(int b =1; b<998; b++){
                int c = 1000-(a+b);
                if((a*a + b*b ) == c*c ){
                    System.out.println(a);
                    System.out.println(b);
                    System.out.println(c);
                    System.out.println(a*b*c);
                    System.exit(0);
                }
            }

        }

    }
}
