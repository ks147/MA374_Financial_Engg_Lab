warning('off','all');
clc;
S0 = 100;
K = 105;
T = 5;
r = 0.05;
sigma = 0.3;
X = [];
Y = [];
for i=1:400
    X(i) = i;
    Y(i) = European_Call(S0,K,i,T,0,r,sigma);
end
figure;
plot(X,Y);
title('European Call');
for i=1:80
    X(i) = 5*i;
    Y(i) = European_Call(S0,K,5*i,T,0,r,sigma);
end
figure;
plot(X,Y);
title('European Call');

%Put 
for i=1:400
    X(i) = i;
    Y(i) = European_Put(S0,K,i,T,0,r,sigma);
end
figure;
plot(X,Y);
title('European Put');
for i=1:80
    X(i) = 5*i;
    Y(i) = European_Put(S0,K,5*i,T,0,r,sigma);
end
figure;
plot(X,Y);
title('European Put');