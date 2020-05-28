clc
clf
warning('off','all')
close all

drift = 0.1;
sigma = 0.2;
r = 0.05;

StockPrice = gbm(drift,sigma,'StartState',100);
nPeriods = 252/2;  % # of simulated observations = 252 trading days /2 for six months
dt = 1/nPeriods;      % time increment = 1 day = 1/252 year
nTrials = 10;

[Paths,Times] = StockPrice.simulate(nPeriods,'DeltaTime',dt,'nTrials',nTrials);
figure;
hold on;
for i=1:size(Paths,3)
    plot(126*Times,Paths(:,1,i));    
end
xlabel('Time (days)');
ylabel('Simulated Stock Price');
title('Stock Price in Real World');

% Risk Neutral Stock Price
StockPrice = gbm(r,sigma,'StartState',100);
[Paths,Times] = StockPrice.simulate(nPeriods,'DeltaTime',dt,'nTrials',nTrials);
figure;
hold on;
for i=1:size(Paths,3)
    plot(126*Times,Paths(:,1,i));    
end
xlabel('Time (days)');
ylabel('Simulated Stock Price');
title('Stock Price in Risk-Neutral World');

% Estimating Asian Option using Monte-Carlo Methods
% Taking 1000 different paths for estimation
nTrials = 1000;
Call_sum = 0;
Put_sum = 0;
[Paths,Times] = StockPrice.simulate(nPeriods,'DeltaTime',dt,'nTrials',nTrials);
T = 126/252; %six months
K = [90,105,110];
fprintf('Asian call options with S0 = 100, r = 0.05, σ= 0.2,number of trials = 1000\n');
fprintf('K\tCall Option\tPut Option\n');
for i=1:size(K,2)
    Call_sum = 0;
    Put_sum = 0;
    for path=1:nTrials
        Call_sum = Call_sum + max(0,mean(Paths(:,1,path)) - K(i));
        Put_sum = Put_sum + max(0,K(i) - mean(Paths(:,1,path)));
    end
Asian_call = exp(-r*T)*(Call_sum/nTrials);
Asian_put = exp(-r*T)*(Put_sum/nTrials);
fprintf('%d\t%0.4f\t\t%0.4f\n',K(i),Asian_call,Asian_put);
end
% 
% % Varying strike Price K
K = [80:2.5:120];
for i=1:size(K,2)
    Call_sum = 0;
    Put_sum = 0;
    
    for path=1:nTrials
        Call_sum = Call_sum + max(0,mean(Paths(:,1,path)) - K(i));
        Put_sum = Put_sum + max(0,K(i) - mean(Paths(:,1,path)));
    end
Asian_call(i) = exp(-r*T)*(Call_sum/nTrials);
Asian_put(i) = exp(-r*T)*(Put_sum/nTrials);
end
figure; hold on;
plot(K,Asian_call);
plot(K,Asian_put);
hold off;
title('Sensitivity wrt to Strike Price K');
ylabel('Option Price');
xlabel('K');
legend('Call','Put');

% % %Varying S0
K = 105;
S0 = [80:2.5:120];
for i=1:size(S0,2)
    Call_sum = 0;
    Put_sum = 0;
    StockPrice = gbm(r,sigma,'StartState',S0(i));
    [Paths,Times] = StockPrice.simulate(nPeriods,'DeltaTime',dt,'nTrials',nTrials);
    for path=1:nTrials
        Call_sum = Call_sum + max(0,mean(Paths(:,1,path)) - K);
        Put_sum = Put_sum + max(0,K - mean(Paths(:,1,path)));
    end
Asian_call(i) = exp(-r*T)*(Call_sum/nTrials);
Asian_put(i) = exp(-r*T)*(Put_sum/nTrials);
end
figure; hold on;
plot(S0,Asian_call);
plot(S0,Asian_put);
hold off;
title('Sensitivity wrt to Initial Stock Price S_0','Interpreter','tex');
ylabel('Option Price');
xlabel('S_0','Interpreter','tex');
legend('Call','Put');

% Varying sigma
K = 105;
S0 = 100;
sigma = [0.1:0.02:0.3];
Asian_call = [];
Asian_put = [];
for i=1:size(sigma,2)
    Call_sum = 0;
    Put_sum = 0;
    StockPrice = gbm(r,sigma(i),'StartState',S0);
    [Paths,Times] = StockPrice.simulate(nPeriods,'DeltaTime',dt,'nTrials',nTrials);
    for path=1:nTrials
        Call_sum = Call_sum + max(0,mean(Paths(:,1,path)) - K);
        Put_sum = Put_sum + max(0,K - mean(Paths(:,1,path)));
    end
Asian_call(i) = exp(-r*T)*(Call_sum/nTrials);
Asian_put(i) = exp(-r*T)*(Put_sum/nTrials);
end
figure; hold on;
plot(sigma,Asian_call);
plot(sigma,Asian_put);
hold off;
title('Sensitivity wrt to volatility \sigma','Interpreter','tex');
ylabel('Option Price');
xlabel('\sigma','Interpreter','tex');
legend('Call','Put');


