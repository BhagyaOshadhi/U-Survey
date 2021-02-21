public class Problem6 {
    public static void main (String[]args){
        int number = 1006;
        long soSquares = 0L;
        long soSums = 0L;
        for(int i=1 ; i <=number; i++){
            soSquares +=(i*i);
            soSums += i;
        }
        soSums= soSums*soSums;

        if(soSums>soSquares){
            System.out.println(soSums-soSquares);
        }else{
            System.out.println(soSquares-soSums);
        }

    }
}

