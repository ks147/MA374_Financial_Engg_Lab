function price = European_Put(S0,K,M,T,t,r,sigma)
    del_t = T/M;
    price = 0;
    u = exp(sigma*sqrt(del_t) + (r - 0.5*sigma*sigma)*del_t);
    d = u*exp(-2*sigma*sqrt(del_t));
    if(d < exp(r*del_t) && exp(r*del_t) < u)
        p = (exp(r*del_t) - d)/(u - d);
        q = 1 - p;
        ST = [];
        for i=0:M
            ST(i+1) = S0*(u^i)*(d^(M-i));
        end
        VT = max(K - ST,0);
        for i=0:M
            price = price+exp(-r*(T-t))*nchoosek(M,i)*(p^i)*(q^(M-i))*VT(i+1);
        end
     else
        fprintf('Arbitrage in the market\n\n');
     end
    
    
end