class Solution {
    public int romanToInt(String s) {
        int number = 0, sum = 0, prev = 0;
        for ( int i = s.length()-1; i >= 0 ; i-- ){
            switch (s.charAt(i)) {
                case'I': number = 1; break;
                case'V': number = 5; break;
                case'X': number = 10; break;
                case'L': number = 50; break;
                case'C': number = 100; break;
                case'D': number = 500; break;
                case'M': number = 1000; break;
            }
        if (number < prev) sum -= number;
        else sum += number;
        prev = number;
        }
        return sum;
    }
};
/* switch statement and multiple variables */