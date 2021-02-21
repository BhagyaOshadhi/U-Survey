import java.util.ArrayList;
import java.util.List;

public class Problem5 {

    public static void main(String[] args) {
        List <Integer> list = new ArrayList<Integer>();
        for (int i = 10; 1 < i; i --){
            int realI = i;
            List <Integer> primeList = new ArrayList<Integer>();
            for(int j=2; j<=i; j++){
                if(i%j == 0){
                    boolean prime = true;
                    for(int k =2; k<j; k++){
                        if(j%k == 0){
                            prime = false;
                        }
                    }
                    if(prime){
                       primeList.add(j);
                       i=i/j;
                    }
                }
                if(i==1){
                    i=realI;
                }
            }
            System.out.println(primeList);
        }
//        System.out.println(list);
    }
}
