S0 = 100;
K = 100;
T = 1;
M = 10;
r = 0.08;
sigma = 0.2;
asian(S0,T,K,r,sigma,M,1)

function [call_p put_p]=asian(S0,T,K,r,sigma,M,part)    
    delta= T/M;
    if(part==2)
        u= exp(sigma*sqrt(delta) + (r-0.5*sigma*sigma)*delta);
        d= exp(-sigma*sqrt(delta) + (r-0.5*sigma*sigma)*delta);
    end
    if(part==1)
        u= exp(sigma*sqrt(delta));
        d= exp(-sigma*sqrt(delta));
    end
    p= (exp(r*delta)-d)/(u-d);
    
    stock_price=zeros(M+1,pow2(M));
    stock_price(1,1)=S0;
    
    for i=1:M
        for j=1:(pow2(i-1))
            stock_price(i+1,(2*j)-1)=stock_price(i,j)*d;
            stock_price(i+1,2*j)=stock_price(i,j)*u;
        end
    end
    
    call_vals=zeros(M+1,pow2(M));
    put_vals=zeros(M+1,pow2(M));
    
    for i=1:pow2(M)
        avg=0;
        iforavg=i;
        for j=M+1:-1:1
            avg=avg+(stock_price(j,iforavg)/(M+1));
            iforavg=ceil(iforavg/2);
        end
        call_vals(M+1,i)=max(0,avg-K);
        put_vals(M+1,i)=max(0,K-avg);
    end
    
    for i=M:-1:1
        for j=1:pow2(i-1)
            call_vals(i,j)=exp(-r*delta)*(p*call_vals(i+1,2*j)+(1-p)*call_vals(i+1,(2*j)-1));
            put_vals(i,j)=exp(-r*delta)*(p*put_vals(i+1,2*j)+(1-p)*put_vals(i+1,(2*j)-1));
        end
    end
    
    call_p=call_vals(1,1);
    put_p=put_vals(1,1);
end
