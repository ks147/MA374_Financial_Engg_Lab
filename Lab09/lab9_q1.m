clc
clf
warning('off','all')
close all
fprintf('Solving for niftyoptiondata\n');
directory = 'NIFTYoptiondata';
option_ticker = {'Call','Put'};
stock_ticker = 'NIFTY50_price';
plots(directory,option_ticker,stock_ticker);

fprintf('Solving for stockoptiondata\n');
fprintf('Stock taken is WIPRO\n');
directory = 'stockoptiondata';
option_ticker = {'Call','Put'};
stock_ticker = 'WIPRO_price';
plots(directory,option_ticker,stock_ticker);

function plots(directory,option_ticker,stock_ticker)
    fprintf('(a)\n');

    for i=1:length(option_ticker)
        price_dir = strcat(directory,'/',option_ticker{i},'.csv');
        s = readtable(price_dir);
        figure;
        scatter3(s.Expiry,s.StrikePrice,s.SettlePrice,'.');
        xlabel('Expiry Date'); ylabel('Strike Price'); zlabel('Option Price');
        tit = sprintf('Maturity vs Strike price vs Option Price: %s option',option_ticker{i});
        title(tit);
        figure;
        scatter(s.StrikePrice,s.SettlePrice,'.');
        xlabel('Strike Price'); ylabel('Option Price');
        tit = sprintf('Strike price vs Option Price: %s option',option_ticker{i});
        title(tit);
        figure;
        scatter(s.Expiry,s.SettlePrice,'.');
        xlabel('Option Price'); ylabel('Expiry Date');
        tit = sprintf('Maturity vs Option Price: %s option',option_ticker{i});
        title(tit);

    end

    fprintf('(b)\n');

    for j=1:length(option_ticker)
        price_dir = strcat(directory,'/',option_ticker{j},'.csv');
        s = readtable(price_dir);
        for i=1:size(s,1)
            K = s.StrikePrice(i);
            T = (datenum(s.Expiry(i))-datenum(s.Date(i)))/252;
            t = 0;
            r = 0.05;
            optionPrice = s.SettlePrice(i);
            S0 = s.StockPrice(i);
            if j==1
                fun = @(sigma) BSM_Call(S0,t,T,r,K,sigma) - optionPrice;
            else
                fun = @(sigma) BSM_Put(S0,t,T,r,K,sigma) - optionPrice;
            end
            implied_vol(i) = fzero(fun,0);
        end
        figure;
        scatter3(s.Expiry,s.StrikePrice,implied_vol,'.');
        xlabel('Expiry Date'); ylabel('Strike Price'); zlabel('Implied Volatility');
        tit = sprintf('Volatility vs Strike Price vs Expiry Date:%s option',option_ticker{j});
        title(tit);
    end

    fprintf('(c)\n');

    % Calculating historical volatility

    fprintf('Start Date\tEnd Date\tHistorical\tImpliedVolatility\n');
    for j=1:length(option_ticker)
        price_dir = strcat(directory,'/',option_ticker{j},'.csv');
        s = readtable(price_dir);
        for i=1:99:298
            stockprice_dir = strcat(directory,'/',stock_ticker,'.csv');
            t = readtable(stockprice_dir);
            adjusted = t.ClosePrice;
            log_diff =  log(adjusted(1:end-1)./adjusted(2:end));
            startdate = s.Date(i);
            enddate = s.Expiry(i);
            idx1 = 0;
            idx2 = 0;
            for k=1:size(t,1)
               if datenum(t.Date(k))==datenum(startdate) 
                   idx1 = k;
               end
               if datenum(t.Date(k))==datenum(enddate)
                   idx2 = k;
               end
            end
            hist_vol = sqrt(var(log_diff(idx1+1:idx2-1)))*sqrt(252);
            %Re-calculating implied volatility
            K = s.StrikePrice(i);
            T = (datenum(s.Expiry(i))-datenum(s.Date(i)))/252;
            r = 0.05;
            optionPrice = s.SettlePrice(i);
            S0 = s.StockPrice(i);
            if j==1
                fun = @(sigma) BSM_Call(S0,0,T,r,K,sigma) - optionPrice;
            else
                fun = @(sigma) BSM_Put(S0,0,T,r,K,sigma) - optionPrice;
            end
            implied_vol = fzero(fun,0.5);
            d1 = datestr(startdate);
            d2 = datestr(enddate);
            fprintf('%s\t%s\t%0.3f\t\t%0.3f\n',d1,d2,hist_vol,implied_vol);
        end
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