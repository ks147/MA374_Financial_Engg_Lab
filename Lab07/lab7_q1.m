clc;
clf;
close all;

T = 1;
K = 1;
r = 0.05;
sigma = 0.6;
i = 1;
% 2-d plot of c(t,s),p(t,s) as a function of s
for t = 0.2:0.2:1
    i = 1;
    X = [];
    Y = [];
    Z = [];
    for s = 0.5:0.01:1.5
      X(i) = s;
      Y(i) = C(s,t,T,r,K,sigma);
      Z(i) = P(s,t,T,r,K,sigma);
      i = i+1;
    end
    figure;
    hold on;
    plot(X,Y);
    xlabel('s');
    ylabel('C(s,t)');
    s = sprintf('s vs C(s,t) and P(s,t) for t=%0.2f',t);
    title(s);
    plot(X,Z);
    legend('C(s,t)','P(s,t)');
    hold off;

end

% 3-D plot (s,t,C(s,t)) and (s,t,P(s,t))
X = [];
W = [];
i = 1;
for t = 0.1:0.05:1
    j = 1;
    for s = 0.5:0.01:1.5
      Y(i,j) = C(s,t,T,r,K,sigma);
      Z(i,j) = P(s,t,T,r,K,sigma);
     j = j+1;
    end
    i = i+1;
   
end
figure;
surf([0.5:0.01:1.5],[0.1:0.05:1],Y);
xlabel('Stock Price');
ylabel('t');
zlabel('C(s,t)');

figure;
surf([0.5:0.01:1.5],[0.1:0.05:1],Z);
xlabel('Stock Price');
ylabel('t');
zlabel('P(s,t)');

%2-d graphs for other parameters

T = 1;K = 1;r = 0.05;sigma = 0.6;s = 1;t = 0;
Y = [];
Z = [];
j = 1;
for K = 0.5:0.01:1.5
    Y(j) = C(s,t,T,r,K,sigma);
    Z(j) = P(s,t,T,r,K,sigma);
    j = j+1;
end

figure;
hold on;
plot([0.5:0.01:1.5],Y);
plot([0.5:0.01:1.5],Z);
xlabel('K');
title('K vs option price');
legend('C(s,t)','P(s,t)');

% r vs C(s,t)
T = 1;K = 1;r = 0.05;sigma = 0.6;s = 0.95;t = 0;
Y = [];
Z = [];
j = 1;
for r = 0.01:0.001:0.1
    Y(j) = C(s,t,T,r,K,sigma);
    Z(j) = P(s,t,T,r,K,sigma);
    j = j+1;
end

figure;
hold on;
plot([0.01:0.001:0.1],Y);
plot([0.01:0.001:0.1],Z);
xlabel('r');
title('r vs option price');
legend('C(s,t)','P(s,t)');

% sigma vs C(s,t)
T = 1;K = 1;r = 0.05;sigma = 0.6;s = 1.05;t = 0;
Y = [];
Z = [];
j = 1;
for sigma = 0.1:0.01:0.8
    Y(j) = C(s,t,T,r,K,sigma);
    Z(j) = P(s,t,T,r,K,sigma);
    j = j+1;
end

figure;
hold on;
plot([0.1:0.01:0.8],Y);
plot([0.1:0.01:0.8],Z);
xlabel('sigma');
title('sigma vs option price');
legend('C(s,t)','P(s,t)');



function ans = C(s,t,T,r,K,sigma)
d_plus = (log(s/K) + (T-t)*(r+0.5*sigma*sigma))/(sigma*sqrt(T-t));
d_minus = d_plus - sigma*sqrt(T-t);
ans = s*normcdf(d_plus) - K*normcdf(d_minus)*exp(-r*(T-t));

end
function ans = P(s,t,T,r,K,sigma);
% Put - call parity
ans = K*exp(-r*(T-t)) - s + C(s,t,T,r,K,sigma);
end