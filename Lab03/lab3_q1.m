S0 = 100;
K = 100;
M = 100;
T = 1;
r = 0.08;
sigma = 0.2;
del_t = T/M;
u = exp(sigma*sqrt(del_t) + (r-0.5*sigma*sigma)*del_t);
d = exp(-sigma*sqrt(del_t) + (r-0.5*sigma*sigma)*del_t);
American_Call(S0,K,M,T,r,u,d,sigma)
function price = American_Call(S0,K,M,T,r,u,d,sigma)
    del_t = T/M;
    price = 0;
    p = (exp(r*del_t) - d)/(u - d);
    q = 1 - p;
    V = zeros(M+1,M+1);
    for i=M:-1:0
        for j=0:i
        S = S0*u^(i-j)*d^(j); %Current stock price
            if i==M
                V(j+1,i+1) = max(S - K,0);
            else
                V(j+1,i+1) = max(exp(-r*del_t)*(p*V(j+1,i+2)+q*V(j+2,i+2)),S - K);
            end
        end
    end
     price = V(1,1);   
    
end