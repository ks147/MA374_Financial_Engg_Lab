warning('off','all');
clear all;
clc;
clf;
stock_ticker = ["ADBE","BIIB","CMG","EA","FB","GOOG",...
    "IT","MNST","NFLX","UAA"];
ret = zeros(60,10);
M = zeros(10,1);
rf = 0.05;
e1 = ones(60,1);
time = [1/12:1/12:5]';

for i=1:length(stock_ticker)
    price_dir = strcat('stock_prices','/',stock_ticker(i),'.csv');
    s = readtable(price_dir);
    stock_ret = (s.Close(2:61) - s.Open(1))./s.Open(1);
    annual_ret = (stock_ret+1).^((e1./time)) - 1; 
    ret(:,i) = annual_ret;
    M(i) = mean(annual_ret);
end

C = cov(ret);


[mu w sigma w_min] = eff_frontier(M,C,100);
sd_min = sqrt(w_min'*C*w_min); 
mu_min = w_min'*M;

ind_above_min = (mu > mu_min) ;	%	Indicates efficient horizon
ind_below_min = (mu < mu_min) ;	%	Indicates locus below efficient horizon

figure(1)
p1 = plot(sigma(ind_above_min),mu(ind_above_min),'-',sigma(ind_below_min),mu(ind_below_min),'--' ,sd_min,mu_min,'.') ;
hold on;
set(p1(1:2),'linewidth',2) ;
set(p1(1:2),'color','blue') ;
set(p1(3),'markersize',15) ;
set(p1(3),'color','red') ;
xlabel('Standard Deviation');
ylabel('Annual return');
title('Efficient Frontier using Historical Data');

% Market Portfolio
e = ones(length(M),1);
Cinv = inv(C);
%My market portfolio has negative risk xD
W_market = Cinv*(M-rf*e)/sum(Cinv*(M-rf*e));
mu_market = W_market'*M;
sig_market = sqrt(W_market'*C*W_market);
y_max = max(M);
x_max = sig_market+sig_market*(y_max-mu_market)/(mu_market-rf);
line([0 sig_market],[rf mu_market],'Color','green');
plot([0 sig_market],[rf mu_market],'.','color','green','markersize',15);
legend({'Effecient Frontier','min return','min variance','CAPM'},'location','northwest');
hold off;

fprintf('Market Portfolio has return=%0.3f and risk=%0.3f\n',mu_market,sig_market);

security_market_line(M,rf);

function [mu w_for_mu sigma w_g] = eff_frontier(M,V,points)
Vinv = inv(V);
e = ones(length(M),1);
A = e'*Vinv*e;
B = M'*Vinv*e;
C = M'*Vinv*M;
D = A*C - B^2;

bg = (C*Vinv*e - B*Vinv*M)/D;
bh = (A*Vinv*M - B*Vinv*e)/D;
mu = linspace(-2.7,2.0,points);
sigma = zeros(1,points);
w_for_mu = zeros(length(M),points);
for i=1:points
    w_for_mu(:,i) = bg + bh*mu(i);
    sigma(i) = sqrt(w_for_mu(:,i)'*V*w_for_mu(:,i));
end
%Minimum Variance Portfolio weights and sigma    
sd_min = 1/sqrt(A); 
mu_min = B/A;
w_g = Vinv*e/A;


end
function security_market_line(M,rf)
figure;
    for i=1:length(M)
        line([-1 1],[(rf + (M(i)-rf)) (rf-(M(i)-rf))]);
    end
 title('Security Market Line');
 xlabel('Beta');
 ylabel('Mena return');
end

