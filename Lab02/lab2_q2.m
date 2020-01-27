S0 = 100;
K = 100;
T = 1;
M = 10;
r = 0.08;
sigma = 0.2;
[call put] = Asian_Option(S0,K,M,T,r,sigma,1);
fprintf('Call = %f\nPut = %f\n',call,put);

X = [];
Y = [];
Z = [];
W = [];
j = 1;
set = 1;
for i=70:10:130
    X(j) = i;
    [Y(j) W(j)] = Asian_Option(i,K,M,T,r,sigma,set);
    Z(j) = i;
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
for i=70:1:130
    X(j) = i;
    [Y(j) W(j)] = Asian_Option(S0,i,M,T,r,sigma,set);
    Z(j) = i;
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
 for i=5:1:15
    X(j) = i;
    [Y(j) W(j)] = Asian_Option(S0,K,i,T,r,sigma,set);
    Z(j) = i;
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
 for i=5:1:15
    X(j) = i;
    [Y(j) W(j)] = Asian_Option(S0,K,i,T,r,sigma,set);
    Z(j) = i;
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
 for i=5:1:15
    X(j) = i;
    [Y(j) W(j)] = Asian_Option(S0,K,i,T,r,sigma,set);
    Z(j) = i;
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
    [Y(j) W(j)] = Asian_Option(S0,K,M,T,i,sigma,set);
    Z(j) = i;
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
for i=0.1:0.05:0.4
    X(j) = i;
    [Y(j) W(j)] = Asian_Option(S0,K,M,T,r,i,set);
    Z(j) = i;
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



function [call_price put_price] = Asian_Option(S0,K,M,T,r,sigma,part)
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
    
    call_vals=zeros(M+1,2^M);
    put_vals=zeros(M+1,2^M);
    
    for i=1:pow2(M)
        avg=0;
        iforavg=i;
        for j=M+1:-1:1
            avg=avg+ (stock_price(j,iforavg)/(M+1));
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
    
    call_price=call_vals(1,1);
    put_price=put_vals(1,1);
            
end