import java.util.ArrayList;
import java.util.List;

public class Problem7 {
    public static void main (String[]args){
        List<Integer> list = new ArrayList<Integer>();
        list.add(2);
       for (int i =2; list.toArray().length<=10001;i++){
           boolean prime= true;
           for(int j = 2; j<i; j++){
               if(i%j==0){
                   prime=false;
               }
           }
           if(prime){
               list.add(i);
           }
       }
        System.out.println(list);
    }
}
