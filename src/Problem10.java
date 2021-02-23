public class Problem10 {
    public static void main(String[] args) {
        long sum = 0;
        for(long i = 2; i<=2000000 ; i++ ){
            boolean prime = true;
            for(long j=2; j<= i/2 ; j++){
                if(i%j==0){
                    prime = false;
                    break;
                }
            }
            if(prime){
                sum += i;
            }
        }
        System.out.println(sum);
    }
}
