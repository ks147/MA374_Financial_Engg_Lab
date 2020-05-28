clc
clf
warning('off','all')
close all
fprintf('Calculating Historical Volatility for selected stocks in bsedata1\n');
ticker = {'IOC','ITC','MAR','REL','SBI'};
directory = strcat('bsedata1');
HistVolatility(ticker,directory);

fprintf('Histrical Volatility of bse index\n');
ticker = {'bseindex'};
directory = strcat('bsedata1');
HistVolatility(ticker,directory);

fprintf('Calculating Historical Volatility for selected stocks in nsedata1\n');
ticker = {'BHARTIARTL.NS','CIPLA.NS','WIPRO.NS','YESBANK.NS','TATASTEEL.NS'};
directory = strcat('nsedata1');
HistVolatility(ticker,directory);

fprintf('Calculating Historical Volatility for nse index\n');
ticker = {'nseindex'};
directory = strcat('nsedata1');
HistVolatility(ticker,directory);




function HistVolatility(ticker,directory)
stocks = zeros(1000,length(ticker));
log_diff = zeros(999,length(ticker));

fprintf('(a)\n');
fprintf('Stock\tHistorical Volatility\n');
for i=1:length(ticker)
    price_dir = strcat(directory,'/',ticker{i},'.csv');
    s = readtable(price_dir);
    adjusted = s.ClosePrice(1:1000);
    stocks(:,i) = adjusted;
    log_diff(:,i) =  log(adjusted(1:end-1)./adjusted(2:end));
    hist_vol_one_month(i) = sqrt(var(log_diff(1:22,i)))*sqrt(252);
    fprintf('%s\t%0.3f\n',ticker{i},hist_vol_one_month(i));    
end
% (b) (c) six month BSM call/Put
% calculating Volatility for six months 
t = [1 22 42 63 81 102 124];
hist_vol_6month = zeros(6,length(ticker));
for i=2:length(t)
    hist_vol_6month(i-1,:) = sqrt(var(log_diff(t(i-1):t(i),:)))*sqrt(252);
end

for i=1:length(ticker)
   for p = 1:6
       sigma = hist_vol_6month(p,i);
       S0 = stocks(t(p+1)+1,i);
       A = [0.5:0.5:1.5];
       for j=1:3
           K = S0*A(j);
           C(j,p) = BSM_Call(S0,0,(t(p+1)+1)/252,0.05,K,sigma);
           P(j,p) = BSM_Put(S0,0,(t(p+1)+1)/252,0.05,K,sigma);
       end
   end
   figure;
   hold on;
   for j=1:3
    plot(t(2:end),C(j,:));
   end
   tit = sprintf('Call Price vs length of period for stock:%s',ticker{i});
   title(tit);
   xlabel('Time period');
   ylabel('Option price');
   hold off;
   figure;
   hold on;
   for j=1:3
    plot(t(2:end),P(j,:));
   end
   tit = sprintf('Put Price vs length of period for stock:%s',ticker{i});
   title(tit);
   xlabel('Time period');
   ylabel('Option price');
   hold off;
   figure;
   plot(t(2:end),hist_vol_6month(:,i));
   tit = sprintf('Volatility vs period length for stock:%s',ticker{i});
   title(tit);
   xlabel('Time period');
   ylabel('Volatility');
end
end
function ans = BSM_Call(s,t,T,r,K,sigma)
d_plus = (log(s/K) + (T-t)*(r+0.5*sigma*sigma))/(sigma*sqrt(T-t));
d_minus = d_plus - sigma*sqrt(T-t);
ans = s*normcdf(d_plus) - K*normcdf(d_minus)*exp(-r*(T-t));

end
function ans = BSM_Put(s,t,T,r,K,sigma)
% Put - call parity
ans = K*exp(-r*(T-t)) - s + BSM_Call(s,t,T,r,K,sigma);
end
