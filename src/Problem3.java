import java.util.*;
public class Problem3
{
    public static void main(String[] args) {
        System.out.println("Hello World");
        long number =600851475143L;
        boolean primitive = true;
        List<Long> list = new ArrayList <Long>();
        for (long i = 2; i<number; i++){
            if(number % i == 0){
                for(long j =2 ; j<i ; j++){
                    if(i%j == 0 ){
                        primitive= false;

                    }
                }
                if(primitive){
                    list.add(i);
                }
            }
        }
        System.out.println(list);
    }
}