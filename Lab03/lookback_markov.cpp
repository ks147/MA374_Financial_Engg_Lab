#include<bits/stdc++.h>
using namespace std;
using namespace std::chrono;
double look_back(double M,double S0,double r,double T,double sigma)
{
	double dt = (T/M), stockprice;
    double u = exp(sigma*sqrt(dt) + (r-sigma*sigma)*(dt));
    double d = exp(-sigma*sqrt(dt) + (r-sigma*sigma)*(dt));
    map< pair<double,double> , unordered_set<double> >mp;
    double p = (exp(r*dt)- d)/(u-d);  
    int init_price = S0*1000;
    S0 = init_price/1000.0;
    mp[{0,0}].insert(S0);

    for(int i=1;i<=int(M);i++)
    {
    	for(int j=0;j<=i;j++)
    	{
    		stockprice = S0*pow(u,i-j)*pow(d,j);
    		int x = (int)(stockprice*1000);
    		double y = x/1000.0;
    		stockprice = y;
    		bool flag = true;
    		if(j>0)
    		{
    			for(auto k:mp[{i-1,j-1}])
    			{
    				int x1 = (int)(k*1000);
    				double y1 = x1/1000.0;
    				k = y1;
    				if(stockprice <= k)
    				{
    					mp[{i,j}].insert(k);
    				}
    				else if(flag)
    				{
    					flag = false;
    					mp[{i,j}].insert(stockprice);
    				}
    			}
    		}
    		if(j < i)
    		{
    			for(auto k:mp[{i-1,j}])
    			{
    				int x1 = (int)(k*1000);
    				double y1 = x1/1000.0;
    				k = y1;
    				if(stockprice <= k)
    				{
    					mp[{i,j}].insert(k);
    				}
    				else if(flag)
    				{
    					flag = false;
    					mp[{i,j}].insert(stockprice);
    				}
    			}	
    		}
    	}
    }
    map< pair<double,double>,double> V;
    for(int i=0;i<=M;i++)
    {
    	for(auto j: mp[{M,i}]){
    		int temp1 = S0*pow(u, M-i)*pow(d, i)*1000;
    		
    		int temp2 = j*1000;
    		
    		double a,b;
    		a = temp1/1000.0;b = temp2/1000.0;

    	    V[{a, b}] = -a + b;
    	}
    }

    for(int i=M-1;i>=0;i--)
    {
    	for(int j=0;j<=i;j++)
    	{
    		for(auto k:mp[{i,j}])
    		{
    			int temp1 = S0*pow(u,i-j)*pow(d,j)*1000;
    			int temp2 = S0*pow(u,i-j)*pow(d,j)*u*1000;
    			int temp3 = S0*pow(u,i-j)*pow(d,j)*d*1000;
    			int temp4 = k*1000;
    			double a=temp1/1000.0,b = temp2/1000.0,c = temp3/1000.0,z=temp4/1000.0;
    			V[{a,z}] = (p*V[{b,max(b,z)}] + (1-p)*V[{c,z}])*exp(-r*dt);
    			
    		}
    		
    	}
    }
    
   
    
return V[{S0,S0}];
}

int main()
{
	auto start = high_resolution_clock::now();
	cout << "M = 5 : "<<look_back(5,100,0.08,1,0.2)<<"\n";
    auto stop = high_resolution_clock::now(); 
    auto duration = duration_cast<microseconds>(stop - start);
    cout<<"Time Taken:"<<duration.count()<<"ms"<<endl;
}

