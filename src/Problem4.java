import java.lang.*;
//import java.io.*;
import java.util.*;

public class Problem4 {
    public static void main(String[] args) {
        System.out.println("Hello World");
        int largest = 0;
        for (int i =1000; i>0; i--){
            for (int j = 1000; j>0;j--){
                int product = i*j;
                String SProduct = String.valueOf( product );
                StringBuilder s = new StringBuilder(SProduct);
                String revers = s.reverse().toString();
                if (SProduct.equals(revers)){
//                    largest = Math.max(largest,product);
                    largest = largest<product? product:largest;
                }
            }
        }
        System.out.println(largest );
    }
}
