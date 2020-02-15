warning('off','all');
clear all;
clc;
clf;
stock_ticker = ["ARTL","HDFC","ICICI","MARUTI","NSTL","REL","SBIN","TCS","TSTL","TTN"];
s = readtable(strcat('bsedata1/',stock_ticker(1),'.csv'));
data_points = size(s,1);
ret = zeros(data_points-1,10);
M = zeros(10,1);
rf = 0.05;
e1 = ones(data_points-1,1);
time = [1/12:1/12:1/12*(data_points-1)]';
cur_folder = 'bsedata1/';
for i=1:length(stock_ticker)
    price_dir = strcat('bsedata1/',stock_ticker(i),'.csv');
    s = readtable(price_dir);
    stock_ret = (s.ClosePrice(2:end) - s.OpenPrice(1))./s.OpenPrice(1);
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

figure;
p1 = plot(sigma(ind_above_min),mu(ind_above_min),'-',sigma(ind_below_min),mu(ind_below_min),'--' ,sd_min,mu_min,'.') ;
hold on;
set(p1(1:2),'linewidth',2) ;
set(p1(1:2),'color','blue') ;
set(p1(3),'markersize',15) ;
set(p1(3),'color','red') ;
xlabel('Standard Deviation');
ylabel('Annual return');
title('Efficient Frontier for BSE SENSEX 50');

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
figure;


%%%%NSE data%%%%%%
stock_ticker = ["BAJFINANCE.NS","CIPLA.NS","COALINDIA.NS","GAIL.NS","HEROMOTOCO.NS","ICICIBANK.NS",...,
    "ITC.NS","MARUTI.NS","ONGC.NS","TITAN.NS"];
s = readtable(strcat('nsedata1/',stock_ticker(1),'.csv'));
data_points = size(s,1);
ret = zeros(data_points-1,10);
M = zeros(10,1);
rf = 0.05;
e1 = ones(data_points-1,1);
time = [1/12:1/12:1/12*(data_points-1)]';
cur_folder = 'nsedata1/';
tit = 'Efficient Frontier for NSE NIFTY';
CAPM(stock_ticker,cur_folder,M,rf,e1,time,tit);


%%%%STOCKS NOT IN INDEX%%%%%%%%
stock_ticker = ["ACC.NS","BIOCON.NS","BOSCHLTD.NS","HINDPETRO.NS","LUPIN.NS","MRF.NS",...,
    "PNB.NS","TATACHEM.NS","VOLTAS.NS","YESBANK.NS"];
s = readtable(strcat('nonindex_stocks/',stock_ticker(1),'.csv'));
data_points = size(s,1);
ret = zeros(data_points-1,10);
M = zeros(10,1);
rf = 0.05;
e1 = ones(data_points-1,1);
time = [1/12:1/12:1/12*(data_points-1)]';
cur_folder = 'nonindex_stocks/';
tit = 'Efficient Frontier for non-index stocks';
CAPM(stock_ticker,cur_folder,M,rf,e1,time,tit);

%%%%Security Market Line for index%%%%%
s = readtable(strcat('bsedata1/','^BSESN','.csv'));
data_points = size(s,1);
rf = 0.05;
e1 = ones(data_points-1,1);
time = [1/12:1/12:1/12*(data_points-1)]';
stock_ret = (s.Close(2:end) - s.Open(1))./s.Open(1);
annual_ret = (stock_ret+1).^((e1./time)) - 1; 
ret_index = annual_ret;
mu_market = mean(annual_ret);
tit = 'Security Market Line BSE Sensex 50';
security_market_line(mu_market,rf,tit);

s = readtable(strcat('nsedata1/','^NSEI','.csv'));
data_points = size(s,1);
rf = 0.05;
e1 = ones(data_points-1,1);
time = [1/12:1/12:1/12*(data_points-1)]';
stock_ret = (s.Close(2:end) - s.Open(1))./s.Open(1);
annual_ret = (stock_ret+1).^((e1./time)) - 1; 
ret_index = annual_ret;
mu_market = mean(annual_ret);
tit = 'Security Market Line NSE NIFTY';
security_market_line(mu_market,rf,tit);


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
function CAPM(stock_ticker,cur_folder,M,rf,e1,time,tit)
    for i=1:length(stock_ticker)
        price_dir = strcat(cur_folder,stock_ticker(i),'.csv');
        s = readtable(price_dir);
        stock_ret = (s.Close(2:end) - s.Open(1))./s.Open(1);
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

    figure;
    p1 = plot(sigma(ind_above_min),mu(ind_above_min),'-',sigma(ind_below_min),mu(ind_below_min),'--' ,sd_min,mu_min,'.') ;
    hold on;
    set(p1(1:2),'linewidth',2) ;
    set(p1(1:2),'color','blue') ;
    set(p1(3),'markersize',15) ;
    set(p1(3),'color','red') ;
    xlabel('Standard Deviation');
    ylabel('Annual return');
    title(tit);

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
end

function security_market_line(mu_market,rf,tit)
figure;
line([-1 1],[(rf + (mu_market-rf)*-1) (rf+(mu_market-rf))]);

 title(tit);
 xlabel('Beta');
 ylabel('Mean return');
end

