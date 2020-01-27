clc;
S0 = 100;
K = 105;
T = 5;
r = 0.05;
sigma = 0.3;
M = 20;


y = European_Call_2(S0,K,M,T,r,sigma);
y = y';
fprintf('CALL OPTION PRICES\n')
fprintf('Option Price at t=0 :\n')
disp(y(1,1))

fprintf('Option Price at t=0.5 :\n')
disp(y(1:3,3))

fprintf('Option Price at t=1 :\n')
disp(y(1:5,5))

fprintf('Option Price at t=1.5 :\n')
disp(y(1:7,7))

fprintf('Option Price at t=3 :\n')
disp(y(1:13,13))

fprintf('Option Price at t=4.5 :\n')
disp(y(1:19,19))


fprintf('\n\n');
y = European_Put_2(S0,K,M,T,r,sigma);
y = y';
fprintf('PUT OPTION PRICES\n')
fprintf('Option Price at t=0 :\n')
disp(y(1,1))

fprintf('Option Price at t=0.5 :\n')
disp(y(1:3,3))

fprintf('Option Price at t=1 :\n')
disp(y(1:5,5))

fprintf('Option Price at t=1.5 :\n')
disp(y(1:7,7))

fprintf('Option Price at t=3 :\n')
disp(y(1:13,13))

fprintf('Option Price at t=4.5 :\n')
disp(y(1:19,19))


function price = European_Call_2(S0,K,M,T,r,sigma)
    del_t = T/M;
    price = 0;
    u = exp(sigma*sqrt(del_t) + (r - 0.5*sigma*sigma)*del_t);
    d = u*exp(-2*sigma*sqrt(del_t));
    if(d < exp(r*del_t) && exp(r*del_t) < u)
        p = (exp(r*del_t) - d)/(u - d);
        q = 1 - p;
        ST = zeros(M+1,M+1);
        ST(1,1) = S0;
        for i=1:M
            for j=0:i
            ST(i+1,j+1) = S0*(u^(i-j))*(d^(j));
            end
        end
        
        price = zeros(M+1,M+1);
        price(M+1,:) = max(ST(M+1,:) - K,0);
        for i=M-1:-1:0
            for j=0:i
            price(i+1,j+1) = exp(-r*del_t)*(p*price(i+2,j+1)+q*price(i+2,j+2));
            end
        end
    else
        fprintf('Arbitrage in the market\n\n');
    end
    
    
end

function price = European_Put_2(S0,K,M,T,r,sigma)
    del_t = T/M;
    price = 0;
    u = exp(sigma*sqrt(del_t) + (r - 0.5*sigma*sigma)*del_t);
    d = u*exp(-2*sigma*sqrt(del_t));
    if(d < exp(r*del_t) && exp(r*del_t) < u)
        p = (exp(r*del_t) - d)/(u - d);
        q = 1 - p;
        ST = zeros(M+1,M+1);
        ST(1,1) = S0;
        for i=1:M
            for j=0:i
            ST(i+1,j+1) = S0*(u^(i-j))*(d^(j));
            end
        end
        
        price = zeros(M+1,M+1);
        price(M+1,:) = max(K - ST(M+1,:),0);
        for i=M-1:-1:0
            for j=0:i
            price(i+1,j+1) = exp(-r*del_t)*(p*price(i+2,j+1)+q*price(i+2,j+2));
            end
        end
    else
        fprintf('Arbitrage in the market\n\n');
    end
    
    
end