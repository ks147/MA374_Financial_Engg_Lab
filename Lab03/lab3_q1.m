S0 = 100;
K = 100;
M = 100;
T = 1;
r = 0.08;
sigma = 0.2;
del_t = T/M;
American_Call(S0,K,M,T,r,sigma)

clc;
warning('off','all');
S0 = 100;
K = 100;
T = 1;
M = 100;
r = 0.08;
sigma = 0.2;

X = [];
Y = [];
Z = [];
W = [];
j = 1;

for i=50:10:150
    X(j) = i;
    Y(j) = American_Call(i,K,M,T,r,sigma);
    Z(j) = i;
    W(j) = American_Put(i,K,M,T,r,sigma);
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
for i=50:5:150
    X(j) = i;
    Y(j) = American_Call(S0,i,M,T,r,sigma);
    Z(j) = i;
    W(j) = American_Put(S0,i,M,T,r,sigma);
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
 for i=50:5:150
    X(j) = i;
    Y(j) = American_Call(S0,K,i,T,r,sigma);
    Z(j) = i;
    W(j) = American_Put(S0,K,i,T,r,sigma);
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
 for i=50:5:150
    X(j) = i;
    Y(j) = American_Call(S0,K,i,T,r,sigma);
    Z(j) = i;
    W(j) = American_Put(S0,K,i,T,r,sigma);
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
 for i=50:5:150
    X(j) = i;
    Y(j) = American_Call(S0,K,i,T,r,sigma);
    Z(j) = i;
    W(j) = American_Put(S0,K,i,T,r,sigma);
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
    Y(j) = American_Call(S0,K,M,T,i,sigma);
    Z(j) = i;
    W(j) = American_Put(S0,K,M,T,i,sigma);
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
    Y(j) = American_Call(S0,K,M,T,r,i);
    Z(j) = i;
    W(j) = American_Put(S0,K,M,T,r,i);
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
   

function price = American_Call(S0,K,M,T,r,sigma)
    del_t = T/M;
    u = exp(sigma*sqrt(del_t) + (r-0.5*sigma*sigma)*del_t);
    d = exp(-sigma*sqrt(del_t) + (r-0.5*sigma*sigma)*del_t);
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

function price = American_Put(S0,K,M,T,r,sigma)
    del_t = T/M;
    u = exp(sigma*sqrt(del_t) + (r-0.5*sigma*sigma)*del_t);
    d = exp(-sigma*sqrt(del_t) + (r-0.5*sigma*sigma)*del_t);
    price = 0;
    p = (exp(r*del_t) - d)/(u - d);
    q = 1 - p;
    V = zeros(M+1,M+1);
    for i=M:-1:0
        for j=0:i
        S = S0*u^(i-j)*d^(j); %Current stock price
            if i==M
                V(j+1,i+1) = max(K - S,0);
            else
                V(j+1,i+1) = max(exp(-r*del_t)*(p*V(j+1,i+2)+q*V(j+2,i+2)),K - S);
            end
        end
    end
     price = V(1,1);   
end
