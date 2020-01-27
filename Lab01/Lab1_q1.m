clc;
S0 = 100;
K = 105;
T = 5;
r = 0.05;
sigma = 0.3;


M = [1,5,10,20,50,100,200,400];
for i=1:length(M)
    fprintf('Call Option Price at t=0 for M=%d = %.5f\n',M(i),European_Call(S0,K,M(i),T,0,r,sigma));
end
fprintf('\n\n');
for i=1:length(M)
    fprintf('Put Option Price at t=0 for M=%d = %.5f\n',M(i),European_Put(S0,K,M(i),T,0,r,sigma));
end



