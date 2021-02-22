public class BubbleSort {
    public static void main(String[]args){
        int [] num= {5,4,3,2,1};
         for (int i =num.length; i >0; i--){
            for(int j=1;j<i;j++){
                if (num[j - 1] > num[j]) {
                    int temp = num[j];
                    num[j] = num[j - 1];
                    num[j - 1] = temp;
                }
            }
         }
        System.out.println(num[0]);
        System.out.println(num[1]);
        System.out.println(num[2]);
        System.out.println(num[3]);
        System.out.println(num[4]);
    }
}

