clc;
warning('off','all');
S0 = 100;
K = 100;
T = 1;
M = 100;
r = 0.08;
sigma = 0.2;
for set = 1:2
X = [];
Y = [];
Z = [];
W = [];
j = 1;

for i=50:10:150
    X(j) = i;
    Y(j) = European_Call(i,K,M,T,r,sigma,set);
    Z(j) = i;
    W(j) = European_Put(i,K,M,T,r,sigma,set);
    j = j+1;
end
figure;
plot(X,Y);
title('option price vs Stock price');
xlabel('S(0)');
ylabel('option price');

hold on;
yyaxis right
plot(Z,W);
legend('Call Price','Put price');

j = 1;
for i=50:10:150
    X(j) = i;
    Y(j) = European_Call(S0,i,M,T,r,sigma,set);
    Z(j) = i;
    W(j) = European_Put(S0,i,M,T,r,sigma,set);
    j = j+1;
end
figure;
plot(X,Y);
title('Option price vs K');
xlabel('K');
ylabel('option price');
hold on;
yyaxis right
plot(Z,W);
legend('Call Price','Put price');


K = 95;
j = 1;
 for i=50:10:150
    X(j) = i;
    Y(j) = European_Call(S0,K,i,T,r,sigma,set);
    Z(j) = i;
    W(j) = European_Put(S0,K,i,T,r,sigma,set);
    j = j+1;
 end

figure;
plot(X,Y);
title(sprintf('European Call price vs number of sub-intervals for K = %d',K));
xlabel('M');
ylabel('option price');
hold on;
yyaxis right
plot(Z,W);
legend('Call Price','Put Price');


K = 100;
j = 1;
 for i=50:10:150
    X(j) = i;
    Y(j) = European_Call(S0,K,i,T,r,sigma,set);
    Z(j) = i;
    W(j) = European_Put(S0,K,i,T,r,sigma,set);
    j = j+1;
 end

figure;
plot(X,Y);
title(sprintf('European Call price vs number of sub-intervals for K = %d',K));
xlabel('M');
ylabel('option price');
hold on;
yyaxis right
plot(Z,W);
legend('Call Price','Put Price');

K = 105;
j = 1;
 for i=50:10:150
    X(j) = i;
    Y(j) = European_Call(S0,K,i,T,r,sigma,set);
    Z(j) = i;
    W(j) = European_Put(S0,K,i,T,r,sigma,set);
    j = j+1;
 end

figure;
plot(X,Y);
title(sprintf('European Call price vs number of sub-intervals for K = %d',K));
xlabel('M');
ylabel('option price');
hold on;
yyaxis right
plot(Z,W);
legend('Call Price','Put Price');


X = [];
Y = [];
Z = [];
W = [];
j = 1;
for i=0.05:0.01:0.10
    X(j) = i;
    Y(j) = European_Call(S0,K,M,T,i,sigma,set);
    Z(j) = i;
    W(j) = European_Put(S0,K,M,T,i,sigma,set);
    j = j+1;
 end

figure;
plot(X,Y);
title('Option price vs interest rate');
xlabel('interest rate');
ylabel('option price');
hold on;
yyaxis right;
plot(Z,W);
legend('Call Price','Put Price');

X = [];
Y = [];
Z = [];
W = [];
j = 1;
for i=0.1:0.01:0.3
    X(j) = i;
    Y(j) = European_Call(S0,K,M,T,r,i,set);
    Z(j) = i;
    W(j) = European_Put(S0,K,M,T,r,i,set);
    j = j+1;
 end

figure;
plot(X,Y);
title('Option price vs sigma');
xlabel('sigma');
ylabel('option price');
hold on;
yyaxis right;
plot(Z,W);
legend('Call Price','Put Price');

end


    


function price = European_Call(S0,K,M,T,r,sigma,set)
    del_t = T/M;
    price = 0;
    if set == 2
        u = exp(sigma*sqrt(del_t) + (r - 0.5*sigma*sigma)*del_t);
        d = u*exp(-2*sigma*sqrt(del_t));
    else
        u = exp(sigma*del_t);
        d = exp(-sigma*del_t);
    end
    if(d < exp(r*del_t) && exp(r*del_t) < u)
        p = (exp(r*del_t) - d)/(u - d);
        q = 1 - p;
        ST = [];
        for i=0:M
            ST(i+1) = S0*(u^i)*(d^(M-i));
        end
        VT = max(ST - K,0);
        for i=0:M
            price = price+exp(-r*(T))*nchoosek(M,i)*(p^i)*(q^(M-i))*VT(i+1);
        end
    else
        fprintf('Arbitrage in the market\n\n');
    end
    
    
end

function price = European_Put(S0,K,M,T,r,sigma,set)
    del_t = T/M;
    price = 0;
    if set == 2
        u = exp(sigma*sqrt(del_t) + (r - 0.5*sigma*sigma)*del_t);
        d = u*exp(-2*sigma*sqrt(del_t));
    else
        u = exp(sigma*del_t);
        d = exp(-sigma*del_t);
    end
    
    if(d < exp(r*del_t) && exp(r*del_t) < u)
        p = (exp(r*del_t) - d)/(u - d);
        q = 1 - p;
        ST = [];
        for i=0:M
            ST(i+1) = S0*(u^i)*(d^(M-i));
        end
        VT = max(K - ST,0);
        for i=0:M
            price = price+exp(-r*(T))*nchoosek(M,i)*(p^i)*(q^(M-i))*VT(i+1);
        end
     else
        fprintf('Arbitrage in the market\n\n');
     end
    
end