#include <bits/stdc++.h>
using namespace std;
using namespace std::chrono; 
double derv_price(double M, double init_price, double r, double T, double sig ){
    double t = (T/M), stockprice;
    double u = exp(sig*sqrt(t) + (r-sig*sig)*(t));
    double d = exp(-sig*sqrt(t) + (r-sig*sig)*(t));
    map< pair<double,double> , unordered_set<double> >mp;
    double p = (exp(r*t)- d)/(u-d);  
    mp[{0,0}].insert(init_price);
    int ans  = 0;

    for(int i = 1; i<= (M); i++)
    {
        
        for(int j = 0; j <= i; j++){
       
            stockprice = init_price*(pow(u, i-j)*pow(d, j));
            int x = (int)(stockprice*1000.0);
           
            double y = x/1000.0;
            stockprice = y;
            int flag = 1;
            
            if(j > 0){
                for( auto k: mp[{i-1, j-1 }]){
		            
		            int x1 = (int)(k*1000.0);
		            double y1 = x1/1000.0;
		            k = y1;
                    if(stockprice <= k){
                        mp[{i, j}].insert(k);
                    }
                    else if(flag){
                        flag = 0;
                        mp[{i, j}].insert(stockprice);
                    }
                    
                }

            }
            if(j < i){
                for( auto k: mp[{i-1, j }]){

		            int x1 = (int)(k*1000.0);
		            double y1 = x1/1000.0;
		            k = y1;
                    if(stockprice <= k){
                        mp[{i, j}].insert(k);
                    }
                    else if(flag){
                        flag = 0;
                        mp[{i, j}].insert(stockprice);
                    }
                    
                }
                
            }
           
            
            
        }
    }
    
  

    map< pair<double , double>, double>point;
    for(int i = 0; i<= M; i++){
        for(auto j: mp[{M,i}]){
        	int temp1 = init_price*pow(u, M-i)*pow(d, i)*1000;
        	
        	int temp2 = j*1000;
        	
        	double a,b;
        	a = temp1/1000.0;b = temp2/1000.0;

            point[{a, b}] = -a + b;
        }
    }

    for(int i = M-1; i>= 0; i--){
        for(int j = 0; j<=i; j++ ){
            for(auto k : mp[{i,j}]){
	            int temp1 = init_price*pow(u, i-j)*pow(d, j)*1000;
	        	int temp2 = k*1000;
	        	int temp3 = init_price*pow(u, i-j)*pow(d, j)*u*1000;
	 			int temp4 = init_price*pow(u, i-j)*pow(d, j)*d*1000;
	        	double a,b,c,d1;
	        	a = temp1/1000.0;b = temp2/1000.0;c = temp3/1000.0;d1 = temp4/1000.0;
	            point[{a, b}] = (p*point[{c, max(c, b)}] + (1-p)*point[{d1, b}])*exp(-r*t);
            }
        }
    } 
    
    return point[{init_price, init_price}];
}
int main()
{
    auto start = high_resolution_clock::now(); 
    cout << "M = 5 : "<<derv_price(5,100,0.08,1,0.2)<<"\n";
    auto stop = high_resolution_clock::now(); 
    auto duration = duration_cast<microseconds>(stop - start); 
    cout << "Time taken by function: "
         << duration.count() << " microseconds" << endl; 
         
    start = high_resolution_clock::now(); 
    cout << "M = 10 : "<<derv_price(10,100,0.08,1,0.2)<<"\n";
    stop = high_resolution_clock::now(); 
    duration = duration_cast<microseconds>(stop - start); 
    cout << "Time taken by function: "
         << duration.count() << " microseconds" << endl;
         
    start = high_resolution_clock::now();
    cout << "M = 25 : "<<derv_price(25,100,0.08,1,0.2)<<"\n";
    stop = high_resolution_clock::now(); 
    duration = duration_cast<microseconds>(stop - start); 
    cout << "Time taken by function: "
         << duration.count() << " microseconds" << endl;
         
    start = high_resolution_clock::now();
    cout << "M = 50 : "<<derv_price(50,100,0.08,1,0.2)<<"\n";
    stop = high_resolution_clock::now(); 
    duration = duration_cast<microseconds>(stop - start); 
    cout << "Time taken by function: "
         << duration.count() << " microseconds" << endl;
    return 0;
}
