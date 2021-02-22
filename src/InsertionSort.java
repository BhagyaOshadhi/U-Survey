public class InsertionSort {
    public static void main(String [] args){
        int [] num= {5,4,3,2,1,56,8,5,6};
        for(int i = 1; i<num.length; i++){
            int key = num[i];
            int j = i-1;
            while((j>-1)&& num[i]>key){
                num[j+1] = num[j];
                j=j-1;
            }
            num[j+1]=key;
        }
        System.out.println(num[0]);
        System.out.println(num[1]);
        System.out.println(num[2]);
        System.out.println(num[3]);
        System.out.println(num[4]);
    }
}
