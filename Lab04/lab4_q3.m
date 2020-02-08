stock_ticker = ["ADBE","BIIB","CMG","EA","FB","GOOG",...
    "IT","MNST","NFLX","UAA"];
ret = zeros(61,10);

for i=1:length(stock_ticker)
    price_dir = strcat('stock_prices','/',stock_ticker(i),'.csv');
    s = readtable(price_dir);
    stock_ret = (s.Close - s.Open);
    stock_ret = stock_ret./(s.Open);
    ret(:,i) = stock_ret;
end

C = cov(ret);
[mu w sigma w_min] = eff_frontier(M,V,100);
sd_min = sqrt(w_min'*V*w_min1); 
mu_min = w_min'*M;

ind_above_min = (mu > mu_min) ;	%	Indicates efficient horizon
ind_below_min = (mu < mu_min) ;	%	Indicates locus below efficient horizon
 


%	Create plot - efficient horizon is shown as a solid curve
%		-  the inefficient part of the locus is dashed
figure(1)
p1 = plot(sigma(ind_above_min),mu(ind_above_min),'-',sigma(ind_below_min),mu(ind_below_min),'--' ,sd_min,mu_min,'.') ;
set(p1(1:2),'linewidth',2) ;
set(p1(1:2),'color','blue') ;
set(p1(3),'markersize',15) ;
set(p1(3),'color','red') ;

function [mu w_for_mu sigma w_g] = eff_frontier(M,V,points)
Vinv = inv(V);
e = ones(length(M),1);
A = e'*Vinv*e;
B = M'*Vinv*e;
C = M'*Vinv*M;
D = A*C - B^2;

bg = (C*Vinv*e - B*Vinv*M)/D;
bh = (A*Vinv*M - B*Vinv*e)/D;
mu = linspace(min(M),max(M),points);
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
